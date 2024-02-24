using ProjectApi.Data.Models;

namespace ProjectApi.Services
{
    public interface IPaintingService
    {
        Task<Painting?> GetPainting(Guid paintingId);
        Task<List<Painting>> GetAllPaintings();
        Task<List<Painting>> GetPaintings(List<Guid> paintingIds);
        Task<Painting> CreatePainting(Painting painting);
        Task<Painting> UpdatePainting(Painting painting);
        Task DeletePainting(Guid paintingId);
    }
}
