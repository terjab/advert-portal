using ad_portal.Domain.Models;
using ad_portal.Domain.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ad_portal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdController : ControllerBase
    {
        private readonly IAdRepository adRepository;
        public IEnumerable<Ad> Ads { get; set; }

        public AdController(IAdRepository AdRepository)
        {
            this.adRepository = AdRepository;
        }

        public async Task<ActionResult<Ad>> GetAllAsync()
        {
            IEnumerable<Ad> ads = await adRepository.GetAdList();
            if (ads != null)
                return Ok(ads);
            return NoContent();
        }

        [HttpPost]
        [Consumes(contentType: "application/json", otherContentTypes: "multipart/form-data")]
        public async Task<ActionResult> PostAsync([FromBody] Ad ad)
        {
            var result = await adRepository.CreateAd(ad);
            return Ok();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetByIdAsync(Guid id)
            {
            Ad ad = await adRepository.GetAdById(id);
            if (ad != null)
                return Ok(ad);
            return NotFound();
        }
    }
}
