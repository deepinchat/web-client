using System;
using Deepin.Web.Server.Services;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.DataProtection;
using StackExchange.Redis;

namespace Deepin.Web.Server.Extensions;

public static class ServiceCollectionExtension
{

    public static WebApplicationBuilder AddServiceDefaults(this WebApplicationBuilder builder)
    {
        builder.Services
            .AddDefaultControllers()
            .AddDefaultHealthChecks()
            .AddDefaultOpenApi(builder.Configuration);

        return builder;
    }
    public static IServiceCollection AddDefaultAuthentication(this IServiceCollection services, IConfiguration configuration)
    {
        var identitySection = configuration.GetSection("Identity");
        services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = OpenIdConnectDefaults.AuthenticationScheme;
        })
        .AddCookie(CookieAuthenticationDefaults.AuthenticationScheme)
        .AddOpenIdConnect(OpenIdConnectDefaults.AuthenticationScheme, options =>
        {
            options.Authority = identitySection["Url"];
            options.ClientId = identitySection["ClientId"];
            options.ClientSecret = identitySection["ClientSecret"];
            options.ResponseType = "code";
            options.SaveTokens = true;
            options.Scope.Add("openid");
            options.Scope.Add("profile");
            var scopes = identitySection.GetRequiredSection("Scopes").Get<IDictionary<string, string>>();
            if (scopes != null)
            {
                foreach (var scope in scopes)
                {
                    options.Scope.Add(scope.Key);
                }
            }
            options.GetClaimsFromUserInfoEndpoint = true;
        });
        return services;
    }
    public static IServiceCollection AddDefaultUserContexts(this IServiceCollection services)
    {
        services.AddHttpContextAccessor();
        services.AddTransient<IUserContext, HttpUserContext>();
        return services;
    }

    public static IServiceCollection AddDefaultDataProtection(this IServiceCollection services, string? redisConnection = null)
    {
        if (redisConnection is null)
        {
            services.AddDataProtection(opts =>
            {
                opts.ApplicationDiscriminator = "Deepin.Web.Server";
            });
        }
        else
        {
            services.AddDataProtection(opts =>
            {
                opts.ApplicationDiscriminator = "Deepin.Web.Server";
            })
             .PersistKeysToStackExchangeRedis(ConnectionMultiplexer.Connect(redisConnection), "Deepin.Web.Server.DataProtection.Keys");
        }
        return services;
    }
}
