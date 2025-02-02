/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export interface NbChatMessageFileIconPreview {
    url: string;
    icon: string;
}
export interface NbChatMessageFileImagePreview {
    url: string;
    type: string;
}
export type NbChatMessageFile = NbChatMessageFileIconPreview | NbChatMessageFileImagePreview;
/**
 * Chat message component.
 */
export declare class NbChatMessageFileComponent {
    protected cd: ChangeDetectorRef;
    protected domSanitizer: DomSanitizer;
    readyFiles: any[];
    /**
     * Message sender
     * @type {string}
     */
    message: string;
    /**
     * Message sender
     * @type {string}
     */
    sender: string;
    /**
     * Message send date
     * @type {Date}
     */
    date: Date;
    /**
     * Message send date format, default 'shortTime'
     * @type {string}
     */
    dateFormat: string;
    /**
     * Message file path
     * @type {Date}
     */
    set files(files: NbChatMessageFile[]);
    constructor(cd: ChangeDetectorRef, domSanitizer: DomSanitizer);
    isImage(file: NbChatMessageFile): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbChatMessageFileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbChatMessageFileComponent, "nb-chat-message-file", never, { "message": { "alias": "message"; "required": false; }; "sender": { "alias": "sender"; "required": false; }; "date": { "alias": "date"; "required": false; }; "dateFormat": { "alias": "dateFormat"; "required": false; }; "files": { "alias": "files"; "required": false; }; }, {}, never, never, false, never>;
}
