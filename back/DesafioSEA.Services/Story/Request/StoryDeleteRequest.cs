using Microsoft.AspNetCore.Mvc;


namespace DesafioSEA.Service.Story.Request
{
    public class StoryDeleteRequest
    {
        [FromQuery]
        public string IdStory { get; set; }
    }
}
