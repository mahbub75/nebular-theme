/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbButtonModule } from '../button/button.module';
import { NbInputModule } from '../input/input.module';
import { NbIconModule } from '../icon/icon.module';
import { NbChatComponent } from './chat.component';
import { NbChatMessageComponent } from './chat-message.component';
import { NbChatFormComponent } from './chat-form.component';
import { NbChatMessageTextComponent } from './chat-message-text.component';
import { NbChatMessageFileComponent } from './chat-message-file.component';
import { NbChatMessageQuoteComponent } from './chat-message-quote.component';
import { NbChatMessageMapComponent } from './chat-message-map.component';
import { NbChatOptions } from './chat.options';
import { NbChatAvatarComponent } from './chat-avatar.component';
import { NbChatCustomMessageDirective } from './chat-custom-message.directive';
import { NbChatTitleDirective } from './chat-title.directive';
import * as i0 from "@angular/core";
const NB_CHAT_COMPONENTS = [
    NbChatComponent,
    NbChatMessageComponent,
    NbChatFormComponent,
    NbChatMessageTextComponent,
    NbChatMessageFileComponent,
    NbChatMessageQuoteComponent,
    NbChatMessageMapComponent,
    NbChatAvatarComponent,
];
const NB_CHAT_DIRECTIVES = [NbChatCustomMessageDirective, NbChatTitleDirective];
export class NbChatModule {
    static forRoot(options) {
        return {
            ngModule: NbChatModule,
            providers: [{ provide: NbChatOptions, useValue: options || {} }],
        };
    }
    static forChild(options) {
        return {
            ngModule: NbChatModule,
            providers: [{ provide: NbChatOptions, useValue: options || {} }],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbChatModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: NbChatModule, declarations: [NbChatComponent,
            NbChatMessageComponent,
            NbChatFormComponent,
            NbChatMessageTextComponent,
            NbChatMessageFileComponent,
            NbChatMessageQuoteComponent,
            NbChatMessageMapComponent,
            NbChatAvatarComponent, NbChatCustomMessageDirective, NbChatTitleDirective], imports: [NbSharedModule, NbIconModule, NbInputModule, NbButtonModule], exports: [NbChatComponent,
            NbChatMessageComponent,
            NbChatFormComponent,
            NbChatMessageTextComponent,
            NbChatMessageFileComponent,
            NbChatMessageQuoteComponent,
            NbChatMessageMapComponent,
            NbChatAvatarComponent, NbChatCustomMessageDirective, NbChatTitleDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbChatModule, imports: [NbSharedModule, NbIconModule, NbInputModule, NbButtonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NbChatModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NbSharedModule, NbIconModule, NbInputModule, NbButtonModule],
                    declarations: [...NB_CHAT_COMPONENTS, ...NB_CHAT_DIRECTIVES],
                    exports: [...NB_CHAT_COMPONENTS, ...NB_CHAT_DIRECTIVES],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2hhdC9jaGF0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTlELE1BQU0sa0JBQWtCLEdBQUc7SUFDekIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHFCQUFxQjtDQUN0QixDQUFDO0FBRUYsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLDRCQUE0QixFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFPaEYsTUFBTSxPQUFPLFlBQVk7SUFDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUF1QjtRQUNwQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxPQUFPLElBQUksRUFBRSxFQUFFLENBQUM7U0FDakUsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQXVCO1FBQ3JDLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE9BQU8sSUFBSSxFQUFFLEVBQUUsQ0FBQztTQUNqRSxDQUFDO0lBQ0osQ0FBQzs4R0FiVSxZQUFZOytHQUFaLFlBQVksaUJBakJ2QixlQUFlO1lBQ2Ysc0JBQXNCO1lBQ3RCLG1CQUFtQjtZQUNuQiwwQkFBMEI7WUFDMUIsMEJBQTBCO1lBQzFCLDJCQUEyQjtZQUMzQix5QkFBeUI7WUFDekIscUJBQXFCLEVBR0ssNEJBQTRCLEVBQUUsb0JBQW9CLGFBR2xFLGNBQWMsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsYUFickUsZUFBZTtZQUNmLHNCQUFzQjtZQUN0QixtQkFBbUI7WUFDbkIsMEJBQTBCO1lBQzFCLDBCQUEwQjtZQUMxQiwyQkFBMkI7WUFDM0IseUJBQXlCO1lBQ3pCLHFCQUFxQixFQUdLLDRCQUE0QixFQUFFLG9CQUFvQjsrR0FPakUsWUFBWSxZQUpiLGNBQWMsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWM7OzJGQUkxRCxZQUFZO2tCQUx4QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsQ0FBQztvQkFDdEUsWUFBWSxFQUFFLENBQUMsR0FBRyxrQkFBa0IsRUFBRSxHQUFHLGtCQUFrQixDQUFDO29CQUM1RCxPQUFPLEVBQUUsQ0FBQyxHQUFHLGtCQUFrQixFQUFFLEdBQUcsa0JBQWtCLENBQUM7aUJBQ3hEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYlNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IE5iQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTmJJbnB1dE1vZHVsZSB9IGZyb20gJy4uL2lucHV0L2lucHV0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYkljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2ljb24ubW9kdWxlJztcblxuaW1wb3J0IHsgTmJDaGF0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGF0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYkNoYXRNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jaGF0LW1lc3NhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE5iQ2hhdEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NoYXQtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJDaGF0TWVzc2FnZVRleHRDb21wb25lbnQgfSBmcm9tICcuL2NoYXQtbWVzc2FnZS10ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYkNoYXRNZXNzYWdlRmlsZUNvbXBvbmVudCB9IGZyb20gJy4vY2hhdC1tZXNzYWdlLWZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IE5iQ2hhdE1lc3NhZ2VRdW90ZUNvbXBvbmVudCB9IGZyb20gJy4vY2hhdC1tZXNzYWdlLXF1b3RlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYkNoYXRNZXNzYWdlTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9jaGF0LW1lc3NhZ2UtbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYkNoYXRPcHRpb25zIH0gZnJvbSAnLi9jaGF0Lm9wdGlvbnMnO1xuaW1wb3J0IHsgTmJDaGF0QXZhdGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jaGF0LWF2YXRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJDaGF0Q3VzdG9tTWVzc2FnZURpcmVjdGl2ZSB9IGZyb20gJy4vY2hhdC1jdXN0b20tbWVzc2FnZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmJDaGF0VGl0bGVEaXJlY3RpdmUgfSBmcm9tICcuL2NoYXQtdGl0bGUuZGlyZWN0aXZlJztcblxuY29uc3QgTkJfQ0hBVF9DT01QT05FTlRTID0gW1xuICBOYkNoYXRDb21wb25lbnQsXG4gIE5iQ2hhdE1lc3NhZ2VDb21wb25lbnQsXG4gIE5iQ2hhdEZvcm1Db21wb25lbnQsXG4gIE5iQ2hhdE1lc3NhZ2VUZXh0Q29tcG9uZW50LFxuICBOYkNoYXRNZXNzYWdlRmlsZUNvbXBvbmVudCxcbiAgTmJDaGF0TWVzc2FnZVF1b3RlQ29tcG9uZW50LFxuICBOYkNoYXRNZXNzYWdlTWFwQ29tcG9uZW50LFxuICBOYkNoYXRBdmF0YXJDb21wb25lbnQsXG5dO1xuXG5jb25zdCBOQl9DSEFUX0RJUkVDVElWRVMgPSBbTmJDaGF0Q3VzdG9tTWVzc2FnZURpcmVjdGl2ZSwgTmJDaGF0VGl0bGVEaXJlY3RpdmVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmJTaGFyZWRNb2R1bGUsIE5iSWNvbk1vZHVsZSwgTmJJbnB1dE1vZHVsZSwgTmJCdXR0b25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5OQl9DSEFUX0NPTVBPTkVOVFMsIC4uLk5CX0NIQVRfRElSRUNUSVZFU10sXG4gIGV4cG9ydHM6IFsuLi5OQl9DSEFUX0NPTVBPTkVOVFMsIC4uLk5CX0NIQVRfRElSRUNUSVZFU10sXG59KVxuZXhwb3J0IGNsYXNzIE5iQ2hhdE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KG9wdGlvbnM/OiBOYkNoYXRPcHRpb25zKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOYkNoYXRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5iQ2hhdE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTmJDaGF0T3B0aW9ucywgdXNlVmFsdWU6IG9wdGlvbnMgfHwge30gfV0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JDaGlsZChvcHRpb25zPzogTmJDaGF0T3B0aW9ucyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TmJDaGF0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOYkNoYXRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5iQ2hhdE9wdGlvbnMsIHVzZVZhbHVlOiBvcHRpb25zIHx8IHt9IH1dLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==