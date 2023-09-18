using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace testASP.REACTproject.Models
{
    public class Tag
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        [Display(Name = "Назва тега")]
        public string? Name { get; set; }

        [Required]
        [Display(Name = "Продукти")]
        public virtual List<Product>? Products { get; set; }
    }
}
