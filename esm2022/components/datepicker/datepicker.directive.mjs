/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Directive, forwardRef, Inject, InjectionToken, Input, } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators, } from '@angular/forms';
import { fromEvent, merge, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, pairwise, startWith, take, takeUntil, tap } from 'rxjs/operators';
import { NB_DOCUMENT } from '../../theme.options';
import * as i0 from "@angular/core";
import * as i1 from "../calendar-kit/services/date.service";
/**
 * The `NbDatepickerAdapter` instances provide way how to parse, format and validate
 * different date types.
 * */
export class NbDatepickerAdapter {
}
/**
 * Datepicker is an control that can pick any values anyway.
 * It has to be bound to the datepicker directive through nbDatepicker input.
 * */
export class NbDatepicker {
}
export const NB_DATE_ADAPTER = new InjectionToken('Datepicker Adapter');
export const NB_DATE_SERVICE_OPTIONS = new InjectionToken('Date service options');
/**
 * The `NbDatepickerDirective` is form control that gives you ability to select dates and ranges. The datepicker
 * is shown when input receives a `focus` event.
 *
 * ```html
 * <input [nbDatepicker]="datepicker">
 * <nb-datepicker #datepicker></nb-datepicker>
 * ```
 *
 * @stacked-example(Showcase, datepicker/datepicker-showcase.component)
 *
 * ### Installation
 *
 * Import `NbDatepickerModule.forRoot()` to your root module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbDatepickerModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * And `NbDatepickerModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbDatepickerModule,
 *   ],
 * })
 *
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If you want to use range selection, you have to use `NbRangepickerComponent` instead:
 *
 * ```html
 * <input [nbDatepicker]="rangepicker">
 * <nb-rangepicker #rangepicker></nb-rangepicker>
 * ```
 *
 * Both range and date pickers support all parameters as calendar, so, check `NbCalendarComponent` for additional
 * info.
 *
 * @stacked-example(Range showcase, datepicker/rangepicker-showcase.component)
 *
 * Datepicker is the form control so it can be bound with angular forms through ngModel and form controls.
 *
 * @stacked-example(Forms, datepicker/datepicker-forms.component)
 *
 * `NbDatepickerDirective` may be validated using `min` and `max` dates passed to the datepicker.
 *
 * @stacked-example(Validation, datepicker/datepicker-validation.component)
 *
 * Also `NbDatepickerDirective` may be filtered using `filter` predicate
 * that receives date object and has to return a boolean value.
 *
 * @stacked-example(Filter, datepicker/datepicker-filter.component)
 *
 * If you need to pick a time along with the date, you can use nb-date-timepicker
 *
 * ```html
 * <input nbInput placeholder="Pick Date" [nbDatepicker]="dateTimePicker">
 * <nb-date-timepicker withSeconds #dateTimePicker></nb-date-timepicker>
 * ```
 * @stacked-example(Date timepicker, datepicker/date-timepicker-showcase.component)
 *
 * A single column picker with options value as time and minute, so users won’t be able to pick
 * hours and minutes individually.
 *
 * @stacked-example(Date timepicker single column, datepicker/date-timepicker-single-column.component)

 * The `NbDatepickerComponent` supports date formatting:
 *
 * ```html
 * <input [nbDatepicker]="datepicker">
 * <nb-datepicker #datepicker format="MM\dd\yyyy"></nb-datepicker>
 * ```
 * <span id="formatting-issue"></span>
 * ## Formatting Issue
 *
 * By default, datepicker uses angulars `LOCALE_ID` token for localization and `DatePipe` for dates formatting.
 * And native `Date.parse(...)` for dates parsing. But native `Date.parse` function doesn't support formats.
 * To provide custom formatting you have to use one of the following packages:
 *
 * - `@nebular/moment` - provides moment date adapter that uses moment for date objects. This means datepicker than
 * will operate only moment date objects. If you want to use it you have to install it: `npm i @nebular/moment`, and
 * import `NbMomentDateModule` from this package.
 *
 * - `@nebular/date-fns` - adapter for popular date-fns library. This way is preferred if you need only date formatting.
 * Because date-fns is treeshakable, tiny and operates native date objects. If you want to use it you have to
 * install it: `npm i @nebular/date-fns`, and import `NbDateFnsDateModule` from this package.
 *
 * ### NbDateFnsDateModule
 *
 * Format is required when using `NbDateFnsDateModule`. You can set it via `format` input on datepicker component:
 * ```html
 * <nb-datepicker format="dd.MM.yyyy"></nb-datepicker>
 * ```
 * Also format can be set globally with `NbDateFnsDateModule.forRoot({ format: 'dd.MM.yyyy' })` and
 * `NbDateFnsDateModule.forChild({ format: 'dd.MM.yyyy' })` methods.
 *
 * Please note to use some of the formatting tokens you also need to pass
 * `{ useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true }` to date-fns parse and format functions.
 * You can configure options passed this functions by setting `formatOptions` and
 * `parseOptions` of options object passed to `NbDateFnsDateModule.forRoot` and `NbDateFnsDateModule.forChild` methods.
 * ```ts
 * NbDateFnsDateModule.forRoot({
 *   parseOptions: { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true },
 *   formatOptions: { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true },
 * })
 * ```
 * Further info on `date-fns` formatting tokens could be found at
 * [date-fns docs](https://date-fns.org/v2.0.0-alpha.27/docs/Unicode-Tokens).
 *
 * You can also use `parseOptions` and `formatOptions` to provide locale.
 * ```ts
 * import { eo } from 'date-fns/locale';
 *
 * @NgModule({
 *   imports: [
 *     NbDateFnsDateModule.forRoot({
 *       parseOptions: { locale: eo },
 *       formatOptions: { locale: eo },
 *     }),
 *   ],
 * })
 * ```
 *
 * @styles
 *
 * datepicker-background-color:
 * datepicker-border-color:
 * datepicker-border-style:
 * datepicker-border-width:
 * datepicker-border-radius:
 * datepicker-shadow:
 * */
