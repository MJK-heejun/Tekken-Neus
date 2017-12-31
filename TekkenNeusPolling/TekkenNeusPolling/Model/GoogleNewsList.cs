using System;
using System.Collections.Generic;

namespace TekkenNeusPolling
{
    public class GoogleNewsList
    {
        public string status { get; set; }
        public Feed feed {get; set; }
        public List<Item> items { get; set; }

        public class Feed
        {
            public string title { get; set; }
            public string link { get; set; }
        }

        public class Item
        {
            public string title { get; set; }
            public DateTime pubDate { get; set; }
            public string link { get; set; }
        }
    }
}
