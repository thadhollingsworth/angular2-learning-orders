using System;

namespace OrdersDashboard.Domain.Models
{
    public class ProductModel
    {
        public string ProductIdentifier { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string CartIdentifier { get; set; }

        public Uri ImageLocation { get; set; }
    }
}
