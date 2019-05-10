const mail = require('./dist/index').default
const Mailable = require('./dist/mailable').default
const View = require('./dist/view').View

const view = new View('<html><body>test</body></html>', {})

class Test extends Mailable {
  view () {
    return view
  }

  build () {
    this.to({
      name: 'tim',
      email: 'tim@email.com',
    })

    this.subject = 'testarino'
  }
}

mail({
  defaultFrom: {
    name: 'test',
    email: 'tim@test.com'
  },
  driver: 'sendgrid',
  apiKey: 'KEY',
})

mail().send(new Test(), (sendees) => {
  console.log(sendees) // [{name: 'tim', email: 'tim@email.com'}]
}).then(success => {
  console.log(success) // true
}).catch(err => {
  console.log(err.response.data) // sendgrid error api response
})
