using System.ComponentModel.DataAnnotations;

namespace Tagupp.api.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8,MinimumLength = 4,ErrorMessage="Password length must be between 4 and 8")]
        public string Password { get; set; }
    }
}