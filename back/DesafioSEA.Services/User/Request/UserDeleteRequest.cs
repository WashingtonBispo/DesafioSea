using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace DesafioSEA.Service.User.Request
{
    public class UserDeleteRequest
    {
        [Required]
        [FromQuery]
        public string Email { get; set; }

        [Required]
        [FromQuery]
        public string Password { get; set; }
    }
}
