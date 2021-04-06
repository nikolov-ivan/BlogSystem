namespace BlogSystem.Data
{
    using System;

    using BlogSystem.Data.Models;
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore;

    public class BlogSystemDbContext : IdentityDbContext<BlogUser, Role, Guid>
    {
        public BlogSystemDbContext(DbContextOptions<BlogSystemDbContext> options)
            : base(options)
        {
        }

        public DbSet<Post> Posts { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
