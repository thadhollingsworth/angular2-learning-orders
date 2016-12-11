using Microsoft.Owin;
using Newtonsoft.Json.Serialization;
using Owin;
using System.Web.Http;

[assembly: OwinStartup(typeof(OrdersDashboard.Web.Api.App_Start.Startup))]

namespace OrdersDashboard.Web.Api.App_Start
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            //app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);

        }
    }
}
