import { useState, useMemo } from 'react';
import { Search, ChevronDown, Rocket, BookOpen, Globe, Zap, Code, TrendingUp } from 'lucide-react';

// Job data type
interface Job {
  id: string;
  title: string;
  location: 'San Francisco' | 'Remote';
  type: 'Full-time';
  description: string;
  tags: string[];
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
}

// Job data
const jobsData: Job[] = [
  {
    id: 'marketing-specialist',
    title: 'Marketing Specialist',
    location: 'Remote',
    type: 'Full-time',
    description: 'Own KWS growth across content, outreach, and partnerships for AI agent and automation services.',
    tags: ['Content', 'Growth', 'Outbound', 'Brand'],
    responsibilities: [
      'Plan weekly content and campaign calendar',
      'Run outreach and partnership initiatives',
      'Improve website messaging and lead flow',
      'Track performance and iterate',
    ],
    requirements: [
      'Strong writing and communication',
      'Experience with digital marketing or outbound',
      'Comfort working with fast-moving teams',
    ],
    niceToHave: [
      'Agency experience',
      'B2B SaaS or AI tooling exposure',
    ],
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    location: 'San Francisco',
    type: 'Full-time',
    description: 'Design clean, premium interfaces and prototypes for KWS websites, dashboards, and agent experiences.',
    tags: ['Figma', 'UI Systems', 'Prototyping', 'Web'],
    responsibilities: [
      'Create user-centered design solutions',
      'Prototype and iterate on design concepts',
      'Collaborate with engineering and product teams',
    ],
    requirements: [
      'Portfolio demonstrating strong design skills',
      'Proficiency in design tools (Figma, Adobe XD, etc)',
      'Understanding of UX principles and best practices',
    ],
  },
  {
    id: 'project-manager',
    title: 'Project Manager',
    location: 'Remote',
    type: 'Full-time',
    description: 'Coordinate tasks, timelines, and client communication to deliver projects smoothly.',
    tags: ['Delivery', 'Client', 'Planning', 'Ops'],
    responsibilities: [
      'Plan and track project timelines and deliverables',
      'Facilitate communication between teams',
      'Identify and manage project risks',
    ],
    requirements: [
      'Project management experience and certifications',
      'Strong leadership and communication skills',
      'Experience with project management tools',
    ],
  },
  {
    id: 'operations-manager',
    title: 'Operations Manager',
    location: 'San Francisco',
    type: 'Full-time',
    description: 'Keep the company running smoothly, documenting, hiring support, and internal coordination.',
    tags: ['Operations', 'Documentation', 'Hiring', 'Coordination'],
    responsibilities: [
      'Streamline operational processes',
      'Support team members and facilitate collaboration',
      'Track metrics and optimize workflows',
    ],
    requirements: [
      'Operations management experience',
      'Strong organizational and problem-solving skills',
      'Experience with process improvement',
    ],
  },
  {
    id: 'full-stack-developer',
    title: 'Full Stack Web Developer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build scalable web applications using modern technologies.',
    tags: ['React', 'Node.js', 'TypeScript', 'Web'],
    responsibilities: [
      'Develop and maintain backend and frontend services',
      'Write clean, performant, and maintainable code',
      'Collaborate with product and design teams',
    ],
    requirements: [
      'Strong proficiency in JavaScript/TypeScript',
      'Experience with React, Node.js, and databases',
      'Understanding of web security and scalability',
    ],
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    location: 'San Francisco',
    type: 'Full-time',
    description: 'Work on cutting-edge AI models and agent technology.',
    tags: ['Python', 'ML', 'AI', 'Deep Learning'],
    responsibilities: [
      'Develop and train AI models',
      'Optimize model performance and efficiency',
      'Collaborate on AI research and implementation',
    ],
    requirements: [
      'Strong background in machine learning and AI',
      'Proficiency in Python and deep learning frameworks',
      'Experience with model training and optimization',
    ],
  },
];

// Hiring process steps
const hiringSteps = [
  { title: 'Apply', description: 'Submit your application and portfolio.' },
  { title: 'Quick call', description: '30-min chat to align on goals.' },
  { title: 'Task / Portfolio', description: 'Show us how you work.' },
  { title: 'Final & Offer', description: 'Meet the team and get an offer.' },
];

