export type ModalOptions = {
    width?: string;
    height?: string;
    maxWidth?: string;
    maxHeight?: string;
    zIndex?: number;
    backdropOpacity?: number;
    closeOnBackdrop?: boolean;
    closeOnEscape?: boolean;
    showCloseButton?: boolean;
    containerClass?: string;
    backdropClass?: string;
};
export declare class Modal {
    private backdrop;
    private container;
    private closeBtn?;
    private isOpenFlag;
    private opts;
    private keydownHandler?;
    private backdropClickHandler?;
    constructor(options?: ModalOptions);
    private create;
    getContainer(): HTMLElement;
    open(): void;
    close(): void;
    toggle(): void;
    isOpen(): boolean;
    destroy(): void;
}
