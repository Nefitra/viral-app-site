const COIN_URL = "https://raw.githubusercontent.com/Nefitra/-VIRAL/main/VIRAL_coin_transparent.png";

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-10 border-t border-[#B066FF]/15 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <img src={COIN_URL} alt="$VIRAL" className="w-10 h-10 object-contain animate-float-slow" />
              <div>
                <div className="display-font text-lg font-bold text-gradient-gold">$VIRAL App</div>
                <div className="text-xs text-[#A9A3B8]">Web3 Promotion Ecosystem</div>
              </div>
            </a>
            <p className="text-sm text-[#A9A3B8] max-w-md leading-relaxed">
              Promote anything. Grow together. A Telegram Web3 ecosystem powered by{" "}
              <span className="text-gradient-gold font-semibold">$VIRAL</span>.
            </p>

            <div className="flex flex-col gap-1.5 mt-4">
              <a
                href="https://viral-app.org"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#B066FF] hover:text-white transition"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>
                viral-app.org
              </a>
              <a
                href="https://www.viral-app.org"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#A9A3B8] hover:text-white transition"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>
                www.viral-app.org
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="display-font text-sm font-bold text-white uppercase tracking-widest mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["Home", "#home"],
                ["How It Works", "#how"],
                ["Token Utility", "#utility"],
                ["Escrow", "#escrow"],
                ["Referrals", "#referrals"],
                ["Roadmap", "#roadmap"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-[#A9A3B8] hover:text-white transition">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="md:col-span-4">
            <h4 className="display-font text-sm font-bold text-white uppercase tracking-widest mb-4">Community</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://t.me/Viral_App_Bot"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-[#A9A3B8] hover:text-white transition group"
                >
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#229ED9] to-[#0088CC] flex items-center justify-center group-hover:scale-110 transition">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>
                  </span>
                  <div>
                    <div className="font-semibold text-white">Telegram Mini App</div>
                    <div className="text-xs text-[#A9A3B8]">@Viral_App_Bot</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/VIRAL_App_Community"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-[#A9A3B8] hover:text-white transition group"
                >
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8A2BFF] to-[#B066FF] flex items-center justify-center group-hover:scale-110 transition">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>
                  </span>
                  <div>
                    <div className="font-semibold text-white">Telegram Community</div>
                    <div className="text-xs text-[#A9A3B8]">@VIRAL_App_Community</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/VIRAL_ADVERTISE"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-[#A9A3B8] hover:text-white transition group"
                >
                  <span className="w-8 h-8 rounded-lg bg-black border border-white/20 flex items-center justify-center group-hover:scale-110 transition">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </span>
                  <div>
                    <div className="font-semibold text-white">X / Twitter</div>
                    <div className="text-xs text-[#A9A3B8]">@VIRAL_ADVERTISE</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 rounded-2xl border border-[#FF4D6D]/25 bg-[#FF4D6D]/[0.04] p-5">
          <div className="flex gap-3 items-start">
            <span className="text-[#FF4D6D] text-lg">⚠️</span>
            <p className="text-xs text-[#A9A3B8] leading-relaxed">
              <span className="text-white font-semibold">Disclaimer: </span>
              $VIRAL is a utility token designed for ecosystem activity, promotion,
              advertising tools and platform interaction. It is not financial advice,
              not an investment offer and does not guarantee profit, income or token
              price growth. Users are responsible for their own decisions and should
              understand the risks of digital assets.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#A9A3B8]">
            © {new Date().getFullYear()} $VIRAL App. All rights reserved.
          </p>
          <p className="text-xs text-[#A9A3B8]">
            Built for Telegram • Powered by{" "}
            <span className="text-gradient-gold font-semibold">$VIRAL</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
