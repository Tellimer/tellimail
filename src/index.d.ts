import Vue, { ComponentOptions } from 'vue'

declare module 'tellimail' {

  export function mail(config: MailConfig): TestDriver;
  export function mail(config: SendgridDriver): SendgridDriver;

  export abstract class MailDriver {
    public config: MailConfig;
    public constructor(config: MailConfig);
    protected check(mailable: MailableBase): boolean;
    public send(mailable: MailableBase): Promise<boolean>;
    public send(mailable: MailableBase, callback: CallableFunction): Promise<boolean>;
    protected abstract transport(mailable: MailableBase): Promise<boolean>;
    protected abstract transport(mailable: MailableBase, callback: CallableFunction): Promise<boolean>;
  }

  export class View {
    protected template: string;
    protected mixin: ComponentOptions<Vue> | typeof Vue;
    protected cssThemeFile: string;
    public constructor(template: string);
    public constructor(template: string, mixin: ComponentOptions<Vue> | typeof Vue);
    public constructor(template: string, mixin: ComponentOptions<Vue> | typeof Vue, cssThemeFile: string);
    public render(): Promise<string>;
  }

  export class SendgridDriver extends MailDriver {
    public config: SendgridConfig;
    public constructor(config: SendgridConfig);
    public send(mailable: MailableBase): Promise<boolean>;
    public send(mailable: MailableBase, callback: CallableFunction): Promise<boolean>;
    protected transport(mailable: MailableBase): Promise<boolean>;
    protected transport(mailable: MailableBase, callback: CallableFunction): Promise<boolean>;
  }

  export class TestDriver {
    public config: MailConfig;
    public constructor(config: MailConfig);
    public send(mailable: MailableBase): Promise<boolean>;
    public send(mailable: MailableBase, callback: CallableFunction): Promise<boolean>;
    protected transport(mailable: MailableBase): Promise<boolean>;
    protected transport(mailable: MailableBase, callback: CallableFunction): Promise<boolean>;
  }

  export interface MailablePerson {
    email: string;
    name?: string;
    user?: any;
  }

  export interface MailablePersonalization {
    to: MailablePerson[];
    custom_args?: Record<string, string>;
    substitutions?: Record<string, string>;
  }

  export abstract class MailableBase {
    public uuid: string;
    public abstract view(): View;
    public abstract view(): Promise<View>;
    public abstract build(): void;
    public render(): Promise<string>;
    public from: MailablePerson;
    public categories: string[];
    public subject: string;
    public personalizations: MailablePersonalization[];
    public withSubject(subject: string): MailableBase;
    public withCategories(categories: string[]): MailableBase;
    public withPersonalizations(personalizations: MailablePersonalization[]): MailableBase;
    public to(obj: MailablePersonalization): MailableBase;
    public to(obj: MailablePerson): MailableBase;
  }

  export class Mailable extends MailableBase {
    protected _view: View | Promise<View>;
    protected buildCallback: (mailable: Mailable) => void;
    public constructor(view: View);
    public constructor(view: Promise<View>);
    public constructor(view: View, buildCallback: (mailable: Mailable) => void);
    public constructor(view: View | Promise<View>, buildCallback: (mailable: Mailable) => void);
    public build(): void;
    public view(): Promise<View>;
    public view(): View;
  }

  export interface MailConfig {
    defaultFrom: MailablePerson;
  }

  export interface SendgridConfig extends MailConfig {
    driver: 'sendgrid';
    sandbox?: boolean;
    apiKey: string;
  }

  export function templateView(file: string): Promise<View>;
  export function templateView(file: string, mixin: ComponentOptions<Vue> | typeof Vue): Promise<View>;
  export function templateView(file: string, mixin: ComponentOptions<Vue> | typeof Vue, cssThemeFile: string): Promise<View>;
}