export class NbDatepickerDirective {
    /**
     * Provides datepicker component.
     * */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set setPicker(picker) {
        this.picker = picker;
        this.setupPicker();
    }
    constructor(document, datepickerAdapters, hostRef, dateService, changeDetector) {
        this.document = document;
        this.datepickerAdapters = datepickerAdapters;
        this.hostRef = hostRef;
        this.dateService = dateService;
        this.changeDetector = changeDetector;
        this.destroy$ = new Subject();
        this.isDatepickerReady = false;
        this.onChange = () => { };
        this.onTouched = () => { };
        /**
         * Form control validators will be called in validators context, so, we need to bind them.
         * */
        this.validator = Validators.compose([this.parseValidator, this.minValidator, this.maxValidator, this.filterValidator].map((fn) => fn.bind(this)));
        this.subscribeOnInputChange();
    }
    /**
     * Returns html input element.
     * */
    get input() {
        return this.hostRef.nativeElement;
    }
    /**
     * Returns host input value.
     * */
    get inputValue() {
        return this.input.value;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * Writes value in picker and html input element.
     * */
    writeValue(value) {
        if (this.isDatepickerReady) {
            this.writePicker(value);
            this.writeInput(value);
        }
        else {
            this.queue = value;
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.input.disabled = isDisabled;
    }
    /**
     * Form control validation based on picker validator config.
     * */
    validate() {
        return this.validator(null);
    }
    /**
     * Hides picker, focuses the input
     */
    hidePicker() {
        this.input.focus();
        this.picker.hide();
    }
    /**
     * Validates that we can parse value correctly.
     * */
    parseValidator() {
        /**
         * Date services treat empty string as invalid date.
         * That's why we're getting invalid formControl in case of empty input which is not required.
         * */
        if (this.inputValue === '') {
            return null;
        }
        const isValid = this.datepickerAdapter.isValid(this.inputValue, this.picker.format);
        return isValid ? null : { nbDatepickerParse: { value: this.inputValue } };
    }
    /**
     * Validates passed value is greater than min.
     * */
    minValidator() {
        const config = this.picker.getValidatorConfig();
        const date = this.datepickerAdapter.parse(this.inputValue, this.picker.format);
        return !config.min || !date || this.dateService.compareDates(config.min, date) <= 0
            ? null
            : { nbDatepickerMin: { min: config.min, actual: date } };
    }
    /**
     * Validates passed value is smaller than max.
     * */
    maxValidator() {
        const config = this.picker.getValidatorConfig();
        const date = this.datepickerAdapter.parse(this.inputValue, this.picker.format);
        return !config.max || !date || this.dateService.compareDates(config.max, date) >= 0
            ? null
            : { nbDatepickerMax: { max: config.max, actual: date } };
    }
    /**
     * Validates passed value satisfy the filter.
     * */
    filterValidator() {
        const config = this.picker.getValidatorConfig();
        const date = this.datepickerAdapter.parse(this.inputValue, this.picker.format);
        return !config.filter || !date || config.filter(date) ? null : { nbDatepickerFilter: true };
    }
    /**
     * Chooses datepicker adapter based on passed picker component.
     * */
    chooseDatepickerAdapter() {
        this.datepickerAdapter = this.datepickerAdapters.find(({ picker }) => this.picker instanceof picker);
        if (this.noDatepickerAdapterProvided()) {
            throw new Error('No datepickerAdapter provided for picker');
        }
    }
    /**
     * Attaches picker to the host input element and subscribes on value changes.
     * */
    setupPicker() {
        this.chooseDatepickerAdapter();
        this.picker.attach(this.hostRef);
        if (this.inputValue) {
            this.picker.value = this.datepickerAdapter.parse(this.inputValue, this.picker.format);
        }
        this.pickerInputsChangedSubscription?.unsubscribe();
        this.pickerInputsChangedSubscription = this.picker.formatChanged$
            .pipe(map(() => this.picker.format), startWith(this.picker.format), distinctUntilChanged(), pairwise(), takeUntil(this.destroy$))
            .subscribe(([prevFormat, nextFormat]) => {
            if (this.inputValue) {
                const date = this.datepickerAdapter.parse(this.inputValue, prevFormat);
                this.writeInput(date);
            }
        });
        // In case datepicker component placed after the input with datepicker directive,
        // we can't read `this.picker.format` on first change detection run,
        // since it's not bound yet, so we have to wait for datepicker component initialization.
        if (!this.isDatepickerReady) {
            this.picker.init
                .pipe(take(1), tap(() => (this.isDatepickerReady = true)), filter(() => !!this.queue), takeUntil(this.destroy$))
                .subscribe(() => {
                this.writeValue(this.queue);
                this.changeDetector.detectChanges();
                this.queue = undefined;
            });
        }
        this.picker.valueChange.pipe(takeUntil(this.destroy$)).subscribe((value) => {
            this.writePicker(value);
            this.writeInput(value);
            this.onChange(value);
            if (this.picker.shouldHide()) {
                this.hidePicker();
            }
        });
        merge(this.picker.blur, fromEvent(this.input, 'blur').pipe(filter(() => !this.picker.isShown && this.document.activeElement !== this.input)))
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.onTouched());
    }
    writePicker(value) {
        this.picker.value = value;
    }
    writeInput(value) {
        this.hostRef.nativeElement.value = this.datepickerAdapter.format(value, this.picker.format);
    }
    /**
     * Validates if no datepicker adapter provided.
     * */
    noDatepickerAdapterProvided() {
        return !this.datepickerAdapter || !(this.datepickerAdapter instanceof NbDatepickerAdapter);
    }
    subscribeOnInputChange() {
        fromEvent(this.input, 'input')
            .pipe(map(() => this.inputValue), takeUntil(this.destroy$))
            .subscribe((value) => this.handleInputChange(value));
    }
    /**
     * Parses input value and write if it isn't null.
     * */
    handleInputChange(value) {
        const date = this.parseInputValue(value);
        this.onChange(date);
        this.writePicker(date);
    }
    parseInputValue(value) {
        if (this.datepickerAdapter.isValid(value, this.picker.format)) {
            return this.datepickerAdapter.parse(value, this.picker.format);
        }
        return null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbDatepickerDirective, deps: [{ token: NB_DOCUMENT }, { token: NB_DATE_ADAPTER }, { token: i0.ElementRef }, { token: i1.NbDateService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.1.0", type: NbDatepickerDirective, selector: "input[nbDatepicker]", inputs: { setPicker: ["nbDatepicker", "setPicker"] }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => NbDatepickerDirective),
                multi: true,
            },
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => NbDatepickerDirective),
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbDatepickerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[nbDatepicker]',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => NbDatepickerDirective),
                            multi: true,
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => NbDatepickerDirective),
                            multi: true,
                        },
                    ],
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DATE_ADAPTER]
                }] }, { type: i0.ElementRef }, { type: i1.NbDateService }, { type: i0.ChangeDetectorRef }], propDecorators: { setPicker: [{
                type: Input,
                args: ['nbDatepicker']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUVMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLGNBQWMsRUFDZCxLQUFLLEdBR04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLGFBQWEsRUFDYixpQkFBaUIsRUFJakIsVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWMsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFHbEQ7OztLQUdLO0FBQ0wsTUFBTSxPQUFnQixtQkFBbUI7Q0FvQnhDO0FBc0JEOzs7S0FHSztBQUNMLE1BQU0sT0FBZ0IsWUFBWTtDQW1DakM7QUFFRCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsSUFBSSxjQUFjLENBQTJCLG9CQUFvQixDQUFDLENBQUM7QUFFbEcsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUVsRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEtBQUs7dUJBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3QsXG4gIEluamVjdGlvblRva2VuLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBUeXBlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBOR19WQUxJREFUT1JTLFxuICBOR19WQUxVRV9BQ0NFU1NPUixcbiAgVmFsaWRhdGlvbkVycm9ycyxcbiAgVmFsaWRhdG9yLFxuICBWYWxpZGF0b3JGbixcbiAgVmFsaWRhdG9ycyxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHBhaXJ3aXNlLCBzdGFydFdpdGgsIHRha2UsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOQl9ET0NVTUVOVCB9IGZyb20gJy4uLy4uL3RoZW1lLm9wdGlvbnMnO1xuaW1wb3J0IHsgTmJEYXRlU2VydmljZSB9IGZyb20gJy4uL2NhbGVuZGFyLWtpdC9zZXJ2aWNlcy9kYXRlLnNlcnZpY2UnO1xuXG4vKipcbiAqIFRoZSBgTmJEYXRlcGlja2VyQWRhcHRlcmAgaW5zdGFuY2VzIHByb3ZpZGUgd2F5IGhvdyB0byBwYXJzZSwgZm9ybWF0IGFuZCB2YWxpZGF0ZVxuICogZGlmZmVyZW50IGRhdGUgdHlwZXMuXG4gKiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5iRGF0ZXBpY2tlckFkYXB0ZXI8RD4ge1xuICAvKipcbiAgICogUGlja2VyIGNvbXBvbmVudCBjbGFzcy5cbiAgICogKi9cbiAgYWJzdHJhY3QgcGlja2VyOiBUeXBlPGFueT47XG5cbiAgLyoqXG4gICAqIFBhcnNlIGRhdGUgc3RyaW5nIGFjY29yZGluZyB0byB0aGUgZm9ybWF0LlxuICAgKiAqL1xuICBhYnN0cmFjdCBwYXJzZSh2YWx1ZTogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZyk6IEQ7XG5cbiAgLyoqXG4gICAqIEZvcm1hdCBkYXRlIGFjY29yZGluZyB0byB0aGUgZm9ybWF0LlxuICAgKiAqL1xuICBhYnN0cmFjdCBmb3JtYXQodmFsdWU6IEQsIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgZGF0ZSBzdHJpbmcgYWNjb3JkaW5nIHRvIHRoZSBwYXNzZWQgZm9ybWF0LlxuICAgKiAqL1xuICBhYnN0cmFjdCBpc1ZhbGlkKHZhbHVlOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nKTogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBWYWxpZGF0b3JzIGNvbmZpZyB0aGF0IHdpbGwgYmUgdXNlZCBieSBmb3JtIGNvbnRyb2wgdG8gcGVyZm9ybSBwcm9wZXIgdmFsaWRhdGlvbi5cbiAqICovXG5leHBvcnQgaW50ZXJmYWNlIE5iUGlja2VyVmFsaWRhdG9yQ29uZmlnPEQ+IHtcbiAgLyoqXG4gICAqIE1pbmltdW0gZGF0ZSBhdmFpbGFibGUgaW4gcGlja2VyLlxuICAgKiAqL1xuICBtaW46IEQ7XG5cbiAgLyoqXG4gICAqIE1heGltdW0gZGF0ZSBhdmFpbGFibGUgaW4gcGlja2VyLlxuICAgKiAqL1xuICBtYXg6IEQ7XG5cbiAgLyoqXG4gICAqIFByZWRpY2F0ZSB0aGF0IGRldGVybWluZXMgaXMgdmFsdWUgYXZhaWxhYmxlIGZvciBwaWNraW5nLlxuICAgKiAqL1xuICBmaWx0ZXI6IChEKSA9PiBib29sZWFuO1xufVxuXG4vKipcbiAqIERhdGVwaWNrZXIgaXMgYW4gY29udHJvbCB0aGF0IGNhbiBwaWNrIGFueSB2YWx1ZXMgYW55d2F5LlxuICogSXQgaGFzIHRvIGJlIGJvdW5kIHRvIHRoZSBkYXRlcGlja2VyIGRpcmVjdGl2ZSB0aHJvdWdoIG5iRGF0ZXBpY2tlciBpbnB1dC5cbiAqICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmJEYXRlcGlja2VyPFQsIEQgPSBUPiB7XG4gIC8qKlxuICAgKiBIVE1MIGlucHV0IGVsZW1lbnQgZGF0ZSBmb3JtYXQuXG4gICAqICovXG4gIGFic3RyYWN0IGZvcm1hdDogc3RyaW5nO1xuXG4gIGFic3RyYWN0IGdldCB2YWx1ZSgpOiBUO1xuXG4gIGFic3RyYWN0IHNldCB2YWx1ZSh2YWx1ZTogVCk7XG5cbiAgYWJzdHJhY3QgZ2V0IHZhbHVlQ2hhbmdlKCk6IE9ic2VydmFibGU8VD47XG5cbiAgYWJzdHJhY3QgZ2V0IGluaXQoKTogT2JzZXJ2YWJsZTx2b2lkPjtcblxuICAvKipcbiAgICogQXR0YWNoZXMgZGF0ZXBpY2tlciB0byB0aGUgbmF0aXZlIGlucHV0IGVsZW1lbnQuXG4gICAqICovXG4gIGFic3RyYWN0IGF0dGFjaChob3N0UmVmOiBFbGVtZW50UmVmKTtcblxuICAvKipcbiAgICogUmV0dXJucyB2YWxpZGF0b3IgY29uZmlndXJhdGlvbiBiYXNlZCBvbiB0aGUgaW5wdXQgcHJvcGVydGllcy5cbiAgICogKi9cbiAgYWJzdHJhY3QgZ2V0VmFsaWRhdG9yQ29uZmlnKCk6IE5iUGlja2VyVmFsaWRhdG9yQ29uZmlnPEQ+O1xuXG4gIGFic3RyYWN0IHNob3coKTtcblxuICBhYnN0cmFjdCBoaWRlKCk7XG5cbiAgYWJzdHJhY3Qgc2hvdWxkSGlkZSgpOiBib29sZWFuO1xuXG4gIGFic3RyYWN0IGdldCBpc1Nob3duKCk6IGJvb2xlYW47XG5cbiAgYWJzdHJhY3QgZ2V0IGJsdXIoKTogT2JzZXJ2YWJsZTx2b2lkPjtcblxuICBhYnN0cmFjdCBnZXQgZm9ybWF0Q2hhbmdlZCQoKTogT2JzZXJ2YWJsZTx2b2lkPjtcbn1cblxuZXhwb3J0IGNvbnN0IE5CX0RBVEVfQURBUFRFUiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxOYkRhdGVwaWNrZXJBZGFwdGVyPGFueT4+KCdEYXRlcGlja2VyIEFkYXB0ZXInKTtcblxuZXhwb3J0IGNvbnN0IE5CX0RBVEVfU0VSVklDRV9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuKCdEYXRlIHNlcnZpY2Ugb3B0aW9ucycpO1xuXG4vKipcbiAqIFRoZSBgTmJEYXRlcGlja2VyRGlyZWN0aXZlYCBpcyBmb3JtIGNvbnRyb2wgdGhhdCBnaXZlcyB5b3UgYWJpbGl0eSB0byBzZWxlY3QgZGF0ZXMgYW5kIHJhbmdlcy4gVGhlIGRhdGVwaWNrZXJcbiAqIGlzIHNob3duIHdoZW4gaW5wdXQgcmVjZWl2ZXMgYSBgZm9jdXNgIGV2ZW50LlxuICpcbiAqIGBgYGh0bWxcbiAqIDxpbnB1dCBbbmJEYXRlcGlja2VyXT1cImRhdGVwaWNrZXJcIj5cbiAqIDxuYi1kYXRlcGlja2VyICNkYXRlcGlja2VyPjwvbmItZGF0ZXBpY2tlcj5cbiAqIGBgYFxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoU2hvd2Nhc2UsIGRhdGVwaWNrZXIvZGF0ZXBpY2tlci1zaG93Y2FzZS5jb21wb25lbnQpXG4gKlxuICogIyMjIEluc3RhbGxhdGlvblxuICpcbiAqIEltcG9ydCBgTmJEYXRlcGlja2VyTW9kdWxlLmZvclJvb3QoKWAgdG8geW91ciByb290IG1vZHVsZS5cbiAqIGBgYHRzXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgICAgTmJEYXRlcGlja2VyTW9kdWxlLmZvclJvb3QoKSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuICogYGBgXG4gKiBBbmQgYE5iRGF0ZXBpY2tlck1vZHVsZWAgdG8geW91ciBmZWF0dXJlIG1vZHVsZS5cbiAqIGBgYHRzXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgICAgTmJEYXRlcGlja2VyTW9kdWxlLFxuICogICBdLFxuICogfSlcbiAqXG4gKiBleHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7IH1cbiAqIGBgYFxuICogIyMjIFVzYWdlXG4gKlxuICogSWYgeW91IHdhbnQgdG8gdXNlIHJhbmdlIHNlbGVjdGlvbiwgeW91IGhhdmUgdG8gdXNlIGBOYlJhbmdlcGlja2VyQ29tcG9uZW50YCBpbnN0ZWFkOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxpbnB1dCBbbmJEYXRlcGlja2VyXT1cInJhbmdlcGlja2VyXCI+XG4gKiA8bmItcmFuZ2VwaWNrZXIgI3JhbmdlcGlja2VyPjwvbmItcmFuZ2VwaWNrZXI+XG4gKiBgYGBcbiAqXG4gKiBCb3RoIHJhbmdlIGFuZCBkYXRlIHBpY2tlcnMgc3VwcG9ydCBhbGwgcGFyYW1ldGVycyBhcyBjYWxlbmRhciwgc28sIGNoZWNrIGBOYkNhbGVuZGFyQ29tcG9uZW50YCBmb3IgYWRkaXRpb25hbFxuICogaW5mby5cbiAqXG4gKiBAc3RhY2tlZC1leGFtcGxlKFJhbmdlIHNob3djYXNlLCBkYXRlcGlja2VyL3JhbmdlcGlja2VyLXNob3djYXNlLmNvbXBvbmVudClcbiAqXG4gKiBEYXRlcGlja2VyIGlzIHRoZSBmb3JtIGNvbnRyb2wgc28gaXQgY2FuIGJlIGJvdW5kIHdpdGggYW5ndWxhciBmb3JtcyB0aHJvdWdoIG5nTW9kZWwgYW5kIGZvcm0gY29udHJvbHMuXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShGb3JtcywgZGF0ZXBpY2tlci9kYXRlcGlja2VyLWZvcm1zLmNvbXBvbmVudClcbiAqXG4gKiBgTmJEYXRlcGlja2VyRGlyZWN0aXZlYCBtYXkgYmUgdmFsaWRhdGVkIHVzaW5nIGBtaW5gIGFuZCBgbWF4YCBkYXRlcyBwYXNzZWQgdG8gdGhlIGRhdGVwaWNrZXIuXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShWYWxpZGF0aW9uLCBkYXRlcGlja2VyL2RhdGVwaWNrZXItdmFsaWRhdGlvbi5jb21wb25lbnQpXG4gKlxuICogQWxzbyBgTmJEYXRlcGlja2VyRGlyZWN0aXZlYCBtYXkgYmUgZmlsdGVyZWQgdXNpbmcgYGZpbHRlcmAgcHJlZGljYXRlXG4gKiB0aGF0IHJlY2VpdmVzIGRhdGUgb2JqZWN0IGFuZCBoYXMgdG8gcmV0dXJuIGEgYm9vbGVhbiB2YWx1ZS5cbiAqXG4gKiBAc3RhY2tlZC1leGFtcGxlKEZpbHRlciwgZGF0ZXBpY2tlci9kYXRlcGlja2VyLWZpbHRlci5jb21wb25lbnQpXG4gKlxuICogSWYgeW91IG5lZWQgdG8gcGljayBhIHRpbWUgYWxvbmcgd2l0aCB0aGUgZGF0ZSwgeW91IGNhbiB1c2UgbmItZGF0ZS10aW1lcGlja2VyXG4gKlxuICogYGBgaHRtbFxuICogPGlucHV0IG5iSW5wdXQgcGxhY2Vob2xkZXI9XCJQaWNrIERhdGVcIiBbbmJEYXRlcGlja2VyXT1cImRhdGVUaW1lUGlja2VyXCI+XG4gKiA8bmItZGF0ZS10aW1lcGlja2VyIHdpdGhTZWNvbmRzICNkYXRlVGltZVBpY2tlcj48L25iLWRhdGUtdGltZXBpY2tlcj5cbiAqIGBgYFxuICogQHN0YWNrZWQtZXhhbXBsZShEYXRlIHRpbWVwaWNrZXIsIGRhdGVwaWNrZXIvZGF0ZS10aW1lcGlja2VyLXNob3djYXNlLmNvbXBvbmVudClcbiAqXG4gKiBBIHNpbmdsZSBjb2x1bW4gcGlja2VyIHdpdGggb3B0aW9ucyB2YWx1ZSBhcyB0aW1lIGFuZCBtaW51dGUsIHNvIHVzZXJzIHdvbuKAmXQgYmUgYWJsZSB0byBwaWNrXG4gKiBob3VycyBhbmQgbWludXRlcyBpbmRpdmlkdWFsbHkuXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShEYXRlIHRpbWVwaWNrZXIgc2luZ2xlIGNvbHVtbiwgZGF0ZXBpY2tlci9kYXRlLXRpbWVwaWNrZXItc2luZ2xlLWNvbHVtbi5jb21wb25lbnQpXG5cbiAqIFRoZSBgTmJEYXRlcGlja2VyQ29tcG9uZW50YCBzdXBwb3J0cyBkYXRlIGZvcm1hdHRpbmc6XG4gKlxuICogYGBgaHRtbFxuICogPGlucHV0IFtuYkRhdGVwaWNrZXJdPVwiZGF0ZXBpY2tlclwiPlxuICogPG5iLWRhdGVwaWNrZXIgI2RhdGVwaWNrZXIgZm9ybWF0PVwiTU1cXGRkXFx5eXl5XCI+PC9uYi1kYXRlcGlja2VyPlxuICogYGBgXG4gKiA8c3BhbiBpZD1cImZvcm1hdHRpbmctaXNzdWVcIj48L3NwYW4+XG4gKiAjIyBGb3JtYXR0aW5nIElzc3VlXG4gKlxuICogQnkgZGVmYXVsdCwgZGF0ZXBpY2tlciB1c2VzIGFuZ3VsYXJzIGBMT0NBTEVfSURgIHRva2VuIGZvciBsb2NhbGl6YXRpb24gYW5kIGBEYXRlUGlwZWAgZm9yIGRhdGVzIGZvcm1hdHRpbmcuXG4gKiBBbmQgbmF0aXZlIGBEYXRlLnBhcnNlKC4uLilgIGZvciBkYXRlcyBwYXJzaW5nLiBCdXQgbmF0aXZlIGBEYXRlLnBhcnNlYCBmdW5jdGlvbiBkb2Vzbid0IHN1cHBvcnQgZm9ybWF0cy5cbiAqIFRvIHByb3ZpZGUgY3VzdG9tIGZvcm1hdHRpbmcgeW91IGhhdmUgdG8gdXNlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHBhY2thZ2VzOlxuICpcbiAqIC0gYEBuZWJ1bGFyL21vbWVudGAgLSBwcm92aWRlcyBtb21lbnQgZGF0ZSBhZGFwdGVyIHRoYXQgdXNlcyBtb21lbnQgZm9yIGRhdGUgb2JqZWN0cy4gVGhpcyBtZWFucyBkYXRlcGlja2VyIHRoYW5cbiAqIHdpbGwgb3BlcmF0ZSBvbmx5IG1vbWVudCBkYXRlIG9iamVjdHMuIElmIHlvdSB3YW50IHRvIHVzZSBpdCB5b3UgaGF2ZSB0byBpbnN0YWxsIGl0OiBgbnBtIGkgQG5lYnVsYXIvbW9tZW50YCwgYW5kXG4gKiBpbXBvcnQgYE5iTW9tZW50RGF0ZU1vZHVsZWAgZnJvbSB0aGlzIHBhY2thZ2UuXG4gKlxuICogLSBgQG5lYnVsYXIvZGF0ZS1mbnNgIC0gYWRhcHRlciBmb3IgcG9wdWxhciBkYXRlLWZucyBsaWJyYXJ5LiBUaGlzIHdheSBpcyBwcmVmZXJyZWQgaWYgeW91IG5lZWQgb25seSBkYXRlIGZvcm1hdHRpbmcuXG4gKiBCZWNhdXNlIGRhdGUtZm5zIGlzIHRyZWVzaGFrYWJsZSwgdGlueSBhbmQgb3BlcmF0ZXMgbmF0aXZlIGRhdGUgb2JqZWN0cy4gSWYgeW91IHdhbnQgdG8gdXNlIGl0IHlvdSBoYXZlIHRvXG4gKiBpbnN0YWxsIGl0OiBgbnBtIGkgQG5lYnVsYXIvZGF0ZS1mbnNgLCBhbmQgaW1wb3J0IGBOYkRhdGVGbnNEYXRlTW9kdWxlYCBmcm9tIHRoaXMgcGFja2FnZS5cbiAqXG4gKiAjIyMgTmJEYXRlRm5zRGF0ZU1vZHVsZVxuICpcbiAqIEZvcm1hdCBpcyByZXF1aXJlZCB3aGVuIHVzaW5nIGBOYkRhdGVGbnNEYXRlTW9kdWxlYC4gWW91IGNhbiBzZXQgaXQgdmlhIGBmb3JtYXRgIGlucHV0IG9uIGRhdGVwaWNrZXIgY29tcG9uZW50OlxuICogYGBgaHRtbFxuICogPG5iLWRhdGVwaWNrZXIgZm9ybWF0PVwiZGQuTU0ueXl5eVwiPjwvbmItZGF0ZXBpY2tlcj5cbiAqIGBgYFxuICogQWxzbyBmb3JtYXQgY2FuIGJlIHNldCBnbG9iYWxseSB3aXRoIGBOYkRhdGVGbnNEYXRlTW9kdWxlLmZvclJvb3QoeyBmb3JtYXQ6ICdkZC5NTS55eXl5JyB9KWAgYW5kXG4gKiBgTmJEYXRlRm5zRGF0ZU1vZHVsZS5mb3JDaGlsZCh7IGZvcm1hdDogJ2RkLk1NLnl5eXknIH0pYCBtZXRob2RzLlxuICpcbiAqIFBsZWFzZSBub3RlIHRvIHVzZSBzb21lIG9mIHRoZSBmb3JtYXR0aW5nIHRva2VucyB5b3UgYWxzbyBuZWVkIHRvIHBhc3NcbiAqIGB7IHVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VuczogdHJ1ZSwgdXNlQWRkaXRpb25hbERheU9mWWVhclRva2VuczogdHJ1ZSB9YCB0byBkYXRlLWZucyBwYXJzZSBhbmQgZm9ybWF0IGZ1bmN0aW9ucy5cbiAqIFlvdSBjYW4gY29uZmlndXJlIG9wdGlvbnMgcGFzc2VkIHRoaXMgZnVuY3Rpb25zIGJ5IHNldHRpbmcgYGZvcm1hdE9wdGlvbnNgIGFuZFxuICogYHBhcnNlT3B0aW9uc2Agb2Ygb3B0aW9ucyBvYmplY3QgcGFzc2VkIHRvIGBOYkRhdGVGbnNEYXRlTW9kdWxlLmZvclJvb3RgIGFuZCBgTmJEYXRlRm5zRGF0ZU1vZHVsZS5mb3JDaGlsZGAgbWV0aG9kcy5cbiAqIGBgYHRzXG4gKiBOYkRhdGVGbnNEYXRlTW9kdWxlLmZvclJvb3Qoe1xuICogICBwYXJzZU9wdGlvbnM6IHsgdXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zOiB0cnVlLCB1c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zOiB0cnVlIH0sXG4gKiAgIGZvcm1hdE9wdGlvbnM6IHsgdXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zOiB0cnVlLCB1c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zOiB0cnVlIH0sXG4gKiB9KVxuICogYGBgXG4gKiBGdXJ0aGVyIGluZm8gb24gYGRhdGUtZm5zYCBmb3JtYXR0aW5nIHRva2VucyBjb3VsZCBiZSBmb3VuZCBhdFxuICogW2RhdGUtZm5zIGRvY3NdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL3YyLjAuMC1hbHBoYS4yNy9kb2NzL1VuaWNvZGUtVG9rZW5zKS5cbiAqXG4gKiBZb3UgY2FuIGFsc28gdXNlIGBwYXJzZU9wdGlvbnNgIGFuZCBgZm9ybWF0T3B0aW9uc2AgdG8gcHJvdmlkZSBsb2NhbGUuXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZW8gfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnO1xuICpcbiAqIEBOZ01vZHVsZSh7XG4gKiAgIGltcG9ydHM6IFtcbiAqICAgICBOYkRhdGVGbnNEYXRlTW9kdWxlLmZvclJvb3Qoe1xuICogICAgICAgcGFyc2VPcHRpb25zOiB7IGxvY2FsZTogZW8gfSxcbiAqICAgICAgIGZvcm1hdE9wdGlvbnM6IHsgbG9jYWxlOiBlbyB9LFxuICogICAgIH0pLFxuICogICBdLFxuICogfSlcbiAqIGBgYFxuICpcbiAqIEBzdHlsZXNcbiAqXG4gKiBkYXRlcGlja2VyLWJhY2tncm91bmQtY29sb3I6XG4gKiBkYXRlcGlja2VyLWJvcmRlci1jb2xvcjpcbiAqIGRhdGVwaWNrZXItYm9yZGVyLXN0eWxlOlxuICogZGF0ZXBpY2tlci1ib3JkZXItd2lkdGg6XG4gKiBkYXRlcGlja2VyLWJvcmRlci1yYWRpdXM6XG4gKiBkYXRlcGlja2VyLXNoYWRvdzpcbiAqICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpbnB1dFtuYkRhdGVwaWNrZXJdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOYkRhdGVwaWNrZXJEaXJlY3RpdmUpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmJEYXRlcGlja2VyRGlyZWN0aXZlKSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5iRGF0ZXBpY2tlckRpcmVjdGl2ZTxEPiBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XG4gIC8qKlxuICAgKiBQcm92aWRlcyBkYXRlcGlja2VyIGNvbXBvbmVudC5cbiAgICogKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCduYkRhdGVwaWNrZXInKVxuICBzZXQgc2V0UGlja2VyKHBpY2tlcjogTmJEYXRlcGlja2VyPEQ+KSB7XG4gICAgdGhpcy5waWNrZXIgPSBwaWNrZXI7XG4gICAgdGhpcy5zZXR1cFBpY2tlcigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHBpY2tlcklucHV0c0NoYW5nZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogRGF0ZXBpY2tlciBhZGFwdGVyLlxuICAgKiAqL1xuICBwcm90ZWN0ZWQgZGF0ZXBpY2tlckFkYXB0ZXI6IE5iRGF0ZXBpY2tlckFkYXB0ZXI8RD47XG5cbiAgLyoqXG4gICAqIERhdGVwaWNrZXIgaW5zdGFuY2UuXG4gICAqICovXG4gIHByb3RlY3RlZCBwaWNrZXI6IE5iRGF0ZXBpY2tlcjxEPjtcbiAgcHJvdGVjdGVkIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJvdGVjdGVkIGlzRGF0ZXBpY2tlclJlYWR5OiBib29sZWFuID0gZmFsc2U7XG4gIHByb3RlY3RlZCBxdWV1ZTogRCB8IHVuZGVmaW5lZDtcbiAgcHJvdGVjdGVkIG9uQ2hhbmdlOiAoRCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICBwcm90ZWN0ZWQgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgLyoqXG4gICAqIEZvcm0gY29udHJvbCB2YWxpZGF0b3JzIHdpbGwgYmUgY2FsbGVkIGluIHZhbGlkYXRvcnMgY29udGV4dCwgc28sIHdlIG5lZWQgdG8gYmluZCB0aGVtLlxuICAgKiAqL1xuICBwcm90ZWN0ZWQgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbiA9IFZhbGlkYXRvcnMuY29tcG9zZShcbiAgICBbdGhpcy5wYXJzZVZhbGlkYXRvciwgdGhpcy5taW5WYWxpZGF0b3IsIHRoaXMubWF4VmFsaWRhdG9yLCB0aGlzLmZpbHRlclZhbGlkYXRvcl0ubWFwKChmbikgPT4gZm4uYmluZCh0aGlzKSksXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChOQl9ET0NVTUVOVCkgcHJvdGVjdGVkIGRvY3VtZW50LFxuICAgIEBJbmplY3QoTkJfREFURV9BREFQVEVSKSBwcm90ZWN0ZWQgZGF0ZXBpY2tlckFkYXB0ZXJzOiBOYkRhdGVwaWNrZXJBZGFwdGVyPEQ+W10sXG4gICAgcHJvdGVjdGVkIGhvc3RSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIGRhdGVTZXJ2aWNlOiBOYkRhdGVTZXJ2aWNlPEQ+LFxuICAgIHByb3RlY3RlZCBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIHRoaXMuc3Vic2NyaWJlT25JbnB1dENoYW5nZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaHRtbCBpbnB1dCBlbGVtZW50LlxuICAgKiAqL1xuICBnZXQgaW5wdXQoKTogSFRNTElucHV0RWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuaG9zdFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaG9zdCBpbnB1dCB2YWx1ZS5cbiAgICogKi9cbiAgZ2V0IGlucHV0VmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZXMgdmFsdWUgaW4gcGlja2VyIGFuZCBodG1sIGlucHV0IGVsZW1lbnQuXG4gICAqICovXG4gIHdyaXRlVmFsdWUodmFsdWU6IEQpIHtcbiAgICBpZiAodGhpcy5pc0RhdGVwaWNrZXJSZWFkeSkge1xuICAgICAgdGhpcy53cml0ZVBpY2tlcih2YWx1ZSk7XG4gICAgICB0aGlzLndyaXRlSW5wdXQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnF1ZXVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0LmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtIGNvbnRyb2wgdmFsaWRhdGlvbiBiYXNlZCBvbiBwaWNrZXIgdmFsaWRhdG9yIGNvbmZpZy5cbiAgICogKi9cbiAgdmFsaWRhdGUoKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcihudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyBwaWNrZXIsIGZvY3VzZXMgdGhlIGlucHV0XG4gICAqL1xuICBwcm90ZWN0ZWQgaGlkZVBpY2tlcigpIHtcbiAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgdGhpcy5waWNrZXIuaGlkZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyB0aGF0IHdlIGNhbiBwYXJzZSB2YWx1ZSBjb3JyZWN0bHkuXG4gICAqICovXG4gIHByb3RlY3RlZCBwYXJzZVZhbGlkYXRvcigpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgLyoqXG4gICAgICogRGF0ZSBzZXJ2aWNlcyB0cmVhdCBlbXB0eSBzdHJpbmcgYXMgaW52YWxpZCBkYXRlLlxuICAgICAqIFRoYXQncyB3aHkgd2UncmUgZ2V0dGluZyBpbnZhbGlkIGZvcm1Db250cm9sIGluIGNhc2Ugb2YgZW1wdHkgaW5wdXQgd2hpY2ggaXMgbm90IHJlcXVpcmVkLlxuICAgICAqICovXG4gICAgaWYgKHRoaXMuaW5wdXRWYWx1ZSA9PT0gJycpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLmRhdGVwaWNrZXJBZGFwdGVyLmlzVmFsaWQodGhpcy5pbnB1dFZhbHVlLCB0aGlzLnBpY2tlci5mb3JtYXQpO1xuICAgIHJldHVybiBpc1ZhbGlkID8gbnVsbCA6IHsgbmJEYXRlcGlja2VyUGFyc2U6IHsgdmFsdWU6IHRoaXMuaW5wdXRWYWx1ZSB9IH07XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIHBhc3NlZCB2YWx1ZSBpcyBncmVhdGVyIHRoYW4gbWluLlxuICAgKiAqL1xuICBwcm90ZWN0ZWQgbWluVmFsaWRhdG9yKCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLnBpY2tlci5nZXRWYWxpZGF0b3JDb25maWcoKTtcbiAgICBjb25zdCBkYXRlID0gdGhpcy5kYXRlcGlja2VyQWRhcHRlci5wYXJzZSh0aGlzLmlucHV0VmFsdWUsIHRoaXMucGlja2VyLmZvcm1hdCk7XG4gICAgcmV0dXJuICFjb25maWcubWluIHx8ICFkYXRlIHx8IHRoaXMuZGF0ZVNlcnZpY2UuY29tcGFyZURhdGVzKGNvbmZpZy5taW4sIGRhdGUpIDw9IDBcbiAgICAgID8gbnVsbFxuICAgICAgOiB7IG5iRGF0ZXBpY2tlck1pbjogeyBtaW46IGNvbmZpZy5taW4sIGFjdHVhbDogZGF0ZSB9IH07XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIHBhc3NlZCB2YWx1ZSBpcyBzbWFsbGVyIHRoYW4gbWF4LlxuICAgKiAqL1xuICBwcm90ZWN0ZWQgbWF4VmFsaWRhdG9yKCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLnBpY2tlci5nZXRWYWxpZGF0b3JDb25maWcoKTtcbiAgICBjb25zdCBkYXRlID0gdGhpcy5kYXRlcGlja2VyQWRhcHRlci5wYXJzZSh0aGlzLmlucHV0VmFsdWUsIHRoaXMucGlja2VyLmZvcm1hdCk7XG4gICAgcmV0dXJuICFjb25maWcubWF4IHx8ICFkYXRlIHx8IHRoaXMuZGF0ZVNlcnZpY2UuY29tcGFyZURhdGVzKGNvbmZpZy5tYXgsIGRhdGUpID49IDBcbiAgICAgID8gbnVsbFxuICAgICAgOiB7IG5iRGF0ZXBpY2tlck1heDogeyBtYXg6IGNvbmZpZy5tYXgsIGFjdHVhbDogZGF0ZSB9IH07XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIHBhc3NlZCB2YWx1ZSBzYXRpc2Z5IHRoZSBmaWx0ZXIuXG4gICAqICovXG4gIHByb3RlY3RlZCBmaWx0ZXJWYWxpZGF0b3IoKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMucGlja2VyLmdldFZhbGlkYXRvckNvbmZpZygpO1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmRhdGVwaWNrZXJBZGFwdGVyLnBhcnNlKHRoaXMuaW5wdXRWYWx1ZSwgdGhpcy5waWNrZXIuZm9ybWF0KTtcbiAgICByZXR1cm4gIWNvbmZpZy5maWx0ZXIgfHwgIWRhdGUgfHwgY29uZmlnLmZpbHRlcihkYXRlKSA/IG51bGwgOiB7IG5iRGF0ZXBpY2tlckZpbHRlcjogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENob29zZXMgZGF0ZXBpY2tlciBhZGFwdGVyIGJhc2VkIG9uIHBhc3NlZCBwaWNrZXIgY29tcG9uZW50LlxuICAgKiAqL1xuICBwcm90ZWN0ZWQgY2hvb3NlRGF0ZXBpY2tlckFkYXB0ZXIoKSB7XG4gICAgdGhpcy5kYXRlcGlja2VyQWRhcHRlciA9IHRoaXMuZGF0ZXBpY2tlckFkYXB0ZXJzLmZpbmQoKHsgcGlja2VyIH0pID0+IHRoaXMucGlja2VyIGluc3RhbmNlb2YgcGlja2VyKTtcblxuICAgIGlmICh0aGlzLm5vRGF0ZXBpY2tlckFkYXB0ZXJQcm92aWRlZCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGRhdGVwaWNrZXJBZGFwdGVyIHByb3ZpZGVkIGZvciBwaWNrZXInKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoZXMgcGlja2VyIHRvIHRoZSBob3N0IGlucHV0IGVsZW1lbnQgYW5kIHN1YnNjcmliZXMgb24gdmFsdWUgY2hhbmdlcy5cbiAgICogKi9cbiAgcHJvdGVjdGVkIHNldHVwUGlja2VyKCkge1xuICAgIHRoaXMuY2hvb3NlRGF0ZXBpY2tlckFkYXB0ZXIoKTtcbiAgICB0aGlzLnBpY2tlci5hdHRhY2godGhpcy5ob3N0UmVmKTtcblxuICAgIGlmICh0aGlzLmlucHV0VmFsdWUpIHtcbiAgICAgIHRoaXMucGlja2VyLnZhbHVlID0gdGhpcy5kYXRlcGlja2VyQWRhcHRlci5wYXJzZSh0aGlzLmlucHV0VmFsdWUsIHRoaXMucGlja2VyLmZvcm1hdCk7XG4gICAgfVxuXG4gICAgdGhpcy5waWNrZXJJbnB1dHNDaGFuZ2VkU3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMucGlja2VySW5wdXRzQ2hhbmdlZFN1YnNjcmlwdGlvbiA9IHRoaXMucGlja2VyLmZvcm1hdENoYW5nZWQkXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHRoaXMucGlja2VyLmZvcm1hdCksXG4gICAgICAgIHN0YXJ0V2l0aCh0aGlzLnBpY2tlci5mb3JtYXQpLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICBwYWlyd2lzZSgpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChbcHJldkZvcm1hdCwgbmV4dEZvcm1hdF0pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZSkge1xuICAgICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLmRhdGVwaWNrZXJBZGFwdGVyLnBhcnNlKHRoaXMuaW5wdXRWYWx1ZSwgcHJldkZvcm1hdCk7XG4gICAgICAgICAgdGhpcy53cml0ZUlucHV0KGRhdGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIC8vIEluIGNhc2UgZGF0ZXBpY2tlciBjb21wb25lbnQgcGxhY2VkIGFmdGVyIHRoZSBpbnB1dCB3aXRoIGRhdGVwaWNrZXIgZGlyZWN0aXZlLFxuICAgIC8vIHdlIGNhbid0IHJlYWQgYHRoaXMucGlja2VyLmZvcm1hdGAgb24gZmlyc3QgY2hhbmdlIGRldGVjdGlvbiBydW4sXG4gICAgLy8gc2luY2UgaXQncyBub3QgYm91bmQgeWV0LCBzbyB3ZSBoYXZlIHRvIHdhaXQgZm9yIGRhdGVwaWNrZXIgY29tcG9uZW50IGluaXRpYWxpemF0aW9uLlxuICAgIGlmICghdGhpcy5pc0RhdGVwaWNrZXJSZWFkeSkge1xuICAgICAgdGhpcy5waWNrZXIuaW5pdFxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgIHRhcCgoKSA9PiAodGhpcy5pc0RhdGVwaWNrZXJSZWFkeSA9IHRydWUpKSxcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gISF0aGlzLnF1ZXVlKSxcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMucXVldWUpO1xuICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgIHRoaXMucXVldWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMucGlja2VyLnZhbHVlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKHZhbHVlOiBEKSA9PiB7XG4gICAgICB0aGlzLndyaXRlUGlja2VyKHZhbHVlKTtcbiAgICAgIHRoaXMud3JpdGVJbnB1dCh2YWx1ZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcblxuICAgICAgaWYgKHRoaXMucGlja2VyLnNob3VsZEhpZGUoKSkge1xuICAgICAgICB0aGlzLmhpZGVQaWNrZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1lcmdlKFxuICAgICAgdGhpcy5waWNrZXIuYmx1cixcbiAgICAgIGZyb21FdmVudCh0aGlzLmlucHV0LCAnYmx1cicpLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiAhdGhpcy5waWNrZXIuaXNTaG93biAmJiB0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHRoaXMuaW5wdXQpLFxuICAgICAgKSxcbiAgICApXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHdyaXRlUGlja2VyKHZhbHVlOiBEKSB7XG4gICAgdGhpcy5waWNrZXIudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCB3cml0ZUlucHV0KHZhbHVlOiBEKSB7XG4gICAgdGhpcy5ob3N0UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLmRhdGVwaWNrZXJBZGFwdGVyLmZvcm1hdCh2YWx1ZSwgdGhpcy5waWNrZXIuZm9ybWF0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgaWYgbm8gZGF0ZXBpY2tlciBhZGFwdGVyIHByb3ZpZGVkLlxuICAgKiAqL1xuICBwcm90ZWN0ZWQgbm9EYXRlcGlja2VyQWRhcHRlclByb3ZpZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5kYXRlcGlja2VyQWRhcHRlciB8fCAhKHRoaXMuZGF0ZXBpY2tlckFkYXB0ZXIgaW5zdGFuY2VvZiBOYkRhdGVwaWNrZXJBZGFwdGVyKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVPbklucHV0Q2hhbmdlKCkge1xuICAgIGZyb21FdmVudCh0aGlzLmlucHV0LCAnaW5wdXQnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoKSA9PiB0aGlzLmlucHV0VmFsdWUpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKHZhbHVlKSk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIGlucHV0IHZhbHVlIGFuZCB3cml0ZSBpZiBpdCBpc24ndCBudWxsLlxuICAgKiAqL1xuICBwcm90ZWN0ZWQgaGFuZGxlSW5wdXRDaGFuZ2UodmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLnBhcnNlSW5wdXRWYWx1ZSh2YWx1ZSk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlKGRhdGUpO1xuICAgIHRoaXMud3JpdGVQaWNrZXIoZGF0ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcGFyc2VJbnB1dFZhbHVlKHZhbHVlKTogRCB8IG51bGwge1xuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJBZGFwdGVyLmlzVmFsaWQodmFsdWUsIHRoaXMucGlja2VyLmZvcm1hdCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGVwaWNrZXJBZGFwdGVyLnBhcnNlKHZhbHVlLCB0aGlzLnBpY2tlci5mb3JtYXQpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=