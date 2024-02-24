using Microsoft.AspNetCore.Mvc;
using ProjectApi.Data.Models;
using ProjectApi.Services;

namespace ProjectApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IUserService _service;

        public UserController(IUserService service)
        {
            _service = service;
        }

        [HttpGet("GetUser")]
        public async Task<ActionResult<User>> GetUser(Guid id)
        {
            var user = await _service.GetUser(id);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        [HttpGet("GetAllUsers")]
        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            return await _service.GetAllUsers();
        }

        [HttpGet("GetUsers")]
        public async Task<ActionResult<List<User>>> GetUsers(List<Guid> userIds)
        {
            return await _service.GetUsers(userIds);          
        }

        [HttpPost("CreateUser")]
        public async Task<ActionResult<User>> CreateProduct(User user)
        {
            await _service.CreateUser(user);
            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }

        [HttpPut("UpdateUser")]
        public async Task<ActionResult> UpdateUser(User user)
        {
            await _service.UpdateUser(user);  
            return Ok();
        }

        [HttpDelete("DeleteUser")]
        public async Task<ActionResult> DeleteUser(Guid userId)
        {
            await _service.DeleteUser(userId);
            return Ok();
        }
    }
}
