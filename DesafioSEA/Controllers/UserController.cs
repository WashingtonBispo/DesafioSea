using DesafioSEA.Data.Context;
using DesafioSEA.Service.User.Handle;
using DesafioSEA.Service.User.Request;
using DesafioSEA.Service.User.Response;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DesafioSEA.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IConfiguration _configuration;

        public UserController(DataContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<UserResponse> Post(UserPostRequest request)
        {
            var handlePost = new UserPostHandle(request, _context, _configuration);
            return await handlePost.Handle();
        }
    }
}
