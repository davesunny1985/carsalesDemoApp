using System;
using carsales.CrossCutting.IoC;
using Microsoft.Extensions.DependencyInjection;

namespace carsales.Web.Configuration
{
    public static class DependencyInjectionSetup
    {
        public static void AddDependencyInjectionSetup(this IServiceCollection services)
        {
            if (services == null) throw new ArgumentNullException(nameof(services));

            DIBootstrapper.RegisterServices(services);
        }
    }
}