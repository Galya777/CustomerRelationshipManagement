export interface UserDto {
  id?: number;
  name: string; // frontend-combined name for convenience
  email: string;
  phone?: string;
  // Fields that may come from backend
  firstName?: string;
  lastName?: string;
  password?: string;
  country?: string;
  birthDate?: string; // ISO date string (yyyy-MM-dd)
  role?: 'ANONYMOUS' | 'CLIENT' | 'LEADER' | 'ADMIN';
  isLeader?: boolean;
}

const API_BASE_URL = '/api';

class ApiService {
  private getAuthHeader(): Record<string, string> {
    // First try to get the stored auth header
    const token = localStorage.getItem('authHeader');
    if (token) {
      return { 'Authorization': token };
    }
    
    // If no stored token, check if we have credentials in localStorage
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    
    if (isAuthenticated && username && password) {
      // Create a Basic Auth token
      const token = btoa(`${username}:${password}`);
      return { 'Authorization': `Basic ${token}` };
    }
    
    return {};
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (response.status === 401) {
      // Clear auth data and redirect to login
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('authHeader');
      window.history.pushState({}, '', '/login');
      window.dispatchEvent(new PopStateEvent('popstate'));
      throw new Error('Session expired. Please log in again.');
    }

    if (!response.ok) {
      let errorMessage = `API request failed: ${response.status} ${response.statusText}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch (e) {
        // Ignore JSON parse error
      }
      throw new Error(errorMessage);
    }

    // For 204 No Content responses, return empty object
    if (response.status === 204) {
      return {} as T;
    }

    return response.json();
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    const authHeader = this.getAuthHeader();
    
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    // Add auth header if it exists
    if (authHeader.Authorization) {
      headers.append('Authorization', authHeader.Authorization);
    }
    
    // Add any custom headers
    if (options.headers) {
      Object.entries(options.headers).forEach(([key, value]) => {
        headers.append(key, value);
      });
    }
    
    const response = await fetch(url, {
      ...options,
      headers,
      credentials: 'include' // Important for cookies, authorization headers with HTTPS
    });

    return this.handleResponse<T>(response);
  }

  async login(credentials: { username: string; password: string }): Promise<{ user: UserDto }> {
    // For Basic Auth, we don't need to call a login endpoint
    // Just verify credentials by making a request to a protected endpoint
    const token = btoa(`${credentials.username}:${credentials.password}`);
    
    try {
      // Try to fetch the current user to verify credentials
      const response = await fetch(`${API_BASE_URL}/users/me`, {
        headers: {
          'Authorization': `Basic ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
      
      const user = await response.json();
      
      // Store the basic auth token for future requests
      localStorage.setItem('authHeader', `Basic ${token}`);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('username', credentials.username);
      
      return { user };
    } catch (error) {
      // Clear any stored credentials on error
      localStorage.removeItem('authHeader');
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('username');
      throw error;
    }
  }

  // User API methods
  async getAllUsers(): Promise<UserDto[]> {
    return this.request<UserDto[]>('/users');
  }

  async getUserById(id: number): Promise<UserDto> {
    return this.request<UserDto>(`/users/${id}`);
  }

  async createUser(user: Omit<UserDto, 'id'>): Promise<UserDto> {
    // Transform frontend user object to match backend UserDto structure
    const name = (user.name ?? '').trim();
    const firstName = name.split(' ')[0] || '';
    const lastName = name.split(' ').slice(1).join(' ') || '';

    const backendUser = {
      firstName,
      lastName,
      email: user.email,
      password: user.password || 'defaultPassword123',
      phone: user.phone,
      country: user.country,
      birthDate: user.birthDate,
      role: user.role,
      leader: user.isLeader === true, // backend expects isLeader boolean via setter
    };

    return this.request<UserDto>('/users/register', {
      method: 'POST',
      body: JSON.stringify(backendUser),
    });
  }

  async updateUser(id: number, user: Partial<UserDto>): Promise<UserDto> {
    // Transform to backend shape
    const name = (user.name ?? '').trim();
    const firstName = name ? (name.split(' ')[0] || '') : user.firstName || '';
    const lastName = name ? (name.split(' ').slice(1).join(' ') || '') : user.lastName || '';

    const backendUser = {
      firstName,
      lastName,
      email: user.email,
      phone: user.phone,
      country: user.country,
      birthDate: user.birthDate,
      role: user.role,
      leader: user.isLeader,
    };

    return this.request<UserDto>(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(backendUser),
    });
  }

  async deleteUser(id: number): Promise<void> {
    await this.request(`/users/${id}`, {
      method: 'DELETE',
    });
  }
}

export const apiService = new ApiService();