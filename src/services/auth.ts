import axios from 'axios';
import type { LoginCredentials, AuthResponse } from '@/types/auth';

export async function loginUser(credentials: LoginCredentials): Promise<AuthResponse> {
  // For development, we'll mock the API response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          id: '1',
          email: credentials.email,
          name: 'Admin User',
          role: 'admin',
        },
        token: 'mock-jwt-token',
      });
    }, 1000);
  });
}