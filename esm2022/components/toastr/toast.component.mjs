/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, EventEmitter, HostBinding, HostListener, Input, Output, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/status.service";
import * as i2 from "@angular/common";
import * as i3 from "../icon/icon.component";
/**
 * The `NbToastComponent` is responsible for rendering each toast with appropriate styles.
 *
 * @styles
 *
 * toastr-border-style:
 * toastr-border-width:
 * toastr-border-radius:
 * toastr-padding:
 * toastr-shadow:
 * toastr-text-font-family:
 * toastr-text-font-size:
 * toastr-text-font-weight:
 * toastr-text-line-height:
 * toastr-title-text-font-family:
 * toastr-title-text-font-size:
 * toastr-title-text-font-weight:
 * toastr-title-text-line-height:
 * toastr-basic-background-color:
 * toastr-basic-border-color:
 * toastr-basic-text-color:
 * toastr-icon-basic-background-color:
 * toastr-icon-basic-color:
 * toastr-destroyable-basic-hover-background-color:
 * toastr-destroyable-basic-hover-border-color:
 * toastr-primary-background-color:
 * toastr-primary-border-color:
 * toastr-primary-text-color:
 * toastr-icon-primary-background-color:
 * toastr-icon-primary-color:
 * toastr-destroyable-primary-hover-background-color:
 * toastr-destroyable-primary-hover-border-color:
 * toastr-success-background-color:
 * toastr-success-border-color:
 * toastr-success-text-color:
 * toastr-icon-success-background-color:
 * toastr-icon-success-color:
 * toastr-destroyable-success-hover-background-color:
 * toastr-destroyable-success-hover-border-color:
 * toastr-info-background-color:
 * toastr-info-border-color:
 * toastr-info-text-color:
 * toastr-icon-info-background-color:
 * toastr-icon-info-color:
 * toastr-destroyable-info-hover-background-color:
 * toastr-destroyable-info-hover-border-color:
 * toastr-warning-background-color:
 * toastr-warning-border-color:
 * toastr-warning-text-color:
 * toastr-icon-warning-background-color:
 * toastr-icon-warning-color:
 * toastr-destroyable-warning-hover-background-color:
 * toastr-destroyable-warning-hover-border-color:
 * toastr-danger-background-color:
 * toastr-danger-border-color:
 * toastr-danger-text-color:
 * toastr-icon-danger-background-color:
 * toastr-icon-danger-color:
 * toastr-destroyable-danger-hover-background-color:
 * toastr-destroyable-danger-hover-border-color:
 * toastr-control-background-color:
 * toastr-control-border-color:
 * toastr-control-text-color:
 * toastr-icon-control-background-color:
 * toastr-icon-control-color:
 * toastr-destroyable-control-hover-background-color:
 * toastr-destroyable-control-hover-border-color:
 * */
