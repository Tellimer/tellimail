import { expect } from 'chai'
import path from 'path'
import mail, { Mailable, templateView, View } from '../src/index'

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

  it('Renders template from file', async () => {
    const mailable = new Mailable(await templateView(path.resolve(__dirname, 'template.html')))
    const template = await mailable.render()

    expect(template).to.equal('<html data-server-rendered="true"><head></head> <body><h1>hello world</h1></body></html>')
  })

  it('Renders template with mixin', async () => {
    const text = 'goodbye world'
    const view = await templateView(path.resolve(__dirname, 'reactive-template.html'), {
      data() {
        return { text }
      }
    })
    const mailable = new Mailable(view)
    const template = await mailable.render()

    expect(template).to.equal(`<html data-server-rendered="true"><head></head> <body><h1>${text}</h1></body></html>`)
  })

  it('Renders template with mixin and css file', async () => {
    const text = 'goodbye world'
    const view = await templateView(path.resolve(__dirname, 'reactive-template.html'), {
      data() {
        return { text }
      }
    }, path.resolve(__dirname, 'template.css'))
    const mailable = new Mailable(view)
    const template = await mailable.render()

    expect(template).to.equal(`<html data-server-rendered="true"><head></head> <body><h1 style="color: red;">${text}</h1></body></html>`)
  })

  it('Renders template with a comment', async () => {
    const view = await templateView(path.resolve(__dirname, 'comment.html'))
    const mailable = new Mailable(view)
    const template = await mailable.render()

    expect(template).to.equal('<html data-server-rendered="true"><head></head> <body><h1><!-- hello world -->hello world</h1></body></html>')
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
