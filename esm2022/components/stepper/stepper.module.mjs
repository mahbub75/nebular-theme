/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbStepperComponent } from './stepper.component';
import { NbStepComponent } from './step.component';
import { NbStepperNextDirective, NbStepperPreviousDirective } from './stepper-button.directive';
import { NbIconModule } from '../icon/icon.module';
import * as i0 from "@angular/core";
export class NbStepperModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbStepperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: NbStepperModule, declarations: [NbStepperComponent,
            NbStepComponent,
            NbStepperNextDirective,
            NbStepperPreviousDirective], imports: [NbSharedModule,
            NbIconModule], exports: [NbStepperComponent,
            NbStepComponent,
            NbStepperNextDirective,
            NbStepperPreviousDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbStepperModule, imports: [NbSharedModule,
            NbIconModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbStepperModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        NbSharedModule,
                        NbIconModule,
                    ],
                    declarations: [
                        NbStepperComponent,
                        NbStepComponent,
                        NbStepperNextDirective,
                        NbStepperPreviousDirective,
                    ],
                    exports: [
                        NbStepperComponent,
                        NbStepComponent,
                        NbStepperNextDirective,
                        NbStepperPreviousDirective,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvc3RlcHBlci9zdGVwcGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFvQm5ELE1BQU0sT0FBTyxlQUFlOzhHQUFmLGVBQWU7K0dBQWYsZUFBZSxpQkFaeEIsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixzQkFBc0I7WUFDdEIsMEJBQTBCLGFBUDFCLGNBQWM7WUFDZCxZQUFZLGFBU1osa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixzQkFBc0I7WUFDdEIsMEJBQTBCOytHQUdqQixlQUFlLFlBaEJ4QixjQUFjO1lBQ2QsWUFBWTs7MkZBZUgsZUFBZTtrQkFsQjNCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLHNCQUFzQjt3QkFDdEIsMEJBQTBCO3FCQUMzQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLHNCQUFzQjt3QkFDdEIsMEJBQTBCO3FCQUMzQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBOYlN0ZXBwZXJDb21wb25lbnQgfSBmcm9tICcuL3N0ZXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5iU3RlcENvbXBvbmVudCB9IGZyb20gJy4vc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJTdGVwcGVyTmV4dERpcmVjdGl2ZSwgTmJTdGVwcGVyUHJldmlvdXNEaXJlY3RpdmUgfSBmcm9tICcuL3N0ZXBwZXItYnV0dG9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOYkljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2ljb24ubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5iU2hhcmVkTW9kdWxlLFxuICAgIE5iSWNvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmJTdGVwcGVyQ29tcG9uZW50LFxuICAgIE5iU3RlcENvbXBvbmVudCxcbiAgICBOYlN0ZXBwZXJOZXh0RGlyZWN0aXZlLFxuICAgIE5iU3RlcHBlclByZXZpb3VzRGlyZWN0aXZlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmJTdGVwcGVyQ29tcG9uZW50LFxuICAgIE5iU3RlcENvbXBvbmVudCxcbiAgICBOYlN0ZXBwZXJOZXh0RGlyZWN0aXZlLFxuICAgIE5iU3RlcHBlclByZXZpb3VzRGlyZWN0aXZlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOYlN0ZXBwZXJNb2R1bGUge1xufVxuIl19