using OrdersDashboard.Domain.Models;
using System.Web.Http;
using System.Linq;

namespace OrdersDashboard.Web.Api.Controllers
{
    public class CartsController : ApiController
    {
        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(Storage.Instance.Cart);
        }

        [HttpGet]
        [Route("{cartId}/products")]
        public IHttpActionResult Products(string cartId)
        {
            var productsFromCart = Storage.Instance.Cart.Products.Where(o => o.CartIdentifier == cartId);
            return Ok(productsFromCart);
        }

    }
}
