// Controllers/BlogController.cs

using maliasiknet_backend.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

[Route("api/blog")]
[ApiController]
public class BlogController : ControllerBase
{
    private readonly List<BlogPost> _blogPosts = new List<BlogPost>
    {
        new BlogPost { Id = 1, Title = "Sample Blog Post", Content = "Lorem Ipsum..." },
        // Diğer blog gönderilerini ekleyin
    };

    [HttpGet]
    public ActionResult<IEnumerable<BlogPost>> GetBlogPosts()
    {
        return Ok(_blogPosts);
    }

    [HttpGet("{id}")]
    public ActionResult<BlogPost> GetBlogPostById(int id)
    {
        var blogPost = _blogPosts.Find(post => post.Id == id);
        if (blogPost == null)
        {
            return NotFound();
        }

        return Ok(blogPost);
    }
}