export class NbToastComponent {
    get success() {
        return this.toast.config.status === 'success';
    }
    get info() {
        return this.toast.config.status === 'info';
    }
    get warning() {
        return this.toast.config.status === 'warning';
    }
    get primary() {
        return this.toast.config.status === 'primary';
    }
    get danger() {
        return this.toast.config.status === 'danger';
    }
    get basic() {
        return this.toast.config.status === 'basic';
    }
    get control() {
        return this.toast.config.status === 'control';
    }
    get destroyByClick() {
        return this.toast.config.destroyByClick;
    }
    get hasIcon() {
        const { icon } = this.toast.config;
        if (typeof icon === 'string') {
            return true;
        }
        return !!(icon && icon.icon);
    }
    get customIcon() {
        return !!this.icon;
    }
    get icon() {
        return this.toast.config.icon;
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.toast.config.status)) {
            return [this.statusService.getStatusClass(this.toast.config.status)];
        }
        return [];
    }
    onClick() {
        this.toastClick.emit();
    }
    constructor(renderer, elementRef, statusService) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.statusService = statusService;
        this.destroy = new EventEmitter();
        this.toastClick = new EventEmitter();
    }
    ngOnInit() {
        if (this.toast.config.toastClass) {
            this.renderer.addClass(this.elementRef.nativeElement, this.toast.config.toastClass);
        }
    }
    ngOnDestroy() {
        this.destroy.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbToastComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.NbStatusService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: NbToastComponent, selector: "nb-toast", inputs: { toast: "toast" }, outputs: { destroy: "destroy", toastClick: "toastClick" }, host: { listeners: { "click": "onClick()" }, properties: { "class.status-success": "this.success", "class.status-info": "this.info", "class.status-warning": "this.warning", "class.status-primary": "this.primary", "class.status-danger": "this.danger", "class.status-basic": "this.basic", "class.status-control": "this.control", "class.destroy-by-click": "this.destroyByClick", "class.has-icon": "this.hasIcon", "class.custom-icon": "this.customIcon", "class": "this.additionalClasses" } }, ngImport: i0, template: "<div class=\"icon-container\" *ngIf=\"hasIcon && icon\">\n  <nb-icon [config]=\"icon\"></nb-icon>\n</div>\n<div class=\"content-container\">\n  <span class=\"title subtitle\">{{ toast.title }}</span>\n  <div class=\"message\">{{ toast.message }}</div>\n</div>\n", styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;align-items:center;width:25rem;margin:.5rem}:host .title{margin-right:.25rem}:host.default .content-container,:host:not(.has-icon) .content-container{display:flex;flex-direction:row}:host.destroy-by-click{cursor:pointer}:host nb-icon{font-size:2.5rem}:host svg{width:2.5rem;height:2.5rem}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbToastComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-toast', template: "<div class=\"icon-container\" *ngIf=\"hasIcon && icon\">\n  <nb-icon [config]=\"icon\"></nb-icon>\n</div>\n<div class=\"content-container\">\n  <span class=\"title subtitle\">{{ toast.title }}</span>\n  <div class=\"message\">{{ toast.message }}</div>\n</div>\n", styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;align-items:center;width:25rem;margin:.5rem}:host .title{margin-right:.25rem}:host.default .content-container,:host:not(.has-icon) .content-container{display:flex;flex-direction:row}:host.destroy-by-click{cursor:pointer}:host nb-icon{font-size:2.5rem}:host svg{width:2.5rem;height:2.5rem}\n"] }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.NbStatusService }], propDecorators: { toast: [{
                type: Input
            }], destroy: [{
                type: Output
            }], toastClick: [{
                type: Output
            }], success: [{
                type: HostBinding,
                args: ['class.status-success']
            }], info: [{
                type: HostBinding,
                args: ['class.status-info']
            }], warning: [{
                type: HostBinding,
                args: ['class.status-warning']
            }], primary: [{
                type: HostBinding,
                args: ['class.status-primary']
            }], danger: [{
                type: HostBinding,
                args: ['class.status-danger']
            }], basic: [{
                type: HostBinding,
                args: ['class.status-basic']
            }], control: [{
                type: HostBinding,
                args: ['class.status-control']
            }], destroyByClick: [{
                type: HostBinding,
                args: ['class.destroy-by-click']
            }], hasIcon: [{
                type: HostBinding,
                args: ['class.has-icon']
            }], customIcon: [{
                type: HostBinding,
                args: ['class.custom-icon']
            }], additionalClasses: [{
                type: HostBinding,
                args: ['class']
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL3RvYXN0ci90b2FzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvdG9hc3RyL3RvYXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQ0wsU0FBUyxFQUVULFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTXZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbUVLO0FBTUwsTUFBTSxPQUFPLGdCQUFnQjtJQU8zQixJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDaEQsQ0FBQztJQUVELElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQztJQUM3QyxDQUFDO0lBRUQsSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDO0lBQ2hELENBQUM7SUFFRCxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDaEQsQ0FBQztJQUVELElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQztJQUMvQyxDQUFDO0lBRUQsSUFDSSxLQUFLO1FBQ1As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QkFNakMsT0FBTztzQkFEVixXQUFXO3VCQUFDLGdCQUFnQjtnQkFXekIsVUFBVTtzQkFEYixXQUFXO3VCQUFDLG1CQUFtQjtnQkFVNUIsaUJBQWlCO3NCQURwQixXQUFXO3VCQUFDLE9BQU87Z0JBU3BCLE9BQU87c0JBRE4sWUFBWTt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iU3RhdHVzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3N0YXR1cy5zZXJ2aWNlJztcbmltcG9ydCB7IE5iSWNvbkNvbmZpZyB9IGZyb20gJy4uL2ljb24vaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJUb2FzdCB9IGZyb20gJy4vbW9kZWwnO1xuXG4vKipcbiAqIFRoZSBgTmJUb2FzdENvbXBvbmVudGAgaXMgcmVzcG9uc2libGUgZm9yIHJlbmRlcmluZyBlYWNoIHRvYXN0IHdpdGggYXBwcm9wcmlhdGUgc3R5bGVzLlxuICpcbiAqIEBzdHlsZXNcbiAqXG4gKiB0b2FzdHItYm9yZGVyLXN0eWxlOlxuICogdG9hc3RyLWJvcmRlci13aWR0aDpcbiAqIHRvYXN0ci1ib3JkZXItcmFkaXVzOlxuICogdG9hc3RyLXBhZGRpbmc6XG4gKiB0b2FzdHItc2hhZG93OlxuICogdG9hc3RyLXRleHQtZm9udC1mYW1pbHk6XG4gKiB0b2FzdHItdGV4dC1mb250LXNpemU6XG4gKiB0b2FzdHItdGV4dC1mb250LXdlaWdodDpcbiAqIHRvYXN0ci10ZXh0LWxpbmUtaGVpZ2h0OlxuICogdG9hc3RyLXRpdGxlLXRleHQtZm9udC1mYW1pbHk6XG4gKiB0b2FzdHItdGl0bGUtdGV4dC1mb250LXNpemU6XG4gKiB0b2FzdHItdGl0bGUtdGV4dC1mb250LXdlaWdodDpcbiAqIHRvYXN0ci10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OlxuICogdG9hc3RyLWJhc2ljLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2FzdHItYmFzaWMtYm9yZGVyLWNvbG9yOlxuICogdG9hc3RyLWJhc2ljLXRleHQtY29sb3I6XG4gKiB0b2FzdHItaWNvbi1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9hc3RyLWljb24tYmFzaWMtY29sb3I6XG4gKiB0b2FzdHItZGVzdHJveWFibGUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvYXN0ci1kZXN0cm95YWJsZS1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiB0b2FzdHItcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9hc3RyLXByaW1hcnktYm9yZGVyLWNvbG9yOlxuICogdG9hc3RyLXByaW1hcnktdGV4dC1jb2xvcjpcbiAqIHRvYXN0ci1pY29uLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvYXN0ci1pY29uLXByaW1hcnktY29sb3I6XG4gKiB0b2FzdHItZGVzdHJveWFibGUtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9hc3RyLWRlc3Ryb3lhYmxlLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOlxuICogdG9hc3RyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvYXN0ci1zdWNjZXNzLWJvcmRlci1jb2xvcjpcbiAqIHRvYXN0ci1zdWNjZXNzLXRleHQtY29sb3I6XG4gKiB0b2FzdHItaWNvbi1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2FzdHItaWNvbi1zdWNjZXNzLWNvbG9yOlxuICogdG9hc3RyLWRlc3Ryb3lhYmxlLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvYXN0ci1kZXN0cm95YWJsZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIHRvYXN0ci1pbmZvLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2FzdHItaW5mby1ib3JkZXItY29sb3I6XG4gKiB0b2FzdHItaW5mby10ZXh0LWNvbG9yOlxuICogdG9hc3RyLWljb24taW5mby1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9hc3RyLWljb24taW5mby1jb2xvcjpcbiAqIHRvYXN0ci1kZXN0cm95YWJsZS1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2FzdHItZGVzdHJveWFibGUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiB0b2FzdHItd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9hc3RyLXdhcm5pbmctYm9yZGVyLWNvbG9yOlxuICogdG9hc3RyLXdhcm5pbmctdGV4dC1jb2xvcjpcbiAqIHRvYXN0ci1pY29uLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvYXN0ci1pY29uLXdhcm5pbmctY29sb3I6XG4gKiB0b2FzdHItZGVzdHJveWFibGUtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9hc3RyLWRlc3Ryb3lhYmxlLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOlxuICogdG9hc3RyLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9hc3RyLWRhbmdlci1ib3JkZXItY29sb3I6XG4gKiB0b2FzdHItZGFuZ2VyLXRleHQtY29sb3I6XG4gKiB0b2FzdHItaWNvbi1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvYXN0ci1pY29uLWRhbmdlci1jb2xvcjpcbiAqIHRvYXN0ci1kZXN0cm95YWJsZS1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvYXN0ci1kZXN0cm95YWJsZS1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOlxuICogdG9hc3RyLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvYXN0ci1jb250cm9sLWJvcmRlci1jb2xvcjpcbiAqIHRvYXN0ci1jb250cm9sLXRleHQtY29sb3I6XG4gKiB0b2FzdHItaWNvbi1jb250cm9sLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2FzdHItaWNvbi1jb250cm9sLWNvbG9yOlxuICogdG9hc3RyLWRlc3Ryb3lhYmxlLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvYXN0ci1kZXN0cm95YWJsZS1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi10b2FzdCcsXG4gIHN0eWxlVXJsczogWycuL3RvYXN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE5iVG9hc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIHRvYXN0OiBOYlRvYXN0O1xuXG4gIEBPdXRwdXQoKSBkZXN0cm95OiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSB0b2FzdENsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGF0dXMtc3VjY2VzcycpXG4gIGdldCBzdWNjZXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRvYXN0LmNvbmZpZy5zdGF0dXMgPT09ICdzdWNjZXNzJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWluZm8nKVxuICBnZXQgaW5mbygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50b2FzdC5jb25maWcuc3RhdHVzID09PSAnaW5mbyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy13YXJuaW5nJylcbiAgZ2V0IHdhcm5pbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudG9hc3QuY29uZmlnLnN0YXR1cyA9PT0gJ3dhcm5pbmcnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGF0dXMtcHJpbWFyeScpXG4gIGdldCBwcmltYXJ5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRvYXN0LmNvbmZpZy5zdGF0dXMgPT09ICdwcmltYXJ5JztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWRhbmdlcicpXG4gIGdldCBkYW5nZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudG9hc3QuY29uZmlnLnN0YXR1cyA9PT0gJ2Rhbmdlcic7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1iYXNpYycpXG4gIGdldCBiYXNpYygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50b2FzdC5jb25maWcuc3RhdHVzID09PSAnYmFzaWMnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGF0dXMtY29udHJvbCcpXG4gIGdldCBjb250cm9sKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRvYXN0LmNvbmZpZy5zdGF0dXMgPT09ICdjb250cm9sJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGVzdHJveS1ieS1jbGljaycpXG4gIGdldCBkZXN0cm95QnlDbGljaygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50b2FzdC5jb25maWcuZGVzdHJveUJ5Q2xpY2s7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhhcy1pY29uJylcbiAgZ2V0IGhhc0ljb24oKTogYm9vbGVhbiB7XG4gICAgY29uc3QgeyBpY29uIH0gPSB0aGlzLnRvYXN0LmNvbmZpZztcbiAgICBpZiAodHlwZW9mIGljb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gISEoaWNvbiAmJiAoaWNvbiBhcyBOYkljb25Db25maWcpLmljb24pO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jdXN0b20taWNvbicpXG4gIGdldCBjdXN0b21JY29uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuaWNvbjtcbiAgfVxuXG4gIGdldCBpY29uKCk6IHN0cmluZyB8IE5iSWNvbkNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMudG9hc3QuY29uZmlnLmljb247XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGFkZGl0aW9uYWxDbGFzc2VzKCk6IHN0cmluZ1tdIHtcbiAgICBpZiAodGhpcy5zdGF0dXNTZXJ2aWNlLmlzQ3VzdG9tU3RhdHVzKHRoaXMudG9hc3QuY29uZmlnLnN0YXR1cykpIHtcbiAgICAgIHJldHVybiBbdGhpcy5zdGF0dXNTZXJ2aWNlLmdldFN0YXR1c0NsYXNzKHRoaXMudG9hc3QuY29uZmlnLnN0YXR1cyldO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKSB7XG4gICAgdGhpcy50b2FzdENsaWNrLmVtaXQoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBzdGF0dXNTZXJ2aWNlOiBOYlN0YXR1c1NlcnZpY2UsXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy50b2FzdC5jb25maWcudG9hc3RDbGFzcykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy50b2FzdC5jb25maWcudG9hc3RDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95LmVtaXQoKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImljb24tY29udGFpbmVyXCIgKm5nSWY9XCJoYXNJY29uICYmIGljb25cIj5cbiAgPG5iLWljb24gW2NvbmZpZ109XCJpY29uXCI+PC9uYi1pY29uPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgPHNwYW4gY2xhc3M9XCJ0aXRsZSBzdWJ0aXRsZVwiPnt7IHRvYXN0LnRpdGxlIH19PC9zcGFuPlxuICA8ZGl2IGNsYXNzPVwibWVzc2FnZVwiPnt7IHRvYXN0Lm1lc3NhZ2UgfX08L2Rpdj5cbjwvZGl2PlxuIl19