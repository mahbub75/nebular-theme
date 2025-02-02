import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output, ViewChild, } from '@angular/core';
import { filter, take, takeUntil } from 'rxjs/operators';
import { merge, Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../cdk/platform/platform-service";
export class NbTimePickerCellComponent {
    set selected(selected) {
        if (selected) {
            this._selected = selected;
            this.scrollToElement();
        }
        this.selectedChange$.next(selected);
    }
    ;
    get selected() {
        return this._selected;
    }
    constructor(ngZone, platformService) {
        this.ngZone = ngZone;
        this.platformService = platformService;
        this.selectedChange$ = new Subject();
        this.unselected$ = this.selectedChange$.pipe(filter((selected) => !selected));
        this.destroy$ = new Subject();
        this.select = new EventEmitter();
    }
    onClick() {
        this.select.emit({ value: this.value });
    }
    ngAfterViewInit() {
        if (this.selected) {
            // Since we render timepicker in the overlay, at the moment this hook called,
            // timepicker could be not fully rendered and placed. Because of it, we're waiting for Angular
            // to finish change detection run and only then scroll to the selected cell.
            this.ngZone.onStable
                .pipe(take(1), takeUntil(merge(this.unselected$, this.destroy$)))
                .subscribe(() => this.scrollToElement());
        }
    }
    scrollToElement() {
        if (this.valueContainerElement && this.platformService.isBrowser) {
            this.ngZone.runOutsideAngular(() => this.valueContainerElement.nativeElement.scrollIntoView({ block: 'center' }));
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTimePickerCellComponent, deps: [{ token: i0.NgZone }, { token: i1.NbPlatform }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: NbTimePickerCellComponent, selector: "nb-timepicker-cell", inputs: { selected: "selected", value: "value" }, outputs: { select: "select" }, host: { listeners: { "click": "onClick()" } }, viewQueries: [{ propertyName: "valueContainerElement", first: true, predicate: ["valueContainer"], descendants: true }], ngImport: i0, template: `
    <div #valueContainer>{{ value }}</div>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{width:100%;height:100%;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTimePickerCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-timepicker-cell', template: `
    <div #valueContainer>{{ value }}</div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{width:100%;height:100%;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none}\n"] }]
        }], ctorParameters: () => [{ type: i0.NgZone }, { type: i1.NbPlatform }], propDecorators: { selected: [{
                type: Input
            }], value: [{
                type: Input
            }], select: [{
                type: Output
            }], valueContainerElement: [{
                type: ViewChild,
                args: ['valueContainer']
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy90aW1lcGlja2VyL3RpbWVwaWNrZXItY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBWXRDLE1BQU0sT0FBTyx5QkFBeUI7SUFNcEMsSUFBYSxRQUFRLENBQUMsUUFBaUI7UUFDckMsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQzFCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUFBLENBQUM7SUFDRixJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQU1ELFlBQXNCLE1BQWMsRUFDZCxlQUEyQjtRQUQzQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQVk7UUFyQnZDLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUN6QyxnQkFBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBYy9CLFdBQU0sR0FBc0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU16RSxDQUFDO0lBR0QsT0FBTztRQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsNkVBQTZFO1lBQzdFLDhGQUE4RjtZQUM5Riw0RUFBNEU7WUFDNUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO2lCQUNuQixJQUFJLENBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDbkQsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLENBQUM7SUFDSCxDQUFDO0lBRVMsZUFBZTtRQUN2QixJQUFJLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQ2pDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNoRixDQUFDO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs4R0FyRFUseUJBQXlCO2tHQUF6Qix5QkFBeUIsbVRBTjFCOztHQUVUOzsyRkFJVSx5QkFBeUI7a0JBUnJDLFNBQVM7K0JBQ0Usb0JBQW9CLFlBQ3BCOztHQUVULG1CQUVnQix1QkFBdUIsQ0FBQyxNQUFNO29HQVFsQyxRQUFRO3NCQUFwQixLQUFLO2dCQVVHLEtBQUs7c0JBQWIsS0FBSztnQkFDSSxNQUFNO3NCQUFmLE1BQU07Z0JBRXNCLHFCQUFxQjtzQkFBakQsU0FBUzt1QkFBQyxnQkFBZ0I7Z0JBTzNCLE9BQU87c0JBRE4sWUFBWTt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmJTZWxlY3RlZFRpbWVNb2RlbCB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgTmJQbGF0Zm9ybSB9IGZyb20gJy4uL2Nkay9wbGF0Zm9ybS9wbGF0Zm9ybS1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItdGltZXBpY2tlci1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICN2YWx1ZUNvbnRhaW5lcj57eyB2YWx1ZSB9fTwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi90aW1lcGlja2VyLWNlbGwuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5iVGltZVBpY2tlckNlbGxDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgc2VsZWN0ZWRDaGFuZ2UkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHJvdGVjdGVkIHVuc2VsZWN0ZWQkID0gdGhpcy5zZWxlY3RlZENoYW5nZSQucGlwZShmaWx0ZXIoKHNlbGVjdGVkKSA9PiAhc2VsZWN0ZWQpKTtcbiAgcHJvdGVjdGVkIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgX3NlbGVjdGVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIHNldCBzZWxlY3RlZChzZWxlY3RlZDogYm9vbGVhbikge1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgIHRoaXMuc2Nyb2xsVG9FbGVtZW50KCk7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UkLm5leHQoc2VsZWN0ZWQpO1xuICB9O1xuICBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxOYlNlbGVjdGVkVGltZU1vZGVsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKCd2YWx1ZUNvbnRhaW5lcicpIHZhbHVlQ29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBwbGF0Zm9ybVNlcnZpY2U6IE5iUGxhdGZvcm0pIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHsgdmFsdWU6IHRoaXMudmFsdWUgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIC8vIFNpbmNlIHdlIHJlbmRlciB0aW1lcGlja2VyIGluIHRoZSBvdmVybGF5LCBhdCB0aGUgbW9tZW50IHRoaXMgaG9vayBjYWxsZWQsXG4gICAgICAvLyB0aW1lcGlja2VyIGNvdWxkIGJlIG5vdCBmdWxseSByZW5kZXJlZCBhbmQgcGxhY2VkLiBCZWNhdXNlIG9mIGl0LCB3ZSdyZSB3YWl0aW5nIGZvciBBbmd1bGFyXG4gICAgICAvLyB0byBmaW5pc2ggY2hhbmdlIGRldGVjdGlvbiBydW4gYW5kIG9ubHkgdGhlbiBzY3JvbGwgdG8gdGhlIHNlbGVjdGVkIGNlbGwuXG4gICAgICB0aGlzLm5nWm9uZS5vblN0YWJsZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIHRha2VVbnRpbChtZXJnZSh0aGlzLnVuc2VsZWN0ZWQkLCB0aGlzLmRlc3Ryb3kkKSkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2Nyb2xsVG9FbGVtZW50KCkpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBzY3JvbGxUb0VsZW1lbnQoKSB7XG4gICAgaWYgKHRoaXMudmFsdWVDb250YWluZXJFbGVtZW50ICYmIHRoaXMucGxhdGZvcm1TZXJ2aWNlLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT5cbiAgICAgICAgdGhpcy52YWx1ZUNvbnRhaW5lckVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxJbnRvVmlldyh7YmxvY2s6ICdjZW50ZXInfSkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19