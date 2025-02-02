/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbTableModule } from '../cdk/table/table.module';
import { NbIconModule } from '../icon/icon.module';
import { NbTreeGridComponent } from './tree-grid.component';
import { NbTreeGridCellDefDirective, NbTreeGridFooterCellDefDirective, NbTreeGridFooterRowDefDirective, NbTreeGridHeaderCellDefDirective, NbTreeGridHeaderRowDefDirective, NbTreeGridRowDefDirective, } from './tree-grid-def.component';
import { NbTreeGridFooterRowComponent, NbTreeGridHeaderRowComponent, NbTreeGridRowComponent, } from './tree-grid-row.component';
import { NbTreeGridCellDirective, NbTreeGridFooterCellDirective, NbTreeGridHeaderCellDirective, } from './tree-grid-cell.component';
import { NbSortDirective, NbSortHeaderComponent, NbSortHeaderIconDirective, NbSortIconComponent, } from './tree-grid-sort.component';
import { NbTreeGridDataSourceBuilder } from './data-source/tree-grid-data-source';
import { NbTreeGridSortService } from './data-source/tree-grid-sort.service';
import { NbTreeGridFilterService } from './data-source/tree-grid-filter.service';
import { NbTreeGridService } from './data-source/tree-grid.service';
import { NbTreeGridDataService } from './data-source/tree-grid-data.service';
import { NbFilterDirective, NbFilterInputDirective } from './tree-grid-filter';
import { NbTreeGridRowToggleDirective } from './tree-grid-row-toggle.directive';
import { NbTreeGridColumnDefDirective } from './tree-grid-column-def.directive';
import { NbTreeGridRowToggleComponent } from './tree-grid-row-toggle.component';
import * as i0 from "@angular/core";
const COMPONENTS = [
    // Tree Grid
    NbTreeGridComponent,
    NbTreeGridRowDefDirective,
    NbTreeGridRowComponent,
    NbTreeGridCellDefDirective,
    NbTreeGridCellDirective,
    NbTreeGridHeaderRowDefDirective,
    NbTreeGridHeaderRowComponent,
    NbTreeGridHeaderCellDefDirective,
    NbTreeGridHeaderCellDirective,
    NbTreeGridFooterRowDefDirective,
    NbTreeGridFooterRowComponent,
    NbTreeGridFooterCellDefDirective,
    NbTreeGridFooterCellDirective,
    NbTreeGridColumnDefDirective,
    // Sort directives
    NbSortDirective,
    NbSortHeaderComponent,
    NbSortIconComponent,
    // Filter directives
    NbFilterDirective,
    NbFilterInputDirective,
    NbTreeGridRowToggleDirective,
    NbTreeGridRowToggleComponent,
    NbSortHeaderIconDirective,
];
export class NbTreeGridModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTreeGridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: NbTreeGridModule, declarations: [
            // Tree Grid
            NbTreeGridComponent,
            NbTreeGridRowDefDirective,
            NbTreeGridRowComponent,
            NbTreeGridCellDefDirective,
            NbTreeGridCellDirective,
            NbTreeGridHeaderRowDefDirective,
            NbTreeGridHeaderRowComponent,
            NbTreeGridHeaderCellDefDirective,
            NbTreeGridHeaderCellDirective,
            NbTreeGridFooterRowDefDirective,
            NbTreeGridFooterRowComponent,
            NbTreeGridFooterCellDefDirective,
            NbTreeGridFooterCellDirective,
            NbTreeGridColumnDefDirective,
            // Sort directives
            NbSortDirective,
            NbSortHeaderComponent,
            NbSortIconComponent,
            // Filter directives
            NbFilterDirective,
            NbFilterInputDirective,
            NbTreeGridRowToggleDirective,
            NbTreeGridRowToggleComponent,
            NbSortHeaderIconDirective], imports: [CommonModule, NbTableModule, NbIconModule], exports: [NbTableModule, 
            // Tree Grid
            NbTreeGridComponent,
            NbTreeGridRowDefDirective,
            NbTreeGridRowComponent,
            NbTreeGridCellDefDirective,
            NbTreeGridCellDirective,
            NbTreeGridHeaderRowDefDirective,
            NbTreeGridHeaderRowComponent,
            NbTreeGridHeaderCellDefDirective,
            NbTreeGridHeaderCellDirective,
            NbTreeGridFooterRowDefDirective,
            NbTreeGridFooterRowComponent,
            NbTreeGridFooterCellDefDirective,
            NbTreeGridFooterCellDirective,
            NbTreeGridColumnDefDirective,
            // Sort directives
            NbSortDirective,
            NbSortHeaderComponent,
            NbSortIconComponent,
            // Filter directives
            NbFilterDirective,
            NbFilterInputDirective,
            NbTreeGridRowToggleDirective,
            NbTreeGridRowToggleComponent,
            NbSortHeaderIconDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTreeGridModule, providers: [
            NbTreeGridSortService,
            NbTreeGridFilterService,
            NbTreeGridService,
            NbTreeGridDataService,
            NbTreeGridDataSourceBuilder,
        ], imports: [CommonModule, NbTableModule, NbIconModule, NbTableModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTreeGridModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NbTableModule, NbIconModule],
                    declarations: [...COMPONENTS],
                    exports: [NbTableModule, ...COMPONENTS],
                    providers: [
                        NbTreeGridSortService,
                        NbTreeGridFilterService,
                        NbTreeGridService,
                        NbTreeGridDataService,
                        NbTreeGridDataSourceBuilder,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy90cmVlLWdyaWQvdHJlZS1ncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLGdDQUFnQyxFQUNoQywrQkFBK0IsRUFDL0IsZ0NBQWdDLEVBQ2hDLCtCQUErQixFQUMvQix5QkFBeUIsR0FDMUIsTUFBTSwyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQ0wsNEJBQTRCLEVBQzVCLDRCQUE0QixFQUM1QixzQkFBc0IsR0FDdkIsTUFBTSwyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLDZCQUE2QixFQUM3Qiw2QkFBNkIsR0FDOUIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQ0wsZUFBZSxFQUNmLHFCQUFxQixFQUNyQix5QkFBeUIsRUFDekIsbUJBQW1CLEdBQ3BCLE1BQU0sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1B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ZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5iVGFibGVNb2R1bGUgfSBmcm9tICcuLi9jZGsvdGFibGUvdGFibGUubW9kdWxlJztcbmltcG9ydCB7IE5iSWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTmJUcmVlR3JpZENvbXBvbmVudCB9IGZyb20gJy4vdHJlZS1ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBOYlRyZWVHcmlkQ2VsbERlZkRpcmVjdGl2ZSxcbiAgTmJUcmVlR3JpZEZvb3RlckNlbGxEZWZEaXJlY3RpdmUsXG4gIE5iVHJlZUdyaWRGb290ZXJSb3dEZWZEaXJlY3RpdmUsXG4gIE5iVHJlZUdyaWRIZWFkZXJDZWxsRGVmRGlyZWN0aXZlLFxuICBOYlRyZWVHcmlkSGVhZGVyUm93RGVmRGlyZWN0aXZlLFxuICBOYlRyZWVHcmlkUm93RGVmRGlyZWN0aXZlLFxufSBmcm9tICcuL3RyZWUtZ3JpZC1kZWYuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIE5iVHJlZUdyaWRGb290ZXJSb3dDb21wb25lbnQsXG4gIE5iVHJlZUdyaWRIZWFkZXJSb3dDb21wb25lbnQsXG4gIE5iVHJlZUdyaWRSb3dDb21wb25lbnQsXG59IGZyb20gJy4vdHJlZS1ncmlkLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgTmJUcmVlR3JpZENlbGxEaXJlY3RpdmUsXG4gIE5iVHJlZUdyaWRGb290ZXJDZWxsRGlyZWN0aXZlLFxuICBOYlRyZWVHcmlkSGVhZGVyQ2VsbERpcmVjdGl2ZSxcbn0gZnJvbSAnLi90cmVlLWdyaWQtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgTmJTb3J0RGlyZWN0aXZlLFxuICBOYlNvcnRIZWFkZXJDb21wb25lbnQsXG4gIE5iU29ydEhlYWRlckljb25EaXJlY3RpdmUsXG4gIE5iU29ydEljb25Db21wb25lbnQsXG59IGZyb20gJy4vdHJlZS1ncmlkLXNvcnQuY29tcG9uZW50JztcbmltcG9ydCB7IE5iVHJlZUdyaWREYXRhU291cmNlQnVpbGRlciB9IGZyb20gJy4vZGF0YS1zb3VyY2UvdHJlZS1ncmlkLWRhdGEtc291cmNlJztcbmltcG9ydCB7IE5iVHJlZUdyaWRTb3J0U2VydmljZSB9IGZyb20gJy4vZGF0YS1zb3VyY2UvdHJlZS1ncmlkLXNvcnQuc2VydmljZSc7XG5pbXBvcnQgeyBOYlRyZWVHcmlkRmlsdGVyU2VydmljZSB9IGZyb20gJy4vZGF0YS1zb3VyY2UvdHJlZS1ncmlkLWZpbHRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE5iVHJlZUdyaWRTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhLXNvdXJjZS90cmVlLWdyaWQuc2VydmljZSc7XG5pbXBvcnQgeyBOYlRyZWVHcmlkRGF0YVNlcnZpY2UgfSBmcm9tICcuL2RhdGEtc291cmNlL3RyZWUtZ3JpZC1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJGaWx0ZXJEaXJlY3RpdmUsIE5iRmlsdGVySW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL3RyZWUtZ3JpZC1maWx0ZXInO1xuaW1wb3J0IHsgTmJUcmVlR3JpZFJvd1RvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vdHJlZS1ncmlkLXJvdy10b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5iVHJlZUdyaWRDb2x1bW5EZWZEaXJlY3RpdmUgfSBmcm9tICcuL3RyZWUtZ3JpZC1jb2x1bW4tZGVmLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOYlRyZWVHcmlkUm93VG9nZ2xlQ29tcG9uZW50IH0gZnJvbSAnLi90cmVlLWdyaWQtcm93LXRvZ2dsZS5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1xuICAvLyBUcmVlIEdyaWRcbiAgTmJUcmVlR3JpZENvbXBvbmVudCxcblxuICBOYlRyZWVHcmlkUm93RGVmRGlyZWN0aXZlLFxuICBOYlRyZWVHcmlkUm93Q29tcG9uZW50LFxuICBOYlRyZWVHcmlkQ2VsbERlZkRpcmVjdGl2ZSxcbiAgTmJUcmVlR3JpZENlbGxEaXJlY3RpdmUsXG5cbiAgTmJUcmVlR3JpZEhlYWRlclJvd0RlZkRpcmVjdGl2ZSxcbiAgTmJUcmVlR3JpZEhlYWRlclJvd0NvbXBvbmVudCxcbiAgTmJUcmVlR3JpZEhlYWRlckNlbGxEZWZEaXJlY3RpdmUsXG4gIE5iVHJlZUdyaWRIZWFkZXJDZWxsRGlyZWN0aXZlLFxuXG4gIE5iVHJlZUdyaWRGb290ZXJSb3dEZWZEaXJlY3RpdmUsXG4gIE5iVHJlZUdyaWRGb290ZXJSb3dDb21wb25lbnQsXG4gIE5iVHJlZUdyaWRGb290ZXJDZWxsRGVmRGlyZWN0aXZlLFxuICBOYlRyZWVHcmlkRm9vdGVyQ2VsbERpcmVjdGl2ZSxcblxuICBOYlRyZWVHcmlkQ29sdW1uRGVmRGlyZWN0aXZlLFxuXG4gIC8vIFNvcnQgZGlyZWN0aXZlc1xuICBOYlNvcnREaXJlY3RpdmUsXG4gIE5iU29ydEhlYWRlckNvbXBvbmVudCxcbiAgTmJTb3J0SWNvbkNvbXBvbmVudCxcblxuICAvLyBGaWx0ZXIgZGlyZWN0aXZlc1xuICBOYkZpbHRlckRpcmVjdGl2ZSxcbiAgTmJGaWx0ZXJJbnB1dERpcmVjdGl2ZSxcblxuICBOYlRyZWVHcmlkUm93VG9nZ2xlRGlyZWN0aXZlLFxuICBOYlRyZWVHcmlkUm93VG9nZ2xlQ29tcG9uZW50LFxuICBOYlNvcnRIZWFkZXJJY29uRGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUsIE5iVGFibGVNb2R1bGUsIE5iSWNvbk1vZHVsZSBdLFxuICBkZWNsYXJhdGlvbnM6IFsgLi4uQ09NUE9ORU5UUyBdLFxuICBleHBvcnRzOiBbIE5iVGFibGVNb2R1bGUsIC4uLkNPTVBPTkVOVFMgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTmJUcmVlR3JpZFNvcnRTZXJ2aWNlLFxuICAgIE5iVHJlZUdyaWRGaWx0ZXJTZXJ2aWNlLFxuICAgIE5iVHJlZUdyaWRTZXJ2aWNlLFxuICAgIE5iVHJlZUdyaWREYXRhU2VydmljZSxcbiAgICBOYlRyZWVHcmlkRGF0YVNvdXJjZUJ1aWxkZXIsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5iVHJlZUdyaWRNb2R1bGUge31cbiJdfQ==