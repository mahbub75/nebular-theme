import { NbChatOptions } from './chat.options';
import * as i0 from "@angular/core";
/**
 * Chat message component.
 */
export declare class NbChatMessageMapComponent {
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
     * Map latitude
     * @type {number}
     */
    latitude: number;
    /**
     * Map longitude
     * @type {number}
     */
    longitude: number;
    get file(): {
        url: string;
        type: string;
        icon: string;
    };
    mapKey: string;
    constructor(options: NbChatOptions);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbChatMessageMapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbChatMessageMapComponent, "nb-chat-message-map", never, { "message": { "alias": "message"; "required": false; }; "sender": { "alias": "sender"; "required": false; }; "date": { "alias": "date"; "required": false; }; "dateFormat": { "alias": "dateFormat"; "required": false; }; "latitude": { "alias": "latitude"; "required": false; }; "longitude": { "alias": "longitude"; "required": false; }; }, {}, never, never, false, never>;
}
