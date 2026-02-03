import { Github, Twitter, Linkedin, Slack } from 'lucide-react';

export function ExternalTools() {
  const tools = [
    { name: 'GitHub', icon: Github, users: '2.5k' },
    { name: 'Slack', icon: Slack, users: '1.8k' },
    { name: 'Twitter', icon: Twitter, users: '3.2k' },
    { name: 'LinkedIn', icon: Linkedin, users: '4.1k' },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#121212] mb-4">
            Integrate with your favorite tools
          </h2>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
            Connect with the platforms your team already uses
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-white border border-[#f3f4f6] rounded-2xl p-8 hover:shadow-lg transition-all group text-center"
            >
              <div className="w-16 h-16 bg-[#f9fafb] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d0ef58] transition-colors">
                <tool.icon className="w-8 h-8 text-[#121212]" />
              </div>
              <h3 className="font-medium text-[#121212] mb-1">{tool.name}</h3>
              <p className="text-xs text-[#6b7280]">{tool.users} users</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
