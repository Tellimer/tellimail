import Axios from 'axios'
import { MailablePerson, MailablePersonalization } from '../mailable'
import { MailDriver } from './driver'
import { MailableBase } from '..'
import { MailConfig } from '../mail'

export interface SendgridConfig extends MailConfig {
  driver: 'sendgrid';
  sandbox?: boolean;
  apiKey: string;
}

interface SendgridContent {
  type: 'text/html';
  value: string;
}

interface SendgridMailSettings {
  sandbox_mode: {
    enable: boolean;
  };
}

interface SendgridData {
  personalizations: MailablePersonalization[];
  from: MailablePerson;
  subject: string;
  content: SendgridContent[];
  mail_settings: SendgridMailSettings;
}

export class SendgridDriver extends MailDriver {
  protected _config: SendgridConfig

  public get config(): SendgridConfig {
    return this._config
  }

  public constructor(config: SendgridConfig) {
    super(config)
  }

  protected async transport(mailable: MailableBase, callback?: CallableFunction): Promise<boolean> {
    const chunkSize = 1000
    for (let i = 0; i < mailable.personalizations.length; i += chunkSize) {
      const personalizations = mailable.personalizations.slice(i, i + chunkSize)
      const success = await this.sendTo(mailable, personalizations)
      if (!success) {
        return false
      } else if (callback) {
        await callback(personalizations)
      }
    }

    return true
  }

  protected async sendTo(mailable: MailableBase, personalizations: MailablePersonalization[]): Promise<boolean> {
    const data: SendgridData = {
      personalizations,
      from: mailable.from,
      subject: mailable.subject,
      content: [{
        type: 'text/html',
        value: await mailable.render(),
      }],
      mail_settings: {
        sandbox_mode: {
          enable: this.config.sandbox === undefined ? false : this.config.sandbox,
        },
      },
    }

    await Axios.post('https://api.sendgrid.com/v3/mail/send', data, {
      headers: {
        authorization: `Bearer ${this.config.apiKey}`,
        contentType: 'application/json',
      },
    })

    return true
  }
}
