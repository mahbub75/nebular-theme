import { Attribute, Inject, NgModule, Component, Optional, SkipSelf, } from '@angular/core';
import { _COALESCED_STYLE_SCHEDULER, _CoalescedStyleScheduler, CdkTable, CdkTableModule, } from '@angular/cdk/table';
import { _DisposeViewRepeaterStrategy, _VIEW_REPEATER_STRATEGY } from '@angular/cdk/collections';
import { NbBidiModule } from '../bidi/bidi.module';
import { NB_DOCUMENT } from '../../../theme.options';
import { NB_STICKY_POSITIONING_LISTENER } from '../../cdk/table/type-mappings';
import { NbCellDefDirective, NbCellDirective, NbColumnDefDirective, NbFooterCellDefDirective, NbFooterCellDirective, NbHeaderCellDefDirective, NbHeaderCellDirective, } from './cell';
import { NbCellOutletDirective, NbDataRowOutletDirective, NbFooterRowOutletDirective, NbHeaderRowOutletDirective, NbFooterRowComponent, NbFooterRowDefDirective, NbHeaderRowComponent, NbHeaderRowDefDirective, NbRowComponent, NbRowDefDirective, NbNoDataRowOutletDirective, } from './row';
import * as i0 from "@angular/core";
import * as i1 from "../bidi/bidi-service";
import * as i2 from "../platform/platform-service";
import * as i3 from "../adapter/viewport-ruler-adapter";
import * as i4 from "@angular/cdk/table";
export const NB_TABLE_TEMPLATE = `
  <ng-container nbHeaderRowOutlet></ng-container>
  <ng-container nbRowOutlet></ng-container>
  <ng-container nbNoDataRowOutlet></ng-container>
  <ng-container nbFooterRowOutlet></ng-container>
`;
export const NB_VIEW_REPEATER_STRATEGY = _VIEW_REPEATER_STRATEGY;
export const NB_COALESCED_STYLE_SCHEDULER = _COALESCED_STYLE_SCHEDULER;
export const NB_TABLE_PROVIDERS = [
    { provide: NB_VIEW_REPEATER_STRATEGY, useClass: _DisposeViewRepeaterStrategy },
    { provide: NB_COALESCED_STYLE_SCHEDULER, useClass: _CoalescedStyleScheduler },
];
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class NbTable extends CdkTable {
    constructor(differs, changeDetectorRef, elementRef, role, dir, document, platform, _viewRepeater, _coalescedStyleScheduler, _viewportRuler, _stickyPositioningListener) {
        super(differs, changeDetectorRef, elementRef, role, dir, document, platform, _viewRepeater, _coalescedStyleScheduler, _viewportRuler, _stickyPositioningListener);
        this._viewRepeater = _viewRepeater;
        this._coalescedStyleScheduler = _coalescedStyleScheduler;
        this._stickyPositioningListener = _stickyPositioningListener;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTable, deps: [{ token: i0.IterableDiffers }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: 'role', attribute: true }, { token: i1.NbDirectionality }, { token: NB_DOCUMENT }, { token: i2.NbPlatform }, { token: _VIEW_REPEATER_STRATEGY }, { token: _COALESCED_STYLE_SCHEDULER }, { token: i3.NbViewportRulerAdapter }, { token: NB_STICKY_POSITIONING_LISTENER, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: NbTable, selector: "nb-table-not-implemented", providers: NB_TABLE_PROVIDERS, usesInheritance: true, ngImport: i0, template: ``, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTable, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-table-not-implemented',
                    template: ``,
                    providers: NB_TABLE_PROVIDERS,
                }]
        }], ctorParameters: () => [{ type: i0.IterableDiffers }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Attribute,
                    args: ['role']
                }] }, { type: i1.NbDirectionality }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DOCUMENT]
                }] }, { type: i2.NbPlatform }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [_VIEW_REPEATER_STRATEGY]
                }] }, { type: i4._CoalescedStyleScheduler, decorators: [{
                    type: Inject,
                    args: [_COALESCED_STYLE_SCHEDULER]
                }] }, { type: i3.NbViewportRulerAdapter }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }, {
                    type: Inject,
                    args: [NB_STICKY_POSITIONING_LISTENER]
                }] }] });
