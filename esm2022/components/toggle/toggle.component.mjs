/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, HostBinding, forwardRef, Output, EventEmitter, ChangeDetectionStrategy, } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { convertToBoolProperty } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "../../services/direction.service";
import * as i2 from "../../services/status.service";
import * as i3 from "@angular/common";
import * as i4 from "../icon/icon.component";
/**
 * Toggle is a control representing `on` and `off` states.
 *
 * @stacked-example(Showcase, toggle/toggle-showcase.component)
 *
 * ### Installation
 *
 * Import `NbToggleComponent` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbToggleModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Toggle may have one of the following statuses: `basic`, `primary`, `success`, `warning`, `danger`, `info`, `control`
 *
 * @stacked-example(Toggle status, toggle/toggle-status.component)
 *
 * Toggle can be disabled via `disabled` input.
 *
 * @stacked-example(Disabled Toggles, toggle/toggle-disabled.component)
 *
 * Toggle may have a label with following positions: `left`, `right`, `start`, `end` (default)
 *
 * @stacked-example(Toggles With Labels, toggle/toggle-label-position.component.ts)
 *
 * You can set control state via `checked` binding:
 *
 * ```html
 * <nb-toggle [(checked)]="checked"></nb-toggle>
 * ```
 *
 * Or it could be set via reactive forms or ngModel bindings:
 *
 * @stacked-example(Toggle form binding, toggle/toggle-form.component)
 *
 * @styles
 *
 * toggle-height:
 * toggle-width:
 * toggle-border-width:
 * toggle-border-radius:
 * toggle-outline-width:
 * toggle-outline-color:
 * toggle-switcher-size:
 * toggle-switcher-icon-size:
 * toggle-text-font-family:
 * toggle-text-font-size:
 * toggle-text-font-weight:
 * toggle-text-line-height:
 * toggle-cursor:
 * toggle-disabled-cursor:
 * toggle-basic-text-color:
 * toggle-basic-background-color:
 * toggle-basic-border-color:
 * toggle-basic-checked-background-color:
 * toggle-basic-checked-border-color:
 * toggle-basic-checked-switcher-background-color:
 * toggle-basic-checked-switcher-checkmark-color:
 * toggle-basic-focus-background-color:
 * toggle-basic-focus-border-color:
 * toggle-basic-focus-checked-background-color:
 * toggle-basic-focus-checked-border-color:
 * toggle-basic-hover-background-color:
 * toggle-basic-hover-border-color:
 * toggle-basic-hover-checked-background-color:
 * toggle-basic-hover-checked-border-color:
 * toggle-basic-active-background-color:
 * toggle-basic-active-border-color:
 * toggle-basic-active-checked-background-color:
 * toggle-basic-active-checked-border-color:
 * toggle-basic-disabled-background-color:
 * toggle-basic-disabled-border-color:
 * toggle-basic-disabled-switcher-background-color:
 * toggle-basic-disabled-checked-switcher-checkmark-color:
 * toggle-basic-disabled-text-color:
 * toggle-primary-text-color:
 * toggle-primary-background-color:
 * toggle-primary-border-color:
 * toggle-primary-checked-background-color:
 * toggle-primary-checked-border-color:
 * toggle-primary-checked-switcher-background-color:
 * toggle-primary-checked-switcher-checkmark-color:
 * toggle-primary-focus-background-color:
 * toggle-primary-focus-border-color:
 * toggle-primary-focus-checked-background-color:
 * toggle-primary-focus-checked-border-color:
 * toggle-primary-hover-background-color:
 * toggle-primary-hover-border-color:
 * toggle-primary-hover-checked-background-color:
 * toggle-primary-hover-checked-border-color:
 * toggle-primary-active-background-color:
 * toggle-primary-active-border-color:
 * toggle-primary-active-checked-background-color:
 * toggle-primary-active-checked-border-color:
 * toggle-primary-disabled-background-color:
 * toggle-primary-disabled-border-color:
 * toggle-primary-disabled-switcher-background-color:
 * toggle-primary-disabled-checked-switcher-checkmark-color:
 * toggle-primary-disabled-text-color:
 * toggle-success-text-color:
 * toggle-success-background-color:
 * toggle-success-border-color:
 * toggle-success-checked-background-color:
 * toggle-success-checked-border-color:
 * toggle-success-checked-switcher-background-color:
 * toggle-success-checked-switcher-checkmark-color:
 * toggle-success-focus-background-color:
 * toggle-success-focus-border-color:
 * toggle-success-focus-checked-background-color:
 * toggle-success-focus-checked-border-color:
 * toggle-success-hover-background-color:
 * toggle-success-hover-border-color:
 * toggle-success-hover-checked-background-color:
 * toggle-success-hover-checked-border-color:
 * toggle-success-active-background-color:
 * toggle-success-active-border-color:
 * toggle-success-active-checked-background-color:
 * toggle-success-active-checked-border-color:
 * toggle-success-disabled-background-color:
 * toggle-success-disabled-border-color:
 * toggle-success-disabled-switcher-background-color:
 * toggle-success-disabled-checked-switcher-checkmark-color:
 * toggle-success-disabled-text-color:
 * toggle-info-text-color:
 * toggle-info-background-color:
 * toggle-info-border-color:
 * toggle-info-checked-background-color:
 * toggle-info-checked-border-color:
 * toggle-info-checked-switcher-background-color:
 * toggle-info-checked-switcher-checkmark-color:
 * toggle-info-focus-background-color:
 * toggle-info-focus-border-color:
 * toggle-info-focus-checked-background-color:
 * toggle-info-focus-checked-border-color:
 * toggle-info-hover-background-color:
 * toggle-info-hover-border-color:
 * toggle-info-hover-checked-background-color:
 * toggle-info-hover-checked-border-color:
 * toggle-info-active-background-color:
 * toggle-info-active-border-color:
 * toggle-info-active-checked-background-color:
 * toggle-info-active-checked-border-color:
 * toggle-info-disabled-background-color:
 * toggle-info-disabled-border-color:
 * toggle-info-disabled-switcher-background-color:
 * toggle-info-disabled-checked-switcher-checkmark-color:
 * toggle-info-disabled-text-color:
 * toggle-warning-text-color:
 * toggle-warning-background-color:
 * toggle-warning-border-color:
 * toggle-warning-checked-background-color:
 * toggle-warning-checked-border-color:
 * toggle-warning-checked-switcher-background-color:
 * toggle-warning-checked-switcher-checkmark-color:
 * toggle-warning-focus-background-color:
 * toggle-warning-focus-border-color:
 * toggle-warning-focus-checked-background-color:
 * toggle-warning-focus-checked-border-color:
 * toggle-warning-hover-background-color:
 * toggle-warning-hover-border-color:
 * toggle-warning-hover-checked-background-color:
 * toggle-warning-hover-checked-border-color:
 * toggle-warning-active-background-color:
 * toggle-warning-active-border-color:
 * toggle-warning-active-checked-background-color:
 * toggle-warning-active-checked-border-color:
 * toggle-warning-disabled-background-color:
 * toggle-warning-disabled-border-color:
 * toggle-warning-disabled-switcher-background-color:
 * toggle-warning-disabled-checked-switcher-checkmark-color:
 * toggle-warning-disabled-text-color:
 * toggle-danger-text-color:
 * toggle-danger-background-color:
 * toggle-danger-border-color:
 * toggle-danger-checked-background-color:
 * toggle-danger-checked-border-color:
 * toggle-danger-checked-switcher-background-color:
 * toggle-danger-checked-switcher-checkmark-color:
 * toggle-danger-focus-background-color:
 * toggle-danger-focus-border-color:
 * toggle-danger-focus-checked-background-color:
 * toggle-danger-focus-checked-border-color:
 * toggle-danger-hover-background-color:
 * toggle-danger-hover-border-color:
 * toggle-danger-hover-checked-background-color:
 * toggle-danger-hover-checked-border-color:
 * toggle-danger-active-background-color:
 * toggle-danger-active-border-color:
 * toggle-danger-active-checked-background-color:
 * toggle-danger-active-checked-border-color:
 * toggle-danger-disabled-background-color:
 * toggle-danger-disabled-border-color:
 * toggle-danger-disabled-switcher-background-color:
 * toggle-danger-disabled-checked-switcher-checkmark-color:
 * toggle-danger-disabled-text-color:
 * toggle-control-text-color:
 * toggle-control-background-color:
 * toggle-control-border-color:
 * toggle-control-checked-background-color:
 * toggle-control-checked-border-color:
 * toggle-control-checked-switcher-background-color:
 * toggle-control-checked-switcher-checkmark-color:
 * toggle-control-focus-background-color:
 * toggle-control-focus-border-color:
 * toggle-control-focus-checked-background-color:
 * toggle-control-focus-checked-border-color:
 * toggle-control-hover-background-color:
 * toggle-control-hover-border-color:
 * toggle-control-hover-checked-background-color:
 * toggle-control-hover-checked-border-color:
 * toggle-control-active-background-color:
 * toggle-control-active-border-color:
 * toggle-control-active-checked-background-color:
 * toggle-control-active-checked-border-color:
 * toggle-control-disabled-background-color:
 * toggle-control-disabled-border-color:
 * toggle-control-disabled-switcher-background-color:
 * toggle-control-disabled-checked-switcher-checkmark-color:
 * toggle-control-disabled-text-color:
 */
