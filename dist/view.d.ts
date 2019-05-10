import Vue, { ComponentOptions } from 'vue';
export declare class View {
    protected template: string;
    protected mixin: ComponentOptions<Vue> | typeof Vue;
    protected cssThemeFile: string;
    constructor(template: string, mixin?: ComponentOptions<Vue> | typeof Vue, cssThemeFile?: string);
    render(): Promise<string>;
}
export declare function templateView(file: string, mixin?: ComponentOptions<Vue> | typeof Vue, cssThemeFile?: string): Promise<View>;
