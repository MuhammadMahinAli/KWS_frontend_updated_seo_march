import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Send, Calendar, MapPin, MessageCircle, Briefcase, FileText, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { FAQ } from '../components/FAQ';
import { submitContactForm } from '../utils/submissionApi';
import { ApiError } from '../utils/api';

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    need: '',
    budget: '',
    message: '',
    website: '' // Honeypot field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      await submitContactForm({
        fullName: formData.fullName,
        email: formData.email,
        company: formData.company || undefined,
        need: formData.need,
        budgetRange: formData.budget || undefined,
        message: formData.message,
        website: formData.website, // Honeypot
        sourceUrl: window.location.href,
        referrer: document.referrer,
      });

      setSubmitSuccess(true);
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        company: '',
        need: '',
        budget: '',
        message: '',
        website: ''
      });
    } catch (error) {
      if (error instanceof ApiError) {
        setSubmitError(error.message);
      } else {
        setSubmitError('Failed to send message. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-stone-50 min-h-screen">
      <Helmet>
        <title>Contact KWS Technology | Book a Strategy Call</title>
        <meta name="description" content="Ready to automate your business? Contact KWS Technology to book a free strategy call or ask about a custom AI development project." />
        <meta property="og:title" content="Contact KWS Technology | Book a Strategy Call" />
        <meta property="og:description" content="Ready to automate your business? Contact KWS Technology to book a free strategy call or ask about a custom AI development project." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kws.technology/contact" />
        <meta property="og:image" content="/og-default.png" />
        <link rel="canonical" href="https://www.kws.technology/contact" />
      </Helmet>
      <main className="relative">
        {/* Hero Section */}
        <section className="pt-[128px] pb-12 md:pb-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-center">
            {/* Title */}
            <h1 className="font-['Inter'] font-semibold text-[#1a1a1a] text-[48px] md:text-[64px] leading-[1.1] tracking-[-0.02em] mb-4">
              Contact
            </h1>
            
            {/* Subtitle */}
            <p className="font-['Inter'] font-normal text-[#78716c] text-[16px] md:text-[18px] leading-[1.6] mb-6">
              Tell us what you're building. We'll reply with next steps.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-row gap-3 items-center justify-center mb-6">
              <a href="https://calendly.com/kwstechnology-info/30min" target="_blank" rel="noopener noreferrer" className="bg-[#1c1917] text-white px-6 py-3 rounded-full font-['Inter'] font-medium text-[14px] hover:bg-[#2d2d2d] transition-colors">
                Book Demo
              </a>
              <a href="/" className="bg-white text-[#1a1a1a] px-6 py-3 rounded-full font-['Inter'] font-medium text-[14px] border border-[#e0e0e0] hover:border-[#1a1a1a] transition-colors">
                Send a message
              </a>
            </div>

            {/* Meta Links */}
            <div className="flex flex-wrap gap-2 items-center justify-center text-[10px] md:text-[11px] font-['Inter'] font-medium text-[#a8a29e] uppercase tracking-wider">
              <span>AI AGENTS</span>
              <span>•</span>
              <span>AUTOMATION</span>
              <span>•</span>
              <span>WEB PLATFORMS</span>
              <span>•</span>
              <span>UI/UX</span>
              <span>•</span>
              <span>AR/VR/XR</span>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="pb-16 md:pb-24 px-4 sm:px-6">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row gap-6 md:gap-[60px] items-start">
              {/* Left Column - Form Card */}
              <div className="w-full md:flex-1 md:max-w-[700px] bg-white border border-stone-200 rounded-3xl p-8 shadow-sm">
                {/* Form Header */}
                <div className="mb-6">
                  <h2 className="font-['Inter'] font-semibold text-zinc-900 text-[20px] leading-[1.3] mb-1">
                    Send a message
                  </h2>
                  <p className="font-['Inter'] font-normal text-zinc-500 text-[13px] leading-[1.6]">
                    We usually respond within 24-48 hours.
                  </p>
                </div>

                {/* Success Message */}
                {submitSuccess && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-['Inter'] font-medium text-green-900 text-[14px] mb-1">
                        Message sent successfully!
                      </p>
                      <p className="font-['Inter'] font-normal text-green-700 text-[13px]">
                        Thanks — we'll respond within 24–48 hours.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-['Inter'] font-medium text-red-900 text-[14px] mb-1">
                        Failed to send message
                      </p>
                      <p className="font-['Inter'] font-normal text-red-700 text-[13px]">
                        {submitError}
                      </p>
                    </div>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot field - hidden from users */}
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-['Inter'] font-medium text-[#78716c] text-[12px] mb-2 uppercase tracking-wide">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#fafaf9] border border-[#e7e5e4] rounded-lg px-4 py-3 font-['Inter'] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#c5e86c] transition-all"
                        placeholder=""
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block font-['Inter'] font-medium text-[#78716c] text-[12px] mb-2 uppercase tracking-wide">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#fafaf9] border border-[#e7e5e4] rounded-lg px-4 py-3 font-['Inter'] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#c5e86c] transition-all"
                        placeholder=""
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Row 2: Company */}
                  <div>
                    <label className="block font-['Inter'] font-medium text-[#78716c] text-[12px] mb-2 uppercase tracking-wide">
                      Company <span className="text-zinc-400 font-normal normal-case">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#fafaf9] border border-[#e7e5e4] rounded-lg px-4 py-3 font-['Inter'] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#c5e86c] transition-all"
                      placeholder=""
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Row 3: What do you need & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-['Inter'] font-medium text-[#78716c] text-[12px] mb-2 uppercase tracking-wide">
                        What do you need?
                      </label>
                      <select
                        value={formData.need}
                        onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                        className="w-full bg-[#fafaf9] border border-[#e7e5e4] rounded-lg px-4 py-3 font-['Inter'] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#c5e86c] transition-all cursor-pointer"
                        required
                        disabled={isSubmitting}
                      >
                        <option value="">Select</option>
                        <option value="ai-agent">AI Agent</option>
                        <option value="automation">Automation</option>
                        <option value="web-app">Web App</option>
                        <option value="mobile-app">Mobile App</option>
                        <option value="ui-ux">UI/UX Design</option>
                        <option value="consulting">Consulting</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-['Inter'] font-medium text-[#78716c] text-[12px] mb-2 uppercase tracking-wide">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#fafaf9] border border-[#e7e5e4] rounded-lg px-4 py-3 font-['Inter'] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#c5e86c] transition-all cursor-pointer"
                        disabled={isSubmitting}
                      >
                        <option value="">Select</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-plus">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label className="block font-['Inter'] font-medium text-[#78716c] text-[12px] mb-2 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full bg-[#fafaf9] border border-[#e7e5e4] rounded-lg px-4 py-3 font-['Inter'] text-[14px] resize-none focus:outline-none focus:ring-2 focus:ring-[#c5e86c] transition-all"
                      placeholder="Tell us about your project..."
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#bef264] text-[#1a1a1a] px-6 py-4 rounded-full font-['Inter'] font-semibold text-[15px] hover:bg-[#a8e150] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send message'}
                    <Send className="w-4 h-4" />
                  </button>

                  {/* Footer Text */}
                  <p className="text-center font-['Inter'] text-[11px] text-zinc-400 leading-[1.6]">
                    We'll only use your details to respond to your request.
                  </p>
                </form>
              </div>

              {/* Right Column - Sidebar */}
              <div className="w-full md:flex-1 md:max-w-[470px] flex flex-col gap-6">
                {/* Card 1: Contact Details */}
                <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
                  <h3 className="font-['Inter'] font-semibold text-zinc-900 text-[16px] mb-5">
                    Contact details
                  </h3>
                  <div className="space-y-4">
                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-stone-50 border border-stone-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-4 h-4 text-zinc-500" />
                      </div>
                      <div className="flex-1">
                        <p className="font-['Inter'] font-medium text-zinc-500 text-[10px] uppercase tracking-wider mb-1">
                          EMAIL
                        </p>
                        <a href="mailto:support@kws.technology" className="font-['Inter'] font-normal text-zinc-900 text-[13px] hover:text-lime-600 transition-colors block">
                          support@kws.technology
                        </a>
                        <a href="mailto:kwstechnology.info@gmail.com" className="font-['Inter'] font-normal text-zinc-900 text-[13px] hover:text-lime-600 transition-colors block mt-1">
                          kwstechnology.info@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-stone-50 border border-stone-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-zinc-500" />
                      </div>
                      <div className="flex-1">
                        <p className="font-['Inter'] font-medium text-zinc-500 text-[10px] uppercase tracking-wider mb-1">
                          LOCATION
                        </p>
                        <p className="font-['Inter'] font-normal text-zinc-900 text-[13px]">
                          Malaysia • Remote worldwide
                        </p>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-stone-50 border border-stone-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-4 h-4 text-zinc-500" />
                      </div>
                      <div className="flex-1">
                        <p className="font-['Inter'] font-medium text-zinc-500 text-[10px] uppercase tracking-wider mb-1">
                          WHATSAPP
                        </p>
                        <a href="#" className="font-['Inter'] font-normal text-zinc-900 text-[13px] hover:text-lime-600 transition-colors">
                          Request a message
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Quick Actions */}
                <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
                  <h3 className="font-['Inter'] font-semibold text-zinc-900 text-[16px] mb-5">
                    Quick actions
                  </h3>
                  <div className="space-y-2">
                    <a href="https://calendly.com/kwstechnology-info/30min" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-stone-50 transition-colors group">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 transition-colors" />
                        <span className="font-['Inter'] font-normal text-zinc-900 text-[13px]">
                          Book Demo
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-300" />
                    </a>

                    <a href="/portfolio" className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-stone-50 transition-colors group">
                      <div className="flex items-center gap-3">
                        <Briefcase className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 transition-colors" />
                        <span className="font-['Inter'] font-normal text-zinc-900 text-[13px]">
                          View portfolio
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-300" />
                    </a>

                    <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-stone-50 transition-colors group">
                      <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 transition-colors" />
                        <span className="font-['Inter'] font-normal text-zinc-900 text-[13px]">
                          Company profile
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-300" />
                    </button>
                  </div>
                </div>

                {/* Card 3: What happens next */}
                <div className="bg-[#1c1917] rounded-3xl p-6 shadow-sm">
                  <h3 className="font-['Inter'] font-semibold text-white text-[16px] mb-5">
                    What happens next
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-['Inter'] font-semibold text-[#78716c] text-[12px]">1</span>
                      </div>
                      <p className="font-['Inter'] font-normal text-white text-[13px] leading-[1.6] pt-0.5">
                        We review your request details
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-['Inter'] font-semibold text-[#78716c] text-[12px]">2</span>
                      </div>
                      <p className="font-['Inter'] font-normal text-white text-[13px] leading-[1.6] pt-0.5">
                        We reply with clarifying questions or a quick call
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-['Inter'] font-semibold text-[#78716c] text-[12px]">3</span>
                      </div>
                      <p className="font-['Inter'] font-normal text-white text-[13px] leading-[1.6] pt-0.5">
                        We share a plan and timeline
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* Pre-Footer CTA */}
        <section className="pb-16 md:pb-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="font-['Inter'] font-semibold text-[#1a1a1a] text-[20px] md:text-[24px] leading-[1.3] mb-2">
                    Prefer a quick call?
                  </h3>
                  <p className="font-['Inter'] font-normal text-[#666] text-[14px] md:text-[15px] leading-[1.6]">
                    Skip the form and talk to an expert directly.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <a href="https://calendly.com/kwstechnology-info/30min" target="_blank" rel="noopener noreferrer" className="bg-[#1c1917] text-white px-6 py-3 rounded-full font-['Inter'] font-medium text-[14px] hover:bg-[#2d2d2d] transition-colors whitespace-nowrap text-center">
                    Book Demo
                  </a>
                  <a href="/" className="bg-white text-[#1a1a1a] px-6 py-3 rounded-full font-['Inter'] font-medium text-[14px] border border-[#e0e0e0] hover:border-[#1a1a1a] transition-colors whitespace-nowrap text-center">
                    Send a message
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