export class NbToggleComponent {
    /**
     * Toggle checked
     * @type {boolean}
     */
    get checked() {
        return this._checked;
    }
    set checked(value) {
        this._checked = convertToBoolProperty(value);
    }
    /**
     * Controls input disabled state
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = convertToBoolProperty(value);
    }
    get primary() {
        return this.status === 'primary';
    }
    get success() {
        return this.status === 'success';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
    get info() {
        return this.status === 'info';
    }
    get basic() {
        return this.status === 'basic';
    }
    get control() {
        return this.status === 'control';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    get labelLeft() {
        return this.labelPosition === 'left';
    }
    get labelRight() {
        return this.labelPosition === 'right';
    }
    get labelStart() {
        return this.labelPosition === 'start';
    }
    get labelEnd() {
        return this.labelPosition === 'end';
    }
    constructor(changeDetector, layoutDirection, renderer, hostElement, zone, statusService) {
        this.changeDetector = changeDetector;
        this.layoutDirection = layoutDirection;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.zone = zone;
        this.statusService = statusService;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.destroy$ = new Subject();
        this._checked = false;
        this._disabled = false;
        /**
         * Toggle status.
         * Possible values are: `basic`, `primary`, `success`, `warning`, `danger`, `info`, `control`.
         */
        this.status = 'basic';
        /**
         * Toggle label position.
         * Possible values are: `left`, `right`, `start`, `end` (default)
         */
        this.labelPosition = 'end';
        /**
         * Output when checked state is changed by a user
         * @type EventEmitter<boolean>
         */
        this.checkedChange = new EventEmitter();
    }
    ngOnInit() {
        this.layoutDirection.onDirectionChange()
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.changeDetector.detectChanges());
    }
    ngAfterViewInit() {
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this.hostElement.nativeElement, 'nb-transition');
        }));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    checkState() {
        if (this.checked) {
            return this.layoutDirection.isLtr() ? 'right' : 'left';
        }
        return this.layoutDirection.isLtr() ? 'left' : 'right';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(val) {
        this.checked = val;
        this.changeDetector.markForCheck();
    }
    setDisabledState(val) {
        this.disabled = convertToBoolProperty(val);
        this.changeDetector.markForCheck();
    }
    updateValue(event) {
        const input = event.target;
        this.checked = input.checked;
        this.checkedChange.emit(this.checked);
        this.onChange(this.checked);
    }
    onInputClick(event) {
        event.stopPropagation();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbToggleComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.NbLayoutDirectionService }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.NgZone }, { token: i2.NbStatusService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: NbToggleComponent, selector: "nb-toggle", inputs: { checked: "checked", disabled: "disabled", status: "status", labelPosition: "labelPosition" }, outputs: { checkedChange: "checkedChange" }, host: { properties: { "class.status-primary": "this.primary", "class.status-success": "this.success", "class.status-warning": "this.warning", "class.status-danger": "this.danger", "class.status-info": "this.info", "class.status-basic": "this.basic", "class.status-control": "this.control", "class": "this.additionalClasses", "class.toggle-label-left": "this.labelLeft", "class.toggle-label-right": "this.labelRight", "class.toggle-label-start": "this.labelStart", "class.toggle-label-end": "this.labelEnd" } }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => NbToggleComponent),
                multi: true,
            }], ngImport: i0, template: `
    <label class="toggle-label">
      <input type="checkbox"
             class="native-input visually-hidden"
             role="switch"
             [attr.aria-checked]="checked"
             [disabled]="disabled"
             [checked]="checked"
             (change)="updateValue($event)"
             (blur)="onTouched()"
             (click)="onInputClick($event)">
      <div class="toggle" [class.checked]="checked">
        <span [@position]="checkState()" class="toggle-switcher">
          <nb-icon *ngIf="checked" icon="checkmark-bold-outline" pack="nebular-essentials"></nb-icon>
        </span>
      </div>
      <span class="text">
        <ng-content></ng-content>
      </span>
    </label>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:inline-flex;outline:none}:host(.toggle-label-left) .text:not(:empty){padding-right:.6875rem}[dir=ltr] :host(.toggle-label-left) .text:not(:empty){order:-1}[dir=rtl] :host(.toggle-label-left) .text:not(:empty){order:1}:host(.toggle-label-right) .text:not(:empty){padding-left:.6875rem}[dir=ltr] :host(.toggle-label-right) .text:not(:empty){order:1}[dir=rtl] :host(.toggle-label-right) .text:not(:empty){order:-1}:host(.toggle-label-start) .toggle-label{flex-direction:row-reverse}[dir=ltr] :host(.toggle-label-start) .toggle-label .text:not(:empty){padding-right:.6875rem}[dir=rtl] :host(.toggle-label-start) .toggle-label .text:not(:empty){padding-left:.6875rem}[dir=ltr] :host(.toggle-label-end) .text:not(:empty){padding-left:.6875rem}[dir=rtl] :host(.toggle-label-end) .text:not(:empty){padding-right:.6875rem}:host(.nb-transition) .toggle{transition-duration:.15s;transition-property:background-color,border,box-shadow;transition-timing-function:ease-in}.toggle-label{position:relative;display:inline-flex;align-items:center}.toggle{position:relative;display:inline-flex;box-sizing:content-box}.toggle-switcher{position:absolute;border-radius:50%;margin:1px}.toggle-switcher nb-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}\n"], dependencies: [{ kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }], animations: [
            trigger('position', [
                state('right', style({ right: 0, left: '*' })),
                state('left', style({ left: 0, right: '*' })),
                transition(':enter', [animate(0)]),
                transition('right <=> left', [animate('0.15s')]),
            ]),
        ], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbToggleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-toggle', animations: [
                        trigger('position', [
                            state('right', style({ right: 0, left: '*' })),
                            state('left', style({ left: 0, right: '*' })),
                            transition(':enter', [animate(0)]),
                            transition('right <=> left', [animate('0.15s')]),
                        ]),
                    ], template: `
    <label class="toggle-label">
      <input type="checkbox"
             class="native-input visually-hidden"
             role="switch"
             [attr.aria-checked]="checked"
             [disabled]="disabled"
             [checked]="checked"
             (change)="updateValue($event)"
             (blur)="onTouched()"
             (click)="onInputClick($event)">
      <div class="toggle" [class.checked]="checked">
        <span [@position]="checkState()" class="toggle-switcher">
          <nb-icon *ngIf="checked" icon="checkmark-bold-outline" pack="nebular-essentials"></nb-icon>
        </span>
      </div>
      <span class="text">
        <ng-content></ng-content>
      </span>
    </label>
  `, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => NbToggleComponent),
                            multi: true,
                        }], changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:inline-flex;outline:none}:host(.toggle-label-left) .text:not(:empty){padding-right:.6875rem}[dir=ltr] :host(.toggle-label-left) .text:not(:empty){order:-1}[dir=rtl] :host(.toggle-label-left) .text:not(:empty){order:1}:host(.toggle-label-right) .text:not(:empty){padding-left:.6875rem}[dir=ltr] :host(.toggle-label-right) .text:not(:empty){order:1}[dir=rtl] :host(.toggle-label-right) .text:not(:empty){order:-1}:host(.toggle-label-start) .toggle-label{flex-direction:row-reverse}[dir=ltr] :host(.toggle-label-start) .toggle-label .text:not(:empty){padding-right:.6875rem}[dir=rtl] :host(.toggle-label-start) .toggle-label .text:not(:empty){padding-left:.6875rem}[dir=ltr] :host(.toggle-label-end) .text:not(:empty){padding-left:.6875rem}[dir=rtl] :host(.toggle-label-end) .text:not(:empty){padding-right:.6875rem}:host(.nb-transition) .toggle{transition-duration:.15s;transition-property:background-color,border,box-shadow;transition-timing-function:ease-in}.toggle-label{position:relative;display:inline-flex;align-items:center}.toggle{position:relative;display:inline-flex;box-sizing:content-box}.toggle-switcher{position:absolute;border-radius:50%;margin:1px}.toggle-switcher nb-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i1.NbLayoutDirectionService }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i2.NbStatusService }], propDecorators: { checked: [{
                type: Input
            }], disabled: [{
                type: Input
            }], status: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], checkedChange: [{
                type: Output
            }], primary: [{
                type: HostBinding,
                args: ['class.status-primary']
            }], success: [{
                type: HostBinding,
                args: ['class.status-success']
            }], warning: [{
                type: HostBinding,
                args: ['class.status-warning']
            }], danger: [{
                type: HostBinding,
                args: ['class.status-danger']
            }], info: [{
                type: HostBinding,
                args: ['class.status-info']
            }], basic: [{
                type: HostBinding,
                args: ['class.status-basic']
            }], control: [{
                type: HostBinding,
                args: ['class.status-control']
            }], additionalClasses: [{
                type: HostBinding,
                args: ['class']
            }], labelLeft: [{
                type: HostBinding,
                args: ['class.toggle-label-left']
            }], labelRight: [{
                type: HostBinding,
                args: ['class.toggle-label-right']
            }], labelStart: [{
                type: HostBinding,
                args: ['class.toggle-label-start']
            }], labelEnd: [{
                type: HostBinding,
                args: ['class.toggle-label-end']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy90b2dnbGUvdG9nZ2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFVBQVUsRUFHVixNQUFNLEVBQ04sWUFBWSxFQUVaLHVCQUF1QixHQUt4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUszQyxPQUFPLEVBQUUscUJBQXFCLEVBQWtCLE1BQU0sWUFBWSxDQUFDOzs7Ozs7QUFFbkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlPRztBQXdDSCxNQUFNLE9BQU8saUJBQWlCO0lBTzVCOzs7T0FHRztJQUNILElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBYztR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S0FBSztzQkFEUixXQUFXO3VCQUFDLG9CQUFvQjtnQkFNN0IsT0FBTztzQkFEVixXQUFXO3VCQUFDLHNCQUFzQjtnQkFNL0IsaUJBQWlCO3NCQURwQixXQUFXO3VCQUFDLE9BQU87Z0JBU2hCLFNBQVM7c0JBRFosV0FBVzt1QkFBQyx5QkFBeUI7Z0JBTWxDLFVBQVU7c0JBRGIsV0FBVzt1QkFBQywwQkFBMEI7Z0JBTW5DLFVBQVU7c0JBRGIsV0FBVzt1QkFBQywwQkFBMEI7Z0JBTW5DLFFBQVE7c0JBRFgsV0FBVzt1QkFBQyx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBmb3J3YXJkUmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBOZ1pvbmUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE5iU3RhdHVzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3N0YXR1cy5zZXJ2aWNlJztcbmltcG9ydCB7IE5iTGF5b3V0RGlyZWN0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RpcmVjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE5iQ29tcG9uZW50T3JDdXN0b21TdGF0dXMgfSBmcm9tICcuLi9jb21wb25lbnQtc3RhdHVzJztcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSwgTmJCb29sZWFuSW5wdXQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuLyoqXG4gKiBUb2dnbGUgaXMgYSBjb250cm9sIHJlcHJlc2VudGluZyBgb25gIGFuZCBgb2ZmYCBzdGF0ZXMuXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShTaG93Y2FzZSwgdG9nZ2xlL3RvZ2dsZS1zaG93Y2FzZS5jb21wb25lbnQpXG4gKlxuICogIyMjIEluc3RhbGxhdGlvblxuICpcbiAqIEltcG9ydCBgTmJUb2dnbGVDb21wb25lbnRgIHRvIHlvdXIgZmVhdHVyZSBtb2R1bGUuXG4gKiBgYGB0c1xuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIC8vIC4uLlxuICogICAgIE5iVG9nZ2xlTW9kdWxlLFxuICogICBdLFxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBQYWdlTW9kdWxlIHsgfVxuICogYGBgXG4gKiAjIyMgVXNhZ2VcbiAqXG4gKiBUb2dnbGUgbWF5IGhhdmUgb25lIG9mIHRoZSBmb2xsb3dpbmcgc3RhdHVzZXM6IGBiYXNpY2AsIGBwcmltYXJ5YCwgYHN1Y2Nlc3NgLCBgd2FybmluZ2AsIGBkYW5nZXJgLCBgaW5mb2AsIGBjb250cm9sYFxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoVG9nZ2xlIHN0YXR1cywgdG9nZ2xlL3RvZ2dsZS1zdGF0dXMuY29tcG9uZW50KVxuICpcbiAqIFRvZ2dsZSBjYW4gYmUgZGlzYWJsZWQgdmlhIGBkaXNhYmxlZGAgaW5wdXQuXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShEaXNhYmxlZCBUb2dnbGVzLCB0b2dnbGUvdG9nZ2xlLWRpc2FibGVkLmNvbXBvbmVudClcbiAqXG4gKiBUb2dnbGUgbWF5IGhhdmUgYSBsYWJlbCB3aXRoIGZvbGxvd2luZyBwb3NpdGlvbnM6IGBsZWZ0YCwgYHJpZ2h0YCwgYHN0YXJ0YCwgYGVuZGAgKGRlZmF1bHQpXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShUb2dnbGVzIFdpdGggTGFiZWxzLCB0b2dnbGUvdG9nZ2xlLWxhYmVsLXBvc2l0aW9uLmNvbXBvbmVudC50cylcbiAqXG4gKiBZb3UgY2FuIHNldCBjb250cm9sIHN0YXRlIHZpYSBgY2hlY2tlZGAgYmluZGluZzpcbiAqXG4gKiBgYGBodG1sXG4gKiA8bmItdG9nZ2xlIFsoY2hlY2tlZCldPVwiY2hlY2tlZFwiPjwvbmItdG9nZ2xlPlxuICogYGBgXG4gKlxuICogT3IgaXQgY291bGQgYmUgc2V0IHZpYSByZWFjdGl2ZSBmb3JtcyBvciBuZ01vZGVsIGJpbmRpbmdzOlxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoVG9nZ2xlIGZvcm0gYmluZGluZywgdG9nZ2xlL3RvZ2dsZS1mb3JtLmNvbXBvbmVudClcbiAqXG4gKiBAc3R5bGVzXG4gKlxuICogdG9nZ2xlLWhlaWdodDpcbiAqIHRvZ2dsZS13aWR0aDpcbiAqIHRvZ2dsZS1ib3JkZXItd2lkdGg6XG4gKiB0b2dnbGUtYm9yZGVyLXJhZGl1czpcbiAqIHRvZ2dsZS1vdXRsaW5lLXdpZHRoOlxuICogdG9nZ2xlLW91dGxpbmUtY29sb3I6XG4gKiB0b2dnbGUtc3dpdGNoZXItc2l6ZTpcbiAqIHRvZ2dsZS1zd2l0Y2hlci1pY29uLXNpemU6XG4gKiB0b2dnbGUtdGV4dC1mb250LWZhbWlseTpcbiAqIHRvZ2dsZS10ZXh0LWZvbnQtc2l6ZTpcbiAqIHRvZ2dsZS10ZXh0LWZvbnQtd2VpZ2h0OlxuICogdG9nZ2xlLXRleHQtbGluZS1oZWlnaHQ6XG4gKiB0b2dnbGUtY3Vyc29yOlxuICogdG9nZ2xlLWRpc2FibGVkLWN1cnNvcjpcbiAqIHRvZ2dsZS1iYXNpYy10ZXh0LWNvbG9yOlxuICogdG9nZ2xlLWJhc2ljLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtYmFzaWMtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWJhc2ljLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1iYXNpYy1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1iYXNpYy1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtYmFzaWMtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6XG4gKiB0b2dnbGUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtYmFzaWMtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLWJhc2ljLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWJhc2ljLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1iYXNpYy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtYmFzaWMtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWJhc2ljLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6XG4gKiB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIHRvZ2dsZS1wcmltYXJ5LXRleHQtY29sb3I6XG4gKiB0b2dnbGUtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLXByaW1hcnktYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLXByaW1hcnktY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLXByaW1hcnktY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtcHJpbWFyeS1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtcHJpbWFyeS1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjpcbiAqIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1wcmltYXJ5LWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1wcmltYXJ5LWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOlxuICogdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIHRvZ2dsZS1zdWNjZXNzLXRleHQtY29sb3I6XG4gKiB0b2dnbGUtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLXN1Y2Nlc3MtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLXN1Y2Nlc3MtY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtc3VjY2Vzcy1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtc3VjY2Vzcy1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjpcbiAqIHRvZ2dsZS1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLXN1Y2Nlc3MtZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1zdWNjZXNzLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOlxuICogdG9nZ2xlLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIHRvZ2dsZS1pbmZvLXRleHQtY29sb3I6XG4gKiB0b2dnbGUtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLWluZm8tYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWluZm8tY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLWluZm8tY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtaW5mby1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtaW5mby1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjpcbiAqIHRvZ2dsZS1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtaW5mby1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtaW5mby1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtaW5mby1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtaW5mby1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1pbmZvLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtaW5mby1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWluZm8tZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1pbmZvLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOlxuICogdG9nZ2xlLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIHRvZ2dsZS13YXJuaW5nLXRleHQtY29sb3I6XG4gKiB0b2dnbGUtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLXdhcm5pbmctYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLXdhcm5pbmctY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLXdhcm5pbmctY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtd2FybmluZy1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtd2FybmluZy1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjpcbiAqIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtd2FybmluZy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtd2FybmluZy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtd2FybmluZy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtd2FybmluZy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLXdhcm5pbmctYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS13YXJuaW5nLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS13YXJuaW5nLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOlxuICogdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIHRvZ2dsZS1kYW5nZXItdGV4dC1jb2xvcjpcbiAqIHRvZ2dsZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1kYW5nZXItYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWRhbmdlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWRhbmdlci1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOlxuICogdG9nZ2xlLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1kYW5nZXItZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1kYW5nZXItaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLWRhbmdlci1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWRhbmdlci1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLWRhbmdlci1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjpcbiAqIHRvZ2dsZS1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIHRvZ2dsZS1jb250cm9sLXRleHQtY29sb3I6XG4gKiB0b2dnbGUtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLWNvbnRyb2wtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWNvbnRyb2wtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLWNvbnRyb2wtY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtY29udHJvbC1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtY29udHJvbC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjpcbiAqIHRvZ2dsZS1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtY29udHJvbC1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtY29udHJvbC1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtY29udHJvbC1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtY29udHJvbC1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtY29udHJvbC1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1jb250cm9sLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOlxuICogdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItdG9nZ2xlJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3Bvc2l0aW9uJywgW1xuICAgICAgc3RhdGUoJ3JpZ2h0Jywgc3R5bGUoeyByaWdodDogMCwgbGVmdDogJyonIH0pKSxcbiAgICAgIHN0YXRlKCdsZWZ0Jywgc3R5bGUoeyBsZWZ0OiAwLCByaWdodDogJyonIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFthbmltYXRlKDApXSksXG4gICAgICB0cmFuc2l0aW9uKCdyaWdodCA8PT4gbGVmdCcsIFthbmltYXRlKCcwLjE1cycpXSksXG4gICAgXSksXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsIGNsYXNzPVwidG9nZ2xlLWxhYmVsXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICBjbGFzcz1cIm5hdGl2ZS1pbnB1dCB2aXN1YWxseS1oaWRkZW5cIlxuICAgICAgICAgICAgIHJvbGU9XCJzd2l0Y2hcIlxuICAgICAgICAgICAgIFthdHRyLmFyaWEtY2hlY2tlZF09XCJjaGVja2VkXCJcbiAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgIFtjaGVja2VkXT1cImNoZWNrZWRcIlxuICAgICAgICAgICAgIChjaGFuZ2UpPVwidXBkYXRlVmFsdWUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgKGJsdXIpPVwib25Ub3VjaGVkKClcIlxuICAgICAgICAgICAgIChjbGljayk9XCJvbklucHV0Q2xpY2soJGV2ZW50KVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRvZ2dsZVwiIFtjbGFzcy5jaGVja2VkXT1cImNoZWNrZWRcIj5cbiAgICAgICAgPHNwYW4gW0Bwb3NpdGlvbl09XCJjaGVja1N0YXRlKClcIiBjbGFzcz1cInRvZ2dsZS1zd2l0Y2hlclwiPlxuICAgICAgICAgIDxuYi1pY29uICpuZ0lmPVwiY2hlY2tlZFwiIGljb249XCJjaGVja21hcmstYm9sZC1vdXRsaW5lXCIgcGFjaz1cIm5lYnVsYXItZXNzZW50aWFsc1wiPjwvbmItaWNvbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9zcGFuPlxuICAgIDwvbGFiZWw+XG4gIGAsXG4gIHN0eWxlVXJsczogWyBgLi90b2dnbGUuY29tcG9uZW50LnNjc3NgIF0sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOYlRvZ2dsZUNvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWUsXG4gIH1dLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmJUb2dnbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIG9uQ2hhbmdlOiBhbnkgPSAoKSA9PiB7IH07XG4gIG9uVG91Y2hlZDogYW55ID0gKCkgPT4geyB9O1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBUb2dnbGUgY2hlY2tlZFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBjaGVja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jaGVja2VkO1xuICB9XG4gIHNldCBjaGVja2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2hlY2tlZCA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY2hlY2tlZDogTmJCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIENvbnRyb2xzIGlucHV0IGRpc2FibGVkIHN0YXRlXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBUb2dnbGUgc3RhdHVzLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgYXJlOiBgYmFzaWNgLCBgcHJpbWFyeWAsIGBzdWNjZXNzYCwgYHdhcm5pbmdgLCBgZGFuZ2VyYCwgYGluZm9gLCBgY29udHJvbGAuXG4gICAqL1xuICBASW5wdXQoKSBzdGF0dXM6IE5iQ29tcG9uZW50T3JDdXN0b21TdGF0dXMgPSAnYmFzaWMnO1xuXG4gIC8qKlxuICAgKiBUb2dnbGUgbGFiZWwgcG9zaXRpb24uXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBhcmU6IGBsZWZ0YCwgYHJpZ2h0YCwgYHN0YXJ0YCwgYGVuZGAgKGRlZmF1bHQpXG4gICAqL1xuICBASW5wdXQoKSBsYWJlbFBvc2l0aW9uOiAnbGVmdCcgfCAncmlnaHQnIHwgJ3N0YXJ0JyB8ICdlbmQnID0gJ2VuZCc7XG5cbiAgLyoqXG4gICAqIE91dHB1dCB3aGVuIGNoZWNrZWQgc3RhdGUgaXMgY2hhbmdlZCBieSBhIHVzZXJcbiAgICogQHR5cGUgRXZlbnRFbWl0dGVyPGJvb2xlYW4+XG4gICAqL1xuICBAT3V0cHV0KCkgY2hlY2tlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1wcmltYXJ5JylcbiAgZ2V0IHByaW1hcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAncHJpbWFyeSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1zdWNjZXNzJylcbiAgZ2V0IHN1Y2Nlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnc3VjY2Vzcyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy13YXJuaW5nJylcbiAgZ2V0IHdhcm5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnd2FybmluZyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1kYW5nZXInKVxuICBnZXQgZGFuZ2VyKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ2Rhbmdlcic7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1pbmZvJylcbiAgZ2V0IGluZm8oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnaW5mbyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1iYXNpYycpXG4gIGdldCBiYXNpYygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdiYXNpYyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1jb250cm9sJylcbiAgZ2V0IGNvbnRyb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnY29udHJvbCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGFkZGl0aW9uYWxDbGFzc2VzKCk6IHN0cmluZ1tdIHtcbiAgICBpZiAodGhpcy5zdGF0dXNTZXJ2aWNlLmlzQ3VzdG9tU3RhdHVzKHRoaXMuc3RhdHVzKSkge1xuICAgICAgcmV0dXJuIFt0aGlzLnN0YXR1c1NlcnZpY2UuZ2V0U3RhdHVzQ2xhc3ModGhpcy5zdGF0dXMpXTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50b2dnbGUtbGFiZWwtbGVmdCcpXG4gIGdldCBsYWJlbExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxQb3NpdGlvbiA9PT0gJ2xlZnQnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50b2dnbGUtbGFiZWwtcmlnaHQnKVxuICBnZXQgbGFiZWxSaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbFBvc2l0aW9uID09PSAncmlnaHQnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50b2dnbGUtbGFiZWwtc3RhcnQnKVxuICBnZXQgbGFiZWxTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbFBvc2l0aW9uID09PSAnc3RhcnQnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50b2dnbGUtbGFiZWwtZW5kJylcbiAgZ2V0IGxhYmVsRW5kKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsUG9zaXRpb24gPT09ICdlbmQnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBsYXlvdXREaXJlY3Rpb246IE5iTGF5b3V0RGlyZWN0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBob3N0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHJvdGVjdGVkIHN0YXR1c1NlcnZpY2U6IE5iU3RhdHVzU2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubGF5b3V0RGlyZWN0aW9uLm9uRGlyZWN0aW9uQ2hhbmdlKClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCkpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIFRPRE86ICMyMjU0XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICduYi10cmFuc2l0aW9uJyk7XG4gICAgfSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgY2hlY2tTdGF0ZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmxheW91dERpcmVjdGlvbi5pc0x0cigpID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5sYXlvdXREaXJlY3Rpb24uaXNMdHIoKSA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsOiBhbnkpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSB2YWw7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWwpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICB1cGRhdGVWYWx1ZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBpbnB1dCA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCk7XG4gICAgdGhpcy5jaGVja2VkID0gaW5wdXQuY2hlY2tlZDtcbiAgICB0aGlzLmNoZWNrZWRDaGFuZ2UuZW1pdCh0aGlzLmNoZWNrZWQpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5jaGVja2VkKTtcbiAgfVxuXG4gIG9uSW5wdXRDbGljayhldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuIl19