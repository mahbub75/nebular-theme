import { NgModule } from '@angular/core';
import { NbOverlayModule } from '../cdk/overlay/overlay.module';
import { NbSharedModule } from '../shared/shared.module';
import { NbInputModule } from '../input/input.module';
import { NbCardModule } from '../card/card.module';
import { NbButtonModule } from '../button/button.module';
import { NbSelectWithAutocompleteComponent } from './select-with-autocomplete.component';
import { NbOptionModule } from '../option/option-list.module';
import { NbSelectModule } from '../select/select.module';
import { NbIconModule } from '../icon/icon.module';
import { NbFormFieldModule } from '../form-field/form-field.module';
import * as i0 from "@angular/core";
const NB_SELECT_COMPONENTS = [NbSelectWithAutocompleteComponent];
export class NbSelectWithAutocompleteModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbSelectWithAutocompleteModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: NbSelectWithAutocompleteModule, declarations: [NbSelectWithAutocompleteComponent], imports: [NbSharedModule,
            NbOverlayModule,
            NbButtonModule,
            NbInputModule,
            NbCardModule,
            NbIconModule,
            NbOptionModule,
            NbFormFieldModule,
            NbSelectModule], exports: [NbSelectWithAutocompleteComponent, NbOptionModule, NbSelectModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbSelectWithAutocompleteModule, imports: [NbSharedModule,
            NbOverlayModule,
            NbButtonModule,
            NbInputModule,
            NbCardModule,
            NbIconModule,
            NbOptionModule,
            NbFormFieldModule,
            NbSelectModule, NbOptionModule, NbSelectModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbSelectWithAutocompleteModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        NbSharedModule,
                        NbOverlayModule,
                        NbButtonModule,
                        NbInputModule,
                        NbCardModule,
                        NbIconModule,
                        NbOptionModule,
                        NbFormFieldModule,
                        NbSelectModule,
                    ],
                    exports: [...NB_SELECT_COMPONENTS, NbOptionModule, NbSelectModule],
                    declarations: [...NB_SELECT_COMPONENTS],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXdpdGgtYXV0b2NvbXBsZXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9zZWxlY3Qtd2l0aC1hdXRvY29tcGxldGUvc2VsZWN0LXdpdGgtYXV0b2NvbXBsZXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBRXBFLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBaUJqRSxNQUFNLE9BQU8sOEJBQThCOzhHQUE5Qiw4QkFBOEI7K0dBQTlCLDhCQUE4QixpQkFqQmIsaUNBQWlDLGFBSTNELGNBQWM7WUFDZCxlQUFlO1lBQ2YsY0FBYztZQUNkLGFBQWE7WUFDYixZQUFZO1lBQ1osWUFBWTtZQUNaLGNBQWM7WUFDZCxpQkFBaUI7WUFDakIsY0FBYyxhQVpZLGlDQUFpQyxFQWMxQixjQUFjLEVBQUUsY0FBYzsrR0FHdEQsOEJBQThCLFlBYnZDLGNBQWM7WUFDZCxlQUFlO1lBQ2YsY0FBYztZQUNkLGFBQWE7WUFDYixZQUFZO1lBQ1osWUFBWTtZQUNaLGNBQWM7WUFDZCxpQkFBaUI7WUFDakIsY0FBYyxFQUVtQixjQUFjLEVBQUUsY0FBYzs7MkZBR3RELDhCQUE4QjtrQkFmMUMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxpQkFBaUI7d0JBQ2pCLGNBQWM7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFLENBQUMsR0FBRyxvQkFBb0IsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDO29CQUNsRSxZQUFZLEVBQUUsQ0FBQyxHQUFHLG9CQUFvQixDQUFDO2lCQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iT3ZlcmxheU1vZHVsZSB9IGZyb20gJy4uL2Nkay9vdmVybGF5L292ZXJsYXkubW9kdWxlJztcbmltcG9ydCB7IE5iU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgTmJJbnB1dE1vZHVsZSB9IGZyb20gJy4uL2lucHV0L2lucHV0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYkNhcmRNb2R1bGUgfSBmcm9tICcuLi9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IE5iQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTmJTZWxlY3RXaXRoQXV0b2NvbXBsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3Qtd2l0aC1hdXRvY29tcGxldGUuY29tcG9uZW50JztcbmltcG9ydCB7IE5iT3B0aW9uTW9kdWxlIH0gZnJvbSAnLi4vb3B0aW9uL29wdGlvbi1saXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYlNlbGVjdE1vZHVsZSB9IGZyb20gJy4uL3NlbGVjdC9zZWxlY3QubW9kdWxlJztcbmltcG9ydCB7IE5iSWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTmJGb3JtRmllbGRNb2R1bGUgfSBmcm9tICcuLi9mb3JtLWZpZWxkL2Zvcm0tZmllbGQubW9kdWxlJztcblxuY29uc3QgTkJfU0VMRUNUX0NPTVBPTkVOVFMgPSBbTmJTZWxlY3RXaXRoQXV0b2NvbXBsZXRlQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5iU2hhcmVkTW9kdWxlLFxuICAgIE5iT3ZlcmxheU1vZHVsZSxcbiAgICBOYkJ1dHRvbk1vZHVsZSxcbiAgICBOYklucHV0TW9kdWxlLFxuICAgIE5iQ2FyZE1vZHVsZSxcbiAgICBOYkljb25Nb2R1bGUsXG4gICAgTmJPcHRpb25Nb2R1bGUsXG4gICAgTmJGb3JtRmllbGRNb2R1bGUsXG4gICAgTmJTZWxlY3RNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFsuLi5OQl9TRUxFQ1RfQ09NUE9ORU5UUywgTmJPcHRpb25Nb2R1bGUsIE5iU2VsZWN0TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uTkJfU0VMRUNUX0NPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBOYlNlbGVjdFdpdGhBdXRvY29tcGxldGVNb2R1bGUge31cbiJdfQ==