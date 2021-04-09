using BlogSystem.Data;
using BlogSystem.Data.Models;
using BlogSystem.Models.Users;
using BlogSystem.Services.Contracts;
using Microsoft.EntityFrameworkCore;
using System.Linq;
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

        public async Task<BlogUser> GetUserAsync(string email, string password)
        {
            var user = new BlogUser();
            var userFromDb = await this.db.Users.Where(u => u.Email == email && u.PasswordHash == password).FirstOrDefaultAsync();
            user.Email = userFromDb.Email;
            user.PasswordHash = userFromDb.PasswordHash;

            return user;
        }
    }
}
