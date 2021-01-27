using _413_1.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _413_1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();  //Index is the default view it returns, unless we tell it something else
        }

        [HttpGet("Grades")]
        public IActionResult Grades ()
        {
            return View();
        }

        [HttpPost("Grades")]
        public IActionResult Grades (GradesModel model)
        {
            return View();
        }
    }
}
