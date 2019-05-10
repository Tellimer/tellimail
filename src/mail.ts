import { MailDriver } from './drivers/driver'
import { SendgridDriver, SendgridConfig } from './drivers/sendgrid'
import TestDriver from './drivers/test'
import { MailablePerson } from './mailable'

export interface MailConfig {
  defaultFrom: MailablePerson;
}

export default function mail(config: MailConfig | SendgridConfig): MailDriver {
  if ((config as SendgridConfig).driver === 'sendgrid') {
    return new SendgridDriver(config as SendgridConfig)
  }

  return new TestDriver(config)
}
