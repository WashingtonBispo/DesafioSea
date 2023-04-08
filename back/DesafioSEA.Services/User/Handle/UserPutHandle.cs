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
    public class UserPutHandle
    {
        UserPutRequest _request { get; set; }
        DataContext _context { get; set; }
        IConfiguration _configuration { get; set; }

        public UserPutHandle(UserPutRequest request, DataContext context, IConfiguration configuration)
        {
            _request = request;
            _context = context;
            _configuration = configuration;

            _request.Email = _request.Email.ToLower();
        }

        public async Task<UserResponse> Handle()
        {


            try
            {
                Auth.ValidateUserInfor(_request.Email, _request.Password);
                var user = _context.User.FirstOrDefault(x => x.Email == _request.Email);
                
                if (_request.Name != null) user.Name = _request.Name;
                if (_request.Password != null) user.Password = Auth.PasswordCrypt(_request.Password);


                _context.User.Update(user);

                await _context.SaveChangesAsync();

                var JWT = Auth.GenerateJWTToUser(user, _configuration);

                return new UserResponse { JWT = JWT };
            }
            catch
            {
                return null;
            }


        }
    }
}
