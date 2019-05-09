import Mailable, { MailablePersonalization } from '../mailable'
import { MailDriver } from './driver'

export default class TestDriver extends MailDriver {
  public static lastSendTo: MailablePersonalization[] = []
  public async transport(mailable: Mailable, callback?: CallableFunction): Promise<boolean> {
    TestDriver.lastSendTo = mailable.personalizations

    if (callback) {
      callback(mailable.personalizations)
    }

    return true
  }
}
