using Microsoft.AspNetCore.Mvc;

namespace my_aspnetcore_app.Controllers
{
    public class ProductsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}