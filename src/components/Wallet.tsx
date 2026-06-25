import { Reveal, SectionHeader } from "./Section";

export default function Wallet() {
  return (
    <section id="wallet" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Wallet & TonConnect"
            title={
              <>
                <span className="text-white">Real</span>{" "}
                <span className="text-gradient-purple">TON Wallet</span>{" "}
                <span className="text-white">Connection</span>
              </>
            }
            subtitle="$VIRAL App supports real TonConnect wallet connection. Users can connect Tonkeeper or other TON-compatible wallets and view real TON balance."
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Wallet mockup */}
          <Reveal>
            <div className="relative glass-strong rounded-3xl p-6 sm:p-8 h-full">
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#8A2BFF]/20 blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0098EA] to-[#005FA0] flex items-center justify-center font-bold">
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white"><circle cx="12" cy="12" r="10" /><path d="M8 9h8l-4 8z" fill="#0098EA"/></svg>
                    </div>
                    <span className="font-semibold text-white text-sm">TonConnect</span>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-[#38F8B0]/15 text-[#38F8B0] border border-[#38F8B0]/30 font-semibold">
                    Connected
                  </span>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-[#180A2E] to-[#0B0618] border border-[#B066FF]/20 p-5 mb-3">
                  <div className="text-xs text-[#A9A3B8] uppercase tracking-wider mb-1">Real TON Balance</div>
                  <div className="display-font text-3xl sm:text-4xl font-bold text-white">
                    0.00 <span className="text-[#0098EA]">TON</span>
                  </div>
                  <div className="text-xs text-[#A9A3B8] mt-2 font-mono">UQ•••••wallet</div>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-[#180A2E] to-[#0B0618] border border-[#FFD36A]/20 p-5">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-xs text-[#A9A3B8] uppercase tracking-wider">Internal Balance</div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FFD36A]/15 text-[#FFD36A] border border-[#FFD36A]/30 font-bold">
                      vVIRAL
                    </span>
                  </div>
                  <div className="display-font text-3xl sm:text-4xl font-bold text-gradient-gold">
                    100 <span className="text-base text-[#A9A3B8] font-medium">vVIRAL</span>
                  </div>
                  <div className="text-xs text-[#A9A3B8] mt-2">Starter bonus credited</div>
                </div>

                <div className="mt-4 text-[11px] text-[#A9A3B8] flex items-start gap-2">
                  <span className="text-[#FFD36A]">ℹ</span>
                  <span>Real $VIRAL balance will appear only after the token exists on-chain.</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Rules */}
          <div className="space-y-4">
            {[
              { icon: "✅", title: "Show only real TON balance for now", text: "No fake or simulated numbers." },
              { icon: "🚫", title: "Do not show fake balances", text: "Transparency comes first." },
              { icon: "🪙", title: "GRAM is never shown as $VIRAL", text: "Tokens are clearly labeled." },
              { icon: "🔗", title: "Real $VIRAL appears only on-chain", text: "After the token officially exists." },
              { icon: "📊", title: "vVIRAL is internal platform balance only", text: "Used for in-app actions." },
            ].map((r, i) => (
              <Reveal key={r.title} delay={i * 60}>
                <div className="glass card-hover rounded-xl p-4 flex items-start gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-[#8A2BFF]/20 to-[#FFD36A]/20 flex items-center justify-center text-lg">
                    {r.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{r.title}</h4>
                    <p className="text-xs text-[#A9A3B8] mt-0.5 leading-relaxed">{r.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={400}>
              <div className="rounded-2xl border border-[#FF4D6D]/40 bg-gradient-to-br from-[#FF4D6D]/10 to-transparent p-4 flex gap-3 items-start">
                <div className="text-2xl">🛡️</div>
                <div>
                  <div className="text-sm font-bold text-white">Security First</div>
                  <p className="text-xs text-[#A9A3B8] mt-1 leading-relaxed">
                    $VIRAL App will never ask for your seed phrase or private keys.
                    Never share them with anyone.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
