import * as i0 from "@angular/core";
/**
 *
 * Flip card example:
 * @stacked-example(Showcase, flip-card/flip-card-showcase.component)
 *
 * As a content Flip card accepts two instances of `nb-card` - for front and back sides.
 *
 * Basic flip card configuration:
 *
 * ```html
 * <nb-flip-card>
 *   <nb-card-front>
 *     <nb-card>
 *       <nb-card-body>
 *         Front
 *       </nb-card-body>
 *     </nb-card>
 *   </nb-card-front>
 *   <nb-card-back>
 *     <nb-card>
 *       <nb-card-body>
 *         Back
 *       </nb-card-body>
 *     </nb-card>
 *   </nb-card-back>
 * </nb-flip-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbCardModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCardModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Flip Card with header and footer:
 * @stacked-example(With Header & Footer, flip-card/flip-card-full.component.ts)
 *
 * Colored flip-cards could be simply configured by providing a `status` property:
 * @stacked-example(Colored Card, flip-card/flip-card-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight card highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Card, flip-card/flip-card-accents.component)
 *
 * @additional-example(Multiple Sizes, flip-card/flip-card-sizes.component)
 *
 */
export declare class NbFlipCardComponent {
    /**
     * Flip state
     * @type boolean
     */
    flipped: boolean;
    /**
     * Show/hide toggle button to be able to control toggle from your code
     * @type {boolean}
     */
    showToggleButton: boolean;
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFlipCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbFlipCardComponent, "nb-flip-card", never, { "flipped": { "alias": "flipped"; "required": false; }; "showToggleButton": { "alias": "showToggleButton"; "required": false; }; }, {}, never, ["nb-card-front", "nb-card-back"], false, never>;
}
