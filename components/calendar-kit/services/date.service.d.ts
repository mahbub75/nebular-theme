import { TranslationWidth } from '@angular/common';
export declare const enum NbDayPeriod {
    AM = "AM",// before midday, 0 - 11 in 24-hour format.
    PM = "PM"
}
export declare abstract class NbDateService<D> {
    readonly DAYS_IN_WEEK: number;
    /**
     * Number of hours in AM/PM day periods.
     **/
    readonly HOURS_IN_DAY_PERIOD = 12;
    protected locale: string;
    setLocale(locale: any): void;
    /**
     * Checks if the date is between the start date and the end date.
     * */
    isBetween(date: D, start: D, end: D): boolean;
    /**
     * Checks is two dates have the same day.
     * */
    isSameDaySafe(date1: D, date2: D): boolean;
    /**
     * Checks is two dates have the same month.
     * */
    isSameMonthSafe(date1: D, date2: D): boolean;
    /**
     * Checks is two dates have the same year.
     * */
    isSameYearSafe(date1: D, date2: D): boolean;
    /**
     * Returns date with selected hour
     * */
    abstract setHours(date: D, hour: number): D;
    /**
     * Returns date with selected minute
     * */
    abstract setMinutes(date: D, minute: number): D;
    /**
     * Returns date with selected second
     * */
    abstract setSeconds(date: D, second: number): D;
    /**
     * Returns date with selected milliseconds
     * */
    abstract setMilliseconds(date: D, second: number): D;
    /**
     * Returns true if date string is valid date string according to the provided format.
     * */
    abstract isValidDateString(date: string, format: string): boolean;
    /**
     * Returns true if time string is valid time string according to the provided format.
     * */
    abstract isValidTimeString(date: string, format: string): boolean;
    /**
     * Returns today date.
     * */
    abstract today(): D;
    /**
     * Gets the time format based on locale
     * */
    abstract getLocaleTimeFormat(): string;
    /**
     * Gets the date of the month component of the given date.
     */
    abstract getDate(date: D): number;
    /**
     * Gets the hour component of the given date.
     */
    abstract getHours(date: D): number;
    /**
     * Gets the minute component of the given date.
     */
    abstract getMinutes(date: D): number;
    /**
     * Gets the second component of the given date.
     */
    abstract getSeconds(date: D): number;
    /**
     * Gets the second component of the given date.
     */
    abstract getMilliseconds(date: D): number;
    /**
     * Gets the month component of the given date.
     * */
    abstract getMonth(date: D): number;
    /**
     * Gets the year component of the given date.
     * */
    abstract getYear(date: D): number;
    /**
     * Returns day of the week of the given date.
     */
    abstract getDayOfWeek(date: D): number;
    /**
     * Returns first day of the week, it can be 1 if week starts from monday
     * and 0 if from sunday and so on.
     * */
    abstract getFirstDayOfWeek(): number;
    /**
     * Returns localized month name by date and style.
     * */
    abstract getMonthName(date: D, style?: TranslationWidth): string;
    /**
     * Returns localized month name by month index and style.
     * */
    abstract getMonthNameByIndex(month: number, style?: TranslationWidth): string;
    /**
     * Returns localized days names.
     * */
    abstract getDayOfWeekNames(style?: TranslationWidth): string[];
    /**
     * Parses the date string according to the passed format.
     * */
    abstract parse(date: string, format: string): D;
    /**
     * Transforms the date to the string according to the passed format.
     * */
    abstract format(date: D, format: string): string;
    /**
     * Creates new date from year, month and date.
     * */
    abstract createDate(year: number, month: number, date: number): D;
    /**
     * Checks is two dates have the same year.
     * */
    abstract isSameYear(date1: D, date2: D): boolean;
    /**
     * Checks is two dates have the same month.
     * */
    abstract isSameMonth(date1: D, date2: D): boolean;
    /**
     * Checks is two dates have the same day.
     * */
    abstract isSameDay(date1: D, date2: D): boolean;
    /**
     * Compares two dates.
     * Returns 0 if dates are the same.
     * Returns 1 if the first date is greater than the second.
     * Returns -1 if the second date is greater than the first.
     * */
    abstract compareDates(date1: D, date2: D): number;
    /**
     * Clones passed date.
     * */
    abstract clone(date: D): D;
    /**
     * Creates the same date but with day equals to 1.
     * */
    abstract getMonthStart(date: D): D;
    /**
     * Creates the same date but with day equals to the last day in this month.
     * */
    abstract getMonthEnd(date: D): D;
    /**
     * Creates the same date but with month equals to 0 and day equals to 1.
     * */
    abstract getYearStart(date: D): D;
    /**
     * Creates the same date but with month equals to 11 and day equals to 31.
     * */
    abstract getYearEnd(date: D): D;
    /**
     * Returns number of days in the date.
     * */
    abstract getNumberOfDaysInMonth(date: D): number;
    /**
     * Returns date with added number of days.
     * */
    abstract addDay(date: D, days: number): D;
    /**
     * Returns date with added number of months.
     * */
    abstract addMonth(date: D, months: number): D;
    /**
     * Returns date with added number of hours.
     * */
    abstract addHours(date: D, hour: number): D;
    /**
    * Returns date with added number of minutes.
    * */
    abstract addMinutes(date: D, minute: number): D;
    /**
     * Returns date with added number of years.
     * */
    abstract addYear(date: D, years: number): D;
    abstract getId(): string;
    abstract getWeekNumber(date: D): number;
    abstract getDateFormat(): string;
    abstract getTwelveHoursFormat(): string;
    /**
     * Returns date with added number of years.
     * */
    abstract valueOf(date: D): number;
    isSameHourAndMinute(date1: D, date2: D): boolean;
    isSameHour(date1: D, date2: D): boolean;
    isSameMinute(date1: D, date2: D): boolean;
    getTwentyFourHoursFormat(): string;
    getTwentyFourHoursFormatWithSeconds(): string;
    getTwelveHoursFormatWithSeconds(): string;
    getDayPeriod(date: D): NbDayPeriod;
}
