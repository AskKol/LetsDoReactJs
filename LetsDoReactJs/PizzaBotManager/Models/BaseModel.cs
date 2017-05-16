using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PizzaBotManager.Models
{
    public class BaseModel
    {
        public string ApplicationName { get; private set; }
        public string PageTitle { get; set; }
        public bool WebJobButtonClicked
        {
            get; set;
        }
        public BaseModel(string applicationName="")
        {
            this.ApplicationName = !String.IsNullOrEmpty(applicationName) ? applicationName : "PizzaBM";
        }
        public BaseModel()
        {
            if (String.IsNullOrEmpty(this.ApplicationName))
            {
                this.ApplicationName = "PizzaBM";
            }
        }
    }
}
