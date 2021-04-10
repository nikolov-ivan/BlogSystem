using BlogSystem.Data;
using BlogSystem.Data.Models;
using BlogSystem.Models.Posts;
using BlogSystem.Services.Contracts;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogSystem.Services.Services
{
    public class PostsService : IPostsService
    {
        private readonly BlogSystemDbContext db;
        public PostsService(BlogSystemDbContext db)
        {
            this.db = db;
        }

        public async Task Create(Post post)
        {
            await this.db.AddAsync(post);
            await this.db.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            var post = GetById(id);
            this.db.Posts.Remove(post);
            await this.db.SaveChangesAsync();
        }

        public List<Post> GetAllAsync()
        {
            return this.db.Posts.ToList();
        }

        public Post GetById(int id)
        {
            return this.db.Posts.Where(x => x.Id == id).FirstOrDefault();
        }
    }
}
