/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbInputDirective } from './input.directive';
import * as i0 from "@angular/core";
const NB_INPUT_COMPONENTS = [
    NbInputDirective,
];
export class NbInputModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: NbInputModule, declarations: [NbInputDirective], imports: [NbSharedModule], exports: [NbInputDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbInputModule, imports: [NbSharedModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbInputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NbSharedModule],
                    declarations: NB_INPUT_COMPONENTS,
                    exports: NB_INPUT_COMPONENTS,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2lucHV0L2lucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRXJELE1BQU0sbUJBQW1CLEdBQUc7SUFDMUIsZ0JBQWdCO0NBQ2pCLENBQUM7QUFPRixNQUFNLE9BQU8sYUFBYTs4R0FBYixhQUFhOytHQUFiLGFBQWEsaUJBUnhCLGdCQUFnQixhQUlMLGNBQWMsYUFKekIsZ0JBQWdCOytHQVFMLGFBQWEsWUFKYixjQUFjOzsyRkFJZCxhQUFhO2tCQUx6QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFFLGNBQWMsQ0FBRTtvQkFDM0IsWUFBWSxFQUFFLG1CQUFtQjtvQkFDakMsT0FBTyxFQUFFLG1CQUFtQjtpQkFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYlNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IE5iSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2lucHV0LmRpcmVjdGl2ZSc7XG5cbmNvbnN0IE5CX0lOUFVUX0NPTVBPTkVOVFMgPSBbXG4gIE5iSW5wdXREaXJlY3RpdmUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbIE5iU2hhcmVkTW9kdWxlIF0sXG4gIGRlY2xhcmF0aW9uczogTkJfSU5QVVRfQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogTkJfSU5QVVRfQ09NUE9ORU5UUyxcbn0pXG5leHBvcnQgY2xhc3MgTmJJbnB1dE1vZHVsZSB7fVxuIl19