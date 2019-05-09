declare module 'tellimail' {
  export interface MailablePerson {
    email: string;
    name?: string;
    user?: any;
  }

  export interface MailConfig {
    defaultFrom: MailablePerson;
  }

  export interface SendgridConfig extends MailConfig {
    driver: 'sendgrid';
    sandbox?: boolean;
    apiKey: string;
  }
}
