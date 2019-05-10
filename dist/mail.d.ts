import { MailDriver } from './drivers/driver';
import { SendgridConfig } from './drivers/sendgrid';
import { MailablePerson } from './mailable';
export interface MailConfig {
    defaultFrom: MailablePerson;
}
export default function mail(config: MailConfig | SendgridConfig): MailDriver;
