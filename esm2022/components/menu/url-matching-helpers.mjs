/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export function isUrlPathEqual(path, link) {
    const locationPath = getPathPartOfUrl(path);
    return link === locationPath;
}
export function isUrlPathContain(path, link) {
    const locationPath = getPathPartOfUrl(path);
    const endOfUrlSegmentRegExp = /\/|^$/;
    return locationPath.startsWith(link) &&
        locationPath.slice(link.length).charAt(0).search(endOfUrlSegmentRegExp) !== -1;
}
export function getPathPartOfUrl(url) {
    return url.match(/.*?(?=[?;#]|$)/)[0];
}
export function getFragmentPartOfUrl(url) {
    const matched = url.match(/#(.+)/);
    return matched ? matched[1] : '';
}
export function isFragmentEqual(path, fragment) {
    return getFragmentPartOfUrl(path) === fragment;
}
export function isFragmentContain(path, fragment) {
    return getFragmentPartOfUrl(path).includes(fragment);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLW1hdGNoaW5nLWhlbHBlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvbWVudS91cmwtbWF0Y2hpbmctaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsTUFBTSxVQUFVLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSTtJQUN2QyxNQUFNLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxPQUFPLElBQUksS0FBSyxZQUFZLENBQUM7QUFDL0IsQ0FBQztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSTtJQUN6QyxNQUFNLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxNQUFNLHFCQUFxQixHQUFHLE9BQU8sQ0FBQztJQUN0QyxPQUFPLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ2xDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNuRixDQUFDO0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLEdBQUc7SUFDbEMsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUVELE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxHQUFXO0lBQzlDLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ25DLENBQUM7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLElBQVksRUFBRSxRQUFnQjtJQUM1RCxPQUFPLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLFFBQVEsQ0FBQztBQUNqRCxDQUFDO0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLElBQVksRUFBRSxRQUFnQjtJQUM5RCxPQUFPLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN2RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNVcmxQYXRoRXF1YWwocGF0aCwgbGluaykge1xuICBjb25zdCBsb2NhdGlvblBhdGggPSBnZXRQYXRoUGFydE9mVXJsKHBhdGgpO1xuICByZXR1cm4gbGluayA9PT0gbG9jYXRpb25QYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNVcmxQYXRoQ29udGFpbihwYXRoLCBsaW5rKSB7XG4gIGNvbnN0IGxvY2F0aW9uUGF0aCA9IGdldFBhdGhQYXJ0T2ZVcmwocGF0aCk7XG4gIGNvbnN0IGVuZE9mVXJsU2VnbWVudFJlZ0V4cCA9IC9cXC98XiQvO1xuICByZXR1cm4gbG9jYXRpb25QYXRoLnN0YXJ0c1dpdGgobGluaykgJiZcbiAgICBsb2NhdGlvblBhdGguc2xpY2UobGluay5sZW5ndGgpLmNoYXJBdCgwKS5zZWFyY2goZW5kT2ZVcmxTZWdtZW50UmVnRXhwKSAhPT0gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXRoUGFydE9mVXJsKHVybCk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwubWF0Y2goLy4qPyg/PVs/OyNdfCQpLylbMF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGcmFnbWVudFBhcnRPZlVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IG1hdGNoZWQgPSB1cmwubWF0Y2goLyMoLispLyk7XG4gIHJldHVybiBtYXRjaGVkID8gbWF0Y2hlZFsxXSA6ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGcmFnbWVudEVxdWFsKHBhdGg6IHN0cmluZywgZnJhZ21lbnQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gZ2V0RnJhZ21lbnRQYXJ0T2ZVcmwocGF0aCkgPT09IGZyYWdtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGcmFnbWVudENvbnRhaW4ocGF0aDogc3RyaW5nLCBmcmFnbWVudDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBnZXRGcmFnbWVudFBhcnRPZlVybChwYXRoKS5pbmNsdWRlcyhmcmFnbWVudCk7XG59XG4iXX0=