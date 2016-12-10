using OrdersDashboard.Domain.Models;
using System.Web.Http;

namespace OrdersDashboard.Web.Api.Controllers
{
    [RoutePrefix("api/orders")]
    public class OrdersController : ApiController
    {
        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(Storage.Instance.Orders);
        }

        [HttpGet]
        [Route("{orderNumber}")]
        public  IHttpActionResult Get(string orderNumber)
        {
            return Ok(Storage.Instance.GetOrder(orderNumber));
        }
    }
}
