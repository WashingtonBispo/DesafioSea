using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace DesafioSEA.Service.Story.Request
{
    public class StoryGetEmailRequest
    {
        [FromQuery]
        public string? Email { get; set; }
    }
}
