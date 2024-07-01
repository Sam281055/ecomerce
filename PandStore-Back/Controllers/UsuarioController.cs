using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PandStore_Back.Model;
using PandStore_Back.Service;

namespace PandStore_Back.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuarioController : Controller
    {
        private readonly UsuarioService _usuarioService;

        public UsuarioController(UsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody]dataLogin data)
        {
            LoginReturn loged = await _usuarioService.Login(data);
            return StatusCode(StatusCodes.Status200OK, loged);
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody]dataRegister data)
        {
            string register = await _usuarioService.Register(data);
            return StatusCode(StatusCodes.Status200OK, register);
        }
    }
}
