using System.Text.Json;
using Deepin.Internal.SDK.Extensions;
using Deepin.Web.Server.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.HttpOverrides;

namespace Deepin.Web.Server.Extensions;

public static class HostExtensions
{

    public static WebApplicationBuilder AddApplicationService(this WebApplicationBuilder builder)
    {
        builder.Services
        .AddDefaultUserContexts()
        .AddDefaultDataProtection(builder.Configuration.GetConnectionString("Redis"))
        .AddDefaultAuthentication(builder.Configuration);

        builder.AddServiceDefaults();
        builder.Services
        .AddTransient<HttpClientAuthorizationDelegatingHandler>()
        .AddDeepinApiClient(options =>
        {
            options.BaseUrl = builder.Configuration["DeepinApiUrl"] ?? throw new ArgumentNullException("DeepinApiUrl");
            options.Timeout = TimeSpan.FromSeconds(30);
            options.JsonSerializerOptions = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                PropertyNameCaseInsensitive = true,
                Converters =
                {
                    new System.Text.Json.Serialization.JsonStringEnumConverter()
                },
                DefaultIgnoreCondition = System.Text.Json.Serialization.JsonIgnoreCondition.WhenWritingNull,
                WriteIndented = true
            };
        }).AddHttpMessageHandler<HttpClientAuthorizationDelegatingHandler>();
        builder.Services.AddScoped<IChatService, ChatService>();
        builder.Services.AddScoped<IMessageService, MessageService>();
        builder.Services.AddScoped<IUserService, UserService>();
        builder.Services.AddScoped<IContactService, ContactService>();
        builder.Services.AddReverseProxy()
            .AddTransforms<AccessTokenTransformProvider>()
            .LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));
        return builder;
    }

    public static WebApplication UseApplicationService(this WebApplication app)
    {

        app.UseForwardedHeaders(new ForwardedHeadersOptions
        {
            ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
        });
        app.UseDefaultFiles();
        app.MapStaticAssets();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.MapOpenApi();
        }

        var pathBase = app.Configuration["PathBase"];

        if (!string.IsNullOrEmpty(pathBase))
        {
            app.UsePathBase(pathBase);
        }
        app.UseHttpsRedirection();
        app.UseAuthentication();
        app.UseAuthorization();

        app.UseDefaultOpenApi(app.Configuration);

        app.MapDefaultHealthChecks();

        app.MapControllers();
        app.MapGet("/api/about", () => new
        {
            Name = "Deepin.Web.API",
            Version = "1.0.0",
            DeepinEnv = app.Configuration["DEEPIN_ENV"],
            app.Environment.EnvironmentName
        });
        app.MapFallbackToFile("/index.html").RequireAuthorization();
        app.MapReverseProxy();
        return app;
    }
}