// Job Card Component
function JobCard({
  job,
  isExpanded,
  onToggle
}: {
  job: Job;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const applyMailto = `mailto:support@kws.technology?subject=Application for ${encodeURIComponent(job.title)}`;

  return (
    <div className="bg-white border border-[#e4e4e7] rounded-2xl overflow-hidden shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
      {/* Collapsed Header */}
      <div className="p-6">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-3">
            <h3 className="font-['Inter'] font-semibold text-[#18181b] text-[18px] leading-[24px]">
              {job.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#1e3a5f] px-3 py-1.5 rounded text-[11px] font-['Inter'] font-semibold text-white uppercase tracking-[0.5px]">
                Remote
              </span>
              <span className="bg-[#1e3a5f] px-3 py-1.5 rounded text-[11px] font-['Inter'] font-semibold text-white uppercase tracking-[0.5px]">
                {job.type}
              </span>
            </div>
            <p className="font-['Inter'] font-normal text-[#71717a] text-[14px] leading-[22px] mt-1">
              {job.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {job.tags.map((tag, i) => (
                <span key={i} className="bg-white border border-[#e4e4e7] px-3 py-1.5 rounded-md text-[12px] font-['Inter'] font-medium text-[#52525b]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onToggle}
              className="border border-[#e4e4e7] px-5 h-[50px] rounded-full hover:bg-[#fafafa] transition-colors flex items-center justify-center"
            >
              <span className="font-['Inter'] font-medium text-[#52525b] text-[14px] leading-[20px]">
                View
              </span>
            </button>
            <a
              href={applyMailto}
              className="bg-[#bef264] px-6 h-[50px] rounded-full hover:bg-[#a3e635] transition-colors inline-flex items-center justify-center"
            >
              <span className="font-['Inter'] font-semibold text-black text-[14px] leading-[20px]">
                Apply
              </span>
            </a>
            <button
              onClick={onToggle}
              className={`p-2 hover:bg-[#fafafa] rounded-full transition-all duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              aria-expanded={isExpanded}
              aria-controls={`job-details-${job.id}`}
            >
              <ChevronDown className="w-5 h-5 text-[#a1a1aa]" />
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      <div
        id={`job-details-${job.id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 pt-0">
          <div className="border-t border-[#e4e4e7] pt-6">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Responsibilities */}
              <div>
                <h4 className="font-['Inter'] font-semibold text-[#18181b] text-[14px] leading-[20px] mb-3">
                  Responsibilities
                </h4>
                <ul className="space-y-2">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-[#a1a1aa] text-[14px] leading-[20px]">•</span>
                      <span className="font-['Inter'] font-normal text-[#52525b] text-[14px] leading-[20px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements + Nice to Have */}
              <div>
                <h4 className="font-['Inter'] font-semibold text-[#18181b] text-[14px] leading-[20px] mb-3">
                  Requirements
                </h4>
                <ul className="space-y-2 mb-4">
                  {job.requirements.map((item, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-[#a1a1aa] text-[14px] leading-[20px]">•</span>
                      <span className="font-['Inter'] font-normal text-[#52525b] text-[14px] leading-[20px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {job.niceToHave && (
                  <>
                    <h4 className="font-['Inter'] font-semibold text-[#18181b] text-[14px] leading-[20px] mb-3">
                      Nice to have
                    </h4>
                    <ul className="space-y-2">
                      {job.niceToHave.map((item, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <span className="text-[#a1a1aa] text-[14px] leading-[20px]">•</span>
                          <span className="font-['Inter'] font-normal text-[#52525b] text-[14px] leading-[20px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>

            {/* How to Apply */}
            <div className="mt-6 pt-4 border-t border-[#e4e4e7]">
              <h4 className="font-['Inter'] font-semibold text-[#18181b] text-[14px] leading-[20px] mb-2">
                How to apply
              </h4>
              <p className="font-['Inter'] font-normal text-[#71717a] text-[14px] leading-[20px]">
                Click the Apply button above or email us at{' '}
                <a href="mailto:support@kws.technology" className="text-[#22c55e] hover:underline font-medium">
                  support@kws.technology
                </a>
                {' '}or{' '}
                <a href="mailto:kwstechnology.info@gmail.com" className="text-[#22c55e] hover:underline font-medium">
                  kwstechnology.info@gmail.com
                </a>
                {' '}with your portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Career() {
  const [expandedJobId, setExpandedJobId] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState<'All' | 'San Francisco' | 'Remote'>('All');
  const [typeFilter, setTypeFilter] = useState<'All' | 'Full-time'>('All');

  // Filtered jobs
  const filteredJobs = useMemo(() => {
    return jobsData.filter(job => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = !searchQuery ||
        job.title.toLowerCase().includes(searchLower) ||
        job.description.toLowerCase().includes(searchLower) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchLower));

      // Location filter
      const matchesLocation = locationFilter === 'All' || job.location === locationFilter;

      // Type filter
      const matchesType = typeFilter === 'All' || job.type === typeFilter;

      return matchesSearch && matchesLocation && matchesType;
    });
  }, [searchQuery, locationFilter, typeFilter]);

  const handleToggleJob = (jobId: string) => {
    setExpandedJobId(expandedJobId === jobId ? '' : jobId);
  };

  return (
    <div className="relative bg-[#fafaf9] min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 md:px-20 pt-[120px] pb-16">
        <div className="max-w-[800px] mx-auto flex flex-col items-center text-center">
          <h1 className="font-['Inter'] font-bold text-[#18181b] text-[40px] md:text-[52px] tracking-[-1.5px] md:tracking-[-2px] leading-[44px] md:leading-[56px] mb-5">
            Careers at KWS
          </h1>

          <p className="font-['Inter'] font-normal text-[#71717a] text-[15px] md:text-[17px] leading-[24px] md:leading-[26px] max-w-[520px] mb-10">
            Build AI agents, platforms, and automation products with a small, fast team.
          </p>

          <div className="flex gap-4 items-center flex-wrap justify-center mb-10">
            <a href="#open-positions" className="bg-[#bef264] flex items-center justify-center w-[180px] py-3 rounded-full hover:bg-[#a3e635] transition-colors shadow-sm">
              <span className="font-['Inter'] font-semibold text-black text-[14px] leading-[20px]">
                View Open Roles
              </span>
            </a>
            <a href="mailto:support@kws.technology" className="bg-white border border-[#e4e4e7] flex items-center justify-center w-[140px] py-3 rounded-full hover:bg-[#fafafa] transition-colors shadow-sm">
              <span className="font-['Inter'] font-medium text-[#18181b] text-[14px] leading-[20px]">
                Apply Now
              </span>
            </a>
          </div>

          <div className="flex flex-wrap gap-1 items-center justify-center">
            {['AI AGENTS', 'AUTOMATION', 'WEB', 'UI/UX', 'AR/VR/XR'].map((tag, i) => (
              <span key={i} className="font-['Inter'] font-medium text-[#a1a1aa] text-[11px] tracking-[0.8px]">
                {tag}
                {i < 4 && <span className="mx-2">•</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why KWS Section */}
      <section className="bg-white border-t border-b border-[#f4f4f5] px-6 md:px-20 py-12 md:py-16">
        <div className="max-w-[1024px] mx-auto">
          <h2 className="font-['Inter'] font-semibold text-[#18181b] text-[20px] tracking-[-0.5px] leading-[28px] mb-8">
            Why KWS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Rocket, label: 'High-impact projects' },
              { icon: BookOpen, label: 'Ownership & learning' },
              { icon: Globe, label: 'Remote-friendly' },
              { icon: Zap, label: 'Fast shipping culture' },
              { icon: Code, label: 'Modern stack' },
              { icon: TrendingUp, label: 'Growth opportunities' },
            ].map((item, i) => (
              <div key={i} className="bg-[#fafafa] border border-[#f4f4f5] rounded-2xl p-5 flex gap-4 items-center">
                <div className="bg-white border border-[#f4f4f5] shadow-sm rounded-xl p-3">
                  <item.icon className="w-5 h-5 text-[#18181b]" strokeWidth={1.5} />
                </div>
                <span className="font-['Inter'] font-medium text-[#52525b] text-[14px] leading-[20px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="px-6 md:px-20 py-12 md:py-16">
        <div className="max-w-[1024px] mx-auto">
          <h2 className="font-['Inter'] font-semibold text-[#18181b] text-[24px] md:text-[30px] tracking-[-0.6px] leading-[32px] mb-6">
            Open positions
          </h2>

          {/* Search and Filters */}
          <div className="bg-white border border-[#e4e4e7] shadow-sm rounded-xl p-2 flex flex-col md:flex-row gap-3 mb-6">
            <div className="flex-1 relative flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-[#a1a1aa]" />
              <input
                type="text"
                placeholder="Search roles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[44px] pl-11 pr-4 font-['Inter'] text-[14px] text-[#18181b] placeholder:text-[#a1a1aa] outline-none bg-[#fafafa] rounded-lg border-0"
              />
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value as typeof locationFilter)}
                  className="bg-[#fafafa] rounded-lg px-3 py-2 font-['Inter'] font-medium text-[#52525b] text-[14px] outline-none cursor-pointer appearance-none pr-8 border-0"
                >
                  <option value="All">Location: All</option>
                  <option value="San Francisco">San Francisco</option>
                  <option value="Remote">Remote</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a1a1aa] pointer-events-none" />
              </div>
              <div className="relative">
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value as typeof typeFilter)}
                  className="bg-[#fafafa] rounded-lg px-3 py-2 font-['Inter'] font-medium text-[#52525b] text-[14px] outline-none cursor-pointer appearance-none pr-8 border-0"
                >
                  <option value="All">Type: All</option>
                  <option value="Full-time">Full-time</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a1a1aa] pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isExpanded={expandedJobId === job.id}
                onToggle={() => handleToggleJob(job.id)}
              />
            ))}
            {filteredJobs.length === 0 && (
              <div className="bg-white border border-[#e4e4e7] rounded-2xl p-8 text-center">
                <p className="font-['Inter'] font-normal text-[#71717a] text-[14px]">
                  No positions match your search criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="px-6 md:px-20 py-12 md:py-16 bg-white border-t border-[#f4f4f5]">
        <div className="max-w-[1024px] mx-auto">
          <h2 className="font-['Inter'] font-semibold text-[#18181b] text-[24px] md:text-[30px] tracking-[-0.6px] leading-[32px] mb-8">
            Our hiring process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringSteps.map((step, i) => (
              <div key={i} className="bg-[#fafafa] border border-[#f4f4f5] rounded-2xl p-5">
                <h3 className="font-['Inter'] font-semibold text-[#18181b] text-[16px] leading-[24px] mb-2">
                  {step.title}
                </h3>
                <p className="font-['Inter'] font-normal text-[#71717a] text-[14px] leading-[20px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Internships Card */}
          <div className="mt-8 bg-[#18181b] rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="font-['Inter'] font-semibold text-white text-[18px] leading-[24px] mb-1">
                Internships and freelance
              </h3>
              <p className="font-['Inter'] font-normal text-[#a1a1aa] text-[14px] leading-[20px]">
                Open to interns and freelance contributors.
              </p>
            </div>
            <a
              href="mailto:support@kws.technology?subject=Internship/Freelance Application"
              className="bg-[#bef264] px-5 py-2 rounded-full hover:bg-[#a3e635] transition-colors shrink-0"
            >
              <span className="font-['Inter'] font-semibold text-black text-[14px] leading-[20px]">
                Apply
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Don't See Your Role Section */}
      <section className="px-6 md:px-20 py-16 md:py-20">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="font-['Inter'] font-semibold text-[#18181b] text-[24px] md:text-[30px] tracking-[-0.6px] leading-[32px] mb-4">
            Don't see your role?
          </h2>
          <p className="font-['Inter'] font-normal text-[#71717a] text-[16px] leading-[24px] mb-8">
            Send your portfolio and we'll reach out.
          </p>
          <div className="flex gap-4 items-center justify-center flex-wrap">
            <a
              href="mailto:support@kws.technology?subject=General Application"
              className="bg-[#18181b] px-6 py-3 rounded-full hover:bg-[#27272a] transition-colors"
            >
              <span className="font-['Inter'] font-medium text-white text-[14px] leading-[20px]">
                General Application
              </span>
            </a>
            <a
              href="/contact"
              className="bg-[#bef264] px-6 py-3 rounded-full hover:bg-[#a3e635] transition-colors"
            >
              <span className="font-['Inter'] font-medium text-black text-[14px] leading-[20px]">
                Contact
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
