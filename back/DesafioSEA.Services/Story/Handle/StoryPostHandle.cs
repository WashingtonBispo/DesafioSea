using DesafioSEA.Data.Context;
using DesafioSEA.Domain.Entities;
using DesafioSEA.Service.Commom;
using DesafioSEA.Service.Story.Request;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesafioSEA.Service.Story.Handle
{
    public class StoryPostHandle
    {
        StoryPostRequest _request { get; set; }
        DataContext _context { get; set; }
        IConfiguration _configuration { get; set; }

        public StoryPostHandle(StoryPostRequest request, DataContext context, IConfiguration configuration)
        {
            _request = request;
            _context = context;
            _configuration = configuration;

            _request.Email = _request.Email.ToLower();
        }

        public async Task<ActionResult> Handle()
        {

            try
            {
                var user = _context.User.FirstOrDefault(x => x.Email == _request.Email);

                if(user == null)
                {
                    return new StatusCodeResult(400);
                }

                var Story = new StoryEntity
                {
                    IdStory = Guid.NewGuid().ToString(),
                    StoryText = _request.StoryText,
                    CreatedAt = DateTime.UtcNow,
                    Author = user
                };


                await _context.Story.AddAsync(Story);

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
