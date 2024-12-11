public class OsClock
{
    public int GetCurrentHour()
    {
        var now = DateTime.Now;
        return now.TimeOfDay.Hours;
    }
}