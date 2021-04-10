namespace BlogSystem.Controllers
{
    using BlogSystem.Data.Models;
    using BlogSystem.Models.Posts;
    using BlogSystem.Services.Contracts;
    using Microsoft.AspNetCore.Mvc;
    using System;
    using System.Threading.Tasks;

    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly IPostsService postsService;

        public PostsController(IPostsService postsService)
        {
            this.postsService = postsService;
        }

        [HttpGet("api/getall")]
        public IActionResult GetAll()
        {
            var posts = this.postsService.GetAllAsync();
            return this.Ok(posts);
        }

        [HttpGet("api/getbyid/{id}")]
        public IActionResult GetById(int id)
        {
            var post = this.postsService.GetById(id);
            return this.Ok(post);
        }

        [HttpPost("api/create")]
        public async Task<ActionResult<Post>> Create(CreatePostInputModel model)
        {
            var post = new Post
            {
                Content = model.Content,
                Title = model.Title,
                ImageUrl = model.ImageUrl,
                CreatedOn = DateTime.UtcNow,
                Author = model.Author,
            };
            await this.postsService.Create(post);
            return this.Ok(post);
        }

        [HttpDelete("api/delete/{id}")]
        public async Task Delete(int id)
        {
            await this.postsService.Delete(id);

        }
    }
}
