import { X, User, Mic, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { submitChatLead } from '../utils/submissionApi';
import { ApiError } from '../utils/api';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}

interface Message {
  sender: 'user' | 'agent';
  text: string;
  timestamp: string;
  isStatus?: boolean;
}

export function ChatModal({ isOpen, onClose, initialMessage }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    companySize: '',
    industry: '',
    jobTitle: '',
    requirement: '',
    budget: 'USD',
    budgetRange: '',
    timeline: '',
    contactMethod: '',
    hearAboutUs: '',
    website: '' // Honeypot field
  });

  const [isAudioMode, setIsAudioMode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, showForm]);

  // Initialize chat sequence when modal opens
  useEffect(() => {
    if (isOpen && messages.length === 0 && initialMessage) {
      const currentTime = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });

      setIsGenerating(true);

      // Add user message
      setMessages([{
        sender: 'user',
        text: initialMessage,
        timestamp: currentTime
      }]);

      // Show thinking state
      setTimeout(() => {
        setMessages(prev => [...prev, {
          sender: 'agent',
          text: 'Thinking...',
          timestamp: currentTime,
          isStatus: true
        }]);
      }, 500);

      // Show planning state
      setTimeout(() => {
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = {
            sender: 'agent',
            text: 'Planning...',
            timestamp: currentTime,
            isStatus: true
          };
          return newMessages;
        });
      }, 1700);

      // Show generating state
      setTimeout(() => {
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = {
            sender: 'agent',
            text: 'Generating...',
            timestamp: currentTime,
            isStatus: true
          };
          return newMessages;
        });
      }, 3200);

      // Show final response
      setTimeout(() => {
        setMessages(prev => {
          const filtered = prev.filter(m => !m.isStatus);
          return [...filtered, {
            sender: 'agent',
            text: 'Hi! I am your personal AI assistant. I\'ll help you build your AI agent workflow. Let me gather some information to create the perfect solution for you.',
            timestamp: currentTime,
            isStatus: false
          }];
        });
        setIsGenerating(false);
      }, 4500);

      // Show form
      setTimeout(() => {
        setShowForm(true);
      }, 5000);
    }
  }, [isOpen, initialMessage, messages.length]);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setMessages([]);
      setShowForm(false);
      setIsGenerating(false);
      setIsFormSubmitted(false);
      setChatInput('');
      setIsSubmitting(false);
      setSubmitError(null);
      setValidationErrors({});
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        companySize: '',
        industry: '',
        jobTitle: '',
        requirement: '',
        budget: 'USD',
        budgetRange: '',
        timeline: '',
        contactMethod: '',
        hearAboutUs: '',
        website: ''
      });
    }
  }, [isOpen]);

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflowY = 'scroll';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    // Validate required fields
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }

    if (!formData.industry) {
      errors.industry = 'Please select an industry';
    }

    if (!formData.requirement.trim()) {
      errors.requirement = 'Please describe your requirement';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async () => {
    // Clear previous errors
    setSubmitError(null);
    setValidationErrors({});

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await submitChatLead({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        industry: formData.industry,
        requirement: formData.requirement,
        currency: formData.budget || undefined,
        budgetRange: formData.budgetRange || undefined,
        website: formData.website, // Honeypot
        sourceUrl: window.location.href,
        referrer: document.referrer,
      });

      const currentTime = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });

      // Hide form and show submitted confirmation
      setShowForm(false);
      setIsFormSubmitted(true);

      // Clear form data
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        companySize: '',
        industry: '',
        jobTitle: '',
        requirement: '',
        budget: 'USD',
        budgetRange: '',
        timeline: '',
        contactMethod: '',
        hearAboutUs: '',
        website: ''
      });

      // Add a success confirmation message from AI
      setTimeout(() => {
        setMessages(prev => [...prev, {
          sender: 'agent',
          text: 'Thank you for providing your information! I\'m now generating a personalized AI agent plan for you. We\'ll reach out to you within 24-48 hours. How else can I help you today?',
          timestamp: currentTime,
          isStatus: false
        }]);
      }, 500);
    } catch (error) {
      if (error instanceof ApiError) {
        setSubmitError(error.message);
      } else {
        setSubmitError('Failed to submit form. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    const currentTime = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    // Add user message
    setMessages(prev => [...prev, {
      sender: 'user',
      text: chatInput,
      timestamp: currentTime
    }]);

    setChatInput('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        sender: 'agent',
        text: 'I understand. Let me help you with that...',
        timestamp: currentTime,
        isStatus: false
      }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      {/* Modal Container - Fixed Height with max-height constraint */}
      <div className="relative w-full max-w-[600px] bg-white rounded-[24px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden" style={{ maxHeight: '90vh', height: 'auto', minHeight: '500px' }}>

        {/* Header - Fixed */}
        <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">AI Agent Builder</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5 text-gray-600" aria-hidden="true" />
          </button>
        </div>

        {/* Body - Scrollable with flex-1 to take remaining space */}
        <div
          ref={scrollContainerRef}
          className="flex-1 py-6 pl-6 pr-3 space-y-4 overflow-y-auto overflow-x-hidden"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#d0ef58 #f3f4f6',
            minHeight: '300px',
            maxHeight: 'calc(90vh - 200px)'
          }}
        >
          {/* Messages */}
          {messages.map((message, index) => (
            <div key={index} className="flex w-full" style={{ justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start' }}>
              {message.sender === 'user' ? (
                // User Message - Right Aligned
                <div className="flex flex-col items-end gap-1" style={{ maxWidth: '85%', marginLeft: 'auto' }}>
                  <div className="flex items-start gap-2" style={{ flexDirection: 'row-reverse' }}>
                    <div className="w-8 h-8 bg-[#d0ef58] rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-gray-900" />
                    </div>
                    <div className="bg-[#d0ef58] rounded-2xl px-4 py-3">
                      <p className="text-sm text-gray-900">{message.text}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500" style={{ marginRight: '40px' }}>You {message.timestamp}</span>
                </div>
              ) : (
                // AI Message - Left Aligned
                <div className="flex flex-col items-start gap-1 max-w-full w-full">
                  <div className="flex items-start gap-2 w-full">
                    <div className="w-8 h-8 bg-[#d0ef58] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-semibold text-gray-900">AI</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-900 mb-1">AI Agent</p>
                      {message.isStatus ? (
                        // Status Message with enhanced animation
                        <div className="bg-gradient-to-r from-[#d0ef58]/20 to-[#d0ef58]/10 border border-[#d0ef58]/30 rounded-2xl px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div className="flex gap-1">
                              <div className="w-2.5 h-2.5 bg-[#d0ef58] rounded-full animate-bounce shadow-sm" style={{ animationDelay: '0ms' }}></div>
                              <div className="w-2.5 h-2.5 bg-[#d0ef58] rounded-full animate-bounce shadow-sm" style={{ animationDelay: '150ms' }}></div>
                              <div className="w-2.5 h-2.5 bg-[#d0ef58] rounded-full animate-bounce shadow-sm" style={{ animationDelay: '300ms' }}></div>
                            </div>
                            <p className="text-sm font-medium text-gray-700">{message.text}</p>
                          </div>
                        </div>
                      ) : (
                        // Normal AI Message
                        <div className="bg-[#f7f5ef] border border-[#E0E0E0] rounded-2xl px-4 py-3">
                          <p className="text-sm text-gray-900">{message.text}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 ml-10">AI Agent {message.timestamp}</span>
                </div>
              )}
            </div>
          ))}

          {/* Inline Form Fields - Displayed as AI Agent messages */}
          {showForm && (
            <div className="flex flex-col items-start gap-1 w-full animate-fadeIn">
              <div className="flex items-start gap-2 w-full">
                <div className="w-8 h-8 bg-[#d0ef58] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-semibold text-gray-900">AI</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-900 mb-1">AI Agent</p>
                  <div className="bg-[#f7f5ef] border border-[#E0E0E0] rounded-2xl p-5 space-y-4">
                    {/* Error Message */}
                    {submitError && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-red-700">{submitError}</p>
                      </div>
                    )}

                    {/* Honeypot field - hidden */}
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        What's your full name? <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className={`w-full h-[50px] px-4 bg-white border rounded-[8px] text-sm focus:outline-none focus:ring-2 focus:ring-[#d0ef58] focus:border-transparent ${
                          validationErrors.fullName ? 'border-red-300' : 'border-gray-200'
                        }`}
                        placeholder=""
                        disabled={isSubmitting}
                      />
                      {validationErrors.fullName && (
                        <p className="mt-1 text-xs text-red-600">{validationErrors.fullName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        What's your email address? <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full h-[50px] px-4 bg-white border rounded-[8px] text-sm focus:outline-none focus:ring-2 focus:ring-[#d0ef58] focus:border-transparent ${
                          validationErrors.email ? 'border-red-300' : 'border-gray-200'
                        }`}
                        placeholder=""
                        disabled={isSubmitting}
                      />
                      {validationErrors.email && (
                        <p className="mt-1 text-xs text-red-600">{validationErrors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        What's your phone number? <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`w-full h-[50px] px-4 bg-white border rounded-[8px] text-sm focus:outline-none focus:ring-2 focus:ring-[#d0ef58] focus:border-transparent ${
                          validationErrors.phone ? 'border-red-300' : 'border-gray-200'
                        }`}
                        placeholder=""
                        disabled={isSubmitting}
                      />
                      {validationErrors.phone && (
                        <p className="mt-1 text-xs text-red-600">{validationErrors.phone}</p>
                      )}
                    </div>

                    {/* Industry */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Which industry do you belong to? <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => handleInputChange('industry', e.target.value)}
                        className={`w-full h-[50px] px-4 bg-white border rounded-[8px] text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d0ef58] focus:border-transparent appearance-none cursor-pointer ${
                          validationErrors.industry ? 'border-red-300' : 'border-gray-200'
                        }`}
                        style={{
                          WebkitAppearance: 'none',
                          MozAppearance: 'none',
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 1rem center',
                          paddingRight: '3rem'
                        }}
                        disabled={isSubmitting}
                      >
                        <option value="">Select your industry</option>
                        <option value="technology">Technology</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance</option>
                        <option value="retail">Retail</option>
                        <option value="education">Education</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                      {validationErrors.industry && (
                        <p className="mt-1 text-xs text-red-600">{validationErrors.industry}</p>
                      )}
                    </div>

                    {/* Requirement */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Tell us about your requirement <span className="text-red-500">*</span>
                      </label>
                      <div className="bg-[#d0ef58] rounded-lg p-3 mb-3">
                        <p className="text-xs text-gray-900">
                          <strong>Note:</strong> please explain your requirement in detail to help us understand your project better.
                        </p>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <button
                          type="button"
                          onClick={() => setIsAudioMode(false)}
                          disabled={isSubmitting}
                          className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${!isAudioMode
                            ? 'bg-[#d0ef58] text-gray-900'
                            : 'bg-white text-gray-700 border border-gray-300'
                            } disabled:opacity-50`}
                        >
                          Type
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsAudioMode(true)}
                          disabled={isSubmitting}
                          className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${isAudioMode
                            ? 'bg-black text-white'
                            : 'bg-white text-gray-700 border border-gray-300'
                            } disabled:opacity-50`}
                        >
                          Speak
                        </button>
                      </div>
                      <textarea
                        value={formData.requirement}
                        onChange={(e) => handleInputChange('requirement', e.target.value)}
                        placeholder="Describe your requirement..."
                        className={`w-full px-4 py-3 bg-white border rounded-[8px] text-sm focus:outline-none focus:ring-2 focus:ring-[#d0ef58] focus:border-transparent resize-none h-24 ${
                          validationErrors.requirement ? 'border-red-300' : 'border-gray-200'
                        }`}
                        disabled={isSubmitting}
                      />
                      {validationErrors.requirement && (
                        <p className="mt-1 text-xs text-red-600">{validationErrors.requirement}</p>
                      )}
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Any specific budget ratio in mind for the project?
                      </label>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs text-gray-600 mb-1.5">Select currency</label>
                          <select
                            value={formData.budget}
                            onChange={(e) => handleInputChange('budget', e.target.value)}
                            className="w-full h-[50px] px-4 bg-white border border-gray-200 rounded-[8px] text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d0ef58] focus:border-transparent appearance-none cursor-pointer"
                            style={{
                              WebkitAppearance: 'none',
                              MozAppearance: 'none',
                              backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'right 1rem center',
                              paddingRight: '3rem'
                            }}
                          >
                            <option value="USD">USD ($)</option>
                            <option value="EUR">EUR (€)</option>
                            <option value="GBP">GBP (£)</option>
                            <option value="INR">INR (₹)</option>
                            <option value="AUD">AUD ($)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1.5">Budget Range</label>
                          <input
                            type="text"
                            value={formData.budgetRange}
                            onChange={(e) => handleInputChange('budgetRange', e.target.value)}
                            placeholder="Add Text"
                            className="w-full h-[50px] px-4 bg-white border border-gray-200 rounded-[8px] text-sm focus:outline-none focus:ring-2 focus:ring-[#d0ef58] focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleFormSubmit}
                        disabled={isSubmitting}
                        className="w-full h-[50px] bg-[#d0ef58] hover:bg-[#c0df48] text-gray-900 font-medium text-sm rounded-[8px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                            Submitting...
                          </>
                        ) : (
                          'Submit'
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-xs text-gray-500 ml-10">AI Agent 02:22 AM</span>
            </div>
          )}
        </div>

        {/* Footer - Fixed/Sticky */}
        <div className="flex-shrink-0 border-t border-gray-200 p-4 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          {isFormSubmitted ? (
            // Chat Input Box - After Form Submission
            <div className="flex items-center gap-3">
              <button
                aria-label="Attach file"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                  <path d="M4.16667 10H15.8333M10 4.16667V15.8333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </button>
              <div className="flex-1 relative">
                <label htmlFor="chat-input-post" className="sr-only">Type a message</label>
                <input
                  id="chat-input-post"
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="w-full h-[50px] px-4 bg-gray-100 rounded-[8px] text-sm focus:outline-none focus:ring-2 focus:ring-[#d0ef58] focus:border-transparent"
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!chatInput.trim()}
                aria-label="Send message"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#d0ef58] hover:bg-[#c0df48] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5 text-gray-900" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                  <path d="M18 10L2 10M18 10L12 4M18 10L12 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          ) : (
            // Initial Footer - Before Form Submission
            <div className="flex items-center gap-3">
              <button
                disabled={isGenerating}
                aria-label="Attach file"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5 text-gray-600" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                  <path d="M4.16667 10H15.8333M10 4.16667V15.8333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </button>
              <button
                disabled={isGenerating}
                className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <span className="text-sm font-medium text-gray-700">Agent Templates</span>
                <svg className="w-4 h-4 text-gray-600" aria-hidden="true" fill="none" viewBox="0 0 16 16">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </button>
              <button
                disabled={isGenerating}
                aria-label="Voice input"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Mic className="w-5 h-5 text-gray-600" aria-hidden="true" />
              </button>
              <div className="flex-1" />
              <button
                disabled={isGenerating}
                className="px-6 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-sm font-medium">
                  {isGenerating ? 'Generating...' : 'Generate a plan'}
                </span>
                {isGenerating ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                    <path d="M8 1L8 15M1 8L15 8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        /* Custom scrollbar styling */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 3px;
          margin: 8px 0;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #d0ef58;
          border-radius: 3px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #c0df48;
        }
        
        /* Smooth scroll behavior */
        .overflow-y-auto {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }

        /* Remove default select arrow in IE */
        select::-ms-expand {
          display: none;
        }
        
        /* Ensure proper scrolling on all browsers */
        .overflow-y-auto {
          overflow-y: scroll !important;
        }
      `}</style>
    </div>
  );
}
