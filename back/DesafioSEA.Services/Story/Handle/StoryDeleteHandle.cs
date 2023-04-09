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
    public class StoryDeleteHandle
    {
        StoryDeleteRequest _request { get; set; }
        DataContext _context { get; set; }
        IConfiguration _configuration { get; set; }

        public StoryDeleteHandle(StoryDeleteRequest request, DataContext context, IConfiguration configuration)
        {
            _request = request;
            _context = context;
            _configuration = configuration;

        }

        public async Task<ActionResult> Handle()
        {

            try
            {

                var Story = _context.Story.FirstOrDefault(x => x.IdStory == _request.IdStory);
                _context.Story.Remove(Story);
                await _context.SaveChangesAsync();

                return new StatusCodeResult(200);
            }
            catch
            {
                return new StatusCodeResult(400); ;
            }
        }
    }
}
