import { useState } from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';
import { ChatModal } from './ChatModal';

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInput, setUserInput] = useState('');

  const handleGeneratePlan = () => {
    if (userInput.trim()) {
      setIsModalOpen(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleGeneratePlan();
    }
  };

  return (
    <>
      <section className="pt-[128px] md:pt-[128px] px-4 md:px-[104px]">
        <div className="max-w-[1280px] mx-auto md:px-6">
          {/* Hero Heading Container */}
          <div className="flex flex-col items-center max-w-[768px] mx-auto mb-8 md:mb-12">
            <h1 className="sr-only" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', borderWidth: 0 }}>AI Agent Development, Business Automation &amp; Growth Consulting for Healthcare, Aesthetics, Fitness, Hospitality, Legal, HR, Real Estate, Manufacturing and SMBs</h1>
            <p className="font-semibold text-[48px] md:text-[76px] text-center text-[#121212] leading-[50.4px] md:leading-[79.8px] tracking-[-2.4px] md:tracking-[-3.8px] mb-6">
              <span className="block md:inline">Bring AI agents </span>
              <span className="block md:inline">to life.</span>
            </p>
            <div className="max-w-full md:max-w-[672px] px-4 md:px-0">
              <p className="font-normal text-[18px] md:text-[20px] text-center text-[#6b7280] leading-[28px]">
                KWS Technology helps founders and teams build secure, scalable AI agents and full-stack products fast, clean, and production-ready research-led engineering
              </p>
            </div>
          </div>

          {/* Interactive Agent Builder - Lime Green Background */}
          <div className="relative">
            <div className="bg-[#d0ef58] rounded-[24px] md:rounded-[40px] overflow-hidden h-[480px] md:h-[560px] flex items-center justify-center relative shadow-[inset_0_0_60px_rgba(255,255,255,0.4)]">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)]" />

              {/* White Card Container */}
              <div className="relative z-10 w-full max-w-[322px] md:max-w-[640px] mx-auto px-4">
                <div className="bg-white rounded-[24px] shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.08)] overflow-clip pb-3 pt-7 md:pt-8 px-4 md:px-3">
                  <div className="w-full md:w-[576px] mx-auto mb-3">
                    <label className="block font-['Inter'] font-medium text-[14px] text-[#1f2937] leading-[20px]">
                      What do you want your AI agent to do?
                    </label>
                  </div>

                  <div className="w-full md:w-[576px] mx-auto">
                    <textarea
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="w-full h-[128px] md:h-[160px] bg-[#f9fafb] rounded-[12px] p-4 text-sm resize-none border-0 focus:outline-none focus:ring-2 focus:ring-[#121212] transition-all"
                      placeholder="Describe your AI agent workflow..."
                    />
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0 pt-3 pb-3 px-1 md:px-3">
                    <div className="flex items-center gap-2">
                      <button aria-label="Attach file" className="w-[30px] h-[30px] md:w-10 md:h-10 bg-[#f3f4f6] rounded-full flex items-center justify-center hover:bg-[#e5e7eb] transition-colors">
                        <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                          <path d="M4.16667 10H15.8333M10 4.16667V15.8333" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </button>

                      <button className="h-[30px] px-[10px] md:px-4 py-2 md:py-2.5 bg-[#f3f4f6] rounded-full flex items-center gap-1 md:gap-2 hover:bg-[#e5e7eb] transition-colors">
                        <span className="text-[11px] md:text-[14px] font-['Inter'] font-medium text-center text-[#374151] leading-[20px]">Agent Templates</span>
                        <ChevronDown className="w-3.5 h-3.5 text-[#374151]" />
                      </button>
                    </div>

                    <button 
                      onClick={handleGeneratePlan}
                      className="w-full md:w-auto h-[30px] px-[10px] md:px-6 md:py-2.5 bg-[#121212] text-white rounded-full flex items-center justify-center gap-1 md:gap-2 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#2a2a2a] transition-colors overflow-clip disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!userInput.trim()}
                    >
                      <span className="text-[12px] md:text-[14px] font-['Inter'] font-medium text-center leading-[20px]">Generate a plan</span>
                      <Sparkles className="w-3.5 h-3.5 text-[#d0ef58]" />
                    </button>
                  </div>
                </div>

                {/* Floating Tags - Hidden on Mobile */}
                <div className="hidden md:flex gap-3 justify-center mt-8 flex-wrap">
                  {['Lead Gen', 'Clinic Booking', 'Product Sourcing'].map((tag) => (
                    <div key={tag} className="backdrop-blur-sm bg-white/40 border border-white/20 px-[13px] py-[5px] rounded-full">
                      <span className="text-[12px] font-['Inter'] font-medium text-[rgba(18,18,18,0.7)] uppercase leading-[16px]">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Modal */}
      <ChatModal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setUserInput('');
        }} 
        initialMessage={userInput}
      />
    </>
  );
}