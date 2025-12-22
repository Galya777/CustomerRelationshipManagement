/**
 * Centralized Authentication Service
 * Manages all authentication state and prevents localStorage access from spreading across components
 */

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  username: string | null;
  user: any;
}

class AuthService {
  private authState: AuthState = {
    isAuthenticated: false,
    token: null,
    username: null,
    user: null
  };

  private listeners: Set<() => void> = new Set();

  constructor() {
    this.loadState();
  }

  /**
   * Load authentication state from localStorage (called once at startup)
   */
  private loadState(): void {
    try {
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
      const token = localStorage.getItem('authHeader');
      const username = localStorage.getItem('username');
      const userData = localStorage.getItem('user');

      this.authState = {
        isAuthenticated,
        token,
        username,
        user: userData ? JSON.parse(userData) : null
      };

      console.log('[AuthService] Loaded state from localStorage:', {
        isAuthenticated,
        username,
        hasUser: !!userData
      });
    } catch (error) {
      console.error('[AuthService] Failed to load state:', error);
      this.authState = {
        isAuthenticated: false,
        token: null,
        username: null,
        user: null
      };
    }
  }

  /**
   * Persist authentication state to localStorage
   */
  private persistState(): void {
    try {
      if (this.authState.isAuthenticated && this.authState.token) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('authHeader', this.authState.token);
      } else {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('authHeader');
      }

      if (this.authState.username) {
        localStorage.setItem('username', this.authState.username);
      } else {
        localStorage.removeItem('username');
      }

      if (this.authState.user) {
        localStorage.setItem('user', JSON.stringify(this.authState.user));
      } else {
        localStorage.removeItem('user');
      }
    } catch (error) {
      console.error('[AuthService] Failed to persist state:', error);
    }
  }

  /**
   * Set authentication state after successful login
   */
  setAuthenticated(token: string, username: string, user?: any): void {
    this.authState = {
      isAuthenticated: true,
      token,
      username,
      user: user || null
    };
    this.persistState();
    this.notifyListeners();
    console.log('[AuthService] User authenticated:', username);
  }

  /**
   * Update the current user information
   */
  setUser(user: any): void {
    this.authState.user = user;
    this.persistState();
    this.notifyListeners();
    console.log('[AuthService] User info updated');
  }

  /**
   * Clear authentication state (logout)
   */
  logout(): void {
    this.authState = {
      isAuthenticated: false,
      token: null,
      username: null,
      user: null
    };
    this.persistState();
    this.notifyListeners();
    console.log('[AuthService] User logged out');
  }

  /**
   * Get current authentication state
   */
  getState(): Readonly<AuthState> {
    return Object.freeze({ ...this.authState });
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return this.authState.isAuthenticated;
  }

  /**
   * Get auth token/header
   */
  getToken(): string | null {
    return this.authState.token;
  }

  /**
   * Get username
   */
  getUsername(): string | null {
    return this.authState.username;
  }

  /**
   * Get user object
   */
  getUser(): any {
    return this.authState.user;
  }

  /**
   * Subscribe to auth state changes
   */
  subscribe(callback: () => void): () => void {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  /**
   * Notify all listeners of state changes
   */
  private notifyListeners(): void {
    this.listeners.forEach(callback => callback());
  }
}

export const authService = new AuthService();

