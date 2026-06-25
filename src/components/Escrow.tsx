import { Reveal, SectionHeader } from "./Section";

const FEATURES = [
  { icon: "🔐", title: "Campaign Escrow", text: "Budgets locked until rewards are verified." },
  { icon: "⏳", title: "Pending Rewards", text: "Tasks enter a verification queue before payout." },
  { icon: "🧠", title: "Anti-Fraud Checks", text: "ML signals flag suspicious user patterns." },
  { icon: "👥", title: "Duplicate Detection", text: "Multi-accounts and farms get blocked." },
  { icon: "🆔", title: "Telegram ID Verify", text: "Real Telegram identity required." },
  { icon: "👛", title: "Wallet Checks", text: "Duplicate wallet linking is restricted." },
  { icon: "🕵️", title: "Suspicious Referrals", text: "Network analysis catches fake invites." },
  { icon: "👮", title: "Manual Review", text: "Admins inspect high-value/edge cases." },
  { icon: "🚫", title: "Rejected Fake Actions", text: "No payout for invalid activity." },
];

export default function Escrow() {
  return (
    <section id="escrow" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Escrow & Anti-Bot"
            title={
              <>
                <span className="text-gradient-purple">Protected Campaigns.</span>{" "}
                <span className="text-white">Real Users.</span>{" "}
                <span className="text-gradient-gold">No Bot Farming.</span>
              </>
            }
            subtitle="Campaign budgets are protected by escrow. Rewards are released only after user actions are verified. Fake clicks, multi-accounts, bots and suspicious activity are rejected."
          />
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Shield visual */}
          <div className="lg:col-span-4">
            <Reveal>
              <div className="relative aspect-square max-w-[360px] mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8A2BFF]/30 via-transparent to-[#38F8B0]/20 blur-3xl animate-pulse-glow" />
                <div className="absolute inset-4 rounded-full border border-[#B066FF]/30 animate-spin-slow" />
                <div className="absolute inset-12 rounded-full border border-[#38F8B0]/20 animate-spin-reverse" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <svg
                      viewBox="0 0 200 220"
                      className="w-44 sm:w-52 h-44 sm:h-52 animate-float coin-shadow"
                    >
                      <defs>
                        <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#B066FF" />
                          <stop offset="50%" stopColor="#8A2BFF" />
                          <stop offset="100%" stopColor="#FFD36A" />
                        </linearGradient>
                        <linearGradient id="shieldFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#180A2E" />
                          <stop offset="100%" stopColor="#0B0618" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M100 10 L180 40 L180 110 Q180 180 100 210 Q20 180 20 110 L20 40 Z"
                        fill="url(#shieldFill)"
                        stroke="url(#shieldGrad)"
                        strokeWidth="3"
                      />
                      <path
                        d="M70 110 L92 132 L138 86"
                        stroke="#38F8B0"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Feature grid */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 50}>
                <div className="glass card-hover rounded-xl p-4 h-full flex gap-3 items-start">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-[#38F8B0]/15 to-[#8A2BFF]/20 border border-[#38F8B0]/20 flex items-center justify-center text-xl">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{f.title}</h4>
                    <p className="text-xs text-[#A9A3B8] mt-0.5 leading-relaxed">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
