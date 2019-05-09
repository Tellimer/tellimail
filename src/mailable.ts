import uuid from 'uuid'
import mail from '.'
import { View } from './view'

export interface MailablePerson {
  email: string;
  name?: string;
}

export interface MailablePersonalization {
  to: MailablePerson[];
  custom_args?: Record<string, string>;
  substitutions?: Record<string, string>;
}

export default abstract class Mailable {
  public uuid: string

  public constructor() {
    this.uuid = uuid.v4()
  }

  abstract view(): View | Promise<View>;

  abstract build(): void;

  public async send(callback?: CallableFunction): Promise<boolean> {
    return await mail().send(this, callback)
  }

  public async render(): Promise<string> {
    return (await this.view()).render()
  }


  private _from: MailablePerson = mail().config.defaultFrom
  public get from(): MailablePerson {
    return this._from
  }
  public set from(v: MailablePerson) {
    this._from = v
  }


  private _categories: string[] = [];
  public get categories(): string[] {
    return this._categories
  }
  public set categories(v: string[]) {
    this._categories = v
  }


  private _subject: string;
  public get subject(): string {
    return this._subject
  }
  public set subject(v: string) {
    this._subject = v
  }



  private _personalizations: MailablePersonalization[] = [];
  public get personalizations(): MailablePersonalization[] {
    return this._personalizations
  }
  public set personalizations(v: MailablePersonalization[]) {
    const alreadyIn: string[] = []
    this._personalizations = v.filter(personalization => {
      if (alreadyIn.indexOf(personalization.to[0].email) === -1) {
        alreadyIn.push(personalization.to[0].email)
        return true
      }

      return false
    })
  }

  public to(obj: MailablePersonalization | MailablePerson) {
    if ((obj as MailablePersonalization).to !== undefined) {
      this.personalizations.push(obj as MailablePersonalization)
    } else {
      this.personalizations.push({ to: [obj as MailablePerson] })
    }

    return this
  }


}
