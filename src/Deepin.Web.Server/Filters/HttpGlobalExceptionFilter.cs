using System;
using System.Net;
using Deepin.Web.Server.ActionResults;
using Deepin.Web.Server.Exceptions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json.Linq;

namespace Deepin.Web.Server.Filters;


public class HttpGlobalExceptionFilter(ILogger<HttpGlobalExceptionFilter> logger, IWebHostEnvironment env) : IExceptionFilter
{
    private readonly ILogger<HttpGlobalExceptionFilter> _logger = logger;
    public void OnException(ExceptionContext context)
    {
        logger.LogError(new EventId(context.Exception.HResult), context.Exception, context.Exception.Message);
        if (context.Exception.GetType() == typeof(InvalidInputException))
        {
            var problemDetails = new HttpValidationProblemDetails()
            {
                Instance = context.HttpContext.Request.Path,
                Status = StatusCodes.Status400BadRequest,
                Detail = "Please refer to the errors property for additional details."
            };

            switch (context.Exception.InnerException)
            {
                case null:
                    problemDetails.Errors.Add("Message", [context.Exception.Message]);
                    break;
                case FluentValidation.ValidationException validationException:
                    validationException.Errors.GroupBy(x => x.PropertyName)
                        .ToList()
                        .ForEach(group =>
                        {
                            problemDetails.Errors.Add(group.Key, group.Select(x => x.ErrorMessage).ToArray());
                        });
                    break;
            }
            context.Result = new BadRequestObjectResult(problemDetails);
            context.HttpContext.Response.StatusCode = (int)HttpStatusCode.BadRequest;
        }
        else
        {
            var json = new JObject(new JProperty("Messages", ["An error occur.Try it again."]));
            if (env.IsDevelopment())
            {
                json.Add(new JProperty("Exception", JToken.FromObject(context.Exception)));
            }
            context.Result = new InternalServerErrorObjectResult(json);
            context.HttpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
        }
        context.ExceptionHandled = true;
    }
}
