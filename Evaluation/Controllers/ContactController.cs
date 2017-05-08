using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using IC.Models;
using System.Web.Http.Cors;
using System.Net.Mail;

namespace IC.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
   //[Route("api/contact")]
    public class ContactController : ApiController
    {

        public HttpResponseMessage Post([FromBody]ContactModel contact)
        {

            string to = "dishal@knightfrank.com";
            string from = "messagefrom@website.com";

            MailMessage message = new MailMessage(to, from);
            message.Subject = "Message from the website";
            message.Body = "Name: " + contact.Username + "\n" + "Email: " + contact.Email;

            SmtpClient client = new SmtpClient("10.64.1.16");
            //SmtpClient client = new SmtpClient("smtp.live.com");
            //client.Port = 587;
            //client.UseDefaultCredentials = true;
            client.Credentials = new NetworkCredential("dishal@knightfrank.com", "");
            client.EnableSsl = true;


            try
            {

                client.Send(message);
                Console.WriteLine("Email Successfully sent!");

            }

            catch (Exception e)
            {

                throw new Exception("Email failed", e);
            }

            return Request.CreateResponse(HttpStatusCode.OK, contact);
        }



    }
}