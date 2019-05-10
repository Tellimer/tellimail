import { MailablePersonalization } from '../mailable';
import { MailDriver } from './driver';
import { MailableBase } from '..';
import { MailConfig } from '@/mail';
export interface SendgridConfig extends MailConfig {
    driver: 'sendgrid';
    sandbox?: boolean;
    apiKey: string;
}
export declare class SendgridDriver extends MailDriver {
    protected _config: SendgridConfig;
    readonly config: SendgridConfig;
    constructor(config: SendgridConfig);
    protected transport(mailable: MailableBase, callback?: CallableFunction): Promise<boolean>;
    protected sendTo(mailable: MailableBase, personalizations: MailablePersonalization[]): Promise<boolean>;
}
