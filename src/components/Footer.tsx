import svgPaths from '../imports/svg-9ulic38usn';

export function Footer() {
  return (
    <footer className="border-t border-[#e5e7eb] py-12 md:py-16 px-6 md:px-[110px]">
      <div className="max-w-[1280px] mx-auto md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-8 mb-8 md:mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-[18px] text-[#121212] tracking-[-0.45px] leading-[28px] mb-4">KWS</h3>
            <p className="font-normal text-[12px] text-[#6b7280] leading-[16px]">© 2024 KWS Technology.</p>
          </div>

          <div>
            <h3 className="font-semibold text-[14px] text-[#121212] leading-[20px] mb-4">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="font-normal text-[14px] text-[#6b7280] leading-[20px] hover:text-[#121212] transition-colors">Clinic Agent</a></li>
              <li><a href="#" className="font-normal text-[14px] text-[#6b7280] leading-[20px] hover:text-[#121212] transition-colors">Pinata Themes</a></li>
              <li><a href="#" className="font-normal text-[14px] text-[#6b7280] leading-[20px] hover:text-[#121212] transition-colors">Research Buddy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[14px] text-[#121212] leading-[20px] mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="font-normal text-[14px] text-[#6b7280] leading-[20px] hover:text-[#121212] transition-colors">Automation</a></li>
              <li><a href="#" className="font-normal text-[14px] text-[#6b7280] leading-[20px] hover:text-[#121212] transition-colors">AI Agents</a></li>
              <li><a href="#" className="font-normal text-[14px] text-[#6b7280] leading-[20px] hover:text-[#121212] transition-colors">Consulting</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[14px] text-[#121212] leading-[20px] mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="font-normal text-[14px] text-[#6b7280] leading-[20px] hover:text-[#121212] transition-colors">About</a></li>
              <li><a href="#" className="font-normal text-[14px] text-[#6b7280] leading-[20px] hover:text-[#121212] transition-colors">Blog</a></li>
              <li><a href="#" className="font-normal text-[14px] text-[#6b7280] leading-[20px] hover:text-[#121212] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[14px] text-[#121212] leading-[20px] mb-4">Connect</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-[#f9fafb] rounded-lg flex items-center justify-center hover:bg-[#d0ef58] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p2ffa5d80} stroke="#121212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#f9fafb] rounded-lg flex items-center justify-center hover:bg-[#d0ef58] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.pce200} stroke="#121212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p27482700} stroke="#121212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#f9fafb] rounded-lg flex items-center justify-center hover:bg-[#d0ef58] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p276b2100} stroke="#121212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p29efb800} stroke="#121212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}