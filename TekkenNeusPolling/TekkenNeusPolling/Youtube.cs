using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace TekkenNeusPolling
{
    public class Youtube
    {

        private static readonly HttpClient client = new HttpClient();
        private static readonly string API_KEY = "AIzaSyAUUfDpnPm3K9lhXYWLH6fg0e4nVZjkPxk";
        private static readonly string RESULT_NUM = "1";
        private static readonly string CHANNEL_ID = "UC_ntXHv-XdKCD7CPynVvnQw";
        private static readonly string URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId={0}&maxResults={1}&q=tekken&key={2}";


        public Youtube()
        {

        }

        public async void TrySendPushNotification()
        {
            JObject newObj = await getLatestVideo();
            string idFromDb = await getLatestVideoIdFromDb();

            string latestId = (string)newObj["items"][0]["id"]["videoId"];
            if (!latestId.Equals(idFromDb))
            {
                sendPushNotification(newObj);
                updateDb(idFromDb);
            }
        }


        private async Task<JObject> getLatestVideo()
        {
            var response = await client.GetAsync(string.Format(URL, CHANNEL_ID, RESULT_NUM, API_KEY));
            var responseString = await response.Content.ReadAsStringAsync();
            JObject jObj = JObject.Parse(responseString);            
            return jObj;
        }

        private async Task<string> getLatestVideoIdFromDb()
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
