using System;
using Deepin.Web.Server.Services;
using Microsoft.AspNetCore.Authentication;
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
        .AddOpenIdConnect(OpenIdConnectDefaults.AuthenticationScheme, options =>
        {
            options.Authority = identitySection["Url"];
            options.ClientId = identitySection["ClientId"];
            options.ClientSecret = identitySection["ClientSecret"];
            options.ResponseType = "code";
            options.SaveTokens = true;
            options.Scope.Add("openid");
            options.Scope.Add("profile");
            options.Scope.Add("offline_access");
            var scopes = identitySection.GetRequiredSection("Scopes").Get<IDictionary<string, string>>();
            if (scopes != null)
            {
                foreach (var scope in scopes)
                {
                    options.Scope.Add(scope.Key);
                }
            }
            options.GetClaimsFromUserInfoEndpoint = true;

            options.UseTokenLifetime = true;
            options.RefreshOnIssuerKeyNotFound = true;
            options.RefreshInterval = TimeSpan.FromMinutes(5);
            options.AutomaticRefreshInterval = TimeSpan.FromMinutes(30);
            options.Events = new OpenIdConnectEvents
            {
                OnTokenResponseReceived = context =>
                {
                    if (context.TokenEndpointResponse.Error is null)
                    {
                        context.Properties?.StoreTokens(context.TokenEndpointResponse.Parameters.Select(kvp => new AuthenticationToken
                        {
                            Name = kvp.Key,
                            Value = kvp.Value
                        }));
                    }
                    else
                    {
                        context.Fail(new Exception($"OpenID Connect error: {context.TokenEndpointResponse.Error} - {context.TokenEndpointResponse.ErrorDescription}"));

                    }
                    return Task.CompletedTask;
                }
            };
        })
        .AddCookie(CookieAuthenticationDefaults.AuthenticationScheme, options =>
        {
            options.Cookie.Name = "deepin.web.auth";
            options.ExpireTimeSpan = TimeSpan.FromDays(7);
            options.SlidingExpiration = true;
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
