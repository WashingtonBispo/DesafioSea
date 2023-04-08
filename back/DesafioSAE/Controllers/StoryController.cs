using DesafioSEA.Data.Context;
using DesafioSEA.Service.Story.Request;
using Microsoft.AspNetCore.Mvc;
using DesafioSEA.Service.Story.Handle;

namespace DesafioSAE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoryController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IConfiguration _configuration;

        public StoryController(DataContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }


        [HttpPost]
        public async Task<ActionResult> Create([FromBody] StoryPostRequest request)
        {
            var StoryPostHandle = new StoryPostHandle(request, _context, _configuration);
            return await StoryPostHandle.Handle();
        }


    }
}
