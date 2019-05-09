import { MailConfig, SendgridConfig } from 'tellimail'
import { MailDriver } from './drivers/driver'
import { SendgridDriver } from './drivers/sendgrid'
import TestDriver from './drivers/test'

let driver: MailDriver

export default function mail (config?: MailConfig) {
  if (config === undefined) {
    if (driver === undefined) {
      throw new Error('Mail not set up yet. Please pass a config')
    }
    return driver
  }

  if ((config as SendgridConfig).driver === 'sendgrid') {
    driver = new SendgridDriver(config as SendgridConfig)
  } else {
    driver = new TestDriver(config)
  }

  return driver
}
