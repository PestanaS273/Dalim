const test = require('tape');
const { UI } = require('../ui');

test('main loop', (t) => {
  t.plan(3);

  const basisInput = ['hello', 'oto', 'quit']
  const printedMessages = [];
  const mockPrint = (message) => printedMessages.push(message)

  const ui = new UI();
  ui.mainLoop(basisInput, mockPrint);

  t.equal(printedMessages[0], 'olleh', 'Reversed message for "hello" is correct');
  t.equal(printedMessages[1], 'oto', 'Reversed message for "oto" is correct');
  t.equal(printedMessages[2], 'That was a palindrome!', '"oto" is identified as a palindrome');
});
