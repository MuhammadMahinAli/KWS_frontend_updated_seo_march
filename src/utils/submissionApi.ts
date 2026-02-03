/**
 * Submission API functions
 * Type-safe API calls for public submission endpoints
 */

import { apiPost } from './api';

/**
 * Chat lead submission data
 */
export interface ChatLeadData {
  fullName: string;
  email: string;
  phone: string;
  industry: string;
  requirement: string;
  currency?: string;
  budgetRange?: string;
  sourceUrl?: string;
  referrer?: string;
  website?: string; // Honeypot field - leave empty
}

/**
 * Contact form submission data
 */
export interface ContactFormData {
  fullName: string;
  email: string;
  need: string;
  message: string;
  company?: string;
  budgetRange?: string;
  currency?: string;
  sourceUrl?: string;
  referrer?: string;
  website?: string; // Honeypot field - leave empty
}

/**
 * API response for submission
 */
export interface SubmissionResponse {
  ok: boolean;
  id: string;
}

/**
 * Submit chat lead from ChatModal
 */
export async function submitChatLead(data: ChatLeadData): Promise<SubmissionResponse> {
  return apiPost<SubmissionResponse>('/api/public/submissions/chat', data);
}

/**
 * Submit contact form
 */
export async function submitContactForm(data: ContactFormData): Promise<SubmissionResponse> {
  return apiPost<SubmissionResponse>('/api/public/submissions/contact', data);
}
