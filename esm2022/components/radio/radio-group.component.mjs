/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, forwardRef, Input, Output, PLATFORM_ID, Inject, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { from, fromEvent, merge, Subject } from 'rxjs';
import { filter, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { convertToBoolProperty } from '../helpers';
import { NB_DOCUMENT } from '../../theme.options';
import { NbRadioComponent } from './radio.component';
import * as i0 from "@angular/core";
/**
 * The `NbRadioGroupComponent` is the wrapper for `nb-radio` button.
 * It provides form bindings:
 *
 * ```html
 * <nb-radio-group [(ngModel)]="selectedOption">
 *   <nb-radio value="1">Option 1</nb-radio>
 *   <nb-radio value="2">Option 2</nb-radio>
 *   <nb-radio value="3">Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * Also, you can use `value` and `valueChange` for binding without forms.
 *
 * ```html
 * <nb-radio-group [(value)]="selectedOption">
 *   <nb-radio value="1">Option 1</nb-radio>
 *   <nb-radio value="2">Option 2</nb-radio>
 *   <nb-radio value="3">Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * Radio items name has to be provided through `name` input property of the radio group.
 *
 * ```html
 * <nb-radio-group name="my-radio-group">
 *   ...
 * </nb-radio-group>
 * ```
 *
 * You can change radio group status by setting `status` input.
 * @stacked-example(Statuses, radio/radio-statuses.component)
 *
 * Also, you can disable the whole group using `disabled` attribute.
 * @stacked-example(Disabled group, radio/radio-disabled-group.component)
 *
 * Radio group supports `ngModel` and reactive forms:
 * @stacked-example(Radio Group with forms, radio/radio-form.component)
 *
 * */
export class NbRadioGroupComponent {
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.updateValues();
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
        this.updateNames();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this._disabled = convertToBoolProperty(disabled);
        this.updateDisabled();
    }
    /**
     * Radio buttons status.
     * Possible values are `primary` (default), `success`, `warning`, `danger`, `info`.
     */
    get status() {
        return this._status;
    }
    set status(value) {
        if (this._status !== value) {
            this._status = value;
            this.updateStatus();
        }
    }
    constructor(hostElement, platformId, document) {
        this.hostElement = hostElement;
        this.platformId = platformId;
        this.document = document;
        this.destroy$ = new Subject();
        this.onChange = (value) => { };
        this.onTouched = () => { };
        this._status = 'basic';
        this.valueChange = new EventEmitter();
    }
    ngAfterContentInit() {
        // In case option 'name' isn't set on nb-radio component,
        // we need to set it's name right away, so it won't overlap with options
        // without names from other radio groups. Otherwise they all would have
        // same name and will be considered as options from one group so only the
        // last option will stay selected.
        this.updateNames();
        this.radios.changes
            .pipe(startWith(this.radios), 
        // 'changes' emit during change detection run and we can't update
        // option properties right of since they already was initialized.
        // Instead we schedule microtask to update radios after change detection
        // run is finished and trigger one more change detection run.
        switchMap((radios) => from(Promise.resolve(radios))), takeUntil(this.destroy$))
            .subscribe(() => this.updateAndSubscribeToRadios());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(value) {
        this.value = value;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    updateAndSubscribeToRadios() {
        this.updateValueFromCheckedOption();
        this.updateNames();
        this.updateValues();
        this.updateDisabled();
        this.updateStatus();
        this.subscribeOnRadiosValueChange();
        this.subscribeOnRadiosBlur();
    }
    updateNames() {
        if (this.radios) {
            this.radios.forEach((radio) => radio._setName(this.name));
        }
    }
    updateValues() {
        this.updateAndMarkForCheckRadios((radio) => radio.checked = radio.value === this.value);
    }
    updateDisabled() {
        if (typeof this.disabled !== 'undefined') {
            this.updateAndMarkForCheckRadios((radio) => radio.disabled = this.disabled);
        }
    }
    subscribeOnRadiosValueChange() {
        if (!this.radios || !this.radios.length) {
            return;
        }
        merge(...this.radios.map((radio) => radio.valueChange))
            .pipe(takeUntil(merge(this.radios.changes, this.destroy$)))
            .subscribe((value) => {
            this.writeValue(value);
            this.propagateValue(value);
        });
    }
    propagateValue(value) {
        this.valueChange.emit(value);
        this.onChange(value);
    }
    subscribeOnRadiosBlur() {
        const hasNoRadios = !this.radios || !this.radios.length;
        if (!isPlatformBrowser(this.platformId) || hasNoRadios) {
            return;
        }
        const hostElement = this.hostElement.nativeElement;
        fromEvent(hostElement, 'focusin')
            .pipe(filter(event => hostElement.contains(event.target)), switchMap(() => merge(fromEvent(this.document, 'focusin'), fromEvent(this.document, 'click'))), filter(event => !hostElement.contains(event.target)), takeUntil(merge(this.radios.changes, this.destroy$)))
            .subscribe(() => this.onTouched());
    }
    updateStatus() {
        this.updateAndMarkForCheckRadios((radio) => radio.status = this.status);
    }
    updateAndMarkForCheckRadios(updateFn) {
        if (this.radios) {
            this.radios.forEach((radio) => {
                updateFn(radio);
                radio._markForCheck();
            });
        }
    }
    updateValueFromCheckedOption() {
        const checkedRadio = this.radios.find((radio) => radio.checked);
        const isValueMissing = this.value === undefined || this.value === null;
        if (checkedRadio && isValueMissing && checkedRadio.value !== this.value) {
            this.value = checkedRadio.value;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbRadioGroupComponent, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }, { token: NB_DOCUMENT }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: NbRadioGroupComponent, selector: "nb-radio-group", inputs: { value: "value", name: "name", disabled: "disabled", status: "status" }, outputs: { valueChange: "valueChange" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => NbRadioGroupComponent),
                multi: true,
            },
        ], queries: [{ propertyName: "radios", predicate: NbRadioComponent, descendants: true }], ngImport: i0, template: `
    <ng-content select="nb-radio"></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbRadioGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-radio-group',
                    template: `
    <ng-content select="nb-radio"></ng-content>`,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => NbRadioGroupComponent),
                            multi: true,
                        },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DOCUMENT]
                }] }], propDecorators: { value: [{
                type: Input
            }], name: [{
                type: Input
            }], disabled: [{
                type: Input
            }], status: [{
                type: Input
            }], radios: [{
                type: ContentChildren,
                args: [NbRadioComponent, { descendants: true }]
            }], valueChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL3JhZGlvL3JhZGlvLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUVMLE1BQU0sRUFFTixXQUFXLEVBQ1gsTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUscUJBQXFCLEVBQWtCLE1BQU0sWUFBWSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFckQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXVDSztBQWNMLE1BQU0sT0FBTyxxQkFBcUI7SUFNaEMsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFVO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FB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NURWLHFCQUFxQixvS0FUckI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNwRCxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0YsaURBd0RnQixnQkFBZ0IsZ0RBaEV2QjtnREFDb0M7OzJGQVVuQyxxQkFBcUI7a0JBYmpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFO2dEQUNvQztvQkFDOUMsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHNCQUFzQixDQUFDOzRCQUNwRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OzBCQTRESSxNQUFNOzJCQUFDLFdBQVc7OzBCQUNsQixNQUFNOzJCQUFDLFdBQVc7eUNBckRqQixLQUFLO3NCQURSLEtBQUs7Z0JBV0YsSUFBSTtzQkFEUCxLQUFLO2dCQVdGLFFBQVE7c0JBRFgsS0FBSztnQkFnQkYsTUFBTTtzQkFEVCxLQUFLO2dCQVlvRCxNQUFNO3NCQUEvRCxlQUFlO3VCQUFDLGdCQUFnQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtnQkFFOUMsV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFBMQVRGT1JNX0lELFxuICBJbmplY3QsXG4gIEVsZW1lbnRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZnJvbSwgZnJvbUV2ZW50LCBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sUHJvcGVydHksIE5iQm9vbGVhbklucHV0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBOQl9ET0NVTUVOVCB9IGZyb20gJy4uLy4uL3RoZW1lLm9wdGlvbnMnO1xuaW1wb3J0IHsgTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cyB9IGZyb20gJy4uL2NvbXBvbmVudC1zdGF0dXMnO1xuaW1wb3J0IHsgTmJSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vcmFkaW8uY29tcG9uZW50JztcblxuLyoqXG4gKiBUaGUgYE5iUmFkaW9Hcm91cENvbXBvbmVudGAgaXMgdGhlIHdyYXBwZXIgZm9yIGBuYi1yYWRpb2AgYnV0dG9uLlxuICogSXQgcHJvdmlkZXMgZm9ybSBiaW5kaW5nczpcbiAqXG4gKiBgYGBodG1sXG4gKiA8bmItcmFkaW8tZ3JvdXAgWyhuZ01vZGVsKV09XCJzZWxlY3RlZE9wdGlvblwiPlxuICogICA8bmItcmFkaW8gdmFsdWU9XCIxXCI+T3B0aW9uIDE8L25iLXJhZGlvPlxuICogICA8bmItcmFkaW8gdmFsdWU9XCIyXCI+T3B0aW9uIDI8L25iLXJhZGlvPlxuICogICA8bmItcmFkaW8gdmFsdWU9XCIzXCI+T3B0aW9uIDM8L25iLXJhZGlvPlxuICogPC9uYi1yYWRpby1ncm91cD5cbiAqIGBgYFxuICpcbiAqIEFsc28sIHlvdSBjYW4gdXNlIGB2YWx1ZWAgYW5kIGB2YWx1ZUNoYW5nZWAgZm9yIGJpbmRpbmcgd2l0aG91dCBmb3Jtcy5cbiAqXG4gKiBgYGBodG1sXG4gKiA8bmItcmFkaW8tZ3JvdXAgWyh2YWx1ZSldPVwic2VsZWN0ZWRPcHRpb25cIj5cbiAqICAgPG5iLXJhZGlvIHZhbHVlPVwiMVwiPk9wdGlvbiAxPC9uYi1yYWRpbz5cbiAqICAgPG5iLXJhZGlvIHZhbHVlPVwiMlwiPk9wdGlvbiAyPC9uYi1yYWRpbz5cbiAqICAgPG5iLXJhZGlvIHZhbHVlPVwiM1wiPk9wdGlvbiAzPC9uYi1yYWRpbz5cbiAqIDwvbmItcmFkaW8tZ3JvdXA+XG4gKiBgYGBcbiAqXG4gKiBSYWRpbyBpdGVtcyBuYW1lIGhhcyB0byBiZSBwcm92aWRlZCB0aHJvdWdoIGBuYW1lYCBpbnB1dCBwcm9wZXJ0eSBvZiB0aGUgcmFkaW8gZ3JvdXAuXG4gKlxuICogYGBgaHRtbFxuICogPG5iLXJhZGlvLWdyb3VwIG5hbWU9XCJteS1yYWRpby1ncm91cFwiPlxuICogICAuLi5cbiAqIDwvbmItcmFkaW8tZ3JvdXA+XG4gKiBgYGBcbiAqXG4gKiBZb3UgY2FuIGNoYW5nZSByYWRpbyBncm91cCBzdGF0dXMgYnkgc2V0dGluZyBgc3RhdHVzYCBpbnB1dC5cbiAqIEBzdGFja2VkLWV4YW1wbGUoU3RhdHVzZXMsIHJhZGlvL3JhZGlvLXN0YXR1c2VzLmNvbXBvbmVudClcbiAqXG4gKiBBbHNvLCB5b3UgY2FuIGRpc2FibGUgdGhlIHdob2xlIGdyb3VwIHVzaW5nIGBkaXNhYmxlZGAgYXR0cmlidXRlLlxuICogQHN0YWNrZWQtZXhhbXBsZShEaXNhYmxlZCBncm91cCwgcmFkaW8vcmFkaW8tZGlzYWJsZWQtZ3JvdXAuY29tcG9uZW50KVxuICpcbiAqIFJhZGlvIGdyb3VwIHN1cHBvcnRzIGBuZ01vZGVsYCBhbmQgcmVhY3RpdmUgZm9ybXM6XG4gKiBAc3RhY2tlZC1leGFtcGxlKFJhZGlvIEdyb3VwIHdpdGggZm9ybXMsIHJhZGlvL3JhZGlvLWZvcm0uY29tcG9uZW50KVxuICpcbiAqICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1yYWRpby1ncm91cCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmItcmFkaW9cIj48L25nLWNvbnRlbnQ+YCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOYlJhZGlvR3JvdXBDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5iUmFkaW9Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIHByb3RlY3RlZCBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByb3RlY3RlZCBvbkNoYW5nZSA9ICh2YWx1ZTogYW55KSA9PiB7fTtcbiAgcHJvdGVjdGVkIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVWYWx1ZXMoKTtcbiAgfVxuICBwcm90ZWN0ZWQgX3ZhbHVlOiBhbnk7XG5cbiAgQElucHV0KClcbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLnVwZGF0ZU5hbWVzKCk7XG4gIH1cbiAgcHJvdGVjdGVkIF9uYW1lOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eShkaXNhYmxlZCk7XG4gICAgdGhpcy51cGRhdGVEaXNhYmxlZCgpO1xuICB9XG4gIHByb3RlY3RlZCBfZGlzYWJsZWQ6IGJvb2xlYW47XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogTmJCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIFJhZGlvIGJ1dHRvbnMgc3RhdHVzLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGBwcmltYXJ5YCAoZGVmYXVsdCksIGBzdWNjZXNzYCwgYHdhcm5pbmdgLCBgZGFuZ2VyYCwgYGluZm9gLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHN0YXR1cygpOiBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG4gIHNldCBzdGF0dXModmFsdWU6IE5iQ29tcG9uZW50T3JDdXN0b21TdGF0dXMpIHtcbiAgICBpZiAodGhpcy5fc3RhdHVzICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fc3RhdHVzID0gdmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXR1cygpO1xuICAgIH1cbiAgfVxuICBwcm90ZWN0ZWQgX3N0YXR1czogTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cyA9ICdiYXNpYyc7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihOYlJhZGlvQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIHJhZGlvczogUXVlcnlMaXN0PE5iUmFkaW9Db21wb25lbnQ+O1xuXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm1JZCxcbiAgICBASW5qZWN0KE5CX0RPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jdW1lbnQsXG4gICkge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gSW4gY2FzZSBvcHRpb24gJ25hbWUnIGlzbid0IHNldCBvbiBuYi1yYWRpbyBjb21wb25lbnQsXG4gICAgLy8gd2UgbmVlZCB0byBzZXQgaXQncyBuYW1lIHJpZ2h0IGF3YXksIHNvIGl0IHdvbid0IG92ZXJsYXAgd2l0aCBvcHRpb25zXG4gICAgLy8gd2l0aG91dCBuYW1lcyBmcm9tIG90aGVyIHJhZGlvIGdyb3Vwcy4gT3RoZXJ3aXNlIHRoZXkgYWxsIHdvdWxkIGhhdmVcbiAgICAvLyBzYW1lIG5hbWUgYW5kIHdpbGwgYmUgY29uc2lkZXJlZCBhcyBvcHRpb25zIGZyb20gb25lIGdyb3VwIHNvIG9ubHkgdGhlXG4gICAgLy8gbGFzdCBvcHRpb24gd2lsbCBzdGF5IHNlbGVjdGVkLlxuICAgIHRoaXMudXBkYXRlTmFtZXMoKTtcblxuICAgIHRoaXMucmFkaW9zLmNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgodGhpcy5yYWRpb3MpLFxuICAgICAgICAvLyAnY2hhbmdlcycgZW1pdCBkdXJpbmcgY2hhbmdlIGRldGVjdGlvbiBydW4gYW5kIHdlIGNhbid0IHVwZGF0ZVxuICAgICAgICAvLyBvcHRpb24gcHJvcGVydGllcyByaWdodCBvZiBzaW5jZSB0aGV5IGFscmVhZHkgd2FzIGluaXRpYWxpemVkLlxuICAgICAgICAvLyBJbnN0ZWFkIHdlIHNjaGVkdWxlIG1pY3JvdGFzayB0byB1cGRhdGUgcmFkaW9zIGFmdGVyIGNoYW5nZSBkZXRlY3Rpb25cbiAgICAgICAgLy8gcnVuIGlzIGZpbmlzaGVkIGFuZCB0cmlnZ2VyIG9uZSBtb3JlIGNoYW5nZSBkZXRlY3Rpb24gcnVuLlxuICAgICAgICBzd2l0Y2hNYXAoKHJhZGlvczogUXVlcnlMaXN0PE5iUmFkaW9Db21wb25lbnQ+KSA9PiBmcm9tKFByb21pc2UucmVzb2x2ZShyYWRpb3MpKSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVBbmRTdWJzY3JpYmVUb1JhZGlvcygpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlQW5kU3Vic2NyaWJlVG9SYWRpb3MoKSB7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUZyb21DaGVja2VkT3B0aW9uKCk7XG4gICAgdGhpcy51cGRhdGVOYW1lcygpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVzKCk7XG4gICAgdGhpcy51cGRhdGVEaXNhYmxlZCgpO1xuICAgIHRoaXMudXBkYXRlU3RhdHVzKCk7XG4gICAgdGhpcy5zdWJzY3JpYmVPblJhZGlvc1ZhbHVlQ2hhbmdlKCk7XG4gICAgdGhpcy5zdWJzY3JpYmVPblJhZGlvc0JsdXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVOYW1lcygpIHtcbiAgICBpZiAodGhpcy5yYWRpb3MpIHtcbiAgICAgIHRoaXMucmFkaW9zLmZvckVhY2goKHJhZGlvOiBOYlJhZGlvQ29tcG9uZW50KSA9PiByYWRpby5fc2V0TmFtZSh0aGlzLm5hbWUpKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlVmFsdWVzKCkge1xuICAgIHRoaXMudXBkYXRlQW5kTWFya0ZvckNoZWNrUmFkaW9zKChyYWRpbzogTmJSYWRpb0NvbXBvbmVudCkgPT4gcmFkaW8uY2hlY2tlZCA9IHJhZGlvLnZhbHVlID09PSB0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVEaXNhYmxlZCgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZGlzYWJsZWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFuZE1hcmtGb3JDaGVja1JhZGlvcygocmFkaW86IE5iUmFkaW9Db21wb25lbnQpID0+IHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHN1YnNjcmliZU9uUmFkaW9zVmFsdWVDaGFuZ2UoKSB7XG4gICAgaWYgKCF0aGlzLnJhZGlvcyB8fCAhdGhpcy5yYWRpb3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbWVyZ2UoLi4udGhpcy5yYWRpb3MubWFwKChyYWRpbzogTmJSYWRpb0NvbXBvbmVudCkgPT4gcmFkaW8udmFsdWVDaGFuZ2UpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbChcbiAgICAgICAgICBtZXJnZShcbiAgICAgICAgICAgIHRoaXMucmFkaW9zLmNoYW5nZXMsXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3kkLFxuICAgICAgICAgICksXG4gICAgICAgICksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMucHJvcGFnYXRlVmFsdWUodmFsdWUpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcHJvcGFnYXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc3Vic2NyaWJlT25SYWRpb3NCbHVyKCkge1xuICAgIGNvbnN0IGhhc05vUmFkaW9zID0gIXRoaXMucmFkaW9zIHx8ICF0aGlzLnJhZGlvcy5sZW5ndGg7XG4gICAgaWYgKCFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpIHx8IGhhc05vUmFkaW9zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaG9zdEVsZW1lbnQgPSB0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgZnJvbUV2ZW50PEV2ZW50Pihob3N0RWxlbWVudCwgJ2ZvY3VzaW4nKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihldmVudCA9PiBob3N0RWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSkpLFxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gbWVyZ2UoXG4gICAgICAgICAgZnJvbUV2ZW50PEV2ZW50Pih0aGlzLmRvY3VtZW50LCAnZm9jdXNpbicpLFxuICAgICAgICAgIGZyb21FdmVudDxFdmVudD4odGhpcy5kb2N1bWVudCwgJ2NsaWNrJyksXG4gICAgICAgICkpLFxuICAgICAgICBmaWx0ZXIoZXZlbnQgPT4gIWhvc3RFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBOb2RlKSksXG4gICAgICAgIHRha2VVbnRpbChcbiAgICAgICAgICBtZXJnZShcbiAgICAgICAgICAgIHRoaXMucmFkaW9zLmNoYW5nZXMsXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3kkLFxuICAgICAgICAgICksXG4gICAgICAgICksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZVN0YXR1cygpIHtcbiAgICB0aGlzLnVwZGF0ZUFuZE1hcmtGb3JDaGVja1JhZGlvcygocmFkaW86IE5iUmFkaW9Db21wb25lbnQpID0+IHJhZGlvLnN0YXR1cyA9IHRoaXMuc3RhdHVzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVBbmRNYXJrRm9yQ2hlY2tSYWRpb3ModXBkYXRlRm46IChOYlJhZGlvQ29tcG9uZW50KSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucmFkaW9zKSB7XG4gICAgICB0aGlzLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgICB1cGRhdGVGbihyYWRpbyk7XG4gICAgICAgIHJhZGlvLl9tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVWYWx1ZUZyb21DaGVja2VkT3B0aW9uKCkge1xuICAgIGNvbnN0IGNoZWNrZWRSYWRpbyA9IHRoaXMucmFkaW9zLmZpbmQoKHJhZGlvKSA9PiByYWRpby5jaGVja2VkKTtcbiAgICBjb25zdCBpc1ZhbHVlTWlzc2luZyA9IHRoaXMudmFsdWUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnZhbHVlID09PSBudWxsO1xuICAgIGlmIChjaGVja2VkUmFkaW8gJiYgaXNWYWx1ZU1pc3NpbmcgJiYgY2hlY2tlZFJhZGlvLnZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gY2hlY2tlZFJhZGlvLnZhbHVlO1xuICAgIH1cbiAgfVxufVxuIl19