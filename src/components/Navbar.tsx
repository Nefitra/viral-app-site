import { useEffect, useState } from "react";

const COIN_URL = "https://raw.githubusercontent.com/Nefitra/-VIRAL/main/VIRAL_coin_transparent.png";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how" },
  { label: "Token Utility", href: "#utility" },
  { label: "Escrow", href: "#escrow" },
  { label: "Referrals", href: "#referrals" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 border shadow-[0_10px_45px_rgba(0,0,0,0.45)] ${
            scrolled
              ? "bg-[#12051F]/95 border-[#B066FF]/35 backdrop-blur-2xl"
              : "bg-[#12051F]/88 border-[#B066FF]/25 backdrop-blur-xl"
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#FFD36A]/30 blur-md group-hover:bg-[#FFD36A]/50 transition" />
              <img
                src={COIN_URL}
                alt="$VIRAL"
                className="relative w-9 h-9 object-contain animate-float-slow"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="display-font text-base sm:text-lg font-bold text-white">
                <span className="text-gradient-gold">$VIRAL</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-white/75">App</span>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="px-3 py-2 text-sm font-semibold text-white/85 hover:text-white transition rounded-lg hover:bg-white/10"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <a
              href="https://t.me/Viral_App_Bot"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>
              Launch App
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-11 h-11 rounded-xl bg-[#1B0830]/95 border border-[#B066FF]/35 shadow-[0_0_24px_rgba(138,43,255,0.25)] flex items-center justify-center"
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`block w-5 h-0.5 bg-white transition ${open ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-5 h-0.5 bg-white transition ${open ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-0.5 bg-white transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden mt-3 rounded-3xl p-4 bg-[#10041D]/98 border border-[#B066FF]/40 backdrop-blur-2xl shadow-[0_18px_70px_rgba(0,0,0,0.72),0_0_45px_rgba(138,43,255,0.28)]">
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-base font-bold tracking-[-0.01em] text-white bg-white/[0.06] hover:bg-[#8A2BFF]/24 rounded-2xl border border-white/[0.07] transition shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://t.me/Viral_App_Bot"
                  target="_blank"
                  rel="noreferrer"
                  className="block btn-primary text-white text-base font-extrabold text-center px-5 py-4 rounded-2xl mt-2 shadow-[0_10px_35px_rgba(138,43,255,0.45)]"
                >
                  Launch App
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
