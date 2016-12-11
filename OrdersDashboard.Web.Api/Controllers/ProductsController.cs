using OrdersDashboard.Domain.Models;
using System.Web.Http;

namespace OrdersDashboard.Web.Api.Controllers
{
    [RoutePrefix("api/products")]
    public class ProductsController : ApiController
    {

        [HttpGet]
        [Route("{productIdentifier}")]
        public IHttpActionResult Get(string productIdentifier)
        {
            return Ok(Storage.Instance.GetProduct(productIdentifier));
        }

        [HttpGet]
        [Route("find/{searchTerm}")]
        public IHttpActionResult Find(string searchTerm)
        {
            return Ok(Storage.Instance.FindProducts(searchTerm));
        }
    }
}
