import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ComponentRef, ElementRef, EventEmitter, OnDestroy, QueryList, SimpleChanges, OnChanges, Renderer2, NgZone } from '@angular/core';
import { NgClass } from '@angular/common';
import { ControlValueAccessor } from '@angular/forms';
import { ListKeyManager } from '@angular/cdk/a11y';
import { Subject, BehaviorSubject } from 'rxjs';
import { NbStatusService } from '../../services/status.service';
import { NbAdjustableConnectedPositionStrategy, NbPosition, NbPositionBuilderService } from '../cdk/overlay/overlay-position';
import { NbOverlayRef, NbPortalDirective, NbScrollStrategy } from '../cdk/overlay/mapping';
import { NbOverlayService } from '../cdk/overlay/overlay-service';
import { NbTriggerStrategy, NbTriggerStrategyBuilderService } from '../cdk/overlay/overlay-trigger';
import { NbFocusKeyManager, NbFocusKeyManagerFactoryService } from '../cdk/a11y/focus-key-manager';
import { NbComponentSize } from '../component-size';
import { NbComponentShape } from '../component-shape';
import { NbComponentOrCustomStatus } from '../component-status';
import { NbOptionComponent } from '../option/option.component';
import { NbBooleanInput } from '../helpers';
import { NbFormFieldControl } from '../form-field/form-field-control';
import { NbFocusMonitor } from '../cdk/a11y/a11y.module';
import { NbScrollStrategies } from '../cdk/adapter/block-scroll-strategy-adapter';
import { NbActiveDescendantKeyManager, NbActiveDescendantKeyManagerFactoryService } from '../cdk/a11y/descendant-key-manager';
import { NbSelectAppearance, NbSelectCompareFunction } from '../select/select.component';
import * as i0 from "@angular/core";
/**
 * Experimental component with autocomplete possibility.
 * Could be changed without any prior notice.
 * Use at your own risk.
 *
 * Style variables is fully inherited.
 * Component's public API (`@Input()` and `@Output()`) works in a same way as NbSelectComponent.
 */
