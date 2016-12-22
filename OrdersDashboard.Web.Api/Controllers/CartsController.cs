using OrdersDashboard.Domain.Models;
using System.Web.Http;

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

        [Route("removeproduct/{productIdentifier}")]
        [HttpGet]
        public IHttpActionResult RemoveProductFromCart(string productIdentifier)
        {
            Storage.Instance.RemoveProductFromCart(productIdentifier);

            return Get();
        }

        [Route("clear")]
        [HttpGet]
        public IHttpActionResult Clear()
        {
            Storage.Instance.Cart.Products.Clear();

            return Get();
        }

        public IHttpActionResult Options()
        {
            return Ok();
        }
    }
}
