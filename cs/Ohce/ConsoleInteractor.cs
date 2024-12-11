namespace Ohce
{
    public class ConsoleInteractor
    {
        public string? ReadInput() => Console.ReadLine();
        public void PrintMessage(string Message) => Console.WriteLine(Message);
    }
}