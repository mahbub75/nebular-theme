/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license infornbion.
 */
import { Directive, InjectionToken, Input } from '@angular/core';
import { CdkCell, CdkCellDef, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkHeaderCell, CdkHeaderCellDef, } from '@angular/cdk/table';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
/**
 * Cell definition for the nb-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
export class NbCellDefDirective extends CdkCellDef {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbCellDefDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.1.0", type: NbCellDefDirective, selector: "[nbCellDef]", providers: [{ provide: CdkCellDef, useExisting: NbCellDefDirective }], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbCellDefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbCellDef]',
                    providers: [{ provide: CdkCellDef, useExisting: NbCellDefDirective }],
                }]
        }] });
/**
 * Header cell definition for the nb-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
export class NbHeaderCellDefDirective extends CdkHeaderCellDef {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbHeaderCellDefDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.1.0", type: NbHeaderCellDefDirective, selector: "[nbHeaderCellDef]", providers: [{ provide: CdkHeaderCellDef, useExisting: NbHeaderCellDefDirective }], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbHeaderCellDefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbHeaderCellDef]',
                    providers: [{ provide: CdkHeaderCellDef, useExisting: NbHeaderCellDefDirective }],
                }]
        }] });
/**
 * Footer cell definition for the nb-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
export class NbFooterCellDefDirective extends CdkFooterCellDef {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbFooterCellDefDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.1.0", type: NbFooterCellDefDirective, selector: "[nbFooterCellDef]", providers: [{ provide: CdkFooterCellDef, useExisting: NbFooterCellDefDirective }], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbFooterCellDefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbFooterCellDef]',
                    providers: [{ provide: CdkFooterCellDef, useExisting: NbFooterCellDefDirective }],
                }]
        }] });
export const NB_SORT_HEADER_COLUMN_DEF = new InjectionToken('NB_SORT_HEADER_COLUMN_DEF');
/**
 * Column definition for the nb-table.
 * Defines a set of cells available for a table column.
 */
export class NbColumnDefDirective extends CdkColumnDef {
    /** Unique name for this column. */
    get name() {
        return this._name;
    }
    set name(value) {
        this._setNameInput(value);
    }
    /** Whether this column should be sticky positioned on the end of the row */
    get stickyEnd() {
        return this._stickyEnd;
    }
    set stickyEnd(value) {
        const prevValue = this._stickyEnd;
        this._stickyEnd = coerceBooleanProperty(value);
        this._hasStickyChanged = prevValue !== this._stickyEnd;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbColumnDefDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.1.0", type: NbColumnDefDirective, selector: "[nbColumnDef]", inputs: { name: ["nbColumnDef", "name"], sticky: "sticky", stickyEnd: "stickyEnd" }, providers: [
            { provide: CdkColumnDef, useExisting: NbColumnDefDirective },
            { provide: NB_SORT_HEADER_COLUMN_DEF, useExisting: NbColumnDefDirective },
        ], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbColumnDefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbColumnDef]',
                    providers: [
                        { provide: CdkColumnDef, useExisting: NbColumnDefDirective },
                        { provide: NB_SORT_HEADER_COLUMN_DEF, useExisting: NbColumnDefDirective },
                    ],
                }]
        }], propDecorators: { name: [{
                type: Input,
                args: ['nbColumnDef']
            }], sticky: [{
                type: Input
            }], stickyEnd: [{
                type: Input
            }] } });
/** Header cell template container that adds the right classes and role. */
export class NbHeaderCellDirective extends CdkHeaderCell {
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
        elementRef.nativeElement.classList.add(`nb-column-${columnDef.cssClassFriendlyName}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbHeaderCellDirective, deps: [{ token: NbColumnDefDirective }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.1.0", type: NbHeaderCellDirective, selector: "nb-header-cell, th[nbHeaderCell]", host: { attributes: { "role": "columnheader" }, classAttribute: "nb-header-cell" }, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbHeaderCellDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'nb-header-cell, th[nbHeaderCell]',
                    host: {
                        'class': 'nb-header-cell',
                        'role': 'columnheader',
                    },
                }]
        }], ctorParameters: () => [{ type: NbColumnDefDirective }, { type: i0.ElementRef }] });
/** Footer cell template container that adds the right classes and role. */
export class NbFooterCellDirective extends CdkFooterCell {
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
        elementRef.nativeElement.classList.add(`nb-column-${columnDef.cssClassFriendlyName}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbFooterCellDirective, deps: [{ token: NbColumnDefDirective }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.1.0", type: NbFooterCellDirective, selector: "nb-footer-cell, td[nbFooterCell]", host: { attributes: { "role": "gridcell" }, classAttribute: "nb-footer-cell" }, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbFooterCellDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'nb-footer-cell, td[nbFooterCell]',
                    host: {
                        'class': 'nb-footer-cell',
                        'role': 'gridcell',
                    },
                }]
        }], ctorParameters: () => [{ type: NbColumnDefDirective }, { type: i0.ElementRef }] });
