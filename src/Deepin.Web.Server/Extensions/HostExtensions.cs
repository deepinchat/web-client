using System;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;

namespace Deepin.Web.Server.Extensions;

public static class HostExtensions
{

    public static WebApplicationBuilder AddApplicationService(this WebApplicationBuilder builder)
    {

        builder.Services.AddControllers();
        // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
        builder.Services.AddOpenApi();

        var identitySection = builder.Configuration.GetSection("Identity");
        builder.Services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = OpenIdConnectDefaults.AuthenticationScheme;
            options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
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
        return builder;
    }

    public static WebApplication UseApplicationService(this WebApplication app)
    {
        app.UseDefaultFiles();
        app.MapStaticAssets();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.MapOpenApi();
        }

        app.UseHttpsRedirection();
        app.UseAuthentication();
        app.UseAuthorization();

        app.MapControllers();

        app.MapFallbackToFile("/index.html").RequireAuthorization();
        return app;
    }
}
