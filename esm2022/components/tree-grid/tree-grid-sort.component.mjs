/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ContentChild, Directive, EventEmitter, HostBinding, HostListener, Inject, Input, Output, TemplateRef, } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import { NB_SORT_HEADER_COLUMN_DEF } from '../cdk/table/cell';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../icon/icon.component";
export var NbSortDirection;
(function (NbSortDirection) {
    NbSortDirection["ASCENDING"] = "asc";
    NbSortDirection["DESCENDING"] = "desc";
    NbSortDirection["NONE"] = "";
})(NbSortDirection || (NbSortDirection = {}));
const sortDirections = [
    NbSortDirection.ASCENDING,
    NbSortDirection.DESCENDING,
    NbSortDirection.NONE,
];
/**
 * Directive triggers sort method of passed object when sort header changes direction
 */
export class NbSortDirective {
    constructor() {
        this.sort = new EventEmitter();
    }
    emitSort(sortRequest) {
        if (this.sortable && this.sortable.sort) {
            this.sortable.sort(sortRequest);
        }
        this.sort.emit(sortRequest);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbSortDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.1.0", type: NbSortDirective, selector: "[nbSort]", inputs: { sortable: ["nbSort", "sortable"] }, outputs: { sort: "sort" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbSortDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[nbSort]' }]
        }], propDecorators: { sortable: [{
                type: Input,
                args: ['nbSort']
            }], sort: [{
                type: Output
            }] } });
/**
 * Directive for headers sort icons. Mark you icon implementation with this structural directive and
 * it'll set template's implicit context with current direction. Context also has `isAscending`,
 * `isDescending` and `isNone` properties.
 */
export class NbSortHeaderIconDirective {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbSortHeaderIconDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.1.0", type: NbSortHeaderIconDirective, selector: "[nbSortHeaderIcon]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbSortHeaderIconDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[nbSortHeaderIcon]' }]
        }] });
