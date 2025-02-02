import * as i0 from "@angular/core";
/**
 *
 * Reveal card example:
 * @stacked-example(My example, reveal-card/reveal-card-showcase.component)
 *
 * As a content Reveal card accepts two instances of `nb-card` - for front and back sides.
 *
 * Basic reveal card configuration:
 *
 * ```html
 * <nb-reveal-card>
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
 * </nb-reveal-card>
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
 * Reveal Card with header and footer:
 * @stacked-example(With Header & Footer, reveal-card/reveal-card-full.component)
 *
 * Colored reveal-cards could be simply configured by providing a `status` property:
 * @stacked-example(Colored Card, reveal-card/reveal-card-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight card highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Card, reveal-card/reveal-card-accents.component)
 *
 * @additional-example(Multiple Sizes, reveal-card/reveal-card-sizes.component)
 */
export declare class NbRevealCardComponent {
    /**
     * Reveal state
     * @type boolean
     */
    revealed: boolean;
    /**
     * Show/hide toggle button to be able to control toggle from your code
     * @type {boolean}
     */
    showToggleButton: boolean;
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbRevealCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbRevealCardComponent, "nb-reveal-card", never, { "revealed": { "alias": "revealed"; "required": false; }; "showToggleButton": { "alias": "showToggleButton"; "required": false; }; }, {}, never, ["nb-card-front", "nb-card-back"], false, never>;
}
