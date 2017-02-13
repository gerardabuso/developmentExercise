using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace SelfHost
{
    public class PetsController : ApiController
    {
        Pet[] pets = new Pet[]  
        {  
            new Pet { Id = 1, Name = "Rover", FileName = string.Empty },  
            new Pet { Id = 2, Name = "Fido", FileName = string.Empty },  
            new Pet { Id = 3, Name = "Pixie", FileName = string.Empty }  
        };

        public IEnumerable<Pet> GetAllProducts()
        {
            return pets;
        }
    }
}
