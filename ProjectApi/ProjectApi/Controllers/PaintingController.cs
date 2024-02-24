using Microsoft.AspNetCore.Mvc;
using ProjectApi.Data.Models;
using ProjectApi.Services;

namespace ProjectApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PaintingController : Controller
    {
        private readonly IPaintingService _service;

        public PaintingController(IPaintingService service)
        {
            _service = service;
        }

        [HttpGet("GetPainting")]
        public async Task<ActionResult<Painting>> GetPainting(Guid id)
        {
            var painting = await _service.GetPainting(id);
            if (painting == null)
            {
                return NotFound();
            }
            return painting;
        }

        [HttpGet("GetAllPaintings")]
        public async Task<ActionResult<List<Painting>>> GetAllPaintings()
        {
            return await _service.GetAllPaintings();
        }

        [HttpGet("GetPaintings")]
        public async Task<ActionResult<List<Painting>>> GetPaintings(List<Guid> paintingIds)
        {
            return await _service.GetPaintings(paintingIds);          
        }

        [HttpPost("CreatePainting")]
        public async Task<ActionResult<Painting>> CreateProduct(Painting painting)
        {
            await _service.CreatePainting(painting);
            return CreatedAtAction(nameof(GetPainting), new { id = painting.Id }, painting);
        }

        [HttpPut("UpdatePainting")]
        public async Task<ActionResult> UpdatePainting(Painting painting)
        {
            await _service.UpdatePainting(painting);  
            return Ok();
        }

        [HttpDelete("DeletePainting")]
        public async Task<ActionResult> DeletePainting(Guid paintingId)
        {
            await _service.DeletePainting(paintingId);
            return Ok();
        }
    }
}
