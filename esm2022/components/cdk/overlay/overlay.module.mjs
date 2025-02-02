import { NgModule } from '@angular/core';
import { NbSharedModule } from '../../shared/shared.module';
import { NbA11yModule } from '../a11y/a11y.module';
import { NbCdkMappingModule } from './mapping';
import { NbPositionBuilderService } from './overlay-position';
import { NbOverlayContainerComponent, NbPositionedContainerComponent } from './overlay-container';
import { NbOverlayService } from './overlay-service';
import { NbCdkAdapterModule } from '../adapter/adapter.module';
import { NbPositionHelper } from './position-helper';
import { NbTriggerStrategyBuilderService } from './overlay-trigger';
import * as i0 from "@angular/core";
export class NbOverlayModule {
    static forRoot() {
        return {
            ngModule: NbOverlayModule,
            providers: [
                NbPositionBuilderService,
                NbTriggerStrategyBuilderService,
                NbOverlayService,
                NbPositionHelper,
                ...NbCdkMappingModule.forRoot().providers,
                ...NbCdkAdapterModule.forRoot().providers,
                ...NbA11yModule.forRoot().providers,
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbOverlayModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: NbOverlayModule, declarations: [NbPositionedContainerComponent,
            NbOverlayContainerComponent], imports: [NbCdkMappingModule,
            NbSharedModule], exports: [NbCdkMappingModule,
            NbCdkAdapterModule,
            NbOverlayContainerComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbOverlayModule, imports: [NbCdkMappingModule,
            NbSharedModule, NbCdkMappingModule,
            NbCdkAdapterModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbOverlayModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        NbCdkMappingModule,
                        NbSharedModule,
                    ],
                    declarations: [
                        NbPositionedContainerComponent,
                        NbOverlayContainerComponent,
                    ],
                    exports: [
                        NbCdkMappingModule,
                        NbCdkAdapterModule,
                        NbOverlayContainerComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2RrL292ZXJsYXkvb3ZlcmxheS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDL0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLDhCQUE4QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBa0JwRSxNQUFNLE9BQU8sZUFBZTtJQUMxQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1Qsd0JBQXdCO2dCQUN4QiwrQkFBK0I7Z0JBQy9CLGdCQUFnQjtnQkFDaEIsZ0JBQWdCO2dCQUNoQixHQUFHLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVM7Z0JBQ3pDLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUztnQkFDekMsR0FBRyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUzthQUNwQztTQUNGLENBQUM7SUFDSixDQUFDOzhHQWRVLGVBQWU7K0dBQWYsZUFBZSxpQkFUeEIsOEJBQThCO1lBQzlCLDJCQUEyQixhQUwzQixrQkFBa0I7WUFDbEIsY0FBYyxhQU9kLGtCQUFrQjtZQUNsQixrQkFBa0I7WUFDbEIsMkJBQTJCOytHQUdsQixlQUFlLFlBYnhCLGtCQUFrQjtZQUNsQixjQUFjLEVBT2Qsa0JBQWtCO1lBQ2xCLGtCQUFrQjs7MkZBSVQsZUFBZTtrQkFmM0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQixjQUFjO3FCQUNmO29CQUNELFlBQVksRUFBRTt3QkFDWiw4QkFBOEI7d0JBQzlCLDJCQUEyQjtxQkFDNUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsa0JBQWtCO3dCQUNsQiwyQkFBMkI7cUJBQzVCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBOYkExMXlNb2R1bGUgfSBmcm9tICcuLi9hMTF5L2ExMXkubW9kdWxlJztcbmltcG9ydCB7IE5iQ2RrTWFwcGluZ01vZHVsZSB9IGZyb20gJy4vbWFwcGluZyc7XG5pbXBvcnQgeyBOYlBvc2l0aW9uQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuL292ZXJsYXktcG9zaXRpb24nO1xuaW1wb3J0IHsgTmJPdmVybGF5Q29udGFpbmVyQ29tcG9uZW50LCBOYlBvc2l0aW9uZWRDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7IE5iT3ZlcmxheVNlcnZpY2UgfSBmcm9tICcuL292ZXJsYXktc2VydmljZSc7XG5pbXBvcnQgeyBOYkNka0FkYXB0ZXJNb2R1bGUgfSBmcm9tICcuLi9hZGFwdGVyL2FkYXB0ZXIubW9kdWxlJztcbmltcG9ydCB7IE5iUG9zaXRpb25IZWxwZXIgfSBmcm9tICcuL3Bvc2l0aW9uLWhlbHBlcic7XG5pbXBvcnQgeyBOYlRyaWdnZXJTdHJhdGVneUJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi9vdmVybGF5LXRyaWdnZXInO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYkNka01hcHBpbmdNb2R1bGUsXG4gICAgTmJTaGFyZWRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5iUG9zaXRpb25lZENvbnRhaW5lckNvbXBvbmVudCxcbiAgICBOYk92ZXJsYXlDb250YWluZXJDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOYkNka01hcHBpbmdNb2R1bGUsXG4gICAgTmJDZGtBZGFwdGVyTW9kdWxlLFxuICAgIE5iT3ZlcmxheUNvbnRhaW5lckNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJPdmVybGF5TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOYk92ZXJsYXlNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5iT3ZlcmxheU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBOYlBvc2l0aW9uQnVpbGRlclNlcnZpY2UsXG4gICAgICAgIE5iVHJpZ2dlclN0cmF0ZWd5QnVpbGRlclNlcnZpY2UsXG4gICAgICAgIE5iT3ZlcmxheVNlcnZpY2UsXG4gICAgICAgIE5iUG9zaXRpb25IZWxwZXIsXG4gICAgICAgIC4uLk5iQ2RrTWFwcGluZ01vZHVsZS5mb3JSb290KCkucHJvdmlkZXJzLFxuICAgICAgICAuLi5OYkNka0FkYXB0ZXJNb2R1bGUuZm9yUm9vdCgpLnByb3ZpZGVycyxcbiAgICAgICAgLi4uTmJBMTF5TW9kdWxlLmZvclJvb3QoKS5wcm92aWRlcnMsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==