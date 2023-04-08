using DesafioSEA.Data.Context;
using DesafioSEA.Service.User.Request;
using Microsoft.AspNetCore.Mvc;
using DesafioSEA.Service.User.Handle;
using DesafioSEA.Service.User.Response;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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

        // GET api/<UserController>/5
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

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UserController>/5
        [HttpDelete]
        public async Task<ActionResult> Delete([FromBody] UserDeleteRequest request)
        {
            var UserDeleteHandle = new UserDeleteHandle(request, _context, _configuration);
            return await UserDeleteHandle.Handle();
        }
    }
}
