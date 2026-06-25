import { Reveal, SectionHeader } from "./Section";

const COIN_URL = "https://raw.githubusercontent.com/Nefitra/-VIRAL/main/VIRAL_coin_transparent.png";

const UTILS = [
  { icon: "📣", label: "Promotion Campaigns" },
  { icon: "⛽", label: "Advertising Fuel" },
  { icon: "🔆", label: "Visibility Boosts" },
  { icon: "🎁", label: "Verified Task Rewards" },
  { icon: "🤝", label: "Referral Rewards" },
  { icon: "🔒", label: "Campaign Budget Escrow" },
  { icon: "🛠️", label: "Premium Promotion Tools" },
  { icon: "🚀", label: "Future Growth Mechanics" },
];

export default function TokenUtility() {
  return (
    <section id="utility" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: visual */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <div className="relative aspect-square max-w-[420px] mx-auto">
                {/* Halo */}
                <div className="absolute inset-1/4 rounded-full bg-gradient-to-br from-[#FFD36A]/40 via-[#8A2BFF]/40 to-[#B066FF]/40 blur-3xl animate-pulse-glow" />
                {/* Rings */}
                <div className="absolute inset-0 rounded-full border border-[#FFD36A]/25 animate-spin-slow" />
                <div className="absolute inset-6 rounded-full border border-[#B066FF]/20 animate-spin-reverse" />
                <div className="absolute inset-12 rounded-full border border-[#8A2BFF]/15 animate-spin-slow" />

                {/* Coin */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={COIN_URL}
                    alt="$VIRAL"
                    className="viral-coin-logo max-w-[320px] animate-float"
                  />
                </div>

                {/* Orbit dots */}
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full"
                    style={{
                      transform: `rotate(${deg}deg) translateX(160px) translateY(-50%)`,
                      background: i % 2 === 0 ? "#FFD36A" : "#B066FF",
                      boxShadow: i % 2 === 0 ? "0 0 20px #FFD36A" : "0 0 20px #B066FF",
                      animation: `pulseGlow ${2 + (i % 3)}s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal>
              <SectionHeader
                center={false}
                eyebrow="$VIRAL Token Utility"
                title={
                  <>
                    <span className="text-gradient-gold">$VIRAL</span> — The Fuel of{" "}
                    <span className="text-gradient-purple">Web3 Promotion</span>
                  </>
                }
                subtitle="$VIRAL is the internal utility token used for promotion campaigns, visibility boosts, activity rewards, referrals and platform actions."
              />
            </Reveal>

            <div className="grid grid-cols-2 gap-3 mt-2">
              {UTILS.map((u, i) => (
                <Reveal key={u.label} delay={i * 50}>
                  <div className="glass card-hover rounded-xl p-3.5 flex items-center gap-3">
                    <div className="w-9 h-9 shrink-0 rounded-lg bg-gradient-to-br from-[#FFD36A]/25 to-[#8A2BFF]/25 flex items-center justify-center text-lg">
                      {u.icon}
                    </div>
                    <span className="text-sm font-semibold text-white">{u.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={300}>
              <div className="mt-6 rounded-2xl border border-[#FF4D6D]/30 bg-[#FF4D6D]/5 p-4 flex gap-3">
                <div className="text-[#FF4D6D] text-xl shrink-0">⚠️</div>
                <p className="text-xs sm:text-sm text-[#A9A3B8] leading-relaxed">
                  <span className="text-white font-semibold">Important: </span>
                  $VIRAL is not an investment offer. It is a utility token for ecosystem
                  activity. It does not guarantee profit, income or token price growth.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
