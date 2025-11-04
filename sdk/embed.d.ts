import { WebEmbedOptions as WebEmbedOptions, EventHandler, HostToIframeEvents } from './types';
export declare class WebEmbed {
    #private;
    constructor(opts: WebEmbedOptions);
    mount(): this;
    unmount(): this;
    onEvent(handler: EventHandler): this;
    send(event: HostToIframeEvents): boolean;
    setSize(width?: string | number, height?: string | number): this;
    get iframe(): HTMLIFrameElement | undefined;
}
