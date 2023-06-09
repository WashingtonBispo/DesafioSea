﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace DesafioSEA.Service.User.Request
{
    public class UserPostRequest
    {
        [Required]
        [FromBody]
        public string Email { get; set; }

        [Required]
        [FromBody]
        public string Password { get; set; }
        [Required]
        [FromBody]
        public string Name { get; set; }
    }
}
