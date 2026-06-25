import { Reveal, SectionHeader } from "./Section";

const ITEMS = [
  { icon: "📱", title: "Telegram Mini Apps", text: "Drive verified users to your Mini App." },
  { icon: "🤖", title: "Telegram Bots", text: "Increase active subscribers and interactions." },
  { icon: "📢", title: "Telegram Channels", text: "Grow your audience with real members." },
  { icon: "🌐", title: "Websites", text: "Send qualified traffic to your landing page." },
  { icon: "💎", title: "Tokens", text: "Boost awareness around your token project." },
  { icon: "🎮", title: "Web3 Games", text: "Attract real players, not bots or farms." },
  { icon: "👥", title: "Communities", text: "Build engaged, authentic communities." },
  { icon: "📲", title: "Apps", text: "Promote mobile and Web3 applications." },
  { icon: "🌟", title: "Social Pages", text: "Grow followers on Twitter, IG, TikTok and more." },
  { icon: "⚡", title: "Services", text: "Promote any digital service or online product." },
];

export default function Promote() {
  return (
    <section id="promote" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="What can you promote?"
            title={
              <>
                Any digital resource —{" "}
                <span className="text-gradient-gold">powered by community</span>
              </>
            }
            subtitle="From Telegram bots to Web3 games, from websites to tokens — $VIRAL App turns the network into your distribution engine."
          />
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 40}>
              <div className="group relative glass card-hover rounded-2xl p-4 sm:p-5 h-full overflow-hidden">
                {/* hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BFF]/0 via-transparent to-[#FFD36A]/0 group-hover:from-[#8A2BFF]/15 group-hover:to-[#FFD36A]/10 transition" />
                <div className="relative">
                  <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-white text-sm sm:text-base mb-1">{item.title}</h3>
                  <p className="text-xs text-[#A9A3B8] leading-relaxed">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
