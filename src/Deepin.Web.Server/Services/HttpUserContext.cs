using System.Security.Claims;

namespace Deepin.Web.Server.Services;

public interface IUserContext
{
    Guid UserId { get; }
    string UserAgent { get; }
    string IpAddress { get; }
}

public class HttpUserContext : IUserContext
{
    private readonly IHttpContextAccessor _context;

    public HttpUserContext(IHttpContextAccessor httpContextAccessor)
    {
        _context = httpContextAccessor ?? throw new ArgumentNullException(nameof(httpContextAccessor));
    }

    private string? _userId;
    private string? _userAgent;
    private string? _ipAddress;
    public Guid UserId
    {
        get
        {
            if (string.IsNullOrEmpty(_userId))
            {
                _userId = _context.HttpContext?.User.FindFirst("sub")?.Value;
            }
            if (string.IsNullOrEmpty(_userId))
            {
                _userId = _context.HttpContext?.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            }
            return string.IsNullOrEmpty(_userId) ? Guid.Empty : Guid.Parse(_userId);
        }
    }
    public string UserAgent
    {
        get
        {
            if (string.IsNullOrEmpty(_userAgent))
            {
                _userAgent = _context.HttpContext?.Request.Headers["User-Agent"];
            }
            return _userAgent ?? string.Empty;
        }
    }
    public string IpAddress
    {
        get
        {
            if (string.IsNullOrEmpty(_ipAddress))
            {
                if (!string.IsNullOrEmpty(_context.HttpContext?.Request.Headers["CF-CONNECTING-IP"]))
                {
                    _ipAddress = _context.HttpContext.Request.Headers["CF-CONNECTING-IP"];
                }
                if (!string.IsNullOrEmpty(_context.HttpContext?.GetServerVariable("HTTP_X_FORWARDED_FOR")))
                {
                    _ipAddress = _context.HttpContext.GetServerVariable("HTTP_X_FORWARDED_FOR");
                }
                else if (!string.IsNullOrEmpty(_context.HttpContext?.Connection.RemoteIpAddress?.ToString()))
                {
                    _ipAddress = _context.HttpContext.Connection.RemoteIpAddress.ToString();
                }
            }
            return _ipAddress ?? string.Empty;
        }
    }
}