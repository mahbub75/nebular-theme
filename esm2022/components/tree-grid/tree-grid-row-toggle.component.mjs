/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./tree-grid-cell.component";
import * as i2 from "../icon/icon.component";
/**
 * NbTreeGridRowToggleComponent
 */
export class NbTreeGridRowToggleComponent {
    set expanded(value) {
        this.expandedValue = value;
    }
    get expanded() {
        return this.expandedValue;
    }
    toggleRow($event) {
        this.cell.toggleRow();
        $event.stopPropagation();
    }
    constructor(cell) {
        this.cell = cell;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTreeGridRowToggleComponent, deps: [{ token: i1.NbTreeGridCellDirective }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: NbTreeGridRowToggleComponent, selector: "nb-tree-grid-row-toggle", inputs: { expanded: "expanded" }, host: { listeners: { "click": "toggleRow($event)" } }, ngImport: i0, template: `
    <button class="row-toggle-button" [attr.aria-label]="expanded ? 'collapse' : 'expand'">
      <nb-icon [icon]="expanded ? 'chevron-down-outline' : 'chevron-right-outline'"
               pack="nebular-essentials"
               aria-hidden="true">
      </nb-icon>
    </button>
  `, isInline: true, styles: ["button{background:transparent;border:none;padding:0}\n"], dependencies: [{ kind: "component", type: i2.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTreeGridRowToggleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-tree-grid-row-toggle', template: `
    <button class="row-toggle-button" [attr.aria-label]="expanded ? 'collapse' : 'expand'">
      <nb-icon [icon]="expanded ? 'chevron-down-outline' : 'chevron-right-outline'"
               pack="nebular-essentials"
               aria-hidden="true">
      </nb-icon>
    </button>
  `, styles: ["button{background:transparent;border:none;padding:0}\n"] }]
        }], ctorParameters: () => [{ type: i1.NbTreeGridCellDirective }], propDecorators: { expanded: [{
                type: Input
            }], toggleRow: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLXJvdy10b2dnbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL3RyZWUtZ3JpZC90cmVlLWdyaWQtcm93LXRvZ2dsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUcvRDs7R0FFRztBQW1CSCxNQUFNLE9BQU8sNEJBQTRCO0lBRXZDLElBQ0ksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBR0QsU0FBUyxDQUFDLE1BQU07UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsWUFBb0IsSUFBNkI7UUFBN0IsU0FBSSxHQUFKLElBQUksQ0FBeUI7SUFBRyxDQUFDOzhHQWhCMUMsNEJBQTRCO2tHQUE1Qiw0QkFBNEIsd0pBaEI3Qjs7Ozs7OztHQU9UOzsyRkFTVSw0QkFBNEI7a0JBbEJ4QyxTQUFTOytCQUNFLHlCQUF5QixZQUN6Qjs7Ozs7OztHQU9UOzRGQVlHLFFBQVE7c0JBRFgsS0FBSztnQkFTTixTQUFTO3NCQURSLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmJUcmVlR3JpZENlbGxEaXJlY3RpdmUgfSBmcm9tICcuL3RyZWUtZ3JpZC1jZWxsLmNvbXBvbmVudCc7XG5cbi8qKlxuICogTmJUcmVlR3JpZFJvd1RvZ2dsZUNvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi10cmVlLWdyaWQtcm93LXRvZ2dsZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvbiBjbGFzcz1cInJvdy10b2dnbGUtYnV0dG9uXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJleHBhbmRlZCA/ICdjb2xsYXBzZScgOiAnZXhwYW5kJ1wiPlxuICAgICAgPG5iLWljb24gW2ljb25dPVwiZXhwYW5kZWQgPyAnY2hldnJvbi1kb3duLW91dGxpbmUnIDogJ2NoZXZyb24tcmlnaHQtb3V0bGluZSdcIlxuICAgICAgICAgICAgICAgcGFjaz1cIm5lYnVsYXItZXNzZW50aWFsc1wiXG4gICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgIDwvbmItaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIGJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICBgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJUcmVlR3JpZFJvd1RvZ2dsZUNvbXBvbmVudCB7XG4gIHByaXZhdGUgZXhwYW5kZWRWYWx1ZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2V0IGV4cGFuZGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5leHBhbmRlZFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGV4cGFuZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmV4cGFuZGVkVmFsdWU7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZVJvdygkZXZlbnQpIHtcbiAgICB0aGlzLmNlbGwudG9nZ2xlUm93KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZWxsOiBOYlRyZWVHcmlkQ2VsbERpcmVjdGl2ZSkge31cbn1cbiJdfQ==