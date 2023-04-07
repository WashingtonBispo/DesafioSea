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

namespace DesafioSEA.Service.User.Handle
{
    public class UserPostHandle
    {
        UserPostRequest _request { get; set; }
        DataContext _context { get; set; }
        IConfiguration _configuration { get; set; }

        public UserPostHandle(UserPostRequest request, DataContext context, IConfiguration configuration)
        {
            _request = request;
            _context = context;
            _configuration = configuration;
        }

        public async Task<UserResponse> Handle()
        {
            Auth.ValidateUserInfor(_request.Email, _request.Password);

            var user = new UserEntity
            {
                Email = _request.Email,
                Name = _request.Name,
                Password = Auth.PasswordCrypt(_request.Password)
            };

            _context.User.Add(user);

            await _context.SaveChangesAsync();

            var JWT = Auth.GenerateJWTToUser(user, _configuration);

            return new UserResponse { JWT = JWT };
        }
    }
}
