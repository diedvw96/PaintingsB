using Microsoft.EntityFrameworkCore;
using ProjectApi.Data.Models;

namespace ProjectApi.Data.Repositories
{
    public class PaintingRepository : IPaintingRepository
    {
        private readonly AppDbContext _context;

        public PaintingRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Painting> CreatePainting(Painting painting)
        {
            _context.Paintings.Add(painting);
            await _context.SaveChangesAsync();
            return painting;
        }

        public async Task DeletePainting(Guid paintingId)
        {
            var painting = await _context.Paintings.FindAsync(paintingId);

            if (painting != null)
            {
                _context.Paintings.Remove(painting);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<Painting>> GetAllPaintings()
        {
            return await _context.Paintings.ToListAsync();  
        }

        public async Task<Painting?> GetPainting(Guid paintingId)
        {
            var painting = await _context.Paintings.FindAsync(paintingId);
            if(painting != null)
            {
                return painting;
            }
            return null;
        }

        public async Task<List<Painting>> GetPaintings(List<Guid> paintingIds)
        {
            return await _context.Paintings.Where(painting => paintingIds.Contains(painting.Id)).ToListAsync();
        }

        public async Task<Painting> UpdatePainting(Painting painting)
        {
            _context.Paintings.Update(painting);
            await _context.SaveChangesAsync();
            return painting;
        }
    }
}
