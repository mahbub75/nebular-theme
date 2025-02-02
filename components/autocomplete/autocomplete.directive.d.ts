/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { AfterViewInit, ChangeDetectorRef, ComponentRef, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
import { NbOverlayRef, NbScrollStrategy } from '../cdk/overlay/mapping';
import { NbTriggerStrategy, NbTriggerStrategyBuilderService } from '../cdk/overlay/overlay-trigger';
import { NbOverlayService } from '../cdk/overlay/overlay-service';
import { NbAdjustableConnectedPositionStrategy, NbPositionBuilderService } from '../cdk/overlay/overlay-position';
import { NbActiveDescendantKeyManager, NbActiveDescendantKeyManagerFactoryService } from '../cdk/a11y/descendant-key-manager';
import { NbScrollStrategies } from '../cdk/adapter/block-scroll-strategy-adapter';
import { NbOptionComponent } from '../option/option.component';
import { NbAutocompleteComponent } from './autocomplete.component';
import * as i0 from "@angular/core";
/**
 * The `NbAutocompleteDirective` provides a capability to expand input with
 * `NbAutocompleteComponent` overlay containing options to select and fill input with.
 *
 * @stacked-example(Showcase, autocomplete/autocomplete-showcase.component)
 *
 * ### Installation
 *
 * Import `NbAutocompleteModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbAutocompleteModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * You can bind control with form controls or ngModel.
 *
 * @stacked-example(Autocomplete form binding, autocomplete/autocomplete-form.component)
 *
 * Options in the autocomplete may be grouped using `nb-option-group` component.
 *
 * @stacked-example(Grouping, autocomplete/autocomplete-group.component)
 *
 * Autocomplete may change selected option value via provided function.
 *
 * @stacked-example(Custom display, autocomplete/autocomplete-custom-display.component)
 *
 * Also, autocomplete may make first option in option list active automatically.
 *
 * @stacked-example(Active first, autocomplete/autocomplete-active-first.component)
 *
 * */
export declare class NbAutocompleteDirective<T> implements OnDestroy, AfterViewInit, ControlValueAccessor {
    protected hostRef: ElementRef;
    protected overlay: NbOverlayService;
    protected cd: ChangeDetectorRef;
    protected triggerStrategyBuilder: NbTriggerStrategyBuilderService;
    protected positionBuilder: NbPositionBuilderService;
    protected activeDescendantKeyManagerFactory: NbActiveDescendantKeyManagerFactoryService<NbOptionComponent<T>>;
    protected renderer: Renderer2;
    /**
     * NbAutocompleteComponent instance passed via input.
     * */
    protected _autocomplete: NbAutocompleteComponent<T>;
    /**
     * Trigger strategy used by overlay.
     * @docs-private
     * */
    protected triggerStrategy: NbTriggerStrategy;
    protected positionStrategy: NbAdjustableConnectedPositionStrategy;
    protected overlayRef: NbOverlayRef;
    protected keyManager: NbActiveDescendantKeyManager<NbOptionComponent<T>>;
    protected destroy$: Subject<void>;
    protected _onChange: (value: T) => void;
    protected _onTouched: () => void;
    /**
     * Determines is autocomplete overlay opened.
     * */
    get isOpen(): boolean;
    /**
     * Determines is autocomplete overlay closed.
     * */
    get isClosed(): boolean;
    /**
     * Provides autocomplete component.
     * */
    get autocomplete(): NbAutocompleteComponent<T>;
    set autocomplete(autocomplete: NbAutocompleteComponent<T>);
    /**
     * Determines options overlay offset (in pixels).
     **/
    overlayOffset: number;
    /**
     * Determines options overlay scroll strategy.
     **/
    scrollStrategy: NbScrollStrategies;
    customOverlayHost: ElementRef;
    get top(): boolean;
    get bottom(): boolean;
    role: string;
    ariaAutocomplete: string;
    hasPopup: string;
    get ariaExpanded(): string;
    get ariaOwns(): string;
    get ariaActiveDescendant(): string;
    constructor(hostRef: ElementRef, overlay: NbOverlayService, cd: ChangeDetectorRef, triggerStrategyBuilder: NbTriggerStrategyBuilderService, positionBuilder: NbPositionBuilderService, activeDescendantKeyManagerFactory: NbActiveDescendantKeyManagerFactoryService<NbOptionComponent<T>>, renderer: Renderer2);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    handleInput(): void;
    handleKeydown(): void;
    handleBlur(): void;
    show(): void;
    hide(): void;
    writeValue(value: T): void;
    registerOnChange(fn: (value: any) => {}): void;
    registerOnTouched(fn: any): void;
    setDisabledState(disabled: boolean): void;
    protected subscribeOnOptionClick(): void;
    protected subscribeOnPositionChange(): void;
    protected getActiveItem(): NbOptionComponent<T>;
    protected setupAutocomplete(): void;
    protected getDisplayValue(value: string): string;
    protected getContainer(): ComponentRef<any>;
    protected handleInputValueUpdate(value: T, focusInput?: boolean): void;
    protected subscribeOnTriggers(): void;
    protected createTriggerStrategy(): NbTriggerStrategy;
    protected createKeyManager(): void;
    protected setHostInputValue(value: any): void;
    protected createPositionStrategy(): NbAdjustableConnectedPositionStrategy;
    protected subscribeOnOverlayKeys(): void;
    protected setActiveItem(): void;
    protected attachToOverlay(): void;
    protected createOverlay(): void;
    protected initOverlay(): void;
    protected checkOverlayVisibility(): void;
    protected createScrollStrategy(): NbScrollStrategy;
    protected shouldShow(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbAutocompleteDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbAutocompleteDirective<any>, "input[nbAutocomplete]", never, { "autocomplete": { "alias": "nbAutocomplete"; "required": false; }; "overlayOffset": { "alias": "overlayOffset"; "required": false; }; "scrollStrategy": { "alias": "scrollStrategy"; "required": false; }; "customOverlayHost": { "alias": "customOverlayHost"; "required": false; }; }, {}, never, never, false, never>;
}
