namespace BlogSystem.Data
{
    using Microsoft.EntityFrameworkCore;
    public class BlogSystemDbContext : DbContext
    {
        public BlogSystemDbContext(DbContextOptions<BlogSystemDbContext> options)
            : base(options)
        {

        }
    }
}