export declare class NbSelectWithAutocompleteComponent implements OnChanges, AfterViewInit, AfterContentInit, OnDestroy, ControlValueAccessor, NbFormFieldControl {
    protected document: any;
    protected overlay: NbOverlayService;
    protected hostRef: ElementRef<HTMLElement>;
    protected positionBuilder: NbPositionBuilderService;
    protected triggerStrategyBuilder: NbTriggerStrategyBuilderService;
    protected cd: ChangeDetectorRef;
    protected focusKeyManagerFactoryService: NbFocusKeyManagerFactoryService<NbOptionComponent>;
    protected focusMonitor: NbFocusMonitor;
    protected renderer: Renderer2;
    protected zone: NgZone;
    protected statusService: NbStatusService;
    protected activeDescendantKeyManagerFactoryService: NbActiveDescendantKeyManagerFactoryService<NbOptionComponent>;
    /**
     * Select size, available sizes:
     * `tiny`, `small`, `medium` (default), `large`, `giant`
     */
    size: NbComponentSize;
    /**
     * Select status (adds specific styles):
     * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
     */
    status: NbComponentOrCustomStatus;
    /**
     * Select shapes: `rectangle` (default), `round`, `semi-round`
     */
    shape: NbComponentShape;
    /**
     * Select appearances: `outline` (default), `filled`, `hero`
     */
    appearance: NbSelectAppearance;
    /**
     * Specifies class to be set on `nb-option`s container (`nb-option-list`)
     * */
    optionsListClass: NgClass['ngClass'];
    /**
     * Specifies class for the overlay panel with options
     * */
    optionsPanelClass: string | string[];
    /**
     * Specifies width (in pixels) to be set on `nb-option`s container (`nb-option-list`)
     * */
    get optionsWidth(): number;
    set optionsWidth(value: number);
    protected _optionsWidth: number | undefined;
    /**
     * Adds `outline` styles
     */
    get outline(): boolean;
    set outline(value: boolean);
    static ngAcceptInputType_outline: NbBooleanInput;
    /**
     * Adds `filled` styles
     */
    get filled(): boolean;
    set filled(value: boolean);
    static ngAcceptInputType_filled: NbBooleanInput;
    /**
     * Adds `hero` styles
     */
    get hero(): boolean;
    set hero(value: boolean);
    static ngAcceptInputType_hero: NbBooleanInput;
    /**
     * Disables the select
     */
    get disabled(): boolean;
    set disabled(value: boolean);
    protected _disabled: boolean;
    static ngAcceptInputType_disabled: NbBooleanInput;
    /**
     * If set element will fill its container
     */
    get fullWidth(): boolean;
    set fullWidth(value: boolean);
    protected _fullWidth: boolean;
    static ngAcceptInputType_fullWidth: NbBooleanInput;
    /**
     * Renders select placeholder if nothing selected.
     * */
    placeholder: string;
    /**
     * A function to compare option value with selected value.
     * By default, values are compared with strict equality (`===`).
     */
    get compareWith(): NbSelectCompareFunction;
    set compareWith(fn: NbSelectCompareFunction);
    protected _compareWith: NbSelectCompareFunction;
    /**
     * Accepts selected item or array of selected items.
     * */
    set selected(value: any);
    get selected(): any;
    /**
     * Gives capability just write `multiple` over the element.
     * */
    get multiple(): boolean;
    set multiple(value: boolean);
    protected _multiple: boolean;
    static ngAcceptInputType_multiple: NbBooleanInput;
    /**
     * Determines options overlay offset (in pixels).
     **/
    optionsOverlayOffset: number;
    /**
     * Determines options overlay scroll strategy.
     **/
    scrollStrategy: NbScrollStrategies;
    /**
     * Experimental input.
     * Could be changed without any prior notice.
     * Use at your own risk.
     *
     * It replaces the button with input when the select is opened.
     * That replacement provides a very basic API to implement options filtering functionality.
     * Filtering itself isn't implemented inside select.
     * So it should be implemented by the user.
     */
    set withOptionsAutocomplete(value: boolean);
    get withOptionsAutocomplete(): boolean;
    protected _withOptionsAutocomplete: boolean;
    get additionalClasses(): string[];
    /**
     * Will be emitted when selected value changes.
     * */
    selectedChange: EventEmitter<any>;
    selectOpen: EventEmitter<void>;
    selectClose: EventEmitter<void>;
    optionsAutocompleteInputChange: EventEmitter<string>;
    /**
     * List of `NbOptionComponent`'s components passed as content.
     * TODO maybe it would be better provide wrapper
     * */
    options: QueryList<NbOptionComponent>;
    /**
     * Custom select label, will be rendered instead of default enumeration with coma.
     * */
    customLabel: any;
    /**
     * NbCard with options content.
     * */
    portal: NbPortalDirective;
    button: ElementRef<HTMLButtonElement> | undefined;
    optionsAutocompleteInput: ElementRef<HTMLInputElement> | undefined;
    /**
     * Determines is select opened.
     * */
    get isOpen(): boolean;
    get isOptionsAutocompleteAllowed(): boolean;
    get isOptionsAutocompleteInputShown(): boolean;
    /**
     * List of selected options.
     * */
    selectionModel: NbOptionComponent[];
    positionStrategy$: BehaviorSubject<NbAdjustableConnectedPositionStrategy | undefined>;
    /**
     * Current overlay position because of we have to toggle overlayPosition
     * in [ngClass] direction and this directive can use only string.
     */
    overlayPosition: NbPosition;
    protected ref: NbOverlayRef;
    protected triggerStrategy: NbTriggerStrategy;
    protected alive: boolean;
    protected destroy$: Subject<void>;
    protected currentKeyManager: ListKeyManager<NbOptionComponent>;
    protected focusKeyManager: NbFocusKeyManager<NbOptionComponent>;
    protected activeDescendantKeyManager: NbActiveDescendantKeyManager<NbOptionComponent>;
    /**
     * If a user assigns value before content nb-options's rendered the value will be putted in this variable.
     * And then applied after content rendered.
     * Only the last value will be applied.
     * */
    protected queue: any;
    /**
     * Function passed through control value accessor to propagate changes.
     * */
    protected onChange: Function;
    protected onTouched: Function;
    status$: BehaviorSubject<string>;
    size$: BehaviorSubject<NbComponentSize>;
    focused$: BehaviorSubject<boolean>;
    disabled$: BehaviorSubject<boolean>;
    fullWidth$: BehaviorSubject<boolean>;
    constructor(document: any, overlay: NbOverlayService, hostRef: ElementRef<HTMLElement>, positionBuilder: NbPositionBuilderService, triggerStrategyBuilder: NbTriggerStrategyBuilderService, cd: ChangeDetectorRef, focusKeyManagerFactoryService: NbFocusKeyManagerFactoryService<NbOptionComponent>, focusMonitor: NbFocusMonitor, renderer: Renderer2, zone: NgZone, statusService: NbStatusService, activeDescendantKeyManagerFactoryService: NbActiveDescendantKeyManagerFactoryService<NbOptionComponent>);
    /**
     * Determines is select hidden.
     * */
    get isHidden(): boolean;
    /**
     * Returns width of the select button.
     * */
    get hostWidth(): number;
    lastShownButtonWidth: number | undefined;
    get selectButtonClasses(): string[];
    /**
     * Content rendered in the label.
     * */
    get selectionView(): any;
    ngOnChanges({ disabled, status, size, fullWidth }: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onAutocompleteInputChange(event: Event): void;
    show(): void;
    hide(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
    /**
     * Selects option or clear all selected options if value is null.
     * */
    protected handleOptionClick(option: NbOptionComponent): void;
    /**
     * Deselect all selected options.
     * */
    protected reset(): void;
    /**
     * Determines how to select option as multiple or single.
     * */
    protected selectOption(option: NbOptionComponent): void;
    /**
     * Select single option.
     * */
    protected handleSingleSelect(option: NbOptionComponent): void;
    /**
     * Select for multiple options.
     * */
    protected handleMultipleSelect(option: NbOptionComponent): void;
    protected attachToOverlay(): void;
    protected setActiveOption(): void;
    protected createOverlay(): void;
    protected createKeyManager(): void;
    protected updateCurrentKeyManager(): void;
    protected resetAutocompleteInput(): void;
    protected createPositionStrategy(): NbAdjustableConnectedPositionStrategy;
    protected updatePositionStrategy(): void;
    protected createScrollStrategy(): NbScrollStrategy;
    protected createTriggerStrategy(): NbTriggerStrategy;
    protected subscribeOnTriggers(): void;
    protected subscribeOnPositionChange(): void;
    protected subscribeOnOptionClick(): void;
    protected subscribeOnOverlayKeys(): void;
    protected subscribeOnOptionsAutocompleteChange(): void;
    protected subscribeOnButtonFocus(): void;
    protected getContainer(): ComponentRef<any>;
    protected focusButton(): void;
    /**
     * Propagate selected value.
     * */
    protected emitSelected(selected: any): void;
    /**
     * Set selected value in model.
     * */
    protected setSelection(value: any): void;
    /**
     * Selects value.
     * */
    protected selectValue(value: any): void;
    protected shouldShow(): boolean;
    /**
     * Sets touched if focus moved outside of button and overlay,
     * ignoring the case when focus moved to options overlay.
     */
    trySetTouched(): void;
    protected isClickedWithinComponent($event: Event): boolean;
    protected canSelectValue(): boolean;
    protected isOptionHidden(option: NbOptionComponent): boolean;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    get primary(): boolean;
    get info(): boolean;
    get success(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get rectangle(): boolean;
    get round(): boolean;
    get semiRound(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSelectWithAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbSelectWithAutocompleteComponent, "nb-select-with-autocomplete", never, { "size": { "alias": "size"; "required": false; }; "status": { "alias": "status"; "required": false; }; "shape": { "alias": "shape"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "optionsListClass": { "alias": "optionsListClass"; "required": false; }; "optionsPanelClass": { "alias": "optionsPanelClass"; "required": false; }; "optionsWidth": { "alias": "optionsWidth"; "required": false; }; "outline": { "alias": "outline"; "required": false; }; "filled": { "alias": "filled"; "required": false; }; "hero": { "alias": "hero"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "fullWidth": { "alias": "fullWidth"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "compareWith": { "alias": "compareWith"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "optionsOverlayOffset": { "alias": "optionsOverlayOffset"; "required": false; }; "scrollStrategy": { "alias": "scrollStrategy"; "required": false; }; "withOptionsAutocomplete": { "alias": "withOptionsAutocomplete"; "required": false; }; }, { "selectedChange": "selectedChange"; "selectOpen": "selectOpen"; "selectClose": "selectClose"; "optionsAutocompleteInputChange": "optionsAutocompleteInputChange"; }, ["customLabel", "options"], ["nb-select-label", "nb-option, nb-option-group"], false, never>;
}
