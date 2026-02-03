import { Smartphone } from 'lucide-react';

export function MobilePreview() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#d0ef58] text-[#121212] px-4 py-1.5 rounded-full text-xs font-medium mb-6">
              Mobile Ready
            </div>
            
            <h2 className="text-4xl font-semibold text-[#121212] mb-6 leading-tight">
              Works everywhere your customers are
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#d0ef58] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Smartphone className="w-4 h-4 text-[#121212]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#121212] mb-1">Mobile-First Design</h3>
                  <p className="text-sm text-[#6b7280]">
                    Optimized interfaces that work beautifully on any device
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#d0ef58] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Smartphone className="w-4 h-4 text-[#121212]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#121212] mb-1">Real-Time Sync</h3>
                  <p className="text-sm text-[#6b7280]">
                    Instant updates across all platforms and devices
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#d0ef58] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Smartphone className="w-4 h-4 text-[#121212]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#121212] mb-1">Offline Capable</h3>
                  <p className="text-sm text-[#6b7280]">
                    Continue working even without an internet connection
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-[280px] h-[560px]">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-[#1f2937] rounded-[3rem] shadow-2xl overflow-hidden border-8 border-[#1f2937]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1f2937] rounded-b-3xl z-10" />
                
                {/* Screen Content */}
                <div className="relative h-full bg-white overflow-hidden">
                  <div className="p-6 space-y-4">
                    <div className="h-12 bg-[#d0ef58] rounded-2xl" />
                    <div className="h-24 bg-[#f3f4f6] rounded-2xl" />
                    <div className="h-16 bg-[#f3f4f6] rounded-2xl" />
                    <div className="h-16 bg-[#f3f4f6] rounded-2xl" />
                    <div className="h-32 bg-[#f3f4f6] rounded-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
