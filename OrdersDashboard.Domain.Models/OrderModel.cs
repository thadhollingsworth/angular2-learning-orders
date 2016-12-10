using System;
using System.Collections.Generic;

namespace OrdersDashboard.Domain.Models.Order
{
    public class OrderModel
    {
        public string OrderNumber { get; set; }
        public DateTime CreatedOn { get; set; }
        public List<ProductModel> Products { get; set; }
    }
}
