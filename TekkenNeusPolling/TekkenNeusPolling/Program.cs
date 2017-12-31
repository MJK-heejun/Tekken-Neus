using Newtonsoft.Json.Linq;
using SQLite;
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
            Console.WriteLine("testing");
            Console.ReadLine();

            SQLiteConnection db = initializeDb();

            //Youtube yt = new Youtube();
            GoogleNews gn = new GoogleNews(db);

            gn.TrySendPushNotification();
            //yt.TrySendPushNotification();

            Console.WriteLine("end");
            Console.ReadLine();
        }

        static SQLiteConnection initializeDb()
        {
            var db = new SQLiteConnection("dbFile");
            db.CreateTable<GoogleNewsTb>();
            db.CreateTable<YoutubeTb>();
            return db;
        }

    }
}
