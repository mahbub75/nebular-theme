import { Component, HostBinding, Inject, TemplateRef, ViewChild, Input, } from '@angular/core';
import { NbComponentPortal, NbTemplatePortal } from '../cdk/overlay/mapping';
import { NbOverlayContainerComponent } from '../cdk/overlay/overlay-container';
import { NB_WINDOW_CONTENT, NbWindowState, NB_WINDOW_CONTEXT } from './window.options';
import * as i0 from "@angular/core";
import * as i1 from "./window-ref";
import * as i2 from "./window.options";
import * as i3 from "../cdk/a11y/focus-trap";
import * as i4 from "@angular/common";
import * as i5 from "../cdk/overlay/overlay-container";
import * as i6 from "../card/card.component";
import * as i7 from "../icon/icon.component";
import * as i8 from "../button/button.component";
export class NbWindowComponent {
    get isFullScreen() {
        return this.windowRef.state === NbWindowState.FULL_SCREEN;
    }
    get maximized() {
        return this.windowRef.state === NbWindowState.MAXIMIZED;
    }
    get minimized() {
        return this.windowRef.state === NbWindowState.MINIMIZED;
    }
    get showMinimize() {
        return this.config.buttons.minimize;
    }
    get showMaximize() {
        return this.config.buttons.maximize;
    }
    get showFullScreen() {
        return this.config.buttons.fullScreen;
    }
    get showClose() {
        return this.config.buttons.close;
    }
    constructor(content, context, windowRef, config, focusTrapFactory, elementRef, renderer) {
        this.content = content;
        this.context = context;
        this.windowRef = windowRef;
        this.config = config;
        this.focusTrapFactory = focusTrapFactory;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    ngOnInit() {
        this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        this.focusTrap.blurPreviouslyFocusedElement();
        this.focusTrap.focusInitialElement();
        if (this.config.windowClass) {
            this.renderer.addClass(this.elementRef.nativeElement, this.config.windowClass);
        }
    }
    ngAfterViewChecked() {
        if (!this.overlayContainer || this.overlayContainer.isAttached) {
            return;
        }
        if (this.content instanceof TemplateRef) {
            this.attachTemplate();
        }
        else {
            this.attachComponent();
        }
    }
    ngOnDestroy() {
        if (this.focusTrap) {
            this.focusTrap.restoreFocus();
        }
        this.close();
    }
    minimize() {
        if (this.windowRef.state === NbWindowState.MINIMIZED) {
            this.windowRef.toPreviousState();
        }
        else {
            this.windowRef.minimize();
        }
    }
    maximize() {
        this.windowRef.maximize();
    }
    fullScreen() {
        this.windowRef.fullScreen();
    }
    maximizeOrFullScreen() {
        if (this.windowRef.state === NbWindowState.MINIMIZED && this.showMaximize) {
            this.maximize();
        }
        else {
            this.fullScreen();
        }
    }
    close() {
        this.windowRef.close();
    }
    attachTemplate() {
        this.overlayContainer.attachTemplatePortal(new NbTemplatePortal(this.content, null, this.context));
    }
    attachComponent() {
        const portal = new NbComponentPortal(this.content, null, null, this.cfr);
        const ref = this.overlayContainer.attachComponentPortal(portal, this.context);
        this.windowRef.componentInstance = ref.instance;
        ref.changeDetectorRef.detectChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbWindowComponent, deps: [{ token: NB_WINDOW_CONTENT }, { token: NB_WINDOW_CONTEXT }, { token: i1.NbWindowRef }, { token: i2.NbWindowConfig }, { token: i3.NbFocusTrapFactoryService }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: NbWindowComponent, selector: "nb-window", inputs: { cfr: "cfr" }, host: { properties: { "class.full-screen": "this.isFullScreen", "class.maximized": "this.maximized", "class.minimized": "this.minimized" } }, viewQueries: [{ propertyName: "overlayContainer", first: true, predicate: NbOverlayContainerComponent, descendants: true }], ngImport: i0, template: `
    <nb-card>
      <nb-card-header>
        <div *ngIf="config.titleTemplate; else textTitleTemplate" cdkFocusInitial tabindex="-1">
          <ng-container
            *ngTemplateOutlet="config.titleTemplate; context: { $implicit: config.titleTemplateContext }"
          ></ng-container>
        </div>

        <ng-template #textTitleTemplate>
          <div cdkFocusInitial class="title" tabindex="-1">{{ config.title }}</div>
        </ng-template>

        <div class="buttons">
          <ng-container *ngIf="showMinimize">
            <button nbButton ghost (click)="minimize()">
              <nb-icon icon="minus-outline" pack="nebular-essentials"></nb-icon>
            </button>
          </ng-container>

          <ng-container *ngIf="showMaximize">
            <button nbButton ghost *ngIf="isFullScreen" (click)="maximize()">
              <nb-icon icon="collapse-outline" pack="nebular-essentials"></nb-icon>
            </button>
          </ng-container>

          <ng-container *ngIf="showFullScreen">
            <button nbButton ghost *ngIf="minimized || maximized" (click)="maximizeOrFullScreen()">
              <nb-icon icon="expand-outline" pack="nebular-essentials"></nb-icon>
            </button>
          </ng-container>

          <ng-container *ngIf="showClose">
            <button nbButton ghost (click)="close()">
              <nb-icon icon="close-outline" pack="nebular-essentials"></nb-icon>
            </button>
          </ng-container>
        </div>
      </nb-card-header>
      <nb-card-body *ngIf="maximized || isFullScreen">
        <nb-overlay-container></nb-overlay-container>
      </nb-card-body>
    </nb-card>
  `, isInline: true, styles: [":host{flex:1 0 auto;min-width:20rem}:host nb-card{margin:0}:host nb-card-header{display:flex;justify-content:space-between;align-items:center;overflow:hidden}:host .title{flex:1 0 auto;margin-right:3rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .buttons{width:9.5rem;display:flex;justify-content:flex-end}:host .buttons [nbButton]{flex:0 0 3rem}:host(.full-screen){position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}:host(.maximized) nb-card{border-bottom-left-radius:0;border-bottom-right-radius:0}:host(.minimized) nb-card{border-bottom-left-radius:0;border-bottom-right-radius:0;height:auto}:host(.minimized) nb-card nb-card-header{border-bottom:none}\n"], dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i5.NbOverlayContainerComponent, selector: "nb-overlay-container" }, { kind: "component", type: i6.NbCardComponent, selector: "nb-card", inputs: ["size", "status", "accent"] }, { kind: "component", type: i6.NbCardBodyComponent, selector: "nb-card-body" }, { kind: "component", type: i6.NbCardHeaderComponent, selector: "nb-card-header" }, { kind: "component", type: i7.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }, { kind: "component", type: i8.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbWindowComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-window', template: `
    <nb-card>
      <nb-card-header>
        <div *ngIf="config.titleTemplate; else textTitleTemplate" cdkFocusInitial tabindex="-1">
          <ng-container
            *ngTemplateOutlet="config.titleTemplate; context: { $implicit: config.titleTemplateContext }"
          ></ng-container>
        </div>

        <ng-template #textTitleTemplate>
          <div cdkFocusInitial class="title" tabindex="-1">{{ config.title }}</div>
        </ng-template>

        <div class="buttons">
          <ng-container *ngIf="showMinimize">
            <button nbButton ghost (click)="minimize()">
              <nb-icon icon="minus-outline" pack="nebular-essentials"></nb-icon>
            </button>
          </ng-container>

          <ng-container *ngIf="showMaximize">
            <button nbButton ghost *ngIf="isFullScreen" (click)="maximize()">
              <nb-icon icon="collapse-outline" pack="nebular-essentials"></nb-icon>
            </button>
          </ng-container>

          <ng-container *ngIf="showFullScreen">
            <button nbButton ghost *ngIf="minimized || maximized" (click)="maximizeOrFullScreen()">
              <nb-icon icon="expand-outline" pack="nebular-essentials"></nb-icon>
            </button>
          </ng-container>

          <ng-container *ngIf="showClose">
            <button nbButton ghost (click)="close()">
              <nb-icon icon="close-outline" pack="nebular-essentials"></nb-icon>
            </button>
          </ng-container>
        </div>
      </nb-card-header>
      <nb-card-body *ngIf="maximized || isFullScreen">
        <nb-overlay-container></nb-overlay-container>
      </nb-card-body>
    </nb-card>
  `, styles: [":host{flex:1 0 auto;min-width:20rem}:host nb-card{margin:0}:host nb-card-header{display:flex;justify-content:space-between;align-items:center;overflow:hidden}:host .title{flex:1 0 auto;margin-right:3rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .buttons{width:9.5rem;display:flex;justify-content:flex-end}:host .buttons [nbButton]{flex:0 0 3rem}:host(.full-screen){position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}:host(.maximized) nb-card{border-bottom-left-radius:0;border-bottom-right-radius:0}:host(.minimized) nb-card{border-bottom-left-radius:0;border-bottom-right-radius:0;height:auto}:host(.minimized) nb-card nb-card-header{border-bottom:none}\n"] }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_WINDOW_CONTENT]
                }] }, { type: Object, decorators: [{
                    type: Inject,
                    args: [NB_WINDOW_CONTEXT]
                }] }, { type: i1.NbWindowRef }, { type: i2.NbWindowConfig }, { type: i3.NbFocusTrapFactoryService }, { type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { cfr: [{
                type: Input
            }], isFullScreen: [{
                type: HostBinding,
                args: ['class.full-screen']
            }], maximized: [{
                type: HostBinding,
                args: ['class.maximized']
            }], minimized: [{
                type: HostBinding,
                args: ['class.minimized']
            }], overlayContainer: [{
                type: ViewChild,
                args: [NbOverlayContainerComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy93aW5kb3cvd2luZG93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFdBQVcsRUFDWCxNQUFNLEVBR04sV0FBVyxFQUVYLFNBQVMsRUFHVCxLQUFLLEdBRU4sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFtQixnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxpQkFBaUIsRUFBa0IsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7QUFtRHZHLE1BQU0sT0FBTyxpQkFBaUI7SUFHNUIsSUFDSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssS0FBSyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQzVELENBQUM7SUFFRCxJQUNJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxLQUFLLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDMUQsQ0FBQztJQUVELElBQ0ksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEtBQUssYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJ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XG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFR5cGUsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgSW5wdXQsXG4gIEFmdGVyVmlld0NoZWNrZWQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmJGb2N1c1RyYXAsIE5iRm9jdXNUcmFwRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuLi9jZGsvYTExeS9mb2N1cy10cmFwJztcbmltcG9ydCB7IE5iQ29tcG9uZW50UG9ydGFsLCBOYkNvbXBvbmVudFR5cGUsIE5iVGVtcGxhdGVQb3J0YWwgfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9tYXBwaW5nJztcbmltcG9ydCB7IE5iT3ZlcmxheUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4uL2Nkay9vdmVybGF5L292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7IE5CX1dJTkRPV19DT05URU5ULCBOYldpbmRvd0NvbmZpZywgTmJXaW5kb3dTdGF0ZSwgTkJfV0lORE9XX0NPTlRFWFQgfSBmcm9tICcuL3dpbmRvdy5vcHRpb25zJztcbmltcG9ydCB7IE5iV2luZG93UmVmIH0gZnJvbSAnLi93aW5kb3ctcmVmJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItd2luZG93JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmItY2FyZD5cbiAgICAgIDxuYi1jYXJkLWhlYWRlcj5cbiAgICAgICAgPGRpdiAqbmdJZj1cImNvbmZpZy50aXRsZVRlbXBsYXRlOyBlbHNlIHRleHRUaXRsZVRlbXBsYXRlXCIgY2RrRm9jdXNJbml0aWFsIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cImNvbmZpZy50aXRsZVRlbXBsYXRlOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29uZmlnLnRpdGxlVGVtcGxhdGVDb250ZXh0IH1cIlxuICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPG5nLXRlbXBsYXRlICN0ZXh0VGl0bGVUZW1wbGF0ZT5cbiAgICAgICAgICA8ZGl2IGNka0ZvY3VzSW5pdGlhbCBjbGFzcz1cInRpdGxlXCIgdGFiaW5kZXg9XCItMVwiPnt7IGNvbmZpZy50aXRsZSB9fTwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dNaW5pbWl6ZVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBuYkJ1dHRvbiBnaG9zdCAoY2xpY2spPVwibWluaW1pemUoKVwiPlxuICAgICAgICAgICAgICA8bmItaWNvbiBpY29uPVwibWludXMtb3V0bGluZVwiIHBhY2s9XCJuZWJ1bGFyLWVzc2VudGlhbHNcIj48L25iLWljb24+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93TWF4aW1pemVcIj5cbiAgICAgICAgICAgIDxidXR0b24gbmJCdXR0b24gZ2hvc3QgKm5nSWY9XCJpc0Z1bGxTY3JlZW5cIiAoY2xpY2spPVwibWF4aW1pemUoKVwiPlxuICAgICAgICAgICAgICA8bmItaWNvbiBpY29uPVwiY29sbGFwc2Utb3V0bGluZVwiIHBhY2s9XCJuZWJ1bGFyLWVzc2VudGlhbHNcIj48L25iLWljb24+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93RnVsbFNjcmVlblwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBuYkJ1dHRvbiBnaG9zdCAqbmdJZj1cIm1pbmltaXplZCB8fCBtYXhpbWl6ZWRcIiAoY2xpY2spPVwibWF4aW1pemVPckZ1bGxTY3JlZW4oKVwiPlxuICAgICAgICAgICAgICA8bmItaWNvbiBpY29uPVwiZXhwYW5kLW91dGxpbmVcIiBwYWNrPVwibmVidWxhci1lc3NlbnRpYWxzXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd0Nsb3NlXCI+XG4gICAgICAgICAgICA8YnV0dG9uIG5iQnV0dG9uIGdob3N0IChjbGljayk9XCJjbG9zZSgpXCI+XG4gICAgICAgICAgICAgIDxuYi1pY29uIGljb249XCJjbG9zZS1vdXRsaW5lXCIgcGFjaz1cIm5lYnVsYXItZXNzZW50aWFsc1wiPjwvbmItaWNvbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmItY2FyZC1oZWFkZXI+XG4gICAgICA8bmItY2FyZC1ib2R5ICpuZ0lmPVwibWF4aW1pemVkIHx8IGlzRnVsbFNjcmVlblwiPlxuICAgICAgICA8bmItb3ZlcmxheS1jb250YWluZXI+PC9uYi1vdmVybGF5LWNvbnRhaW5lcj5cbiAgICAgIDwvbmItY2FyZC1ib2R5PlxuICAgIDwvbmItY2FyZD5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vd2luZG93LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE5iV2luZG93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZ1bGwtc2NyZWVuJylcbiAgZ2V0IGlzRnVsbFNjcmVlbigpIHtcbiAgICByZXR1cm4gdGhpcy53aW5kb3dSZWYuc3RhdGUgPT09IE5iV2luZG93U3RhdGUuRlVMTF9TQ1JFRU47XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1heGltaXplZCcpXG4gIGdldCBtYXhpbWl6ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMud2luZG93UmVmLnN0YXRlID09PSBOYldpbmRvd1N0YXRlLk1BWElNSVpFRDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWluaW1pemVkJylcbiAgZ2V0IG1pbmltaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy53aW5kb3dSZWYuc3RhdGUgPT09IE5iV2luZG93U3RhdGUuTUlOSU1JWkVEO1xuICB9XG5cbiAgZ2V0IHNob3dNaW5pbWl6ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuYnV0dG9ucy5taW5pbWl6ZTtcbiAgfVxuXG4gIGdldCBzaG93TWF4aW1pemUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmJ1dHRvbnMubWF4aW1pemU7XG4gIH1cblxuICBnZXQgc2hvd0Z1bGxTY3JlZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmJ1dHRvbnMuZnVsbFNjcmVlbjtcbiAgfVxuXG4gIGdldCBzaG93Q2xvc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmJ1dHRvbnMuY2xvc2U7XG4gIH1cblxuICBAVmlld0NoaWxkKE5iT3ZlcmxheUNvbnRhaW5lckNvbXBvbmVudCkgb3ZlcmxheUNvbnRhaW5lcjogTmJPdmVybGF5Q29udGFpbmVyQ29tcG9uZW50O1xuXG4gIHByb3RlY3RlZCBmb2N1c1RyYXA6IE5iRm9jdXNUcmFwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoTkJfV0lORE9XX0NPTlRFTlQpIHB1YmxpYyBjb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+IHwgTmJDb21wb25lbnRUeXBlLFxuICAgIEBJbmplY3QoTkJfV0lORE9XX0NPTlRFWFQpIHB1YmxpYyBjb250ZXh0OiBPYmplY3QsXG4gICAgcHVibGljIHdpbmRvd1JlZjogTmJXaW5kb3dSZWYsXG4gICAgcHVibGljIGNvbmZpZzogTmJXaW5kb3dDb25maWcsXG4gICAgcHJvdGVjdGVkIGZvY3VzVHJhcEZhY3Rvcnk6IE5iRm9jdXNUcmFwRmFjdG9yeVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZvY3VzVHJhcCA9IHRoaXMuZm9jdXNUcmFwRmFjdG9yeS5jcmVhdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuZm9jdXNUcmFwLmJsdXJQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcbiAgICB0aGlzLmZvY3VzVHJhcC5mb2N1c0luaXRpYWxFbGVtZW50KCk7XG5cbiAgICBpZiAodGhpcy5jb25maWcud2luZG93Q2xhc3MpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY29uZmlnLndpbmRvd0NsYXNzKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgaWYgKCF0aGlzLm92ZXJsYXlDb250YWluZXIgfHwgdGhpcy5vdmVybGF5Q29udGFpbmVyLmlzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250ZW50IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuYXR0YWNoVGVtcGxhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdHRhY2hDb21wb25lbnQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5mb2N1c1RyYXApIHtcbiAgICAgIHRoaXMuZm9jdXNUcmFwLnJlc3RvcmVGb2N1cygpO1xuICAgIH1cblxuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIG1pbmltaXplKCkge1xuICAgIGlmICh0aGlzLndpbmRvd1JlZi5zdGF0ZSA9PT0gTmJXaW5kb3dTdGF0ZS5NSU5JTUlaRUQpIHtcbiAgICAgIHRoaXMud2luZG93UmVmLnRvUHJldmlvdXNTdGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndpbmRvd1JlZi5taW5pbWl6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1heGltaXplKCkge1xuICAgIHRoaXMud2luZG93UmVmLm1heGltaXplKCk7XG4gIH1cblxuICBmdWxsU2NyZWVuKCkge1xuICAgIHRoaXMud2luZG93UmVmLmZ1bGxTY3JlZW4oKTtcbiAgfVxuXG4gIG1heGltaXplT3JGdWxsU2NyZWVuKCkge1xuICAgIGlmICh0aGlzLndpbmRvd1JlZi5zdGF0ZSA9PT0gTmJXaW5kb3dTdGF0ZS5NSU5JTUlaRUQgJiYgdGhpcy5zaG93TWF4aW1pemUpIHtcbiAgICAgIHRoaXMubWF4aW1pemUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mdWxsU2NyZWVuKCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy53aW5kb3dSZWYuY2xvc2UoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhdHRhY2hUZW1wbGF0ZSgpIHtcbiAgICB0aGlzLm92ZXJsYXlDb250YWluZXIuYXR0YWNoVGVtcGxhdGVQb3J0YWwoXG4gICAgICBuZXcgTmJUZW1wbGF0ZVBvcnRhbCh0aGlzLmNvbnRlbnQgYXMgVGVtcGxhdGVSZWY8YW55PiwgbnVsbCwgdGhpcy5jb250ZXh0KSxcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGF0dGFjaENvbXBvbmVudCgpIHtcbiAgICBjb25zdCBwb3J0YWwgPSBuZXcgTmJDb21wb25lbnRQb3J0YWwodGhpcy5jb250ZW50IGFzIFR5cGU8YW55PiwgbnVsbCwgbnVsbCwgdGhpcy5jZnIpO1xuICAgIGNvbnN0IHJlZiA9IHRoaXMub3ZlcmxheUNvbnRhaW5lci5hdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsLCB0aGlzLmNvbnRleHQpO1xuICAgIHRoaXMud2luZG93UmVmLmNvbXBvbmVudEluc3RhbmNlID0gcmVmLmluc3RhbmNlO1xuXG4gICAgcmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIl19