/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbActionComponent, NbActionsComponent } from './actions.component';
import { NbBadgeModule } from '../badge/badge.module';
import { NbIconModule } from '../icon/icon.module';
import * as i0 from "@angular/core";
const NB_ACTIONS_COMPONENTS = [
    NbActionComponent,
    NbActionsComponent,
];
export class NbActionsModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbActionsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: NbActionsModule, declarations: [NbActionComponent,
            NbActionsComponent], imports: [NbSharedModule,
            NbBadgeModule,
            NbIconModule], exports: [NbActionComponent,
            NbActionsComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbActionsModule, imports: [NbSharedModule,
            NbBadgeModule,
            NbIconModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbActionsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        NbSharedModule,
                        NbBadgeModule,
                        NbIconModule,
                    ],
                    declarations: [
                        ...NB_ACTIONS_COMPONENTS,
                    ],
                    exports: [
                        ...NB_ACTIONS_COMPONENTS,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvYWN0aW9ucy9hY3Rpb25zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFbkQsTUFBTSxxQkFBcUIsR0FBRztJQUM1QixpQkFBaUI7SUFDakIsa0JBQWtCO0NBQ25CLENBQUM7QUFlRixNQUFNLE9BQU8sZUFBZTs4R0FBZixlQUFlOytHQUFmLGVBQWUsaUJBakIxQixpQkFBaUI7WUFDakIsa0JBQWtCLGFBS2hCLGNBQWM7WUFDZCxhQUFhO1lBQ2IsWUFBWSxhQVJkLGlCQUFpQjtZQUNqQixrQkFBa0I7K0dBZ0JQLGVBQWUsWUFYeEIsY0FBYztZQUNkLGFBQWE7WUFDYixZQUFZOzsyRkFTSCxlQUFlO2tCQWIzQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osR0FBRyxxQkFBcUI7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxHQUFHLHFCQUFxQjtxQkFDekI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOYkFjdGlvbkNvbXBvbmVudCwgTmJBY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9hY3Rpb25zLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE5iQmFkZ2VNb2R1bGUgfSBmcm9tICcuLi9iYWRnZS9iYWRnZS5tb2R1bGUnO1xuaW1wb3J0IHsgTmJJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pY29uLm1vZHVsZSc7XG5cbmNvbnN0IE5CX0FDVElPTlNfQ09NUE9ORU5UUyA9IFtcbiAgTmJBY3Rpb25Db21wb25lbnQsXG4gIE5iQWN0aW9uc0NvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYlNoYXJlZE1vZHVsZSxcbiAgICBOYkJhZGdlTW9kdWxlLFxuICAgIE5iSWNvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uTkJfQUNUSU9OU19DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uTkJfQUNUSU9OU19DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOYkFjdGlvbnNNb2R1bGUgeyB9XG4iXX0=