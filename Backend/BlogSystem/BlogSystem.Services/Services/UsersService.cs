using BlogSystem.Data;
using BlogSystem.Data.Models;
using BlogSystem.Models.Users;
using BlogSystem.Services.Contracts;
using System.Threading.Tasks;

namespace BlogSystem.Services.Services
{
    public class UsersService : IUsersService
    {
        private readonly BlogSystemDbContext db;

        public UsersService(BlogSystemDbContext db)
        {            
            this.db = db;
        }
        public async Task RegisterAsync(RegisterInputModel model)
        {
            var user = new BlogUser();
            user.Email = model.Email;
            user.PasswordHash = model.Password;
            await this.db.Users.AddAsync(user);
            await this.db.SaveChangesAsync();
            
        }
    }
}
