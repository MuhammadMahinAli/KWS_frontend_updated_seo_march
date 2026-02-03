/**
 * API Client utility
 * Simple fetch-based API client with error handling
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
export const ADMIN_TOKEN_KEY = 'kws_admin_token';

/**
 * Custom error class for API errors
 */
export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public data?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Get admin token from localStorage
 */
export function getAdminToken(): string | null {
  return localStorage.getItem(ADMIN_TOKEN_KEY);
}

/**
 * Set admin token in localStorage
 */
export function setAdminToken(token: string): void {
  localStorage.setItem(ADMIN_TOKEN_KEY, token);
}

/**
 * Remove admin token from localStorage
 */
export function clearAdminToken(): void {
  localStorage.removeItem(ADMIN_TOKEN_KEY);
}

/**
 * API fetch wrapper with automatic JSON handling and error handling
 * Automatically attaches Authorization header if admin token exists
 * 
 * @param path - API path (will be prefixed with base URL)
 * @param options - Fetch options
 * @returns Response data
 */
export async function apiFetch<T = any>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  // Build full URL
  const url = `${API_BASE_URL}${path}`;

  // Set default headers
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Automatically attach Authorization header if token exists
  // (unless it's already provided or it's the login endpoint)
  const token = getAdminToken();
  if (token && !path.includes('/auth/login')) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    // Parse response
    let data: any;
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    // Handle error responses
    if (!response.ok) {
      const errorMessage = data?.error || data?.message || `HTTP ${response.status}: ${response.statusText}`;
      throw new ApiError(errorMessage, response.status, data);
    }

    return data;
  } catch (error) {
    // Re-throw ApiError as-is
    if (error instanceof ApiError) {
      throw error;
    }

    // Handle network errors
    if (error instanceof TypeError) {
      throw new ApiError('Network error. Please check your connection.', 0);
    }

    // Handle other errors
    throw new ApiError(
      error instanceof Error ? error.message : 'An unexpected error occurred',
      0
    );
  }
}

/**
 * Helper: GET request
 */
export async function apiGet<T = any>(path: string, options: RequestInit = {}): Promise<T> {
  return apiFetch<T>(path, { ...options, method: 'GET' });
}

/**
 * Helper: POST request
 */
export async function apiPost<T = any>(
  path: string,
  body?: any,
  options: RequestInit = {}
): Promise<T> {
  return apiFetch<T>(path, {
    ...options,
    method: 'POST',
    body: body ? JSON.stringify(body) : undefined,
  });
}

/**
 * Helper: PATCH request
 */
export async function apiPatch<T = any>(
  path: string,
  body?: any,
  options: RequestInit = {}
): Promise<T> {
  return apiFetch<T>(path, {
    ...options,
    method: 'PATCH',
    body: body ? JSON.stringify(body) : undefined,
  });
}

/**
 * Helper: DELETE request
 */
export async function apiDelete<T = any>(path: string, options: RequestInit = {}): Promise<T> {
  return apiFetch<T>(path, { ...options, method: 'DELETE' });
}

/**
 * Helper: Add Bearer token to headers (for explicit token passing)
 * Note: apiFetch now automatically attaches token, so this is optional
 */
export function withAuth(token: string, options: RequestInit = {}): RequestInit {
  return {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  };
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  return getAdminToken() !== null;
}
