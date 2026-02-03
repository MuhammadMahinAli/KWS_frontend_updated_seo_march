import { useState } from 'react';
import { LogIn, AlertCircle } from 'lucide-react';
import { adminLogin } from '../../utils/adminApi';
import { ApiError, setAdminToken } from '../../utils/api';

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

export function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await adminLogin({ username, password });
      
      // Store token using the key: kws_admin_token
      setAdminToken(response.token);
      
      // Call success callback (triggers redirect to dashboard)
      onLoginSuccess();
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 429) {
          setError('Too many login attempts. Please try again in 10 minutes.');
        } else {
          setError(err.message);
        }
      } else {
        setError('Login failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-['Inter'] font-semibold text-zinc-900 text-[28px] mb-2">
              Admin Login
            </h1>
            <p className="font-['Inter'] font-normal text-zinc-500 text-[14px]">
              Sign in to access the dashboard
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-['Inter'] font-medium text-red-900 text-[14px]">
                  {error}
                </p>
              </div>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label className="block font-['Inter'] font-medium text-[#78716c] text-[12px] mb-2 uppercase tracking-wide">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-[#fafaf9] border border-[#e7e5e4] rounded-lg px-4 py-3 font-['Inter'] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#c5e86c] transition-all"
                placeholder="Enter your username"
                required
                disabled={isLoading}
                autoComplete="username"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block font-['Inter'] font-medium text-[#78716c] text-[12px] mb-2 uppercase tracking-wide">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#fafaf9] border border-[#e7e5e4] rounded-lg px-4 py-3 font-['Inter'] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#c5e86c] transition-all"
                placeholder="Enter your password"
                required
                disabled={isLoading}
                autoComplete="current-password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#bef264] text-[#1a1a1a] px-6 py-4 rounded-full font-['Inter'] font-semibold text-[15px] hover:bg-[#a8e150] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-[#1a1a1a] border-t-transparent rounded-full animate-spin"></div>
                  Signing in...
                </>
              ) : (
                <>
                  Sign in
                  <LogIn className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="font-['Inter'] text-[11px] text-zinc-400">
              Protected admin area
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
