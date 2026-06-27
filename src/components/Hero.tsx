const COIN_URL = "https://raw.githubusercontent.com/Nefitra/-VIRAL/main/VIRAL_coin_transparent.png";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Pill badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38F8B0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38F8B0]"></span>
            </span>
            <span className="text-[#A9A3B8]">Live on Telegram</span>
            <span className="text-white/30">•</span>
            <span className="text-gradient-gold font-semibold">Powered by $VIRAL</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left text */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="display-font text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="text-gradient-gold gold-glow-text">$VIRAL App</span>
              <span className="block text-white mt-2">Promote Anything.</span>
              <span className="block text-gradient-purple glow-text">Grow Together.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#A9A3B8] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A Telegram Web3 ecosystem where users promote bots, Mini Apps, websites,
              channels, tokens and digital projects using{" "}
              <span className="text-gradient-gold font-semibold">$VIRAL</span> as the
              internal fuel for viral growth.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="https://t.me/Viral_App_Bot"
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-white text-sm font-semibold px-6 py-3.5 rounded-xl inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>
                Launch Mini App
              </a>
              <a
                href="https://t.me/VIRAL_App_Community"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost text-white text-sm font-semibold px-6 py-3.5 rounded-xl inline-flex items-center gap-2"
              >
                Join Community
              </a>
              <a
                href="https://x.com/VIRAL_ADVERTISE"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost text-white text-sm font-semibold px-6 py-3.5 rounded-xl inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Follow X
              </a>
              <a
                href="https://t.me/blum/app?startapp=memepadjetton_VIRAL_dc5m8-ref_kEndfFMwG4"
                target="_blank"
                rel="noreferrer"
                className="btn-gold text-sm font-semibold px-6 py-3.5 rounded-xl inline-flex items-center gap-2"
              >
                <img src={COIN_URL} alt="" className="w-4 h-4 object-contain" />
                Buy $VIRAL
              </a>
            </div>

            {/* Mini stats / quick facts */}
            <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0">
              <div className="glass rounded-xl p-3 text-center">
                <div className="display-font text-lg sm:text-xl font-bold text-gradient-gold">100</div>
                <div className="text-[10px] sm:text-xs text-[#A9A3B8] mt-1">vVIRAL Starter Bonus</div>
              </div>
              <div className="glass rounded-xl p-3 text-center">
                <div className="display-font text-lg sm:text-xl font-bold text-gradient-purple">10%</div>
                <div className="text-[10px] sm:text-xs text-[#A9A3B8] mt-1">Referral Rewards</div>
              </div>
              <div className="glass rounded-xl p-3 text-center">
                <div className="display-font text-lg sm:text-xl font-bold text-white">100%</div>
                <div className="text-[10px] sm:text-xs text-[#A9A3B8] mt-1">Escrow Protected</div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-5 relative">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="mt-16 sm:mt-24 relative overflow-hidden border-y border-[#B066FF]/20 py-4">
        <div className="flex animate-ticker whitespace-nowrap gap-12 text-sm sm:text-base font-semibold">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex items-center gap-12 px-6">
              {[
                "Promote Anything",
                "Grow Together",
                "Powered by $VIRAL",
                "Escrow Protected",
                "Verified Users",
                "Telegram Native",
                "TON Connected",
                "Anti-Bot Engine",
                "Mutual Promotion",
              ].map((t, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-12">
                  <span className={i % 2 === 0 ? "text-gradient-gold" : "text-gradient-purple"}>
                    {t}
                  </span>
                  <span className="text-[#B066FF]/40">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-square max-w-[480px] mx-auto">
      {/* Outer orbit ring */}
      <div className="absolute inset-0 rounded-full border border-[#B066FF]/20 animate-spin-slow">
        <span className="absolute -top-1.5 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-[#FFD36A] shadow-[0_0_15px_#FFD36A]" />
        <span className="absolute top-1/2 -right-1.5 w-2 h-2 -translate-y-1/2 rounded-full bg-[#B066FF] shadow-[0_0_15px_#B066FF]" />
      </div>

      {/* Middle orbit */}
      <div className="absolute inset-8 rounded-full border border-[#8A2BFF]/30 animate-spin-reverse">
        <span className="absolute top-1/2 -left-1.5 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-[#38F8B0] shadow-[0_0_15px_#38F8B0]" />
        <span className="absolute -bottom-1.5 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-[#B066FF] shadow-[0_0_15px_#B066FF]" />
      </div>

      {/* Inner ring */}
      <div className="absolute inset-16 rounded-full border border-[#FFD36A]/20 animate-spin-slow" />

      {/* Background glow */}
      <div className="absolute inset-1/4 rounded-full bg-gradient-to-br from-[#8A2BFF]/30 via-[#FFD36A]/20 to-[#B066FF]/30 blur-3xl animate-pulse-glow" />

      {/* Center coin */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={COIN_URL}
          alt="$VIRAL Coin"
          className="viral-coin-logo animate-float"
        />
      </div>

      {/* Floating project chips */}
      <FloatingChip icon="🤖" label="Bots" className="top-4 left-2 sm:left-0" delay="0s" />
      <FloatingChip icon="📱" label="Mini Apps" className="top-12 right-0 sm:-right-4" delay="0.5s" />
      <FloatingChip icon="📢" label="Channels" className="bottom-12 left-0 sm:-left-4" delay="1s" />
      <FloatingChip icon="🌐" label="Websites" className="bottom-4 right-4" delay="1.5s" />
      <FloatingChip icon="🎮" label="Games" className="top-1/2 -left-2 sm:-left-8" delay="2s" />
      <FloatingChip icon="💎" label="Tokens" className="top-1/2 -right-2 sm:-right-8" delay="2.5s" />
    </div>
  );
}

function FloatingChip({
  icon,
  label,
  className,
  delay,
}: {
  icon: string;
  label: string;
  className?: string;
  delay?: string;
}) {
  return (
    <div
      className={`absolute glass rounded-xl px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 animate-float-slow ${className}`}
      style={{ animationDelay: delay }}
    >
      <span>{icon}</span>
      <span className="text-white">{label}</span>
    </div>
  );
}
