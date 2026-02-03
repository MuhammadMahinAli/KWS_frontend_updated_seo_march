import { Check } from 'lucide-react';

export function BookingAgent() {
  const features = [
    'Voice + WhatsApp booking',
    'Ai driven scheduling & calendars',
    'Auto reminders and follow-ups',
    'CRM updates + analytics',
  ];

  return (
    <section className="py-0 px-4 md:px-[117px]">
      <div className="max-w-[1232px] mx-auto">
        <div className="bg-[#121212] rounded-[24px] md:rounded-[48px] overflow-hidden flex flex-col md:flex-row items-start isolate">
          {/* Left Content */}
          <div className="w-full md:flex-1 md:min-h-px md:min-w-px relative md:self-stretch z-[2]">
            <div className="flex flex-col justify-center h-full">
              <div className="p-8 md:p-16 flex flex-col items-start justify-center relative w-full">
                {/* Featured Product Badge */}
                <div className="pb-2 mb-3 md:mb-0">
                  <div className="inline-flex items-center px-[13px] py-[4.5px] rounded-full border border-white/20">
                    <span className="font-['Inter'] font-medium text-[12px] text-[#d0ef58] uppercase tracking-[0.3px] leading-[16px]">Featured Product</span>
                  </div>
                </div>
                
                {/* Heading */}
                <div className="pb-6 mb-0">
                  <h2 className="font-['Inter'] font-semibold text-[30px] md:text-[48px] text-white tracking-[-0.75px] md:tracking-[-1.2px] leading-[36px] md:leading-[48px]">
                    <span className="block md:inline">Appointment</span>
                    <span className="block md:inline"> Booking AI Agent</span>
                  </h2>
                </div>
                
                {/* Feature List */}
                <div className="pb-10 mb-0">
                  <div className="flex flex-col gap-4 items-start w-full">
                    {features.map((feature, index) => (
                      <div key={index} className="flex gap-3 items-center w-full">
                        <svg className="w-[18px] h-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                          <path d="M15 4.5L6.75 12.75L3 9" stroke="#D0EF58" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                        <span className="font-['Inter'] font-normal text-[14px] md:text-[16px] text-[#d1d5db] leading-[20px] md:leading-[24px]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 items-start w-full">
                  <a href="https://calendly.com/kwstechnology-info/30min" target="_blank" rel="noopener noreferrer" className="bg-[#d0ef58] flex flex-col items-center justify-center px-6 py-[13px] rounded-full hover:bg-[#c5e84d] transition-colors">
                    <span className="font-['Inter'] font-medium text-[14px] text-center text-[#121212] leading-[20px]">
                      Book Demo
                    </span>
                  </a>
                  <button className="flex flex-col items-center justify-center px-[25px] py-[13px] rounded-full border border-[rgba(255,255,255,0.2)] relative">
                    <span className="font-['Inter'] font-medium text-[14px] text-center text-white leading-[20px]">
                      See Features
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Phone Mockup - Hidden on Mobile */}
          <div className="hidden md:flex flex-1 min-h-[400px] min-w-px relative self-stretch z-[1] bg-[#111827]">
            <div className="flex flex-row items-center justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
              <div className="flex items-center justify-center min-h-[inherit] pl-[166.71px] pr-[70.705px] py-0 relative size-full">
                <div className="absolute inset-0" style={{ 
                  backgroundImage: "linear-gradient(40.0608deg, rgb(18, 18, 18) 0%, rgb(31, 41, 55) 100%)" 
                }} />
                <div className="flex h-[303.439px] items-center justify-center max-w-[360px] relative shrink-0 w-[378.586px]">
                  <div className="flex-none rotate-[-4deg]">
                    {/* Phone Card */}
                    <div className="bg-white flex flex-col gap-4 items-start overflow-clip p-4 rounded-2xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-[360px]">
                      {/* Top Section with Progress */}
                      <div className="relative shrink-0 w-full border-b border-[#f3f4f6]">
                        <div className="flex items-center justify-between pb-[13px] pl-[0.003px] pr-0 pt-0 w-full">
                          <div className="bg-[#e5e7eb] h-3 rounded-full shrink-0 w-24" />
                          <div className="bg-[rgba(208,239,88,0.2)] h-8 rounded-full shrink-0 w-8 flex items-center justify-center border-0">
                            <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 14.0043 14.0043">
                              <path d="M8.07116 9.66766C8.19167 9.723 8.32744 9.73565 8.4561 9.70351C8.58476 9.67137 8.69864 9.59637 8.77897 9.49085L8.98611 9.21952C9.09482 9.07458 9.23578 8.95694 9.39782 8.87591C9.55987 8.79489 9.73856 8.75271 9.91973 8.75271H11.6703C11.9798 8.75271 12.2766 8.87566 12.4955 9.09452C12.7143 9.31338 12.8373 9.61022 12.8373 9.91973V11.6703C12.8373 11.9798 12.7143 12.2766 12.4955 12.4955C12.2766 12.7143 11.9798 12.8373 11.6703 12.8373C8.88464 12.8373 6.2131 11.7307 4.24336 9.76097C2.27362 7.79123 1.16703 5.11969 1.16703 2.33406C1.16703 2.02454 1.28998 1.7277 1.50884 1.50884C1.7277 1.28998 2.02454 1.16703 2.33406 1.16703H4.0846C4.39411 1.16703 4.69095 1.28998 4.90981 1.50884C5.12867 1.7277 5.25162 2.02454 5.25162 2.33406V4.0846C5.25162 4.26577 5.20944 4.44446 5.12842 4.60651C5.04739 4.76856 4.92975 4.90951 4.78481 5.01822L4.51173 5.22303C4.40461 5.30483 4.3291 5.42119 4.29804 5.55234C4.26698 5.68349 4.28228 5.82135 4.34134 5.9425C5.13882 7.56226 6.45041 8.87221 8.07116 9.66766Z" stroke="#4D7C0F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16703" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Chat Message */}
                      <div className="flex flex-col gap-3 items-start w-full">
                        <div className="flex gap-3 items-start w-full">
                          <div className="bg-[#f3f4f6] rounded-full shrink-0 w-8 h-8" />
                          <div className="bg-[#f3f4f6] flex flex-col gap-2 items-start p-3 rounded-bl-2xl rounded-br-2xl rounded-tr-2xl w-[246px]">
                            <div className="bg-[#d1d5db] h-2 opacity-50 rounded w-full" />
                            <div className="bg-[#d1d5db] h-2 opacity-50 rounded w-[148px]" />
                          </div>
                        </div>

                        {/* Audio Waveform with Text */}
                        <div className="bg-[rgba(208,239,88,0.1)] h-[66px] rounded-xl w-full border border-[rgba(208,239,88,0.2)] relative">
                          {/* Waveform bars */}
                          <div className="absolute bg-[#d0ef58] h-3 left-[calc(50%-87.91px)] rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 w-1" />
                          <div className="absolute bg-[#d0ef58] h-6 left-[calc(50%-79.92px)] rounded-full top-[calc(50%+0.01px)] -translate-x-1/2 -translate-y-1/2 w-1" />
                          <div className="absolute bg-[#d0ef58] h-4 left-[calc(50%-71.91px)] rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 w-1" />
                          <div className="absolute bg-[#d0ef58] h-8 left-[calc(50%-63.91px)] rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 w-1" />
                          <div className="absolute bg-[#d0ef58] h-5 left-[calc(50%-55.91px)] rounded-full top-[calc(50%+0.01px)] -translate-x-1/2 -translate-y-1/2 w-1" />
                          <div className="absolute bg-[#d0ef58] h-3 left-[calc(50%-47.92px)] rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 w-1" />
                          
                          {/* Text */}
                          <div className="absolute left-[122.12px] top-[24.17px] pl-3 pr-0 py-0">
                            <span className="font-['Inter'] font-medium text-[12px] text-[#365314] leading-[16px]">
                              Booking confirmed...
                            </span>
                          </div>
                        </div>

                        {/* Appointment Card */}
                        <div className="bg-[#121212] rounded-xl w-full">
                          <div className="flex gap-3 items-center p-3 w-full">
                            <div className="bg-[#d0ef58] px-2 py-1 rounded relative shrink-0">
                              <span className="font-['Inter'] font-bold text-[12px] text-[#121212] leading-[16px]">
                                14:00
                              </span>
                            </div>
                            <span className="font-['Inter'] font-normal text-[12px] text-white leading-[16px]">
                              Dr. Sarah • Dental Checkup
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}