using Microsoft.AspNetCore.Mvc;
using PandStore_Back.Model;
using PandStore_Back.Service;

namespace PandStore_Back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        private readonly ProductoService _productoService;
        public ProductoController(ProductoService productoService)
        {
            _productoService = productoService;
        }

        [HttpGet]
        public async Task<IActionResult> GetList()
        {
            List<Producto> prd = await _productoService.ObtenerProductos();
            return StatusCode(StatusCodes.Status200OK, prd);
        }
        [HttpGet("/id")]
        public async Task<IActionResult> GetProductById([FromQuery] int id)
        {
            Producto prd = await _productoService.ObtenerProductoPorId(id);
            return StatusCode(StatusCodes.Status200OK, prd);
        }
        [HttpGet("/name")]
        public async Task<IActionResult> GetProductByName([FromQuery] string name)
        {
            List<Producto> prd = await _productoService.ObtenerProductoPorNombre(name);
            return StatusCode(StatusCodes.Status200OK, prd);
        }

        [HttpPost]
        public async Task<IActionResult> CrearProducto([FromBody]Producto producto)
        {
            bool respuesta = await _productoService.AgregarProducto(producto);
            return StatusCode(StatusCodes.Status200OK, new {isSuccess = respuesta});
        }
        [HttpPut]
        public async Task<IActionResult> Editar([FromBody]Producto producto)
        {
            bool respuesta = await _productoService.Edit(producto);
            return StatusCode(StatusCodes.Status200OK, new { isSuccess = respuesta });
        }
        [HttpDelete]
        public async Task<IActionResult> Eliminar(int id)
        {
            bool respuesta = await _productoService.EliminarProducto(id);
            return StatusCode(StatusCodes.Status200OK, new { isSuccess = respuesta });
        }

    }
}
