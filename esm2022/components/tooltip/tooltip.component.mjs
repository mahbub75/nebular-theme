/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, HostBinding, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NbPosition } from '../cdk/overlay/overlay-position';
import * as i0 from "@angular/core";
import * as i1 from "../../services/status.service";
import * as i2 from "@angular/common";
import * as i3 from "../icon/icon.component";
/**
 * Tooltip container.
 * Renders provided tooltip inside.
 *
 * @styles
 *
 * tooltip-background-color:
 * tooltip-border-color:
 * tooltip-border-style:
 * tooltip-border-width:
 * tooltip-border-radius:
 * tooltip-padding:
 * tooltip-text-color:
 * tooltip-text-font-family:
 * tooltip-text-font-size:
 * tooltip-text-font-weight:
 * tooltip-text-line-height:
 * tooltip-icon-height:
 * tooltip-icon-width:
 * tooltip-max-width:
 * tooltip-basic-background-color:
 * tooltip-basic-border-color:
 * tooltip-basic-text-color:
 * tooltip-primary-background-color:
 * tooltip-primary-border-color:
 * tooltip-primary-text-color:
 * tooltip-info-background-color:
 * tooltip-info-border-color:
 * tooltip-info-text-color:
 * tooltip-success-background-color:
 * tooltip-success-border-color:
 * tooltip-success-text-color:
 * tooltip-warning-background-color:
 * tooltip-warning-border-color:
 * tooltip-warning-text-color:
 * tooltip-danger-background-color:
 * tooltip-danger-border-color:
 * tooltip-danger-text-color:
 * tooltip-control-background-color:
 * tooltip-control-border-color:
 * tooltip-control-text-color:
 * tooltip-shadow:
 */
