const prompt = require('prompt-sync')()
const reverse = require('./ohce').reverse

class ConsoleInteractor {
  readInput(initialValue) {
    return initialValue ?? prompt("");
  }

  printMessage(message, printFunction = console.log) {
    printFunction(message);
  }
}

class UI {
  constructor () {
    this.interactor = new ConsoleInteractor()
  }

  mainLoop (basisInput, printFunction) {
    while (true) {
      const input = this.interactor.readInput(basisInput ? basisInput.shift() : undefined)
      if (input === 'quit') {
        break
      }
      const reversed = reverse(input)
      this.interactor.printMessage(reversed, printFunction);
      if (input === reversed) {
        this.interactor.printMessage('That was a palindrome!', printFunction)
      }
    }
  }
}

module.exports = { UI }