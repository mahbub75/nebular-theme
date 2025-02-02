import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbOptionComponent } from './option.component';
import { NbOptionGroupComponent } from './option-group.component';
import { NbOptionListComponent } from './option-list.component';
import { NbCheckboxModule } from '../checkbox/checkbox.module';
import * as i0 from "@angular/core";
const NB_OPTION_LIST_COMPONENTS = [
    NbOptionListComponent,
    NbOptionComponent,
    NbOptionGroupComponent,
];
export class NbOptionModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbOptionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: NbOptionModule, declarations: [NbOptionListComponent,
            NbOptionComponent,
            NbOptionGroupComponent], imports: [CommonModule,
            NbCheckboxModule], exports: [NbOptionListComponent,
            NbOptionComponent,
            NbOptionGroupComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbOptionModule, imports: [CommonModule,
            NbCheckboxModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbOptionModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ...NB_OPTION_LIST_COMPONENTS,
                    ],
                    imports: [
                        CommonModule,
                        NbCheckboxModule,
                    ],
                    exports: [
                        ...NB_OPTION_LIST_COMPONENTS,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL29wdGlvbi9vcHRpb24tbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBRS9ELE1BQU0seUJBQXlCLEdBQUc7SUFDaEMscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixzQkFBc0I7Q0FDdkIsQ0FBQztBQWNGLE1BQU0sT0FBTyxjQUFjOzhHQUFkLGNBQWM7K0dBQWQsY0FBYyxpQkFqQnpCLHFCQUFxQjtZQUNyQixpQkFBaUI7WUFDakIsc0JBQXNCLGFBUXBCLFlBQVk7WUFDWixnQkFBZ0IsYUFYbEIscUJBQXFCO1lBQ3JCLGlCQUFpQjtZQUNqQixzQkFBc0I7K0dBZVgsY0FBYyxZQVB2QixZQUFZO1lBQ1osZ0JBQWdCOzsyRkFNUCxjQUFjO2tCQVoxQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixHQUFHLHlCQUF5QjtxQkFDN0I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsR0FBRyx5QkFBeUI7cUJBQzdCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOYk9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYk9wdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IE5iT3B0aW9uTGlzdENvbXBvbmVudCB9IGZyb20gJy4vb3B0aW9uLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IE5iQ2hlY2tib3hNb2R1bGUgfSBmcm9tICcuLi9jaGVja2JveC9jaGVja2JveC5tb2R1bGUnO1xuXG5jb25zdCBOQl9PUFRJT05fTElTVF9DT01QT05FTlRTID0gW1xuICBOYk9wdGlvbkxpc3RDb21wb25lbnQsXG4gIE5iT3B0aW9uQ29tcG9uZW50LFxuICBOYk9wdGlvbkdyb3VwQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uTkJfT1BUSU9OX0xJU1RfQ09NUE9ORU5UUyxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBOYkNoZWNrYm94TW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uTkJfT1BUSU9OX0xJU1RfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJPcHRpb25Nb2R1bGUgeyB9XG4iXX0=