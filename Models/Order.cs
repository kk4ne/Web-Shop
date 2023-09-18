using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace testASP.REACTproject.Models
{
    public class Order
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        [Display(Name = "№ Замовлення")]
        public string? OrderNo { get; set; }

        [Required]
        [MaxLength(100)]
        [Display(Name = "Замовник")]
        public string? PersonName { get; set; }

        [Required]
        [MaxLength(100)]
        [Display(Name = "Телефон")]
        public string? Phone { get; set; }

        [Required]
        [MaxLength(100)]
        [Display(Name = "E-Mail")]
        public string? Email { get; set; }

        [Required]
        [MaxLength(100)]
        [Display(Name = "Адреса")]
        public string? Address { get; set; }

        public virtual List<OrderItem>? OrderItems { get; set; }

        [Required]
        [Display(Name = "Дата замовлення")]
        public DateTime? OrderDate { get; set; }

        [Required]
        [Display(Name = "Користувач")]
        public string? UserId { get; set; }

        [ForeignKey("UserId")]
        public virtual ApplicationUser? User { get; set; }
    }
}
