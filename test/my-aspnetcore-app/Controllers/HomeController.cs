using Microsoft.AspNetCore.Mvc;

namespace my_aspnetcore_app.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}