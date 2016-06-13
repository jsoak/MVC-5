using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sample_Collections
{
    class MyObjects : IEnumerable<MyObjects>
    {
        List<MyObjects> mylist = new List<MyObjects>();

        public MyObjects this[int index]
        {
            get { return mylist[index]; }
            set { mylist.Insert(index, value); }
        }

        public IEnumerator<MyObjects> GetEnumerator()
        {
            return mylist.GetEnumerator();
        }

        System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
        {
            return this.GetEnumerator();
        }
    }
}
