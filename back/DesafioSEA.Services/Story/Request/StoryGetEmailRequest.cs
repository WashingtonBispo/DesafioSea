using Microsoft.AspNetCore.Mvc;

namespace DesafioSEA.Service.Story.Request
{
    public class StoryGetEmailRequest
    {
        [FromQuery]
        public string Email { get; set; }
    }
}
