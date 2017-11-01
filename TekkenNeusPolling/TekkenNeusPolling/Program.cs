using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace TekkenNeusPolling
{
    class Program
    {
        
        static void Main(string[] args)
        {
            Youtube yt = new Youtube();
            GoogleNews gn = new GoogleNews();

            gn.TrySendPushNotification();
            yt.TrySendPushNotification();
            

            Console.ReadLine();
        }
    }
}
