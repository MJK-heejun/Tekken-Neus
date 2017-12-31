using SQLite;
using System;

namespace TekkenNeusPolling
{
    public class GoogleNewsTb
    {
        [PrimaryKey, AutoIncrement]
        public int id { get; set; }
        public string title { get; set; }
        public DateTime pubDate { get; set; }
    }
}
