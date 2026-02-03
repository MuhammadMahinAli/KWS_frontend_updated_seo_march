import { useState, useEffect } from 'react';
import { 
  LogOut, Users, MessageSquare, Search, AlertCircle,
  X, Save, Trash2, Plus, CheckCircle, Clock, Send, XCircle, Award
} from 'lucide-react';
import { 
  listSubmissions, 
  getSubmissionStats, 
  adminLogout, 
  getAdminUser,
  getSubmission,
  updateSubmission,
  deleteSubmission
} from '../../utils/adminApi';
import type { Submission } from '../../utils/adminApi';
import { clearAdminToken, ApiError } from '../../utils/api';

interface AdminDashboardProps {
  onLogout: () => void;
}

interface DetailedSubmission extends Submission {
  internalNotes?: Array<{
    _id: string;
    note: string;
    createdAt: string;
  }>;
  ip?: string;
  sourceUrl?: string;
  referrer?: string;
  userAgent?: string;
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isValidatingToken, setIsValidatingToken] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [filterType, setFilterType] = useState<'all' | 'chat_lead' | 'contact_message'>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  // Detail drawer state
  const [selectedSubmission, setSelectedSubmission] = useState<DetailedSubmission | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [newStatus, setNewStatus] = useState('');
  const [newNote, setNewNote] = useState('');

  // Disable background scrolling when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflowY = 'scroll';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [isDrawerOpen]);

  // Validate token on mount
  useEffect(() => {
    validateToken();
  }, []);

  useEffect(() => {
    if (!isValidatingToken) {
      fetchData();
    }
  }, [currentPage, filterType, filterStatus, searchQuery, isValidatingToken]);

  const validateToken = async () => {
    try {
      await getAdminUser();
      setIsValidatingToken(false);
    } catch (error) {
      if (error instanceof ApiError && error.status === 401) {
        // Token invalid or expired - logout
        console.warn('Token validation failed - logging out');
        handleLogout();
      } else {
        console.error('Token validation error:', error);
        setIsValidatingToken(false);
      }
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [submissionsData, statsData] = await Promise.all([
        listSubmissions({
          page: currentPage,
          limit: 20,
          type: filterType === 'all' ? undefined : filterType,
          status: filterStatus === 'all' ? undefined : filterStatus,
          q: searchQuery || undefined,
          from: dateFrom || undefined,
          to: dateTo || undefined,
        }),
        getSubmissionStats(),
      ]);

      setSubmissions(submissionsData.items);
      setTotalPages(submissionsData.totalPages);
      setTotalItems(submissionsData.totalItems);
      setStats(statsData.data);
    } catch (error) {
      if (error instanceof ApiError && error.status === 401) {
        // Token expired during use - logout
        handleLogout();
      } else {
        console.error('Failed to fetch data:', error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRowClick = async (submission: Submission) => {
    try {
      // Fetch full details including internal notes
      const response = await getSubmission(submission._id);
      setSelectedSubmission(response.data as DetailedSubmission);
      setNewStatus(response.data.status);
      setNewNote('');
      setUpdateError(null);
      setIsDrawerOpen(true);
    } catch (error) {
      console.error('Failed to fetch submission details:', error);
    }
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedSubmission(null);
    setNewStatus('');
    setNewNote('');
    setUpdateError(null);
  };

  const handleUpdateStatus = async () => {
    if (!selectedSubmission || !newStatus) return;

    setIsUpdating(true);
    setUpdateError(null);

    try {
      const updateData: any = { status: newStatus };
      if (newNote.trim()) {
        updateData.note = newNote.trim();
      }

      const response = await updateSubmission(selectedSubmission._id, updateData);
      
      // Update local state
      setSelectedSubmission(response.data as DetailedSubmission);
      setNewNote('');
      
      // Refresh list
      fetchData();
    } catch (error) {
      if (error instanceof ApiError) {
        setUpdateError(error.message);
      } else {
        setUpdateError('Failed to update submission');
      }
    } finally {
      setIsUpdating(false);
    }
  };

  const handleAddNote = async () => {
    if (!selectedSubmission || !newNote.trim()) return;

    setIsUpdating(true);
    setUpdateError(null);

    try {
      const response = await updateSubmission(selectedSubmission._id, {
        note: newNote.trim(),
      });
      
      // Update local state
      setSelectedSubmission(response.data as DetailedSubmission);
      setNewNote('');
      
      // Refresh list
      fetchData();
    } catch (error) {
      if (error instanceof ApiError) {
        setUpdateError(error.message);
      } else {
        setUpdateError('Failed to add note');
      }
    } finally {
      setIsUpdating(false);
    }
  };

  const handleArchive = async () => {
    if (!selectedSubmission) return;

    if (!confirm('Are you sure you want to archive this submission?')) {
      return;
    }

    setIsUpdating(true);
    setUpdateError(null);

    try {
      await deleteSubmission(selectedSubmission._id);
      
      // Close drawer and refresh list
      handleCloseDrawer();
      fetchData();
    } catch (error) {
      if (error instanceof ApiError) {
        setUpdateError(error.message);
      } else {
        setUpdateError('Failed to archive submission');
      }
    } finally {
      setIsUpdating(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new': return <MessageSquare className="w-4 h-4" />;
      case 'contacted': return <Send className="w-4 h-4" />;
      case 'qualified': return <CheckCircle className="w-4 h-4" />;
      case 'proposal_sent': return <Clock className="w-4 h-4" />;
      case 'closed_won': return <Award className="w-4 h-4" />;
      case 'closed_lost': return <XCircle className="w-4 h-4" />;
      case 'spam': return <Trash2 className="w-4 h-4" />;
      default: return <MessageSquare className="w-4 h-4" />;
    }
  };

  const handleLogout = async () => {
    try {
      await adminLogout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      clearAdminToken();
      onLogout();
    }
  };

  // Show loading while validating token
  if (isValidatingToken) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-zinc-300 border-t-zinc-900 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 font-['Inter'] text-[14px] text-zinc-500">Validating...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-['Inter'] font-semibold text-zinc-900 text-[24px]">
              Admin Dashboard
            </h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-stone-100 hover:bg-stone-200 rounded-full font-['Inter'] text-[14px] transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            <div className="bg-white border border-stone-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-zinc-500" />
                <p className="font-['Inter'] text-[11px] text-zinc-500 uppercase tracking-wide">
                  Total
                </p>
              </div>
              <p className="font-['Inter'] font-semibold text-[28px] text-zinc-900">
                {stats.total}
              </p>
            </div>

            <div className="bg-white border border-stone-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-green-500" />
                <p className="font-['Inter'] text-[11px] text-zinc-500 uppercase tracking-wide">
                  New
                </p>
              </div>
              <p className="font-['Inter'] font-semibold text-[28px] text-green-600">
                {stats.byStatus.new || 0}
              </p>
            </div>

            <div className="bg-white border border-stone-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Send className="w-4 h-4 text-blue-500" />
                <p className="font-['Inter'] text-[11px] text-zinc-500 uppercase tracking-wide">
                  Contacted
                </p>
              </div>
              <p className="font-['Inter'] font-semibold text-[28px] text-blue-600">
                {stats.byStatus.contacted || 0}
              </p>
            </div>

            <div className="bg-white border border-stone-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-purple-500" />
                <p className="font-['Inter'] text-[11px] text-zinc-500 uppercase tracking-wide">
                  Qualified
                </p>
              </div>
              <p className="font-['Inter'] font-semibold text-[28px] text-purple-600">
                {stats.byStatus.qualified || 0}
              </p>
            </div>

            <div className="bg-white border border-stone-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-orange-500" />
                <p className="font-['Inter'] text-[11px] text-zinc-500 uppercase tracking-wide">
                  Proposals
                </p>
              </div>
              <p className="font-['Inter'] font-semibold text-[28px] text-orange-600">
                {stats.byStatus.proposal_sent || 0}
              </p>
            </div>

            <div className="bg-white border border-stone-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <p className="font-['Inter'] text-[11px] text-zinc-500 uppercase tracking-wide">
                  Spam
                </p>
              </div>
              <p className="font-['Inter'] font-semibold text-[28px] text-red-600">
                {stats.byStatus.spam || 0}
              </p>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white border border-stone-200 rounded-2xl p-4 mb-6">
          <div className="flex flex-col gap-4">
            {/* Row 1: Search and Type/Status */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, email, phone, company..."
                  className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg font-['Inter'] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#c5e86c]"
                />
              </div>

              {/* Type Filter */}
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value as any)}
                className="px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg font-['Inter'] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#c5e86c] cursor-pointer"
              >
                <option value="all">All Types</option>
                <option value="chat_lead">Chat Lead</option>
                <option value="contact_message">Contact Message</option>
              </select>

              {/* Status Filter */}
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg font-['Inter'] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#c5e86c] cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
                <option value="proposal_sent">Proposal Sent</option>
                <option value="closed_won">Closed Won</option>
                <option value="closed_lost">Closed Lost</option>
                <option value="spam">Spam</option>
              </select>
            </div>

            {/* Row 2: Date Range */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block font-['Inter'] text-[11px] text-zinc-500 uppercase tracking-wide mb-1.5">
                  From Date
                </label>
                <input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-lg font-['Inter'] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#c5e86c]"
                />
              </div>
              <div className="flex-1">
                <label className="block font-['Inter'] text-[11px] text-zinc-500 uppercase tracking-wide mb-1.5">
                  To Date
                </label>
                <input
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-lg font-['Inter'] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#c5e86c]"
                />
              </div>
              {(dateFrom || dateTo) && (
                <button
                  onClick={() => { setDateFrom(''); setDateTo(''); }}
                  className="px-4 py-2 bg-stone-100 hover:bg-stone-200 rounded-lg font-['Inter'] text-[13px] transition-colors self-end"
                >
                  Clear Dates
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Submissions Table */}
        <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
          {isLoading ? (
            <div className="p-12 text-center">
              <div className="w-8 h-8 border-2 border-zinc-300 border-t-zinc-900 rounded-full animate-spin mx-auto"></div>
              <p className="mt-4 font-['Inter'] text-[14px] text-zinc-500">Loading...</p>
            </div>
          ) : submissions.length === 0 ? (
            <div className="p-12 text-center">
              <p className="font-['Inter'] text-[14px] text-zinc-500">No submissions found</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-stone-50 border-b border-stone-200">
                    <tr>
                      <th className="px-6 py-3 text-left font-['Inter'] text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                        Name & Date
                      </th>
                      <th className="px-6 py-3 text-left font-['Inter'] text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left font-['Inter'] text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left font-['Inter'] text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left font-['Inter'] text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                        Phone/Company
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {submissions.map((submission) => (
                      <tr 
                        key={submission._id} 
                        onClick={() => handleRowClick(submission)}
                        className="hover:bg-stone-50 transition-colors cursor-pointer"
                      >
                        <td className="px-6 py-4">
                          <p className="font-['Inter'] text-[14px] text-zinc-900 font-medium">
                            {submission.fullName}
                          </p>
                          <p className="font-['Inter'] text-[12px] text-zinc-500">
                            {new Date(submission.createdAt).toLocaleDateString()} at {new Date(submission.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-['Inter'] text-[13px] text-zinc-600">
                            {submission.email}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-2.5 py-1 rounded-full font-['Inter'] text-[11px] font-medium ${
                            submission.type === 'chat_lead'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-purple-100 text-purple-700'
                          }`}>
                            {submission.type === 'chat_lead' ? 'Chat Lead' : 'Contact'}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-['Inter'] text-[11px] font-medium ${
                            submission.status === 'new' ? 'bg-green-100 text-green-700' :
                            submission.status === 'contacted' ? 'bg-blue-100 text-blue-700' :
                            submission.status === 'qualified' ? 'bg-purple-100 text-purple-700' :
                            submission.status === 'proposal_sent' ? 'bg-orange-100 text-orange-700' :
                            submission.status === 'closed_won' ? 'bg-emerald-100 text-emerald-700' :
                            submission.status === 'closed_lost' ? 'bg-gray-100 text-gray-700' :
                            submission.status === 'spam' ? 'bg-red-100 text-red-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {getStatusIcon(submission.status)}
                            {submission.status.replace('_', ' ')}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-['Inter'] text-[13px] text-zinc-600">
                          {submission.phone || submission.company || '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 border-t border-stone-200 flex items-center justify-between">
                <p className="font-['Inter'] text-[13px] text-zinc-500">
                  Showing {submissions.length} of {totalItems} submissions
                  {totalPages > 1 && ` (Page ${currentPage} of ${totalPages})`}
                </p>
                {totalPages > 1 && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 bg-stone-100 hover:bg-stone-200 rounded-lg font-['Inter'] text-[13px] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 bg-stone-100 hover:bg-stone-200 rounded-lg font-['Inter'] text-[13px] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </main>

      {/* Detail Drawer */}
      {isDrawerOpen && selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          {/* Drawer Container - Fixed Height like ChatModal */}
          <div 
            className="relative w-full max-w-[700px] bg-white rounded-[24px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden" 
            style={{ maxHeight: '90vh', height: 'auto', minHeight: '500px' }}
          >
            {/* Header - Fixed */}
            <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-stone-200">
              <h2 className="font-['Inter'] font-semibold text-zinc-900 text-[20px]">
                Submission Details
              </h2>
              <button
                onClick={handleCloseDrawer}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5 text-zinc-600" />
              </button>
            </div>

            {/* Body - Scrollable with flex-1 to take remaining space */}
            <div 
              className="flex-1 py-6 px-6 pr-3 space-y-6 overflow-y-scroll overflow-x-hidden"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#d0ef58 #f3f4f6',
                minHeight: '300px',
                maxHeight: 'calc(90vh - 80px)',
              }}
            >
              {/* Error Message */}
              {updateError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="font-['Inter'] text-[14px] text-red-700">{updateError}</p>
                </div>
              )}

              {/* Contact Information */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
                <h3 className="font-['Inter'] font-semibold text-zinc-900 text-[16px] mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-['Inter'] text-[11px] text-zinc-500 uppercase tracking-wide mb-1">Full Name</p>
                    <p className="font-['Inter'] text-[14px] text-zinc-900">{selectedSubmission.fullName}</p>
                  </div>
                  <div>
                    <p className="font-['Inter'] text-[11px] text-zinc-500 uppercase tracking-wide mb-1">Email</p>
                    <p className="font-['Inter'] text-[14px] text-zinc-900">{selectedSubmission.email}</p>
                  </div>
                  {selectedSubmission.phone && (
                    <div>
                      <p className="font-['Inter'] text-[11px] text-zinc-500 uppercase tracking-wide mb-1">Phone</p>
                      <p className="font-['Inter'] text-[14px] text-zinc-900">{selectedSubmission.phone}</p>
                    </div>
                  )}
                  {selectedSubmission.company && (
                    <div>
                      <p className="font-['Inter'] text-[11px] text-zinc-500 uppercase tracking-wide mb-1">Company</p>
                      <p className="font-['Inter'] text-[14px] text-zinc-900">{selectedSubmission.company}</p>
                    </div>
                  )}
                  {selectedSubmission.industry && (
                    <div>
                      <p className="font-['Inter'] text-[11px] text-zinc-500 uppercase tracking-wide mb-1">Industry</p>
                      <p className="font-['Inter'] text-[14px] text-zinc-900">{selectedSubmission.industry}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
                <h3 className="font-['Inter'] font-semibold text-zinc-900 text-[16px] mb-4">
                  Project Details
                </h3>
                <div className="space-y-3">
                  {selectedSubmission.need && (
                    <div>
                      <p className="font-['Inter'] text-[11px] text-zinc-500 uppercase tracking-wide mb-1">Need</p>
                      <p className="font-['Inter'] text-[14px] text-zinc-900">{selectedSubmission.need}</p>
                    </div>
                  )}
                  {selectedSubmission.requirement && (
                    <div>
                      <p className="font-['Inter'] text-[11px] text-zinc-500 uppercase tracking-wide mb-1">Requirement</p>
                      <p className="font-['Inter'] text-[14px] text-zinc-900 whitespace-pre-wrap">{selectedSubmission.requirement}</p>
                    </div>
                  )}
                  {selectedSubmission.message && (
                    <div>
                      <p className="font-['Inter'] text-[11px] text-zinc-500 uppercase tracking-wide mb-1">Message</p>
                      <p className="font-['Inter'] text-[14px] text-zinc-900 whitespace-pre-wrap">{selectedSubmission.message}</p>
                    </div>
                  )}
                  {selectedSubmission.budgetRange && (
                    <div>
                      <p className="font-['Inter'] text-[11px] text-zinc-500 uppercase tracking-wide mb-1">Budget Range</p>
                      <p className="font-['Inter'] text-[14px] text-zinc-900">
                        {selectedSubmission.currency && `${selectedSubmission.currency} `}{selectedSubmission.budgetRange}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Status Management */}
              <div className="bg-white border border-stone-200 rounded-2xl p-5">
                <h3 className="font-['Inter'] font-semibold text-zinc-900 text-[16px] mb-4">
                  Update Status
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block font-['Inter'] text-[12px] text-zinc-600 mb-2">
                      Status
                    </label>
                    <select
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value)}
                      className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg font-['Inter'] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#c5e86c] cursor-pointer"
                      disabled={isUpdating}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="qualified">Qualified</option>
                      <option value="proposal_sent">Proposal Sent</option>
                      <option value="closed_won">Closed Won</option>
                      <option value="closed_lost">Closed Lost</option>
                      <option value="spam">Spam</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-['Inter'] text-[12px] text-zinc-600 mb-2">
                      Add Note (optional)
                    </label>
                    <textarea
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      placeholder="Add a note about this status change..."
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg font-['Inter'] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#c5e86c] resize-none h-24"
                      disabled={isUpdating}
                    />
                  </div>
                  <button
                    onClick={handleUpdateStatus}
                    disabled={isUpdating || newStatus === selectedSubmission.status}
                    className="w-full px-4 py-3 bg-[#bef264] hover:bg-[#a8e150] text-zinc-900 font-['Inter'] font-semibold text-[14px] rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isUpdating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin"></div>
                        Updating...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        Update Status
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Internal Notes */}
              <div className="bg-white border border-stone-200 rounded-2xl p-5">
                <h3 className="font-['Inter'] font-semibold text-zinc-900 text-[16px] mb-4">
                  Internal Notes
                </h3>
                
                {/* Add Note */}
                <div className="mb-4 space-y-3">
                  <textarea
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Add an internal note..."
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg font-['Inter'] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#c5e86c] resize-none h-24"
                    disabled={isUpdating}
                  />
                  <button
                    onClick={handleAddNote}
                    disabled={isUpdating || !newNote.trim()}
                    className="w-full px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white font-['Inter'] font-medium text-[14px] rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add Note
                  </button>
                </div>

                {/* Notes List */}
                {selectedSubmission.internalNotes && selectedSubmission.internalNotes.length > 0 ? (
                  <div className="space-y-3">
                    {selectedSubmission.internalNotes.map((note) => (
                      <div key={note._id} className="bg-stone-50 border border-stone-200 rounded-lg p-4">
                        <p className="font-['Inter'] text-[13px] text-zinc-900 mb-2">
                          {note.note}
                        </p>
                        <p className="font-['Inter'] text-[11px] text-zinc-500">
                          {new Date(note.createdAt).toLocaleDateString()} at {new Date(note.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="font-['Inter'] text-[13px] text-zinc-400 text-center py-4">
                    No notes yet
                  </p>
                )}
              </div>

              {/* Metadata */}
              {(selectedSubmission.ip || selectedSubmission.sourceUrl || selectedSubmission.referrer) && (
                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
                  <h3 className="font-['Inter'] font-semibold text-zinc-900 text-[16px] mb-4">
                    Metadata
                  </h3>
                  <div className="space-y-2 text-[12px]">
                    {selectedSubmission.ip && (
                      <div className="flex justify-between">
                        <span className="text-zinc-500">IP:</span>
                        <span className="text-zinc-900 font-mono">{selectedSubmission.ip}</span>
                      </div>
                    )}
                    {selectedSubmission.sourceUrl && (
                      <div className="flex justify-between">
                        <span className="text-zinc-500">Source:</span>
                        <span className="text-zinc-900 truncate ml-2" title={selectedSubmission.sourceUrl}>
                          {selectedSubmission.sourceUrl}
                        </span>
                      </div>
                    )}
                    {selectedSubmission.referrer && (
                      <div className="flex justify-between">
                        <span className="text-zinc-500">Referrer:</span>
                        <span className="text-zinc-900 truncate ml-2" title={selectedSubmission.referrer}>
                          {selectedSubmission.referrer}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Archive Button */}
              <div className="pt-4 border-t border-stone-200">
                <button
                  onClick={handleArchive}
                  disabled={isUpdating}
                  className="w-full px-4 py-3 bg-red-50 hover:bg-red-100 text-red-700 font-['Inter'] font-medium text-[14px] rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 border border-red-200"
                >
                  <Trash2 className="w-4 h-4" />
                  Archive Submission
                </button>
              </div>
            </div>
          </div>

          {/* Custom Scrollbar Styles */}
          <style>{`
            .overflow-y-scroll::-webkit-scrollbar,
            .overflow-y-auto::-webkit-scrollbar {
              width: 6px;
            }
            .overflow-y-scroll::-webkit-scrollbar-track,
            .overflow-y-auto::-webkit-scrollbar-track {
              background: #f3f4f6;
              border-radius: 3px;
              margin: 8px 0;
            }
            .overflow-y-scroll::-webkit-scrollbar-thumb,
            .overflow-y-auto::-webkit-scrollbar-thumb {
              background: #d0ef58;
              border-radius: 3px;
            }
            .overflow-y-scroll::-webkit-scrollbar-thumb:hover,
            .overflow-y-auto::-webkit-scrollbar-thumb:hover {
              background: #c0df48;
            }
            
            /* Smooth scroll behavior */
            .overflow-y-scroll,
            .overflow-y-auto {
              scroll-behavior: smooth;
              -webkit-overflow-scrolling: touch;
            }
            
            /* Ensure proper scrolling on all browsers */
            .overflow-y-scroll {
              overflow-y: scroll !important;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