export class NbTooltipComponent {
    get binding() {
        return `${this.position} ${this.statusClass}`;
    }
    get show() {
        return true;
    }
    get statusClass() {
        if (this.context.status) {
            return this.statusService.getStatusClass(this.context.status);
        }
        return '';
    }
    constructor(statusService) {
        this.statusService = statusService;
        /**
         * Popover position relatively host element.
         * */
        this.position = NbPosition.TOP;
        this.context = {};
    }
    /**
     * The method is empty since we don't need to do anything additionally
     * render is handled by change detection
     */
    renderContent() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTooltipComponent, deps: [{ token: i1.NbStatusService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: NbTooltipComponent, selector: "nb-tooltip", inputs: { content: "content", position: "position", context: "context" }, host: { properties: { "class": "this.binding", "@showTooltip": "this.show" } }, ngImport: i0, template: `
    <span class="arrow"></span>
    <div class="content">
      <nb-icon *ngIf="context?.icon" [config]="context.icon"></nb-icon>
      <span *ngIf="content">{{ content }}</span>
    </div>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{z-index:10000}:host .content{display:flex;align-items:center}:host.right .content{flex-direction:row-reverse}:host .arrow{position:absolute;width:0;height:0}:host nb-icon+span{margin-left:.5rem}:host.right nb-icon+span{margin-right:.5rem}:host .arrow{border-left:6px solid transparent;border-right:6px solid transparent}:host(.bottom) .arrow{top:-6px;left:calc(50% - 6px)}:host(.bottom-start) .arrow{top:-6px}[dir=ltr] :host(.bottom-start) .arrow{right:6px}[dir=rtl] :host(.bottom-start) .arrow{left:6px}:host(.bottom-end) .arrow{top:-6px}[dir=ltr] :host(.bottom-end) .arrow{left:6px}[dir=rtl] :host(.bottom-end) .arrow{right:6px}:host(.left) .arrow,:host(.start) .arrow{top:calc(50% - 2.4px)}[dir=ltr] :host(.left) .arrow,[dir=ltr] :host(.start) .arrow{right:-8px;transform:rotate(90deg)}[dir=rtl] :host(.left) .arrow,[dir=rtl] :host(.start) .arrow{left:-8px;transform:rotate(270deg)}:host(.start-top) .arrow{right:-8px;bottom:6px;transform:rotate(90deg)}:host(.start-bottom) .arrow{right:-8px;top:6px;transform:rotate(90deg)}:host(.top) .arrow{bottom:-6px;left:calc(50% - 6px);transform:rotate(180deg)}:host(.top-start) .arrow{bottom:-5px;transform:rotate(180deg)}[dir=ltr] :host(.top-start) .arrow{right:6px}[dir=rtl] :host(.top-start) .arrow{left:6px}:host(.top-end) .arrow{bottom:-5px;transform:rotate(180deg)}[dir=ltr] :host(.top-end) .arrow{left:6px}[dir=rtl] :host(.top-end) .arrow{right:6px}:host(.right) .arrow,:host(.end) .arrow{top:calc(50% - 2.4px)}[dir=ltr] :host(.right) .arrow,[dir=ltr] :host(.end) .arrow{left:-8px;transform:rotate(270deg)}[dir=rtl] :host(.right) .arrow,[dir=rtl] :host(.end) .arrow{right:-8px;transform:rotate(90deg)}:host(.end-top) .arrow{left:-8.4px;bottom:6px;transform:rotate(270deg)}:host(.end-bottom) .arrow{left:-8.4px;top:6px;transform:rotate(270deg)}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }], animations: [
            trigger('showTooltip', [
                state('in', style({ opacity: 1 })),
                transition('void => *', [
                    style({ opacity: 0 }),
                    animate(100),
                ]),
                transition('* => void', [
                    animate(100, style({ opacity: 0 })),
                ]),
            ]),
        ] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTooltipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-tooltip', template: `
    <span class="arrow"></span>
    <div class="content">
      <nb-icon *ngIf="context?.icon" [config]="context.icon"></nb-icon>
      <span *ngIf="content">{{ content }}</span>
    </div>
  `, animations: [
                        trigger('showTooltip', [
                            state('in', style({ opacity: 1 })),
                            transition('void => *', [
                                style({ opacity: 0 }),
                                animate(100),
                            ]),
                            transition('* => void', [
                                animate(100, style({ opacity: 0 })),
                            ]),
                        ]),
                    ], styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{z-index:10000}:host .content{display:flex;align-items:center}:host.right .content{flex-direction:row-reverse}:host .arrow{position:absolute;width:0;height:0}:host nb-icon+span{margin-left:.5rem}:host.right nb-icon+span{margin-right:.5rem}:host .arrow{border-left:6px solid transparent;border-right:6px solid transparent}:host(.bottom) .arrow{top:-6px;left:calc(50% - 6px)}:host(.bottom-start) .arrow{top:-6px}[dir=ltr] :host(.bottom-start) .arrow{right:6px}[dir=rtl] :host(.bottom-start) .arrow{left:6px}:host(.bottom-end) .arrow{top:-6px}[dir=ltr] :host(.bottom-end) .arrow{left:6px}[dir=rtl] :host(.bottom-end) .arrow{right:6px}:host(.left) .arrow,:host(.start) .arrow{top:calc(50% - 2.4px)}[dir=ltr] :host(.left) .arrow,[dir=ltr] :host(.start) .arrow{right:-8px;transform:rotate(90deg)}[dir=rtl] :host(.left) .arrow,[dir=rtl] :host(.start) .arrow{left:-8px;transform:rotate(270deg)}:host(.start-top) .arrow{right:-8px;bottom:6px;transform:rotate(90deg)}:host(.start-bottom) .arrow{right:-8px;top:6px;transform:rotate(90deg)}:host(.top) .arrow{bottom:-6px;left:calc(50% - 6px);transform:rotate(180deg)}:host(.top-start) .arrow{bottom:-5px;transform:rotate(180deg)}[dir=ltr] :host(.top-start) .arrow{right:6px}[dir=rtl] :host(.top-start) .arrow{left:6px}:host(.top-end) .arrow{bottom:-5px;transform:rotate(180deg)}[dir=ltr] :host(.top-end) .arrow{left:6px}[dir=rtl] :host(.top-end) .arrow{right:6px}:host(.right) .arrow,:host(.end) .arrow{top:calc(50% - 2.4px)}[dir=ltr] :host(.right) .arrow,[dir=ltr] :host(.end) .arrow{left:-8px;transform:rotate(270deg)}[dir=rtl] :host(.right) .arrow,[dir=rtl] :host(.end) .arrow{right:-8px;transform:rotate(90deg)}:host(.end-top) .arrow{left:-8.4px;bottom:6px;transform:rotate(270deg)}:host(.end-bottom) .arrow{left:-8.4px;top:6px;transform:rotate(270deg)}\n"] }]
        }], ctorParameters: () => [{ type: i1.NbStatusService }], propDecorators: { content: [{
                type: Input
            }], position: [{
                type: Input
            }], binding: [{
                type: HostBinding,
                args: ['class']
            }], show: [{
                type: HostBinding,
                args: ['@showTooltip']
            }], context: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLakYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7OztBQUk3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMENHO0FBd0JILE1BQU0sT0FBTyxrQkFBa0I7SUFXN0IsSUFDSSxPQUFPO1FBQ1QsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRCxJQUNJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFLRCxJQUFJLFdBQVc7UUFDYixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDeEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLENBQUM7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxZQUFzQixhQUE4QjtRQUE5QixrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUEzQnBEOzthQUVLO1FBRUwsYUFBUSxHQUFlLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFhdEMsWUFBTyxHQUF5RSxFQUFFLENBQUM7SUFXbkYsQ0FBQztJQUVEOzs7T0FHRztJQUNILGFBQWEsS0FBSSxDQUFDOzhHQXZDUCxrQkFBa0I7a0dBQWxCLGtCQUFrQiw0TUFwQm5COzs7Ozs7R0FNVCx5c0VBQ1c7WUFDVixPQUFPLENBQUMsYUFBYSxFQUFFO2dCQUNyQixLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNsQyxVQUFVLENBQUMsV0FBVyxFQUFFO29CQUN0QixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUM7aUJBQ2IsQ0FBQztnQkFDRixVQUFVLENBQUMsV0FBVyxFQUFFO29CQUN0QixPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNwQyxDQUFDO2FBQ0gsQ0FBQztTQUNIOzsyRkFFVSxrQkFBa0I7a0JBdkI5QixTQUFTOytCQUNFLFlBQVksWUFFWjs7Ozs7O0dBTVQsY0FDVzt3QkFDVixPQUFPLENBQUMsYUFBYSxFQUFFOzRCQUNyQixLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUNsQyxVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0NBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUM7NkJBQ2IsQ0FBQzs0QkFDRixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzZCQUNwQyxDQUFDO3lCQUNILENBQUM7cUJBQ0g7b0ZBS0QsT0FBTztzQkFETixLQUFLO2dCQU9OLFFBQVE7c0JBRFAsS0FBSztnQkFJRixPQUFPO3NCQURWLFdBQVc7dUJBQUMsT0FBTztnQkFNaEIsSUFBSTtzQkFEUCxXQUFXO3VCQUFDLGNBQWM7Z0JBTTNCLE9BQU87c0JBRE4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7IE5iU3RhdHVzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3N0YXR1cy5zZXJ2aWNlJztcbmltcG9ydCB7IE5iQ29tcG9uZW50T3JDdXN0b21TdGF0dXMgfSBmcm9tICcuLi9jb21wb25lbnQtc3RhdHVzJztcbmltcG9ydCB7IE5iUmVuZGVyYWJsZUNvbnRhaW5lciB9IGZyb20gJy4uL2Nkay9vdmVybGF5L292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7IE5iUG9zaXRpb24gfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9vdmVybGF5LXBvc2l0aW9uJztcbmltcG9ydCB7IE5iSWNvbkNvbmZpZyB9IGZyb20gJy4uL2ljb24vaWNvbi5jb21wb25lbnQnO1xuXG5cbi8qKlxuICogVG9vbHRpcCBjb250YWluZXIuXG4gKiBSZW5kZXJzIHByb3ZpZGVkIHRvb2x0aXAgaW5zaWRlLlxuICpcbiAqIEBzdHlsZXNcbiAqXG4gKiB0b29sdGlwLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b29sdGlwLWJvcmRlci1jb2xvcjpcbiAqIHRvb2x0aXAtYm9yZGVyLXN0eWxlOlxuICogdG9vbHRpcC1ib3JkZXItd2lkdGg6XG4gKiB0b29sdGlwLWJvcmRlci1yYWRpdXM6XG4gKiB0b29sdGlwLXBhZGRpbmc6XG4gKiB0b29sdGlwLXRleHQtY29sb3I6XG4gKiB0b29sdGlwLXRleHQtZm9udC1mYW1pbHk6XG4gKiB0b29sdGlwLXRleHQtZm9udC1zaXplOlxuICogdG9vbHRpcC10ZXh0LWZvbnQtd2VpZ2h0OlxuICogdG9vbHRpcC10ZXh0LWxpbmUtaGVpZ2h0OlxuICogdG9vbHRpcC1pY29uLWhlaWdodDpcbiAqIHRvb2x0aXAtaWNvbi13aWR0aDpcbiAqIHRvb2x0aXAtbWF4LXdpZHRoOlxuICogdG9vbHRpcC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9vbHRpcC1iYXNpYy1ib3JkZXItY29sb3I6XG4gKiB0b29sdGlwLWJhc2ljLXRleHQtY29sb3I6XG4gKiB0b29sdGlwLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvb2x0aXAtcHJpbWFyeS1ib3JkZXItY29sb3I6XG4gKiB0b29sdGlwLXByaW1hcnktdGV4dC1jb2xvcjpcbiAqIHRvb2x0aXAtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9vbHRpcC1pbmZvLWJvcmRlci1jb2xvcjpcbiAqIHRvb2x0aXAtaW5mby10ZXh0LWNvbG9yOlxuICogdG9vbHRpcC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b29sdGlwLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOlxuICogdG9vbHRpcC1zdWNjZXNzLXRleHQtY29sb3I6XG4gKiB0b29sdGlwLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvb2x0aXAtd2FybmluZy1ib3JkZXItY29sb3I6XG4gKiB0b29sdGlwLXdhcm5pbmctdGV4dC1jb2xvcjpcbiAqIHRvb2x0aXAtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b29sdGlwLWRhbmdlci1ib3JkZXItY29sb3I6XG4gKiB0b29sdGlwLWRhbmdlci10ZXh0LWNvbG9yOlxuICogdG9vbHRpcC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b29sdGlwLWNvbnRyb2wtYm9yZGVyLWNvbG9yOlxuICogdG9vbHRpcC1jb250cm9sLXRleHQtY29sb3I6XG4gKiB0b29sdGlwLXNoYWRvdzpcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItdG9vbHRpcCcsXG4gIHN0eWxlVXJsczogWycuL3Rvb2x0aXAuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBjbGFzcz1cImFycm93XCI+PC9zcGFuPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICA8bmItaWNvbiAqbmdJZj1cImNvbnRleHQ/Lmljb25cIiBbY29uZmlnXT1cImNvbnRleHQuaWNvblwiPjwvbmItaWNvbj5cbiAgICAgIDxzcGFuICpuZ0lmPVwiY29udGVudFwiPnt7IGNvbnRlbnQgfX08L3NwYW4+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzaG93VG9vbHRpcCcsIFtcbiAgICAgIHN0YXRlKCdpbicsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCB9KSxcbiAgICAgICAgYW5pbWF0ZSgxMDApLFxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIGFuaW1hdGUoMTAwLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5iVG9vbHRpcENvbXBvbmVudCBpbXBsZW1lbnRzIE5iUmVuZGVyYWJsZUNvbnRhaW5lciB7XG5cbiAgQElucHV0KClcbiAgY29udGVudDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQb3BvdmVyIHBvc2l0aW9uIHJlbGF0aXZlbHkgaG9zdCBlbGVtZW50LlxuICAgKiAqL1xuICBASW5wdXQoKVxuICBwb3NpdGlvbjogTmJQb3NpdGlvbiA9IE5iUG9zaXRpb24uVE9QO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgYmluZGluZygpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5wb3NpdGlvbn0gJHt0aGlzLnN0YXR1c0NsYXNzfWA7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ0BzaG93VG9vbHRpcCcpXG4gIGdldCBzaG93KCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgY29udGV4dDogeyBpY29uPzogc3RyaW5nIHwgTmJJY29uQ29uZmlnLCBzdGF0dXM/OiBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzIH0gPSB7fTtcblxuICBnZXQgc3RhdHVzQ2xhc3MoKSB7XG4gICAgaWYgKHRoaXMuY29udGV4dC5zdGF0dXMpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXR1c1NlcnZpY2UuZ2V0U3RhdHVzQ2xhc3ModGhpcy5jb250ZXh0LnN0YXR1cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0YXR1c1NlcnZpY2U6IE5iU3RhdHVzU2VydmljZSkge1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBtZXRob2QgaXMgZW1wdHkgc2luY2Ugd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZyBhZGRpdGlvbmFsbHlcbiAgICogcmVuZGVyIGlzIGhhbmRsZWQgYnkgY2hhbmdlIGRldGVjdGlvblxuICAgKi9cbiAgcmVuZGVyQ29udGVudCgpIHt9XG59XG4iXX0=