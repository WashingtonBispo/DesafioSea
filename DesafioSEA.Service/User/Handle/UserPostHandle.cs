using DesafioSEA.Data.Context;
using DesafioSEA.Domain.Entities;
using DesafioSEA.Service.User.Request;
using DesafioSEA.Service.User.Response;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using DesafioSEA.Service.Commom;

namespace DesafioSEA.Service.User.Handle
{
    public class UserPostHandle
    {
        UserPostRequest _request { get; set; }
        private readonly DataContext _context;
        private readonly IConfiguration _configuration;
        
        public UserPostHandle(UserPostRequest request, DataContext context, IConfiguration configuration)
        {
            _request = request;
            _context = context; 
            _configuration = configuration; 
        }

        public async Task<UserResponse> Handle()
        {

            Auth.ValidateUserInfor(_request.Email, _request.Password);

            var password = Auth.PasswordCrypt(_request.Password);
            var user = new UserEntity
            {
                Email = _request.Email,
                isAdmin = false,
                Name = _request.Name,
                Status = Domain.Enums.EnUserStatus.Ativo,
                Password = password,
            };

            _context.User.Add(user);
            await _context.SaveChangesAsync();
            _context.SaveChanges();

            var JWT = Auth.GenerateJWTToUser(user, _configuration);

            return new UserResponse { JWT = JWT };
        }
    }
}
