using DesafioSEA.Data.Context;
using DesafioSEA.Service.User.Request;
using Microsoft.AspNetCore.Mvc;
using DesafioSEA.Service.User.Handle;
using DesafioSEA.Service.User.Response;


namespace DesafioSAE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IConfiguration _configuration;

        public UserController(DataContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<UserResponse> Get([FromQuery] UserGetRequest request)
        {
            var UserGetHandle = new UserGetHandle(request, _context, _configuration);
            return await UserGetHandle.Handle();
        }

        [HttpPost]
        public async Task<UserResponse> Post([FromBody] UserPostRequest request)
        {
            var UserPostHandle = new UserPostHandle(request, _context, _configuration);
            return  await UserPostHandle.Handle();
        }

        [HttpPut]
        public async Task<UserResponse> Put([FromBody] UserPutRequest request)
        {
            var UserPutHandle = new UserPutHandle(request, _context, _configuration);
            return await UserPutHandle.Handle();
        }

        [HttpDelete]
        public async Task<ActionResult> Delete([FromBody] UserDeleteRequest request)
        {
            var UserDeleteHandle = new UserDeleteHandle(request, _context, _configuration);
            return await UserDeleteHandle.Handle();
        }
    }
}
