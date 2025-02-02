/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export function convertToBoolProperty(val) {
    if (typeof val === 'string') {
        val = val.toLowerCase().trim();
        return val === 'true' || val === '';
    }
    return !!val;
}
export function getElementHeight(el) {
    /**
     *
     * TODO: Move helpers in separate common module.
     * TODO: Provide window through di token.
     * */
    const style = window.getComputedStyle(el);
    const marginTop = parseInt(style.getPropertyValue('margin-top'), 10);
    const marginBottom = parseInt(style.getPropertyValue('margin-bottom'), 10);
    return el.offsetHeight + marginTop + marginBottom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFLSCxNQUFNLFVBQVUscUJBQXFCLENBQUMsR0FBUTtJQUM1QyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQzVCLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFL0IsT0FBTyxHQUFHLEtBQUssTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsRUFBRTtJQUNqQzs7OztTQUlLO0lBQ0wsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckUsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMzRSxPQUFPLEVBQUUsQ0FBQyxZQUFZLEdBQUcsU0FBUyxHQUFHLFlBQVksQ0FBQztBQUNwRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5leHBvcnQgdHlwZSBOYk51bGxhYmxlSW5wdXQgPSBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuZXhwb3J0IHR5cGUgTmJCb29sZWFuSW5wdXQgPSBib29sZWFuIHwgTmJOdWxsYWJsZUlucHV0O1xuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbDogYW55KTogYm9vbGVhbiB7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IHZhbC50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcblxuICAgIHJldHVybiB2YWwgPT09ICd0cnVlJyB8fCB2YWwgPT09ICcnO1xuICB9XG5cbiAgcmV0dXJuICEhdmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudEhlaWdodChlbCkge1xuICAvKipcbiAgICpcbiAgICogVE9ETzogTW92ZSBoZWxwZXJzIGluIHNlcGFyYXRlIGNvbW1vbiBtb2R1bGUuXG4gICAqIFRPRE86IFByb3ZpZGUgd2luZG93IHRocm91Z2ggZGkgdG9rZW4uXG4gICAqICovXG4gIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICBjb25zdCBtYXJnaW5Ub3AgPSBwYXJzZUludChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tdG9wJyksIDEwKTtcbiAgY29uc3QgbWFyZ2luQm90dG9tID0gcGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWJvdHRvbScpLCAxMCk7XG4gIHJldHVybiBlbC5vZmZzZXRIZWlnaHQgKyBtYXJnaW5Ub3AgKyBtYXJnaW5Cb3R0b207XG59XG4iXX0=