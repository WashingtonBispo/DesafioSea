using DesafioSEA.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesafioSEA.Domain.Entities
{
    public class UserEntity
    {
        public string Email { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public EnUserStatus Status { get; set; }
        public bool isAdmin { get; set; }
    }
}
