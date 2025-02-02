/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbSidebarComponent, NbSidebarFooterComponent, NbSidebarHeaderComponent, } from './sidebar.component';
import { NbSidebarService } from './sidebar.service';
import * as i0 from "@angular/core";
const NB_SIDEBAR_COMPONENTS = [
    NbSidebarComponent,
    NbSidebarFooterComponent,
    NbSidebarHeaderComponent,
];
const NB_SIDEBAR_PROVIDERS = [
    NbSidebarService,
];
export class NbSidebarModule {
    static forRoot() {
        return {
            ngModule: NbSidebarModule,
            providers: [
                ...NB_SIDEBAR_PROVIDERS,
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbSidebarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: NbSidebarModule, declarations: [NbSidebarComponent,
            NbSidebarFooterComponent,
            NbSidebarHeaderComponent], imports: [NbSharedModule], exports: [NbSidebarComponent,
            NbSidebarFooterComponent,
            NbSidebarHeaderComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbSidebarModule, imports: [NbSharedModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbSidebarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        NbSharedModule,
                    ],
                    declarations: [
                        ...NB_SIDEBAR_COMPONENTS,
                    ],
                    exports: [
                        ...NB_SIDEBAR_COMPONENTS,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXpELE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsd0JBQXdCLEVBQ3hCLHdCQUF3QixHQUN6QixNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQUVyRCxNQUFNLHFCQUFxQixHQUFHO0lBQzVCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsd0JBQXdCO0NBQ3pCLENBQUM7QUFFRixNQUFNLG9CQUFvQixHQUFHO0lBQzNCLGdCQUFnQjtDQUNqQixDQUFDO0FBYUYsTUFBTSxPQUFPLGVBQWU7SUFDMUIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNULEdBQUcsb0JBQW9CO2FBQ3hCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OEdBUlUsZUFBZTsrR0FBZixlQUFlLGlCQXBCMUIsa0JBQWtCO1lBQ2xCLHdCQUF3QjtZQUN4Qix3QkFBd0IsYUFTdEIsY0FBYyxhQVhoQixrQkFBa0I7WUFDbEIsd0JBQXdCO1lBQ3hCLHdCQUF3QjsrR0FrQmIsZUFBZSxZQVR4QixjQUFjOzsyRkFTTCxlQUFlO2tCQVgzQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxjQUFjO3FCQUNmO29CQUNELFlBQVksRUFBRTt3QkFDWixHQUFHLHFCQUFxQjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLEdBQUcscUJBQXFCO3FCQUN6QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7XG4gIE5iU2lkZWJhckNvbXBvbmVudCxcbiAgTmJTaWRlYmFyRm9vdGVyQ29tcG9uZW50LFxuICBOYlNpZGViYXJIZWFkZXJDb21wb25lbnQsXG59IGZyb20gJy4vc2lkZWJhci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBOYlNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi9zaWRlYmFyLnNlcnZpY2UnO1xuXG5jb25zdCBOQl9TSURFQkFSX0NPTVBPTkVOVFMgPSBbXG4gIE5iU2lkZWJhckNvbXBvbmVudCxcbiAgTmJTaWRlYmFyRm9vdGVyQ29tcG9uZW50LFxuICBOYlNpZGViYXJIZWFkZXJDb21wb25lbnQsXG5dO1xuXG5jb25zdCBOQl9TSURFQkFSX1BST1ZJREVSUyA9IFtcbiAgTmJTaWRlYmFyU2VydmljZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYlNoYXJlZE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uTkJfU0lERUJBUl9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uTkJfU0lERUJBUl9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOYlNpZGViYXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5iU2lkZWJhck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmJTaWRlYmFyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLk5CX1NJREVCQVJfUFJPVklERVJTLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=