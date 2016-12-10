using System;
using OrdersDashboard.Domain.Models.Order;
using System.Collections.Generic;
using System.Linq;

namespace OrdersDashboard.Domain.Models
{
    /// <summary>
    /// Fake class to simulate storage - as app is for UI demo purposes
    /// </summary>
    public class Storage
    {
        private static readonly Lazy<Storage> lazy =
                new Lazy<Storage>(() => new Storage());

        public static Storage Instance { get { return lazy.Value; } }

        private Storage()
        {
            _cart = new CartModel();
            _orders = new List<OrderModel>();
            _allProducts = new List<ProductModel>();
            LoadData();
        }

        private List<OrderModel> _orders;
        private CartModel _cart;
        private List<ProductModel> _allProducts;

        public CartModel Cart { get { return _cart; } }
        public List<OrderModel> Orders {get {return _orders;} }

        private void LoadData()
        {
            LoadOrders();
            LoadAllProducts();
        }

        private void LoadAllProducts()
        {
            //first go through faked products in orders
            foreach(var order in _orders)
            {
                _allProducts.AddRange(order.Products);
            }

            //then create some additional faked products
            _allProducts.AddRange(Enumerable.Range(1, 5).Select(index => new ProductModel
            {
                ProductIdentifier = Guid.NewGuid().ToString(),
                Description = "Product Desktop Desc" + Guid.NewGuid().ToString(),
                Name = "Product-Desktop" + Guid.NewGuid().ToString(),
                Price = DateTime.Now.Second * DateTime.Now.Millisecond
            }).ToList());

            _allProducts.AddRange(Enumerable.Range(1, 5).Select(index => new ProductModel
            {
                ProductIdentifier = Guid.NewGuid().ToString(),
                Description = "Product Tablet Desc" + Guid.NewGuid().ToString(),
                Name = "Product-Tablet" + Guid.NewGuid().ToString(),
                Price = DateTime.Now.Second * DateTime.Now.Millisecond
            }).ToList());

            _allProducts.AddRange(Enumerable.Range(1, 5).Select(index => new ProductModel
            {
                ProductIdentifier = Guid.NewGuid().ToString(),
                Description = "Product iPhone Desc" + Guid.NewGuid().ToString(),
                Name = "Product-iPhone" + Guid.NewGuid().ToString(),
                Price = DateTime.Now.Second * DateTime.Now.Millisecond
            }).ToList());

            _allProducts.AddRange(Enumerable.Range(1, 5).Select(index => new ProductModel
            {
                ProductIdentifier = Guid.NewGuid().ToString(),
                Description = "Product Samsung TV Desc" + Guid.NewGuid().ToString(),
                Name = "Product-Samsung TV" + Guid.NewGuid().ToString(),
                Price = DateTime.Now.Second * DateTime.Now.Millisecond
            }).ToList());

        }

        private void LoadOrders()
        {
            _orders = new List<OrderModel>
            {
                new OrderModel
                {
                    CreatedOn = DateTime.Now,
                    OrderNumber = Guid.NewGuid().ToString(),
                    Products = Enumerable.Range(1,5).Select(index => new ProductModel
                    {
                        ProductIdentifier = Guid.NewGuid().ToString(),
                        Description = "Product Desc" + Guid.NewGuid().ToString(),
                        Name  = "Product-" + Guid.NewGuid().ToString(),
                        Price = DateTime.Now.Second * DateTime.Now.Millisecond
                    }).ToList()
                },
                new OrderModel
                {
                    CreatedOn = DateTime.Now,
                    OrderNumber = Guid.NewGuid().ToString(),
                    Products = Enumerable.Range(1,5).Select(index => new ProductModel
                    {
                        ProductIdentifier = Guid.NewGuid().ToString(),
                        Description = "Product Desc" + Guid.NewGuid().ToString(),
                        Name  = "Product-" + Guid.NewGuid().ToString(),
                        Price = DateTime.Now.Second * DateTime.Now.Millisecond
                    }).ToList()
                },
                new OrderModel
                {
                    CreatedOn = DateTime.Now,
                    OrderNumber = Guid.NewGuid().ToString(),
                    Products = Enumerable.Range(1,5).Select(index => new ProductModel
                    {
                        ProductIdentifier = Guid.NewGuid().ToString(),
                        Description = "Product Desc" + Guid.NewGuid().ToString(),
                        Name  = "Product-" + Guid.NewGuid().ToString(),
                        Price = DateTime.Now.Second * DateTime.Now.Millisecond
                    }).ToList()
                },
                new OrderModel
                {
                    CreatedOn = DateTime.Now,
                    OrderNumber = Guid.NewGuid().ToString(),
                    Products = Enumerable.Range(1,5).Select(index => new ProductModel
                    {
                        ProductIdentifier = Guid.NewGuid().ToString(),
                        Description = "Product Desc" + Guid.NewGuid().ToString(),
                        Name  = "Product-" + Guid.NewGuid().ToString(),
                        Price = DateTime.Now.Second * DateTime.Now.Millisecond
                    }).ToList()
                },
                new OrderModel
                {
                    CreatedOn = DateTime.Now,
                    OrderNumber = Guid.NewGuid().ToString(),
                    Products = Enumerable.Range(1,5).Select(index => new ProductModel
                    {
                        ProductIdentifier = Guid.NewGuid().ToString(),
                        Description = "Product Desc" + Guid.NewGuid().ToString(),
                        Name  = "Product-" + Guid.NewGuid().ToString(),
                        Price = DateTime.Now.Second * DateTime.Now.Millisecond
                    }).ToList()
                }
            };
        }

        public void AddProductToCart(ProductModel productModel)
        {
            productModel.CartIdentifier = _cart.CartId;
            _cart.Items.Add(productModel);
        }

        public void RemoveProductFromCart(ProductModel productModel)
        {
            _cart.Items.Remove(productModel);
        }

        public OrderModel GetOrder(string orderNumber)
        {
            return _orders.FirstOrDefault(o => o.OrderNumber == orderNumber);
        }

        public List<ProductModel> FindProducts(string searchTerm)
        {
            return _allProducts.Where(o => o.Name.ToLower().Contains(searchTerm.ToLower())).ToList();
        }
    }
}
