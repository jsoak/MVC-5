using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sample_Interfaces_and_Classes
{
    class Bus : IVehicles
    {
        /*
        private int busWheels;
        private int busWindows;
        private string busColor;
        private int busPassenegerSeats;
        private double busGasTankSize;
        private double busMaxDistanceOnFullTank;
        private string busPropertyOwner;
        private bool busDisabilityFeatures;
        public double totalMpg = 0;
        public int BusWheels
        {
            get
            {
                return busWheels;
            }
            set
            {
                busWheels = value;
            }
        }

        public int BusWindows
        {
            get
            {
                return busWindows;
            }
            set
            {
                busWindows = value;
            }
        }

        public string BusColor
        {
            get
            {
                return busColor;
            }
            set
            {
                busColor = value;
            }
        }

        public int BusPassenegerSeats
        {
            get
            {
                return busPassenegerSeats;
            }
            set
            {
                busPassenegerSeats = value;
            }
        }

        public double BusGasTankSize
        {
            get
            {
                return busGasTankSize;
            }
            set
            {
                busGasTankSize = value;
            }
        }
        public double BusMaxDistanceOnFullTank
        {
            get
            {
                return busMaxDistanceOnFullTank;
            }
            set
            {
                busMaxDistanceOnFullTank = value;
            }
        }

        public string BusPropertyOwner
        {
            get
            {
                return busPropertyOwner;
            }
            set
            {
                busPropertyOwner = value;
            }
        }
        public bool BusDisabilityFeatures
        {
            get
            {
                return busDisabilityFeatures;
            }
            set
            {
                busDisabilityFeatures = value;
            }
        }
        */

        
        //Automatic Property Assignment
        public int busWheels { get; set; }
        public int busWindows { get; set; }
        public string busColor { get; set; }
        public int busPassenegerSeats { get; set; }
        public double busGasTankSize { get; set; }
        public double busMaxDistanceOnFullTank { get; set; }
        public string busPropertyOwner { get; set; }
        public bool busDisabilityFeatures { get; set; }
        
        public double CalcMPG()
        { 
            return (busMaxDistanceOnFullTank/busGasTankSize);
        }
    }
}
