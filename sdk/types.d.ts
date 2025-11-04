export type WebEmbedOptions = {
    container: HTMLElement | string;
    url: string;
    origin?: string;
    width?: string | number;
    height?: string | number;
    sandbox?: string;
    allow?: string;
    params?: Record<string, string | number | boolean | undefined | null>;
    clientId: string;
};
export type WebEmbedMessage = {
    type: string;
    payload?: unknown;
};
export type HostToIframeEvents = {
    type: "host:theme";
    payload: {
        theme: "light" | "dark";
    };
} | {
    type: "host:resize";
    payload: {
        width: number;
        height: number;
    };
} | {
    type: "host:partner-auth";
    payload: {
        email: string;
        firstName: string;
        lastName: string;
        clientId: string;
    };
};
export type IframeToHostEvents = {
    type: "ready";
} | {
    type: "handshake";
    payload?: {
        version?: string;
    };
} | {
    type: "error";
    payload: {
        message: string;
    };
} | {
    type: "open-thread";
    payload: {
        threadId: string;
    };
} | {
    type: "unread-count";
    payload: {
        count: number;
    };
};
export type EventHandler = (event: IframeToHostEvents) => void;
