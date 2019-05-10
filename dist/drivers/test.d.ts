import { MailablePersonalization } from '../mailable';
import { MailDriver } from './driver';
import { MailableBase } from '..';
export default class TestDriver extends MailDriver {
    static lastSendTo: MailablePersonalization[];
    transport(mailable: MailableBase, callback?: CallableFunction): Promise<boolean>;
}
