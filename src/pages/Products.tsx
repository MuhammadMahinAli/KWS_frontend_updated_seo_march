import { Search, ChevronDown } from 'lucide-react';
import svgPaths from '../imports/svg-uqvxn8cki9';
import { ResponsiveImage } from '../components/ResponsiveImage';

// Import images for proper Vite handling and Retina support
import clinicImage from '../assets/clinic.png';
import skincareImage from '../assets/skincare.png';
import uiImage from '../assets/ui.png';

export function Products() {
  const deliverables = [
    {
      category: 'Healthcare',
      subCategory: 'AI Agent',
      title: 'Clinic AI Appointment System',
      description: 'Web app + AI voice/chat assistant to book, reschedule, cancel, send reminders, and sync with your clinic rules.',
      link: 'https://www.upwork.com/services/product/development-it-ai-agent-appointment-system-for-medical-clinics-research-led-engineering-2004233045256726074?ref=project_share&tier=0',
      image: clinicImage,
    },
    {
      category: 'Aesthetics',
      subCategory: 'Automation',
      title: 'AI Booking & Clinic Automation',
      description: '24/7 voice + chat booking, CRM pipeline, smart reminders/deposits, aftercare follow-ups, and analytics to reduce no-shows.',
      link: 'https://www.upwork.com/services/product/development-it-ai-booking-automation-system-for-skincare-and-aesthetic-clinics-2011825109339062327?ref=project_share',
      image: skincareImage,
    },
  ];



  return (
    <div className="relative bg-[#f7f5ef] min-h-screen" style={{
      backgroundImage: "linear-gradient(90deg, rgb(247, 245, 239) 0%, rgb(247, 245, 239) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)"
    }}>
      <main className="relative shrink-0 w-full">
        <div className="flex flex-col items-center size-full">
          <div className="flex flex-col gap-[40px] md:gap-[70px] items-center pb-[46px] pt-[120px] md:pt-[128px] px-4 md:px-6 relative w-full">

            {/* Hero Section */}
            <div className="flex flex-col gap-4 items-center max-w-[896px] w-full">
              <div className="flex flex-col items-center w-full">
                <h1 className="font-['Inter'] font-medium text-[#18181b] text-[32px] md:text-[48px] text-center tracking-[-1.2px] leading-[36px] md:leading-[48px]">
                  Client-Ready Builds
                </h1>
              </div>

              <div className="flex flex-col items-center max-w-[672px] w-full">
                <p className="font-['Inter'] font-normal text-[#71717a] text-[16px] md:text-[18px] text-center leading-[24px] md:leading-[29.25px]">
                  Explore real deliverables—AI agents, automations, and web apps.
                </p>
              </div>

              {/* Search Bar */}
              <div className="flex flex-col items-start max-w-[576px] pt-4 w-full relative">
                <div className="bg-white h-[50px] w-full rounded-2xl border border-[#e4e4e7] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] relative">
                  <div className="absolute bottom-0 left-4 top-4 flex items-center">
                    <Search className="w-[18px] h-[18px] text-[#a1a1aa]" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-3 items-center justify-center pt-4 w-full md:w-auto">
                <a href="https://www.upwork.com/freelancers/muhammadmahina" target="_blank" rel="noopener noreferrer" className="bg-[#18181b] flex items-center px-6 py-[10px] rounded-full w-full md:w-auto justify-center hover:bg-[#2a2a2a] transition-colors">
                  <span className="font-['Inter'] font-medium text-[14px] text-center text-white leading-[20px]">
                    View Marketplace Work
                  </span>
                </a>
                <a href="/contact" className="flex items-center px-[25px] py-[11px] rounded-full border border-[#84cc16] w-full md:w-auto justify-center hover:bg-[#84cc16]/10 transition-colors">
                  <span className="font-['Inter'] font-medium text-[#18181b] text-[14px] text-center leading-[20px]">
                    Request a Quote
                  </span>
                </a>
              </div>
            </div>

            {/* Featured Deliverable Section */}
            <div className="flex flex-col gap-4 items-end max-w-[1152px] w-full">
              <div className="flex flex-col items-start w-full">
                <span className="font-['Inter'] font-semibold text-[#a1a1aa] text-[12px] tracking-[1.2px] uppercase leading-[16px]">
                  Featured Deliverable
                </span>
              </div>

              {/* Featured Card */}
              <div className="bg-white w-full rounded-[20px] md:rounded-[32px] border border-[#f4f4f5] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-hidden p-px">
                <div className="flex flex-col md:flex-row items-start justify-center w-full">
                  {/* Left Content */}
                  <div className="flex-1 min-h-px min-w-px relative w-full">
                    <div className="flex flex-col justify-center size-full">
                      <div className="flex flex-col items-start justify-center p-6 md:p-12 relative size-full">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 items-start pb-4 md:pb-6 w-full">
                          <div className="bg-[#ecfccb] px-[10px] py-1 rounded-md">
                            <span className="font-['Inter'] font-semibold text-[#3f6212] text-[10px] tracking-[0.25px] uppercase leading-[15px]">
                              New Arrival
                            </span>
                          </div>
                          <div className="bg-[#f4f4f5] px-[11px] py-[5px] rounded-md border border-[#e4e4e7]">
                            <span className="font-['Inter'] font-medium text-[#52525b] text-[10px] leading-[15px]">
                              AI Agents
                            </span>
                          </div>
                        </div>

                        {/* Title */}
                        <div className="pb-4 w-full">
                          <h2 className="font-['Inter'] font-medium text-[#18181b] text-[20px] md:text-[30px] tracking-[-0.5px] md:tracking-[-0.75px] leading-[28px] md:leading-[36px]">
                            AI Voice + Chat Agent Builder (n8n + APIs)
                          </h2>
                        </div>

                        {/* Features List */}
                        <div className="flex flex-col gap-3 pb-6 md:pb-8 w-full">
                          <div className="flex gap-3 items-start w-full">
                            <div className="pt-[2px]">
                              <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 14 14">
                                <path d={svgPaths.p3de7e600} stroke="#65A30D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                              </svg>
                            </div>
                            <p className="font-['Inter'] font-normal text-[#71717a] text-[13px] md:text-[14px] leading-[18px] md:leading-[20px]">
                              Production-ready voice/chat agent + automation (not a demo)
                            </p>
                          </div>
                          <div className="flex gap-3 items-start w-full">
                            <div className="pt-[2px]">
                              <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 14 14">
                                <path d={svgPaths.p3de7e600} stroke="#65A30D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                              </svg>
                            </div>
                            <p className="font-['Inter'] font-normal text-[#71717a] text-[13px] md:text-[14px] leading-[18px] md:leading-[20px]">
                              Connects to your tools: calendar, CRM, database, email, internal APIs
                            </p>
                          </div>
                          <div className="flex gap-3 items-start w-full">
                            <div className="pt-[2px]">
                              <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 14 14">
                                <path d={svgPaths.p3de7e600} stroke="#65A30D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                              </svg>
                            </div>
                            <p className="font-['Inter'] font-normal text-[#71717a] text-[13px] md:text-[14px] leading-[18px] md:leading-[20px]">
                              Clean n8n workflows + short docs so your team can maintain it
                            </p>
                          </div>
                        </div>

                        {/* Link */}
                        <a
                          href="https://www.upwork.com/services/product/development-it-ai-agent-full-stack-dev-n8n-api-voice-research-solutions-2004201271409597071?ref=project_share&tier=0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center w-full hover:opacity-80 transition-opacity"
                        >
                          <span className="font-['Inter'] font-medium text-[#18181b] text-[14px] leading-[20px]">
                            Open project link
                          </span>
                          <div className="pl-2">
                            <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 14 14">
                              <path d={svgPaths.p2bbdda00} stroke="#18181B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Preview */}
                  <div className="flex-1 min-h-px min-w-px bg-[#fafafa] border-t md:border-t-0 md:border-l border-[#f4f4f5] w-full">
                    <div className="flex items-center justify-center size-full p-4">
                      <ResponsiveImage
                        src={uiImage}
                        alt="AI Voice + Chat Agent Builder UI"
                        className="w-full h-auto rounded-xl object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Deliverables Section */}
            <div className="flex flex-col gap-6 md:gap-8 items-start max-w-[1152px] pt-4 w-full">
              <div className="flex items-end justify-between w-full">
                <h2 className="font-['Inter'] font-medium text-[#18181b] text-[18px] md:text-[20px] tracking-[-0.5px] leading-[26px] md:leading-[28px]">
                  Recent Deliverables
                </h2>
                <button className="flex gap-1 items-center">
                  <span className="font-['Inter'] font-medium text-[#71717a] text-[12px] leading-[16px]">
                    View all
                  </span>
                  <ChevronDown className="w-[14px] h-[14px] text-[#71717a] rotate-[-90deg]" strokeWidth={1.16667} />
                </button>
              </div>

              {/* Deliverables Grid */}
              <div className="relative w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
                  {deliverables.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-[20px] md:rounded-[24px] border border-[#f4f4f5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] overflow-hidden p-px"
                    >
                      <div className="flex flex-col gap-3 items-start p-3 w-full h-full">
                        {/* Card Image */}
                        <div className="aspect-[350/218.75] bg-[#fafafa] rounded-[16px] md:rounded-[20px] w-full overflow-clip flex items-center justify-center">
                          <ResponsiveImage
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Tags */}
                        <div className="flex gap-2 items-start flex-wrap">
                          <div className="bg-[#f4f4f5] px-[9px] py-[3px] rounded-full border border-[#e4e4e7]">
                            <span className="font-['Inter'] font-medium text-[#52525b] text-[10px] leading-[15px]">
                              {item.category}
                            </span>
                          </div>
                          <div className="bg-[#f4f4f5] px-[9px] py-[3px] rounded-full border border-[#e4e4e7]">
                            <span className="font-['Inter'] font-medium text-[#52525b] text-[10px] leading-[15px]">
                              {item.subCategory}
                            </span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-['Inter'] font-medium text-[#18181b] text-[15px] md:text-[16px] leading-[22px] md:leading-[24px]">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="font-['Inter'] font-normal text-[#71717a] text-[12px] leading-[18px]">
                          {item.description}
                        </p>

                        {/* Open Link Button */}
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 mt-auto hover:opacity-80 transition-opacity"
                        >
                          <span className="font-['Inter'] font-medium text-[#18181b] text-[14px] leading-[20px]">
                            Open
                          </span>
                          <span className="font-['Inter'] font-medium text-[#18181b] text-[14px] leading-[20px]">
                            →
                          </span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>


          </div>
        </div>
      </main>

      {/* Want something similar CTA */}
      <section className="flex flex-col items-center py-12 md:py-24 px-4 md:px-6">
        <div className="flex flex-col gap-6 md:gap-8 items-center max-w-[672px] w-full">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="font-['Inter'] font-medium text-[#18181b] text-[24px] md:text-[30px] text-center tracking-[-0.6px] md:tracking-[-0.75px] leading-[30px] md:leading-[36px]">
              Want something similar?
            </h2>
            <p className="font-['Inter'] font-normal text-[#71717a] text-[15px] md:text-[16px] text-center leading-[22px] md:leading-[24px]">
              We can customize an AI Studio build for your specific needs, or start completely from scratch.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-3 items-center justify-center w-full md:w-auto">
            <a href="https://calendly.com/kwstechnology-info/30min" target="_blank" rel="noopener noreferrer" className="bg-[#18181b] px-6 py-[10px] rounded-full w-full md:w-auto text-center hover:bg-[#2a2a2a] transition-colors">
              <span className="font-['Inter'] font-medium text-white text-[14px] leading-[20px]">
                Book Demo
              </span>
            </a>
            <a href="/contact" className="bg-[#84cc16] px-6 py-[10px] rounded-full w-full md:w-auto text-center hover:bg-[#7ab814] transition-colors">
              <span className="font-['Inter'] font-medium text-[#18181b] text-[14px] leading-[20px]">
                Contact Us
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
