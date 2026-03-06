export function Statistics() {
  const stats = [
    { value: '40%', label: 'reduction in operational costs with AI', color: '#00533d' },
    { value: '83%', label: 'of customers expect immediate AI-powered responses', color: '#febcfa' },
    { value: '35%', label: 'cost reduction in customer service operations', color: '#aaccf9' },
    { value: '30%', label: 'average productivity gain reported by AI-adopting businesses', color: '#fde789' },
  ];

  return (
    <section className="py-6 md:py-16 px-4 md:px-[117px]">
      <div className="max-w-[1280px] mx-auto md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-semibold text-[30px] md:text-[50px] text-black text-center leading-[40px] md:leading-[65px] tracking-[0.225px] md:tracking-normal">
            <span className="block md:inline">What businesses achieve with AI agents</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] overflow-hidden relative h-[242px] md:h-[241px]"
            >
              <div className="p-8 flex flex-col gap-[87px] h-full">
                <div className="font-normal text-[40px] text-black leading-[48px]">
                  {stat.value}
                </div>
                <div className="font-medium text-[13px] text-[#364153] leading-[20px]">
                  {stat.label}
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 top-0 w-[13px]"
                style={{ backgroundColor: stat.color }}
              />
            </div>
          ))}
        </div>
        <p className="text-xs text-center mt-4 opacity-60" style={{fontSize: '11px'}}>Sources: McKinsey Global Institute AI Adoption Report 2024 · Salesforce State of Service Report 2025</p>
      </div>
    </section>
  );
}