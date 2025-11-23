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
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    // Do NOT attach Authorization by default. Backend currently permits /api/** in dev
    // and sending a stale/invalid Authorization header can trigger a 401 challenge
    // from Spring Security even for otherwise public endpoints.
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