using DesafioSEA.Data.Context;
using DesafioSEA.Domain.Entities;
using DesafioSEA.Service.Commom;
using DesafioSEA.Service.Story.Request;
using DesafioSEA.Service.Story.Response;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;

namespace DesafioSEA.Service.Story.Handle
{
    public class StoryPutLikeHandle
    {
        StoryPutLikeRequest _request { get; set; }
        DataContext _context { get; set; }
        IConfiguration _configuration { get; set; }

        public StoryPutLikeHandle(StoryPutLikeRequest request, DataContext context, IConfiguration configuration)
        {
            _request = request;
            _context = context;
            _configuration = configuration;

            _request.Email = _request.Email.ToLower();
        }

        public async Task<ActionResult> Handle()
        {
            List<StoryEntity> Stories;

            try
            {
                var Story = _context.Story.Include(x => x.Likes).FirstOrDefault(x => x.IdStory == _request.IdStory);
                var User = _context.User.FirstOrDefault(x => x.Email == _request.Email);

                if (Story == null || User == null)
                    return new StatusCodeResult(400);

                if (_request.Status == true)
                    Story.Likes.Add(User);
                else
                    Story.Likes.Remove(User);

                _context.Story.Update(Story);
                await _context.SaveChangesAsync();

                return new StatusCodeResult(200);
            }
            catch
            {
                return new StatusCodeResult(400);
            }
        }
    }
}
