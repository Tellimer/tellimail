import uuid from 'uuid'
import { View } from './view'

export interface MailablePerson {
  email: string;
  name?: string;
  user?: any;
}

export interface MailablePersonalization {
  to: MailablePerson[];
  custom_args?: Record<string, string>;
  substitutions?: Record<string, string>;
}

export abstract class MailableBase {
  public uuid: string

  public constructor() {
    this.uuid = uuid.v4()
  }

  abstract view(): View | Promise<View>;

  abstract build(): void;

  public async render(): Promise<string> {
    return (await this.view()).render()
  }


  private _from: MailablePerson
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

  public withCategories(categories: string[]) {
    this.categories = categories

    return this
  }


  private _subject: string;
  public get subject(): string {
    return this._subject
  }
  public set subject(v: string) {
    this._subject = v
  }

  public withSubject(subject: string) {
    this.subject = subject

    return this
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

  public withPersonalizations(personalizations: MailablePersonalization[]) {
    this.personalizations = personalizations

    return this
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

export class Mailable extends MailableBase {
  protected _view: View | Promise<View>
  protected buildCallback: (mailable: Mailable) => void
  public constructor(view: View | Promise<View>, buildCallback?: (mailable: Mailable) => void) {
    super()
    this._view = view
    this.buildCallback = buildCallback
  }

  public build() {
    if (this.buildCallback) {
      this.buildCallback(this)
    }
  }

  public view() {
    return this._view
  }
}
