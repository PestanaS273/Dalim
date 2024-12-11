using Ohce;

var greeter = new Greeter();
var greetings = greeter.Greet();
Console.WriteLine(greetings);
var ui = new UI();
ui.MainLoop();
