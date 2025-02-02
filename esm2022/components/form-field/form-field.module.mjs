/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbFormFieldComponent } from './form-field.component';
import { NbPrefixDirective } from './prefix.directive';
import { NbSuffixDirective } from './suffix.directive';
import * as i0 from "@angular/core";
const COMPONENTS = [
    NbFormFieldComponent,
    NbPrefixDirective,
    NbSuffixDirective,
];
export class NbFormFieldModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbFormFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: NbFormFieldModule, declarations: [NbFormFieldComponent,
            NbPrefixDirective,
            NbSuffixDirective], imports: [CommonModule], exports: [NbFormFieldComponent,
            NbPrefixDirective,
            NbSuffixDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbFormFieldModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbFormFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [...COMPONENTS],
                    exports: [...COMPONENTS],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRXZELE1BQU0sVUFBVSxHQUFHO0lBQ2pCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsaUJBQWlCO0NBQ2xCLENBQUM7QUFPRixNQUFNLE9BQU8saUJBQWlCOzhHQUFqQixpQkFBaUI7K0dBQWpCLGlCQUFpQixpQkFWNUIsb0JBQW9CO1lBQ3BCLGlCQUFpQjtZQUNqQixpQkFBaUIsYUFJTixZQUFZLGFBTnZCLG9CQUFvQjtZQUNwQixpQkFBaUI7WUFDakIsaUJBQWlCOytHQVFOLGlCQUFpQixZQUpqQixZQUFZOzsyRkFJWixpQkFBaUI7a0JBTDdCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUUsWUFBWSxDQUFFO29CQUN6QixZQUFZLEVBQUUsQ0FBRSxHQUFHLFVBQVUsQ0FBRTtvQkFDL0IsT0FBTyxFQUFFLENBQUUsR0FBRyxVQUFVLENBQUU7aUJBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTmJGb3JtRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IE5iUHJlZml4RGlyZWN0aXZlIH0gZnJvbSAnLi9wcmVmaXguZGlyZWN0aXZlJztcbmltcG9ydCB7IE5iU3VmZml4RGlyZWN0aXZlIH0gZnJvbSAnLi9zdWZmaXguZGlyZWN0aXZlJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtcbiAgTmJGb3JtRmllbGRDb21wb25lbnQsXG4gIE5iUHJlZml4RGlyZWN0aXZlLFxuICBOYlN1ZmZpeERpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlIF0sXG4gIGRlY2xhcmF0aW9uczogWyAuLi5DT01QT05FTlRTIF0sXG4gIGV4cG9ydHM6IFsgLi4uQ09NUE9ORU5UUyBdLFxufSlcbmV4cG9ydCBjbGFzcyBOYkZvcm1GaWVsZE1vZHVsZSB7XG59XG4iXX0=