const COMPONENTS = [
    NbTable,
    // Template defs
    NbHeaderCellDefDirective,
    NbHeaderRowDefDirective,
    NbColumnDefDirective,
    NbCellDefDirective,
    NbRowDefDirective,
    NbFooterCellDefDirective,
    NbFooterRowDefDirective,
    // Outlets
    NbDataRowOutletDirective,
    NbHeaderRowOutletDirective,
    NbFooterRowOutletDirective,
    NbNoDataRowOutletDirective,
    NbCellOutletDirective,
    // Cell directives
    NbHeaderCellDirective,
    NbCellDirective,
    NbFooterCellDirective,
    // Row directives
    NbHeaderRowComponent,
    NbRowComponent,
    NbFooterRowComponent,
];
export class NbTableModule extends CdkTableModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTableModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: NbTableModule, declarations: [NbTable, 
            // Template defs
            NbHeaderCellDefDirective,
            NbHeaderRowDefDirective,
            NbColumnDefDirective,
            NbCellDefDirective,
            NbRowDefDirective,
            NbFooterCellDefDirective,
            NbFooterRowDefDirective,
            // Outlets
            NbDataRowOutletDirective,
            NbHeaderRowOutletDirective,
            NbFooterRowOutletDirective,
            NbNoDataRowOutletDirective,
            NbCellOutletDirective,
            // Cell directives
            NbHeaderCellDirective,
            NbCellDirective,
            NbFooterCellDirective,
            // Row directives
            NbHeaderRowComponent,
            NbRowComponent,
            NbFooterRowComponent], imports: [NbBidiModule], exports: [NbTable, 
            // Template defs
            NbHeaderCellDefDirective,
            NbHeaderRowDefDirective,
            NbColumnDefDirective,
            NbCellDefDirective,
            NbRowDefDirective,
            NbFooterCellDefDirective,
            NbFooterRowDefDirective,
            // Outlets
            NbDataRowOutletDirective,
            NbHeaderRowOutletDirective,
            NbFooterRowOutletDirective,
            NbNoDataRowOutletDirective,
            NbCellOutletDirective,
            // Cell directives
            NbHeaderCellDirective,
            NbCellDirective,
            NbFooterCellDirective,
            // Row directives
            NbHeaderRowComponent,
            NbRowComponent,
            NbFooterRowComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTableModule, imports: [NbBidiModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTableModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NbBidiModule],
                    declarations: [...COMPONENTS],
                    exports: [...COMPONENTS],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2Nkay90YWJsZS90YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCxNQUFNLEVBRU4sUUFBUSxFQUNSLFNBQVMsRUFDVCxRQUFRLEVBRVIsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsd0JBQXdCLEVBQ3hCLFFBQVEsRUFDUixjQUFjLEdBSWYsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsdUJBQXVCLEVBQWlCLE1BQU0sMEJBQTBCLENBQUM7QUFFaEgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRSxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixvQkFBb0IsRUFDcEIsd0JBQXdCLEVBQ3hCLHFCQUFxQixFQUNyQix3QkFBd0IsRUFDeEIscUJBQXFCLEdBQ3RCLE1BQU0sUUFBUSxDQUFDO0FBQ2hCLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsd0JBQXdCLEVBQ3hCLDBCQUEwQixFQUMxQiwwQkFBMEIsRUFDMUIsb0JBQW9CLEVBQ3BCLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsdUJBQXVCLEVBQ3ZCLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsMEJBQTBCLEdBQzNCLE1BQU0sT0FBTyxDQUFDOzs7Ozs7QUFFZixNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRzs7Ozs7Q0FLaEMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUFHLHVCQUF1QixDQUFDO0FBQ2pFLE1BQU0sQ0FBQyxNQUFNLDRCQUE0QixHQUFHLDBCQUEwQixDQUFDO0FBRXZFLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFlO0lBQzVDLEVBQUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFFBQVEsRUFBRSw0QkFBNEIsRUFBRTtJQUM5RSxFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQUU7Q0FDOUUsQ0FBQztBQU9GLGtFQUFrRTtBQUNsRSxNQUFNLE9BQU8sT0FBVyxTQUFRLFFBQVc7SUFDekMsWUFDRSxPQUF3QixFQUN4QixpQkFBb0MsRUFDcEMsVUFBc0IsRUFDSCxJQUFZLEVBQy9CLEdBQXFCLEVBQ0EsUUFBYSxFQUNsQyxRQUFvQixFQUVELGFBQTRELEVBRTVELHdCQUFrRCxFQUNyRSxjQUFzQyxFQUVuQiwwQkFBcUQ7UUFFeEUsS0FBSyxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFDcEYsd0JBQXdCLEVBQUUsY0FBYyxFQUFFLDBCQUEwQixDQUFDLENBQUM7UUFSekQsa0JBQWEsR0FBYixhQUFhLENBQStDO1FBRTVELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFHbEQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUEyQjtJQUkxRSxDQUFDOzhHQW5CVSxPQUFPLDRHQUtMLE1BQU0sOERBRVQsV0FBVyx1Q0FFWCx1QkFBdUIsYUFFdkIsMEJBQTBCLG1EQUdGLDhCQUE4QjtrR0FkckQsT0FBTyxtREFIUCxrQkFBa0IsaURBRG5CLEVBQUU7OzJGQUlELE9BQU87a0JBTm5CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLEVBQUU7b0JBQ1osU0FBUyxFQUFFLGtCQUFrQjtpQkFDOUI7OzBCQU9JLFNBQVM7MkJBQUMsTUFBTTs7MEJBRWhCLE1BQU07MkJBQUMsV0FBVzs7MEJBRWxCLE1BQU07MkJBQUMsdUJBQXVCOzswQkFFOUIsTUFBTTsyQkFBQywwQkFBMEI7OzBCQUdqQyxRQUFROzswQkFBSSxRQUFROzswQkFBSSxNQUFNOzJCQUFDLDhCQUE4Qjs7QUFRbEUsTUFBTSxVQUFVLEdBQUc7SUFDakIsT0FBTztJQUVQLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFFdkIsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFFckIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YscUJBQXFCO0lBRXJCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLG9CQUFvQjtDQUNyQixDQUFDO0FBT0YsTUFBTSxPQUFPLGFBQWMsU0FBUSxjQUFjOzhHQUFwQyxhQUFhOytHQUFiLGFBQWEsaUJBekRiLE9BQU87WUF5QmxCLGdCQUFnQjtZQUNoQix3QkFBd0I7WUFDeEIsdUJBQXVCO1lBQ3ZCLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFDbEIsaUJBQWlCO1lBQ2pCLHdCQUF3QjtZQUN4Qix1QkFBdUI7WUFFdkIsVUFBVTtZQUNWLHdCQUF3QjtZQUN4QiwwQkFBMEI7WUFDMUIsMEJBQTBCO1lBQzFCLDBCQUEwQjtZQUMxQixxQkFBcUI7WUFFckIsa0JBQWtCO1lBQ2xCLHFCQUFxQjtZQUNyQixlQUFlO1lBQ2YscUJBQXFCO1lBRXJCLGlCQUFpQjtZQUNqQixvQkFBb0I7WUFDcEIsY0FBYztZQUNkLG9CQUFvQixhQUlULFlBQVksYUFyRFosT0FBTztZQXlCbEIsZ0JBQWdCO1lBQ2hCLHdCQUF3QjtZQUN4Qix1QkFBdUI7WUFDdkIsb0JBQW9CO1lBQ3BCLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsd0JBQXdCO1lBQ3hCLHVCQUF1QjtZQUV2QixVQUFVO1lBQ1Ysd0JBQXdCO1lBQ3hCLDBCQUEwQjtZQUMxQiwwQkFBMEI7WUFDMUIsMEJBQTBCO1lBQzFCLHFCQUFxQjtZQUVyQixrQkFBa0I7WUFDbEIscUJBQXFCO1lBQ3JCLGVBQWU7WUFDZixxQkFBcUI7WUFFckIsaUJBQWlCO1lBQ2pCLG9CQUFvQjtZQUNwQixjQUFjO1lBQ2Qsb0JBQW9COytHQVFULGFBQWEsWUFKYixZQUFZOzsyRkFJWixhQUFhO2tCQUx6QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFFLFlBQVksQ0FBRTtvQkFDekIsWUFBWSxFQUFFLENBQUUsR0FBRyxVQUFVLENBQUU7b0JBQy9CLE9BQU8sRUFBRSxDQUFFLEdBQUcsVUFBVSxDQUFFO2lCQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEF0dHJpYnV0ZSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSXRlcmFibGVEaWZmZXJzLFxuICBOZ01vZHVsZSxcbiAgQ29tcG9uZW50LFxuICBPcHRpb25hbCxcbiAgUHJvdmlkZXIsXG4gIFNraXBTZWxmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIF9DT0FMRVNDRURfU1RZTEVfU0NIRURVTEVSLFxuICBfQ29hbGVzY2VkU3R5bGVTY2hlZHVsZXIsXG4gIENka1RhYmxlLFxuICBDZGtUYWJsZU1vZHVsZSxcbiAgUmVuZGVyUm93LFxuICBSb3dDb250ZXh0LFxuICBTdGlja3lQb3NpdGlvbmluZ0xpc3RlbmVyLFxufSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgX0Rpc3Bvc2VWaWV3UmVwZWF0ZXJTdHJhdGVneSwgX1ZJRVdfUkVQRUFURVJfU1RSQVRFR1ksIF9WaWV3UmVwZWF0ZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuXG5pbXBvcnQgeyBOYkJpZGlNb2R1bGUgfSBmcm9tICcuLi9iaWRpL2JpZGkubW9kdWxlJztcbmltcG9ydCB7IE5iRGlyZWN0aW9uYWxpdHkgfSBmcm9tICcuLi9iaWRpL2JpZGktc2VydmljZSc7XG5pbXBvcnQgeyBOYlBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0vcGxhdGZvcm0tc2VydmljZSc7XG5pbXBvcnQgeyBOQl9ET0NVTUVOVCB9IGZyb20gJy4uLy4uLy4uL3RoZW1lLm9wdGlvbnMnO1xuaW1wb3J0IHsgTmJWaWV3cG9ydFJ1bGVyQWRhcHRlciB9IGZyb20gJy4uL2FkYXB0ZXIvdmlld3BvcnQtcnVsZXItYWRhcHRlcic7XG5pbXBvcnQgeyBOQl9TVElDS1lfUE9TSVRJT05JTkdfTElTVEVORVIgfSBmcm9tICcuLi8uLi9jZGsvdGFibGUvdHlwZS1tYXBwaW5ncyc7XG5pbXBvcnQge1xuICBOYkNlbGxEZWZEaXJlY3RpdmUsXG4gIE5iQ2VsbERpcmVjdGl2ZSxcbiAgTmJDb2x1bW5EZWZEaXJlY3RpdmUsXG4gIE5iRm9vdGVyQ2VsbERlZkRpcmVjdGl2ZSxcbiAgTmJGb290ZXJDZWxsRGlyZWN0aXZlLFxuICBOYkhlYWRlckNlbGxEZWZEaXJlY3RpdmUsXG4gIE5iSGVhZGVyQ2VsbERpcmVjdGl2ZSxcbn0gZnJvbSAnLi9jZWxsJztcbmltcG9ydCB7XG4gIE5iQ2VsbE91dGxldERpcmVjdGl2ZSxcbiAgTmJEYXRhUm93T3V0bGV0RGlyZWN0aXZlLFxuICBOYkZvb3RlclJvd091dGxldERpcmVjdGl2ZSxcbiAgTmJIZWFkZXJSb3dPdXRsZXREaXJlY3RpdmUsXG4gIE5iRm9vdGVyUm93Q29tcG9uZW50LFxuICBOYkZvb3RlclJvd0RlZkRpcmVjdGl2ZSxcbiAgTmJIZWFkZXJSb3dDb21wb25lbnQsXG4gIE5iSGVhZGVyUm93RGVmRGlyZWN0aXZlLFxuICBOYlJvd0NvbXBvbmVudCxcbiAgTmJSb3dEZWZEaXJlY3RpdmUsXG4gIE5iTm9EYXRhUm93T3V0bGV0RGlyZWN0aXZlLFxufSBmcm9tICcuL3Jvdyc7XG5cbmV4cG9ydCBjb25zdCBOQl9UQUJMRV9URU1QTEFURSA9IGBcbiAgPG5nLWNvbnRhaW5lciBuYkhlYWRlclJvd091dGxldD48L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciBuYlJvd091dGxldD48L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciBuYk5vRGF0YVJvd091dGxldD48L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciBuYkZvb3RlclJvd091dGxldD48L25nLWNvbnRhaW5lcj5cbmA7XG5cbmV4cG9ydCBjb25zdCBOQl9WSUVXX1JFUEVBVEVSX1NUUkFURUdZID0gX1ZJRVdfUkVQRUFURVJfU1RSQVRFR1k7XG5leHBvcnQgY29uc3QgTkJfQ09BTEVTQ0VEX1NUWUxFX1NDSEVEVUxFUiA9IF9DT0FMRVNDRURfU1RZTEVfU0NIRURVTEVSO1xuXG5leHBvcnQgY29uc3QgTkJfVEFCTEVfUFJPVklERVJTOiBQcm92aWRlcltdID0gW1xuICB7IHByb3ZpZGU6IE5CX1ZJRVdfUkVQRUFURVJfU1RSQVRFR1ksIHVzZUNsYXNzOiBfRGlzcG9zZVZpZXdSZXBlYXRlclN0cmF0ZWd5IH0sXG4gIHsgcHJvdmlkZTogTkJfQ09BTEVTQ0VEX1NUWUxFX1NDSEVEVUxFUiwgdXNlQ2xhc3M6IF9Db2FsZXNjZWRTdHlsZVNjaGVkdWxlciB9LFxuXTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItdGFibGUtbm90LWltcGxlbWVudGVkJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBwcm92aWRlcnM6IE5CX1RBQkxFX1BST1ZJREVSUyxcbn0pXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXhcbmV4cG9ydCBjbGFzcyBOYlRhYmxlPFQ+IGV4dGVuZHMgQ2RrVGFibGU8VD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBkaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsXG4gICAgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQEF0dHJpYnV0ZSgncm9sZScpIHJvbGU6IHN0cmluZyxcbiAgICBkaXI6IE5iRGlyZWN0aW9uYWxpdHksXG4gICAgQEluamVjdChOQl9ET0NVTUVOVCkgZG9jdW1lbnQ6IGFueSxcbiAgICBwbGF0Zm9ybTogTmJQbGF0Zm9ybSxcbiAgICBASW5qZWN0KF9WSUVXX1JFUEVBVEVSX1NUUkFURUdZKVxuICAgIHByb3RlY3RlZCByZWFkb25seSBfdmlld1JlcGVhdGVyOiBfVmlld1JlcGVhdGVyPFQsIFJlbmRlclJvdzxUPiwgUm93Q29udGV4dDxUPj4sXG4gICAgQEluamVjdChfQ09BTEVTQ0VEX1NUWUxFX1NDSEVEVUxFUilcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2NvYWxlc2NlZFN0eWxlU2NoZWR1bGVyOiBfQ29hbGVzY2VkU3R5bGVTY2hlZHVsZXIsXG4gICAgX3ZpZXdwb3J0UnVsZXI6IE5iVmlld3BvcnRSdWxlckFkYXB0ZXIsXG4gICAgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgQEluamVjdChOQl9TVElDS1lfUE9TSVRJT05JTkdfTElTVEVORVIpXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IF9zdGlja3lQb3NpdGlvbmluZ0xpc3RlbmVyOiBTdGlja3lQb3NpdGlvbmluZ0xpc3RlbmVyLFxuICApIHtcbiAgICBzdXBlcihkaWZmZXJzLCBjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZiwgcm9sZSwgZGlyLCBkb2N1bWVudCwgcGxhdGZvcm0sIF92aWV3UmVwZWF0ZXIsXG4gICAgICAgICAgX2NvYWxlc2NlZFN0eWxlU2NoZWR1bGVyLCBfdmlld3BvcnRSdWxlciwgX3N0aWNreVBvc2l0aW9uaW5nTGlzdGVuZXIpO1xuICB9XG59XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIE5iVGFibGUsXG5cbiAgLy8gVGVtcGxhdGUgZGVmc1xuICBOYkhlYWRlckNlbGxEZWZEaXJlY3RpdmUsXG4gIE5iSGVhZGVyUm93RGVmRGlyZWN0aXZlLFxuICBOYkNvbHVtbkRlZkRpcmVjdGl2ZSxcbiAgTmJDZWxsRGVmRGlyZWN0aXZlLFxuICBOYlJvd0RlZkRpcmVjdGl2ZSxcbiAgTmJGb290ZXJDZWxsRGVmRGlyZWN0aXZlLFxuICBOYkZvb3RlclJvd0RlZkRpcmVjdGl2ZSxcblxuICAvLyBPdXRsZXRzXG4gIE5iRGF0YVJvd091dGxldERpcmVjdGl2ZSxcbiAgTmJIZWFkZXJSb3dPdXRsZXREaXJlY3RpdmUsXG4gIE5iRm9vdGVyUm93T3V0bGV0RGlyZWN0aXZlLFxuICBOYk5vRGF0YVJvd091dGxldERpcmVjdGl2ZSxcbiAgTmJDZWxsT3V0bGV0RGlyZWN0aXZlLFxuXG4gIC8vIENlbGwgZGlyZWN0aXZlc1xuICBOYkhlYWRlckNlbGxEaXJlY3RpdmUsXG4gIE5iQ2VsbERpcmVjdGl2ZSxcbiAgTmJGb290ZXJDZWxsRGlyZWN0aXZlLFxuXG4gIC8vIFJvdyBkaXJlY3RpdmVzXG4gIE5iSGVhZGVyUm93Q29tcG9uZW50LFxuICBOYlJvd0NvbXBvbmVudCxcbiAgTmJGb290ZXJSb3dDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbIE5iQmlkaU1vZHVsZSBdLFxuICBkZWNsYXJhdGlvbnM6IFsgLi4uQ09NUE9ORU5UUyBdLFxuICBleHBvcnRzOiBbIC4uLkNPTVBPTkVOVFMgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJUYWJsZU1vZHVsZSBleHRlbmRzIENka1RhYmxlTW9kdWxlIHt9XG4iXX0=