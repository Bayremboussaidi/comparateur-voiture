import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Mocking API URL for consistency
  private readonly apiUrl = 'https://your-backend-api.com'; 

  constructor() {}

  /**
   * Logs in the user with provided credentials (mock implementation).
   * @param credentials Object containing email and password.
   * @returns A promise resolving to a boolean indicating success or failure.
   */
  login(credentials: { email: string; password: string }): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock response for login
        const mockResponse = {
          success: true,
          token: 'mock-jwt-token', // Example token
        };

        if (mockResponse.success && mockResponse.token) {
          localStorage.setItem('token', mockResponse.token); // Store token for authenticated requests
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000); // Simulate 1-second API response delay
    });
  }

  /**
   * Registers a new user (mock implementation).
   * @param credentials Object containing username, email, and password.
   * @returns Observable for the registration result.
   */
  register(credentials: { username: string; email: string; password: string }): Observable<boolean> {
    return new Observable((observer) => {
      setTimeout(() => {
        // Simulate a successful registration
        const mockResponse = { success: true };
        observer.next(mockResponse.success);
        observer.complete();
      }, 1000);
    });
  }

  /**
   * Retrieves the authenticated user's data (mock implementation).
   * @returns Observable containing user information.
   */
  getUser(): Observable<any> {
    return new Observable((observer) => {
      setTimeout(() => {
        // Mock user data
        const mockUser = {
          id: 1,
          username: 'testuser',
          email: 'test@example.com',
        };
        observer.next(mockUser);
        observer.complete();
      }, 1000);
    });
  }

  /**
   * Logs out the user by removing the token.
   */
  logout(): void {
    localStorage.removeItem('token'); // Remove token to log out
  }
}
