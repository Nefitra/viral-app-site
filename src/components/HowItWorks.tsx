import { Reveal, SectionHeader } from "./Section";

const STEPS = [
  {
    n: "01",
    title: "Add Your Resource",
    text: "Add your bot, Mini App, channel, website, token, game or service.",
    icon: "➕",
  },
  {
    n: "02",
    title: "Create Campaign",
    text: "Set campaign type, reward per action, target audience and budget.",
    icon: "🎯",
  },
  {
    n: "03",
    title: "Fuel with $VIRAL",
    text: "Use $VIRAL / vVIRAL as the fuel that powers your campaign.",
    icon: "⛽",
  },
  {
    n: "04",
    title: "Verified Tasks",
    text: "Users interact with your project and receive rewards only after verification.",
    icon: "✅",
  },
  {
    n: "05",
    title: "Ecosystem Grows",
    text: "Promoters get attention, users earn rewards and the network grows.",
    icon: "🌐",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="How it works"
            title={
              <>
                Five steps to{" "}
                <span className="text-gradient-purple">go viral</span>
              </>
            }
            subtitle="A simple flow from launching a campaign to earning real attention — fully protected, fully community-powered."
          />
        </Reveal>

        {/* Connector line */}
        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px">
            <svg className="w-full h-2" preserveAspectRatio="none" viewBox="0 0 1000 8">
              <line
                x1="0"
                y1="4"
                x2="1000"
                y2="4"
                stroke="url(#linegrad)"
                strokeWidth="2"
                strokeDasharray="8 12"
                className="animate-dash"
              />
              <defs>
                <linearGradient id="linegrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8A2BFF" />
                  <stop offset="50%" stopColor="#FFD36A" />
                  <stop offset="100%" stopColor="#B066FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="relative glass card-hover rounded-2xl p-5 h-full">
                  {/* Step number bubble */}
                  <div className="absolute -top-4 left-5 display-font text-xs font-bold tracking-widest px-3 py-1 rounded-full bg-gradient-to-r from-[#8A2BFF] to-[#B066FF] text-white shadow-[0_0_20px_rgba(138,43,255,0.6)]">
                    STEP {s.n}
                  </div>
                  <div className="mt-3 w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFD36A]/20 to-[#8A2BFF]/20 border border-[#FFD36A]/30 flex items-center justify-center text-2xl mb-4">
                    {s.icon}
                  </div>
                  <h3 className="display-font text-base font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-[#A9A3B8] leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
