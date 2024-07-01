namespace PandStore_Back.Model
{
    public class dataLogin
    {
        public string user { get; set; }    
        public string password { get; set; }
    }

    public class LoginReturn
    {
        public string token { get; set; }
        public string route { get; set; }
    }

    public class dataRegister
    {
        public string user { get; set; }
        public string password { get; set; }
        public int rol { get; set; }
    }

}
