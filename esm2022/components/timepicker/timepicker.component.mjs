import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, LOCALE_ID, Output, ViewChild, } from '@angular/core';
import { Subject } from 'rxjs';
import { convertToBoolProperty } from '../helpers';
import { NbPortalDirective } from '../cdk/overlay/mapping';
import { range, rangeFromTo } from '../calendar-kit/helpers';
import { NB_DEFAULT_TIMEPICKER_LOCALIZATION_CONFIG, NB_TIME_PICKER_CONFIG, } from './model';
import * as i0 from "@angular/core";
import * as i1 from "../cdk/platform/platform-service";
import * as i2 from "../calendar-kit/services/calendar-time-model.service";
import * as i3 from "../calendar-kit/services/date.service";
import * as i4 from "@angular/common";
import * as i5 from "../cdk/overlay/mapping";
import * as i6 from "../list/list.component";
import * as i7 from "../card/card.component";
import * as i8 from "../calendar-kit/components/calendar-actions/calendar-actions.component";
import * as i9 from "./timepicker-cell.component";
/**
 * The TimePicker components itself.
 * Provides a proxy to `TimePicker` options as well as custom picker options.
 */
export class NbTimePickerComponent {
    /**
     * Emits when timepicker looses focus.
     */
    get blur() {
        return this.blur$.asObservable();
    }
    /**
     * Defines time format string.
     * */
    get timeFormat() {
        return this._timeFormat;
    }
    set timeFormat(timeFormat) {
        this._timeFormat = timeFormat;
    }
    /**
     * Defines 12 hours format .
     * */
    get twelveHoursFormat() {
        return this._twelveHoursFormat;
    }
    set twelveHoursFormat(value) {
        this._twelveHoursFormat = convertToBoolProperty(value);
    }
    /**
     * Defines should show am/pm label if twelveHoursFormat enabled.
     * */
    get showAmPmLabel() {
        return this._showAmPmLabel;
    }
    set showAmPmLabel(value) {
        this._showAmPmLabel = convertToBoolProperty(value);
    }
    /**
     * Show seconds in timepicker.
     * Ignored when singleColumn is true
     * */
    get withSeconds() {
        return this._withSeconds;
    }
    set withSeconds(value) {
        this._withSeconds = convertToBoolProperty(value);
    }
    /**
     * Show timepicker values in one column with 60 minutes step by default.
     * */
    get singleColumn() {
        return this._singleColumn;
    }
    set singleColumn(value) {
        this._singleColumn = convertToBoolProperty(value);
    }
    /**
     * Defines minutes offset for options, when timepicker is in single column mode.
     * By default it’s 60 minutes: '12:00, 13:00: 14:00, 15:00...'
     * */
    set step(step) {
        this._step = step;
    }
    get step() {
        return this._step;
    }
    /**
     * Date which will be rendered as selected.
     * */
    set date(date) {
        this._date = date;
        this.isAM = this.dateService.getDayPeriod(this.date) === "AM" /* NbDayPeriod.AM */;
        this.buildColumnOptions();
        this.cd.markForCheck();
    }
    get date() {
        return this._date;
    }
    constructor(config, platformService, locale, cd, calendarTimeModelService, dateService) {
        this.config = config;
        this.platformService = platformService;
        this.cd = cd;
        this.calendarTimeModelService = calendarTimeModelService;
        this.dateService = dateService;
        this.blur$ = new Subject();
        this.dayPeriodColumnOptions = ["AM" /* NbDayPeriod.AM */, "PM" /* NbDayPeriod.PM */];
        this.isAM = true;
        this.timepickerFormatChange$ = new Subject();
        this.computedTimeFormat = this.setupTimeFormat();
        this._showAmPmLabel = true;
        /**
         * In timepicker value should be always true
         * In calendar-with-time.component  should set to false
         * @docs-private
         */
        this.showFooter = true;
        /**
         * Emits date when selected.
         * */
        this.onSelectTime = new EventEmitter();
        this.initFromConfig(this.config);
    }
    ngOnChanges({ step, twelveHoursFormat, withSeconds, singleColumn }) {
        const nextTimeFormat = this.setupTimeFormat();
        if (nextTimeFormat !== this.computedTimeFormat) {
            this.computedTimeFormat = nextTimeFormat;
            this.timepickerFormatChange$.next();
        }
        const isConfigChanged = step || twelveHoursFormat || withSeconds || singleColumn;
        if (isConfigChanged || !this.fullTimeOptions) {
            this.buildColumnOptions();
        }
    }
    setHost(hostRef) {
        this.hostRef = hostRef;
    }
    attach(hostRef) {
        this.hostRef = hostRef;
    }
    setCurrentTime() {
        this.date = this.dateService.today();
        this.onSelectTime.emit({
            time: this.date,
            save: true,
        });
    }
    setHour(value) {
        this.updateValue(this.dateService.setHours(this.date, value));
    }
    setMinute(value) {
        this.updateValue(this.dateService.setMinutes(this.date, value));
    }
    setSecond(value) {
        this.updateValue(this.dateService.setSeconds(this.date, value));
    }
    selectFullTime(value) {
        this.updateValue(value);
    }
    changeDayPeriod(dayPeriodToSet) {
        if (this.dateService.getDayPeriod(this.date) === dayPeriodToSet) {
            return;
        }
        // Subtract hours when switching to AM (before midday, 0-11 in 24-hour) from PM (after midday, 12-24 in 24-hour),
        // otherwise add hours because switching to PM from AM.
        const direction = dayPeriodToSet === "AM" /* NbDayPeriod.AM */ ? -1 : 1;
        const increment = direction * this.dateService.HOURS_IN_DAY_PERIOD;
        this.updateValue(this.dateService.addHours(this.date, increment));
    }
    updateValue(date) {
        this.onSelectTime.emit({ time: date });
    }
    saveValue() {
        this.onSelectTime.emit({
            time: this.date,
            save: true,
        });
    }
    trackByTimeValues(index, item) {
        return item.value;
    }
    trackBySingleColumnValue(index, item) {
        return this.dateService.valueOf(item);
    }
    trackByDayPeriod(index, item) {
        return item;
    }
    showSeconds() {
        return this.withSeconds && !this.singleColumn;
    }
    isSelectedHour(val) {
        if (this.date) {
            return this.dateService.getHours(this.date) === val;
        }
        return false;
    }
    isSelectedMinute(val) {
        if (this.date) {
            return this.dateService.getMinutes(this.date) === val;
        }
        return false;
    }
    isSelectedSecond(val) {
        if (this.date) {
            return this.dateService.getSeconds(this.date) === val;
        }
        return false;
    }
    isSelectedDayPeriod(dayPeriod) {
        if (this.date) {
            return dayPeriod === this.dateService.getDayPeriod(this.date);
        }
        return false;
    }
    getFullTimeString(item) {
        return this.dateService.format(item, this.computedTimeFormat).toUpperCase();
    }
    isSelectedFullTimeValue(value) {
        if (this.date) {
            return this.dateService.isSameHourAndMinute(value, this.date);
        }
        return false;
    }
    buildColumnOptions() {
        this.fullTimeOptions = this.singleColumn ? this.calendarTimeModelService.getHoursRange(this.step) : [];
        this.hoursColumnOptions = this.generateHours();
        this.minutesColumnOptions = this.generateMinutesOrSeconds();
        this.secondsColumnOptions = this.showSeconds() ? this.generateMinutesOrSeconds() : [];
    }
    /**
     * @docs-private
     */
    isFirefox() {
        return this.platformService.FIREFOX;
    }
    generateHours() {
        if (!this.twelveHoursFormat) {
            return range(24, (v) => {
                return { value: v, text: this.calendarTimeModelService.paddToTwoSymbols(v) };
            });
        }
        if (this.isAM) {
            return range(12, (v) => {
                const text = v === 0 ? 12 : v;
                return { value: v, text: this.calendarTimeModelService.paddToTwoSymbols(text) };
            });
        }
        return rangeFromTo(12, 24, (v) => {
            const text = v === 12 ? 12 : v - 12;
            return { value: v, text: this.calendarTimeModelService.paddToTwoSymbols(text) };
        });
    }
    generateMinutesOrSeconds() {
        return range(60, (v) => {
            return { value: v, text: this.calendarTimeModelService.paddToTwoSymbols(v) };
        });
    }
    setupTimeFormat() {
        if (!this.timeFormat) {
            return this.config.format || this.buildTimeFormat();
        }
        return this.timeFormat;
    }
    /**
     * @docs-private
     */
    buildTimeFormat() {
        if (this.twelveHoursFormat) {
            return `${this.withSeconds && !this.singleColumn
                ? this.dateService.getTwelveHoursFormatWithSeconds()
                : this.dateService.getTwelveHoursFormat()}`;
        }
        else {
            return `${this.withSeconds && !this.singleColumn
                ? this.dateService.getTwentyFourHoursFormatWithSeconds()
                : this.dateService.getTwentyFourHoursFormat()}`;
        }
    }
    initFromConfig(config) {
        if (config) {
            this.twelveHoursFormat = config.twelveHoursFormat;
        }
        else {
            this.twelveHoursFormat = this.dateService.getLocaleTimeFormat().includes('h');
        }
        const localeConfig = { ...NB_DEFAULT_TIMEPICKER_LOCALIZATION_CONFIG, ...(config?.localization ?? {}) };
        this.hoursText = localeConfig.hoursText;
        this.minutesText = localeConfig.minutesText;
        this.secondsText = localeConfig.secondsText;
        this.ampmText = localeConfig.ampmText;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTimePickerComponent, deps: [{ token: NB_TIME_PICKER_CONFIG }, { token: i1.NbPlatform }, { token: LOCALE_ID }, { token: i0.ChangeDetectorRef }, { token: i2.NbCalendarTimeModelService }, { token: i3.NbDateService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: NbTimePickerComponent, selector: "nb-timepicker", inputs: { timeFormat: "timeFormat", twelveHoursFormat: "twelveHoursFormat", showAmPmLabel: "showAmPmLabel", withSeconds: "withSeconds", singleColumn: "singleColumn", step: "step", date: "date", showFooter: "showFooter", applyButtonText: "applyButtonText", hoursText: "hoursText", minutesText: "minutesText", secondsText: "secondsText", ampmText: "ampmText", currentTimeButtonText: "currentTimeButtonText" }, outputs: { onSelectTime: "onSelectTime" }, viewQueries: [{ propertyName: "portal", first: true, predicate: NbPortalDirective, descendants: true, static: true }], exportAs: ["nbTimepicker"], usesOnChanges: true, ngImport: i0, template: "<nb-card *nbPortal [class.supports-scrollbar-theming]=\"!isFirefox()\" class=\"nb-timepicker-container\">\n  <nb-card-header class=\"column-header\">\n    <ng-container *ngIf=\"singleColumn; else fullTimeHeadersBlock\">\n      <div class=\"header-cell\">Time</div>\n    </ng-container>\n    <ng-template #fullTimeHeadersBlock>\n      <div class=\"header-cell\">{{ hoursText }}</div>\n      <div class=\"header-cell\">{{ minutesText }}</div>\n      <div *ngIf=\"withSeconds\" class=\"header-cell\">{{ secondsText }}</div>\n      <div *ngIf=\"twelveHoursFormat\" class=\"header-cell\">\n        <ng-template [ngIf]=\"showAmPmLabel\">{{ ampmText }}</ng-template>\n      </div>\n    </ng-template>\n  </nb-card-header>\n\n  <div class=\"picker-body\">\n    <ng-container *ngIf=\"singleColumn; else fullTimeColumnBlock\">\n      <nb-list class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedFullTimeValue(item)\"\n          *ngFor=\"let item of fullTimeOptions; trackBy: trackBySingleColumnValue.bind(this)\"\n        >\n          <nb-timepicker-cell\n            [value]=\"getFullTimeString(item)\"\n            [selected]=\"isSelectedFullTimeValue(item)\"\n            (select)=\"selectFullTime(item)\"\n          >\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n    </ng-container>\n\n    <ng-template #fullTimeColumnBlock>\n      <nb-list class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedHour(item.value)\"\n          *ngFor=\"let item of hoursColumnOptions; trackBy: trackByTimeValues\"\n        >\n          <nb-timepicker-cell\n            [value]=\"item.text\"\n            [selected]=\"isSelectedHour(item.value)\"\n            (select)=\"setHour(item.value)\"\n          >\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n      <nb-list class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedMinute(item.value)\"\n          *ngFor=\"let item of minutesColumnOptions; trackBy: trackByTimeValues\"\n        >\n          <nb-timepicker-cell\n            [value]=\"item.text\"\n            [selected]=\"isSelectedMinute(item.value)\"\n            (select)=\"setMinute(item.value)\"\n          >\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n      <nb-list *ngIf=\"showSeconds()\" class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedSecond(item.value)\"\n          *ngFor=\"let item of secondsColumnOptions; trackBy: trackByTimeValues\"\n        >\n          <nb-timepicker-cell\n            [value]=\"item.text\"\n            [selected]=\"isSelectedSecond(item.value)\"\n            (select)=\"setSecond(item.value)\"\n          >\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n      <nb-list *ngIf=\"twelveHoursFormat\" class=\"values-list\">\n        <nb-list-item\n          class=\"list-item am-pm-item\"\n          [class.selected]=\"isSelectedDayPeriod(dayPeriod)\"\n          *ngFor=\"let dayPeriod of dayPeriodColumnOptions; trackBy: trackByDayPeriod\"\n        >\n          <nb-timepicker-cell\n            [value]=\"dayPeriod\"\n            [selected]=\"isSelectedDayPeriod(dayPeriod)\"\n            (select)=\"changeDayPeriod(dayPeriod)\"\n          >\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n    </ng-template>\n  </div>\n\n  <nb-card-footer *ngIf=\"showFooter\" class=\"actions-footer\">\n    <nb-calendar-actions\n      [applyButtonText]=\"applyButtonText\"\n      [currentTimeButtonText]=\"currentTimeButtonText\"\n      (setCurrentTime)=\"setCurrentTime()\"\n      (saveValue)=\"saveValue()\"\n    ></nb-calendar-actions>\n  </nb-card-footer>\n</nb-card>\n", styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-timepicker-container{overflow:hidden;margin-bottom:0}.values-list{width:100%;overflow:hidden;scroll-snap-type:y proximity}.values-list:hover{overflow-y:auto}.list-item{border:0;padding:0;cursor:pointer}.picker-body{display:flex;width:100%;flex:1 0 0;overflow:hidden}.column-header{width:100%;display:flex;justify-content:space-between;padding:0}.header-cell{width:100%;display:flex;align-items:center;justify-content:center}.actions-footer{width:100%}nb-card-header,nb-card-footer{flex:0 0 auto}\n"], dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i5.NbPortalDirective, selector: "[nbPortal]" }, { kind: "component", type: i6.NbListComponent, selector: "nb-list", inputs: ["role"] }, { kind: "component", type: i6.NbListItemComponent, selector: "nb-list-item", inputs: ["role"] }, { kind: "component", type: i7.NbCardComponent, selector: "nb-card", inputs: ["size", "status", "accent"] }, { kind: "component", type: i7.NbCardFooterComponent, selector: "nb-card-footer" }, { kind: "component", type: i7.NbCardHeaderComponent, selector: "nb-card-header" }, { kind: "component", type: i8.NbCalendarActionsComponent, selector: "nb-calendar-actions", inputs: ["applyButtonText", "currentTimeButtonText", "showCurrentTimeButton"], outputs: ["setCurrentTime", "saveValue"] }, { kind: "component", type: i9.NbTimePickerCellComponent, selector: "nb-timepicker-cell", inputs: ["selected", "value"], outputs: ["select"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbTimePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-timepicker', exportAs: 'nbTimepicker', changeDetection: ChangeDetectionStrategy.OnPush, template: "<nb-card *nbPortal [class.supports-scrollbar-theming]=\"!isFirefox()\" class=\"nb-timepicker-container\">\n  <nb-card-header class=\"column-header\">\n    <ng-container *ngIf=\"singleColumn; else fullTimeHeadersBlock\">\n      <div class=\"header-cell\">Time</div>\n    </ng-container>\n    <ng-template #fullTimeHeadersBlock>\n      <div class=\"header-cell\">{{ hoursText }}</div>\n      <div class=\"header-cell\">{{ minutesText }}</div>\n      <div *ngIf=\"withSeconds\" class=\"header-cell\">{{ secondsText }}</div>\n      <div *ngIf=\"twelveHoursFormat\" class=\"header-cell\">\n        <ng-template [ngIf]=\"showAmPmLabel\">{{ ampmText }}</ng-template>\n      </div>\n    </ng-template>\n  </nb-card-header>\n\n  <div class=\"picker-body\">\n    <ng-container *ngIf=\"singleColumn; else fullTimeColumnBlock\">\n      <nb-list class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedFullTimeValue(item)\"\n          *ngFor=\"let item of fullTimeOptions; trackBy: trackBySingleColumnValue.bind(this)\"\n        >\n          <nb-timepicker-cell\n            [value]=\"getFullTimeString(item)\"\n            [selected]=\"isSelectedFullTimeValue(item)\"\n            (select)=\"selectFullTime(item)\"\n          >\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n    </ng-container>\n\n    <ng-template #fullTimeColumnBlock>\n      <nb-list class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedHour(item.value)\"\n          *ngFor=\"let item of hoursColumnOptions; trackBy: trackByTimeValues\"\n        >\n          <nb-timepicker-cell\n            [value]=\"item.text\"\n            [selected]=\"isSelectedHour(item.value)\"\n            (select)=\"setHour(item.value)\"\n          >\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n      <nb-list class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedMinute(item.value)\"\n          *ngFor=\"let item of minutesColumnOptions; trackBy: trackByTimeValues\"\n        >\n          <nb-timepicker-cell\n            [value]=\"item.text\"\n            [selected]=\"isSelectedMinute(item.value)\"\n            (select)=\"setMinute(item.value)\"\n          >\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n      <nb-list *ngIf=\"showSeconds()\" class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedSecond(item.value)\"\n          *ngFor=\"let item of secondsColumnOptions; trackBy: trackByTimeValues\"\n        >\n          <nb-timepicker-cell\n            [value]=\"item.text\"\n            [selected]=\"isSelectedSecond(item.value)\"\n            (select)=\"setSecond(item.value)\"\n          >\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n      <nb-list *ngIf=\"twelveHoursFormat\" class=\"values-list\">\n        <nb-list-item\n          class=\"list-item am-pm-item\"\n          [class.selected]=\"isSelectedDayPeriod(dayPeriod)\"\n          *ngFor=\"let dayPeriod of dayPeriodColumnOptions; trackBy: trackByDayPeriod\"\n        >\n          <nb-timepicker-cell\n            [value]=\"dayPeriod\"\n            [selected]=\"isSelectedDayPeriod(dayPeriod)\"\n            (select)=\"changeDayPeriod(dayPeriod)\"\n          >\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n    </ng-template>\n  </div>\n\n  <nb-card-footer *ngIf=\"showFooter\" class=\"actions-footer\">\n    <nb-calendar-actions\n      [applyButtonText]=\"applyButtonText\"\n      [currentTimeButtonText]=\"currentTimeButtonText\"\n      (setCurrentTime)=\"setCurrentTime()\"\n      (saveValue)=\"saveValue()\"\n    ></nb-calendar-actions>\n  </nb-card-footer>\n</nb-card>\n", styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-timepicker-container{overflow:hidden;margin-bottom:0}.values-list{width:100%;overflow:hidden;scroll-snap-type:y proximity}.values-list:hover{overflow-y:auto}.list-item{border:0;padding:0;cursor:pointer}.picker-body{display:flex;width:100%;flex:1 0 0;overflow:hidden}.column-header{width:100%;display:flex;justify-content:space-between;padding:0}.header-cell{width:100%;display:flex;align-items:center;justify-content:center}.actions-footer{width:100%}nb-card-header,nb-card-footer{flex:0 0 auto}\n"] }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_TIME_PICKER_CONFIG]
                }] }, { type: i1.NbPlatform }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }, { type: i0.ChangeDetectorRef }, { type: i2.NbCalendarTimeModelService }, { type: i3.NbDateService }], propDecorators: { timeFormat: [{
                type: Input
            }], twelveHoursFormat: [{
                type: Input
            }], showAmPmLabel: [{
                type: Input
            }], withSeconds: [{
                type: Input
            }], singleColumn: [{
                type: Input
            }], step: [{
                type: Input
            }], date: [{
                type: Input
            }], showFooter: [{
                type: Input
            }], applyButtonText: [{
                type: Input
            }], hoursText: [{
                type: Input
            }], minutesText: [{
                type: Input
            }], secondsText: [{
                type: Input
            }], ampmText: [{
                type: Input
            }], currentTimeButtonText: [{
                type: Input
            }], onSelectTime: [{
                type: Output
            }], portal: [{
                type: ViewChild,
                args: [NbPortalDirective, { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvdGltZXBpY2tlci90aW1lcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy90aW1lcGlja2VyL3RpbWVwaWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsU0FBUyxFQUdULE1BQU0sRUFFTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUscUJBQXFCLEVBQWtCLE1BQU0sWUFBWSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzNELE9BQU8sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFN0QsT0FBTyxFQUNMLHlDQUF5QyxFQUN6QyxxQkFBcUIsR0FHdEIsTUFBTSxTQUFTLENBQUM7Ozs7Ozs7Ozs7O0FBT2pCOzs7R0FHRztBQVFILE1BQU0sT0FBTyxxQkFBcUI7SUFhaEM7O09BRUc7SUFDSCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVEOztTQUVLO0lBQ0wsSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxVQUFrQjtRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNoQyxDQUFDO0lBS0Q7O1NBRUs7SUFD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V0FBVyxDQUFDO1FBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7SUFDeEMsQ0FBQzs4R0FwV1UscUJBQXFCLGtCQXlJdEIscUJBQXFCLHVDQUVyQixTQUFTO2tHQTNJUixxQkFBcUIsZ2lCQXNJckIsaUJBQWlCLCtHQ3BMOUIsaXpIQXNHQTs7MkZEeERhLHFCQUFxQjtrQkFQakMsU0FBUzsrQkFDRSxlQUFlLFlBR2YsY0FBYyxtQkFDUCx1QkFBdUIsQ0FBQyxNQUFNOzswQkEySTVDLE1BQU07MkJBQUMscUJBQXFCOzswQkFFNUIsTUFBTTsyQkFBQyxTQUFTOzhJQW5IZixVQUFVO3NCQURiLEtBQUs7Z0JBZUYsaUJBQWlCO3NCQURwQixLQUFLO2dCQWNGLGFBQWE7c0JBRGhCLEtBQUs7Z0JBZUYsV0FBVztzQkFEZCxLQUFLO2dCQWNGLFlBQVk7c0JBRGYsS0FBSztnQkFlRixJQUFJO3NCQURQLEtBQUs7Z0JBYUYsSUFBSTtzQkFEUCxLQUFLO2dCQW1CRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxxQkFBcUI7c0JBQTdCLEtBQUs7Z0JBS0ksWUFBWTtzQkFBckIsTUFBTTtnQkFDeUMsTUFBTTtzQkFBckQsU0FBUzt1QkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBMT0NBTEVfSUQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSwgTmJCb29sZWFuSW5wdXQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IE5iUG9ydGFsRGlyZWN0aXZlIH0gZnJvbSAnLi4vY2RrL292ZXJsYXkvbWFwcGluZyc7XG5pbXBvcnQgeyBOYlBsYXRmb3JtIH0gZnJvbSAnLi4vY2RrL3BsYXRmb3JtL3BsYXRmb3JtLXNlcnZpY2UnO1xuaW1wb3J0IHsgTmJEYXRlU2VydmljZSwgTmJEYXlQZXJpb2QgfSBmcm9tICcuLi9jYWxlbmRhci1raXQvc2VydmljZXMvZGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IHJhbmdlLCByYW5nZUZyb21UbyB9IGZyb20gJy4uL2NhbGVuZGFyLWtpdC9oZWxwZXJzJztcbmltcG9ydCB7IE5iQ2FsZW5kYXJUaW1lTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vY2FsZW5kYXIta2l0L3NlcnZpY2VzL2NhbGVuZGFyLXRpbWUtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQge1xuICBOQl9ERUZBVUxUX1RJTUVQSUNLRVJfTE9DQUxJWkFUSU9OX0NPTkZJRyxcbiAgTkJfVElNRV9QSUNLRVJfQ09ORklHLFxuICBOYlNlbGVjdGVkVGltZVBheWxvYWQsXG4gIE5iVGltZVBpY2tlckNvbmZpZyxcbn0gZnJvbSAnLi9tb2RlbCc7XG5cbmludGVyZmFjZSBOYlRpbWVQYXJ0T3B0aW9uIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG4vKipcbiAqIFRoZSBUaW1lUGlja2VyIGNvbXBvbmVudHMgaXRzZWxmLlxuICogUHJvdmlkZXMgYSBwcm94eSB0byBgVGltZVBpY2tlcmAgb3B0aW9ucyBhcyB3ZWxsIGFzIGN1c3RvbSBwaWNrZXIgb3B0aW9ucy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItdGltZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGltZXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxuICBleHBvcnRBczogJ25iVGltZXBpY2tlcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYlRpbWVQaWNrZXJDb21wb25lbnQ8RD4gaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcm90ZWN0ZWQgYmx1ciQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGZ1bGxUaW1lT3B0aW9uczogRFtdO1xuICBob3Vyc0NvbHVtbk9wdGlvbnM6IE5iVGltZVBhcnRPcHRpb25bXTtcbiAgbWludXRlc0NvbHVtbk9wdGlvbnM6IE5iVGltZVBhcnRPcHRpb25bXTtcbiAgc2Vjb25kc0NvbHVtbk9wdGlvbnM6IE5iVGltZVBhcnRPcHRpb25bXTtcbiAgcmVhZG9ubHkgZGF5UGVyaW9kQ29sdW1uT3B0aW9ucyA9IFtOYkRheVBlcmlvZC5BTSwgTmJEYXlQZXJpb2QuUE1dO1xuICBob3N0UmVmOiBFbGVtZW50UmVmO1xuICBpc0FNID0gdHJ1ZTtcblxuICB0aW1lcGlja2VyRm9ybWF0Q2hhbmdlJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHdoZW4gdGltZXBpY2tlciBsb29zZXMgZm9jdXMuXG4gICAqL1xuICBnZXQgYmx1cigpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5ibHVyJC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRpbWUgZm9ybWF0IHN0cmluZy5cbiAgICogKi9cbiAgQElucHV0KClcbiAgZ2V0IHRpbWVGb3JtYXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZUZvcm1hdDtcbiAgfVxuICBzZXQgdGltZUZvcm1hdCh0aW1lRm9ybWF0OiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aW1lRm9ybWF0ID0gdGltZUZvcm1hdDtcbiAgfVxuICBwcm90ZWN0ZWQgX3RpbWVGb3JtYXQ6IHN0cmluZztcblxuICBjb21wdXRlZFRpbWVGb3JtYXQ6IHN0cmluZyA9IHRoaXMuc2V0dXBUaW1lRm9ybWF0KCk7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgMTIgaG91cnMgZm9ybWF0IC5cbiAgICogKi9cbiAgQElucHV0KClcbiAgZ2V0IHR3ZWx2ZUhvdXJzRm9ybWF0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl90d2VsdmVIb3Vyc0Zvcm1hdDtcbiAgfVxuICBzZXQgdHdlbHZlSG91cnNGb3JtYXQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl90d2VsdmVIb3Vyc0Zvcm1hdCA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJvdGVjdGVkIF90d2VsdmVIb3Vyc0Zvcm1hdDogYm9vbGVhbjtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3R3ZWx2ZUhvdXJzRm9ybWF0OiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogRGVmaW5lcyBzaG91bGQgc2hvdyBhbS9wbSBsYWJlbCBpZiB0d2VsdmVIb3Vyc0Zvcm1hdCBlbmFibGVkLlxuICAgKiAqL1xuICBASW5wdXQoKVxuICBnZXQgc2hvd0FtUG1MYWJlbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0FtUG1MYWJlbDtcbiAgfVxuICBzZXQgc2hvd0FtUG1MYWJlbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dBbVBtTGFiZWwgPSBjb252ZXJ0VG9Cb29sUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByb3RlY3RlZCBfc2hvd0FtUG1MYWJlbDogYm9vbGVhbiA9IHRydWU7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zaG93QW1QbUxhYmVsOiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogU2hvdyBzZWNvbmRzIGluIHRpbWVwaWNrZXIuXG4gICAqIElnbm9yZWQgd2hlbiBzaW5nbGVDb2x1bW4gaXMgdHJ1ZVxuICAgKiAqL1xuICBASW5wdXQoKVxuICBnZXQgd2l0aFNlY29uZHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3dpdGhTZWNvbmRzO1xuICB9XG4gIHNldCB3aXRoU2Vjb25kcyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3dpdGhTZWNvbmRzID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcm90ZWN0ZWQgX3dpdGhTZWNvbmRzOiBib29sZWFuO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfd2l0aFNlY29uZHM6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBTaG93IHRpbWVwaWNrZXIgdmFsdWVzIGluIG9uZSBjb2x1bW4gd2l0aCA2MCBtaW51dGVzIHN0ZXAgYnkgZGVmYXVsdC5cbiAgICogKi9cbiAgQElucHV0KClcbiAgZ2V0IHNpbmdsZUNvbHVtbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2luZ2xlQ29sdW1uO1xuICB9XG4gIHNldCBzaW5nbGVDb2x1bW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaW5nbGVDb2x1bW4gPSBjb252ZXJ0VG9Cb29sUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIF9zaW5nbGVDb2x1bW46IGJvb2xlYW47XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zaW5nbGVDb2x1bW46IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIG1pbnV0ZXMgb2Zmc2V0IGZvciBvcHRpb25zLCB3aGVuIHRpbWVwaWNrZXIgaXMgaW4gc2luZ2xlIGNvbHVtbiBtb2RlLlxuICAgKiBCeSBkZWZhdWx0IGl04oCZcyA2MCBtaW51dGVzOiAnMTI6MDAsIDEzOjAwOiAxNDowMCwgMTU6MDAuLi4nXG4gICAqICovXG4gIEBJbnB1dCgpXG4gIHNldCBzdGVwKHN0ZXA6IG51bWJlcikge1xuICAgIHRoaXMuX3N0ZXAgPSBzdGVwO1xuICB9XG4gIGdldCBzdGVwKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0ZXA7XG4gIH1cbiAgcHJvdGVjdGVkIF9zdGVwOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERhdGUgd2hpY2ggd2lsbCBiZSByZW5kZXJlZCBhcyBzZWxlY3RlZC5cbiAgICogKi9cbiAgQElucHV0KClcbiAgc2V0IGRhdGUoZGF0ZTogRCkge1xuICAgIHRoaXMuX2RhdGUgPSBkYXRlO1xuICAgIHRoaXMuaXNBTSA9IHRoaXMuZGF0ZVNlcnZpY2UuZ2V0RGF5UGVyaW9kKHRoaXMuZGF0ZSkgPT09IE5iRGF5UGVyaW9kLkFNO1xuICAgIHRoaXMuYnVpbGRDb2x1bW5PcHRpb25zKCk7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldCBkYXRlKCk6IEQge1xuICAgIHJldHVybiB0aGlzLl9kYXRlO1xuICB9XG5cbiAgX2RhdGU6IEQ7XG5cbiAgLyoqXG4gICAqIEluIHRpbWVwaWNrZXIgdmFsdWUgc2hvdWxkIGJlIGFsd2F5cyB0cnVlXG4gICAqIEluIGNhbGVuZGFyLXdpdGgtdGltZS5jb21wb25lbnQgIHNob3VsZCBzZXQgdG8gZmFsc2VcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgQElucHV0KCkgc2hvd0Zvb3RlcjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGFwcGx5QnV0dG9uVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBob3Vyc1RleHQ6IHN0cmluZztcbiAgQElucHV0KCkgbWludXRlc1RleHQ6IHN0cmluZztcbiAgQElucHV0KCkgc2Vjb25kc1RleHQ6IHN0cmluZztcbiAgQElucHV0KCkgYW1wbVRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgY3VycmVudFRpbWVCdXR0b25UZXh0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVtaXRzIGRhdGUgd2hlbiBzZWxlY3RlZC5cbiAgICogKi9cbiAgQE91dHB1dCgpIG9uU2VsZWN0VGltZTogRXZlbnRFbWl0dGVyPE5iU2VsZWN0ZWRUaW1lUGF5bG9hZDxEPj4gPSBuZXcgRXZlbnRFbWl0dGVyPE5iU2VsZWN0ZWRUaW1lUGF5bG9hZDxEPj4oKTtcbiAgQFZpZXdDaGlsZChOYlBvcnRhbERpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgcG9ydGFsOiBOYlBvcnRhbERpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KE5CX1RJTUVfUElDS0VSX0NPTkZJRykgcHJvdGVjdGVkIGNvbmZpZzogTmJUaW1lUGlja2VyQ29uZmlnLFxuICAgIHByb3RlY3RlZCBwbGF0Zm9ybVNlcnZpY2U6IE5iUGxhdGZvcm0sXG4gICAgQEluamVjdChMT0NBTEVfSUQpIGxvY2FsZTogc3RyaW5nLFxuICAgIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJvdGVjdGVkIGNhbGVuZGFyVGltZU1vZGVsU2VydmljZTogTmJDYWxlbmRhclRpbWVNb2RlbFNlcnZpY2U8RD4sXG4gICAgcHJvdGVjdGVkIGRhdGVTZXJ2aWNlOiBOYkRhdGVTZXJ2aWNlPEQ+LFxuICApIHtcbiAgICB0aGlzLmluaXRGcm9tQ29uZmlnKHRoaXMuY29uZmlnKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKHsgc3RlcCwgdHdlbHZlSG91cnNGb3JtYXQsIHdpdGhTZWNvbmRzLCBzaW5nbGVDb2x1bW4gfTogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IG5leHRUaW1lRm9ybWF0ID0gdGhpcy5zZXR1cFRpbWVGb3JtYXQoKTtcbiAgICBpZiAobmV4dFRpbWVGb3JtYXQgIT09IHRoaXMuY29tcHV0ZWRUaW1lRm9ybWF0KSB7XG4gICAgICB0aGlzLmNvbXB1dGVkVGltZUZvcm1hdCA9IG5leHRUaW1lRm9ybWF0O1xuICAgICAgdGhpcy50aW1lcGlja2VyRm9ybWF0Q2hhbmdlJC5uZXh0KCk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNDb25maWdDaGFuZ2VkID0gc3RlcCB8fCB0d2VsdmVIb3Vyc0Zvcm1hdCB8fCB3aXRoU2Vjb25kcyB8fCBzaW5nbGVDb2x1bW47XG5cbiAgICBpZiAoaXNDb25maWdDaGFuZ2VkIHx8ICF0aGlzLmZ1bGxUaW1lT3B0aW9ucykge1xuICAgICAgdGhpcy5idWlsZENvbHVtbk9wdGlvbnMoKTtcbiAgICB9XG4gIH1cblxuICBzZXRIb3N0KGhvc3RSZWY6IEVsZW1lbnRSZWYpOiB2b2lkIHtcbiAgICB0aGlzLmhvc3RSZWYgPSBob3N0UmVmO1xuICB9XG5cbiAgYXR0YWNoKGhvc3RSZWY6IEVsZW1lbnRSZWYpOiB2b2lkIHtcbiAgICB0aGlzLmhvc3RSZWYgPSBob3N0UmVmO1xuICB9XG5cbiAgc2V0Q3VycmVudFRpbWUoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRlID0gdGhpcy5kYXRlU2VydmljZS50b2RheSgpO1xuICAgIHRoaXMub25TZWxlY3RUaW1lLmVtaXQoe1xuICAgICAgdGltZTogdGhpcy5kYXRlLFxuICAgICAgc2F2ZTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNldEhvdXIodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5kYXRlU2VydmljZS5zZXRIb3Vycyh0aGlzLmRhdGUsIHZhbHVlKSk7XG4gIH1cblxuICBzZXRNaW51dGUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5kYXRlU2VydmljZS5zZXRNaW51dGVzKHRoaXMuZGF0ZSwgdmFsdWUpKTtcbiAgfVxuXG4gIHNldFNlY29uZCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLmRhdGVTZXJ2aWNlLnNldFNlY29uZHModGhpcy5kYXRlLCB2YWx1ZSkpO1xuICB9XG5cbiAgc2VsZWN0RnVsbFRpbWUodmFsdWU6IEQpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNoYW5nZURheVBlcmlvZChkYXlQZXJpb2RUb1NldDogTmJEYXlQZXJpb2QpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kYXRlU2VydmljZS5nZXREYXlQZXJpb2QodGhpcy5kYXRlKSA9PT0gZGF5UGVyaW9kVG9TZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTdWJ0cmFjdCBob3VycyB3aGVuIHN3aXRjaGluZyB0byBBTSAoYmVmb3JlIG1pZGRheSwgMC0xMSBpbiAyNC1ob3VyKSBmcm9tIFBNIChhZnRlciBtaWRkYXksIDEyLTI0IGluIDI0LWhvdXIpLFxuICAgIC8vIG90aGVyd2lzZSBhZGQgaG91cnMgYmVjYXVzZSBzd2l0Y2hpbmcgdG8gUE0gZnJvbSBBTS5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBkYXlQZXJpb2RUb1NldCA9PT0gTmJEYXlQZXJpb2QuQU0gPyAtMSA6IDE7XG4gICAgY29uc3QgaW5jcmVtZW50ID0gZGlyZWN0aW9uICogdGhpcy5kYXRlU2VydmljZS5IT1VSU19JTl9EQVlfUEVSSU9EO1xuICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5kYXRlU2VydmljZS5hZGRIb3Vycyh0aGlzLmRhdGUsIGluY3JlbWVudCkpO1xuICB9XG5cbiAgdXBkYXRlVmFsdWUoZGF0ZTogRCk6IHZvaWQge1xuICAgIHRoaXMub25TZWxlY3RUaW1lLmVtaXQoeyB0aW1lOiBkYXRlIH0pO1xuICB9XG5cbiAgc2F2ZVZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMub25TZWxlY3RUaW1lLmVtaXQoe1xuICAgICAgdGltZTogdGhpcy5kYXRlLFxuICAgICAgc2F2ZTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHRyYWNrQnlUaW1lVmFsdWVzKGluZGV4LCBpdGVtOiBOYlRpbWVQYXJ0T3B0aW9uKTogbnVtYmVyIHtcbiAgICByZXR1cm4gaXRlbS52YWx1ZTtcbiAgfVxuXG4gIHRyYWNrQnlTaW5nbGVDb2x1bW5WYWx1ZShpbmRleCwgaXRlbTogRCkge1xuICAgIHJldHVybiB0aGlzLmRhdGVTZXJ2aWNlLnZhbHVlT2YoaXRlbSk7XG4gIH1cblxuICB0cmFja0J5RGF5UGVyaW9kKGluZGV4LCBpdGVtOiBOYkRheVBlcmlvZCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBzaG93U2Vjb25kcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy53aXRoU2Vjb25kcyAmJiAhdGhpcy5zaW5nbGVDb2x1bW47XG4gIH1cblxuICBpc1NlbGVjdGVkSG91cih2YWw6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmRhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGVTZXJ2aWNlLmdldEhvdXJzKHRoaXMuZGF0ZSkgPT09IHZhbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc1NlbGVjdGVkTWludXRlKHZhbDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0ZVNlcnZpY2UuZ2V0TWludXRlcyh0aGlzLmRhdGUpID09PSB2YWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNTZWxlY3RlZFNlY29uZCh2YWw6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmRhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGVTZXJ2aWNlLmdldFNlY29uZHModGhpcy5kYXRlKSA9PT0gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWREYXlQZXJpb2QoZGF5UGVyaW9kOiBOYkRheVBlcmlvZCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmRhdGUpIHtcbiAgICAgIHJldHVybiBkYXlQZXJpb2QgPT09IHRoaXMuZGF0ZVNlcnZpY2UuZ2V0RGF5UGVyaW9kKHRoaXMuZGF0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0RnVsbFRpbWVTdHJpbmcoaXRlbTogRCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZVNlcnZpY2UuZm9ybWF0KGl0ZW0sIHRoaXMuY29tcHV0ZWRUaW1lRm9ybWF0KS50b1VwcGVyQ2FzZSgpO1xuICB9XG5cbiAgaXNTZWxlY3RlZEZ1bGxUaW1lVmFsdWUodmFsdWU6IEQpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5kYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRlU2VydmljZS5pc1NhbWVIb3VyQW5kTWludXRlKHZhbHVlLCB0aGlzLmRhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBidWlsZENvbHVtbk9wdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5mdWxsVGltZU9wdGlvbnMgPSB0aGlzLnNpbmdsZUNvbHVtbiA/IHRoaXMuY2FsZW5kYXJUaW1lTW9kZWxTZXJ2aWNlLmdldEhvdXJzUmFuZ2UodGhpcy5zdGVwKSA6IFtdO1xuXG4gICAgdGhpcy5ob3Vyc0NvbHVtbk9wdGlvbnMgPSB0aGlzLmdlbmVyYXRlSG91cnMoKTtcbiAgICB0aGlzLm1pbnV0ZXNDb2x1bW5PcHRpb25zID0gdGhpcy5nZW5lcmF0ZU1pbnV0ZXNPclNlY29uZHMoKTtcbiAgICB0aGlzLnNlY29uZHNDb2x1bW5PcHRpb25zID0gdGhpcy5zaG93U2Vjb25kcygpID8gdGhpcy5nZW5lcmF0ZU1pbnV0ZXNPclNlY29uZHMoKSA6IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGlzRmlyZWZveCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wbGF0Zm9ybVNlcnZpY2UuRklSRUZPWDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZW5lcmF0ZUhvdXJzKCk6IE5iVGltZVBhcnRPcHRpb25bXSB7XG4gICAgaWYgKCF0aGlzLnR3ZWx2ZUhvdXJzRm9ybWF0KSB7XG4gICAgICByZXR1cm4gcmFuZ2UoMjQsICh2OiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHYsIHRleHQ6IHRoaXMuY2FsZW5kYXJUaW1lTW9kZWxTZXJ2aWNlLnBhZGRUb1R3b1N5bWJvbHModikgfTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQU0pIHtcbiAgICAgIHJldHVybiByYW5nZSgxMiwgKHY6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0ID0gdiA9PT0gMCA/IDEyIDogdjtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHYsIHRleHQ6IHRoaXMuY2FsZW5kYXJUaW1lTW9kZWxTZXJ2aWNlLnBhZGRUb1R3b1N5bWJvbHModGV4dCkgfTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByYW5nZUZyb21UbygxMiwgMjQsICh2OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSB2ID09PSAxMiA/IDEyIDogdiAtIDEyO1xuICAgICAgcmV0dXJuIHsgdmFsdWU6IHYsIHRleHQ6IHRoaXMuY2FsZW5kYXJUaW1lTW9kZWxTZXJ2aWNlLnBhZGRUb1R3b1N5bWJvbHModGV4dCkgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZW5lcmF0ZU1pbnV0ZXNPclNlY29uZHMoKTogTmJUaW1lUGFydE9wdGlvbltdIHtcbiAgICByZXR1cm4gcmFuZ2UoNjAsICh2OiBudW1iZXIpID0+IHtcbiAgICAgIHJldHVybiB7IHZhbHVlOiB2LCB0ZXh0OiB0aGlzLmNhbGVuZGFyVGltZU1vZGVsU2VydmljZS5wYWRkVG9Ud29TeW1ib2xzKHYpIH07XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0dXBUaW1lRm9ybWF0KCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLnRpbWVGb3JtYXQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5mb3JtYXQgfHwgdGhpcy5idWlsZFRpbWVGb3JtYXQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50aW1lRm9ybWF0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGJ1aWxkVGltZUZvcm1hdCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnR3ZWx2ZUhvdXJzRm9ybWF0KSB7XG4gICAgICByZXR1cm4gYCR7XG4gICAgICAgIHRoaXMud2l0aFNlY29uZHMgJiYgIXRoaXMuc2luZ2xlQ29sdW1uXG4gICAgICAgICAgPyB0aGlzLmRhdGVTZXJ2aWNlLmdldFR3ZWx2ZUhvdXJzRm9ybWF0V2l0aFNlY29uZHMoKVxuICAgICAgICAgIDogdGhpcy5kYXRlU2VydmljZS5nZXRUd2VsdmVIb3Vyc0Zvcm1hdCgpXG4gICAgICB9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGAke1xuICAgICAgICB0aGlzLndpdGhTZWNvbmRzICYmICF0aGlzLnNpbmdsZUNvbHVtblxuICAgICAgICAgID8gdGhpcy5kYXRlU2VydmljZS5nZXRUd2VudHlGb3VySG91cnNGb3JtYXRXaXRoU2Vjb25kcygpXG4gICAgICAgICAgOiB0aGlzLmRhdGVTZXJ2aWNlLmdldFR3ZW50eUZvdXJIb3Vyc0Zvcm1hdCgpXG4gICAgICB9YDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdEZyb21Db25maWcoY29uZmlnOiBOYlRpbWVQaWNrZXJDb25maWcpIHtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICB0aGlzLnR3ZWx2ZUhvdXJzRm9ybWF0ID0gY29uZmlnLnR3ZWx2ZUhvdXJzRm9ybWF0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnR3ZWx2ZUhvdXJzRm9ybWF0ID0gdGhpcy5kYXRlU2VydmljZS5nZXRMb2NhbGVUaW1lRm9ybWF0KCkuaW5jbHVkZXMoJ2gnKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2NhbGVDb25maWcgPSB7IC4uLk5CX0RFRkFVTFRfVElNRVBJQ0tFUl9MT0NBTElaQVRJT05fQ09ORklHLCAuLi4oY29uZmlnPy5sb2NhbGl6YXRpb24gPz8ge30pIH07XG4gICAgdGhpcy5ob3Vyc1RleHQgPSBsb2NhbGVDb25maWcuaG91cnNUZXh0O1xuICAgIHRoaXMubWludXRlc1RleHQgPSBsb2NhbGVDb25maWcubWludXRlc1RleHQ7XG4gICAgdGhpcy5zZWNvbmRzVGV4dCA9IGxvY2FsZUNvbmZpZy5zZWNvbmRzVGV4dDtcbiAgICB0aGlzLmFtcG1UZXh0ID0gbG9jYWxlQ29uZmlnLmFtcG1UZXh0O1xuICB9XG59XG4iLCI8bmItY2FyZCAqbmJQb3J0YWwgW2NsYXNzLnN1cHBvcnRzLXNjcm9sbGJhci10aGVtaW5nXT1cIiFpc0ZpcmVmb3goKVwiIGNsYXNzPVwibmItdGltZXBpY2tlci1jb250YWluZXJcIj5cbiAgPG5iLWNhcmQtaGVhZGVyIGNsYXNzPVwiY29sdW1uLWhlYWRlclwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaW5nbGVDb2x1bW47IGVsc2UgZnVsbFRpbWVIZWFkZXJzQmxvY2tcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY2VsbFwiPlRpbWU8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctdGVtcGxhdGUgI2Z1bGxUaW1lSGVhZGVyc0Jsb2NrPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1jZWxsXCI+e3sgaG91cnNUZXh0IH19PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNlbGxcIj57eyBtaW51dGVzVGV4dCB9fTwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cIndpdGhTZWNvbmRzXCIgY2xhc3M9XCJoZWFkZXItY2VsbFwiPnt7IHNlY29uZHNUZXh0IH19PC9kaXY+XG4gICAgICA8ZGl2ICpuZ0lmPVwidHdlbHZlSG91cnNGb3JtYXRcIiBjbGFzcz1cImhlYWRlci1jZWxsXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJzaG93QW1QbUxhYmVsXCI+e3sgYW1wbVRleHQgfX08L25nLXRlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9uYi1jYXJkLWhlYWRlcj5cblxuICA8ZGl2IGNsYXNzPVwicGlja2VyLWJvZHlcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2luZ2xlQ29sdW1uOyBlbHNlIGZ1bGxUaW1lQ29sdW1uQmxvY2tcIj5cbiAgICAgIDxuYi1saXN0IGNsYXNzPVwidmFsdWVzLWxpc3RcIj5cbiAgICAgICAgPG5iLWxpc3QtaXRlbVxuICAgICAgICAgIGNsYXNzPVwibGlzdC1pdGVtXCJcbiAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZEZ1bGxUaW1lVmFsdWUoaXRlbSlcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZ1bGxUaW1lT3B0aW9uczsgdHJhY2tCeTogdHJhY2tCeVNpbmdsZUNvbHVtblZhbHVlLmJpbmQodGhpcylcIlxuICAgICAgICA+XG4gICAgICAgICAgPG5iLXRpbWVwaWNrZXItY2VsbFxuICAgICAgICAgICAgW3ZhbHVlXT1cImdldEZ1bGxUaW1lU3RyaW5nKGl0ZW0pXCJcbiAgICAgICAgICAgIFtzZWxlY3RlZF09XCJpc1NlbGVjdGVkRnVsbFRpbWVWYWx1ZShpdGVtKVwiXG4gICAgICAgICAgICAoc2VsZWN0KT1cInNlbGVjdEZ1bGxUaW1lKGl0ZW0pXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9uYi10aW1lcGlja2VyLWNlbGw+XG4gICAgICAgIDwvbmItbGlzdC1pdGVtPlxuICAgICAgPC9uYi1saXN0PlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPG5nLXRlbXBsYXRlICNmdWxsVGltZUNvbHVtbkJsb2NrPlxuICAgICAgPG5iLWxpc3QgY2xhc3M9XCJ2YWx1ZXMtbGlzdFwiPlxuICAgICAgICA8bmItbGlzdC1pdGVtXG4gICAgICAgICAgY2xhc3M9XCJsaXN0LWl0ZW1cIlxuICAgICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJpc1NlbGVjdGVkSG91cihpdGVtLnZhbHVlKVwiXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaG91cnNDb2x1bW5PcHRpb25zOyB0cmFja0J5OiB0cmFja0J5VGltZVZhbHVlc1wiXG4gICAgICAgID5cbiAgICAgICAgICA8bmItdGltZXBpY2tlci1jZWxsXG4gICAgICAgICAgICBbdmFsdWVdPVwiaXRlbS50ZXh0XCJcbiAgICAgICAgICAgIFtzZWxlY3RlZF09XCJpc1NlbGVjdGVkSG91cihpdGVtLnZhbHVlKVwiXG4gICAgICAgICAgICAoc2VsZWN0KT1cInNldEhvdXIoaXRlbS52YWx1ZSlcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L25iLXRpbWVwaWNrZXItY2VsbD5cbiAgICAgICAgPC9uYi1saXN0LWl0ZW0+XG4gICAgICA8L25iLWxpc3Q+XG4gICAgICA8bmItbGlzdCBjbGFzcz1cInZhbHVlcy1saXN0XCI+XG4gICAgICAgIDxuYi1saXN0LWl0ZW1cbiAgICAgICAgICBjbGFzcz1cImxpc3QtaXRlbVwiXG4gICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cImlzU2VsZWN0ZWRNaW51dGUoaXRlbS52YWx1ZSlcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIG1pbnV0ZXNDb2x1bW5PcHRpb25zOyB0cmFja0J5OiB0cmFja0J5VGltZVZhbHVlc1wiXG4gICAgICAgID5cbiAgICAgICAgICA8bmItdGltZXBpY2tlci1jZWxsXG4gICAgICAgICAgICBbdmFsdWVdPVwiaXRlbS50ZXh0XCJcbiAgICAgICAgICAgIFtzZWxlY3RlZF09XCJpc1NlbGVjdGVkTWludXRlKGl0ZW0udmFsdWUpXCJcbiAgICAgICAgICAgIChzZWxlY3QpPVwic2V0TWludXRlKGl0ZW0udmFsdWUpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9uYi10aW1lcGlja2VyLWNlbGw+XG4gICAgICAgIDwvbmItbGlzdC1pdGVtPlxuICAgICAgPC9uYi1saXN0PlxuICAgICAgPG5iLWxpc3QgKm5nSWY9XCJzaG93U2Vjb25kcygpXCIgY2xhc3M9XCJ2YWx1ZXMtbGlzdFwiPlxuICAgICAgICA8bmItbGlzdC1pdGVtXG4gICAgICAgICAgY2xhc3M9XCJsaXN0LWl0ZW1cIlxuICAgICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJpc1NlbGVjdGVkU2Vjb25kKGl0ZW0udmFsdWUpXCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzZWNvbmRzQ29sdW1uT3B0aW9uczsgdHJhY2tCeTogdHJhY2tCeVRpbWVWYWx1ZXNcIlxuICAgICAgICA+XG4gICAgICAgICAgPG5iLXRpbWVwaWNrZXItY2VsbFxuICAgICAgICAgICAgW3ZhbHVlXT1cIml0ZW0udGV4dFwiXG4gICAgICAgICAgICBbc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZFNlY29uZChpdGVtLnZhbHVlKVwiXG4gICAgICAgICAgICAoc2VsZWN0KT1cInNldFNlY29uZChpdGVtLnZhbHVlKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvbmItdGltZXBpY2tlci1jZWxsPlxuICAgICAgICA8L25iLWxpc3QtaXRlbT5cbiAgICAgIDwvbmItbGlzdD5cbiAgICAgIDxuYi1saXN0ICpuZ0lmPVwidHdlbHZlSG91cnNGb3JtYXRcIiBjbGFzcz1cInZhbHVlcy1saXN0XCI+XG4gICAgICAgIDxuYi1saXN0LWl0ZW1cbiAgICAgICAgICBjbGFzcz1cImxpc3QtaXRlbSBhbS1wbS1pdGVtXCJcbiAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZERheVBlcmlvZChkYXlQZXJpb2QpXCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgZGF5UGVyaW9kIG9mIGRheVBlcmlvZENvbHVtbk9wdGlvbnM7IHRyYWNrQnk6IHRyYWNrQnlEYXlQZXJpb2RcIlxuICAgICAgICA+XG4gICAgICAgICAgPG5iLXRpbWVwaWNrZXItY2VsbFxuICAgICAgICAgICAgW3ZhbHVlXT1cImRheVBlcmlvZFwiXG4gICAgICAgICAgICBbc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZERheVBlcmlvZChkYXlQZXJpb2QpXCJcbiAgICAgICAgICAgIChzZWxlY3QpPVwiY2hhbmdlRGF5UGVyaW9kKGRheVBlcmlvZClcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L25iLXRpbWVwaWNrZXItY2VsbD5cbiAgICAgICAgPC9uYi1saXN0LWl0ZW0+XG4gICAgICA8L25iLWxpc3Q+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9kaXY+XG5cbiAgPG5iLWNhcmQtZm9vdGVyICpuZ0lmPVwic2hvd0Zvb3RlclwiIGNsYXNzPVwiYWN0aW9ucy1mb290ZXJcIj5cbiAgICA8bmItY2FsZW5kYXItYWN0aW9uc1xuICAgICAgW2FwcGx5QnV0dG9uVGV4dF09XCJhcHBseUJ1dHRvblRleHRcIlxuICAgICAgW2N1cnJlbnRUaW1lQnV0dG9uVGV4dF09XCJjdXJyZW50VGltZUJ1dHRvblRleHRcIlxuICAgICAgKHNldEN1cnJlbnRUaW1lKT1cInNldEN1cnJlbnRUaW1lKClcIlxuICAgICAgKHNhdmVWYWx1ZSk9XCJzYXZlVmFsdWUoKVwiXG4gICAgPjwvbmItY2FsZW5kYXItYWN0aW9ucz5cbiAgPC9uYi1jYXJkLWZvb3Rlcj5cbjwvbmItY2FyZD5cbiJdfQ==