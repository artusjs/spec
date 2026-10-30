import { ComponentType } from "react";
export declare type PreloadableComponent<T extends ComponentType<any>> = T & {
    preload: () => Promise<T>;
};
export declare function lazyWithPreload<T extends ComponentType<any>>(factory: () => Promise<{
    default: T;
}>): PreloadableComponent<T>;
export default lazyWithPreload;
