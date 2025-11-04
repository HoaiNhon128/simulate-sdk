import { WebEmbed } from './embed';
export declare class MCRSDK {
    instance: WebEmbed;
    private modal;
    private clientId;
    private email;
    private firstName;
    private lastName;
    private theme;
    constructor({ clientId, email, firstName, lastName, theme, }: {
        clientId: string;
        email: string;
        firstName: string;
        lastName: string;
        theme?: any;
    });
    open(): void;
    close(): void;
    init(frameUrl?: string, origin?: string): void;
    auth(): void;
    setTheme(theme: "light" | "dark"): void;
    onEvent(handler: (event: any) => void): void;
    isModalOpen(): boolean;
    toggle(): void;
    destroy(): void;
}
