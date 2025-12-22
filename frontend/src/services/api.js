const API_BASE_URL = '/api';

// Import auth service for getting current auth token
// Note: We can't use ES6 import in JS file, so we'll access it from window if needed
// or lazy-load when methods are called

// @ts-ignore
class ApiService {
    getAuthHeader() {
        // Try to get from auth service if available
        try {
            if (window.__authService) {
                const token = window.__authService.getToken();
                if (token) {
                    return { 'Authorization': token };
                }
            }
        } catch (e) {
            // Fall back to localStorage if auth service not available
        }

        // Fallback to localStorage
        const token = localStorage.getItem('authHeader');
        if (token) {
            return { 'Authorization': token };
        }
        return {};
    }

    async request(endpoint, options = {}) {
        const url = `${API_BASE_URL}${endpoint}`;
        const authHeader = this.getAuthHeader();
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...authHeader,
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
    // @ts-ignore
    async getAllUsers() {
        return this.request('/users');
    }
    // @ts-ignore
    async getUserById(id) {
        return this.request(`/users/${id}`);
    }
    // @ts-ignore
    async getUserProfile() {
        return this.request('/users/me');
    }
    
    // @ts-ignore
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
    // @ts-ignore
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
    // @ts-ignore
    async deleteUser(id) {
        await this.request(`/users/${id}`, {
            method: 'DELETE',
        });
    }

    // @ts-ignore
    async login(credentials) {
        try {
            // Send login request to /api/auth/login endpoint
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: credentials.username,
                    password: credentials.password
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Invalid credentials');
            }

            // After successful login, get user info
            const token = btoa(`${credentials.username}:${credentials.password}`);
            const userResponse = await fetch(`${API_BASE_URL}/users/me`, {
                headers: {
                    'Authorization': `Basic ${token}`
                }
            });

            let user = null;
            if (userResponse.ok) {
                user = await userResponse.json();
            }

            console.log('[ApiService] Login successful for user:', credentials.username);
            return { user, token: `Basic ${token}` };
        } catch (error) {
            console.error('[ApiService] Login failed:', error);
            throw error;
        }
    }

    // @ts-ignore
    async getCurrentUser() {
        return this.request('/users/me');
    }

    // Research API methods
    // @ts-ignore
    async getAllResearches() {
        return this.request('/Researches');
    }

    // @ts-ignore
    async getResearchById(id) {
        return this.request(`/Researches/${id}`);
    }

    // @ts-ignore
    async createResearch(research) {
        return this.request('/Researches', {
            method: 'POST',
            body: JSON.stringify(research),
        });
    }

    // @ts-ignore
    async updateResearch(id, research) {
        return this.request(`/Researches/${id}`, {
            method: 'PUT',
            body: JSON.stringify(research),
        });
    }

    // @ts-ignore
    async deleteResearch(id) {
        await this.request(`/Researches/${id}`, {
            method: 'DELETE',
        });
    }

    // Group API methods
    // @ts-ignore
    async getAllGroups() {
        return this.request('/groups');
    }

    // @ts-ignore
    async getGroupById(id) {
        return this.request(`/groups/${id}`);
    }

    // @ts-ignore
    async createGroup(group) {
        return this.request('/groups', {
            method: 'POST',
            body: JSON.stringify(group),
        });
    }

    // @ts-ignore
    async updateGroup(id, group) {
        return this.request(`/groups/${id}`, {
            method: 'PUT',
            body: JSON.stringify(group),
        });
    }

    // @ts-ignore
    async deleteGroup(id) {
        await this.request(`/groups/${id}`, {
            method: 'DELETE',
        });
    }

    // Product API methods
    // @ts-ignore
    async getAllProducts() {
        return this.request('/products');
    }

    // @ts-ignore
    async getProductById(id) {
        return this.request(`/products/${id}`);
    }

    // @ts-ignore
    async createProduct(product) {
        return this.request('/products', {
            method: 'POST',
            body: JSON.stringify(product),
        });
    }

    // @ts-ignore
    async updateProduct(id, product) {
        return this.request(`/products/${id}`, {
            method: 'PUT',
            body: JSON.stringify(product),
        });
    }

    // @ts-ignore
    async deleteProduct(id) {
        await this.request(`/products/${id}`, {
            method: 'DELETE',
        });
    }
}
export const apiService = new ApiService();
