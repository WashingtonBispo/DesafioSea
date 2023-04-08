using DesafioSEA.Data.Context;
using DesafioSEA.Domain.Entities;
using DesafioSEA.Service.Commom;
using DesafioSEA.Service.User.Request;
using DesafioSEA.Service.User.Response;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace DesafioSEA.Service.User.Handle
{
    public class UserDeleteHandle
    {
        UserDeleteRequest _request { get; set; }
        DataContext _context { get; set; }
        IConfiguration _configuration { get; set; }

        public UserDeleteHandle(UserDeleteRequest request, DataContext context, IConfiguration configuration)
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
                var user = _context.User.FirstOrDefault(x => x.Password == Auth.PasswordCrypt(_request.Password) && x.Email == _request.Email);

                _context.User.Remove(user);
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
