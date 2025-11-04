import { WebEmbed } from './embed';
import { MCRSDK } from './sdk';
export { WebEmbed };
export type { WebEmbedOptions, HostToIframeEvents, IframeToHostEvents, EventHandler, } from './types';
declare global {
    interface Window {
        McbrEmbedSDK?: {
            WebEmbed: typeof WebEmbed;
        };
        MCRSDK?: typeof MCRSDK;
    }
}
