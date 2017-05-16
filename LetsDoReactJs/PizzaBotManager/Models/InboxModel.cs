using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaBotManager.Models
{
    public class InboxModel:BaseModel
    {
       public bool WebJob
        {
            get;set;
        }
    
        public string Message
        {
            get; set;
        }
    }
}
