using SQLite;

namespace TekkenNeusPolling
{
    public class YoutubeTb
    {
        [PrimaryKey, AutoIncrement]
        public int Id { get; set; }
        public string Title { get; set; }
    }
}
