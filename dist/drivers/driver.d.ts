import { MailableBase } from '../mailable';
import { MailConfig } from '../mail';
export declare abstract class MailDriver {
    protected _config: MailConfig;
    readonly config: MailConfig;
    constructor(config: MailConfig);
    protected check(mailable: MailableBase): boolean;
    send(mailable: MailableBase, callback?: CallableFunction): Promise<boolean>;
    protected abstract transport(mailable: MailableBase, callback?: CallableFunction): Promise<boolean>;
}
