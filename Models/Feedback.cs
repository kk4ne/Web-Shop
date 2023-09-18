using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace testASP.REACTproject.Models
{
    public class Feedback
    {
        public int Id { get; set; }

        [Required]
        [Display(Name ="Користувач")]
        public string? UserId { get; set; }

        [Required]
        [Display(Name = "Продукт")]
        public int ProductId { get; set; }

        [Required]
        [MaxLength(300)]
        public string? Text { get; set; }

        [ForeignKey("UserId")]
        public virtual ApplicationUser? ApplicationUser { get; set; }

        [ForeignKey("ProductId")]
        public virtual Product? Product { get; set; }
    }
}
