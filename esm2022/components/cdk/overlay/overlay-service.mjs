import { Injectable } from '@angular/core';
import { NbComponentPortal, } from './mapping';
import * as i0 from "@angular/core";
import * as i1 from "./mapping";
import * as i2 from "../../../services/direction.service";
export function patch(container, containerContext) {
    Object.assign(container.instance, containerContext);
    container.changeDetectorRef.detectChanges();
    return container;
}
export function createContainer(ref, container, context, componentFactoryResolver) {
    const containerRef = ref.attach(new NbComponentPortal(container, null, null, componentFactoryResolver));
    patch(containerRef, context);
    return containerRef;
}
export class NbOverlayService {
    constructor(overlay, layoutDirection) {
        this.overlay = overlay;
        this.layoutDirection = layoutDirection;
    }
    get scrollStrategies() {
        return this.overlay.scrollStrategies;
    }
    create(config) {
        const overlayRef = this.overlay.create(config);
        this.layoutDirection.onDirectionChange()
            .subscribe(dir => overlayRef.setDirection(dir));
        return overlayRef;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbOverlayService, deps: [{ token: i1.NbOverlay }, { token: i2.NbLayoutDirectionService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbOverlayService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbOverlayService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.NbOverlay }, { type: i2.NbLayoutDirectionService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2Nkay9vdmVybGF5L292ZXJsYXktc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQTBDLFVBQVUsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFdEcsT0FBTyxFQUNMLGlCQUFpQixHQUtsQixNQUFNLFdBQVcsQ0FBQzs7OztBQU9uQixNQUFNLFVBQVUsS0FBSyxDQUFJLFNBQTBCLEVBQUUsZ0JBQXdCO0lBQzNFLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3BELFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM1QyxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FDN0IsR0FBaUIsRUFDakIsU0FBNkIsRUFDN0IsT0FBZSxFQUNmLHdCQUFtRDtJQUVuRCxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksaUJBQWlCLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0lBQ3hHLEtBQUssQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0IsT0FBTyxZQUFZLENBQUM7QUFDdEIsQ0FBQztBQUdELE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsWUFBc0IsT0FBa0IsRUFBWSxlQUF5QztRQUF2RSxZQUFPLEdBQVAsT0FBTyxDQUFXO1FBQVksb0JBQWUsR0FBZixlQUFlLENBQTBCO0lBQzdGLENBQUM7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7SUFDdkMsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUF3QjtRQUM3QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFO2FBQ3JDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDOzhHQWJVLGdCQUFnQjtrSEFBaEIsZ0JBQWdCOzsyRkFBaEIsZ0JBQWdCO2tCQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIEluamVjdGFibGUsIFRlbXBsYXRlUmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIE5iQ29tcG9uZW50UG9ydGFsLFxuICBOYkNvbXBvbmVudFR5cGUsXG4gIE5iT3ZlcmxheSxcbiAgTmJPdmVybGF5Q29uZmlnLFxuICBOYk92ZXJsYXlSZWYsXG59IGZyb20gJy4vbWFwcGluZyc7XG5pbXBvcnQgeyBOYlNjcm9sbFN0cmF0ZWd5T3B0aW9ucyB9IGZyb20gJy4uL2FkYXB0ZXIvYmxvY2stc2Nyb2xsLXN0cmF0ZWd5LWFkYXB0ZXInO1xuaW1wb3J0IHsgTmJMYXlvdXREaXJlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZGlyZWN0aW9uLnNlcnZpY2UnO1xuXG5cbmV4cG9ydCB0eXBlIE5iT3ZlcmxheUNvbnRlbnQgPSBUeXBlPGFueT4gfCBUZW1wbGF0ZVJlZjxhbnk+IHwgc3RyaW5nO1xuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2g8VD4oY29udGFpbmVyOiBDb21wb25lbnRSZWY8VD4sIGNvbnRhaW5lckNvbnRleHQ6IE9iamVjdCk6IENvbXBvbmVudFJlZjxUPiB7XG4gIE9iamVjdC5hc3NpZ24oY29udGFpbmVyLmluc3RhbmNlLCBjb250YWluZXJDb250ZXh0KTtcbiAgY29udGFpbmVyLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcjxUPihcbiAgcmVmOiBOYk92ZXJsYXlSZWYsXG4gIGNvbnRhaW5lcjogTmJDb21wb25lbnRUeXBlPFQ+LFxuICBjb250ZXh0OiBPYmplY3QsXG4gIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcj86IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgKTogQ29tcG9uZW50UmVmPFQ+IHtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gcmVmLmF0dGFjaChuZXcgTmJDb21wb25lbnRQb3J0YWwoY29udGFpbmVyLCBudWxsLCBudWxsLCBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpKTtcbiAgcGF0Y2goY29udGFpbmVyUmVmLCBjb250ZXh0KTtcbiAgcmV0dXJuIGNvbnRhaW5lclJlZjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5iT3ZlcmxheVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgb3ZlcmxheTogTmJPdmVybGF5LCBwcm90ZWN0ZWQgbGF5b3V0RGlyZWN0aW9uOiBOYkxheW91dERpcmVjdGlvblNlcnZpY2UpIHtcbiAgfVxuXG4gIGdldCBzY3JvbGxTdHJhdGVnaWVzKCk6IE5iU2Nyb2xsU3RyYXRlZ3lPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXM7XG4gIH1cblxuICBjcmVhdGUoY29uZmlnPzogTmJPdmVybGF5Q29uZmlnKTogTmJPdmVybGF5UmVmIHtcbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShjb25maWcpO1xuICAgIHRoaXMubGF5b3V0RGlyZWN0aW9uLm9uRGlyZWN0aW9uQ2hhbmdlKClcbiAgICAgIC5zdWJzY3JpYmUoZGlyID0+IG92ZXJsYXlSZWYuc2V0RGlyZWN0aW9uKGRpcikpO1xuICAgIHJldHVybiBvdmVybGF5UmVmO1xuICB9XG59XG4iXX0=