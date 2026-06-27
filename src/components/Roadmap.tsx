import { Reveal, SectionHeader } from "./Section";

interface RoadmapItem {
  text: string;
  done: boolean;
}

interface Phase {
  phase: string;
  title: string;
  status: string;
  items: RoadmapItem[];
}

const PHASES: Phase[] = [
  {
    phase: "Phase 1",
    title: "App Foundation",
    status: "Done",
    items: [
      { text: "Telegram Mini App", done: true },
      { text: "Login & profiles", done: true },
      { text: "Admin access", done: true },
      { text: "Basic vVIRAL balance", done: true },
    ],
  },
  {
    phase: "Phase 2",
    title: "TonConnect",
    status: "Done",
    items: [
      { text: "Real TON wallet connection", done: true },
      { text: "Wallet sync", done: true },
      { text: "Real TON balance", done: true },
      { text: "Wallet diagnostics", done: true },
    ],
  },
  {
    phase: "Phase 3",
    title: "Promotion Engine",
    status: "Done",
    items: [
      { text: "Add resources", done: true },
      { text: "Create campaigns", done: true },
      { text: "Earn tasks", done: true },
      { text: "Escrow + rewards ledger", done: true },
    ],
  },
  {
    phase: "Phase 4",
    title: "Anti-Fraud & Referrals",
    status: "Done",
    items: [
      { text: "Risk scoring", done: true },
      { text: "Referral rewards", done: true },
      { text: "Suspicious activity detection", done: true },
      { text: "Quality ranking", done: true },
      { text: "Google AI Co-pilot checker", done: true },
    ],
  },
  {
    phase: "Phase 5",
    title: "$VIRAL Token Expansion",
    status: "In Progress",
    items: [
      { text: "BLUM launch", done: true },
      { text: "Bonding / migration", done: false },
      { text: "Real $VIRAL claim/drop", done: false },
      { text: "DEX & wallet visibility", done: false },
    ],
  },
  {
    phase: "Phase 6",
    title: "Blockchain & CEX",
    status: "Upcoming",
    items: [
      { text: "Development escrow smart contract", done: false },
      { text: "Full migration on Blockchain", done: false },
      { text: "Cooperation with CEX", done: false },
    ],
  },
];

const STATUS_STYLES: Record<string, string> = {
  "Done": "bg-[#38F8B0]/15 text-[#38F8B0] border-[#38F8B0]/30",
  "In Progress": "bg-[#FFD36A]/15 text-[#FFD36A] border-[#FFD36A]/30",
  "Upcoming": "bg-[#B066FF]/15 text-[#B066FF] border-[#B066FF]/30",
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
            subtitle="Six phases from app foundation to full $VIRAL token expansion."
          />
        </Reveal>

        <div className="relative">
          {/* Vertical/horizontal line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-[#8A2BFF] via-[#FFD36A] to-[#B066FF] opacity-30" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {PHASES.map((p, i) => (
              <Reveal key={p.phase} delay={i * 100}>
                <div className="relative">
                  {/* dot */}
                  <div className="hidden xl:flex absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#FFD36A] to-[#8A2BFF] shadow-[0_0_15px_#B066FF] items-center justify-center">
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
                        <li
                          key={it.text}
                          className={`text-xs flex items-start gap-2 ${
                            it.done ? "text-[#38F8B0]" : "text-[#A9A3B8]"
                          }`}
                        >
                          <span className="mt-0.5">
                            {it.done ? (
                              <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8.5L6.5 12L13 4" stroke="#38F8B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            ) : (
                              <span className="text-[#B066FF]">▸</span>
                            )}
                          </span>
                          <span>{it.text}</span>
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
