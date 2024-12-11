const test = require('tape')
const Greeter = require('../greeter').Greeter

class MockClock {
  constructor (hour) {
    this.hour = hour
  }

  currentHour () {
    return this.hour
  }
}

test('should say "good night" at midnight', (t) => {
  const greeter = new Greeter()
  const mockClock = new MockClock(0)
  greeter.clock = mockClock
  t.equal(greeter.greet(), 'Good night')
  t.end()
})

test('should never return undefined', (t) => {
  const greeter = new Greeter()
  for (let i = 0; i < 24; i++) {
    const mockClock = new MockClock(i)
    greeter.clock = mockClock
    t.notEqual(greeter.greet(), undefined)
  }
  t.end()
})
