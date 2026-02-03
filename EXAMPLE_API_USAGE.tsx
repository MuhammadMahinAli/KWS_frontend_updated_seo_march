/**
 * Example API Usage
 * Shows how to use the API client in React components
 */

import { useState } from 'react';
import { submitChatLead, submitContactForm } from './src/utils/submissionApi';
import { ApiError, setAdminToken, clearAdminToken } from './src/utils/api';
import { adminLogin, listSubmissions, updateSubmission } from './src/utils/adminApi';

// ============================================
// Example 1: Chat Lead Submission
// ============================================

function ChatModalExample() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    industry: '',
    requirement: '',
    website: '', // Honeypot field - hidden in UI
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await submitChatLead(formData);
      console.log('Success! Submission ID:', response.id);
      alert('Thank you! We will contact you soon.');
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      
      <input
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        required
      />
      
      {/* Other fields... */}
      
      {/* Honeypot field - hidden with CSS */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        style={{ position: 'absolute', left: '-9999px' }}
        tabIndex={-1}
      />
      
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

// ============================================
// Example 2: Contact Form Submission
// ============================================

function ContactFormExample() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await submitContactForm({
        fullName: 'John Doe',
        email: 'john@example.com',
        need: 'Custom software',
        message: 'Looking for a development team',
        company: 'Acme Corp',
        website: '', // Honeypot - leave empty
      });

      console.log('Submitted! ID:', response.id);
    } catch (err) {
      if (err instanceof ApiError) {
        console.error('API Error:', err.message, err.status);
      }
    } finally {
      setLoading(false);
    }
  };

  return <form onSubmit={handleSubmit}>{/* ... */}</form>;
}

// ============================================
// Example 3: Admin Login
// ============================================

function AdminLoginExample() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await adminLogin(credentials);
      
      // Store token (uses kws_admin_token key)
      setAdminToken(response.token);
      
      console.log('Login successful!');
      console.log('Expires in:', response.expiresIn);
      
      // Redirect to admin dashboard
      window.location.href = '/adminkws22917';
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 429) {
          alert('Too many login attempts. Please try again later.');
        } else {
          alert(err.message);
        }
      }
    }
  };

  return <form onSubmit={handleLogin}>{/* ... */}</form>;
}

// ============================================
// Example 4: Admin - List Submissions
// ============================================

function AdminSubmissionsExample() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSubmissions = async () => {
    try {
      // No token needed - apiFetch automatically attaches it
      const response = await listSubmissions({
        status: 'new',
        page: 1,
        limit: 20,
        sort: '-createdAt',
      });

      setSubmissions(response.items);
      console.log('Total:', response.totalItems);
      console.log('Pages:', response.totalPages);
    } catch (err) {
      if (err instanceof ApiError && err.status === 401) {
        // Token expired - clear and redirect
        clearAdminToken();
        window.location.href = '/adminkws22917';
      }
    } finally {
      setLoading(false);
    }
  };

  return <div>{/* ... */}</div>;
}

// ============================================
// Example 5: Admin - Update Submission
// ============================================

function AdminUpdateExample() {
  const handleUpdateStatus = async (submissionId: string) => {
    try {
      // No token needed - apiFetch automatically attaches it
      const response = await updateSubmission(submissionId, {
        status: 'contacted',
        note: 'Called customer, scheduled follow-up meeting',
      });

      console.log('Updated:', response.data);
      alert('Submission updated successfully!');
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 401) {
          clearAdminToken();
          window.location.href = '/adminkws22917';
        } else {
          alert(`Error: ${err.message}`);
        }
      }
    }
  };

  return <button onClick={() => handleUpdateStatus('some-id')}>Update Status</button>;
}

// ============================================
// Example 6: Error Handling Patterns
// ============================================

async function exampleErrorHandling() {
  try {
    const response = await submitChatLead({
      fullName: 'Test',
      email: 'invalid-email', // Will fail validation
      phone: '123',
      industry: 'Tech',
      requirement: 'Testing',
    });
  } catch (err) {
    if (err instanceof ApiError) {
      console.error('Status:', err.status);
      console.error('Message:', err.message);
      console.error('Data:', err.data);

      // Handle specific errors
      if (err.status === 400) {
        console.log('Validation error');
      } else if (err.status === 429) {
        console.log('Rate limited');
      } else if (err.status === 0) {
        console.log('Network error');
      }
    }
  }
}

export {
  ChatModalExample,
  ContactFormExample,
  AdminLoginExample,
  AdminSubmissionsExample,
  AdminUpdateExample,
};
