namespace BlogSystem.Data.Models
{
    using System;
    using System.Collections.Generic;

    using Microsoft.AspNetCore.Identity;

    public class BlogUser : IdentityUser<Guid>
    {
        public BlogUser()
        {
            this.Posts = new HashSet<Post>();
        }

        public ICollection<Post> Posts { get; set; }
    }
}
