import { Code, Zap, Shield } from 'lucide-react';

export function UseFromAPI() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#121212] mb-4">
            Use from API
          </h2>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
            Simple, powerful APIs that integrate with your stack
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-[#f3f4f6] rounded-2xl p-8 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-[#d0ef58] rounded-xl flex items-center justify-center mb-6">
              <Code className="w-6 h-6 text-[#121212]" />
            </div>
            <h3 className="text-xl font-semibold text-[#121212] mb-3">
              RESTful API
            </h3>
            <p className="text-sm text-[#6b7280] leading-relaxed mb-4">
              Clean, documented endpoints that work with any language or framework
            </p>
            <code className="text-xs bg-[#f9fafb] p-3 rounded-lg block text-[#121212]">
              POST /api/v1/agents/execute
            </code>
          </div>

          <div className="bg-white border border-[#f3f4f6] rounded-2xl p-8 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-[#d0ef58] rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-[#121212]" />
            </div>
            <h3 className="text-xl font-semibold text-[#121212] mb-3">
              Webhooks
            </h3>
            <p className="text-sm text-[#6b7280] leading-relaxed mb-4">
              Real-time notifications sent directly to your systems
            </p>
            <code className="text-xs bg-[#f9fafb] p-3 rounded-lg block text-[#121212]">
              webhook.kws.ai/events
            </code>
          </div>

          <div className="bg-white border border-[#f3f4f6] rounded-2xl p-8 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-[#d0ef58] rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-[#121212]" />
            </div>
            <h3 className="text-xl font-semibold text-[#121212] mb-3">
              Secure by Default
            </h3>
            <p className="text-sm text-[#6b7280] leading-relaxed mb-4">
              OAuth 2.0, API keys, and enterprise-grade security
            </p>
            <code className="text-xs bg-[#f9fafb] p-3 rounded-lg block text-[#121212]">
              Authorization: Bearer ***
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
