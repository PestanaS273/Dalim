namespace Ohce
{
    public class UI
    {
        private readonly ConsoleInteractor _interactor;

        public UI()
        {
            _interactor = new ConsoleInteractor();
        }

        public void MainLoop()
        {
            while(true)
            {
                string? input = _interactor.ReadInput();
                if(input == null || input.Equals("quit"))
                {
                    break;   
                }
                string reversed = StringReverser.reverse(input);
                _interactor.PrintMessage(reversed);
                if(reversed.Equals(input))
                {
                    _interactor.PrintMessage("That was a palindrom!");
                }
            }
        }
    }
}
