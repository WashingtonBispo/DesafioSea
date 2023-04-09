using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace DesafioSEA.Service.Story.Request
{
    public class StoryPutLikeRequest
    {
        [Required]
        [FromBody]
        public string IdStory { get; set; }

        [Required]
        [FromBody]
        public string Email { get; set; }

        [Required]
        [FromBody]
        public bool Status { get; set; }
    }
}
