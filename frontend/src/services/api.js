const API_BASE_URL = '/api';
class ApiService {
    async request(endpoint, options = {}) {
        const url = `${API_BASE_URL}${endpoint}`;
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        });
        if (!response.ok) {
            throw new Error(`API request failed: ${response.status} ${response.statusText}`);
        }
        return response.json();
    }
    // User API methods
    async getAllUsers() {
        return this.request('/users');
    }
    async getUserById(id) {
        return this.request(`/users/${id}`);
    }
    async createUser(user) {
        // Transform frontend user object to match backend UserDto structure
        const backendUser = {
            firstName: user.name.split(' ')[0] || '',
            lastName: user.name.split(' ').slice(1).join(' ') || '',
            email: user.email,
            password: user.password || 'defaultPassword123', // Add default password if not provided
            phone: user.phone
        };
        return this.request('/users/register', {
            method: 'POST',
            body: JSON.stringify(backendUser),
        });
    }
    async updateUser(id, user) {
        // Transform frontend user object to match backend UserDto structure
        const backendUser = {
            firstName: user.name.split(' ')[0] || '',
            lastName: user.name.split(' ').slice(1).join(' ') || '',
            email: user.email,
            phone: user.phone
        };
        return this.request(`/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(backendUser),
        });
    }
    async deleteUser(id) {
        await this.request(`/users/${id}`, {
            method: 'DELETE',
        });
    }
}
export const apiService = new ApiService();
