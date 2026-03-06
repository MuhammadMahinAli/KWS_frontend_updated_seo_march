import svgPaths from '../imports/svg-9ulic38usn';

export function IntegrationData() {
  const steps = [
    {
      number: '1',
      title: 'Discover',
      description: 'We map your workflow and identify high-\nvalue automation targets.',
      isHighlighted: false,
    },
    {
      number: '2',
      title: 'Design',
      description: 'Architecting the agent logic, prompts, and\ntool integrations.',
      isHighlighted: false,
    },
    {
      number: '3',
      title: 'Build',
      description: 'Rapid development of custom agents and\nn8n pipelines.',
      isHighlighted: false,
    },
    {
      number: '4',
      title: 'Deploy',
      description: 'Launch to production with monitoring and\nmaintenance included.',
      isHighlighted: true,
    },
  ];

  return (
    <section className="pt-[120px] pb-0 px-0">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-['Inter'] font-semibold text-[#121212] text-[30px] text-center tracking-[-0.75px] leading-[36px]">
            Custom AI Agent Development: Discovery to Deployment
          </h2>
        </div>

        {/* Steps Container with Horizontal Line */}
        <div className="relative">
          {/* Horizontal Divider */}
          <div className="absolute h-px bg-[#e5e7eb] left-0 right-0 top-[48px]" />
          
          {/* Steps Grid */}
          <div className="flex gap-4 items-start justify-center">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 min-w-0 relative min-h-[160px]">
                {/* Numbered Circle */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2">
                  <div 
                    className={`${
                      step.isHighlighted 
                        ? 'bg-[#d0ef58] border-[rgba(163,230,53,0.5)]' 
                        : 'bg-white border-[#e5e7eb]'
                    } w-12 h-12 rounded-full border flex items-center justify-center shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-px`}
                  >
                    <span className="font-['Inter'] font-semibold text-[#121212] text-[16px] leading-[24px]">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="absolute left-0 right-0 top-[72px]">
                  <h3 className="font-['Inter'] font-medium text-[#121212] text-[18px] leading-[28px] text-center">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="absolute left-0 right-0 top-[106.88px] pb-[0.625px]">
                  <p className="font-['Inter'] font-normal text-[#6b7280] text-[14px] leading-[22.75px] text-center whitespace-pre-line">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spacer to account for absolute positioned content */}
        <div className="h-[20px]" />
      </div>
    </section>
  );
}