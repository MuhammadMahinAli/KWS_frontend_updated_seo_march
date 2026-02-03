import svgPaths from '../imports/svg-8o0tb0ja3y';
import imgKWSAppointment from '../assets/KWS_appointment.jpg';
import imgResearchBuddy from '../assets/Res_bdy.jpg';
import imgNFTCloset from '../assets/NFT_closetx.jpg';
import imgDataM from '../assets/Datam.jpg';
import imgSHY from '../assets/SHY.jpg';
import imgPinata from '../assets/Pinata.jpg';
import imgPongoo from '../assets/pongoo.jpg';

export function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "KWS Smart Appointment System",
      description: "A multi-tenant clinic management platform with AI booking agent support, quantum-inspired scheduling optimization, and a self-improvement system to continuously improve performance.",
      tags: ["AI Agent", "Clinic Management", "Multi-tenant"],
      image: imgKWSAppointment,
      type: "featured",
      link: "#"
    },
    {
      id: 2,
      title: "ResearchBuddy",
      description: "A platform for researchers and innovators to manage projects, meetings, and to-dos, collaborate with teams, and generate AI-assisted reports and daily summaries.",
      tags: ["Research", "Project Management", "AI Reports"],
      image: imgResearchBuddy,
      type: "featured",
      link: "#"
    },
    {
      id: 3,
      title: "NFT ClosetX",
      description: "A fashion NFT marketplace that connects digital fashion with physical products, enabling minting, buying/selling, and interactive experiences with AR/VR-ready assets.",
      tags: ["Web3", "Fashion", "AR/VR"],
      image: imgNFTCloset,
      type: "all",
      link: "#"
    },
    {
      id: 4,
      title: "DataM",
      description: "An AI business mentor designed to guide founders with structured insights, planning support, and decision assistance.",
      tags: ["AI Mentor", "Business", "Strategy"],
      image: imgDataM,
      type: "all",
      link: "#"
    },
    {
      id: 5,
      title: "SHY",
      description: "An AI agent concept for youth sexual wellness help, created for supportive guidance, education, and safe conversations.",
      tags: ["AI Agent", "Wellness", "Support"],
      image: imgSHY,
      type: "all",
      link: "#"
    },
    {
      id: 6,
      title: "Pinata Themes",
      description: "A website theme platform with multiple design themes and templates for fast launches.",
      tags: ["Themes", "Templates", "Web Design"],
      image: imgPinata,
      type: "all",
      link: "#"
    },
    {
      id: 7,
      title: "Pongoo",
      description: "A wheelchair controller app concept with AI-driven help and accessible UX patterns.",
      tags: ["Mobile App", "Accessibility", "AI Assist"],
      image: imgPongoo,
      type: "all",
      link: "#"
    }
  ];

  return (
    <div className="relative bg-[#f7f5ef] min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col gap-6 items-center pt-24 md:pt-[193px] pb-12 md:pb-20 px-6">
        <div className="flex flex-col gap-6 max-w-[768px] w-full items-center">
          <h1 className="font-['Inter'] font-semibold text-black text-[36px] md:text-[60px] text-center tracking-[-0.9px] md:tracking-[-1.5px] leading-[40px] md:leading-[60px]">
            Portfolio
          </h1>

          <p className="font-['Inter'] font-medium text-[#737373] text-[16px] md:text-[20px] text-center leading-[24px] md:leading-[28px]">
            Our work across AI agents, platforms, and product design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center justify-center pt-2">
            <a href="https://calendly.com/kwstechnology-info/30min" target="_blank" rel="noopener noreferrer" className="bg-[#d0ef58] flex h-[44px] items-center justify-center px-8 rounded-full hover:bg-[#c5e84d] transition-colors">
              <span className="font-['Inter'] font-medium text-[#18181b] text-[14px] text-center leading-[20px]">
                Book Demo
              </span>
            </a>
            <a href="/contact" className="bg-white border border-[#e5e5e5] flex h-[44px] items-center justify-center px-8 rounded-full hover:border-[#18181b] transition-colors">
              <span className="font-['Inter'] font-medium text-black text-[14px] text-center leading-[20px]">
                Contact
              </span>
            </a>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-3 items-center justify-center pt-4">
            <div className="bg-[rgba(245,245,245,0.5)] px-2 py-1 rounded-md">
              <span className="font-['Inter'] font-medium text-[#525252] text-[12px] leading-[16px]">
                AI Agents
              </span>
            </div>
            <div className="bg-[#d4d4d4] rounded-full w-1 h-1"></div>
            <div className="bg-[rgba(245,245,245,0.5)] px-2 py-1 rounded-md">
              <span className="font-['Inter'] font-medium text-[#525252] text-[12px] leading-[16px]">
                Platforms
              </span>
            </div>
            <div className="bg-[#d4d4d4] rounded-full w-1 h-1"></div>
            <div className="bg-[rgba(245,245,245,0.5)] px-2 py-1 rounded-md">
              <span className="font-['Inter'] font-medium text-[#525252] text-[12px] leading-[16px]">
                Web Apps
              </span>
            </div>
            <div className="bg-[#d4d4d4] rounded-full w-1 h-1"></div>
            <div className="bg-[rgba(245,245,245,0.5)] px-2 py-1 rounded-md">
              <span className="font-['Inter'] font-medium text-[#525252] text-[12px] leading-[16px]">
                UI/UX
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-[1200px] mx-auto px-6 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="bg-white rounded-[28px] border border-[rgba(229,229,229,0.6)] shadow-[0px_4px_20px_-4px_rgba(0,0,0,0.03)] overflow-hidden">
            <div className="p-[9px]">
              <div className="bg-[#f5f5f5] h-[200px] md:h-[256px] rounded-[20px] relative overflow-hidden">
                <img
                  src={imgKWSAppointment}
                  alt="KWS Smart Appointment System"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute bottom-4 left-4 backdrop-blur-[2px] bg-[rgba(255,255,255,0.9)] border border-[rgba(0,0,0,0.05)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] rounded-lg p-[13px]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p363df2c0} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="bg-[#fafafa] border border-[#f5f5f5] px-[11px] py-[3px] rounded-full">
                    <span className="font-['Inter'] font-medium text-[#737373] text-[10px] tracking-[0.25px] uppercase leading-[15px]">
                      AI Agent
                    </span>
                  </div>
                  <div className="bg-[#fafafa] border border-[#f5f5f5] px-[11px] py-[3px] rounded-full">
                    <span className="font-['Inter'] font-medium text-[#737373] text-[10px] tracking-[0.25px] uppercase leading-[15px]">
                      Clinic Management
                    </span>
                  </div>
                  <div className="bg-[#fafafa] border border-[#f5f5f5] px-[11px] py-[3px] rounded-full">
                    <span className="font-['Inter'] font-medium text-[#737373] text-[10px] tracking-[0.25px] uppercase leading-[15px]">
                      Multi-tenant
                    </span>
                  </div>
                </div>

                <h3 className="font-['Inter'] font-semibold text-black text-[18px] md:text-[20px] tracking-[-0.5px] leading-[28px] mb-3">
                  KWS Smart Appointment System
                </h3>

                <p className="font-['Inter'] font-normal text-[#737373] text-[14px] leading-[22.75px] mb-4">
                  A multi-tenant clinic management platform with AI booking agent support, quantum-inspired scheduling optimization, and a self-improvement system to continuously improve performance.
                </p>

                <a href="#" className="font-['Inter'] font-medium text-black text-[14px] leading-[20px] inline-flex items-center gap-1">
                  View Case Study
                  <span className="pl-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-[28px] border border-[rgba(229,229,229,0.6)] shadow-[0px_4px_20px_-4px_rgba(0,0,0,0.03)] overflow-hidden">
            <div className="p-[9px]">
              <div className="bg-[#f5f5f5] h-[200px] md:h-[256px] rounded-[20px] relative overflow-hidden">
                <img
                  src={imgResearchBuddy}
                  alt="ResearchBuddy"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute bottom-4 left-4 backdrop-blur-[2px] bg-[rgba(255,255,255,0.9)] border border-[rgba(0,0,0,0.05)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] rounded-lg p-[13px]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p363df2c0} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="bg-[#fafafa] border border-[#f5f5f5] px-[11px] py-[3px] rounded-full">
                    <span className="font-['Inter'] font-medium text-[#737373] text-[10px] tracking-[0.25px] uppercase leading-[15px]">
                      Research
                    </span>
                  </div>
                  <div className="bg-[#fafafa] border border-[#f5f5f5] px-[11px] py-[3px] rounded-full">
                    <span className="font-['Inter'] font-medium text-[#737373] text-[10px] tracking-[0.25px] uppercase leading-[15px]">
                      Project Management
                    </span>
                  </div>
                  <div className="bg-[#fafafa] border border-[#f5f5f5] px-[11px] py-[3px] rounded-full">
                    <span className="font-['Inter'] font-medium text-[#737373] text-[10px] tracking-[0.25px] uppercase leading-[15px]">
                      AI Reports
                    </span>
                  </div>
                </div>

                <h3 className="font-['Inter'] font-semibold text-black text-[18px] md:text-[20px] tracking-[-0.5px] leading-[28px] mb-3">
                  ResearchBuddy
                </h3>

                <p className="font-['Inter'] font-normal text-[#737373] text-[14px] leading-[22.75px] mb-4">
                  A platform for researchers and innovators to manage projects, meetings, and to-dos, collaborate with teams, and generate AI-assisted reports and daily summaries.
                </p>

                <a href="#" className="font-['Inter'] font-medium text-black text-[14px] leading-[20px] inline-flex items-center gap-1">
                  View Case Study
                  <span className="pl-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="max-w-[1200px] mx-auto px-6 pb-20">
        <h2 className="font-['Inter'] font-semibold text-black text-[24px] md:text-[30px] tracking-[-0.6px] md:tracking-[-0.75px] leading-[32px] md:leading-[36px] mb-8">
          All projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <div className="bg-white border border-[rgba(229,229,229,0.6)] rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="p-5">
              <div className="bg-[#fafafa] h-[192px] rounded-[16px] mb-5 overflow-hidden">
                <img
                  src={imgNFTCloset}
                  alt="NFT ClosetX"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-['Inter'] font-semibold text-black text-[18px] tracking-[-0.45px] leading-[28px] mb-3">
                NFT ClosetX
              </h3>

              <p className="font-['Inter'] font-normal text-[#737373] text-[12px] leading-[16px] mb-4">
                A fashion NFT marketplace that connects digital fashion with physical products, enabling minting, buying/selling, and interactive experiences with AR/VR-ready assets.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <div className="bg-[#fafafa] border border-[#f5f5f5] px-[9px] py-[3px] rounded-md">
                  <span className="font-['Inter'] font-medium text-[#a3a3a3] text-[10px] leading-[15px]">
                    Web3
                  </span>
                </div>
                <div className="bg-[#fafafa] border border-[#f5f5f5] px-[9px] py-[3px] rounded-md">
                  <span className="font-['Inter'] font-medium text-[#a3a3a3] text-[10px] leading-[15px]">
                    Fashion
                  </span>
                </div>
                <div className="bg-[#fafafa] border border-[#f5f5f5] px-[9px] py-[3px] rounded-md">
                  <span className="font-['Inter'] font-medium text-[#a3a3a3] text-[10px] leading-[15px]">
                    AR/VR
                  </span>
                </div>
              </div>

              <a href="#" className="font-['Inter'] font-medium text-black text-[12px] leading-[16px] inline-flex items-center gap-1">
                View
                <span className="pl-1">→</span>
              </a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white border border-[rgba(229,229,229,0.6)] rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="p-5">
              <div className="bg-[#fafafa] h-[192px] rounded-[16px] mb-5 overflow-hidden">
                <img
                  src={imgDataM}
                  alt="DataM"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-['Inter'] font-semibold text-black text-[18px] tracking-[-0.45px] leading-[28px] mb-3">
                DataM
              </h3>

              <p className="font-['Inter'] font-normal text-[#737373] text-[12px] leading-[16px] mb-4">
                An AI business mentor designed to guide founders with structured insights, planning support, and decision assistance.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <div className="bg-[#fafafa] border border-[#f5f5f5] px-[9px] py-[3px] rounded-md">
                  <span className="font-['Inter'] font-medium text-[#a3a3a3] text-[10px] leading-[15px]">
                    AI Mentor
                  </span>
                </div>
                <div className="bg-[#fafafa] border border-[#f5f5f5] px-[9px] py-[3px] rounded-md">
                  <span className="font-['Inter'] font-medium text-[#a3a3a3] text-[10px] leading-[15px]">
                    Business
                  </span>
                </div>
                <div className="bg-[#fafafa] border border-[#f5f5f5] px-[9px] py-[3px] rounded-md">
                  <span className="font-['Inter'] font-medium text-[#a3a3a3] text-[10px] leading-[15px]">
                    Strategy
                  </span>
                </div>
              </div>

              <a href="#" className="font-['Inter'] font-medium text-black text-[12px] leading-[16px] inline-flex items-center gap-1">
                View
                <span className="pl-1">→</span>
              </a>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white border border-[rgba(229,229,229,0.6)] rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="p-5">
              <div className="bg-[#fafafa] h-[192px] rounded-[16px] mb-5 overflow-hidden">
                <img
                  src={imgSHY}
                  alt="SHY"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-['Inter'] font-semibold text-black text-[18px] tracking-[-0.45px] leading-[28px] mb-3">
                SHY
              </h3>

              <p className="font-['Inter'] font-normal text-[#737373] text-[12px] leading-[16px] mb-4">
                An AI agent concept for youth sexual wellness help, created for supportive guidance, education, and safe conversations.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <div className="bg-[#fafafa] border border-[#f5f5f5] px-[9px] py-[3px] rounded-md">
                  <span className="font-['Inter'] font-medium text-[#a3a3a3] text-[10px] leading-[15px]">
                    AI Agent
                  </span>
                </div>
                <div className="bg-[#fafafa] border border-[#f5f5f5] px-[9px] py-[3px] rounded-md">
                  <span className="font-['Inter'] font-medium text-[#a3a3a3] text-[10px] leading-[15px]">
                    Wellness
                  </span>
                </div>
                <div className="bg-[#fafafa] border border-[#f5f5f5] px-[9px] py-[3px] rounded-md">
                  <span className="font-['Inter'] font-medium text-[#a3a3a3] text-[10px] leading-[15px]">
                    Support
                  </span>
                </div>
              </div>

              <a href="#" className="font-['Inter'] font-medium text-black text-[12px] leading-[16px] inline-flex items-center gap-1">
                View
                <span className="pl-1">→</span>
              </a>
            </div>
          </div>

          {/* Project Card 4 */}
          <div className="bg-white border border-[rgba(229,229,229,0.6)] rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="p-5">
              <div className="bg-[#fafafa] h-[192px] rounded-[16px] mb-5 overflow-hidden">
                <img
                  src={imgPinata}
                  alt="Pinata Themes"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-['Inter'] font-semibold text-black text-[18px] tracking-[-0.45px] leading-[28px] mb-3">
                Pinata Themes
              </h3>

              <p className="font-['Inter'] font-normal text-[#737373] text-[12px] leading-[16px] mb-4">
                A website theme platform with multiple design themes and templates for fast launches.
              </p>

              <p className="font-['Inter'] font-normal text-[#a3a3a3] text-[10px] leading-[15px] mb-4">
                Includes theme: Pongoo
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <div className="bg-[#fafafa] border border-[#f5f5f5] px-[9px] py-[3px] rounded-md">
                  <span className="font-['Inter'] font-medium text-[#a3a3a3] text-[10px] leading-[15px]">
                    Themes
                  </span>
                </div>
                <div className="bg-[#fafafa] border border-[#f5f5f5] px-[9px] py-[3px] rounded-md">
                  <span className="font-['Inter'] font-medium text-[#a3a3a3] text-[10px] leading-[15px]">
                    Templates
                  </span>
                </div>
                <div className="bg-[#fafafa] border border-[#f5f5f5] px-[9px] py-[3px] rounded-md">
                  <span className="font-['Inter'] font-medium text-[#a3a3a3] text-[10px] leading-[15px]">
                    Web Design
                  </span>
                </div>
              </div>

              <a href="#" className="font-['Inter'] font-medium text-black text-[12px] leading-[16px] inline-flex items-center gap-1">
                View
                <span className="pl-1">→</span>
              </a>
            </div>
          </div>

          {/* Project Card 5 */}
          <div className="bg-white border border-[rgba(229,229,229,0.6)] rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="p-5">
              <div className="bg-[#fafafa] h-[192px] rounded-[16px] mb-5 overflow-hidden">
                <img
                  src={imgPongoo}
                  alt="Pongoo"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-['Inter'] font-semibold text-black text-[18px] tracking-[-0.45px] leading-[28px] mb-3">
                Pongoo
              </h3>

              <p className="font-['Inter'] font-normal text-[#737373] text-[12px] leading-[16px] mb-4">
                A wheelchair controller app concept with AI-driven help and accessible UX patterns.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <div className="bg-[#fafafa] border border-[#f5f5f5] px-[9px] py-[3px] rounded-md">
                  <span className="font-['Inter'] font-medium text-[#a3a3a3] text-[10px] leading-[15px]">
                    Mobile App
                  </span>
                </div>
                <div className="bg-[#fafafa] border border-[#f5f5f5] px-[9px] py-[3px] rounded-md">
                  <span className="font-['Inter'] font-medium text-[#a3a3a3] text-[10px] leading-[15px]">
                    Accessibility
                  </span>
                </div>
                <div className="bg-[#fafafa] border border-[#f5f5f5] px-[9px] py-[3px] rounded-md">
                  <span className="font-['Inter'] font-medium text-[#a3a3a3] text-[10px] leading-[15px]">
                    AI Assist
                  </span>
                </div>
              </div>

              <a href="#" className="font-['Inter'] font-medium text-black text-[12px] leading-[16px] inline-flex items-center gap-1">
                View
                <span className="pl-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How we deliver section */}
      <section className="max-w-[1200px] mx-auto px-6 pb-20">
        <h2 className="font-['Inter'] font-semibold text-black text-[24px] md:text-[30px] tracking-[-0.6px] md:tracking-[-0.75px] leading-[32px] md:leading-[36px] mb-12">
          How we deliver
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#f5f5f5] rounded-full flex items-center justify-center">
              <span className="font-['Inter'] font-semibold text-black text-[20px]">1</span>
            </div>
            <h3 className="font-['Inter'] font-semibold text-black text-[18px] tracking-[-0.45px] leading-[24px]">
              Discover
            </h3>
            <p className="font-['Inter'] font-normal text-[#737373] text-[14px] leading-[22px]">
              We start with deep understanding.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#f5f5f5] rounded-full flex items-center justify-center">
              <span className="font-['Inter'] font-semibold text-black text-[20px]">2</span>
            </div>
            <h3 className="font-['Inter'] font-semibold text-black text-[18px] tracking-[-0.45px] leading-[24px]">
              Design
            </h3>
            <p className="font-['Inter'] font-normal text-[#737373] text-[14px] leading-[22px]">
              We prototype and iterate on solutions.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#f5f5f5] rounded-full flex items-center justify-center">
              <span className="font-['Inter'] font-semibold text-black text-[20px]">3</span>
            </div>
            <h3 className="font-['Inter'] font-semibold text-black text-[18px] tracking-[-0.45px] leading-[24px]">
              Deploy
            </h3>
            <p className="font-['Inter'] font-normal text-[#737373] text-[14px] leading-[22px]">
              We ship production-ready code.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1200px] mx-auto px-6 pb-20">
        <div className="bg-white border border-[#e5e5e5] rounded-[32px] p-8 md:p-16 text-center">
          <h2 className="font-['Inter'] font-semibold text-black text-[24px] md:text-[36px] tracking-[-0.6px] md:tracking-[-0.9px] leading-[32px] md:leading-[40px] mb-6">
            Want something similar for your business?
          </h2>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            <a href="https://calendly.com/kwstechnology-info/30min" target="_blank" rel="noopener noreferrer" className="bg-black flex h-[48px] items-center justify-center px-8 rounded-full hover:bg-[#2a2a2a] transition-colors">
              <span className="font-['Inter'] font-medium text-white text-[14px] text-center leading-[20px]">
                Book Demo
              </span>
            </a>
            <a href="/contact" className="bg-[#d0ef58] flex h-[48px] items-center justify-center px-8 rounded-full hover:bg-[#c5e84d] transition-colors">
              <span className="font-['Inter'] font-medium text-black text-[14px] text-center leading-[20px]">
                Contact
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
