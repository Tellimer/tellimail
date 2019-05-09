import { MailConfig } from 'tellimail'
import Mailable from '../mailable'

export abstract class MailDriver {
  protected _config: MailConfig;

  public get config(): MailConfig {
    return this._config
  }

  public constructor (config: MailConfig) {
    this._config = config
  }

  public async send(mailable: Mailable, callback?: CallableFunction): Promise<boolean> {
    mailable.build()

    const success = await this.transport(mailable, callback)

    return success
  }

  abstract async transport(mailable: Mailable, callback?: CallableFunction): Promise<boolean>;
}
