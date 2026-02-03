export function CTASection() {
  return (
    <section className="py-12 px-6 md:px-[143px]">
      <div className="max-w-[1232px] mx-auto">
        <div className="bg-[rgba(243,244,246,0.5)] rounded-[40px] px-8 md:px-24 py-12 md:py-[60px] text-center">
          <h2 className="font-semibold text-[30px] md:text-[48px] text-[#121212] tracking-[-1.5px] md:tracking-[-2.4px] leading-[36px] md:leading-[48px] mb-8">
            <span className="block md:inline">Tell us what you</span>
            <span className="block md:inline"> want to automate.</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="https://calendly.com/kwstechnology-info/30min" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-8 py-3.5 bg-[#121212] text-white font-medium text-[14px] leading-[20px] text-center rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#2a2a2a] transition-colors">
              Book Demo
            </a>
            <a href="/contact" className="w-full md:w-auto px-8 py-3.5 bg-[rgba(208,239,88,0.1)] text-[#121212] font-medium text-[14px] leading-[20px] text-center rounded-full border border-[rgba(101,163,13,0.3)] hover:bg-[rgba(208,239,88,0.2)] transition-colors">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}