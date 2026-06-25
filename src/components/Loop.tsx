import { Reveal, SectionHeader } from "./Section";

const COIN_URL = "https://raw.githubusercontent.com/Nefitra/-VIRAL/main/VIRAL_coin_transparent.png";

const NODES = [
  { label: "Promoters spend $VIRAL", icon: "💸" },
  { label: "Budget locked in Escrow", icon: "🔒" },
  { label: "Users complete verified actions", icon: "✅" },
  { label: "Users earn rewards", icon: "🎁" },
  { label: "Referrers receive 10%", icon: "🤝" },
  { label: "Platform receives 10% fee", icon: "🏛️" },
  { label: "Users promote their own", icon: "🚀" },
  { label: "Ecosystem grows", icon: "🌐" },
];

export default function Loop() {
  return (
    <section id="loop" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="The Ecosystem Loop"
            title={
              <>
                A self-fueling{" "}
                <span className="text-gradient-purple">growth engine</span>
              </>
            }
            subtitle="Every action feeds the next. Every reward strengthens the network. The loop never stops."
          />
        </Reveal>

        {/* Desktop: circular orbit */}
        <div className="hidden lg:block relative w-full max-w-[720px] aspect-square mx-auto">
          {/* Rings */}
          <div className="absolute inset-0 rounded-full border border-[#B066FF]/20 animate-spin-slow" />
          <div className="absolute inset-10 rounded-full border border-[#FFD36A]/15 animate-spin-reverse" />
          <div className="absolute inset-20 rounded-full border border-[#8A2BFF]/10 animate-spin-slow" />

          {/* Background glow */}
          <div className="absolute inset-1/4 rounded-full bg-gradient-to-br from-[#8A2BFF]/30 via-[#FFD36A]/20 to-[#B066FF]/30 blur-3xl animate-pulse-glow" />

          {/* Center coin */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <img src={COIN_URL} alt="$VIRAL" className="w-32 h-32 mx-auto object-contain coin-shadow animate-float" />
              <div className="display-font text-gradient-gold font-bold mt-3 text-lg">$VIRAL Loop</div>
            </div>
          </div>

          {/* Nodes */}
          {NODES.map((n, i) => {
            const angle = (i / NODES.length) * 360;
            const rad = (angle * Math.PI) / 180;
            const r = 320;
            const x = Math.cos(rad) * r;
            const y = Math.sin(rad) * r;
            return (
              <div
                key={n.label}
                className="absolute top-1/2 left-1/2 w-40"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <div className="glass-strong rounded-xl p-3 text-center card-hover">
                  <div className="text-2xl">{n.icon}</div>
                  <div className="text-xs font-semibold text-white mt-1">{n.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: vertical flow */}
        <div className="lg:hidden space-y-3">
          {NODES.map((n, i) => (
            <Reveal key={n.label} delay={i * 60}>
              <div className="flex items-center gap-3">
                <div className="display-font text-xs font-bold w-7 h-7 rounded-full bg-gradient-to-r from-[#8A2BFF] to-[#B066FF] flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1 glass rounded-xl p-3 flex items-center gap-3">
                  <span className="text-xl">{n.icon}</span>
                  <span className="text-sm font-semibold text-white">{n.label}</span>
                </div>
              </div>
              {i < NODES.length - 1 && (
                <div className="ml-3.5 w-px h-3 bg-gradient-to-b from-[#B066FF] to-transparent" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
