using System.Threading.Tasks;
using Tagupp.api.Models;

namespace Tagupp.api.Data
{
    public interface IAuthRepository
    {

     Task<User> Register(User user, string password);   
     
    Task<User> Login(string username, string password);   

    Task<bool> UserExists(string username);
    }
}