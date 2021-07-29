using ad_portal.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ad_portal.Domain.Repositories
{
  public interface IAdRepository
  {
    public Task<IEnumerable<Ad>> GetAdList();
    public Task<Ad> CreateAd(Ad ad);
    public Task<Ad> GetAdById(Guid id);
    }
}
