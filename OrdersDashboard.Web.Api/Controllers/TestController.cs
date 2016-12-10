using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OrdersDashboard.Web.Api.Controllers
{
    public class TestController : ApiController
    {
        public HttpResponseMessage Get()
        {
            return new HttpResponseMessage()
            {
                Content = new StringContent("GET: Test message")
            };
        }
    }
}
