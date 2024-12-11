const test = require('tape')
const Greeter = require('../greeter').Greeter

test('should say "good night" at midnight', (t) => {
  hour = 24;
  const greeter = new Greeter();
  const greeting = greeter.greet(hour);
  t.equal(greeting, 'Good night', "Greeting should equal to 'Good night'");
  t.end();
})

test('should never return undefined', (t) => {
  const greeter = new Greeter();
  const hasUndefinedValue = false;
  for (let hour = 0; hour <= 23; hour++) {
    const greeting = greeter.greet(hour);
    if (greeting === undefined) {
      hasUndefinedValue = true;
      break;
    }
  }
  t.equal(hasUndefinedValue, false, "A message for every hour must be set");
  t.end()
})
