import { Search, ArrowRight } from 'lucide-react';
import svgPaths from '../imports/svg-9am6eih62h';
import imgFeatured from 'figma:asset/7d26933f3cef89122b3593b33f74c513983f4d4e.png';
import imgPhoto1 from 'figma:asset/88f78c5c042df122e755c2d181311e67bf24643a.png';
import imgPhoto2 from 'figma:asset/63a9f001dd0620ebde2ad9136afcc9274b81b02d.png';
import imgPhoto3 from 'figma:asset/bd05962fae2487fadd60ffb92e38c5d5955cce40.png';
import imgPhoto4 from 'figma:asset/02c5a70fdd76d3881ed37875e030fb076d82aa51.png';
import imgPhoto5 from 'figma:asset/75774e85e426fd0c71362f09a8df4deb715d3995.png';
import imgPhoto6 from 'figma:asset/0db933c6800287e42371817621ba773a36a54e9c.png';

export function Blog() {
  const categories = [
    { label: 'All', active: true },
    { label: 'AI Agents', active: false },
    { label: 'Voice/WhatsApp', active: false },
    { label: 'Automation', active: false },
    { label: 'Clinics', active: false },
    { label: 'Case Studies', active: false },
  ];

  const articles = [
    {
      image: imgPhoto1,
      category: 'Automation',
      categoryColor: '#8ab816',
      readTime: '4 min read',
      title: 'Automating Patient Intake Forms with 99% Accuracy',
      description: 'Reduce manual data entry errors by implementing intelligent document processing workflows.',
      link: '#',
    },
    {
      image: imgPhoto2,
      category: 'Product',
      categoryColor: '#8ab816',
      readTime: '2 min read',
      title: 'Introducing KWS Voice: Natural Conversations at Scale',
      description: 'Our new low-latency voice infrastructure handles interruptions and accents seamlessly.',
      link: '#',
    },
    {
      image: imgPhoto3,
      category: 'AI Agents',
      categoryColor: '#8ab816',
      readTime: '7 min read',
      title: 'Introducing KWS Multi-Agent Orchestration at Scale',
      description: 'How we coordinate dozens of specialized AI agents in production without chaos.',
      link: '#',
    },
    {
      image: imgPhoto4,
      category: 'Automation',
      categoryColor: '#8ab816',
      readTime: '6 min read',
      title: 'Enterprise Data Purge in the Age of LLMs',
      description: 'Why you should clean your CRM before building AI systems.',
      link: '#',
    },
    {
      image: imgPhoto5,
      category: 'AI Agents',
      categoryColor: '#8ab816',
      readTime: '8 min read',
      title: 'The 48h Workflow That Saved 30 Hiring Hours a Week',
      description: 'See exactly how we automate applicant screening using custom prompts.',
      link: '#',
    },
    {
      image: imgPhoto6,
      category: 'Case Studies',
      categoryColor: '#8ab816',
      readTime: '9 min read',
      title: 'Building a Culture of Asynchronous Work',
      description: 'Why we ship AI Studio builds faster with async-first comm.',
      link: '#',
    },
  ];

  const popularPosts = [
    {
      title: 'Choosing the right LLM',
      description: 'Comparing OpenAI, Claude, Llama, and more for production use.',
    },
    {
      title: 'Pricing our AI Pricing Scan',
      description: 'The economics behind our lead qualification bot.',
    },
    {
      title: 'The Future of Clinic Ops',
      description: 'Agents will replace 60% of front desk tasks by 2026.',
    },
    {
      title: 'Migrating from Zapier to n8n',
      description: 'Why we switched and what you should consider.',
    },
  ];

  return (
    <div className="relative bg-[#f7f5ef] min-h-screen">
      {/* Header Section */}
      <div className="w-full max-w-[896px] mx-auto px-6 py-[60px]">
        <div className="flex flex-col gap-4 items-center w-full">
          {/* Heading */}
          <div className="flex flex-col items-center w-full">
            <h1 className="font-['Inter'] font-semibold text-[#1c1917] text-center tracking-[-0.9px] leading-[40px] text-[36px]">
              Blog
            </h1>
          </div>

          {/* Description */}
          <div className="flex flex-col items-center max-w-[576px] w-full">
            <p className="font-['Inter'] font-normal text-[#78716c] text-[18px] text-center leading-[29.25px]">
              AI agents, automation playbooks, clinic ops, and product updates designed for modern teams.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col items-start max-w-[512px] pt-6 w-full relative">
            <div className="bg-white h-[50px] w-full rounded-full border border-[#e7e5e4] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] relative">
              <div className="absolute left-4 top-0 bottom-0 flex items-center">
                <Search className="w-5 h-5 text-[#a8a29e]" strokeWidth={1.66667} />
              </div>
            </div>
          </div>

          {/* Filter Categories */}
          <div className="h-[100px] overflow-auto relative w-full">
            {categories.map((cat, index) => (
              <button 
                key={index}
                className={`absolute flex items-center justify-center px-[17px] py-[7px] rounded-full ${
                  cat.active 
                    ? 'bg-[#1c1917] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]' 
                    : 'bg-white border border-[#e7e5e4]'
                }`}
                style={{
                  left: index === 0 
                    ? 'calc(50% - 117.77px)' 
                    : index === 1 
                    ? 'calc(50% - 41.7px)' 
                    : index === 2 
                    ? 'calc(50% + 76.34px)'
                    : 'auto',
                  top: index <= 2 ? '0' : '38px',
                  transform: 'translateX(-50%)',
                  ...(index === 3 && { left: 'calc(50% - 98.42px)' }),
                  ...(index === 4 && { left: 'calc(50% - 4.42px)' }),
                  ...(index === 5 && { left: 'calc(50% + 94.56px)' }),
                }}
              >
                <span className={`font-['Inter'] font-medium text-[12px] text-center leading-[16px] ${
                  cat.active ? 'text-white' : 'text-[#57534e]'
                }`}>
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full px-6 pb-12">
        <div className="max-w-[896px] mx-auto">
          {/* Featured Article */}
          <div className="bg-white rounded-[24px] border border-[rgba(245,245,244,0.5)] shadow-[0px_8px_30px_0px_rgba(0,0,0,0.04)] overflow-hidden mb-12 w-full">
            <div className="relative w-full">
              {/* Image */}
              <div className="h-[256px] w-full bg-[#e7e5e4] overflow-hidden relative z-[2]">
                <img 
                  src={imgFeatured} 
                  alt="Featured article" 
                  className="w-full h-full object-cover opacity-95"
                  style={{ objectPosition: 'left' }}
                />
              </div>

              {/* Content */}
              <div className="relative z-[1] w-full">
                <div className="flex flex-col items-start justify-center p-8">
                  {/* Meta */}
                  <div className="flex gap-3 items-center pb-4 w-full">
                    <div className="bg-[#d4f845] px-2 py-1 rounded">
                      <span className="font-['Inter'] font-medium text-[#1c1917] text-[12px] tracking-[0.6px] uppercase leading-[16px]">
                        New Playbook
                      </span>
                    </div>
                    <span className="font-['Inter'] font-medium text-[#78716c] text-[12px] tracking-[0.6px] uppercase leading-[16px]">
                      Oct 12, 2023
                    </span>
                    <span className="font-['Inter'] font-medium text-[#a8a29e] text-[12px] tracking-[0.6px] uppercase leading-[16px]">
                      •
                    </span>
                    <span className="font-['Inter'] font-medium text-[#78716c] text-[12px] tracking-[0.6px] uppercase leading-[16px]">
                      6 min read
                    </span>
                  </div>

                  {/* Title */}
                  <div className="pb-4 w-full">
                    <h2 className="font-['Inter'] font-semibold text-[#1c1917] text-[24px] tracking-[-0.6px] leading-[32px]">
                      The Architect's Guide to Multi-Agent Systems in Clinical Operations
                    </h2>
                  </div>

                  {/* Description */}
                  <div className="h-[123px] relative w-full overflow-hidden">
                    <p className="font-['Inter'] font-normal text-[#78716c] text-[14px] leading-[22.75px]">
                      How we orchestrate autonomous agents to handle scheduling, patient triage, and follow-ups without hallucination. A deep dive into our stack.
                    </p>
                  </div>

                  {/* CTA */}
                  <button className="flex items-center w-full">
                    <span className="font-['Inter'] font-medium text-[#1c1917] text-[14px] leading-[20px]">
                      Read article
                    </span>
                    <div className="ml-2 w-4 h-4 flex items-center justify-center">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p3f0cc030} stroke="#1C1917" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Articles Section */}
          <div className="flex flex-col gap-6 w-full mb-12">
            {/* Header */}
            <div className="flex items-center justify-between w-full">
              <h3 className="font-['Inter'] font-semibold text-[#1c1917] text-[20px] tracking-[-0.5px] leading-[28px]">
                Latest Articles
              </h3>
              <button className="font-['Inter'] font-normal text-[#78716c] text-[14px] leading-[20px] hover:text-[#1c1917] transition-colors">
                View archive
              </button>
            </div>

            {/* Articles Grid - Responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {articles.map((article, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-[24px] border border-[#f5f5f4] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] overflow-hidden w-full"
                >
                  {/* Image */}
                  <div className="h-[256.5px] w-full bg-[#f5f5f4] overflow-hidden rounded-t-[16px]">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'left' }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 relative">
                    {/* Meta */}
                    <div className="flex gap-2 items-center pb-3 w-full">
                      <span 
                        className="font-['Inter'] font-medium text-[12px] tracking-[0.3px] uppercase leading-[16px]" 
                        style={{ color: article.categoryColor }}
                      >
                        {article.category}
                      </span>
                      <div className="bg-[#d6d3d1] rounded-full w-1 h-1" />
                      <span className="font-['Inter'] font-normal text-[#a8a29e] text-[12px] leading-[16px]">
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="pb-4">
                      <h4 className="font-['Inter'] font-semibold text-[#1c1917] text-[18px] leading-[24.75px]">
                        {article.title}
                      </h4>
                    </div>

                    {/* Description */}
                    <div className="pb-4 overflow-hidden h-[45.5px]">
                      <p className="font-['Inter'] font-normal text-[#78716c] text-[14px] leading-[22.75px]">
                        {article.description}
                      </p>
                    </div>

                    {/* Link */}
                    <button className="flex items-center pt-2">
                      <span className="font-['Inter'] font-medium text-[#1c1917] text-[14px] leading-[20px]">
                        Read now
                      </span>
                      <div className="ml-1 w-[14px] h-[14px] flex items-center justify-center">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 14 14">
                          <path d={svgPaths.pf520c00} stroke="#A8A29E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular this month Section - Mobile Only */}
          <div className="flex flex-col gap-6 w-full mb-12 md:hidden">
            <h3 className="font-['Inter'] font-semibold text-[#1c1917] text-[20px] tracking-[-0.5px] leading-[28px]">
              Popular this month
            </h3>
            
            <div className="flex flex-col gap-6">
              {popularPosts.map((post, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <h4 className="font-['Inter'] font-semibold text-[#1c1917] text-[14px] leading-[19.25px]">
                    {post.title}
                  </h4>
                  <p className="font-['Inter'] font-normal text-[#78716c] text-[12px] leading-[18px]">
                    {post.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <section className="py-12 w-full">
            <div className="max-w-[672px] mx-auto flex flex-col gap-8 items-center">
              <div className="flex flex-col gap-4 items-center">
                <h2 className="font-['Inter'] font-semibold text-[#1c1917] text-[30px] text-center tracking-[-0.75px] leading-[36px]">
                  Tell us your industry and workflow.
                </h2>
                <p className="font-['Inter'] font-normal text-[#78716c] text-[16px] text-center leading-[24px]">
                  We'll suggest the best automation approach for your team.
                </p>
              </div>

              <div className="flex gap-3 items-center justify-center">
                <button className="bg-[#1c1917] px-8 py-[10px] rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                  <span className="font-['Inter'] font-medium text-white text-[14px] leading-[20px]">
                    Subscribe
                  </span>
                </button>
              </div>

              {/* Pagination */}
              <div className="flex gap-2 items-center pt-8">
                <button className="bg-[#d4f845] w-8 h-8 rounded flex items-center justify-center font-['Inter'] font-medium text-[#1c1917] text-[14px]">
                  1
                </button>
                <button className="bg-white border border-[#e7e5e4] w-8 h-8 rounded flex items-center justify-center font-['Inter'] font-medium text-[#57534e] text-[14px] hover:bg-[#f5f5f4] transition-colors">
                  2
                </button>
                <button className="bg-white border border-[#e7e5e4] w-8 h-8 rounded flex items-center justify-center font-['Inter'] font-medium text-[#57534e] text-[14px] hover:bg-[#f5f5f4] transition-colors">
                  3
                </button>
                <button className="bg-white border border-[#e7e5e4] w-8 h-8 rounded flex items-center justify-center font-['Inter'] font-medium text-[#57534e] text-[14px] hover:bg-[#f5f5f4] transition-colors">
                  →
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
