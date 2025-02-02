/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbTabsetComponent, NbTabComponent } from './tabset.component';
import { NbBadgeModule } from '../badge/badge.module';
import { NbIconModule } from '../icon/icon.module';
import { NbTabContentDirective } from './tab-content.directive';
import { NbTabTitleDirective } from './tab-title.directive';
import * as i0 from "@angular/core";
const NB_TABSET_COMPONENTS = [NbTabsetComponent, NbTabComponent];
const NB_TABSET_DIRECTIVES = [NbTabContentDirective, NbTabTitleDirective];
export class NbTabsetModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTabsetModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: NbTabsetModule, declarations: [NbTabsetComponent, NbTabComponent, NbTabContentDirective, NbTabTitleDirective], imports: [NbSharedModule, NbBadgeModule, NbIconModule], exports: [NbTabsetComponent, NbTabComponent, NbTabContentDirective, NbTabTitleDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTabsetModule, imports: [NbSharedModule, NbBadgeModule, NbIconModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTabsetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NbSharedModule, NbBadgeModule, NbIconModule],
                    declarations: [...NB_TABSET_COMPONENTS, ...NB_TABSET_DIRECTIVES],
                    exports: [...NB_TABSET_COMPONENTS, ...NB_TABSET_DIRECTIVES],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy90YWJzZXQvdGFic2V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTVELE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUVqRSxNQUFNLG9CQUFvQixHQUFHLENBQUMscUJBQXFCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztBQU8xRSxNQUFNLE9BQU8sY0FBYzs4R0FBZCxjQUFjOytHQUFkLGNBQWMsaUJBVEcsaUJBQWlCLEVBQUUsY0FBYyxFQUVqQyxxQkFBcUIsRUFBRSxtQkFBbUIsYUFHNUQsY0FBYyxFQUFFLGFBQWEsRUFBRSxZQUFZLGFBTHpCLGlCQUFpQixFQUFFLGNBQWMsRUFFakMscUJBQXFCLEVBQUUsbUJBQW1COytHQU8zRCxjQUFjLFlBSmYsY0FBYyxFQUFFLGFBQWEsRUFBRSxZQUFZOzsyRkFJMUMsY0FBYztrQkFMMUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQztvQkFDdEQsWUFBWSxFQUFFLENBQUMsR0FBRyxvQkFBb0IsRUFBRSxHQUFHLG9CQUFvQixDQUFDO29CQUNoRSxPQUFPLEVBQUUsQ0FBQyxHQUFHLG9CQUFvQixFQUFFLEdBQUcsb0JBQW9CLENBQUM7aUJBQzVEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYlNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHsgTmJUYWJzZXRDb21wb25lbnQsIE5iVGFiQ29tcG9uZW50IH0gZnJvbSAnLi90YWJzZXQuY29tcG9uZW50JztcbmltcG9ydCB7IE5iQmFkZ2VNb2R1bGUgfSBmcm9tICcuLi9iYWRnZS9iYWRnZS5tb2R1bGUnO1xuaW1wb3J0IHsgTmJJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBOYlRhYkNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL3RhYi1jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOYlRhYlRpdGxlRGlyZWN0aXZlIH0gZnJvbSAnLi90YWItdGl0bGUuZGlyZWN0aXZlJztcblxuY29uc3QgTkJfVEFCU0VUX0NPTVBPTkVOVFMgPSBbTmJUYWJzZXRDb21wb25lbnQsIE5iVGFiQ29tcG9uZW50XTtcblxuY29uc3QgTkJfVEFCU0VUX0RJUkVDVElWRVMgPSBbTmJUYWJDb250ZW50RGlyZWN0aXZlLCBOYlRhYlRpdGxlRGlyZWN0aXZlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05iU2hhcmVkTW9kdWxlLCBOYkJhZGdlTW9kdWxlLCBOYkljb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5OQl9UQUJTRVRfQ09NUE9ORU5UUywgLi4uTkJfVEFCU0VUX0RJUkVDVElWRVNdLFxuICBleHBvcnRzOiBbLi4uTkJfVEFCU0VUX0NPTVBPTkVOVFMsIC4uLk5CX1RBQlNFVF9ESVJFQ1RJVkVTXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJUYWJzZXRNb2R1bGUge31cbiJdfQ==