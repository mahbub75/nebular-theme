/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Directive, EventEmitter, HostBinding, HostListener, Inject, Input, Optional, Output, } from '@angular/core';
import { Subject } from 'rxjs';
import { convertToBoolProperty } from '../helpers';
import { NbButton } from '../button/base-button';
import { NB_BUTTON_GROUP } from './button-group-injection-tokens';
import * as i0 from "@angular/core";
import * as i1 from "../../services/status.service";
/**
 * `[nbButtonToggle]` is a directive to add a `pressed` state to a button.
 */
export class NbButtonToggleDirective extends NbButton {
    get pressedChange$() {
        return this._pressedChange$.asObservable();
    }
    /**
     * Controls button pressed state
     **/
    get pressed() {
        return this._pressed;
    }
    set pressed(value) {
        if (this.pressed !== convertToBoolProperty(value)) {
            this._pressed = !this.pressed;
            this.pressedChange.emit(this.pressed);
            this._pressedChange$.next({ source: this, pressed: this.pressed });
        }
    }
    get basic() {
        // By design, all toggle buttons should have a `basic` status when not pressed.
        return !this.pressed;
    }
    get primary() {
        return this.pressed && (this.status === 'basic' || this.status === 'primary');
    }
    get success() {
        return this.pressed && this.status === 'success';
    }
    get info() {
        return this.pressed && this.status === 'info';
    }
    get warning() {
        return this.pressed && this.status === 'warning';
    }
    get danger() {
        return this.pressed && this.status === 'danger';
    }
    get control() {
        return this.pressed && this.status === 'control';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    onClick() {
        // Don't remove the pressed state of the button in single-toggle button-groups
        if (this.buttonGroup?.multiple || !this.pressed) {
            this.pressed = !this.pressed;
        }
    }
    constructor(renderer, hostElement, cd, zone, statusService, buttonGroup) {
        super(renderer, hostElement, cd, zone, statusService);
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.cd = cd;
        this.zone = zone;
        this.statusService = statusService;
        this.buttonGroup = buttonGroup;
        this._pressedChange$ = new Subject();
        this.appearance = 'filled';
        this._pressed = false;
        /**
         * Emits whenever button pressed state change
         **/
        this.pressedChange = new EventEmitter();
    }
    /**
     * @docs-private
     */
    _updatePressed(value) {
        this.pressed = value;
        this.cd.markForCheck();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbButtonToggleDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }, { token: i1.NbStatusService }, { token: NB_BUTTON_GROUP, optional: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.1.0", type: NbButtonToggleDirective, selector: "button[nbButtonToggle]", inputs: { appearance: "appearance", value: "value", pressed: "pressed" }, outputs: { pressedChange: "pressedChange" }, host: { listeners: { "click": "onClick()" }, properties: { "attr.aria-pressed": "this.pressed", "class.status-basic": "this.basic", "class.status-primary": "this.primary", "class.status-success": "this.success", "class.status-info": "this.info", "class.status-warning": "this.warning", "class.status-danger": "this.danger", "class.status-control": "this.control", "class": "this.additionalClasses" } }, providers: [{ provide: NbButton, useExisting: NbButtonToggleDirective }], exportAs: ["nbButtonToggle"], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbButtonToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[nbButtonToggle]',
                    providers: [{ provide: NbButton, useExisting: NbButtonToggleDirective }],
                    exportAs: 'nbButtonToggle',
                }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i1.NbStatusService }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NB_BUTTON_GROUP]
                }] }], propDecorators: { appearance: [{
                type: Input
            }], value: [{
                type: Input
            }], pressed: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.aria-pressed']
            }], pressedChange: [{
                type: Output
            }], basic: [{
                type: HostBinding,
                args: ['class.status-basic']
            }], primary: [{
                type: HostBinding,
                args: ['class.status-primary']
            }], success: [{
                type: HostBinding,
                args: ['class.status-success']
            }], info: [{
                type: HostBinding,
                args: ['class.status-info']
            }], warning: [{
                type: HostBinding,
                args: ['class.status-warning']
            }], danger: [{
                type: HostBinding,
                args: ['class.status-danger']
            }], control: [{
                type: HostBinding,
                args: ['class.status-control']
            }], additionalClasses: [{
                type: HostBinding,
                args: ['class']
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwL2J1dHRvbi10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBRUwsU0FBUyxFQUVULFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsUUFBUSxFQUNSLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBa0IsTUFBTSxZQUFZLENBQUM7QUFDbkUsT0FBTyxFQUFFLFFBQVEsRUFBc0IsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7OztBQVNsRTs7R0FFRztBQU1ILE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxRQUFRO0lBR25ELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQVNEOztRQUVJO0lBQ0osSUFFSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFjO1FBQ3hCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUks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QkFBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyx5QkFBeUIsRUFBRSxDQUFDO29CQUN4RSxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7MEJBZ0dJLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsZUFBZTt5Q0F4RjVCLFVBQVU7c0JBQWxCLEtBQUs7Z0JBS0csS0FBSztzQkFBYixLQUFLO2dCQU9GLE9BQU87c0JBRlYsS0FBSzs7c0JBQ0wsV0FBVzt1QkFBQyxtQkFBbUI7Z0JBaUJiLGFBQWE7c0JBQS9CLE1BQU07Z0JBR0gsS0FBSztzQkFEUixXQUFXO3VCQUFDLG9CQUFvQjtnQkFPN0IsT0FBTztzQkFEVixXQUFXO3VCQUFDLHNCQUFzQjtnQkFNL0IsT0FBTztzQkFEVixXQUFXO3VCQUFDLHNCQUFzQjtnQkFNL0IsSUFBSTtzQkFEUCxXQUFXO3VCQUFDLG1CQUFtQjtnQkFNNUIsT0FBTztzQkFEVixXQUFXO3VCQUFDLHNCQUFzQjtnQkFNL0IsTUFBTTtzQkFEVCxXQUFXO3VCQUFDLHFCQUFxQjtnQkFNOUIsT0FBTztzQkFEVixXQUFXO3VCQUFDLHNCQUFzQjtnQkFNL0IsaUJBQWlCO3NCQURwQixXQUFXO3VCQUFDLE9BQU87Z0JBU3BCLE9BQU87c0JBRE4sWUFBWTt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTmJTdGF0dXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RhdHVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgY29udmVydFRvQm9vbFByb3BlcnR5LCBOYkJvb2xlYW5JbnB1dCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgTmJCdXR0b24sIE5iQnV0dG9uQXBwZWFyYW5jZSB9IGZyb20gJy4uL2J1dHRvbi9iYXNlLWJ1dHRvbic7XG5pbXBvcnQgeyBOQl9CVVRUT05fR1JPVVAgfSBmcm9tICcuL2J1dHRvbi1ncm91cC1pbmplY3Rpb24tdG9rZW5zJztcblxuZXhwb3J0IHR5cGUgTmJCdXR0b25Ub2dnbGVBcHBlYXJhbmNlID0gRXhjbHVkZTxOYkJ1dHRvbkFwcGVhcmFuY2UsICdoZXJvJz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmJCdXR0b25Ub2dnbGVDaGFuZ2Uge1xuICBzb3VyY2U6IE5iQnV0dG9uVG9nZ2xlRGlyZWN0aXZlO1xuICBwcmVzc2VkOiBib29sZWFuO1xufVxuXG4vKipcbiAqIGBbbmJCdXR0b25Ub2dnbGVdYCBpcyBhIGRpcmVjdGl2ZSB0byBhZGQgYSBgcHJlc3NlZGAgc3RhdGUgdG8gYSBidXR0b24uXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2J1dHRvbltuYkJ1dHRvblRvZ2dsZV0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5iQnV0dG9uLCB1c2VFeGlzdGluZzogTmJCdXR0b25Ub2dnbGVEaXJlY3RpdmUgfV0sXG4gIGV4cG9ydEFzOiAnbmJCdXR0b25Ub2dnbGUnLFxufSlcbmV4cG9ydCBjbGFzcyBOYkJ1dHRvblRvZ2dsZURpcmVjdGl2ZSBleHRlbmRzIE5iQnV0dG9uIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9wcmVzc2VkQ2hhbmdlJCA9IG5ldyBTdWJqZWN0PE5iQnV0dG9uVG9nZ2xlQ2hhbmdlPigpO1xuXG4gIGdldCBwcmVzc2VkQ2hhbmdlJCgpOiBPYnNlcnZhYmxlPE5iQnV0dG9uVG9nZ2xlQ2hhbmdlPiB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZXNzZWRDaGFuZ2UkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgQElucHV0KCkgYXBwZWFyYW5jZTogTmJCdXR0b25Ub2dnbGVBcHBlYXJhbmNlID0gJ2ZpbGxlZCc7XG5cbiAgLyoqXG4gICAqIEEgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBidXR0b24uXG4gICAqL1xuICBASW5wdXQoKSB2YWx1ZTogYW55O1xuXG4gIC8qKlxuICAgKiBDb250cm9scyBidXR0b24gcHJlc3NlZCBzdGF0ZVxuICAgKiovXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXByZXNzZWQnKVxuICBnZXQgcHJlc3NlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlc3NlZDtcbiAgfVxuICBzZXQgcHJlc3NlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLnByZXNzZWQgIT09IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX3ByZXNzZWQgPSAhdGhpcy5wcmVzc2VkO1xuICAgICAgdGhpcy5wcmVzc2VkQ2hhbmdlLmVtaXQodGhpcy5wcmVzc2VkKTtcbiAgICAgIHRoaXMuX3ByZXNzZWRDaGFuZ2UkLm5leHQoeyBzb3VyY2U6IHRoaXMsIHByZXNzZWQ6IHRoaXMucHJlc3NlZCB9KTtcbiAgICB9XG4gIH1cbiAgcHJvdGVjdGVkIF9wcmVzc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9wcmVzc2VkOiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogRW1pdHMgd2hlbmV2ZXIgYnV0dG9uIHByZXNzZWQgc3RhdGUgY2hhbmdlXG4gICAqKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHByZXNzZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGF0dXMtYmFzaWMnKVxuICBnZXQgYmFzaWMoKTogYm9vbGVhbiB7XG4gICAgLy8gQnkgZGVzaWduLCBhbGwgdG9nZ2xlIGJ1dHRvbnMgc2hvdWxkIGhhdmUgYSBgYmFzaWNgIHN0YXR1cyB3aGVuIG5vdCBwcmVzc2VkLlxuICAgIHJldHVybiAhdGhpcy5wcmVzc2VkO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGF0dXMtcHJpbWFyeScpXG4gIGdldCBwcmltYXJ5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByZXNzZWQgJiYgKHRoaXMuc3RhdHVzID09PSAnYmFzaWMnIHx8IHRoaXMuc3RhdHVzID09PSAncHJpbWFyeScpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGF0dXMtc3VjY2VzcycpXG4gIGdldCBzdWNjZXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByZXNzZWQgJiYgdGhpcy5zdGF0dXMgPT09ICdzdWNjZXNzJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWluZm8nKVxuICBnZXQgaW5mbygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcmVzc2VkICYmIHRoaXMuc3RhdHVzID09PSAnaW5mbyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy13YXJuaW5nJylcbiAgZ2V0IHdhcm5pbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJlc3NlZCAmJiB0aGlzLnN0YXR1cyA9PT0gJ3dhcm5pbmcnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGF0dXMtZGFuZ2VyJylcbiAgZ2V0IGRhbmdlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcmVzc2VkICYmIHRoaXMuc3RhdHVzID09PSAnZGFuZ2VyJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWNvbnRyb2wnKVxuICBnZXQgY29udHJvbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcmVzc2VkICYmIHRoaXMuc3RhdHVzID09PSAnY29udHJvbCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGFkZGl0aW9uYWxDbGFzc2VzKCk6IHN0cmluZ1tdIHtcbiAgICBpZiAodGhpcy5zdGF0dXNTZXJ2aWNlLmlzQ3VzdG9tU3RhdHVzKHRoaXMuc3RhdHVzKSkge1xuICAgICAgcmV0dXJuIFt0aGlzLnN0YXR1c1NlcnZpY2UuZ2V0U3RhdHVzQ2xhc3ModGhpcy5zdGF0dXMpXTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIC8vIERvbid0IHJlbW92ZSB0aGUgcHJlc3NlZCBzdGF0ZSBvZiB0aGUgYnV0dG9uIGluIHNpbmdsZS10b2dnbGUgYnV0dG9uLWdyb3Vwc1xuICAgIGlmICh0aGlzLmJ1dHRvbkdyb3VwPy5tdWx0aXBsZSB8fCAhdGhpcy5wcmVzc2VkKSB7XG4gICAgICB0aGlzLnByZXNzZWQgPSAhdGhpcy5wcmVzc2VkO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByb3RlY3RlZCBob3N0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgIHByb3RlY3RlZCBzdGF0dXNTZXJ2aWNlOiBOYlN0YXR1c1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOQl9CVVRUT05fR1JPVVApIHByb3RlY3RlZCBidXR0b25Hcm91cD8sXG4gICkge1xuICAgIHN1cGVyKHJlbmRlcmVyLCBob3N0RWxlbWVudCwgY2QsIHpvbmUsIHN0YXR1c1NlcnZpY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIF91cGRhdGVQcmVzc2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5wcmVzc2VkID0gdmFsdWU7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19