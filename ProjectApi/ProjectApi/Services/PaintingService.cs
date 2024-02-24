using ProjectApi.Data.Models;
using ProjectApi.Data.Repositories;

namespace ProjectApi.Services
{
    public class PaintingService : IPaintingService
    {
        private readonly PaintingRepository _repository;

        public PaintingService(PaintingRepository repository)
        {
            _repository = repository;
        }

        public async Task<Painting> CreatePainting(Painting painting)
        {
            return await _repository.CreatePainting(painting);
        }

        public async Task DeletePainting(Guid paintingId)
        {
            await _repository.DeletePainting(paintingId);
        }

        public async Task<List<Painting>> GetAllPaintings()
        {
            var paintings = await _repository.GetAllPaintings();
            return paintings;
        }

        public async Task<Painting?> GetPainting(Guid paintingId)
        {
            return await _repository.GetPainting(paintingId);
        }

        public async Task<List<Painting>> GetPaintings(List<Guid> paintingIds)
        {
            return await _repository.GetPaintings(paintingIds);
        }

        public async Task<Painting> UpdatePainting(Painting painting)
        {
            return await _repository.UpdatePainting(painting);
        }
    }
}
