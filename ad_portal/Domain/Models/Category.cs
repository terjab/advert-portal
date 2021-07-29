
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ad_portal.Domain.Models
{
  public class Category
  {
    [Key, Required, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid CategoryId { get; set; }
    [Required]
    public string Brand { get; set; }
    [Required]
    public string Model { get; set; }
    [Required]
    public string OperatingSystem { get; set; }
    [Required]
    public string MemoryType { get; set; }
    [Required]
    public string MemoryCapacity { get; set; }
    [Required]
    public string RamCapacity { get; set; }
    [Required]
    public string Cpu { get; set; }
    public string CpuFrequency { get; set; }
    [Required]
    public string GpuBrand { get; set; }
    [Required]
    public string CpuCores { get; set; }
    public string GpuType { get; set; }
    public string GpuMemory { get; set; }
    public string GpuChip { get; set; }
    [Required]
    public string Diagonal { get; set; }
    public string Color
    {
      get; set;

    }
  }
}
