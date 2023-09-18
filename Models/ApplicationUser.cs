using Microsoft.AspNetCore.Identity;

namespace testASP.REACTproject.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }

        public virtual List<Order>? Orders { get; set; }
        public virtual List<CartItem>? CartItems { get; set; }
    }
}