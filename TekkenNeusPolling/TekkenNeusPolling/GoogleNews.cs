using Newtonsoft.Json.Linq;
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


        public GoogleNews()
        {

        }

        public async void TrySendPushNotification()
        {
            JObject newObj = await getLatestNews();
            string titleFromDb = await getLatestNewsTitleFromDb();

            string latestTitle = (string)newObj["items"][0]["title"];
            if (!latestTitle.Equals(titleFromDb))
            {
                sendPushNotification(newObj);
                updateDb(titleFromDb);
            }
        }


        private async Task<JObject> getLatestNews()
        {
            var response = await client.GetAsync(URL);
            var responseString = await response.Content.ReadAsStringAsync();
            JObject jObj = JObject.Parse(responseString);            
            return jObj;
        }

        private async Task<string> getLatestNewsTitleFromDb()
        {
            //to be implemented
            return "";
        }

        private async void sendPushNotification(JObject newObj)
        {
            //to be implemented
        }

        private async void updateDb(string idFromDb)
        {
            //to be implemented
        }

    }
}
