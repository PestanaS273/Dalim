from ohce.greeter import Greeter
from ohce.ui import UI


def main():
    greeter = Greeter()
    greetings = greeter.greet()
    print(greetings)

    ui = UI()
    ui.main_loop()


main()
