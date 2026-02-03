import { ArrowRight } from 'lucide-react';
import svgPaths from '../imports/svg-9ulic38usn';

export function MoreFromKWS() {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p1a9690c0} stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
      title: 'Web Development',
      description: 'High-performance custom web apps.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 20 20">
          <path d={svgPaths.p21cd2d00} stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p34e4f440} stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pbded780} stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
      title: 'Pinata Themes',
      description: 'Premium templates for modern brands.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p2dd2f900} stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
      title: 'Integrations & Maintenance',
      description: 'Keeping your systems connected and running.',
    },
  ];

  return (
    <section className="py-12 px-6 md:px-[110px] border-t border-[#e5e7eb]">
      <div className="max-w-[1280px] mx-auto md:px-6">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <h2 className="font-semibold text-[18px] md:text-[24px] text-[#121212] leading-[28px] md:leading-[32px]">
            More from KWS
          </h2>
          <button className="flex items-center gap-1 font-medium text-[12px] md:text-[14px] text-[#6b7280] leading-[16px] md:leading-[20px] hover:text-[#121212] transition-colors">
            View all services
            <ArrowRight className="w-3 md:w-4 h-3 md:h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-[#f3f4f6] rounded-[12px] relative hover:shadow-md transition-all"
            >
              <div className="p-[25px]">
                <div className="absolute left-[25px] top-[25px] w-6 h-6">
                  {service.icon}
                </div>
                
                <h3 className="font-medium text-[16px] text-[#121212] leading-[24px] mt-10 mb-2">
                  {service.title}
                </h3>
                
                <p className="font-normal text-[14px] text-[#6b7280] leading-[20px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}