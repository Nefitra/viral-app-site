import { Reveal } from "./Section";

const COIN_URL = "https://raw.githubusercontent.com/Nefitra/-VIRAL/main/VIRAL_coin_transparent.png";

export default function CTA() {
  return (
    <section id="community" className="relative py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="relative glass-strong rounded-3xl p-8 sm:p-14 overflow-hidden text-center">
            {/* Glows */}
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#8A2BFF]/30 blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#FFD36A]/20 blur-3xl animate-pulse-glow" />

            <div className="relative">
              <img
                src={COIN_URL}
                alt="$VIRAL"
                className="w-20 h-20 sm:w-24 sm:h-24 mx-auto object-contain coin-shadow animate-float mb-6"
              />

              <h2 className="display-font text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Ready to Go </span>
                <span className="text-gradient-gold gold-glow-text">Viral?</span>
              </h2>

              <p className="mt-5 text-base sm:text-lg text-[#A9A3B8] max-w-2xl mx-auto">
                Launch the $VIRAL Mini App, add your project and start building attention
                through community-powered promotion.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 justify-center">
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
                <button
                  disabled
                  className="text-sm font-semibold px-6 py-3.5 rounded-xl inline-flex items-center gap-2 bg-gradient-to-r from-[#FFD36A]/20 to-[#FFB84D]/10 border border-[#FFD36A]/40 text-[#FFD36A] cursor-not-allowed"
                >
                  <img src={COIN_URL} alt="" className="w-4 h-4 object-contain" />
                  Buy $VIRAL
                  <span className="ml-1 text-[10px] uppercase tracking-wider bg-[#FFD36A] text-[#180A2E] px-2 py-0.5 rounded-full font-bold">
                    Soon
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
