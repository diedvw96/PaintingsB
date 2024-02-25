namespace ProjectApi.Data.Models
{
    public class Painting
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;    
        public string ImageUrl { get; set; } = string.Empty;
        public double Price { get; set; }       
    }
}