namespace Ohce
{
    public class StringReverser
    {
        public static string reverse(string input)
        {
            char[] array = input.ToCharArray();
            Array.Reverse(array);
            return new string(array);
        }
    }
}