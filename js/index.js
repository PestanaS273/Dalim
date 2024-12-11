const Greeter = require('./greeter').Greeter
const UI = require('./ui').UI

const main = () => {
  const greeter = new Greeter()
  const greetings = greeter.greet()
  console.log(greetings)

  const ui = new UI()
  ui.mainLoop()
}

main()
