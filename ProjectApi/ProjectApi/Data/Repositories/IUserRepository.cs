using ProjectApi.Data.Models;

namespace ProjectApi.Data.Repositories
{
    public interface IUserRepository
    {
        Task<User?> GetUser(Guid userId);
        Task<List<User>> GetAllUsers();
        Task<List<User>> GetUsers(List<Guid> userIds);
        Task<User> CreateUser(User user);
        Task<User> UpdateUser(User user);
        Task DeleteUser(Guid userId);
    }
}