/** Cell template container that adds the right classes and role. */
export class NbCellDirective extends CdkCell {
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
        elementRef.nativeElement.classList.add(`nb-column-${columnDef.cssClassFriendlyName}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbCellDirective, deps: [{ token: NbColumnDefDirective }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.1.0", type: NbCellDirective, selector: "nb-cell, td[nbCell]", host: { attributes: { "role": "gridcell" }, classAttribute: "nb-cell" }, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbCellDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'nb-cell, td[nbCell]',
                    host: {
                        'class': 'nb-cell',
                        'role': 'gridcell',
                    },
                }]
        }], ctorParameters: () => [{ type: NbColumnDefDirective }, { type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9jZGsvdGFibGUvY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBYyxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFDTCxPQUFPLEVBQ1AsVUFBVSxFQUNWLFlBQVksRUFDWixhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixnQkFBZ0IsR0FDakIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFOUQ7OztHQUdHO0FBS0gsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFVBQVU7OEdBQXJDLGtCQUFrQjtrR0FBbEIsa0JBQWtCLHNDQUZsQixDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQzs7MkZBRTFELGtCQUFrQjtrQkFKOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsb0JBQW9CLEVBQUUsQ0FBQztpQkFDdEU7O0FBSUQ7OztHQUdHO0FBS0gsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGdCQUFnQjs4R0FBakQsd0JBQXdCO2tHQUF4Qix3QkFBd0IsNENBRnhCLENBQUMsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLHdCQUF3QixFQUFFLENBQUM7OzJGQUV0RSx3QkFBd0I7a0JBSnBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVywwQkFB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cUJBQXFCO2tHQUFyQixxQkFBcUI7OzJGQUFyQixxQkFBcUI7a0JBUGpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztvQkFDNUMsSUFBSSxFQUFFO3dCQUNKLE9BQU8sRUFBRSxnQkFBZ0I7d0JBQ3pCLE1BQU0sRUFBRSxVQUFVO3FCQUNuQjtpQkFDRjs7QUFTRCxvRUFBb0U7QUFRcEUsTUFBTSxPQUFPLGVBQWdCLFNBQVEsT0FBTztJQUMxQyxZQUFZLFNBQStCLEVBQy9CLFVBQW1DO1FBQzdDLEtBQUssQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDN0IsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsU0FBUyxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUN4RixDQUFDOzhHQUxVLGVBQWU7a0dBQWYsZUFBZTs7MkZBQWYsZUFBZTtrQkFQM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixJQUFJLEVBQUU7d0JBQ0osT0FBTyxFQUFFLFNBQVM7d0JBQ2xCLE1BQU0sRUFBRSxVQUFVO3FCQUNuQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm5iaW9uLlxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0aW9uVG9rZW4sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDZGtDZWxsLFxuICBDZGtDZWxsRGVmLFxuICBDZGtDb2x1bW5EZWYsXG4gIENka0Zvb3RlckNlbGwsXG4gIENka0Zvb3RlckNlbGxEZWYsXG4gIENka0hlYWRlckNlbGwsXG4gIENka0hlYWRlckNlbGxEZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG4vKipcbiAqIENlbGwgZGVmaW5pdGlvbiBmb3IgdGhlIG5iLXRhYmxlLlxuICogQ2FwdHVyZXMgdGhlIHRlbXBsYXRlIG9mIGEgY29sdW1uJ3MgZGF0YSByb3cgY2VsbCBhcyB3ZWxsIGFzIGNlbGwtc3BlY2lmaWMgcHJvcGVydGllcy5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25iQ2VsbERlZl0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENka0NlbGxEZWYsIHVzZUV4aXN0aW5nOiBOYkNlbGxEZWZEaXJlY3RpdmUgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5iQ2VsbERlZkRpcmVjdGl2ZSBleHRlbmRzIENka0NlbGxEZWYge1xufVxuXG4vKipcbiAqIEhlYWRlciBjZWxsIGRlZmluaXRpb24gZm9yIHRoZSBuYi10YWJsZS5cbiAqIENhcHR1cmVzIHRoZSB0ZW1wbGF0ZSBvZiBhIGNvbHVtbidzIGhlYWRlciBjZWxsIGFuZCBhcyB3ZWxsIGFzIGNlbGwtc3BlY2lmaWMgcHJvcGVydGllcy5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25iSGVhZGVyQ2VsbERlZl0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENka0hlYWRlckNlbGxEZWYsIHVzZUV4aXN0aW5nOiBOYkhlYWRlckNlbGxEZWZEaXJlY3RpdmUgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5iSGVhZGVyQ2VsbERlZkRpcmVjdGl2ZSBleHRlbmRzIENka0hlYWRlckNlbGxEZWYge1xufVxuXG4vKipcbiAqIEZvb3RlciBjZWxsIGRlZmluaXRpb24gZm9yIHRoZSBuYi10YWJsZS5cbiAqIENhcHR1cmVzIHRoZSB0ZW1wbGF0ZSBvZiBhIGNvbHVtbidzIGZvb3RlciBjZWxsIGFuZCBhcyB3ZWxsIGFzIGNlbGwtc3BlY2lmaWMgcHJvcGVydGllcy5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25iRm9vdGVyQ2VsbERlZl0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENka0Zvb3RlckNlbGxEZWYsIHVzZUV4aXN0aW5nOiBOYkZvb3RlckNlbGxEZWZEaXJlY3RpdmUgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5iRm9vdGVyQ2VsbERlZkRpcmVjdGl2ZSBleHRlbmRzIENka0Zvb3RlckNlbGxEZWYge1xufVxuXG5leHBvcnQgY29uc3QgTkJfU09SVF9IRUFERVJfQ09MVU1OX0RFRiA9IG5ldyBJbmplY3Rpb25Ub2tlbignTkJfU09SVF9IRUFERVJfQ09MVU1OX0RFRicpO1xuXG4vKipcbiAqIENvbHVtbiBkZWZpbml0aW9uIGZvciB0aGUgbmItdGFibGUuXG4gKiBEZWZpbmVzIGEgc2V0IG9mIGNlbGxzIGF2YWlsYWJsZSBmb3IgYSB0YWJsZSBjb2x1bW4uXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuYkNvbHVtbkRlZl0nLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IENka0NvbHVtbkRlZiwgdXNlRXhpc3Rpbmc6IE5iQ29sdW1uRGVmRGlyZWN0aXZlIH0sXG4gICAgeyBwcm92aWRlOiBOQl9TT1JUX0hFQURFUl9DT0xVTU5fREVGLCB1c2VFeGlzdGluZzogTmJDb2x1bW5EZWZEaXJlY3RpdmUgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJDb2x1bW5EZWZEaXJlY3RpdmUgZXh0ZW5kcyBDZGtDb2x1bW5EZWYge1xuICAvKiogVW5pcXVlIG5hbWUgZm9yIHRoaXMgY29sdW1uLiAqL1xuICBASW5wdXQoJ25iQ29sdW1uRGVmJylcbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2V0TmFtZUlucHV0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoaXMgY29sdW1uIHNob3VsZCBiZSBzdGlja3kgcG9zaXRpb25lZCBhdCB0aGUgc3RhcnQgb2YgdGhlIHJvdyAqL1xuICBASW5wdXQoKSBzdGlja3k6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhpcyBjb2x1bW4gc2hvdWxkIGJlIHN0aWNreSBwb3NpdGlvbmVkIG9uIHRoZSBlbmQgb2YgdGhlIHJvdyAqL1xuICBASW5wdXQoKVxuICBnZXQgc3RpY2t5RW5kKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGlja3lFbmQ7XG4gIH1cbiAgc2V0IHN0aWNreUVuZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IHByZXZWYWx1ZSA9IHRoaXMuX3N0aWNreUVuZDtcbiAgICB0aGlzLl9zdGlja3lFbmQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgIHRoaXMuX2hhc1N0aWNreUNoYW5nZWQgPSBwcmV2VmFsdWUgIT09IHRoaXMuX3N0aWNreUVuZDtcbiAgfVxufVxuXG4vKiogSGVhZGVyIGNlbGwgdGVtcGxhdGUgY29udGFpbmVyIHRoYXQgYWRkcyB0aGUgcmlnaHQgY2xhc3NlcyBhbmQgcm9sZS4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25iLWhlYWRlci1jZWxsLCB0aFtuYkhlYWRlckNlbGxdJyxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICduYi1oZWFkZXItY2VsbCcsXG4gICAgJ3JvbGUnOiAnY29sdW1uaGVhZGVyJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTmJIZWFkZXJDZWxsRGlyZWN0aXZlIGV4dGVuZHMgQ2RrSGVhZGVyQ2VsbCB7XG4gIGNvbnN0cnVjdG9yKGNvbHVtbkRlZjogTmJDb2x1bW5EZWZEaXJlY3RpdmUsXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChgbmItY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICB9XG59XG5cbi8qKiBGb290ZXIgY2VsbCB0ZW1wbGF0ZSBjb250YWluZXIgdGhhdCBhZGRzIHRoZSByaWdodCBjbGFzc2VzIGFuZCByb2xlLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmItZm9vdGVyLWNlbGwsIHRkW25iRm9vdGVyQ2VsbF0nLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ25iLWZvb3Rlci1jZWxsJyxcbiAgICAncm9sZSc6ICdncmlkY2VsbCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5iRm9vdGVyQ2VsbERpcmVjdGl2ZSBleHRlbmRzIENka0Zvb3RlckNlbGwge1xuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IE5iQ29sdW1uRGVmRGlyZWN0aXZlLFxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChgbmItY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICB9XG59XG5cbi8qKiBDZWxsIHRlbXBsYXRlIGNvbnRhaW5lciB0aGF0IGFkZHMgdGhlIHJpZ2h0IGNsYXNzZXMgYW5kIHJvbGUuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduYi1jZWxsLCB0ZFtuYkNlbGxdJyxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICduYi1jZWxsJyxcbiAgICAncm9sZSc6ICdncmlkY2VsbCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5iQ2VsbERpcmVjdGl2ZSBleHRlbmRzIENka0NlbGwge1xuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IE5iQ29sdW1uRGVmRGlyZWN0aXZlLFxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoYG5iLWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgfVxufVxuIl19