namespace BlogSystem.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using BlogSystem.Models.Users;
    using BlogSystem.Services.Contracts;
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUsersService usersService;

        public UsersController(IUsersService usersService)
        {
            this.usersService = usersService;
        }

        [HttpPost("api/register")]
        public async Task<ActionResult> Register(RegisterInputModel model)
        {
            await this.usersService.RegisterAsync(model);
            return this.Ok();
        }
    }
}
