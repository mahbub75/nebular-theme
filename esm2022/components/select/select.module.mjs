import { NgModule } from '@angular/core';
import { NbOverlayModule } from '../cdk/overlay/overlay.module';
import { NbSharedModule } from '../shared/shared.module';
import { NbInputModule } from '../input/input.module';
import { NbCardModule } from '../card/card.module';
import { NbButtonModule } from '../button/button.module';
import { NbSelectComponent, NbSelectLabelComponent } from './select.component';
import { NbOptionModule } from '../option/option-list.module';
import { NbIconModule } from '../icon/icon.module';
import * as i0 from "@angular/core";
const NB_SELECT_COMPONENTS = [NbSelectComponent, NbSelectLabelComponent];
export class NbSelectModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: NbSelectModule, declarations: [NbSelectComponent, NbSelectLabelComponent], imports: [NbSharedModule, NbOverlayModule, NbButtonModule, NbInputModule, NbCardModule, NbIconModule, NbOptionModule], exports: [NbSelectComponent, NbSelectLabelComponent, NbOptionModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbSelectModule, imports: [NbSharedModule, NbOverlayModule, NbButtonModule, NbInputModule, NbCardModule, NbIconModule, NbOptionModule, NbOptionModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NbSharedModule, NbOverlayModule, NbButtonModule, NbInputModule, NbCardModule, NbIconModule, NbOptionModule],
                    exports: [...NB_SELECT_COMPONENTS, NbOptionModule],
                    declarations: [...NB_SELECT_COMPONENTS],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFbkQsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLGlCQUFpQixFQUFFLHNCQUFzQixDQUFDLENBQUM7QUFPekUsTUFBTSxPQUFPLGNBQWM7OEdBQWQsY0FBYzsrR0FBZCxjQUFjLGlCQVBHLGlCQUFpQixFQUFFLHNCQUFzQixhQUczRCxjQUFjLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLGFBSHhGLGlCQUFpQixFQUFFLHNCQUFzQixFQUlsQyxjQUFjOytHQUd0QyxjQUFjLFlBSmYsY0FBYyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUNqRixjQUFjOzsyRkFHdEMsY0FBYztrQkFMMUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUM7b0JBQ3JILE9BQU8sRUFBRSxDQUFDLEdBQUcsb0JBQW9CLEVBQUUsY0FBYyxDQUFDO29CQUNsRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLG9CQUFvQixDQUFDO2lCQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iT3ZlcmxheU1vZHVsZSB9IGZyb20gJy4uL2Nkay9vdmVybGF5L292ZXJsYXkubW9kdWxlJztcbmltcG9ydCB7IE5iU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgTmJJbnB1dE1vZHVsZSB9IGZyb20gJy4uL2lucHV0L2lucHV0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYkNhcmRNb2R1bGUgfSBmcm9tICcuLi9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IE5iQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTmJTZWxlY3RDb21wb25lbnQsIE5iU2VsZWN0TGFiZWxDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJPcHRpb25Nb2R1bGUgfSBmcm9tICcuLi9vcHRpb24vb3B0aW9uLWxpc3QubW9kdWxlJztcbmltcG9ydCB7IE5iSWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuXG5jb25zdCBOQl9TRUxFQ1RfQ09NUE9ORU5UUyA9IFtOYlNlbGVjdENvbXBvbmVudCwgTmJTZWxlY3RMYWJlbENvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYlNoYXJlZE1vZHVsZSwgTmJPdmVybGF5TW9kdWxlLCBOYkJ1dHRvbk1vZHVsZSwgTmJJbnB1dE1vZHVsZSwgTmJDYXJkTW9kdWxlLCBOYkljb25Nb2R1bGUsIE5iT3B0aW9uTW9kdWxlXSxcbiAgZXhwb3J0czogWy4uLk5CX1NFTEVDVF9DT01QT05FTlRTLCBOYk9wdGlvbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLk5CX1NFTEVDVF9DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJTZWxlY3RNb2R1bGUge31cbiJdfQ==