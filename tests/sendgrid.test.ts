import mail, { View, Mailable } from '../src/index'
import { expect } from 'chai'

describe('Sendgrid', () => {
  const mailer = mail({
    defaultFrom: {
      name: 'test',
      email: 'tim@test.com'
    },
    driver: 'sendgrid',
    apiKey: process.env.SENDGRID_KEY,
    sandbox: true,
  })
  const view = new View('<html><body>test</body></html>')



  it('Requires subject', async () => {
    const mailable = new Mailable(view)
    mailable.to({ email: 'test@test.com', name: 'test' })
    let error = false

    try {
      await mailer.send(mailable)
    } catch (err) {
      error = true
    }

    expect(error).to.equal(true)
  })

  it('Requires personalizations', async () => {
    const mailable = new Mailable(view).withSubject('test')
    let error = false

    try {
      await mailer.send(mailable)
    } catch (err) {
      error = true
    }

    expect(error).to.equal(true)
  })

  it('Can send emails', async () => {
    const to = { name: 'test', email: 'test@test.com' }
    const mailable = new Mailable(view)
      .withSubject('test')
      .to(to)

    const success = await mailer.send(mailable, people => {
      expect(people).to.be.an('array')
      expect(people[0]).to.be.an('object')
        .with.property('to')
        .that.deep.equals([to])
    })

    expect(success).to.equal(true)
  })

  it('Can send to more than 1000 people', async () => {
    const mailable = new Mailable(view)
    mailable.subject = 'this is the subject'

    for (let i = 1; i <= 3000; i++) {
      mailable.personalizations.push({
        to: [{
          email: `test${i}@example.com`,
          name: `test ${i}`,
        }]
      })
    }

    const success = await mailer.send(mailable, people => {
      expect(people).to.be.an('array')
        .which.has.lengthOf(1000)
    })

    expect(success).to.equal(true)
  })
})
