using System.ComponentModel.DataAnnotations;

namespace testASP.REACTproject.Models
{
    public class Category
    {
        public int Id { get; set; }

        [Required]
        [Display(Name = "Категорія")]
        [MaxLength(100)]
        public string? CategoryName { get; set; }


        public virtual List<Product>? Products { get; set; }
    }
}
