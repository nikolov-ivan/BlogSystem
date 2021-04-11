namespace BlogSystem.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.IdentityModel.Tokens.Jwt;
    using System.Linq;
    using System.Security.Claims;
    using System.Text;
    using System.Threading.Tasks;

    using BlogSystem.Models.Users;
    using BlogSystem.Services.Contracts;
    using BlogSystem.Settings;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Options;
    using Microsoft.IdentityModel.Tokens;

    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUsersService usersService;
        private readonly IOptions<JwtSettings> jwtSettings;

        public UsersController(IUsersService usersService, IOptions<JwtSettings> jwtSettings)
        {
            this.usersService = usersService;
            this.jwtSettings = jwtSettings;
        }

        [HttpPost("api/register")]
        public async Task<ActionResult> Register(RegisterInputModel model)
        {
            await this.usersService.RegisterAsync(model);
            return this.Ok();
        }

        [HttpPost("api/login")]
        public async Task<ActionResult<string>> Login(LoginInputModel model)
        {
            var user = await this.usersService.GetUserAsync(model.Email, model.Password);
            if (user == null)
            {
                return null; // Return null if user not found
            }

            // Authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(this.jwtSettings.Value.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
        {
            new Claim(ClaimTypes.Email, user.Email),
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
        }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(
                                 new SymmetricSecurityKey(key),
                                 SecurityAlgorithms.HmacSha256Signature
        ),

            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenAsString = tokenHandler.WriteToken(token);
            return this.Ok(new { tokenAsString });
        }
    }
}
