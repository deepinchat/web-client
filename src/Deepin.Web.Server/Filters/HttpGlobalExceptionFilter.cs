using System;
using System.Net;
using Deepin.Web.Server.ActionResults;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json.Linq;

namespace Deepin.Web.Server.Filters;


public class HttpGlobalExceptionFilter(ILogger<HttpGlobalExceptionFilter> logger, IWebHostEnvironment env) : IExceptionFilter
{
    private readonly ILogger<HttpGlobalExceptionFilter> _logger = logger;
    public void OnException(ExceptionContext context)
    {
        logger.LogError(new EventId(context.Exception.HResult), context.Exception, context.Exception.Message);
        var json = new JObject(new JProperty("Messages", ["An error occur.Try it again."]));
        if (env.IsDevelopment())
        {
            json.Add(new JProperty("Exception", JToken.FromObject(context.Exception)));
        }
        context.Result = new InternalServerErrorObjectResult(json);
        context.HttpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
        context.ExceptionHandled = true;
    }
}
