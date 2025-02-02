/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbLayoutComponent, NbLayoutColumnComponent, NbLayoutFooterComponent, NbLayoutHeaderComponent, } from './layout.component';
import { NbRestoreScrollTopHelper } from './restore-scroll-top.service';
import { NbLtrDirective, NbRtlDirective } from './layout-direction.directive';
import * as i0 from "@angular/core";
const NB_LAYOUT_COMPONENTS = [
    NbLayoutComponent,
    NbLayoutColumnComponent,
    NbLayoutFooterComponent,
    NbLayoutHeaderComponent,
];
const NB_LAYOUT_DIRECTIVES = [NbLtrDirective, NbRtlDirective];
export class NbLayoutModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbLayoutModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: NbLayoutModule, declarations: [NbLayoutComponent,
            NbLayoutColumnComponent,
            NbLayoutFooterComponent,
            NbLayoutHeaderComponent, NbLtrDirective, NbRtlDirective], imports: [NbSharedModule], exports: [NbLayoutComponent,
            NbLayoutColumnComponent,
            NbLayoutFooterComponent,
            NbLayoutHeaderComponent, NbLtrDirective, NbRtlDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbLayoutModule, providers: [NbRestoreScrollTopHelper], imports: [NbSharedModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbLayoutModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NbSharedModule],
                    declarations: [...NB_LAYOUT_COMPONENTS, ...NB_LAYOUT_DIRECTIVES],
                    providers: [NbRestoreScrollTopHelper],
                    exports: [...NB_LAYOUT_COMPONENTS, ...NB_LAYOUT_DIRECTIVES],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBQ0gsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUNMLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsdUJBQXVCLEVBQ3ZCLHVCQUF1QixHQUN4QixNQUFNLG9CQUFvQixDQUFDO0FBRTVCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXhFLE9BQU8sRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBRTlFLE1BQU0sb0JBQW9CLEdBQUc7SUFDM0IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0NBQ3hCLENBQUM7QUFFRixNQUFNLG9CQUFvQixHQUFHLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBUTlELE1BQU0sT0FBTyxjQUFjOzhHQUFkLGNBQWM7K0dBQWQsY0FBYyxpQkFkekIsaUJBQWlCO1lBQ2pCLHVCQUF1QjtZQUN2Qix1QkFBdUI7WUFDdkIsdUJBQXVCLEVBR0ssY0FBYyxFQUFFLGNBQWMsYUFHaEQsY0FBYyxhQVR4QixpQkFBaUI7WUFDakIsdUJBQXVCO1lBQ3ZCLHVCQUF1QjtZQUN2Qix1QkFBdUIsRUFHSyxjQUFjLEVBQUUsY0FBYzsrR0FRL0MsY0FBYyxhQUhkLENBQUMsd0JBQXdCLENBQUMsWUFGM0IsY0FBYzs7MkZBS2IsY0FBYztrQkFOMUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0JBQ3pCLFlBQVksRUFBRSxDQUFDLEdBQUcsb0JBQW9CLEVBQUUsR0FBRyxvQkFBb0IsQ0FBQztvQkFDaEUsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7b0JBQ3JDLE9BQU8sRUFBRSxDQUFDLEdBQUcsb0JBQW9CLEVBQUUsR0FBRyxvQkFBb0IsQ0FBQztpQkFDNUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYlNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHtcbiAgTmJMYXlvdXRDb21wb25lbnQsXG4gIE5iTGF5b3V0Q29sdW1uQ29tcG9uZW50LFxuICBOYkxheW91dEZvb3RlckNvbXBvbmVudCxcbiAgTmJMYXlvdXRIZWFkZXJDb21wb25lbnQsXG59IGZyb20gJy4vbGF5b3V0LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE5iUmVzdG9yZVNjcm9sbFRvcEhlbHBlciB9IGZyb20gJy4vcmVzdG9yZS1zY3JvbGwtdG9wLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBOYkx0ckRpcmVjdGl2ZSwgTmJSdGxEaXJlY3RpdmUgfSBmcm9tICcuL2xheW91dC1kaXJlY3Rpb24uZGlyZWN0aXZlJztcblxuY29uc3QgTkJfTEFZT1VUX0NPTVBPTkVOVFMgPSBbXG4gIE5iTGF5b3V0Q29tcG9uZW50LFxuICBOYkxheW91dENvbHVtbkNvbXBvbmVudCxcbiAgTmJMYXlvdXRGb290ZXJDb21wb25lbnQsXG4gIE5iTGF5b3V0SGVhZGVyQ29tcG9uZW50LFxuXTtcblxuY29uc3QgTkJfTEFZT1VUX0RJUkVDVElWRVMgPSBbTmJMdHJEaXJlY3RpdmUsIE5iUnRsRGlyZWN0aXZlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05iU2hhcmVkTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uTkJfTEFZT1VUX0NPTVBPTkVOVFMsIC4uLk5CX0xBWU9VVF9ESVJFQ1RJVkVTXSxcbiAgcHJvdmlkZXJzOiBbTmJSZXN0b3JlU2Nyb2xsVG9wSGVscGVyXSxcbiAgZXhwb3J0czogWy4uLk5CX0xBWU9VVF9DT01QT05FTlRTLCAuLi5OQl9MQVlPVVRfRElSRUNUSVZFU10sXG59KVxuZXhwb3J0IGNsYXNzIE5iTGF5b3V0TW9kdWxlIHt9XG4iXX0=