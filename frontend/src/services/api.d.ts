// User related types
export interface UserDto {
  id?: number;
  // Backend fields
  email: string;
  firstName?: string;
  lastName?: string;
  country?: string;
  birthDate?: string;
  role?: string;
  isLeader?: boolean;

  // Frontend convenience fields (used by some UI components)
  name?: string;
  phone?: string;
  password?: string;
}

// Group related types
export interface GroupDto {
  id?: number;
  name: string;
  tokenKey?: string;
  creationDate?: string;
  createdByUserId?: number;
  memberIds?: number[];

  // Backward-compatible field (may be used by older UI code)
  description?: string;
}

// Product related types
export interface ProductDto {
  id?: number;
  name: string;
  description?: string;
  income?: number | string;
  tags?: string[];
  buyerIds?: number[];

  // Backward-compatible fields (may be used by older UI code)
  price?: number;
  groupId?: number;
}

// Research related types
export interface ResearchDto {
  id?: number;
  name: string;
  subject: string;
  description: string;
  tags: string[];
  createdByUserId?: number;
  questions?: any[];
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
