using Microsoft.AspNetCore.Mvc;
using PizzaBotManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaBotManager.Components
{
    public class InboxViewComponent:ViewComponent
    {


        public IViewComponentResult Invoke(BaseModel aModel)
        {
            if (aModel != null && aModel.WebJobButtonClicked)
            {
                var anInbox = (InboxModel)aModel;
                anInbox.Message = "I work!";
            }
            return View(aModel);
        }
    }
}
