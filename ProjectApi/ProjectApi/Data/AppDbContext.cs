using Microsoft.EntityFrameworkCore;
using ProjectApi.Data.Models;

namespace ProjectApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // Define your DbSet properties here for each database table
        public DbSet<User> Users { get; set; }
    }
}
