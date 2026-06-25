import { Reveal, SectionHeader } from "./Section";

const PHASES = [
  {
    phase: "Phase 1",
    title: "App Foundation",
    status: "Done",
    items: ["Telegram Mini App", "Login & profiles", "Admin access", "Basic vVIRAL balance"],
  },
  {
    phase: "Phase 2",
    title: "TonConnect",
    status: "Done",
    items: ["Real TON wallet connection", "Wallet sync", "Real TON balance", "Wallet diagnostics"],
  },
  {
    phase: "Phase 3",
    title: "Promotion Engine",
    status: "Live",
    items: ["Add resources", "Create campaigns", "Earn tasks", "Escrow + rewards ledger"],
  },
  {
    phase: "Phase 4",
    title: "Anti-Fraud & Referrals",
    status: "In Progress",
    items: ["Risk scoring", "Referral rewards", "Suspicious activity detection", "Quality ranking"],
  },
  {
    phase: "Phase 5",
    title: "$VIRAL Token Expansion",
    status: "Upcoming",
    items: ["BLUM launch", "Bonding / migration", "Real $VIRAL claim/drop", "DEX & wallet visibility"],
  },
];

const STATUS_STYLES: Record<string, string> = {
  "Done": "bg-[#38F8B0]/15 text-[#38F8B0] border-[#38F8B0]/30",
  "Live": "bg-[#FFD36A]/15 text-[#FFD36A] border-[#FFD36A]/30",
  "In Progress": "bg-[#B066FF]/15 text-[#B066FF] border-[#B066FF]/30",
  "Upcoming": "bg-white/5 text-[#A9A3B8] border-white/15",
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Roadmap"
            title={
              <>
                The path to a{" "}
                <span className="text-gradient-gold">global $VIRAL ecosystem</span>
              </>
            }
            subtitle="Five phases from app foundation to full $VIRAL token expansion."
          />
        </Reveal>

        <div className="relative">
          {/* Vertical/horizontal line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-[#8A2BFF] via-[#FFD36A] to-[#B066FF] opacity-30" />

          <div className="grid lg:grid-cols-5 gap-4">
            {PHASES.map((p, i) => (
              <Reveal key={p.phase} delay={i * 100}>
                <div className="relative">
                  {/* dot */}
                  <div className="hidden lg:flex absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#FFD36A] to-[#8A2BFF] shadow-[0_0_15px_#B066FF] items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  <div className="mt-8 glass card-hover rounded-2xl p-5 h-full">
                    <div className="flex items-center justify-between mb-3">
                      <span className="display-font text-xs uppercase tracking-widest text-gradient-purple font-bold">
                        {p.phase}
                      </span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${STATUS_STYLES[p.status]}`}>
                        {p.status}
                      </span>
                    </div>
                    <h3 className="display-font text-lg font-bold text-white mb-3">{p.title}</h3>
                    <ul className="space-y-1.5">
                      {p.items.map((it) => (
                        <li key={it} className="text-xs text-[#A9A3B8] flex items-start gap-2">
                          <span className="text-[#B066FF] mt-0.5">▸</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
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
