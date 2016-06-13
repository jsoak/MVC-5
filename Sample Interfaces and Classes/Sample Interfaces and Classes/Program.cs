using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sample_Interfaces_and_Classes
{
    class Program
    {
        static void Main(string[] args)
        {
            Cars myCar = new Cars
            {
                carColor = "White",
                carWindows = 6,
                carWheels = 4,
                carPassengerSeats = 5,
                carGasTankSize = 18,
                carMaxDistanceOnFullTank = 410
            };

            Console.WriteLine("My Car is {0}, has {1} windows and {2} passenger seats and {3} wheels.", myCar.carColor, myCar.carWindows, myCar.carPassengerSeats, myCar.carWheels);
            Console.WriteLine("My car's gas tank has up to {0} gallons of gasoline and travels {1} miles on a full tank", myCar.carGasTankSize, myCar.carMaxDistanceOnFullTank);

            Bus cityBus = new Bus
            {
                busColor = "Blue and Green",
                busDisabilityFeatures = true,
                busGasTankSize = 60,
                busMaxDistanceOnFullTank = 214.2,
                busPassenegerSeats = 30,
                busWheels = 4,
                busWindows = 16,
                busPropertyOwner = "City of Killeen"
            };

            Console.WriteLine("The transit bus of Killeen is built-in with {0} passenger seats and {1} windows.", cityBus.busPassenegerSeats, cityBus.busWindows);
            if (cityBus.busDisabilityFeatures == true)
            {
                Console.WriteLine("It also have disability seating and ramps");
            }

            Console.WriteLine("This transit bus is the property of {0} and follows its uniform city color of {1}", cityBus.busPropertyOwner, cityBus.busColor);
            Console.WriteLine("At last, the EPA report shows this bus can take a maximum of {0} gallons of gasoline and travel {1} miles on a full tank", cityBus.busGasTankSize, cityBus.busMaxDistanceOnFullTank);

            Console.WriteLine("This bus has a MPG of {0}", cityBus.CalcMPG());
        }
    }
}
