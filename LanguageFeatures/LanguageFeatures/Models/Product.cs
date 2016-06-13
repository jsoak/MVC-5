using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LanguageFeatures.Models
{
    public class Product
    {

        public int ProductID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Category { get; set; }

        /*The top is the same as the following below with automatic property
        private string name;
        private int productID;
        private string description;
        private decimal price;
        private string category;

        
        public int ProductID
        {
            get { return productID; }
            set { productID = value; }
        }

        public string Name
        {
            get { return name; }
            set { name = value; }

        }

        public string Description
        {
            get { return description; }
            set { description = value; }
        }
         */


    }
}