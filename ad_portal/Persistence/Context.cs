using System;
using ad_portal.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace ad_portal.Persistence
{
  public class AppDbContext : DbContext
  {
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Ad> ads { get; set; }
    public DbSet<Category> categories { get; set; }
    public DbSet<PhotoPath> photos { get; set; }


  }
}
