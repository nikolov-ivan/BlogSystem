using BlogSystem.Data;
using BlogSystem.Data.Models;
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
