const test = require('tape')
const UI = require('../ui').UI

class MockerReader {
  constructor (inputs) {
    this.inputs = inputs

  }

  readInput () {
    return this.inputs.shift()
  }
}

class MockerWritter {
  constructor () {
    this.messages = []
  }

  printMessage (message) {
    this.messages.push(message)
  }
}

test('main loop', (t) => {
  /* TODO
    Given the following inputs:
    - hello
    - oto
    - quit

    Check that the following messages are printed:
    - olleh
    - oto
    - That was a palindrome!
   */
    const inputs = ['hello', 'oto', 'quit']
    const reader = new MockerReader(inputs)
    const writer = new MockerWritter()

    const interactor = { reader, writer }

    const ui = new UI(interactor)

    ui.mainLoop()

    t.deepEqual(writer.messages, ['olleh', 'oto', 'That was a palindrome!'])
  
  t.end()
})
