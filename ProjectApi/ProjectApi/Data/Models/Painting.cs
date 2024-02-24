namespace ProjectApi.Data.Models
{
    public class Painting
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }      
        public string ImageUrl { get; set; } 
        public double Price { get; set; }       
    }
}