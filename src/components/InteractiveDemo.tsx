import svgPaths from "../imports/svg-9ulic38usn";
import { useState } from 'react';

export function InteractiveDemo() {
  const [selectedService, setSelectedService] = useState<'booking' | null>('booking');

  return (
    <section className="relative w-full bg-[#f7f5ef] py-12 md:py-16">
      <div className="mx-auto max-w-[1232px] px-6">
        {/* Header */}
        <div className="flex flex-col gap-3 items-center mb-10">
          <h2 className="font-['Inter'] font-bold text-[#111] text-[30px] leading-[36px] tracking-[-0.75px] text-center">
            Interactive demo
          </h2>
          <p className="font-['Inter'] font-normal text-[#595959] text-[16px] leading-[24px] text-center">
            Select an industry, then tap a service to preview the experience.
          </p>
        </div>

        {/* Industry Selector */}
        <div className="flex flex-col gap-[7px] items-center max-w-[448px] mx-auto mb-10">
          <label className="font-['Inter'] font-semibold text-[#595959] text-[12px] leading-[16px] tracking-[0.6px] uppercase w-full text-left pl-1">
            Select an industry
          </label>
          <div className="bg-white w-full border border-[#e5e5e5] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <div className="relative flex items-center justify-between px-4 py-[15px]">
              <span className="font-['Inter'] font-medium text-[#111] text-[14px]">
                Beauty & Wellness
              </span>
              <div className="size-[24px]">
                <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M7.2 9.6L12 14.4L16.8 9.6"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main Demo Area */}
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center mb-6">
          {/* Left Column - Scheduling */}
          <div className="flex flex-col gap-8 w-full lg:w-[284px]">
            {/* Scheduling Section */}
            <div className="flex flex-col gap-3">
              <h4 className="font-['Inter'] font-bold text-[#595959] text-[12px] leading-[16px] tracking-[0.6px] uppercase pl-1">
                Scheduling
              </h4>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setSelectedService('booking')}
                  className="bg-[#bdff00] w-full text-left px-[17px] py-[13px] rounded-[12px] border border-[rgba(0,0,0,0.05)] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] transition-all hover:bg-[#a8e600]"
                >
                  <span className="font-['Inter'] font-bold text-black text-[14.3px] leading-[20.4px]">
                    See Booking
                  </span>
                </button>
                <button className="bg-white w-full text-left px-[17px] py-[13px] rounded-[12px] border border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-all">
                  <span className="font-['Inter'] font-medium text-[#525252] text-[14px] leading-[20px]">
                    Waitlist
                  </span>
                </button>
                <button className="bg-white w-full text-left px-[17px] py-[13px] rounded-[12px] border border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-all">
                  <span className="font-['Inter'] font-medium text-[#525252] text-[14px] leading-[20px]">
                    Rescheduling
                  </span>
                </button>
              </div>
            </div>

            {/* AI Skincare Chatbot Section */}
            <div className="flex flex-col gap-3">
              <h4 className="font-['Inter'] font-bold text-[#595959] text-[12px] leading-[16px] tracking-[0.6px] uppercase pl-1">
                AI Skincare Chatbot
              </h4>
              <div className="flex flex-col gap-2">
                <button className="bg-white w-full text-left px-[17px] py-[13px] rounded-[12px] border border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-all">
                  <span className="font-['Inter'] font-medium text-[#525252] text-[14px] leading-[20px]">
                    See AI Skincare Chatbot
                  </span>
                </button>
                <button className="bg-white w-full text-left px-[17px] py-[13px] rounded-[12px] border border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-all">
                  <span className="font-['Inter'] font-medium text-[#525252] text-[14px] leading-[20px]">
                    Routine recommendations
                  </span>
                </button>
                <button className="bg-white w-full text-left px-[17px] py-[13px] rounded-[12px] border border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-all">
                  <span className="font-['Inter'] font-medium text-[#525252] text-[14px] leading-[20px]">
                    Product suggestions
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Center - Mobile Preview */}
          <div className="flex flex-col items-center w-full lg:w-[600px]">
            <div className="relative">
              {/* Phone Frame */}
              <div className="bg-[#111] rounded-[56px] w-[340px] h-[650px] border-8 border-[#111] shadow-[0px_0px_0px_1px_rgba(17,17,17,0.1),0px_25px_50px_-12px_rgba(0,0,0,0.25)] relative">
                <div className="absolute inset-2 overflow-hidden rounded-[48px]">
                  {/* Screen Content */}
                  <div className="bg-[#f9fafb] w-full h-full flex flex-col items-center justify-center pt-10 pb-4">
                    <div className="bg-white flex-1 w-full flex flex-col items-center justify-center p-6">
                      {/* Success Icon */}
                      <div className="mb-4">
                        <div className="bg-[rgba(189,255,0,0.2)] rounded-full w-16 h-16 flex items-center justify-center">
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
                            <path
                              d={svgPaths.pd320180}
                              stroke="#65A30D"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.66667"
                            />
                          </svg>
                        </div>
                      </div>
                      {/* Confirmed Text */}
                      <h3 className="font-['Inter'] font-bold text-[#111] text-[18px] leading-[28px] mb-4">
                        Confirmed
                      </h3>
                      {/* Done Button */}
                      <button className="bg-white w-full px-1 py-[13px] rounded-[8px] border border-[#e5e7eb] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] mt-4">
                        <span className="font-['Inter'] font-semibold text-black text-[14px] leading-[20px]">
                          Done
                        </span>
                      </button>
                    </div>
                    {/* Bottom Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-[rgba(0,0,0,0.2)] rounded-full" />
                  </div>
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl" />
                  {/* Status Bar */}
                  <div className="absolute top-2 left-2 right-2 px-6 pt-4 flex items-start justify-between">
                    <span className="font-['Inter'] font-semibold text-black text-[10px] leading-[15px]">
                      9:41
                    </span>
                    <div className="flex gap-1.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                        <path
                          d={svgPaths.p10133180}
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                        <path
                          d={svgPaths.pf70c400}
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                        <g>
                          <path
                            d={svgPaths.p1e9a1600}
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d={svgPaths.p3c77fa00}
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pagination Dots */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-[rgba(0,0,0,0.2)]" />
                <div className="w-4 h-2 rounded-full bg-black" />
              </div>
            </div>
          </div>

          {/* Right Column - Client Engagement & CRM */}
          <div className="flex flex-col gap-8 w-full lg:w-[284px]">
            {/* Client Engagement Section */}
            <div className="flex flex-col gap-3">
              <h4 className="font-['Inter'] font-bold text-[#595959] text-[12px] leading-[16px] tracking-[0.6px] uppercase pl-1">
                Client Engagement
              </h4>
              <div className="flex flex-col gap-2">
                <button className="bg-white w-full text-left px-[17px] py-[13px] rounded-[12px] border border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-all">
                  <span className="font-['Inter'] font-medium text-[#525252] text-[14px] leading-[20px]">
                    Lead follow-up + reminders
                  </span>
                </button>
                <button className="bg-white w-full text-left px-[17px] py-[13px] rounded-[12px] border border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-all">
                  <span className="font-['Inter'] font-medium text-[#525252] text-[14px] leading-[20px]">
                    FAQ + pricing + aftercare replies
                  </span>
                </button>
                <button className="bg-white w-full text-left px-[17px] py-[13px] rounded-[12px] border border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-all">
                  <span className="font-['Inter'] font-medium text-[#525252] text-[14px] leading-[20px]">
                    Reviews/Feedback
                  </span>
                </button>
              </div>
            </div>

            {/* CRM & Workflow Section */}
            <div className="flex flex-col gap-3">
              <h4 className="font-['Inter'] font-bold text-[#595959] text-[12px] leading-[16px] tracking-[0.6px] uppercase pl-1">
                CRM & Workflow
              </h4>
              <div className="flex flex-col gap-2">
                <button className="bg-white w-full text-left px-[17px] py-[13px] rounded-[12px] border border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-all">
                  <span className="font-['Inter'] font-medium text-[#525252] text-[14px] leading-[20px]">
                    See CRM Updates
                  </span>
                </button>
                <button className="bg-white w-full text-left px-[17px] py-[13px] rounded-[12px] border border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-all">
                  <span className="font-['Inter'] font-medium text-[#525252] text-[14px] leading-[20px]">
                    Reporting summaries
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Card - Services for this industry */}
        <div className="bg-white rounded-[24px] border border-[#f5f5f5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-8 max-w-[1166px] mx-auto">
          <h3 className="font-['Inter'] font-semibold text-[#111] text-[18px] leading-[28px] mb-2">
            Services for this industry
          </h3>
          <p className="font-['Inter'] font-normal text-[#595959] text-[14px] leading-[20px] mb-4">
            What we typically deliver for this client type.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#f5f5f5] border border-[#e5e5e5] rounded-full px-[13px] py-[5px] font-['Inter'] font-medium text-[#525252] text-[12px] leading-[16px]">
              Appointment booking + rescheduling
            </span>
            <span className="bg-[#f5f5f5] border border-[#e5e5e5] rounded-full px-[13px] py-[5px] font-['Inter'] font-medium text-[#525252] text-[12px] leading-[16px]">
              Lead follow-up + reminders
            </span>
            <span className="bg-[#f5f5f5] border border-[#e5e5e5] rounded-full px-[13px] py-[5px] font-['Inter'] font-medium text-[#525252] text-[12px] leading-[16px]">
              FAQ + pricing + aftercare replies
            </span>
            <span className="bg-[#f5f5f5] border border-[#e5e5e5] rounded-full px-[13px] py-[5px] font-['Inter'] font-medium text-[#525252] text-[12px] leading-[16px]">
              AI Skincare Chatbot
            </span>
            <span className="bg-[#f5f5f5] border border-[#e5e5e5] rounded-full px-[13px] py-[5px] font-['Inter'] font-medium text-[#525252] text-[12px] leading-[16px]">
              Routine recommendations
            </span>
            <span className="bg-[#f5f5f5] border border-[#e5e5e5] rounded-full px-[13px] py-[5px] font-['Inter'] font-medium text-[#525252] text-[12px] leading-[16px]">
              Product suggestions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
