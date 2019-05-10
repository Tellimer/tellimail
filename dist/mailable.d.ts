import { View } from './view';
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
export declare abstract class MailableBase {
    uuid: string;
    constructor();
    abstract view(): View | Promise<View>;
    abstract build(): void;
    render(): Promise<string>;
    private _from;
    from: MailablePerson;
    private _categories;
    categories: string[];
    withCategories(categories: string[]): this;
    private _subject;
    subject: string;
    withSubject(subject: string): this;
    private _personalizations;
    personalizations: MailablePersonalization[];
    withPersonalizations(personalizations: MailablePersonalization[]): this;
    to(obj: MailablePersonalization | MailablePerson): this;
}
export declare class Mailable extends MailableBase {
    protected _view: View | Promise<View>;
    protected buildCallback: (mailable: Mailable) => void;
    constructor(view: View | Promise<View>, buildCallback?: (mailable: Mailable) => void);
    build(): void;
    view(): View | Promise<View>;
}
