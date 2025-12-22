interface User {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  password?: string;
}

declare class ApiService {
  getAuthHeader(): { 'Authorization'?: string };
  request<T = any>(endpoint: string, options?: RequestInit): Promise<T>;
  
  // User API methods
  getAllUsers<T = any>(): Promise<T>;
  getUserById<T = any>(id: number): Promise<T>;
  createUser(user: Omit<User, 'id'>): Promise<User>;
  updateUser(id: number, user: Partial<Omit<User, 'id' | 'password'>>): Promise<User>;
  deleteUser(id: number): Promise<void>;
  
  // Auth methods
  login(credentials: { username: string; password: string }): Promise<{ user: User }>;
  
  // Research API methods
  getAllResearches<T = any>(): Promise<T>;
  // Add other research methods as needed
}

export const apiService: ApiService;
