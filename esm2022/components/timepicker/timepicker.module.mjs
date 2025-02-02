/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbOverlayModule } from '../cdk/overlay/overlay.module';
import { NbListModule } from '../list/list.module';
import { NbCardModule } from '../card/card.module';
import { NbCalendarKitModule } from '../calendar-kit/calendar-kit.module';
import { NbTimePickerDirective } from './timepicker.directive';
import { NbTimePickerComponent } from './timepicker.component';
import { NbTimePickerCellComponent } from './timepicker-cell.component';
import { NbCalendarTimeModelService } from '../calendar-kit/services/calendar-time-model.service';
import { NB_TIME_PICKER_CONFIG } from './model';
import * as i0 from "@angular/core";
export class NbTimepickerModule {
    static forRoot(config = {}) {
        return {
            ngModule: NbTimepickerModule,
            providers: [{ provide: NB_TIME_PICKER_CONFIG, useValue: config }],
        };
    }
    static forChild(config = {}) {
        return {
            ngModule: NbTimepickerModule,
            providers: [{ provide: NB_TIME_PICKER_CONFIG, useValue: config }],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTimepickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: NbTimepickerModule, declarations: [NbTimePickerComponent, NbTimePickerCellComponent, NbTimePickerDirective], imports: [CommonModule,
            NbOverlayModule,
            NbListModule,
            NbCardModule,
            NbCalendarKitModule], exports: [NbTimePickerComponent, NbTimePickerCellComponent, NbTimePickerDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTimepickerModule, providers: [NbCalendarTimeModelService], imports: [CommonModule,
            NbOverlayModule,
            NbListModule,
            NbCardModule,
            NbCalendarKitModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTimepickerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        NbOverlayModule,
                        NbListModule,
                        NbCardModule,
                        NbCalendarKitModule,
                    ],
                    providers: [NbCalendarTimeModelService],
                    exports: [NbTimePickerComponent, NbTimePickerCellComponent, NbTimePickerDirective],
                    declarations: [NbTimePickerComponent, NbTimePickerCellComponent, NbTimePickerDirective],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvdGltZXBpY2tlci90aW1lcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxxQkFBcUIsRUFBc0IsTUFBTSxTQUFTLENBQUM7O0FBY3BFLE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUE2QixFQUFFO1FBQzVDLE9BQU87WUFDTCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBQztTQUNoRSxDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBNkIsRUFBRTtRQUM3QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUM7U0FDaEUsQ0FBQztJQUNKLENBQUM7OEdBYlUsa0JBQWtCOytHQUFsQixrQkFBa0IsaUJBRmQscUJBQXFCLEVBQUUseUJBQXlCLEVBQUUscUJBQXFCLGFBUnBGLFlBQVk7WUFDWixlQUFlO1lBQ2YsWUFBWTtZQUNaLFlBQVk7WUFDWixtQkFBbUIsYUFHWCxxQkFBcUIsRUFBRSx5QkFBeUIsRUFBRSxxQkFBcUI7K0dBR3RFLGtCQUFrQixhQUpsQixDQUFDLDBCQUEwQixDQUFDLFlBTnJDLFlBQVk7WUFDWixlQUFlO1lBQ2YsWUFBWTtZQUNaLFlBQVk7WUFDWixtQkFBbUI7OzJGQU1WLGtCQUFrQjtrQkFaOUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixtQkFBbUI7cUJBQ3BCO29CQUNELFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO29CQUN2QyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSx5QkFBeUIsRUFBRSxxQkFBcUIsQ0FBQztvQkFDbEYsWUFBWSxFQUFFLENBQUMscUJBQXFCLEVBQUUseUJBQXlCLEVBQUUscUJBQXFCLENBQUM7aUJBQ3hGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBOYk92ZXJsYXlNb2R1bGUgfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9vdmVybGF5Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYkxpc3RNb2R1bGUgfSBmcm9tICcuLi9saXN0L2xpc3QubW9kdWxlJztcbmltcG9ydCB7IE5iQ2FyZE1vZHVsZSB9IGZyb20gJy4uL2NhcmQvY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgTmJDYWxlbmRhcktpdE1vZHVsZSB9IGZyb20gJy4uL2NhbGVuZGFyLWtpdC9jYWxlbmRhci1raXQubW9kdWxlJztcbmltcG9ydCB7IE5iVGltZVBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vdGltZXBpY2tlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmJUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYlRpbWVQaWNrZXJDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lcGlja2VyLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IE5iQ2FsZW5kYXJUaW1lTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vY2FsZW5kYXIta2l0L3NlcnZpY2VzL2NhbGVuZGFyLXRpbWUtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBOQl9USU1FX1BJQ0tFUl9DT05GSUcsIE5iVGltZVBpY2tlckNvbmZpZyB9IGZyb20gJy4vbW9kZWwnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE5iT3ZlcmxheU1vZHVsZSxcbiAgICBOYkxpc3RNb2R1bGUsXG4gICAgTmJDYXJkTW9kdWxlLFxuICAgIE5iQ2FsZW5kYXJLaXRNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW05iQ2FsZW5kYXJUaW1lTW9kZWxTZXJ2aWNlXSxcbiAgZXhwb3J0czogW05iVGltZVBpY2tlckNvbXBvbmVudCwgTmJUaW1lUGlja2VyQ2VsbENvbXBvbmVudCwgTmJUaW1lUGlja2VyRGlyZWN0aXZlXSxcbiAgZGVjbGFyYXRpb25zOiBbTmJUaW1lUGlja2VyQ29tcG9uZW50LCBOYlRpbWVQaWNrZXJDZWxsQ29tcG9uZW50LCBOYlRpbWVQaWNrZXJEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBOYlRpbWVwaWNrZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IE5iVGltZVBpY2tlckNvbmZpZyA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVyczxOYlRpbWVwaWNrZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5iVGltZXBpY2tlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBOQl9USU1FX1BJQ0tFUl9DT05GSUcsIHVzZVZhbHVlOiBjb25maWd9XSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckNoaWxkKGNvbmZpZzogTmJUaW1lUGlja2VyQ29uZmlnID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5iVGltZXBpY2tlck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmJUaW1lcGlja2VyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE5CX1RJTUVfUElDS0VSX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ31dLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==