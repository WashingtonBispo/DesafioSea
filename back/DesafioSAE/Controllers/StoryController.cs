using DesafioSEA.Data.Context;
using DesafioSEA.Service.Story.Request;
using Microsoft.AspNetCore.Mvc;
using DesafioSEA.Service.Story.Handle;
using DesafioSEA.Service.Story.Response;

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
        public async Task<ActionResult> Post([FromBody] StoryPostRequest request)
        {
            var StoryPostHandle = new StoryPostHandle(request, _context, _configuration);
            return await StoryPostHandle.Handle();
        }

        [HttpGet]
        public async Task<List<StoryGetResponse>> Get([FromQuery] StoryGetEmailRequest request)
        {
            var StoryGetEmailHandle = new StoryGetEmailHandle(request, _context, _configuration);
            return await StoryGetEmailHandle.Handle();
        }

        [HttpDelete]
        public async Task<ActionResult> Delete([FromQuery] StoryDeleteRequest request)
        {
            var StoryDeleteHandle = new StoryDeleteHandle(request, _context, _configuration);
            return await StoryDeleteHandle.Handle();
        }

        [HttpPut]
        public async Task<ActionResult> Put([FromBody] StoryPutLikeRequest request)
        {
            var StoryPutLikeHandle = new StoryPutLikeHandle(request, _context, _configuration);
            return await StoryPutLikeHandle.Handle();
        }
    }
}
