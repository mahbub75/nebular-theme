/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbOverlayModule } from '../cdk/overlay/overlay.module';
import { NbCardModule } from '../card/card.module';
import { NbAutocompleteComponent } from './autocomplete.component';
import { NbAutocompleteDirective } from './autocomplete.directive';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NbOptionModule } from '../option/option-list.module';
import * as i0 from "@angular/core";
const NB_AUTOCOMPLETE_COMPONENTS = [
    NbAutocompleteComponent,
    NbAutocompleteDirective,
];
export class NbAutocompleteModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbAutocompleteModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: NbAutocompleteModule, declarations: [NbAutocompleteComponent,
            NbAutocompleteDirective], imports: [CommonModule,
            FormsModule,
            NbOverlayModule,
            NbCardModule,
            NbOptionModule], exports: [NbAutocompleteComponent,
            NbAutocompleteDirective, NbOptionModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbAutocompleteModule, imports: [CommonModule,
            FormsModule,
            NbOverlayModule,
            NbCardModule,
            NbOptionModule, NbOptionModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbAutocompleteModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        NbOverlayModule,
                        NbCardModule,
                        NbOptionModule,
                    ],
                    exports: [
                        ...NB_AUTOCOMPLETE_COMPONENTS,
                        NbOptionModule,
                    ],
                    declarations: [...NB_AUTOCOMPLETE_COMPONENTS],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUU5RCxNQUFNLDBCQUEwQixHQUFHO0lBQ2pDLHVCQUF1QjtJQUN2Qix1QkFBdUI7Q0FDeEIsQ0FBQztBQWdCRixNQUFNLE9BQU8sb0JBQW9COzhHQUFwQixvQkFBb0I7K0dBQXBCLG9CQUFvQixpQkFsQi9CLHVCQUF1QjtZQUN2Qix1QkFBdUIsYUFLckIsWUFBWTtZQUNaLFdBQVc7WUFDWCxlQUFlO1lBQ2YsWUFBWTtZQUNaLGNBQWMsYUFWaEIsdUJBQXVCO1lBQ3ZCLHVCQUF1QixFQWFwQixjQUFjOytHQUlOLG9CQUFvQixZQVo3QixZQUFZO1lBQ1osV0FBVztZQUNYLGVBQWU7WUFDZixZQUFZO1lBQ1osY0FBYyxFQUliLGNBQWM7OzJGQUlOLG9CQUFvQjtrQkFkaEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGVBQWU7d0JBQ2YsWUFBWTt3QkFDWixjQUFjO3FCQUNmO29CQUNBLE9BQU8sRUFBRTt3QkFDUCxHQUFHLDBCQUEwQjt3QkFDN0IsY0FBYztxQkFDZjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLDBCQUEwQixDQUFDO2lCQUMvQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJPdmVybGF5TW9kdWxlIH0gZnJvbSAnLi4vY2RrL292ZXJsYXkvb3ZlcmxheS5tb2R1bGUnO1xuaW1wb3J0IHsgTmJDYXJkTW9kdWxlIH0gZnJvbSAnLi4vY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBOYkF1dG9jb21wbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vYXV0b2NvbXBsZXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYkF1dG9jb21wbGV0ZURpcmVjdGl2ZSB9IGZyb20gJy4vYXV0b2NvbXBsZXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOYk9wdGlvbk1vZHVsZSB9IGZyb20gJy4uL29wdGlvbi9vcHRpb24tbGlzdC5tb2R1bGUnO1xuXG5jb25zdCBOQl9BVVRPQ09NUExFVEVfQ09NUE9ORU5UUyA9IFtcbiAgTmJBdXRvY29tcGxldGVDb21wb25lbnQsXG4gIE5iQXV0b2NvbXBsZXRlRGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBOYk92ZXJsYXlNb2R1bGUsXG4gICAgTmJDYXJkTW9kdWxlLFxuICAgIE5iT3B0aW9uTW9kdWxlLFxuICBdLFxuICAgZXhwb3J0czogW1xuICAgICAuLi5OQl9BVVRPQ09NUExFVEVfQ09NUE9ORU5UUyxcbiAgICAgTmJPcHRpb25Nb2R1bGUsXG4gICBdLFxuICAgZGVjbGFyYXRpb25zOiBbLi4uTkJfQVVUT0NPTVBMRVRFX0NPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBOYkF1dG9jb21wbGV0ZU1vZHVsZSB7XG59XG4iXX0=