using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ad_portal.Domain.Repositories;
using ad_portal.Domain.Models;

namespace ad_portal.Persistence.Services
{
  public class AdRepository : BaseRepository, IAdRepository
  {
    public AdRepository(AppDbContext context) : base(context) { }


    public async Task<IEnumerable<Ad>> GetAdList()
    {
      return await context.ads
          .Include(p => p.Category)
          .Include(p => p.Photos).ToListAsync();
    }

    public async Task<Ad> CreateAd(Ad ad)
    {
      var result = await context.ads.AddAsync(ad);
      return (await context.SaveChangesAsync() > 0) ? result.Entity : null;
    }

        public async Task<Ad> GetAdById(Guid id)
        {
            return await context.ads.Include(p => p.Category).Include(p => p.Photos).FirstOrDefaultAsync(p => p.AdId == id);
        }
    }
}
