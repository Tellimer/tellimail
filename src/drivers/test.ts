import { MailablePersonalization } from '../mailable'
import { MailDriver } from './driver'
import { MailableBase } from '..'

export default class TestDriver extends MailDriver {
  public static lastSendTo: MailablePersonalization[] = []
  public async transport(mailable: MailableBase, callback?: CallableFunction): Promise<boolean> {
    TestDriver.lastSendTo = mailable.personalizations

    if (callback) {
      callback(mailable.personalizations)
    }

    return true
  }
}
