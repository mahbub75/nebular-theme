/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Directive, EventEmitter, HostBinding, HostListener, Input, Output, } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { ENTER } from '../cdk/keycodes/keycodes';
import { NbFormFieldControl } from '../form-field/form-field-control';
import { NbInputDirective } from '../input/input.directive';
import * as i0 from "@angular/core";
import * as i1 from "../cdk/a11y/a11y.module";
import * as i2 from "../../services/status.service";
/**
 *
 * `[nbTagInput]` directive connects input with a `nb-tag-list` component.
 *
 * @stacked-example(Tag Input, tag/tag-input.component)
 *
 * @additional-example(Tag Input with Autocomplete, tag/tag-input-with-autocomplete.component)
 *
 * @styles
 *
 * tag-list-tiny-tag-offset:
 * tag-list-small-tag-offset:
 * tag-list-medium-tag-offset:
 * tag-list-large-tag-offset:
 * tag-list-giant-tag-offset:
 * tag-list-with-input-tiny-padding:
 * tag-list-with-input-small-padding:
 * tag-list-with-input-medium-padding:
 * tag-list-with-input-large-padding:
 * tag-list-with-input-giant-padding:
 */
export class NbTagInputDirective extends NbInputDirective {
    get _value() {
        return this._hostElement.nativeElement.value;
    }
    _onKeydown(event) {
        this.keyDown$.next(event);
    }
    constructor(_hostElement, focusMonitor, renderer, zone, statusService) {
        super(_hostElement, focusMonitor, renderer, zone, statusService);
        this._hostElement = _hostElement;
        this.focusMonitor = focusMonitor;
        this.renderer = renderer;
        this.zone = zone;
        this.statusService = statusService;
        this.keyDown$ = new Subject();
        /**
         * Controls which keys should trigger tag add event.
         */
        this.separatorKeys = [ENTER];
        /**
         * Emits when a tag need to be added.
         */
        this.tagAdd = new EventEmitter();
        this.nbTagInputClass = true;
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.keyDown$
            .pipe(filter(({ keyCode }) => this.isSeparatorKey(keyCode)), map(() => this._value), takeUntil(this.destroy$))
            .subscribe((value) => this.tagAdd.emit({ value, input: this._hostElement }));
    }
    isSeparatorKey(keyCode) {
        return this.separatorKeys.includes(keyCode);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTagInputDirective, deps: [{ token: i0.ElementRef }, { token: i1.NbFocusMonitor }, { token: i0.Renderer2 }, { token: i0.NgZone }, { token: i2.NbStatusService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.1.0", type: NbTagInputDirective, selector: "input[nbTagInput]", inputs: { separatorKeys: "separatorKeys" }, outputs: { tagAdd: "tagAdd" }, host: { listeners: { "keydown": "_onKeydown($event)" }, properties: { "class.nb-tag-input": "this.nbTagInputClass" } }, providers: [
            { provide: NbFormFieldControl, useExisting: NbTagInputDirective },
        ], exportAs: ["nbTagInput"], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTagInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[nbTagInput]',
                    exportAs: 'nbTagInput',
                    providers: [
                        { provide: NbFormFieldControl, useExisting: NbTagInputDirective },
                    ],
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.NbFocusMonitor }, { type: i0.Renderer2 }, { type: i0.NgZone }, { type: i2.NbStatusService }], propDecorators: { separatorKeys: [{
                type: Input
            }], tagAdd: [{
                type: Output
            }], nbTagInputClass: [{
                type: HostBinding,
                args: ['class.nb-tag-input']
            }], _onKeydown: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy90YWcvdGFnLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBTzVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQVFILE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxnQkFBZ0I7SUFJdkQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDL0MsQ0FBQztJQWVELFVBQVUsQ0FBQyxLQUFvQjtRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsWUFDUyxZQUEwQyxFQUN2QyxZQUE0QixFQUM1QixRQUFtQixFQUNuQixJQUFZLEVBQ1osYUFBOEI7UUFFeEMsS0FBSyxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztRQU4xRCxpQkFBWSxHQUFaLFlBQVksQ0FBOEI7UUFDdkMsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBQzVCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQTVCdkIsYUFBUSxHQUEyQixJQUFJLE9BQU8sRUFBaUIsQ0FBQztRQU1uRjs7V0FFRztRQUNNLGtCQUFhLEdBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUzQzs7V0FFRztRQUNPLFdBQU0sR0FBcUMsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFFaEQsb0JBQWUsR0FBRyxJQUFJLENBQUM7SUFlbkUsQ0FBQztJQUVELGVBQWU7UUFDYixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLFFBQVE7YUFDVixJQUFJLENBQ0gsTUFBTSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQWlCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsRUFDcEUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFDdEIsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekI7YUFDQSxTQUFTLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFUyxjQUFjLENBQUMsT0FBZTtRQUN0QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUM7OEdBakRVLG1CQUFtQjtrR0FBbkIsbUJBQW1CLCtPQUpuQjtZQUNULEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRTtTQUNsRTs7MkZBRVUsbUJBQW1CO2tCQVAvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxZQUFZO29CQUN0QixTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxxQkFBcUIsRUFBRTtxQkFDbEU7aUJBQ0Y7dUxBWVUsYUFBYTtzQkFBckIsS0FBSztnQkFLSSxNQUFNO3NCQUFmLE1BQU07Z0JBRXFDLGVBQWU7c0JBQTFELFdBQVc7dUJBQUMsb0JBQW9CO2dCQUdqQyxVQUFVO3NCQURULFlBQVk7dUJBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTmJTdGF0dXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RhdHVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJGb2N1c01vbml0b3IgfSBmcm9tICcuLi9jZGsvYTExeS9hMTF5Lm1vZHVsZSc7XG5pbXBvcnQgeyBFTlRFUiB9IGZyb20gJy4uL2Nkay9rZXljb2Rlcy9rZXljb2Rlcyc7XG5pbXBvcnQgeyBOYkZvcm1GaWVsZENvbnRyb2wgfSBmcm9tICcuLi9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtY29udHJvbCc7XG5pbXBvcnQgeyBOYklucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi4vaW5wdXQvaW5wdXQuZGlyZWN0aXZlJztcblxuZXhwb3J0IGludGVyZmFjZSBOYlRhZ0lucHV0QWRkRXZlbnQge1xuICBpbnB1dDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuLyoqXG4gKlxuICogYFtuYlRhZ0lucHV0XWAgZGlyZWN0aXZlIGNvbm5lY3RzIGlucHV0IHdpdGggYSBgbmItdGFnLWxpc3RgIGNvbXBvbmVudC5cbiAqXG4gKiBAc3RhY2tlZC1leGFtcGxlKFRhZyBJbnB1dCwgdGFnL3RhZy1pbnB1dC5jb21wb25lbnQpXG4gKlxuICogQGFkZGl0aW9uYWwtZXhhbXBsZShUYWcgSW5wdXQgd2l0aCBBdXRvY29tcGxldGUsIHRhZy90YWctaW5wdXQtd2l0aC1hdXRvY29tcGxldGUuY29tcG9uZW50KVxuICpcbiAqIEBzdHlsZXNcbiAqXG4gKiB0YWctbGlzdC10aW55LXRhZy1vZmZzZXQ6XG4gKiB0YWctbGlzdC1zbWFsbC10YWctb2Zmc2V0OlxuICogdGFnLWxpc3QtbWVkaXVtLXRhZy1vZmZzZXQ6XG4gKiB0YWctbGlzdC1sYXJnZS10YWctb2Zmc2V0OlxuICogdGFnLWxpc3QtZ2lhbnQtdGFnLW9mZnNldDpcbiAqIHRhZy1saXN0LXdpdGgtaW5wdXQtdGlueS1wYWRkaW5nOlxuICogdGFnLWxpc3Qtd2l0aC1pbnB1dC1zbWFsbC1wYWRkaW5nOlxuICogdGFnLWxpc3Qtd2l0aC1pbnB1dC1tZWRpdW0tcGFkZGluZzpcbiAqIHRhZy1saXN0LXdpdGgtaW5wdXQtbGFyZ2UtcGFkZGluZzpcbiAqIHRhZy1saXN0LXdpdGgtaW5wdXQtZ2lhbnQtcGFkZGluZzpcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXRbbmJUYWdJbnB1dF0nLFxuICBleHBvcnRBczogJ25iVGFnSW5wdXQnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IE5iRm9ybUZpZWxkQ29udHJvbCwgdXNlRXhpc3Rpbmc6IE5iVGFnSW5wdXREaXJlY3RpdmUgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJUYWdJbnB1dERpcmVjdGl2ZSBleHRlbmRzIE5iSW5wdXREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkga2V5RG93biQ6IFN1YmplY3Q8S2V5Ym9hcmRFdmVudD4gPSBuZXcgU3ViamVjdDxLZXlib2FyZEV2ZW50PigpO1xuXG4gIGdldCBfdmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9scyB3aGljaCBrZXlzIHNob3VsZCB0cmlnZ2VyIHRhZyBhZGQgZXZlbnQuXG4gICAqL1xuICBASW5wdXQoKSBzZXBhcmF0b3JLZXlzOiBudW1iZXJbXSA9IFtFTlRFUl07XG5cbiAgLyoqXG4gICAqIEVtaXRzIHdoZW4gYSB0YWcgbmVlZCB0byBiZSBhZGRlZC5cbiAgICovXG4gIEBPdXRwdXQoKSB0YWdBZGQ6IEV2ZW50RW1pdHRlcjxOYlRhZ0lucHV0QWRkRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOYlRhZ0lucHV0QWRkRXZlbnQ+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uYi10YWctaW5wdXQnKSByZWFkb25seSBuYlRhZ0lucHV0Q2xhc3MgPSB0cnVlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBfb25LZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5rZXlEb3duJC5uZXh0KGV2ZW50KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD4sXG4gICAgcHJvdGVjdGVkIGZvY3VzTW9uaXRvcjogTmJGb2N1c01vbml0b3IsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZSxcbiAgICBwcm90ZWN0ZWQgc3RhdHVzU2VydmljZTogTmJTdGF0dXNTZXJ2aWNlLFxuICApIHtcbiAgICBzdXBlcihfaG9zdEVsZW1lbnQsIGZvY3VzTW9uaXRvciwgcmVuZGVyZXIsIHpvbmUsIHN0YXR1c1NlcnZpY2UpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuXG4gICAgdGhpcy5rZXlEb3duJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoeyBrZXlDb2RlIH06IEtleWJvYXJkRXZlbnQpID0+IHRoaXMuaXNTZXBhcmF0b3JLZXkoa2V5Q29kZSkpLFxuICAgICAgICBtYXAoKCkgPT4gdGhpcy5fdmFsdWUpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB0aGlzLnRhZ0FkZC5lbWl0KHsgdmFsdWUsIGlucHV0OiB0aGlzLl9ob3N0RWxlbWVudCB9KSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNTZXBhcmF0b3JLZXkoa2V5Q29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VwYXJhdG9yS2V5cy5pbmNsdWRlcyhrZXlDb2RlKTtcbiAgfVxufVxuIl19