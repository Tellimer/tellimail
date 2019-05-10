import { MailableBase } from '../mailable'
import { MailConfig } from '@/mail'



export abstract class MailDriver {
  protected _config: MailConfig;

  public get config(): MailConfig {
    return this._config
  }

  public constructor(config: MailConfig) {
    this._config = config
  }

  protected check(mailable: MailableBase) {
    if (!mailable.from) {
      mailable.from = this._config.defaultFrom
    }
    if (!mailable.personalizations || mailable.personalizations.length === 0) {
      throw new Error('Mailable has no one to send to. Please set the personalizations property or use the .to() method')
    }

    if (!mailable.subject) {
      throw new Error('Mailable has no subject. Please set the subject property or use the .withSubject() method')
    }

    return true
  }

  public async send(mailable: MailableBase, callback?: CallableFunction): Promise<boolean> {
    mailable.build()

    this.check(mailable)

    const success = await this.transport(mailable, callback)

    return success
  }

  protected abstract async transport(mailable: MailableBase, callback?: CallableFunction): Promise<boolean>;
}
