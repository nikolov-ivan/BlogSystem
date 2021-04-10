namespace BlogSystem.Services.Contracts
{
    using BlogSystem.Data.Models;
    using BlogSystem.Models.Posts;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IPostsService
    {
        List<Post> GetAllAsync();

        Post GetById(int id);

        Task Create(Post post);

        Task Delete(int id);
    }
}
