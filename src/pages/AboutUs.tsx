import { Helmet } from 'react-helmet-async';
import svgPaths from '../imports/svg-y3f6axc5oo';
import { CheckCircle2, Target, Shield, Zap } from 'lucide-react';

export function AboutUs() {
  const stats = [
    { label: 'Product-minded', value: 'Team culture' },
    { label: 'AI Agent Focus', value: 'Core offering' },
    { label: 'Production Ready', value: 'Delivery standard' },
    { label: 'Fast Iterations', value: 'Work approach' },
  ];

  const missionPoints = [
    {
      icon: CheckCircle2,
      title: 'Quality first',
      description: 'Reliable production builds, not just prototypes.',
    },
    {
      icon: Shield,
      title: 'Speed with sanity',
      description: 'Fast, transparent delivery cycles.',
    },
    {
      icon: Target,
      title: 'Trust & privacy',
      description: 'Secure, compliant solutions.',
    },
    {
      icon: Zap,
      title: 'Practical AI',
      description: 'Models that work, tech hype-free.',
    },
  ];

  const principles = [
    {
      title: 'Clarity first',
      description: 'Simple docs, clear roadmaps.',
    },
    {
      title: 'Iterate Honestly AI',
      description: 'Honest advice on when AI fits.',
    },
    {
      title: 'Reliable shipping',
      description: 'Deliver what we promise on time.',
    },
    {
      title: 'Continuous improvement',
      description: 'We improve with each sprint.',
    },
  ];

  return (
    <div className="relative bg-[#f7f5ef] min-h-screen" style={{
      backgroundImage: "linear-gradient(90deg, rgb(247, 245, 239) 0%, rgb(247, 245, 239) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)"
    }}>
      <Helmet>
        <title>About KWS Technology | AI-First Agency</title>
        <meta name="description" content="KWS Technology is a Malaysia-based AI development studio building smart agents, automation systems, and full-stack products for growth-focused businesses." />
        <meta property="og:title" content="About KWS Technology | AI-First Agency" />
        <meta property="og:description" content="KWS Technology is a Malaysia-based AI development studio building smart agents, automation systems, and full-stack products for growth-focused businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kws.technology/about-us" />
        <meta property="og:image" content="/og-default.png" />
        <link rel="canonical" href="https://www.kws.technology/about-us" />
      </Helmet>
      {/* Main Content */}
      <main className="flex flex-col gap-12 md:gap-[70px] items-center overflow-hidden pb-12 md:pb-[70px] pt-24 md:pt-[170px] px-0 relative w-full">

        {/* Hero Section */}
        <section className="flex flex-col gap-6 items-center max-w-[896px] px-6 py-0 w-full">
          <div className="flex flex-col items-center w-full">
            <h1 className="font-['Inter'] font-semibold text-black text-[36px] md:text-[48px] text-center tracking-[-0.9px] md:tracking-[-1.2px] leading-[39.6px] md:leading-[48px]">
              About KWS Technology
            </h1>
          </div>

          <div className="flex flex-col items-center max-w-full md:max-w-[672px] w-full">
            <p className="font-['Inter'] font-normal text-[#6b7280] text-[18px] md:text-[20px] text-center leading-[29.25px] md:leading-[28px]">
              We're a product-minded team building practical AI systems for businesses.
            </p>
          </div>

          <div className="flex gap-4 items-center justify-center pt-4 w-full">
            <a href="https://calendly.com/kwstechnology-info/30min" target="_blank" rel="noopener noreferrer" className="bg-black flex h-12 items-center justify-center px-6 py-[13.5px] rounded-full shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] hover:bg-[#2a2a2a] transition-colors">
              <span className="font-['Inter'] font-medium text-[14px] text-center text-white leading-[20px]">
                Book Demo
              </span>
            </a>
            <a href="/contact" className="bg-[#d0f553] flex h-12 items-center justify-center px-6 py-[13.5px] rounded-full hover:bg-[#c5e84d] transition-colors">
              <span className="font-['Inter'] font-medium text-black text-[14px] text-center leading-[20px]">
                Contact
              </span>
            </a>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="flex flex-col md:flex-row gap-12 md:gap-20 items-start justify-center w-full max-w-[342px] md:max-w-[1104px] px-6 md:px-0">
          <div className="flex flex-col gap-6 items-start w-full md:w-[610.66px]">
            <h2 className="font-['Inter'] font-semibold text-black text-[24px] tracking-[-0.6px] leading-[32px] w-full">
              Our story
            </h2>

            <div className="flex flex-col gap-6 items-start w-full">
              <p className="font-['Inter'] font-normal text-[#6b7280] text-[16px] leading-[26px] w-full">
                KWS Technology started with a simple observation: businesses were drowning in repetitive tasks while AI tools were becoming powerful enough to handle them. Yet, there was a gap between "cool tech demos" and reliable, production-ready systems.
              </p>

              <p className="font-['Inter'] font-normal text-[#6b7280] text-[16px] leading-[26px] w-full">
                We positioned ourselves as an AI-agent-first agency. We don't just build chatbots; we architect complete automation workflows that integrate with your existing software. From handling clinic appointments to automating agency reporting, our focus is on shipping outcomes, not just code.
              </p>

              <p className="font-['Inter'] font-normal text-[#6b7280] text-[16px] leading-[26px] w-full">
                While our core is automation, we remain deeply product-minded. We support our AI implementations with robust web development and templates, ensuring the entire digital ecosystem works seamlessly together.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="flex flex-col items-start w-full md:w-[413.33px] gap-4">
            <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.05)] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.02)] p-5 relative w-full h-[114px]">
              <div className="absolute left-5 top-5 w-5 h-5">
                <CheckCircle2 className="w-5 h-5 text-[#9ca3af]" strokeWidth={1.5} />
              </div>
              <div className="absolute left-5 right-5 top-[52px]">
                <p className="font-['Inter'] font-medium text-black text-[14px] leading-[20px]">
                  Product-minded
                </p>
              </div>
              <div className="absolute left-5 right-5 top-[76px]">
                <p className="font-['Inter'] font-normal text-[#6b7280] text-[12px] leading-[16px]">
                  Delivery focused
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.05)] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.02)] p-5 relative w-full h-[114px]">
              <div className="absolute left-5 top-5 w-5 h-5">
                <Target className="w-5 h-5 text-[#9ca3af]" strokeWidth={1.5} />
              </div>
              <div className="absolute left-5 right-5 top-[52px]">
                <p className="font-['Inter'] font-medium text-black text-[14px] leading-[20px]">
                  AI Agent Focus
                </p>
              </div>
              <div className="absolute left-5 right-5 top-[76px]">
                <p className="font-['Inter'] font-normal text-[#6b7280] text-[12px] leading-[16px]">
                  Automation experts
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.05)] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.02)] p-5 relative w-full h-[114px]">
              <div className="absolute left-5 top-5 w-5 h-5">
                <Shield className="w-5 h-5 text-[#9ca3af]" strokeWidth={1.5} />
              </div>
              <div className="absolute left-5 right-5 top-[52px]">
                <p className="font-['Inter'] font-medium text-black text-[14px] leading-[20px]">
                  Production Ready
                </p>
              </div>
              <div className="absolute left-5 right-5 top-[76px]">
                <p className="font-['Inter'] font-normal text-[#6b7280] text-[12px] leading-[16px]">
                  Reliable systems
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.05)] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.02)] p-5 relative w-full h-[114px]">
              <div className="absolute left-5 top-5 w-5 h-5">
                <Zap className="w-5 h-5 text-[#9ca3af]" strokeWidth={1.5} />
              </div>
              <div className="absolute left-5 right-5 top-[52px]">
                <p className="font-['Inter'] font-medium text-black text-[14px] leading-[20px]">
                  Fast Iterations
                </p>
              </div>
              <div className="absolute left-5 right-5 top-[76px]">
                <p className="font-['Inter'] font-normal text-[#6b7280] text-[12px] leading-[16px]">
                  Weekly shipping
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="bg-white flex flex-col items-start pb-[33px] md:pb-[49px] pt-[65px] md:pt-[81px] px-[33px] md:px-[49px] rounded-[24px] w-full max-w-[342px] md:max-w-[1104px]">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
          <div className="relative w-full md:w-[1006px]">
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start justify-center w-full">
              <div className="flex-1 flex flex-col gap-6 min-h-px min-w-px self-stretch">
                <h2 className="font-['Inter'] font-semibold text-black text-[24px] tracking-[-0.6px] leading-[32px] w-full">
                  Our mission
                </h2>

                <div className="font-['Inter'] font-medium text-black text-[20px] md:text-[24px] tracking-[-0.5px] md:tracking-[-0.6px] leading-[25px] md:leading-[32px]">
                  Make AI agents practical—so teams save time, reduce manual work, and move faster.
                </div>
              </div>

              {/* Mission Points */}
              <div className="flex-1 flex flex-col gap-6 min-h-px min-w-px self-stretch">
                {missionPoints.map((point, index) => (
                  <div key={index} className="flex gap-4 items-start w-full">
                    <div className="flex flex-col h-[34px] items-start pb-0 pt-[2px] px-0 w-8">
                      <div className="bg-[#fdfcf9] border border-[rgba(0,0,0,0.05)] rounded-full w-8 h-8 flex items-center justify-center">
                        <point.icon className="w-[14px] h-[14px] text-black" strokeWidth={1.16667} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-['Inter'] font-semibold text-black text-[14px] leading-[20px]">
                        {point.title}
                      </h3>
                      <p className="font-['Inter'] font-normal text-[#6b7280] text-[14px] leading-[20px]">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center justify-center pb-0 pt-0 md:pt-8 w-full max-w-[342px] md:max-w-[1104px] px-6 md:px-0">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-4 items-start min-h-px min-w-px w-full">
            <div className="bg-[rgba(0,0,0,0.05)] px-3 py-1 rounded-full">
              <span className="font-['Inter'] font-semibold text-[#4b5563] text-[10px] tracking-[0.5px] uppercase leading-[15px]">
                Service Preview
              </span>
            </div>

            <h2 className="font-['Inter'] font-semibold text-black text-[30px] md:text-[36px] tracking-[-0.75px] md:tracking-[-0.9px] leading-[36px] md:leading-[40px] w-full">
              See our services in action
            </h2>

            <p className="font-['Inter'] font-normal text-[#6b7280] text-[18px] leading-[29.25px] w-full">
              A short walkthrough of our AI agents, automations, and delivery quality. We don't just talk about tech; we show you exactly how it functions.
            </p>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-2 pt-4 w-full">
              <div className="px-[13px] py-[7px] rounded-lg border border-[rgba(0,0,0,0.1)] self-stretch">
                <span className="font-['Inter'] font-medium text-[#4b5563] text-[12px] leading-[16px]">
                  AI Agents
                </span>
              </div>
              <div className="px-[13px] py-[7px] rounded-lg border border-[rgba(0,0,0,0.1)] self-stretch">
                <span className="font-['Inter'] font-medium text-[#4b5563] text-[12px] leading-[16px]">
                  Automation
                </span>
              </div>
              <div className="px-[13px] py-[7px] rounded-lg border border-[rgba(0,0,0,0.1)] self-stretch">
                <span className="font-['Inter'] font-medium text-[#4b5563] text-[12px] leading-[16px]">
                  Web Apps
                </span>
              </div>
            </div>
          </div>

          {/* Right Video */}
          <div className="flex-1 flex flex-col gap-4 items-start md:items-end min-h-px min-w-px w-full">
            {/* Embedded YouTube Video */}
            <div className="rounded-2xl overflow-hidden relative h-[191.25px] md:h-[295.88px] w-full md:w-[526px]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/3xMvCz7i2BM"
                title="KWS Services Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Green Dot Badge - Hidden on mobile */}
            <div className="hidden md:flex gap-2 items-center">
              <div className="bg-[#d0f553] rounded-full w-[6px] h-[6px]" />
              <span className="font-['Inter'] font-normal text-[#6b7280] text-[12px] leading-[16px]">
                AI Agents in production
              </span>
            </div>
          </div>
        </section>

        {/* Our Principles Section */}
        <section className="w-full max-w-[342px] md:max-w-[1104px] px-6 md:px-0">
          <div className="flex flex-col gap-8">
            <h2 className="font-['Inter'] font-semibold text-black text-[24px] tracking-[-0.6px] leading-[32px]">
              Our principles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[rgba(0,0,0,0.05)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-8"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#f7f5ef] rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-black" strokeWidth={2} />
                      </div>
                      <h3 className="font-['Inter'] font-semibold text-black text-[16px] leading-[24px]">
                        {principle.title}
                      </h3>
                    </div>
                    <p className="font-['Inter'] font-normal text-[#6b7280] text-[14px] leading-[20px] pl-11">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-20 px-6">
          <div className="max-w-full md:max-w-[672px] mx-auto flex flex-col gap-8 items-center">
            <h2 className="font-['Inter'] font-semibold text-black text-[24px] md:text-[30px] text-center tracking-[-0.6px] md:tracking-[-0.75px] leading-[32px] md:leading-[36px]">
              Tell us what you want to automate.
            </h2>

            <div className="flex gap-4 items-center justify-center w-full">
              <a href="https://calendly.com/kwstechnology-info/30min" target="_blank" rel="noopener noreferrer" className="bg-black flex h-12 items-center justify-center px-6 py-[13.5px] rounded-full shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] hover:bg-[#2a2a2a] transition-colors">
                <span className="font-['Inter'] font-medium text-[14px] text-center text-white leading-[20px]">
                  Book Demo
                </span>
              </a>
              <a href="/contact" className="bg-[#d0f553] flex h-12 items-center justify-center px-6 py-[13.5px] rounded-full hover:bg-[#c5e84d] transition-colors">
                <span className="font-['Inter'] font-medium text-black text-[14px] text-center leading-[20px]">
                  Contact
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}