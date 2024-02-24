using ProjectApi.Data.Models;
using ProjectApi.Data.Repositories;

namespace ProjectApi.Services
{
    public class UserService : IUserService
    {
        private readonly UserRepository _repository;

        public UserService(UserRepository repository)
        {
            _repository = repository;
        }

        public async Task<User> CreateUser(User user)
        {
            return await _repository.CreateUser(user);
        }

        public async Task DeleteUser(Guid userId)
        {
            await _repository.DeleteUser(userId);
        }

        public async Task<List<User>> GetAllUsers()
        {
            var users = await _repository.GetAllUsers();
            return users;
        }

        public async Task<User?> GetUser(Guid userId)
        {
            return await _repository.GetUser(userId);
        }

        public async Task<List<User>> GetUsers(List<Guid> userIds)
        {
            return await _repository.GetUsers(userIds);
        }

        public async Task<User> UpdateUser(User user)
        {
            return await _repository.UpdateUser(user);
        }
    }
}
