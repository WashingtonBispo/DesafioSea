using DesafioSEA.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesafioSEA.Service.Story.Response
{
    public class StoryGetResponse
    {

        public StoryGetResponse(StoryEntity story)
        {
            IdStory = story.IdStory;
            StoryText = story.StoryText;
            Author = story.Author.Email;
            Likes = story.Likes.Select(x => x.Email);
        }

        public string IdStory { get; set; }
        public string StoryText { get; set; }
        public string Author { get; set; }
        public IEnumerable<string> Likes { get; set; }
    }
}
