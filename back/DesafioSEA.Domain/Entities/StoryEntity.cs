using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesafioSEA.Domain.Entities
{
    public class StoryEntity
    {
        public string IdStory { get; set; }
        public string StoryText { get; set; }
        public DateTime CreatedAt { get; set; }
        public UserEntity Author { get; set; }
        public ICollection<UserEntity> Likes { get; set; }
    }
}
