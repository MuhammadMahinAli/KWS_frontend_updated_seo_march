import svgPaths from '../imports/svg-9ulic38usn';

export function Footer() {
  return (
    <footer className="border-t border-[#e5e7eb] py-12 md:py-16 px-6 md:px-[110px]">
      <div className="max-w-[1280px] mx-auto md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-8 mb-8 md:mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-[18px] text-[#121212] tracking-[-0.45px] leading-[28px] mb-4">KWS Technology</h3>
            <p className="font-normal text-[12px] text-[#6b7280] leading-[16px]">© 2026 KWS Technology.</p>
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
            <div className="flex gap-3 flex-wrap">
              {/* X (formerly Twitter) */}
              <a
                href="https://x.com/KwsTechnology"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#f9fafb] rounded-lg flex items-center justify-center hover:bg-[#d0ef58] transition-colors"
                aria-label="KWS Technology on X"
              >
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
                  <path d="M15.28 2H17.94L12.26 9.22L18.95 18H13.68L9.55 12.48L4.83 18H2.16L8.22 10.33L1.82 2H7.22L10.95 7.07L15.28 2ZM14.38 16.42H15.85L6.47 3.54H4.89L14.38 16.42Z" fill="#121212"/>
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="#"
                className="w-9 h-9 bg-[#f9fafb] rounded-lg flex items-center justify-center hover:bg-[#d0ef58] transition-colors"
                aria-label="KWS Technology on GitHub"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.pce200} stroke="#121212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p27482700} stroke="#121212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/kwstechnology/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#f9fafb] rounded-lg flex items-center justify-center hover:bg-[#d0ef58] transition-colors"
                aria-label="KWS Technology on LinkedIn"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p276b2100} stroke="#121212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p29efb800} stroke="#121212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </a>
              {/* Reddit */}
              <a
                href="https://www.reddit.com/r/KWSTechnology/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#f9fafb] rounded-lg flex items-center justify-center hover:bg-[#d0ef58] transition-colors"
                aria-label="KWS Technology on Reddit"
              >
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="#121212">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.478 0 0 4.478 0 10C0 15.522 4.478 20 10 20C15.522 20 20 15.522 20 10C20 4.478 15.522 0 10 0ZM16.1 10.007C16.1 9.087 15.353 8.34 14.433 8.34C13.98 8.34 13.571 8.523 13.273 8.82C12.228 8.098 10.797 7.634 9.217 7.573L9.967 3.997C9.991 3.907 10.083 3.847 10.172 3.867L12.615 4.383C12.794 4.022 13.159 3.772 13.581 3.772C14.171 3.772 14.649 4.25 14.649 4.84C14.649 5.43 14.171 5.908 13.581 5.908C13.003 5.908 12.536 5.453 12.514 4.885L10.334 4.425L9.667 7.573C11.255 7.625 12.693 8.09 13.741 8.813C14.039 8.516 14.448 8.333 14.901 8.333C15.821 8.333 16.568 9.08 16.568 10C16.568 10.68 16.168 11.26 15.591 11.533C15.623 11.683 15.641 11.836 15.641 11.993C15.641 14.199 13.008 15.993 9.734 15.993C6.46 15.993 3.827 14.199 3.827 11.993C3.827 11.836 3.845 11.683 3.877 11.533C3.3 11.26 2.9 10.68 2.9 10C2.9 9.08 3.647 8.333 4.567 8.333C5.019 8.333 5.429 8.516 5.727 8.813C6.772 8.091 8.203 7.627 9.783 7.573L9.783 7.573L10.433 4.425L10.433 4.425L16.1 10.007ZM7 10.933C7 10.343 7.478 9.865 8.068 9.865C8.658 9.865 9.136 10.343 9.136 10.933C9.136 11.523 8.658 12.001 8.068 12.001C7.478 12.001 7 11.523 7 10.933ZM12.734 12.8C12.604 12.67 12.397 12.67 12.267 12.8C11.844 13.222 10.829 13.4 10 13.4C9.171 13.4 8.156 13.222 7.734 12.8C7.604 12.67 7.397 12.67 7.267 12.8C7.137 12.93 7.137 13.137 7.267 13.267C7.944 13.944 9.383 14 10 14C10.617 14 12.056 13.944 12.733 13.267C12.863 13.137 12.864 12.93 12.734 12.8ZM10.865 10.933C10.865 10.343 11.343 9.865 11.933 9.865C12.523 9.865 13.001 10.343 13.001 10.933C13.001 11.523 12.523 12.001 11.933 12.001C11.343 12.001 10.865 11.523 10.865 10.933Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}