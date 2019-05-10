import { MailConfig, SendgridConfig } from 'tellimail'
import { MailDriver } from './drivers/driver'
import { SendgridDriver } from './drivers/sendgrid'
import TestDriver from './drivers/test'

export default function mail(config: MailConfig | SendgridConfig): MailDriver {
  if ((config as SendgridConfig).driver === 'sendgrid') {
    return new SendgridDriver(config as SendgridConfig)
  }

  return new TestDriver(config)
}
