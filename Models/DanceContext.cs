using Microsoft.EntityFrameworkCore;

namespace DanceApi.Models
{
    public class DanceContext : DbContext
    {
        public DanceContext() : base()
        {
        }

        public DanceContext(DbContextOptions<DanceContext> options)
            : base(options)
        {
        }

        public DbSet<Appointment> Appointments { get; set; }
    }
}