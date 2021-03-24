namespace BlogSystem.Services.Contracts
{
    using BlogSystem.Data.Models;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IPostsService
    {
        List<Post> GetAllAsync();

        Post GetById(int id);
    }
}
