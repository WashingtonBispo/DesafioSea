using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace DesafioSEA.Service.Story.Request
{
    public class StoryPostRequest
    {
        [Required]
        [FromBody]
        public string Email { get; set; }

        [Required]
        [FromBody]
        public string StoryText { get; set; }
    }
}
