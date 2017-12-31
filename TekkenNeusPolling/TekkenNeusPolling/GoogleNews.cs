using Newtonsoft.Json;
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
    public class GoogleNews
    {

        private static readonly HttpClient client = new HttpClient();
        private static readonly string URL = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.google.com%2Fnews%3Fq%3Dtekken7%2Ctekken%26output%3Drss%26scoring%3Dn";
        SQLiteConnection db = null;

        public GoogleNews(SQLiteConnection db)
        {
            this.db = db;
        }

        public async void TrySendPushNotification()
        {
            GoogleNewsList newsList = await getLatestNews();
            newsList.items.RemoveAll((obj) => obj.title == "This RSS feed URL is deprecated");

            string titleFromDb = getLatestNewsTitleFromDb();
            string latestTitle = newsList.items[0].title;
            if (!latestTitle.Equals(titleFromDb))
                sendPushNotification(latestTitle);
            updateDb(newsList);
        }


        private async Task<GoogleNewsList> getLatestNews()
        {
            using (HttpClient client = new HttpClient())
            using (HttpResponseMessage response = await client.GetAsync(URL))
            using (HttpContent content = response.Content)
            {
                var responseString = await content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<GoogleNewsList>(responseString);
            }
        }

        private string getLatestNewsTitleFromDb()
        {
            var list = db.Query<GoogleNewsTb>("SELECT * FROM GoogleNewsTb ORDER BY pubDate DESC LIMIT 1");
            return list.Count > 0 ? list.First().title : "";
        }

        private async void sendPushNotification(string newTitle)
        {
            //to be implemented
            string msg = string.Format("New Tekken7 News Available. \"{0}\"", newTitle);
            Console.WriteLine(msg);
            //send msg
        }

        private async void updateDb(GoogleNewsList list)
        {
            db.Execute("delete from GoogleNewsTb");
            foreach (var obj in list.items)
            {
                addGoogleNews(obj.title, obj.pubDate);
            }
        }

        private void addGoogleNews(string title, DateTime pubDate)
        {
            var Id = db.Insert(new GoogleNewsTb()
            {
                title = title,
                pubDate = pubDate
            });
            Console.WriteLine("inserted {0}", Id);
        }

    }
}
