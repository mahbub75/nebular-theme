/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { NbCalendarDayCellComponent } from './calendar-day-cell.component';
import { NbCalendarSize } from '../../model';
import { convertToBoolProperty } from '../../../helpers';
import * as i0 from "@angular/core";
import * as i1 from "../../services/calendar-month-model.service";
import * as i2 from "@angular/common";
import * as i3 from "../calendar-days-names/calendar-days-names.component";
import * as i4 from "../calendar-picker/calendar-picker.component";
import * as i5 from "../calendar-week-number/calendar-week-number.component";
/**
 * Provides capability pick days.
 * */
export class NbCalendarDayPickerComponent {
    /**
     * Custom day cell component. Have to implement `NbCalendarCell` interface.
     * */
    set setCellComponent(cellComponent) {
        if (cellComponent) {
            this.cellComponent = cellComponent;
        }
    }
    /**
     * Determines should we show week numbers column.
     * False by default.
     * */
    get showWeekNumber() {
        return this._showWeekNumber;
    }
    set showWeekNumber(value) {
        this._showWeekNumber = convertToBoolProperty(value);
    }
    get large() {
        return this.size === NbCalendarSize.LARGE;
    }
    constructor(monthModel) {
        this.monthModel = monthModel;
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        this.boundingMonths = true;
        this.cellComponent = NbCalendarDayCellComponent;
        /**
         * Size of the component.
         * Can be 'medium' which is default or 'large'.
         * */
        this.size = NbCalendarSize.MEDIUM;
        this._showWeekNumber = false;
        /**
         * Fires newly selected date.
         * */
        this.dateChange = new EventEmitter();
    }
    ngOnChanges({ visibleDate, boundingMonths, firstDayOfWeek }) {
        if (visibleDate || boundingMonths || firstDayOfWeek) {
            this.weeks = this.monthModel.createDaysGrid(this.visibleDate, this.boundingMonths, this.firstDayOfWeek);
        }
    }
    onSelect(day) {
        this.dateChange.emit(day);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbCalendarDayPickerComponent, deps: [{ token: i1.NbCalendarMonthModelService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: NbCalendarDayPickerComponent, selector: "nb-calendar-day-picker", inputs: { visibleDate: "visibleDate", boundingMonths: "boundingMonths", min: "min", max: "max", filter: "filter", setCellComponent: ["cellComponent", "setCellComponent"], size: "size", date: "date", showWeekNumber: "showWeekNumber", weekNumberSymbol: "weekNumberSymbol", firstDayOfWeek: "firstDayOfWeek" }, outputs: { dateChange: "dateChange" }, host: { properties: { "class.size-large": "this.large" } }, usesOnChanges: true, ngImport: i0, template: `
    <nb-calendar-week-numbers *ngIf="showWeekNumber"
                              [weeks]="weeks"
                              [size]="size"
                              [weekNumberSymbol]="weekNumberSymbol">
    </nb-calendar-week-numbers>
    <div class="days-container">
      <nb-calendar-days-names [size]="size" [firstDayOfWeek]="firstDayOfWeek"></nb-calendar-days-names>
      <nb-calendar-picker
          [data]="weeks"
          [visibleDate]="visibleDate"
          [selectedValue]="date"
          [cellComponent]="cellComponent"
          [min]="min"
          [max]="max"
          [filter]="filter"
          [size]="size"
          (select)="onSelect($event)">
      </nb-calendar-picker>
    </div>
  `, isInline: true, styles: [":host{display:flex}.days-container{width:100%}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.NbCalendarDaysNamesComponent, selector: "nb-calendar-days-names", inputs: ["size", "firstDayOfWeek"] }, { kind: "component", type: i4.NbCalendarPickerComponent, selector: "nb-calendar-picker", inputs: ["data", "visibleDate", "selectedValue", "cellComponent", "min", "max", "filter", "size"], outputs: ["select"] }, { kind: "component", type: i5.NbCalendarWeekNumberComponent, selector: "nb-calendar-week-numbers", inputs: ["weeks", "size", "weekNumberSymbol"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbCalendarDayPickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-calendar-day-picker', template: `
    <nb-calendar-week-numbers *ngIf="showWeekNumber"
                              [weeks]="weeks"
                              [size]="size"
                              [weekNumberSymbol]="weekNumberSymbol">
    </nb-calendar-week-numbers>
    <div class="days-container">
      <nb-calendar-days-names [size]="size" [firstDayOfWeek]="firstDayOfWeek"></nb-calendar-days-names>
      <nb-calendar-picker
          [data]="weeks"
          [visibleDate]="visibleDate"
          [selectedValue]="date"
          [cellComponent]="cellComponent"
          [min]="min"
          [max]="max"
          [filter]="filter"
          [size]="size"
          (select)="onSelect($event)">
      </nb-calendar-picker>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:flex}.days-container{width:100%}\n"] }]
        }], ctorParameters: () => [{ type: i1.NbCalendarMonthModelService }], propDecorators: { visibleDate: [{
                type: Input
            }], boundingMonths: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], filter: [{
                type: Input
            }], setCellComponent: [{
                type: Input,
                args: ['cellComponent']
            }], size: [{
                type: Input
            }], date: [{
                type: Input
            }], showWeekNumber: [{
                type: Input
            }], weekNumberSymbol: [{
                type: Input
            }], firstDayOfWeek: [{
                type: Input
            }], dateChange: [{
                type: Output
            }], large: [{
                type: HostBinding,
                args: ['class.size-large']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGF5LXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2FsZW5kYXIta2l0L2NvbXBvbmVudHMvY2FsZW5kYXItZGF5LXBpY2tlci9jYWxlbmRhci1kYXktcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBRUwsTUFBTSxHQUdQLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNFLE9BQU8sRUFBa0IsY0FBYyxFQUF3QixNQUFNLGFBQWEsQ0FBQztBQUNuRixPQUFPLEVBQUUscUJBQXFCLEVBQWtCLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7QUFHekU7O0tBRUs7QUEyQkwsTUFBTSxPQUFPLDRCQUE0QjtJQTRCdkM7O1NBRUs7SUFDTCxJQUNJLGdCQUFnQixDQUFDLGFBQXlDO1FBQzVELElBQUksYUFBYSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDckMsQ0FBQztJQUNILENBQUM7SUFlRDs7O1NBR0s7SUFDTCxJQUNJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLGNBQWMsQ0FBQyxLQUFjO1FBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQW9CRCxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssY0FBYyxDQUFDLEtBQUssQ0FBQztJQUM1QyxDQUFDO0lBU0QsWUFBb0IsVUFBMEM7UUFBMUMsZUFBVSxHQUFWLFVBQVUsQ0FBZ0M7UUF0RjlEOzs7YUFHSztRQUNJLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBMEJ4QyxrQkFBYSxHQUFtQywwQkFBMEIsQ0FBQztRQUUzRTs7O2FBR0s7UUFDSSxTQUFJLEdBQW1CLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFtQjVDLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBYzNDOzthQUVLO1FBQ0ssZUFBVSxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7SUFlN0MsQ0FBQztJQUVELFdBQVcsQ0FBQyxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFpQjtRQUN4RSxJQUFJLFdBQVcsSUFBSSxjQUFjLElBQUksY0FBYyxFQUFFLENBQUM7WUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzFHLENBQUM7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQU07UUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDOzhHQXhHVSw0QkFBNEI7a0dBQTVCLDRCQUE0Qix5ZUF4QjdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CVDs7MkZBSVUsNEJBQTRCO2tCQTFCeEMsU0FBUzsrQkFDRSx3QkFBd0IsWUFDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JULG1CQUVnQix1QkFBdUIsQ0FBQyxNQUFNO2dHQU90QyxXQUFXO3NCQUFuQixLQUFLO2dCQU1HLGNBQWM7c0JBQXRCLEtBQUs7Z0JBS0csR0FBRztzQkFBWCxLQUFLO2dCQUtHLEdBQUc7c0JBQVgsS0FBSztnQkFLRyxNQUFNO3NCQUFkLEtBQUs7Z0JBTUYsZ0JBQWdCO3NCQURuQixLQUFLO3VCQUFDLGVBQWU7Z0JBWWIsSUFBSTtzQkFBWixLQUFLO2dCQU1HLElBQUk7c0JBQVosS0FBSztnQkFPRixjQUFjO3NCQURqQixLQUFLO2dCQWFHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFNRyxjQUFjO3NCQUF0QixLQUFLO2dCQUtJLFVBQVU7c0JBQW5CLE1BQU07Z0JBR0gsS0FBSztzQkFEUixXQUFXO3VCQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUeXBlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJDYWxlbmRhck1vbnRoTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2FsZW5kYXItbW9udGgtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBOYkNhbGVuZGFyRGF5Q2VsbENvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItZGF5LWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IE5iQ2FsZW5kYXJDZWxsLCBOYkNhbGVuZGFyU2l6ZSwgTmJDYWxlbmRhclNpemVWYWx1ZXMgfSBmcm9tICcuLi8uLi9tb2RlbCc7XG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sUHJvcGVydHksIE5iQm9vbGVhbklucHV0IH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG5cblxuLyoqXG4gKiBQcm92aWRlcyBjYXBhYmlsaXR5IHBpY2sgZGF5cy5cbiAqICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1jYWxlbmRhci1kYXktcGlja2VyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmItY2FsZW5kYXItd2Vlay1udW1iZXJzICpuZ0lmPVwic2hvd1dlZWtOdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3dlZWtzXT1cIndlZWtzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzaXplXT1cInNpemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3dlZWtOdW1iZXJTeW1ib2xdPVwid2Vla051bWJlclN5bWJvbFwiPlxuICAgIDwvbmItY2FsZW5kYXItd2Vlay1udW1iZXJzPlxuICAgIDxkaXYgY2xhc3M9XCJkYXlzLWNvbnRhaW5lclwiPlxuICAgICAgPG5iLWNhbGVuZGFyLWRheXMtbmFtZXMgW3NpemVdPVwic2l6ZVwiIFtmaXJzdERheU9mV2Vla109XCJmaXJzdERheU9mV2Vla1wiPjwvbmItY2FsZW5kYXItZGF5cy1uYW1lcz5cbiAgICAgIDxuYi1jYWxlbmRhci1waWNrZXJcbiAgICAgICAgICBbZGF0YV09XCJ3ZWVrc1wiXG4gICAgICAgICAgW3Zpc2libGVEYXRlXT1cInZpc2libGVEYXRlXCJcbiAgICAgICAgICBbc2VsZWN0ZWRWYWx1ZV09XCJkYXRlXCJcbiAgICAgICAgICBbY2VsbENvbXBvbmVudF09XCJjZWxsQ29tcG9uZW50XCJcbiAgICAgICAgICBbbWluXT1cIm1pblwiXG4gICAgICAgICAgW21heF09XCJtYXhcIlxuICAgICAgICAgIFtmaWx0ZXJdPVwiZmlsdGVyXCJcbiAgICAgICAgICBbc2l6ZV09XCJzaXplXCJcbiAgICAgICAgICAoc2VsZWN0KT1cIm9uU2VsZWN0KCRldmVudClcIj5cbiAgICAgIDwvbmItY2FsZW5kYXItcGlja2VyPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci1kYXktcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYkNhbGVuZGFyRGF5UGlja2VyQ29tcG9uZW50PEQsIFQ+IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAvKipcbiAgICogRGVzY3JpYmVzIHdoaWNoIG1vbnRoIHBpY2tlciBoYXZlIHRvIHJlbmRlci5cbiAgICogKi9cbiAgQElucHV0KCkgdmlzaWJsZURhdGU6IEQ7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgaWYgd2Ugc2hvdWxkIHJlbmRlciBwcmV2aW91cyBhbmQgbmV4dCBtb250aHNcbiAgICogaW4gdGhlIGN1cnJlbnQgbW9udGggdmlldy5cbiAgICogKi9cbiAgQElucHV0KCkgYm91bmRpbmdNb250aHM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBNaW5pbXVtIGF2YWlsYWJsZSBkYXRlIGZvciBzZWxlY3Rpb24uXG4gICAqICovXG4gIEBJbnB1dCgpIG1pbjogRDtcblxuICAvKipcbiAgICogTWF4aW11bSBhdmFpbGFibGUgZGF0ZSBmb3Igc2VsZWN0aW9uLlxuICAgKiAqL1xuICBASW5wdXQoKSBtYXg6IEQ7XG5cbiAgLyoqXG4gICAqIFByZWRpY2F0ZSB0aGF0IGRlY2lkZXMgd2hpY2ggY2VsbHMgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICogKi9cbiAgQElucHV0KCkgZmlsdGVyOiAoRCkgPT4gYm9vbGVhbjtcblxuICAvKipcbiAgICogQ3VzdG9tIGRheSBjZWxsIGNvbXBvbmVudC4gSGF2ZSB0byBpbXBsZW1lbnQgYE5iQ2FsZW5kYXJDZWxsYCBpbnRlcmZhY2UuXG4gICAqICovXG4gIEBJbnB1dCgnY2VsbENvbXBvbmVudCcpXG4gIHNldCBzZXRDZWxsQ29tcG9uZW50KGNlbGxDb21wb25lbnQ6IFR5cGU8TmJDYWxlbmRhckNlbGw8RCwgVD4+KSB7XG4gICAgaWYgKGNlbGxDb21wb25lbnQpIHtcbiAgICAgIHRoaXMuY2VsbENvbXBvbmVudCA9IGNlbGxDb21wb25lbnQ7XG4gICAgfVxuICB9XG4gIGNlbGxDb21wb25lbnQ6IFR5cGU8TmJDYWxlbmRhckNlbGw8YW55LCBhbnk+PiA9IE5iQ2FsZW5kYXJEYXlDZWxsQ29tcG9uZW50O1xuXG4gIC8qKlxuICAgKiBTaXplIG9mIHRoZSBjb21wb25lbnQuXG4gICAqIENhbiBiZSAnbWVkaXVtJyB3aGljaCBpcyBkZWZhdWx0IG9yICdsYXJnZScuXG4gICAqICovXG4gIEBJbnB1dCgpIHNpemU6IE5iQ2FsZW5kYXJTaXplID0gTmJDYWxlbmRhclNpemUuTUVESVVNO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2l6ZTogTmJDYWxlbmRhclNpemVWYWx1ZXM7XG5cbiAgLyoqXG4gICAqIEFscmVhZHkgc2VsZWN0ZWQgZGF0ZS5cbiAgICogKi9cbiAgQElucHV0KCkgZGF0ZTogVDtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBzaG91bGQgd2Ugc2hvdyB3ZWVrIG51bWJlcnMgY29sdW1uLlxuICAgKiBGYWxzZSBieSBkZWZhdWx0LlxuICAgKiAqL1xuICBASW5wdXQoKVxuICBnZXQgc2hvd1dlZWtOdW1iZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dXZWVrTnVtYmVyO1xuICB9XG4gIHNldCBzaG93V2Vla051bWJlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dXZWVrTnVtYmVyID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcm90ZWN0ZWQgX3Nob3dXZWVrTnVtYmVyOiBib29sZWFuID0gZmFsc2U7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zaG93V2Vla051bWJlcjogTmJCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIFNldHMgc3ltYm9sIHVzZWQgYXMgYSBoZWFkZXIgZm9yIHdlZWsgbnVtYmVycyBjb2x1bW5cbiAgICogKi9cbiAgQElucHV0KCkgd2Vla051bWJlclN5bWJvbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXRzIGZpcnN0IGRheSBvZiB0aGUgd2VlaywgaXQgY2FuIGJlIDEgaWYgd2VlayBzdGFydHMgZnJvbSBtb25kYXkgYW5kIDAgaWYgZnJvbSBzdW5kYXkgYW5kIHNvIG9uLlxuICAgKiBgdW5kZWZpbmVkYCBtZWFucyB0aGF0IGRlZmF1bHQgbG9jYWxlIHNldHRpbmcgd2lsbCBiZSB1c2VkLlxuICAgKiAqL1xuICBASW5wdXQoKSBmaXJzdERheU9mV2VlazogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBGaXJlcyBuZXdseSBzZWxlY3RlZCBkYXRlLlxuICAgKiAqL1xuICBAT3V0cHV0KCkgZGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RD4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpemUtbGFyZ2UnKVxuICBnZXQgbGFyZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gTmJDYWxlbmRhclNpemUuTEFSR0U7XG4gIH1cblxuICAvKipcbiAgICogRGF5IHBpY2tlciBtb2RlbC5cbiAgICogUHJvdmlkZXMgYWxsIGRheXMgaW4gY3VycmVudCBtb250aCBhbmQgaWYgYm91bmRpbmdNb250aCBpcyB0cnVlIHNvbWUgZGF5c1xuICAgKiBmcm9tIHByZXZpb3VzIGFuZCBuZXh0IG9uZS5cbiAgICogKi9cbiAgd2Vla3M6IERbXVtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9udGhNb2RlbDogTmJDYWxlbmRhck1vbnRoTW9kZWxTZXJ2aWNlPEQ+KSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyh7IHZpc2libGVEYXRlLCBib3VuZGluZ01vbnRocywgZmlyc3REYXlPZldlZWsgfTogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh2aXNpYmxlRGF0ZSB8fCBib3VuZGluZ01vbnRocyB8fCBmaXJzdERheU9mV2Vlaykge1xuICAgICAgdGhpcy53ZWVrcyA9IHRoaXMubW9udGhNb2RlbC5jcmVhdGVEYXlzR3JpZCh0aGlzLnZpc2libGVEYXRlLCB0aGlzLmJvdW5kaW5nTW9udGhzLCB0aGlzLmZpcnN0RGF5T2ZXZWVrKTtcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdChkYXk6IEQpIHtcbiAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdChkYXkpO1xuICB9XG59XG4iXX0=