using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ad_portal.Persistence.Services
{
  public abstract class BaseRepository
  {
    protected readonly AppDbContext context;

    public BaseRepository(AppDbContext context)
    {
      this.context = context;
    }
  }
}