export class NbSortIconComponent {
    constructor() {
        this.direction = NbSortDirection.NONE;
    }
    isAscending() {
        return this.direction === NbSortDirection.ASCENDING;
    }
    isDescending() {
        return this.direction === NbSortDirection.DESCENDING;
    }
    isDirectionSet() {
        return this.isAscending() || this.isDescending();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbSortIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: NbSortIconComponent, selector: "nb-sort-icon", inputs: { direction: "direction" }, ngImport: i0, template: `
    <ng-container *ngIf="isDirectionSet()">
      <nb-icon *ngIf="isAscending()" icon="chevron-down-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
      <nb-icon *ngIf="isDescending()" icon="chevron-up-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
    </ng-container>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbSortIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-sort-icon',
                    template: `
    <ng-container *ngIf="isDirectionSet()">
      <nb-icon *ngIf="isAscending()" icon="chevron-down-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
      <nb-icon *ngIf="isDescending()" icon="chevron-up-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
    </ng-container>
  `,
                }]
        }], propDecorators: { direction: [{
                type: Input
            }] } });
/**
 * Marks header as sort header so it emitting sort event when clicked.
 */
export class NbSortHeaderComponent {
    /**
     * Disable sort header
     */
    set disabled(value) {
        this.disabledValue = convertToBoolProperty(value);
    }
    get disabled() {
        return this.disabledValue;
    }
    sortIfEnabled() {
        if (!this.disabled) {
            this.sortData();
        }
    }
    constructor(sort, columnDef) {
        this.sort = sort;
        this.columnDef = columnDef;
        this.disabledValue = false;
    }
    isAscending() {
        return this.direction === NbSortDirection.ASCENDING;
    }
    isDescending() {
        return this.direction === NbSortDirection.DESCENDING;
    }
    sortData() {
        const sortRequest = this.createSortRequest();
        this.sort.emitSort(sortRequest);
    }
    getIconContext() {
        return {
            $implicit: this.direction,
            isAscending: this.isAscending(),
            isDescending: this.isDescending(),
            isNone: !this.isAscending() && !this.isDescending(),
        };
    }
    getDisabledAttributeValue() {
        return this.disabled ? '' : null;
    }
    createSortRequest() {
        this.direction = this.getNextDirection();
        return { direction: this.direction, column: this.columnDef.name };
    }
    getNextDirection() {
        const sortDirectionCycle = sortDirections;
        let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
        if (nextDirectionIndex >= sortDirectionCycle.length) {
            nextDirectionIndex = 0;
        }
        return sortDirectionCycle[nextDirectionIndex];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbSortHeaderComponent, deps: [{ token: NbSortDirective }, { token: NB_SORT_HEADER_COLUMN_DEF }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: NbSortHeaderComponent, selector: "[nbSortHeader]", inputs: { direction: ["nbSortHeader", "direction"], disabled: "disabled" }, host: { listeners: { "click": "sortIfEnabled()" }, properties: { "class.disabled": "this.disabled" } }, queries: [{ propertyName: "sortIcon", first: true, predicate: NbSortHeaderIconDirective, descendants: true, read: TemplateRef }], ngImport: i0, template: `
    <button
      class="nb-tree-grid-header-change-sort-button"
      type="button"
      [attr.disabled]="getDisabledAttributeValue()"
      (click)="sortData()">
      <ng-content></ng-content>
    </button>
    <nb-sort-icon *ngIf="!sortIcon; else customIcon" [direction]="direction"></nb-sort-icon>
    <ng-template #customIcon [ngTemplateOutlet]="sortIcon" [ngTemplateOutletContext]="getIconContext()"></ng-template>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: NbSortIconComponent, selector: "nb-sort-icon", inputs: ["direction"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbSortHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[nbSortHeader]',
                    template: `
    <button
      class="nb-tree-grid-header-change-sort-button"
      type="button"
      [attr.disabled]="getDisabledAttributeValue()"
      (click)="sortData()">
      <ng-content></ng-content>
    </button>
    <nb-sort-icon *ngIf="!sortIcon; else customIcon" [direction]="direction"></nb-sort-icon>
    <ng-template #customIcon [ngTemplateOutlet]="sortIcon" [ngTemplateOutletContext]="getIconContext()"></ng-template>
  `,
                }]
        }], ctorParameters: () => [{ type: NbSortDirective }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_SORT_HEADER_COLUMN_DEF]
                }] }], propDecorators: { sortIcon: [{
                type: ContentChild,
                args: [NbSortHeaderIconDirective, { read: TemplateRef }]
            }], direction: [{
                type: Input,
                args: ['nbSortHeader']
            }], disabled: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.disabled']
            }], sortIfEnabled: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLXNvcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL3RyZWUtZ3JpZC90cmVlLWdyaWQtc29ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFtQyxNQUFNLFlBQVksQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQWlCOUQsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6QixvQ0FBaUIsQ0FBQTtJQUNqQixzQ0FBbUIsQ0FBQTtJQUNuQiw0QkFBUyxDQUFBO0FBQ1gsQ0FBQyxFQUpXLGVBQWUsS0FBZixlQUFlLFFBSTFCO0FBQ0QsTUFBTSxjQUFjLEdBQXNCO0lBQ3hDLGVBQWUsQ0FBQyxTQUFTO0lBQ3pCLGVBQWUsQ0FBQyxVQUFVO0lBQzFCLGVBQWUsQ0FBQyxJQUFJO0NBQ3JCLENBQUM7QUFFRjs7R0FFRztBQUVILE1BQU0sT0FBTyxlQUFlO0lBRDVCO1FBS1ksU0FBSSxHQUFnQyxJQUFJLFlBQVksRUFBaUIsQ0FBQztLQVFqRjtJQU5DLFFBQVEsQ0FBQyxXQUEwQjtRQUNqQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FB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LEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEUsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixNQUFNLGtCQUFrQixHQUFHLGNBQWMsQ0FBQztRQUMxQyxJQUFJLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hFLElBQUksa0JBQWtCLElBQUksa0JBQWtCLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDcEQsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7UUFDRCxPQUFPLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDaEQsQ0FBQzs4R0E3RVUscUJBQXFCLDhDQW9DdEIseUJBQXlCO2tHQXBDeEIscUJBQXFCLGdSQUVsQix5QkFBeUIsMkJBQVUsV0FBVyw2QkFkbEQ7Ozs7Ozs7Ozs7R0FVVCx1VUEvQlUsbUJBQW1COzsyRkFpQ25CLHFCQUFxQjtrQkFkakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7R0FVVDtpQkFDRjs7MEJBcUNJLE1BQU07MkJBQUMseUJBQXlCO3lDQWpDbkMsUUFBUTtzQkFEUCxZQUFZO3VCQUFDLHlCQUF5QixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtnQkFPdkMsU0FBUztzQkFBL0IsS0FBSzt1QkFBQyxjQUFjO2dCQVVqQixRQUFRO3NCQUZYLEtBQUs7O3NCQUNMLFdBQVc7dUJBQUMsZ0JBQWdCO2dCQVU3QixhQUFhO3NCQURaLFlBQVk7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sUHJvcGVydHksIE5iQm9vbGVhbklucHV0LCBOYk51bGxhYmxlSW5wdXQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IE5CX1NPUlRfSEVBREVSX0NPTFVNTl9ERUYgfSBmcm9tICcuLi9jZGsvdGFibGUvY2VsbCc7XG5cbi8qKiBDb2x1bW4gZGVmaW5pdGlvbiBhc3NvY2lhdGVkIHdpdGggYSBgTmJTb3J0SGVhZGVyRGlyZWN0aXZlYC4gKi9cbmludGVyZmFjZSBOYlNvcnRIZWFkZXJDb2x1bW5EZWYge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmJTb3J0UmVxdWVzdCB7XG4gIGNvbHVtbjogc3RyaW5nO1xuICBkaXJlY3Rpb246IE5iU29ydERpcmVjdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYlNvcnRhYmxlIHtcbiAgc29ydChzb3J0UmVxdWVzdDogTmJTb3J0UmVxdWVzdCk7XG59XG5cbmV4cG9ydCB0eXBlIE5iU29ydERpcmVjdGlvblZhbHVlcyA9ICdhc2MnIHwgJ2Rlc2MnIHwgJyc7XG5leHBvcnQgZW51bSBOYlNvcnREaXJlY3Rpb24ge1xuICBBU0NFTkRJTkcgPSAnYXNjJyxcbiAgREVTQ0VORElORyA9ICdkZXNjJyxcbiAgTk9ORSA9ICcnLFxufVxuY29uc3Qgc29ydERpcmVjdGlvbnM6IE5iU29ydERpcmVjdGlvbltdID0gW1xuICBOYlNvcnREaXJlY3Rpb24uQVNDRU5ESU5HLFxuICBOYlNvcnREaXJlY3Rpb24uREVTQ0VORElORyxcbiAgTmJTb3J0RGlyZWN0aW9uLk5PTkUsXG5dO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0cmlnZ2VycyBzb3J0IG1ldGhvZCBvZiBwYXNzZWQgb2JqZWN0IHdoZW4gc29ydCBoZWFkZXIgY2hhbmdlcyBkaXJlY3Rpb25cbiAqL1xuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25iU29ydF0nIH0pXG5leHBvcnQgY2xhc3MgTmJTb3J0RGlyZWN0aXZlIHtcbiAgQElucHV0KCduYlNvcnQnKSBzb3J0YWJsZTogTmJTb3J0YWJsZTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NvcnRhYmxlOiBOYlNvcnRhYmxlIHwgTmJOdWxsYWJsZUlucHV0O1xuXG4gIEBPdXRwdXQoKSBzb3J0OiBFdmVudEVtaXR0ZXI8TmJTb3J0UmVxdWVzdD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5iU29ydFJlcXVlc3Q+KCk7XG5cbiAgZW1pdFNvcnQoc29ydFJlcXVlc3Q6IE5iU29ydFJlcXVlc3QpIHtcbiAgICBpZiAodGhpcy5zb3J0YWJsZSAmJiB0aGlzLnNvcnRhYmxlLnNvcnQpIHtcbiAgICAgIHRoaXMuc29ydGFibGUuc29ydChzb3J0UmVxdWVzdCk7XG4gICAgfVxuICAgIHRoaXMuc29ydC5lbWl0KHNvcnRSZXF1ZXN0KTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5iU29ydEhlYWRlckljb25EaXJlY3RpdmVDb250ZXh0IHtcbiAgJGltcGxpY2l0OiBOYlNvcnREaXJlY3Rpb247XG4gIGlzQXNjZW5kaW5nOiBib29sZWFuO1xuICBpc0Rlc2NlbmRpbmc6IGJvb2xlYW47XG4gIGlzTm9uZTogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgZm9yIGhlYWRlcnMgc29ydCBpY29ucy4gTWFyayB5b3UgaWNvbiBpbXBsZW1lbnRhdGlvbiB3aXRoIHRoaXMgc3RydWN0dXJhbCBkaXJlY3RpdmUgYW5kXG4gKiBpdCdsbCBzZXQgdGVtcGxhdGUncyBpbXBsaWNpdCBjb250ZXh0IHdpdGggY3VycmVudCBkaXJlY3Rpb24uIENvbnRleHQgYWxzbyBoYXMgYGlzQXNjZW5kaW5nYCxcbiAqIGBpc0Rlc2NlbmRpbmdgIGFuZCBgaXNOb25lYCBwcm9wZXJ0aWVzLlxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmJTb3J0SGVhZGVySWNvbl0nIH0pXG5leHBvcnQgY2xhc3MgTmJTb3J0SGVhZGVySWNvbkRpcmVjdGl2ZSB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1zb3J0LWljb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0RpcmVjdGlvblNldCgpXCI+XG4gICAgICA8bmItaWNvbiAqbmdJZj1cImlzQXNjZW5kaW5nKClcIiBpY29uPVwiY2hldnJvbi1kb3duLW91dGxpbmVcIiBwYWNrPVwibmVidWxhci1lc3NlbnRpYWxzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9uYi1pY29uPlxuICAgICAgPG5iLWljb24gKm5nSWY9XCJpc0Rlc2NlbmRpbmcoKVwiIGljb249XCJjaGV2cm9uLXVwLW91dGxpbmVcIiBwYWNrPVwibmVidWxhci1lc3NlbnRpYWxzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9uYi1pY29uPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOYlNvcnRJY29uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGlyZWN0aW9uOiBOYlNvcnREaXJlY3Rpb24gPSBOYlNvcnREaXJlY3Rpb24uTk9ORTtcblxuICBpc0FzY2VuZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24gPT09IE5iU29ydERpcmVjdGlvbi5BU0NFTkRJTkc7XG4gIH1cblxuICBpc0Rlc2NlbmRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09PSBOYlNvcnREaXJlY3Rpb24uREVTQ0VORElORztcbiAgfVxuXG4gIGlzRGlyZWN0aW9uU2V0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzQXNjZW5kaW5nKCkgfHwgdGhpcy5pc0Rlc2NlbmRpbmcoKTtcbiAgfVxufVxuXG4vKipcbiAqIE1hcmtzIGhlYWRlciBhcyBzb3J0IGhlYWRlciBzbyBpdCBlbWl0dGluZyBzb3J0IGV2ZW50IHdoZW4gY2xpY2tlZC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW25iU29ydEhlYWRlcl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwibmItdHJlZS1ncmlkLWhlYWRlci1jaGFuZ2Utc29ydC1idXR0b25cIlxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBbYXR0ci5kaXNhYmxlZF09XCJnZXREaXNhYmxlZEF0dHJpYnV0ZVZhbHVlKClcIlxuICAgICAgKGNsaWNrKT1cInNvcnREYXRhKClcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2J1dHRvbj5cbiAgICA8bmItc29ydC1pY29uICpuZ0lmPVwiIXNvcnRJY29uOyBlbHNlIGN1c3RvbUljb25cIiBbZGlyZWN0aW9uXT1cImRpcmVjdGlvblwiPjwvbmItc29ydC1pY29uPlxuICAgIDxuZy10ZW1wbGF0ZSAjY3VzdG9tSWNvbiBbbmdUZW1wbGF0ZU91dGxldF09XCJzb3J0SWNvblwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJnZXRJY29uQ29udGV4dCgpXCI+PC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTmJTb3J0SGVhZGVyQ29tcG9uZW50IHtcblxuICBAQ29udGVudENoaWxkKE5iU29ydEhlYWRlckljb25EaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgc29ydEljb246IFRlbXBsYXRlUmVmPE5iU29ydEhlYWRlckljb25EaXJlY3RpdmVDb250ZXh0PjtcblxuICAvKipcbiAgICogQ3VycmVudCBzb3J0IGRpcmVjdGlvbi4gUG9zc2libGUgdmFsdWVzOiBgYXNjYCwgYGRlc2NgLCBgYChub25lKVxuICAgKiBAdHlwZSB7TmJTb3J0RGlyZWN0aW9ufVxuICAgKi9cbiAgQElucHV0KCduYlNvcnRIZWFkZXInKSBkaXJlY3Rpb246IE5iU29ydERpcmVjdGlvbjtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RpcmVjdGlvbjogTmJTb3J0RGlyZWN0aW9uVmFsdWVzO1xuXG4gIHByaXZhdGUgZGlzYWJsZWRWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHNvcnQgaGVhZGVyXG4gICAqL1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRpc2FibGVkJylcbiAgc2V0IGRpc2FibGVkKHZhbHVlKSB7XG4gICAgdGhpcy5kaXNhYmxlZFZhbHVlID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWRWYWx1ZTtcbiAgfVxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IE5iQm9vbGVhbklucHV0O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgc29ydElmRW5hYmxlZCgpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc29ydERhdGEoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNvcnQ6IE5iU29ydERpcmVjdGl2ZSxcbiAgICBASW5qZWN0KE5CX1NPUlRfSEVBREVSX0NPTFVNTl9ERUYpIHByaXZhdGUgY29sdW1uRGVmOiBOYlNvcnRIZWFkZXJDb2x1bW5EZWYsXG4gICkge31cblxuICBpc0FzY2VuZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24gPT09IE5iU29ydERpcmVjdGlvbi5BU0NFTkRJTkc7XG4gIH1cblxuICBpc0Rlc2NlbmRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09PSBOYlNvcnREaXJlY3Rpb24uREVTQ0VORElORztcbiAgfVxuXG4gIHNvcnREYXRhKCk6IHZvaWQge1xuICAgIGNvbnN0IHNvcnRSZXF1ZXN0ID0gdGhpcy5jcmVhdGVTb3J0UmVxdWVzdCgpO1xuICAgIHRoaXMuc29ydC5lbWl0U29ydChzb3J0UmVxdWVzdCk7XG4gIH1cblxuICBnZXRJY29uQ29udGV4dCgpOiBOYlNvcnRIZWFkZXJJY29uRGlyZWN0aXZlQ29udGV4dCB7XG4gICAgcmV0dXJuIHtcbiAgICAgICRpbXBsaWNpdDogdGhpcy5kaXJlY3Rpb24sXG4gICAgICBpc0FzY2VuZGluZzogdGhpcy5pc0FzY2VuZGluZygpLFxuICAgICAgaXNEZXNjZW5kaW5nOiB0aGlzLmlzRGVzY2VuZGluZygpLFxuICAgICAgaXNOb25lOiAhdGhpcy5pc0FzY2VuZGluZygpICYmICF0aGlzLmlzRGVzY2VuZGluZygpLFxuICAgIH07XG4gIH1cblxuICBnZXREaXNhYmxlZEF0dHJpYnV0ZVZhbHVlKCk6ICcnIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgPyAnJyA6IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVNvcnRSZXF1ZXN0KCk6IE5iU29ydFJlcXVlc3Qge1xuICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5nZXROZXh0RGlyZWN0aW9uKCk7XG4gICAgcmV0dXJuIHsgZGlyZWN0aW9uOiB0aGlzLmRpcmVjdGlvbiwgY29sdW1uOiB0aGlzLmNvbHVtbkRlZi5uYW1lIH07XG4gIH1cblxuICBwcml2YXRlIGdldE5leHREaXJlY3Rpb24oKTogTmJTb3J0RGlyZWN0aW9uIHtcbiAgICBjb25zdCBzb3J0RGlyZWN0aW9uQ3ljbGUgPSBzb3J0RGlyZWN0aW9ucztcbiAgICBsZXQgbmV4dERpcmVjdGlvbkluZGV4ID0gc29ydERpcmVjdGlvbkN5Y2xlLmluZGV4T2YodGhpcy5kaXJlY3Rpb24pICsgMTtcbiAgICBpZiAobmV4dERpcmVjdGlvbkluZGV4ID49IHNvcnREaXJlY3Rpb25DeWNsZS5sZW5ndGgpIHtcbiAgICAgIG5leHREaXJlY3Rpb25JbmRleCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBzb3J0RGlyZWN0aW9uQ3ljbGVbbmV4dERpcmVjdGlvbkluZGV4XTtcbiAgfVxufVxuIl19