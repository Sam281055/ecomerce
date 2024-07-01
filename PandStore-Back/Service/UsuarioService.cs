using Microsoft.IdentityModel.Tokens;
using MySql.Data.MySqlClient;
using PandStore_Back.Model;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace PandStore_Back.Service
{
    public class UsuarioService
    {
        public IConfiguration _configuration;
        public UsuarioService(IConfiguration iConfiguration)
        {
            _configuration = iConfiguration;
            conexion = iConfiguration.GetConnectionString("StringSQL");
        }
        private readonly string conexion;
        public async Task<LoginReturn> Login(dataLogin data)
        {
            string error = "Credenciales Incorrectas";
            Usuario response = new Usuario();
            LoginReturn retorno = new LoginReturn();
            string peticion = "SELECT * FROM usuario WHERE user = @user and password = @password";
            using (var con = new MySqlConnection(conexion))
            {
                try
                {
                    await con.OpenAsync();
                    MySqlCommand cmd = new MySqlCommand(peticion, con);
                    cmd.Parameters.AddWithValue("@user", data.user.ToString());
                    cmd.Parameters.AddWithValue("@password", data.password.ToString());
                    var reader = await cmd.ExecuteReaderAsync();
                    await reader.ReadAsync();

                    response = new Usuario
                    {
                        id = Convert.ToInt32(reader["id"]),
                        name = reader["user"].ToString(),
                        password = reader["password"].ToString(),
                        rol = Convert.ToInt32(reader["rol"])
                    };
                    await con.CloseAsync();
                    

                    var jwt = _configuration.GetSection("Jwt").Get<Jwt>();

                    var claims = new[]
                    {
                        new Claim(JwtRegisteredClaimNames.Sub, jwt.Subject),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                        new Claim("id", response.id.ToString()),
                        new Claim("Usuario", response.name),
                        new Claim("Rol", response.rol.ToString())

                    };

                    //var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwt.key));
                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwt.key));
                    //var singIn = new SigningCredentials(key, SecurityAlgorithms.Sha256);
                    var singIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                    var token = new JwtSecurityToken(
                            jwt.Issuer,
                            jwt.Audience,
                            claims,
                            expires: DateTime.Now.AddMinutes(30),
                            signingCredentials: singIn
                        );
                    var result = new JwtSecurityTokenHandler().WriteToken(token);
                    if (response.rol == 2)
                    {
                        retorno = new LoginReturn
                        {
                            token=result,
                            route="ruta2"
                        };

                    }
                    else
                    {
                        retorno = new LoginReturn
                        {
                            token = result,
                            route = "ruta1"
                        };
                    }

                    return retorno;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }

            }
            return retorno;
        }

        public async Task<string> Register(dataRegister data)
        {
            string error = "Este usuario ya existe";
            Usuario usuario = new Usuario();
            string peticion = "INSERT INTO usuario (user, password, rol) VALUES (@user, @password, @rol);";
            using (var con = new MySqlConnection(conexion))
            {
                try
                {
                    await con.OpenAsync();
                    MySqlCommand cmd = new MySqlCommand(peticion, con);
                    cmd.Parameters.AddWithValue("@user","'" + data.user.ToString() + "'");
                    cmd.Parameters.AddWithValue("@password", "'" + data.password.ToString() + "'");
                    cmd.Parameters.AddWithValue("@rol",data.rol);
                    var reader = await cmd.ExecuteReaderAsync();
                    await reader.ReadAsync();
                    await con.CloseAsync();
                    return "Usuario creado correctamente";
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    return "Ha ocurrido un error";
                }
            }
            return error;
        }


    }
}
