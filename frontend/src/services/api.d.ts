// User related types
export interface UserDto {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  password?: string;
}

// Group related types
export interface GroupDto {
  id?: number;
  name: string;
  description?: string;
}

// Product related types
export interface ProductDto {
  id?: number;
  name: string;
  description?: string;
  price: number;
  groupId: number;
}

// Research related types
export interface ResearchDto {
  id?: number;
  title: string;
  description?: string;
  startDate: string;
  endDate?: string;
  status: 'PLANNED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  userId: number;
  groupId: number;
}

declare class ApiService {
  private getAuthHeader(): { 'Authorization'?: string };
  private request<T = any>(endpoint: string, options?: RequestInit): Promise<T>;
  
  // User API methods
  getAllUsers<T = UserDto[]>(): Promise<T>;
  getUserById<T = UserDto>(id: number): Promise<T>;
  createUser(user: Omit<UserDto, 'id'>): Promise<UserDto>;
  updateUser(id: number, user: Partial<Omit<UserDto, 'id' | 'password'>>): Promise<UserDto>;
  deleteUser(id: number): Promise<void>;
  
  // Auth methods
  login(credentials: { username: string; password: string }): Promise<{ user: UserDto }>;
  
  // Group API methods
  getAllGroups<T = GroupDto[]>(): Promise<T>;
  getGroupById<T = GroupDto>(id: number): Promise<T>;
  createGroup(group: Omit<GroupDto, 'id'>): Promise<GroupDto>;
  updateGroup(id: number, group: Partial<GroupDto>): Promise<GroupDto>;
  deleteGroup(id: number): Promise<void>;
  
  // Product API methods
  getAllProducts<T = ProductDto[]>(): Promise<T>;
  getProductById<T = ProductDto>(id: number): Promise<T>;
  createProduct(product: Omit<ProductDto, 'id'>): Promise<ProductDto>;
  updateProduct(id: number, product: Partial<ProductDto>): Promise<ProductDto>;
  deleteProduct(id: number): Promise<void>;
  
  // Research API methods
  getAllResearches<T = ResearchDto[]>(): Promise<T>;
  getResearchById<T = ResearchDto>(id: number): Promise<T>;
  createResearch(research: Omit<ResearchDto, 'id'>): Promise<ResearchDto>;
  updateResearch(id: number, research: Partial<ResearchDto>): Promise<ResearchDto>;
  deleteResearch(id: number): Promise<void>;
}

export const apiService: ApiService;
