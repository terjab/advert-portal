using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ad_portal.Domain.Models
{
  public class Ad
  {
    [Key, Required, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid AdId { get; set; }
    [Required]
    public string Title { get; set; }
    [Required]
    public string Condition { get; set; }
    [Required]
    public string City { get; set; }
    [Required]
    public string Type { get; set; }
    [Required]
    public string Description { get; set; }
    [Required]
    public string Price { get; set; }
    [Required]
    public Guid CategoryId { get; set; }

    [ForeignKey("CategoryId")]
    public Category Category { get; set; }
    [Required]
    public Guid PhotoId { get; set; }

    [ForeignKey("PhotoId")]
    public PhotoPath Photos { get; set; }
     public DateTime CreatedAt { get; set; }
    public Ad()
    {
        CreatedAt = DateTime.Now;
    }
  }
}
