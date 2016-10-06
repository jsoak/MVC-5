using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AsyncExample
{
    class Program
    {
        static void Main(string[] args)
        {
            AsyncAwaitDemo demo = new AsyncAwaitDemo();
            demo.DoStuff();

            for (int i = 0; i < 100; i++)
            {
                Console.WriteLine("Working on the Main Thread...");
            }
        }
    }

    public class AsyncAwaitDemo
    {
        public async Task DoStuff()
        {

            //Comment this out to see the difference
            await Task.Run(() =>
            {
                CountToFifty();
            });

            //This will not execute until CountToFifty has completed
            Console.WriteLine("Counting to 50 is completed...");
        }

        private static async Task<string> CountToFifty()
        {
            int counter;
            for (counter = 0; counter < 51; counter++)
            {
                Console.WriteLine("BG thread: " + counter);
            }

            return ("Counter = " + counter);
        }
    }
}
