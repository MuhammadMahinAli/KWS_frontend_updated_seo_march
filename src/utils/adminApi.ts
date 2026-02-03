/**
 * Admin API functions
 * Type-safe API calls for admin endpoints
 * Note: Authorization header is automatically attached by apiFetch
 */

import { apiFetch, apiGet, apiPost, apiPatch, apiDelete } from './api';

/**
 * Admin login credentials
 */
export interface AdminLoginData {
  username: string;
  password: string;
}

/**
 * Admin login response
 */
export interface AdminLoginResponse {
  ok: boolean;
  token: string;
  expiresIn: string;
}

/**
 * Admin user info
 */
export interface AdminUser {
  ok: boolean;
  username: string;
  role: string;
}

/**
 * Submission item
 */
export interface Submission {
  _id: string;
  type: 'chat_lead' | 'contact_message';
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  industry?: string;
  need?: string;
  currency?: string;
  budgetRange?: string;
  message?: string;
  requirement?: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  archived?: boolean;
}

/**
 * Submission list response
 */
export interface SubmissionListResponse {
  ok: boolean;
  items: Submission[];
  page: number;
  limit: number;
  totalPages: number;
  totalItems: number;
}

/**
 * Submission detail response
 */
export interface SubmissionDetailResponse {
  ok: boolean;
  data: Submission;
}

/**
 * Submission update data
 */
export interface SubmissionUpdateData {
  status?: string;
  note?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  industry?: string;
  need?: string;
  currency?: string;
  budgetRange?: string;
  message?: string;
  requirement?: string;
}

/**
 * Admin login
 */
export async function adminLogin(data: AdminLoginData): Promise<AdminLoginResponse> {
  return apiPost<AdminLoginResponse>('/api/admin/auth/login', data);
}

/**
 * Get current admin user
 * Validates token by fetching current user info
 */
export async function getAdminUser(): Promise<AdminUser> {
  return apiGet<AdminUser>('/api/admin/auth/me');
}

/**
 * Admin logout
 */
export async function adminLogout(): Promise<{ ok: boolean; message: string }> {
  return apiPost('/api/admin/auth/logout');
}

/**
 * List submissions with filters
 */
export async function listSubmissions(
  params?: {
    type?: 'chat_lead' | 'contact_message';
    status?: string;
    q?: string;
    from?: string;
    to?: string;
    page?: number;
    limit?: number;
    sort?: string;
  }
): Promise<SubmissionListResponse> {
  const queryString = params
    ? '?' + new URLSearchParams(Object.entries(params).filter(([_, v]) => v != null).map(([k, v]) => [k, String(v)])).toString()
    : '';
  
  return apiGet<SubmissionListResponse>(`/api/admin/submissions${queryString}`);
}

/**
 * Get submission by ID
 */
export async function getSubmission(id: string): Promise<SubmissionDetailResponse> {
  return apiGet<SubmissionDetailResponse>(`/api/admin/submissions/${id}`);
}

/**
 * Update submission
 */
export async function updateSubmission(
  id: string,
  data: SubmissionUpdateData
): Promise<SubmissionDetailResponse> {
  return apiPatch<SubmissionDetailResponse>(`/api/admin/submissions/${id}`, data);
}

/**
 * Delete (archive) submission
 */
export async function deleteSubmission(
  id: string
): Promise<{ ok: boolean; message: string }> {
  return apiDelete(`/api/admin/submissions/${id}`);
}

/**
 * Get submission statistics
 */
export async function getSubmissionStats(): Promise<{
  ok: boolean;
  data: {
    total: number;
    byStatus: Record<string, number>;
    byType: Record<string, number>;
    recent: number;
    archived: number;
  };
}> {
  return apiGet('/api/admin/submissions/stats/overview');
}
