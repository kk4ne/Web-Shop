using System.ComponentModel.DataAnnotations;

namespace testASP.REACTproject.Models
{
    public class Producer
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        [Display(Name = "Назва виробника")]
        public string? Name { get; set; }
        
        public virtual List<Product>? Products { get; set; }
    }
}
