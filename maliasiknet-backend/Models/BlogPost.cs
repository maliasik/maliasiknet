using System;

namespace maliasiknet_backend.Models
{
    public class BlogPost
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Author { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public string[]? Tags { get; set; }
        public string[]? Summary { get; set; }
        public string[]? ThumbNailImageUrl { get; set; }
        public bool isPublished { get; set; }
        public string? Category { get; set; }
    }
}