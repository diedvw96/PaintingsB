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

        // Add new painting with given data
        public async Task<Painting> CreatePainting(Painting painting)
        {
            _context.Paintings.Add(painting);
            await _context.SaveChangesAsync();
            return painting;
        }

        // Delete a single painting with given id 
        public async Task DeletePainting(Guid paintingId)
        {
            var painting = await _context.Paintings.FindAsync(paintingId);

            if (painting != null)
            {
                _context.Paintings.Remove(painting);
                await _context.SaveChangesAsync();
            }
        }

        // Receive all paintings
        public async Task<List<Painting>> GetAllPaintings()
        {
            return await _context.Paintings.ToListAsync();  
        }

        // Receive single painting with given id
        public async Task<Painting?> GetPainting(Guid paintingId)
        {
            var painting = await _context.Paintings.FindAsync(paintingId);
            if(painting != null)
            {
                return painting;
            }
            return null;
        }

        // Receive multiple paintings with given ids
        public async Task<List<Painting>> GetPaintings(List<Guid> paintingIds)
        {
            return await _context.Paintings.Where(painting => paintingIds.Contains(painting.Id)).ToListAsync();
        }

        // Update painting with given data
        public async Task<Painting> UpdatePainting(Painting painting)
        {
            _context.Paintings.Update(painting);
            await _context.SaveChangesAsync();
            return painting;
        }
    }
}
