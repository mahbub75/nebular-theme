/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbRouteTabsetComponent } from './route-tabset.component';
import { NbMergeConfigsPipe } from './merge-configs.pipe';
import { NbIconModule } from '../icon/icon.module';
import * as i0 from "@angular/core";
export class NbRouteTabsetModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbRouteTabsetModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: NbRouteTabsetModule, declarations: [NbRouteTabsetComponent, NbMergeConfigsPipe], imports: [NbSharedModule, NbIconModule], exports: [NbRouteTabsetComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbRouteTabsetModule, imports: [NbSharedModule, NbIconModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbRouteTabsetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NbSharedModule, NbIconModule],
                    declarations: [NbRouteTabsetComponent, NbMergeConfigsPipe],
                    exports: [NbRouteTabsetComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtdGFic2V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9yb3V0ZS10YWJzZXQvcm91dGUtdGFic2V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQU9uRCxNQUFNLE9BQU8sbUJBQW1COzhHQUFuQixtQkFBbUI7K0dBQW5CLG1CQUFtQixpQkFIZixzQkFBc0IsRUFBRSxrQkFBa0IsYUFEL0MsY0FBYyxFQUFFLFlBQVksYUFFNUIsc0JBQXNCOytHQUVyQixtQkFBbUIsWUFKcEIsY0FBYyxFQUFFLFlBQVk7OzJGQUkzQixtQkFBbUI7a0JBTC9CLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQztvQkFDdkMsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsa0JBQWtCLENBQUM7b0JBQzFELE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUNsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7IE5iUm91dGVUYWJzZXRDb21wb25lbnQgfSBmcm9tICcuL3JvdXRlLXRhYnNldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJNZXJnZUNvbmZpZ3NQaXBlIH0gZnJvbSAnLi9tZXJnZS1jb25maWdzLnBpcGUnO1xuaW1wb3J0IHsgTmJJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pY29uLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYlNoYXJlZE1vZHVsZSwgTmJJY29uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTmJSb3V0ZVRhYnNldENvbXBvbmVudCwgTmJNZXJnZUNvbmZpZ3NQaXBlXSxcbiAgZXhwb3J0czogW05iUm91dGVUYWJzZXRDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOYlJvdXRlVGFic2V0TW9kdWxlIHt9XG4iXX0=