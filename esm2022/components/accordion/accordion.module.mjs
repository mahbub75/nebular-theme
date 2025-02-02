/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbIconModule } from '../icon/icon.module';
import { NbAccordionComponent } from './accordion.component';
import { NbAccordionItemComponent } from './accordion-item.component';
import { NbAccordionItemHeaderComponent } from './accordion-item-header.component';
import { NbAccordionItemBodyComponent } from './accordion-item-body.component';
import * as i0 from "@angular/core";
const NB_ACCORDION_COMPONENTS = [
    NbAccordionComponent,
    NbAccordionItemComponent,
    NbAccordionItemHeaderComponent,
    NbAccordionItemBodyComponent,
];
export class NbAccordionModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbAccordionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: NbAccordionModule, declarations: [NbAccordionComponent,
            NbAccordionItemComponent,
            NbAccordionItemHeaderComponent,
            NbAccordionItemBodyComponent], imports: [CommonModule, NbIconModule], exports: [NbAccordionComponent,
            NbAccordionItemComponent,
            NbAccordionItemHeaderComponent,
            NbAccordionItemBodyComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbAccordionModule, imports: [CommonModule, NbIconModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbAccordionModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NbIconModule],
                    exports: [...NB_ACCORDION_COMPONENTS],
                    declarations: [...NB_ACCORDION_COMPONENTS],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQUUvRSxNQUFNLHVCQUF1QixHQUFHO0lBQzlCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLDRCQUE0QjtDQUM3QixDQUFDO0FBUUYsTUFBTSxPQUFPLGlCQUFpQjs4R0FBakIsaUJBQWlCOytHQUFqQixpQkFBaUIsaUJBWjVCLG9CQUFvQjtZQUNwQix3QkFBd0I7WUFDeEIsOEJBQThCO1lBQzlCLDRCQUE0QixhQUlsQixZQUFZLEVBQUUsWUFBWSxhQVBwQyxvQkFBb0I7WUFDcEIsd0JBQXdCO1lBQ3hCLDhCQUE4QjtZQUM5Qiw0QkFBNEI7K0dBU2pCLGlCQUFpQixZQUxsQixZQUFZLEVBQUUsWUFBWTs7MkZBS3pCLGlCQUFpQjtrQkFON0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO29CQUNyQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLHVCQUF1QixDQUFDO29CQUNyQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLHVCQUF1QixDQUFDO29CQUMxQyxTQUFTLEVBQUUsRUFBRTtpQkFDZCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5iSWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTmJBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJBY2NvcmRpb25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24taXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJBY2NvcmRpb25JdGVtSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24taXRlbS1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5iQWNjb3JkaW9uSXRlbUJvZHlDb21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi1pdGVtLWJvZHkuY29tcG9uZW50JztcblxuY29uc3QgTkJfQUNDT1JESU9OX0NPTVBPTkVOVFMgPSBbXG4gIE5iQWNjb3JkaW9uQ29tcG9uZW50LFxuICBOYkFjY29yZGlvbkl0ZW1Db21wb25lbnQsXG4gIE5iQWNjb3JkaW9uSXRlbUhlYWRlckNvbXBvbmVudCxcbiAgTmJBY2NvcmRpb25JdGVtQm9keUNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5iSWNvbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFsuLi5OQl9BQ0NPUkRJT05fQ09NUE9ORU5UU10sXG4gIGRlY2xhcmF0aW9uczogWy4uLk5CX0FDQ09SRElPTl9DT01QT05FTlRTXSxcbiAgcHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJBY2NvcmRpb25Nb2R1bGUge31cbiJdfQ==