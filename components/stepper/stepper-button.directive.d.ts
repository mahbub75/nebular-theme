import { NbStepperComponent } from './stepper.component';
import * as i0 from "@angular/core";
export declare class NbStepperNextDirective {
    protected stepper: NbStepperComponent;
    type: string;
    constructor(stepper: NbStepperComponent);
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbStepperNextDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbStepperNextDirective, "button[nbStepperNext]", never, { "type": { "alias": "type"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class NbStepperPreviousDirective {
    protected stepper: NbStepperComponent;
    type: string;
    constructor(stepper: NbStepperComponent);
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbStepperPreviousDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbStepperPreviousDirective, "button[nbStepperPrevious]", never, { "type": { "alias": "type"; "required": false; }; }, {}, never, never, false, never>;
}
