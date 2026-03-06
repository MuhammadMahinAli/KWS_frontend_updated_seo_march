import { ChevronDown, Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function Navigation() {
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsCompanyDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsCompanyDropdownOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[rgba(247,245,239,0.85)] border-b border-[rgba(0,0,0,0.03)] shadow-sm">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="font-semibold text-lg tracking-tight text-[#121212]">
              KWS Technology
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-sm font-medium text-[rgba(17,24,39,0.8)] hover:text-[#121212] transition-colors">
                Home
              </a>
              <a href="/products" className="text-sm font-medium text-[rgba(17,24,39,0.8)] hover:text-[#121212] transition-colors">
                Products
              </a>
              <a href="/blog" className="text-sm font-medium text-[rgba(17,24,39,0.8)] hover:text-[#121212] transition-colors">
                Blog
              </a>
              {/* Desktop Company Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-[14px] font-medium text-[rgba(17,24,39,0.8)] leading-[20px] flex items-center gap-1">
                  Company
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isCompanyDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[rgba(0,0,0,0.1)] py-2 z-50">
                    <a
                      href="/about-us"
                      className="block px-4 py-2 text-[14px] font-medium text-[rgba(17,24,39,0.8)] hover:bg-[#f7f5ef] transition-colors"
                    >
                      About Us
                    </a>
                    <a
                      href="/portfolio"
                      className="block px-4 py-2 text-[14px] font-medium text-[rgba(17,24,39,0.8)] hover:bg-[#f7f5ef] transition-colors"
                    >
                      Portfolio
                    </a>
                    <a
                      href="/industries"
                      className="block px-4 py-2 text-[14px] font-medium text-[rgba(17,24,39,0.8)] hover:bg-[#f7f5ef] transition-colors"
                    >
                      Industries
                    </a>
                    <a
                      href="/career"
                      className="block px-4 py-2 text-[14px] font-medium text-[rgba(17,24,39,0.8)] hover:bg-[#f7f5ef] transition-colors"
                    >
                      Career
                    </a>
                  </div>
                )}
              </div>
              <a href="/contact" className="text-sm font-medium text-[rgba(17,24,39,0.8)] hover:text-[#121212] transition-colors">
                Contact Us
              </a>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a href="/contact" className="px-5 py-2 text-xs font-medium text-[#121212] bg-[#d0ef58] rounded-full hover:bg-[#c5e84d] transition-colors">
                Contact
              </a>
              <a href="https://calendly.com/kwstechnology-info/30min" target="_blank" rel="noopener noreferrer" className="px-5 py-2 text-xs font-medium text-white bg-[#121212] rounded-full shadow-lg hover:bg-[#2a2a2a] transition-colors">
                Book Demo
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#121212]" />
              ) : (
                <Menu className="w-6 h-6 text-[#121212]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{
            backgroundImage: "linear-gradient(90deg, rgb(247, 245, 239) 0%, rgb(247, 245, 239) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
            top: '64px'
          }}
        >
          <div className="px-6 pt-6 pb-8 h-full flex flex-col">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-8">
              <a
                href="/"
                className="text-[16px] font-medium text-[rgba(17,24,39,0.8)] leading-[20px]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>

              <a
                href="/products"
                className="text-[16px] font-medium text-[rgba(17,24,39,0.8)] leading-[20px]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </a>

              <a
                href="/blog"
                className="text-[16px] font-medium text-[rgba(17,24,39,0.8)] leading-[20px]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </a>

              <div className="flex flex-col space-y-4">
                <button
                  className="flex items-center justify-between w-[97px]"
                  onClick={() => setIsMobileCompanyOpen(!isMobileCompanyOpen)}
                >
                  <span className="text-[16px] font-medium text-[rgba(17,24,39,0.8)] leading-[20px]">
                    Company
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#111827] opacity-80 transition-transform ${isMobileCompanyOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {isMobileCompanyOpen && (
                  <div className="flex flex-col space-y-4 pl-4">
                    <a
                      href="/about-us"
                      className="text-[14px] font-normal text-[rgba(17,24,39,0.7)] leading-[20px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About Us
                    </a>
                    <a
                      href="/portfolio"
                      className="text-[14px] font-normal text-[rgba(17,24,39,0.7)] leading-[20px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Portfolio
                    </a>
                    <a
                      href="/industries"
                      className="text-[14px] font-normal text-[rgba(17,24,39,0.7)] leading-[20px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Industries
                    </a>
                    <a
                      href="/career"
                      className="text-[14px] font-normal text-[rgba(17,24,39,0.7)] leading-[20px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Career
                    </a>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="mt-auto flex flex-col items-center gap-4 pt-8">
              <a
                href="/contact"
                className="bg-[#d0ef58] w-[178px] h-[46px] flex items-center justify-center px-5 py-2 rounded-full font-medium text-[14px] text-[#121212] leading-[16px]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="https://calendly.com/kwstechnology-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#121212] w-[218px] h-[46px] flex items-center justify-center px-5 py-2 rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.05),0px_4px_6px_-4px_rgba(0,0,0,0.05)] font-medium text-[14px] text-white leading-[16px]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}