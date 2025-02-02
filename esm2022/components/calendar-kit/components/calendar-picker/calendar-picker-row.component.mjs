/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewContainerRef, } from '@angular/core';
import { NbCalendarSize } from '../../model';
import * as i0 from "@angular/core";
export class NbCalendarPickerRowComponent {
    constructor(cfr) {
        this.cfr = cfr;
        this.size = NbCalendarSize.MEDIUM;
        // eslint-disable-next-line @angular-eslint/no-output-native
        this.select = new EventEmitter();
    }
    ngOnChanges() {
        const factory = this.cfr.resolveComponentFactory(this.component);
        this.containerRef.clear();
        this.row.forEach((date) => {
            const component = this.containerRef.createComponent(factory, this.containerRef.length);
            this.patchWithContext(component.instance, date);
            component.changeDetectorRef.detectChanges();
        });
    }
    patchWithContext(component, date) {
        component.visibleDate = this.visibleDate;
        component.selectedValue = this.selectedValue;
        component.date = date;
        component.min = this.min;
        component.max = this.max;
        component.filter = this.filter;
        component.size = this.size;
        component.select.subscribe(this.select.emit.bind(this.select));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbCalendarPickerRowComponent, deps: [{ token: i0.ComponentFactoryResolver }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: NbCalendarPickerRowComponent, selector: "nb-calendar-picker-row", inputs: { row: "row", selectedValue: "selectedValue", visibleDate: "visibleDate", component: "component", min: "min", max: "max", filter: "filter", size: "size" }, outputs: { select: "select" }, viewQueries: [{ propertyName: "containerRef", first: true, predicate: TemplateRef, descendants: true, read: ViewContainerRef, static: true }], usesOnChanges: true, ngImport: i0, template: '<ng-template></ng-template>', isInline: true, styles: [":host{display:flex;justify-content:space-between}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbCalendarPickerRowComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-calendar-picker-row', template: '<ng-template></ng-template>', changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:flex;justify-content:space-between}\n"] }]
        }], ctorParameters: () => [{ type: i0.ComponentFactoryResolver }], propDecorators: { row: [{
                type: Input
            }], selectedValue: [{
                type: Input
            }], visibleDate: [{
                type: Input
            }], component: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], filter: [{
                type: Input
            }], size: [{
                type: Input
            }], select: [{
                type: Output
            }], containerRef: [{
                type: ViewChild,
                args: [TemplateRef, { read: ViewContainerRef, static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItcGlja2VyLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2FsZW5kYXIta2l0L2NvbXBvbmVudHMvY2FsZW5kYXItcGlja2VyL2NhbGVuZGFyLXBpY2tlci1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixXQUFXLEVBRVgsU0FBUyxFQUNULGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQWtCLGNBQWMsRUFBd0IsTUFBTSxhQUFhLENBQUM7O0FBZW5GLE1BQU0sT0FBTyw0QkFBNEI7SUFnQnZDLFlBQW9CLEdBQTZCO1FBQTdCLFFBQUcsR0FBSCxHQUFHLENBQTBCO1FBUnhDLFNBQUksR0FBbUIsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUV0RCw0REFBNEQ7UUFDbEQsV0FBTSxHQUFvQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBS0gsQ0FBQztJQUVyRCxXQUFXO1FBQ1QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUUxQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQU8sRUFBRSxFQUFFO1lBQzNCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hELFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxTQUErQixFQUFFLElBQU87UUFDL0QsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3pDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM3QyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN0QixTQUFTLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDekIsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3pCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQixTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7OEdBdkNVLDRCQUE0QjtrR0FBNUIsNEJBQTRCLCtTQWM1QixXQUFXLDJCQUFVLGdCQUFnQixnRUFqQnRDLDZCQUE2Qjs7MkZBRzVCLDRCQUE0QjtrQkFieEMsU0FBUzsrQkFDRSx3QkFBd0IsWUFTeEIsNkJBQTZCLG1CQUN0Qix1QkFBdUIsQ0FBQyxNQUFNOzZGQUd0QyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUdJLE1BQU07c0JBQWYsTUFBTTtnQkFHMkQsWUFBWTtzQkFBN0UsU0FBUzt1QkFBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFR5cGUsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iQ2FsZW5kYXJDZWxsLCBOYkNhbGVuZGFyU2l6ZSwgTmJDYWxlbmRhclNpemVWYWx1ZXMgfSBmcm9tICcuLi8uLi9tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWNhbGVuZGFyLXBpY2tlci1yb3cnLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYkNhbGVuZGFyUGlja2VyUm93Q29tcG9uZW50PEQsIFQ+IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgcm93OiBEW107XG4gIEBJbnB1dCgpIHNlbGVjdGVkVmFsdWU6IFQ7XG4gIEBJbnB1dCgpIHZpc2libGVEYXRlOiBEO1xuICBASW5wdXQoKSBjb21wb25lbnQ6IFR5cGU8TmJDYWxlbmRhckNlbGw8RCwgVD4+O1xuICBASW5wdXQoKSBtaW46IEQ7XG4gIEBJbnB1dCgpIG1heDogRDtcbiAgQElucHV0KCkgZmlsdGVyOiAoRCkgPT4gYm9vbGVhbjtcbiAgQElucHV0KCkgc2l6ZTogTmJDYWxlbmRhclNpemUgPSBOYkNhbGVuZGFyU2l6ZS5NRURJVU07XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zaXplOiBOYkNhbGVuZGFyU2l6ZVZhbHVlcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1vdXRwdXQtbmF0aXZlXG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxEPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBUT0RPIHN0YXRpYyBtdXN0IGJlIGZhbHNlIGFzIG9mIEFuZ3VsYXIgOS4wLjAsIGlzc3Vlcy8xNTE0XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pIGNvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNvbXBvbmVudCk7XG5cbiAgICB0aGlzLmNvbnRhaW5lclJlZi5jbGVhcigpO1xuXG4gICAgdGhpcy5yb3cuZm9yRWFjaCgoZGF0ZTogRCkgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnksIHRoaXMuY29udGFpbmVyUmVmLmxlbmd0aCk7XG4gICAgICB0aGlzLnBhdGNoV2l0aENvbnRleHQoY29tcG9uZW50Lmluc3RhbmNlLCBkYXRlKTtcbiAgICAgIGNvbXBvbmVudC5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHBhdGNoV2l0aENvbnRleHQoY29tcG9uZW50OiBOYkNhbGVuZGFyQ2VsbDxELCBUPiwgZGF0ZTogRCkge1xuICAgIGNvbXBvbmVudC52aXNpYmxlRGF0ZSA9IHRoaXMudmlzaWJsZURhdGU7XG4gICAgY29tcG9uZW50LnNlbGVjdGVkVmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWU7XG4gICAgY29tcG9uZW50LmRhdGUgPSBkYXRlO1xuICAgIGNvbXBvbmVudC5taW4gPSB0aGlzLm1pbjtcbiAgICBjb21wb25lbnQubWF4ID0gdGhpcy5tYXg7XG4gICAgY29tcG9uZW50LmZpbHRlciA9IHRoaXMuZmlsdGVyO1xuICAgIGNvbXBvbmVudC5zaXplID0gdGhpcy5zaXplO1xuICAgIGNvbXBvbmVudC5zZWxlY3Quc3Vic2NyaWJlKHRoaXMuc2VsZWN0LmVtaXQuYmluZCh0aGlzLnNlbGVjdCkpO1xuICB9XG59XG4iXX0=