using Microsoft.EntityFrameworkCore;
using Tagupp.api.Models;

namespace Tagupp.api.Data
{
    public class DataContext : DbContext
    {
        
    public DataContext(DbContextOptions<DataContext> options):base(options){}

    public DbSet<Value> values { get; set; }
    public DbSet<User> Users { get; set; }

    }
}