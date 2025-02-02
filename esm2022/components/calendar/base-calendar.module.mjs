/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbCalendarKitModule } from '../calendar-kit/calendar-kit.module';
import { NbCardModule } from '../card/card.module';
import { NbBaseCalendarComponent } from './base-calendar.component';
import * as i0 from "@angular/core";
export class NbBaseCalendarModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbBaseCalendarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: NbBaseCalendarModule, declarations: [NbBaseCalendarComponent], imports: [NbCalendarKitModule, NbSharedModule, NbCardModule], exports: [NbBaseCalendarComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbBaseCalendarModule, imports: [NbCalendarKitModule, NbSharedModule, NbCardModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbBaseCalendarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NbCalendarKitModule, NbSharedModule, NbCardModule],
                    exports: [NbBaseCalendarComponent],
                    declarations: [NbBaseCalendarComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jYWxlbmRhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2FsZW5kYXIvYmFzZS1jYWxlbmRhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFRcEUsTUFBTSxPQUFPLG9CQUFvQjs4R0FBcEIsb0JBQW9COytHQUFwQixvQkFBb0IsaUJBRmhCLHVCQUF1QixhQUY1QixtQkFBbUIsRUFBRSxjQUFjLEVBQUUsWUFBWSxhQUNqRCx1QkFBdUI7K0dBR3RCLG9CQUFvQixZQUpyQixtQkFBbUIsRUFBRSxjQUFjLEVBQUUsWUFBWTs7MkZBSWhELG9CQUFvQjtrQkFMaEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDO29CQUM1RCxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDbEMsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYlNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IE5iQ2FsZW5kYXJLaXRNb2R1bGUgfSBmcm9tICcuLi9jYWxlbmRhci1raXQvY2FsZW5kYXIta2l0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYkNhcmRNb2R1bGUgfSBmcm9tICcuLi9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IE5iQmFzZUNhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLWNhbGVuZGFyLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05iQ2FsZW5kYXJLaXRNb2R1bGUsIE5iU2hhcmVkTW9kdWxlLCBOYkNhcmRNb2R1bGVdLFxuICBleHBvcnRzOiBbTmJCYXNlQ2FsZW5kYXJDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtOYkJhc2VDYWxlbmRhckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5iQmFzZUNhbGVuZGFyTW9kdWxlIHtcbn1cbiJdfQ==