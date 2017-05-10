using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaBotManager.Components
{
    public class ConversationViewComponent: ViewComponent
    {

        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
