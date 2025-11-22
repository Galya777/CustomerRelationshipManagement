export interface UserDto {
  id?: number;
  name: string;
  email: string;
  phone?: string;
}

const API_BASE_URL = '/api';

class ApiService {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
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
  async getAllUsers(): Promise<UserDto[]> {
    return this.request<UserDto[]>('/users');
  }

  async getUserById(id: number): Promise<UserDto> {
    return this.request<UserDto>(`/users/${id}`);
  }

  async createUser(user: Omit<UserDto, 'id'>): Promise<UserDto> {
    return this.request<UserDto>('/users/register', {
      method: 'POST',
      body: JSON.stringify(user),
    });
  }

  async updateUser(id: number, user: Partial<UserDto>): Promise<UserDto> {
    return this.request<UserDto>(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
    });
  }

  async deleteUser(id: number): Promise<void> {
    await this.request(`/users/${id}`, {
      method: 'DELETE',
    });
  }
}

export const apiService = new ApiService();