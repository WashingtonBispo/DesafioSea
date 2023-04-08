using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace DesafioSEA.Service.User.Request
{
    public class UserGetRequest
    {
        [FromQuery]
        [Required]
        public string Email { get; set; }

        [FromQuery]
        [Required]
        public string Password { get; set; }
    }
}
