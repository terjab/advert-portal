using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ad_portal.Domain.Models
{
  public class PhotoPath
  {
    [Key, Required, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid PhotoId { get; set; }
    [Required]
    public string Path { get; set; }
  }
}
