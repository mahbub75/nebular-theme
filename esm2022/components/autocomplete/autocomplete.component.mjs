/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, HostBinding, Input, Output, ViewChild, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NbOptionComponent } from '../option/option.component';
import { NbPortalDirective } from '../cdk/overlay/mapping';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../cdk/overlay/mapping";
import * as i3 from "../option/option-list.component";
// Component class scoped counter for aria attributes.
let lastAutocompleteId = 0;
/**
 * The `NbAutocompleteComponent` overlay component.
 * Provides an `NbOptionList` overlay component.
 * */
export class NbAutocompleteComponent {
    get overlayPosition() {
        return this._overlayPosition;
    }
    set overlayPosition(value) {
        this._overlayPosition = value;
        // Need run change detection after first set from NbAutocompleteDirective
        this.cd.detectChanges();
    }
    /**
     * Returns width of the input.
     * */
    get hostWidth() {
        return this.hostRef.nativeElement.getBoundingClientRect().width;
    }
    /**
     * Specifies width (in pixels) to be set on `nb-option`s container (`nb-option-list`)
     * */
    get optionsWidth() {
        return this._optionsWidth ?? this.hostWidth;
    }
    set optionsWidth(value) {
        this._optionsWidth = value;
    }
    constructor(cd) {
        this.cd = cd;
        this.destroy$ = new Subject();
        /**
         * Component scoped id for aria attributes.
         * */
        this.id = `nb-autocomplete-${lastAutocompleteId++}`;
        /**
         * @docs-private
         * Current overlay position because of we have to toggle overlayPosition
         * in [ngClass] direction.
         */
        this._overlayPosition = '';
        /**
         * Autocomplete size, available sizes:
         * `tiny`, `small`, `medium` (default), `large`, `giant`
         */
        this.size = 'medium';
        /**
         * Flag passed as input to always make first option active.
         * */
        this.activeFirst = false;
        /**
         * Will be emitted when selected value changes.
         * */
        this.selectedChange = new EventEmitter();
    }
    ngAfterContentInit() {
        this.options.changes.pipe(takeUntil(this.destroy$)).subscribe(() => this.cd.detectChanges());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * Autocomplete knows nothing about host html input element.
     * So, attach method set input hostRef for styling.
     * */
    setHost(hostRef) {
        this.hostRef = hostRef;
    }
    /**
     * Propagate selected value.
     * */
    emitSelected(selected) {
        this.selectedChange.emit(selected);
    }
    get tiny() {
        return this.size === 'tiny';
    }
    get small() {
        return this.size === 'small';
    }
    get medium() {
        return this.size === 'medium';
    }
    get large() {
        return this.size === 'large';
    }
    get giant() {
        return this.size === 'giant';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbAutocompleteComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: NbAutocompleteComponent, selector: "nb-autocomplete", inputs: { handleDisplayFn: "handleDisplayFn", size: "size", activeFirst: "activeFirst", optionsListClass: "optionsListClass", optionsPanelClass: "optionsPanelClass", optionsWidth: "optionsWidth" }, outputs: { selectedChange: "selectedChange" }, host: { properties: { "class.size-tiny": "this.tiny", "class.size-small": "this.small", "class.size-medium": "this.medium", "class.size-large": "this.large", "class.size-giant": "this.giant" } }, queries: [{ propertyName: "options", predicate: NbOptionComponent, descendants: true }], viewQueries: [{ propertyName: "portal", first: true, predicate: NbPortalDirective, descendants: true }], ngImport: i0, template: "<nb-option-list *nbPortal\n                [size]=\"size\"\n                [position]=\"overlayPosition\"\n                [style.width.px]=\"optionsWidth\"\n                role=\"listbox\"\n                [id]=\"id\"\n                [class.empty]=\"!options?.length\"\n                [ngClass]=\"optionsListClass\">\n  <ng-content select=\"nb-option, nb-option-group\"></ng-content>\n</nb-option-list>\n", styles: ["/*\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host(:hover){cursor:pointer}nb-option-list.empty{border:none}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NbPortalDirective, selector: "[nbPortal]" }, { kind: "component", type: i3.NbOptionListComponent, selector: "nb-option-list", inputs: ["size", "position"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbAutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-autocomplete', changeDetection: ChangeDetectionStrategy.OnPush, template: "<nb-option-list *nbPortal\n                [size]=\"size\"\n                [position]=\"overlayPosition\"\n                [style.width.px]=\"optionsWidth\"\n                role=\"listbox\"\n                [id]=\"id\"\n                [class.empty]=\"!options?.length\"\n                [ngClass]=\"optionsListClass\">\n  <ng-content select=\"nb-option, nb-option-group\"></ng-content>\n</nb-option-list>\n", styles: ["/*\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host(:hover){cursor:pointer}nb-option-list.empty{border:none}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { handleDisplayFn: [{
                type: Input
            }], size: [{
                type: Input
            }], activeFirst: [{
                type: Input
            }], optionsListClass: [{
                type: Input
            }], optionsPanelClass: [{
                type: Input
            }], optionsWidth: [{
                type: Input
            }], selectedChange: [{
                type: Output
            }], options: [{
                type: ContentChildren,
                args: [NbOptionComponent, { descendants: true }]
            }], portal: [{
                type: ViewChild,
                args: [NbPortalDirective]
            }], tiny: [{
                type: HostBinding,
                args: ['class.size-tiny']
            }], small: [{
                type: HostBinding,
                args: ['class.size-small']
            }], medium: [{
                type: HostBinding,
                args: ['class.size-medium']
            }], large: [{
                type: HostBinding,
                args: ['class.size-large']
            }], giant: [{
                type: HostBinding,
                args: ['class.size-giant']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBRWYsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUVOLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFFM0Qsc0RBQXNEO0FBQ3RELElBQUksa0JBQWtCLEdBQVcsQ0FBQyxDQUFDO0FBRW5DOzs7S0FHSztBQU9MLE1BQU0sT0FBTyx1QkFBdUI7SUFvQmxDLElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxlQUFlLENBQUMsS0FBaUI7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5Qix5RUFBeUU7UUFDekUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQ7O1NBRUs7SUFDTCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFP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QU07c0JBRFQsV0FBVzt1QkFBQyxtQkFBbUI7Z0JBSzVCLEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxrQkFBa0I7Z0JBSzNCLEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDbGFzcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE5iQ29tcG9uZW50U2l6ZSB9IGZyb20gJy4uL2NvbXBvbmVudC1zaXplJztcbmltcG9ydCB7IE5iUG9zaXRpb24gfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9vdmVybGF5LXBvc2l0aW9uJztcbmltcG9ydCB7IE5iT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vb3B0aW9uL29wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJQb3J0YWxEaXJlY3RpdmUgfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9tYXBwaW5nJztcblxuLy8gQ29tcG9uZW50IGNsYXNzIHNjb3BlZCBjb3VudGVyIGZvciBhcmlhIGF0dHJpYnV0ZXMuXG5sZXQgbGFzdEF1dG9jb21wbGV0ZUlkOiBudW1iZXIgPSAwO1xuXG4vKipcbiAqIFRoZSBgTmJBdXRvY29tcGxldGVDb21wb25lbnRgIG92ZXJsYXkgY29tcG9uZW50LlxuICogUHJvdmlkZXMgYW4gYE5iT3B0aW9uTGlzdGAgb3ZlcmxheSBjb21wb25lbnQuXG4gKiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItYXV0b2NvbXBsZXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmJBdXRvY29tcGxldGVDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgZGVzdHJveSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBIVE1MIGlucHV0IHJlZmVyZW5jZSB0byB3aGljaCBhdXRvY29tcGxldGUgY29ubmVjdGVkLlxuICAgKiAqL1xuICBob3N0UmVmOiBFbGVtZW50UmVmO1xuXG4gIC8qKlxuICAgKiBDb21wb25lbnQgc2NvcGVkIGlkIGZvciBhcmlhIGF0dHJpYnV0ZXMuXG4gICAqICovXG4gIGlkOiBzdHJpbmcgPSBgbmItYXV0b2NvbXBsZXRlLSR7bGFzdEF1dG9jb21wbGV0ZUlkKyt9YDtcblxuICAvKipcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKiBDdXJyZW50IG92ZXJsYXkgcG9zaXRpb24gYmVjYXVzZSBvZiB3ZSBoYXZlIHRvIHRvZ2dsZSBvdmVybGF5UG9zaXRpb25cbiAgICogaW4gW25nQ2xhc3NdIGRpcmVjdGlvbi5cbiAgICovXG4gIF9vdmVybGF5UG9zaXRpb246IE5iUG9zaXRpb24gPSAnJyBhcyBOYlBvc2l0aW9uO1xuXG4gIGdldCBvdmVybGF5UG9zaXRpb24oKTogTmJQb3NpdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXlQb3NpdGlvbjtcbiAgfVxuXG4gIHNldCBvdmVybGF5UG9zaXRpb24odmFsdWU6IE5iUG9zaXRpb24pIHtcbiAgICB0aGlzLl9vdmVybGF5UG9zaXRpb24gPSB2YWx1ZTtcbiAgICAvLyBOZWVkIHJ1biBjaGFuZ2UgZGV0ZWN0aW9uIGFmdGVyIGZpcnN0IHNldCBmcm9tIE5iQXV0b2NvbXBsZXRlRGlyZWN0aXZlXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aWR0aCBvZiB0aGUgaW5wdXQuXG4gICAqICovXG4gIGdldCBob3N0V2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5ob3N0UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gIH1cblxuICAvKipcbiAgICogRnVuY3Rpb24gcGFzc2VkIGFzIGlucHV0IHRvIHByb2Nlc3MgZWFjaCBzdHJpbmcgb3B0aW9uIHZhbHVlIGJlZm9yZSByZW5kZXIuXG4gICAqICovXG4gIEBJbnB1dCgpIGhhbmRsZURpc3BsYXlGbjogKHZhbHVlOiBhbnkpID0+IHN0cmluZztcblxuICAvKipcbiAgICogQXV0b2NvbXBsZXRlIHNpemUsIGF2YWlsYWJsZSBzaXplczpcbiAgICogYHRpbnlgLCBgc21hbGxgLCBgbWVkaXVtYCAoZGVmYXVsdCksIGBsYXJnZWAsIGBnaWFudGBcbiAgICovXG4gIEBJbnB1dCgpIHNpemU6IE5iQ29tcG9uZW50U2l6ZSA9ICdtZWRpdW0nO1xuXG4gIC8qKlxuICAgKiBGbGFnIHBhc3NlZCBhcyBpbnB1dCB0byBhbHdheXMgbWFrZSBmaXJzdCBvcHRpb24gYWN0aXZlLlxuICAgKiAqL1xuICBASW5wdXQoKSBhY3RpdmVGaXJzdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgY2xhc3MgdG8gYmUgc2V0IG9uIGBuYi1vcHRpb25gcyBjb250YWluZXIgKGBuYi1vcHRpb24tbGlzdGApXG4gICAqICovXG4gIEBJbnB1dCgpIG9wdGlvbnNMaXN0Q2xhc3M6IE5nQ2xhc3NbJ25nQ2xhc3MnXTtcblxuICAvKipcbiAgICogU3BlY2lmaWVzIGNsYXNzIGZvciB0aGUgb3ZlcmxheSBwYW5lbCB3aXRoIG9wdGlvbnNcbiAgICogKi9cbiAgQElucHV0KCkgb3B0aW9uc1BhbmVsQ2xhc3M6IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgd2lkdGggKGluIHBpeGVscykgdG8gYmUgc2V0IG9uIGBuYi1vcHRpb25gcyBjb250YWluZXIgKGBuYi1vcHRpb24tbGlzdGApXG4gICAqICovXG4gIEBJbnB1dCgpXG4gIGdldCBvcHRpb25zV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9uc1dpZHRoID8/IHRoaXMuaG9zdFdpZHRoO1xuICB9XG4gIHNldCBvcHRpb25zV2lkdGgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX29wdGlvbnNXaWR0aCA9IHZhbHVlO1xuICB9XG4gIHByb3RlY3RlZCBfb3B0aW9uc1dpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIFdpbGwgYmUgZW1pdHRlZCB3aGVuIHNlbGVjdGVkIHZhbHVlIGNoYW5nZXMuXG4gICAqICovXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGBOYk9wdGlvbkNvbXBvbmVudGAncyBjb21wb25lbnRzIHBhc3NlZCBhcyBjb250ZW50LlxuICAgKiAqL1xuICBAQ29udGVudENoaWxkcmVuKE5iT3B0aW9uQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIG9wdGlvbnM6IFF1ZXJ5TGlzdDxOYk9wdGlvbkNvbXBvbmVudDxUPj47XG5cbiAgLyoqXG4gICAqIE5iT3B0aW9uTGlzdCB3aXRoIG9wdGlvbnMgY29udGVudC5cbiAgICogKi9cbiAgQFZpZXdDaGlsZChOYlBvcnRhbERpcmVjdGl2ZSkgcG9ydGFsOiBOYlBvcnRhbERpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLm9wdGlvbnMuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRvY29tcGxldGUga25vd3Mgbm90aGluZyBhYm91dCBob3N0IGh0bWwgaW5wdXQgZWxlbWVudC5cbiAgICogU28sIGF0dGFjaCBtZXRob2Qgc2V0IGlucHV0IGhvc3RSZWYgZm9yIHN0eWxpbmcuXG4gICAqICovXG4gIHNldEhvc3QoaG9zdFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMuaG9zdFJlZiA9IGhvc3RSZWY7XG4gIH1cblxuICAvKipcbiAgICogUHJvcGFnYXRlIHNlbGVjdGVkIHZhbHVlLlxuICAgKiAqL1xuICBlbWl0U2VsZWN0ZWQoc2VsZWN0ZWQ6IFQpIHtcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoc2VsZWN0ZWQpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLXRpbnknKVxuICBnZXQgdGlueSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAndGlueSc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLXNtYWxsJylcbiAgZ2V0IHNtYWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdzbWFsbCc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLW1lZGl1bScpXG4gIGdldCBtZWRpdW0oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ21lZGl1bSc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLWxhcmdlJylcbiAgZ2V0IGxhcmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdsYXJnZSc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLWdpYW50JylcbiAgZ2V0IGdpYW50KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdnaWFudCc7XG4gIH1cbn1cbiIsIjxuYi1vcHRpb24tbGlzdCAqbmJQb3J0YWxcbiAgICAgICAgICAgICAgICBbc2l6ZV09XCJzaXplXCJcbiAgICAgICAgICAgICAgICBbcG9zaXRpb25dPVwib3ZlcmxheVBvc2l0aW9uXCJcbiAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGgucHhdPVwib3B0aW9uc1dpZHRoXCJcbiAgICAgICAgICAgICAgICByb2xlPVwibGlzdGJveFwiXG4gICAgICAgICAgICAgICAgW2lkXT1cImlkXCJcbiAgICAgICAgICAgICAgICBbY2xhc3MuZW1wdHldPVwiIW9wdGlvbnM/Lmxlbmd0aFwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwib3B0aW9uc0xpc3RDbGFzc1wiPlxuICA8bmctY29udGVudCBzZWxlY3Q9XCJuYi1vcHRpb24sIG5iLW9wdGlvbi1ncm91cFwiPjwvbmctY29udGVudD5cbjwvbmItb3B0aW9uLWxpc3Q+XG4iXX0=