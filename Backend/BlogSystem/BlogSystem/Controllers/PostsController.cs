namespace BlogSystem.Controllers
{
    using System.Collections.Generic;

    using BlogSystem.Data.Models;
    using BlogSystem.Services.Contracts;
    using Microsoft.AspNetCore.Mvc;

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
    }
}
