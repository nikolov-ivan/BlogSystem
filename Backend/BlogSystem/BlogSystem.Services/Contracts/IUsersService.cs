using BlogSystem.Models.Users;
using System.Threading.Tasks;

namespace BlogSystem.Services.Contracts
{
    public interface IUsersService
    {
        Task RegisterAsync(RegisterInputModel model);
    }
}
