namespace BlogSystem.Data
{
    using BlogSystem.Data.Models;
    using Microsoft.EntityFrameworkCore;
    public class BlogSystemDbContext : DbContext
    {
        public BlogSystemDbContext(DbContextOptions<BlogSystemDbContext> options)
            : base(options)
        {

        }

        public DbSet<Post> Posts { get; set; }
    }
}
