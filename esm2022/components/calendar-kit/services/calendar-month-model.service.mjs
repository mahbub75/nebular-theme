/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { batch, range } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "./date.service";
export class NbCalendarMonthModelService {
    constructor(dateService) {
        this.dateService = dateService;
    }
    createDaysGrid(activeMonth, boundingMonth = true, firstDayOfWeek) {
        const weeks = this.createDates(activeMonth, firstDayOfWeek);
        return this.withBoundingMonths(weeks, activeMonth, boundingMonth);
    }
    createDates(activeMonth, firstDayOfWeek) {
        const days = this.createDateRangeForMonth(activeMonth);
        const startOfWeekDayDiff = this.getStartOfWeekDayDiff(activeMonth, firstDayOfWeek);
        return batch(days, this.dateService.DAYS_IN_WEEK, startOfWeekDayDiff);
    }
    withBoundingMonths(weeks, activeMonth, boundingMonth) {
        let withBoundingMonths = weeks;
        if (this.isShouldAddPrevBoundingMonth(withBoundingMonths)) {
            withBoundingMonths = this.addPrevBoundingMonth(withBoundingMonths, activeMonth, boundingMonth);
        }
        if (this.isShouldAddNextBoundingMonth(withBoundingMonths)) {
            withBoundingMonths = this.addNextBoundingMonth(withBoundingMonths, activeMonth, boundingMonth);
        }
        return withBoundingMonths;
    }
    addPrevBoundingMonth(weeks, activeMonth, boundingMonth) {
        const firstWeek = weeks.shift();
        const requiredItems = this.dateService.DAYS_IN_WEEK - firstWeek.length;
        firstWeek.unshift(...this.createPrevBoundingDays(activeMonth, boundingMonth, requiredItems));
        return [firstWeek, ...weeks];
    }
    addNextBoundingMonth(weeks, activeMonth, boundingMonth) {
        const lastWeek = weeks.pop();
        const requiredItems = this.dateService.DAYS_IN_WEEK - lastWeek.length;
        lastWeek.push(...this.createNextBoundingDays(activeMonth, boundingMonth, requiredItems));
        return [...weeks, lastWeek];
    }
    createPrevBoundingDays(activeMonth, boundingMonth, requiredItems) {
        const month = this.dateService.addMonth(activeMonth, -1);
        const daysInMonth = this.dateService.getNumberOfDaysInMonth(month);
        return this.createDateRangeForMonth(month)
            .slice(daysInMonth - requiredItems)
            .map(date => boundingMonth ? date : null);
    }
    createNextBoundingDays(activeMonth, boundingMonth, requiredItems) {
        const month = this.dateService.addMonth(activeMonth, 1);
        return this.createDateRangeForMonth(month)
            .slice(0, requiredItems)
            .map(date => boundingMonth ? date : null);
    }
    getStartOfWeekDayDiff(date, firstDayOfWeek) {
        const startOfMonth = this.dateService.getMonthStart(date);
        return this.getWeekStartDiff(startOfMonth, firstDayOfWeek);
    }
    getWeekStartDiff(date, firstDayOfWeek) {
        const weekOfset = firstDayOfWeek ?? this.dateService.getFirstDayOfWeek();
        return (7 - weekOfset + this.dateService.getDayOfWeek(date)) % 7;
    }
    isShouldAddPrevBoundingMonth(weeks) {
        return weeks[0].length < this.dateService.DAYS_IN_WEEK;
    }
    isShouldAddNextBoundingMonth(weeks) {
        return weeks[weeks.length - 1].length < this.dateService.DAYS_IN_WEEK;
    }
    createDateRangeForMonth(date) {
        const daysInMonth = this.dateService.getNumberOfDaysInMonth(date);
        return range(daysInMonth, i => {
            const year = this.dateService.getYear(date);
            const month = this.dateService.getMonth(date);
            return this.dateService.createDate(year, month, i + 1);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbCalendarMonthModelService, deps: [{ token: i1.NbDateService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbCalendarMonthModelService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbCalendarMonthModelService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.NbDateService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbW9udGgtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9jYWxlbmRhci1raXQvc2VydmljZXMvY2FsZW5kYXItbW9udGgtbW9kZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLFlBQVksQ0FBQzs7O0FBSTFDLE1BQU0sT0FBTywyQkFBMkI7SUFFdEMsWUFBc0IsV0FBNkI7UUFBN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO0lBQ25ELENBQUM7SUFFRCxjQUFjLENBQUMsV0FBYyxFQUFFLGdCQUF5QixJQUFJLEVBQUUsY0FBdUI7UUFDbkYsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDNUQsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU8sV0FBVyxDQUFDLFdBQWMsRUFBRSxjQUF1QjtRQUN6RCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkQsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ25GLE9BQU8sS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxLQUFZLEVBQUUsV0FBYyxFQUFFLGFBQXNCO1FBQzdFLElBQUksa0JBQWtCLEdB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LyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iRGF0ZVNlcnZpY2UgfSBmcm9tICcuL2RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBiYXRjaCwgcmFuZ2UgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmJDYWxlbmRhck1vbnRoTW9kZWxTZXJ2aWNlPEQ+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZGF0ZVNlcnZpY2U6IE5iRGF0ZVNlcnZpY2U8RD4pIHtcbiAgfVxuXG4gIGNyZWF0ZURheXNHcmlkKGFjdGl2ZU1vbnRoOiBELCBib3VuZGluZ01vbnRoOiBib29sZWFuID0gdHJ1ZSwgZmlyc3REYXlPZldlZWs/OiBudW1iZXIpOiBEW11bXSB7XG4gICAgY29uc3Qgd2Vla3MgPSB0aGlzLmNyZWF0ZURhdGVzKGFjdGl2ZU1vbnRoLCBmaXJzdERheU9mV2Vlayk7XG4gICAgcmV0dXJuIHRoaXMud2l0aEJvdW5kaW5nTW9udGhzKHdlZWtzLCBhY3RpdmVNb250aCwgYm91bmRpbmdNb250aCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZURhdGVzKGFjdGl2ZU1vbnRoOiBELCBmaXJzdERheU9mV2Vlaz86IG51bWJlcik6IERbXVtdIHtcbiAgICBjb25zdCBkYXlzID0gdGhpcy5jcmVhdGVEYXRlUmFuZ2VGb3JNb250aChhY3RpdmVNb250aCk7XG4gICAgY29uc3Qgc3RhcnRPZldlZWtEYXlEaWZmID0gdGhpcy5nZXRTdGFydE9mV2Vla0RheURpZmYoYWN0aXZlTW9udGgsIGZpcnN0RGF5T2ZXZWVrKTtcbiAgICByZXR1cm4gYmF0Y2goZGF5cywgdGhpcy5kYXRlU2VydmljZS5EQVlTX0lOX1dFRUssIHN0YXJ0T2ZXZWVrRGF5RGlmZik7XG4gIH1cblxuICBwcml2YXRlIHdpdGhCb3VuZGluZ01vbnRocyh3ZWVrczogRFtdW10sIGFjdGl2ZU1vbnRoOiBELCBib3VuZGluZ01vbnRoOiBib29sZWFuKTogRFtdW10ge1xuICAgIGxldCB3aXRoQm91bmRpbmdNb250aHMgPSB3ZWVrcztcblxuICAgIGlmICh0aGlzLmlzU2hvdWxkQWRkUHJldkJvdW5kaW5nTW9udGgod2l0aEJvdW5kaW5nTW9udGhzKSkge1xuICAgICAgd2l0aEJvdW5kaW5nTW9udGhzID0gdGhpcy5hZGRQcmV2Qm91bmRpbmdNb250aCh3aXRoQm91bmRpbmdNb250aHMsIGFjdGl2ZU1vbnRoLCBib3VuZGluZ01vbnRoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1Nob3VsZEFkZE5leHRCb3VuZGluZ01vbnRoKHdpdGhCb3VuZGluZ01vbnRocykpIHtcbiAgICAgIHdpdGhCb3VuZGluZ01vbnRocyA9IHRoaXMuYWRkTmV4dEJvdW5kaW5nTW9udGgod2l0aEJvdW5kaW5nTW9udGhzLCBhY3RpdmVNb250aCwgYm91bmRpbmdNb250aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpdGhCb3VuZGluZ01vbnRocztcbiAgfVxuXG4gIHByaXZhdGUgYWRkUHJldkJvdW5kaW5nTW9udGgod2Vla3M6IERbXVtdLCBhY3RpdmVNb250aDogRCwgYm91bmRpbmdNb250aDogYm9vbGVhbik6IERbXVtdIHtcbiAgICBjb25zdCBmaXJzdFdlZWsgPSB3ZWVrcy5zaGlmdCgpO1xuICAgIGNvbnN0IHJlcXVpcmVkSXRlbXM6IG51bWJlciA9IHRoaXMuZGF0ZVNlcnZpY2UuREFZU19JTl9XRUVLIC0gZmlyc3RXZWVrLmxlbmd0aDtcbiAgICBmaXJzdFdlZWsudW5zaGlmdCguLi50aGlzLmNyZWF0ZVByZXZCb3VuZGluZ0RheXMoYWN0aXZlTW9udGgsIGJvdW5kaW5nTW9udGgsIHJlcXVpcmVkSXRlbXMpKTtcbiAgICByZXR1cm4gW2ZpcnN0V2VlaywgLi4ud2Vla3NdO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGROZXh0Qm91bmRpbmdNb250aCh3ZWVrczogRFtdW10sIGFjdGl2ZU1vbnRoOiBELCBib3VuZGluZ01vbnRoOiBib29sZWFuKTogRFtdW10ge1xuICAgIGNvbnN0IGxhc3RXZWVrID0gd2Vla3MucG9wKCk7XG4gICAgY29uc3QgcmVxdWlyZWRJdGVtczogbnVtYmVyID0gdGhpcy5kYXRlU2VydmljZS5EQVlTX0lOX1dFRUsgLSBsYXN0V2Vlay5sZW5ndGg7XG4gICAgbGFzdFdlZWsucHVzaCguLi50aGlzLmNyZWF0ZU5leHRCb3VuZGluZ0RheXMoYWN0aXZlTW9udGgsIGJvdW5kaW5nTW9udGgsIHJlcXVpcmVkSXRlbXMpKTtcbiAgICByZXR1cm4gWy4uLndlZWtzLCBsYXN0V2Vla107XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVByZXZCb3VuZGluZ0RheXMoYWN0aXZlTW9udGg6IEQsIGJvdW5kaW5nTW9udGg6IGJvb2xlYW4sIHJlcXVpcmVkSXRlbXM6IG51bWJlcik6IERbXSB7XG4gICAgY29uc3QgbW9udGggPSB0aGlzLmRhdGVTZXJ2aWNlLmFkZE1vbnRoKGFjdGl2ZU1vbnRoLCAtMSk7XG4gICAgY29uc3QgZGF5c0luTW9udGggPSB0aGlzLmRhdGVTZXJ2aWNlLmdldE51bWJlck9mRGF5c0luTW9udGgobW9udGgpO1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZURhdGVSYW5nZUZvck1vbnRoKG1vbnRoKVxuICAgICAgLnNsaWNlKGRheXNJbk1vbnRoIC0gcmVxdWlyZWRJdGVtcylcbiAgICAgIC5tYXAoZGF0ZSA9PiBib3VuZGluZ01vbnRoID8gZGF0ZSA6IG51bGwpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVOZXh0Qm91bmRpbmdEYXlzKGFjdGl2ZU1vbnRoOiBELCBib3VuZGluZ01vbnRoOiBib29sZWFuLCByZXF1aXJlZEl0ZW1zOiBudW1iZXIpOiBEW10ge1xuICAgIGNvbnN0IG1vbnRoID0gdGhpcy5kYXRlU2VydmljZS5hZGRNb250aChhY3RpdmVNb250aCwgMSk7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRGF0ZVJhbmdlRm9yTW9udGgobW9udGgpXG4gICAgICAuc2xpY2UoMCwgcmVxdWlyZWRJdGVtcylcbiAgICAgIC5tYXAoZGF0ZSA9PiBib3VuZGluZ01vbnRoID8gZGF0ZSA6IG51bGwpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGFydE9mV2Vla0RheURpZmYoZGF0ZTogRCwgZmlyc3REYXlPZldlZWs/OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHN0YXJ0T2ZNb250aCA9IHRoaXMuZGF0ZVNlcnZpY2UuZ2V0TW9udGhTdGFydChkYXRlKTtcbiAgICByZXR1cm4gdGhpcy5nZXRXZWVrU3RhcnREaWZmKHN0YXJ0T2ZNb250aCwgZmlyc3REYXlPZldlZWspO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRXZWVrU3RhcnREaWZmKGRhdGU6IEQsIGZpcnN0RGF5T2ZXZWVrPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCB3ZWVrT2ZzZXQgPSBmaXJzdERheU9mV2VlayA/PyB0aGlzLmRhdGVTZXJ2aWNlLmdldEZpcnN0RGF5T2ZXZWVrKCk7XG4gICAgcmV0dXJuICg3IC0gd2Vla09mc2V0ICsgdGhpcy5kYXRlU2VydmljZS5nZXREYXlPZldlZWsoZGF0ZSkpICUgNztcbiAgfVxuXG4gIHByaXZhdGUgaXNTaG91bGRBZGRQcmV2Qm91bmRpbmdNb250aCh3ZWVrczogRFtdW10pOiBib29sZWFuIHtcbiAgICByZXR1cm4gd2Vla3NbMF0ubGVuZ3RoIDwgdGhpcy5kYXRlU2VydmljZS5EQVlTX0lOX1dFRUs7XG4gIH1cblxuICBwcml2YXRlIGlzU2hvdWxkQWRkTmV4dEJvdW5kaW5nTW9udGgod2Vla3M6IERbXVtdKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHdlZWtzW3dlZWtzLmxlbmd0aCAtIDFdLmxlbmd0aCA8IHRoaXMuZGF0ZVNlcnZpY2UuREFZU19JTl9XRUVLO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVEYXRlUmFuZ2VGb3JNb250aChkYXRlOiBEKTogRFtdIHtcbiAgICBjb25zdCBkYXlzSW5Nb250aDogbnVtYmVyID0gdGhpcy5kYXRlU2VydmljZS5nZXROdW1iZXJPZkRheXNJbk1vbnRoKGRhdGUpO1xuICAgIHJldHVybiByYW5nZShkYXlzSW5Nb250aCwgaSA9PiB7XG4gICAgICBjb25zdCB5ZWFyID0gdGhpcy5kYXRlU2VydmljZS5nZXRZZWFyKGRhdGUpO1xuICAgICAgY29uc3QgbW9udGggPSB0aGlzLmRhdGVTZXJ2aWNlLmdldE1vbnRoKGRhdGUpO1xuICAgICAgcmV0dXJuIHRoaXMuZGF0ZVNlcnZpY2UuY3JlYXRlRGF0ZSh5ZWFyLCBtb250aCwgaSArIDEpXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==