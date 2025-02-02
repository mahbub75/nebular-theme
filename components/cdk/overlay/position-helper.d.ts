import { NbLayoutDirectionService } from '../../../services/direction.service';
import * as i0 from "@angular/core";
export declare enum NbGlobalLogicalPosition {
    TOP_START = "top-start",
    TOP_END = "top-end",
    BOTTOM_START = "bottom-start",
    BOTTOM_END = "bottom-end"
}
export declare enum NbGlobalPhysicalPosition {
    TOP_RIGHT = "top-right",
    TOP_LEFT = "top-left",
    BOTTOM_RIGHT = "bottom-right",
    BOTTOM_LEFT = "bottom-left"
}
export type NbGlobalPosition = NbGlobalPhysicalPosition | NbGlobalLogicalPosition;
export declare class NbPositionHelper {
    protected layoutDirection: NbLayoutDirectionService;
    constructor(layoutDirection: NbLayoutDirectionService);
    toLogicalPosition(position: NbGlobalPosition): NbGlobalLogicalPosition;
    toPhysicalPosition(position: NbGlobalPosition): NbGlobalPhysicalPosition;
    isTopPosition(position: NbGlobalPosition): boolean;
    isRightPosition(position: NbGlobalPosition): boolean;
    protected toLogicalPositionWhenLtr(position: NbGlobalPhysicalPosition): NbGlobalLogicalPosition;
    protected toLogicalPositionWhenRtl(position: NbGlobalPhysicalPosition): NbGlobalLogicalPosition;
    protected toPhysicalPositionWhenLtr(position: NbGlobalLogicalPosition): NbGlobalPhysicalPosition;
    protected toPhysicalPositionWhenRtl(position: NbGlobalLogicalPosition): NbGlobalPhysicalPosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbPositionHelper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbPositionHelper>;
}
