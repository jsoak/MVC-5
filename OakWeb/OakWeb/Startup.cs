using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(OakWeb.Startup))]
namespace OakWeb
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
