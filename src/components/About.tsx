import { Reveal, SectionHeader } from "./Section";

const POINTS = [
  { icon: "🚀", title: "Promote your project", text: "Bots, Mini Apps, channels, sites, tokens, games & more." },
  { icon: "💰", title: "Earn vVIRAL", text: "Get rewarded for verified, real activity inside the ecosystem." },
  { icon: "🤝", title: "Invite active users", text: "Build your referral network and grow your Viral Power." },
  { icon: "🎯", title: "Launch campaigns", text: "Set rewards per action, audience and total budget." },
  { icon: "🛡️", title: "Escrow protection", text: "Campaign budgets are locked and released only after verification." },
  { icon: "🤖", title: "Block bots", text: "Anti-fraud engine rejects fake clicks and multi-accounts." },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="What is $VIRAL App?"
            title={
              <>
                A mutual promotion platform{" "}
                <span className="text-gradient-purple">built inside Telegram</span>
              </>
            }
            subtitle="Users add their resources, create promotion campaigns, lock budgets in escrow and reward real users for verified actions — all from one Telegram-native experience."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="glass card-hover rounded-2xl p-6 h-full group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8A2BFF]/30 to-[#FFD36A]/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h3 className="display-font text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-[#A9A3B8] leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
