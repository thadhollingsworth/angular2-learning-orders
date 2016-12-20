using OrdersDashboard.Domain.Models;
using System.Web.Http;
using System.Linq;
using System.Web.Http.Cors;

namespace OrdersDashboard.Web.Api.Controllers
{
    [RoutePrefix("api/carts")]
    public class CartsController : ApiController
    {
        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(Storage.Instance.Cart);
        }

        //TODO: should there be a need for multiple carts
        //[HttpGet]
        //[Route("{cartId}/products")]
        //public IHttpActionResult Products(string cartId)
        //{
        //    var productsFromCart = Storage.Instance.Cart.Products.Where(o => o.CartIdentifier == cartId);
        //    return Ok(productsFromCart);
        //}

        [Route("addproduct")]
        [HttpPost]
        public IHttpActionResult AddProductToCart([FromBody]ProductModel product)
        {
            Storage.Instance.AddProductToCart(product);

            return Ok();
        }

        public IHttpActionResult Options()
        {
            return Ok();
        }
    }
}
