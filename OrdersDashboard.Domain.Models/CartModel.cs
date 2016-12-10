using System;
using System.Collections.Generic;

namespace OrdersDashboard.Domain.Models
{
    public class CartModel
    {
        public CartModel()
        {
            CartId = Guid.NewGuid().ToString();
            CreatedOn = DateTime.Now;
            Items = new List<ProductModel>();
        }
        public string CartId { get; set; }
        public DateTime CreatedOn { get; set; }
        public List<ProductModel> Items { get; set; }
    }
}
