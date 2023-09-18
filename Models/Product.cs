
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace testASP.REACTproject.Models
{
    public class Product
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        [Display(Name = "Назва товару")]
        public string? Name { get; set; }

        [Required]
        [Display(Name = "Виробник")]
        public int ProducerId { get; set; }

        [Required]
        [MaxLength(500)]
        [Display(Name = "Опис")]
        public string? Descrtiption { get; set; }

        [Required]
        [Display(Name = "Зображення")]
        public string? Image { get; set; }

        [Required]
        [MaxLength(500)]
        [Display(Name = "Характеристики")]
        public string? Characteristic { get; set; }

        [Required]
        public List<Tag>? Tags { get; set; }

        [Required]
        [Display(Name ="Ціна")]
        public int Price { get; set; }

        [Required]
        [Display(Name = "Категорія")]
        public int CategoryId { get; set; }

        public List<Feedback>? Feedbacks { get; set; }


        [ForeignKey("CategoryId")]
        public virtual Category? Category { get; set; }

        [ForeignKey("ProducerId")]
        public virtual Producer? Producer { get; set; }

        public virtual List<OrderItem>? OrderItems { get; set; }
        public virtual List<CartItem>? CartItems { get; set; }
    }
}
