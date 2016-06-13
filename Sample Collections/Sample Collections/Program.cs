using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sample_Collections
{
    class Program
    {
        static void Main(string[] args)
        {
            //This is a simple list 
            //It does NOT have compile-time type safety. Meaning if the data structure does not have
            //the same object types, it will throw an error at runtime. 

            //create a new List of strings
            List<string> items = new List<string>();
            items.Add("red"); //append an item to the List
            items.Insert(0, "yellow"); //insert the value at index 0
            //display the colors in the list
            Console.WriteLine("Display list contents with counter-controlled loop: ");
            for (int i = 0; i < items.Count; i++)
            {
                Console.WriteLine("{0}", items[i]);
            }

            //display colors using foreach
            Console.WriteLine("Display list contents with foreach statement: ");
            foreach (var item in items)
            {
                Console.WriteLine("{0}", item);
            }

            items.Add("green"); //add "green" to the end of the List
            items.Add("yellow"); //add "yellow" to the end of the List
        }
    }
}
