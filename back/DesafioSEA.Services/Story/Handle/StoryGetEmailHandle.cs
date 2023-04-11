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
    public class StoryGetEmailHandle
    {
        StoryGetEmailRequest _request { get; set; }
        DataContext _context { get; set; }
        IConfiguration _configuration { get; set; }

        public StoryGetEmailHandle(StoryGetEmailRequest request, DataContext context, IConfiguration configuration)
        {
            _request = request;
            _context = context;
            _configuration = configuration;

            if(_request.Email != null)
                _request.Email = _request.Email.ToLower();
        }

        public async Task<List<StoryGetResponse>> Handle()
        {
            List<StoryEntity> Stories;

            try
            {

                if (!string.IsNullOrEmpty(_request.Email))
                {
                    Stories = _context.Story.Include(x => x.Likes).Include(a => a.Author).Where(x => x.Author.Email == _request.Email).ToList();
                }
                else
                {
                    Stories = _context.Story.Include(x=>x.Likes).Include(a => a.Author).ToList();
                }

                return Stories.Select(x => new StoryGetResponse(x)).ToList();
            }
            catch
            {
                return null;
            }
        }
    }
}
