namespace BlogSystem.Data.Models
{
    using System;

    public class Post
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Content { get; set; }

        public string ImageUrl { get; set; }

        public DateTime CreatedOn { get; set; }

        public BlogUser User { get; set; }

        public string Author { get; set; }
    }
}
