import { Reveal, SectionHeader } from "./Section";

export default function VVIRAL() {
  return (
    <section id="vviral" className="relative py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Before Token Launch"
            title={
              <>
                <span className="text-gradient-purple">vVIRAL</span> — Internal balance{" "}
                <span className="text-white">before the real $VIRAL</span>
              </>
            }
            subtitle="Before real $VIRAL distribution becomes available after BLUM bonding/migration, the platform uses vVIRAL as an internal balance."
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Card 1 */}
          <Reveal>
            <div className="relative glass-strong rounded-2xl p-7 overflow-hidden h-full">
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#8A2BFF]/20 blur-3xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#38F8B0]/15 text-[#38F8B0] border border-[#38F8B0]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38F8B0] animate-pulse" />
                  STARTER BONUS
                </div>
                <h3 className="display-font text-3xl sm:text-4xl font-bold text-white mt-4">
                  <span className="text-gradient-gold">100 vVIRAL</span>
                </h3>
                <p className="text-[#A9A3B8] mt-2 text-sm sm:text-base">
                  New verified users receive a 100 vVIRAL starter bonus on first sign-up.
                  Start exploring campaigns immediately.
                </p>

                <div className="mt-6 space-y-2">
                  {[
                    "Awarded on verified registration",
                    "Usable across all platform actions",
                    "Refilled by completing tasks",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-2.5 text-sm">
                      <span className="text-[#38F8B0] mt-0.5">✓</span>
                      <span className="text-[#A9A3B8]">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal delay={150}>
            <div className="relative glass-strong rounded-2xl p-7 overflow-hidden h-full">
              <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#FFD36A]/15 blur-3xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#FFD36A]/15 text-[#FFD36A] border border-[#FFD36A]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD36A] animate-pulse" />
                  TOKEN LAUNCH
                </div>
                <h3 className="display-font text-3xl sm:text-4xl font-bold text-white mt-4">
                  Real <span className="text-gradient-purple">$VIRAL</span> coming soon
                </h3>
                <p className="text-[#A9A3B8] mt-2 text-sm sm:text-base">
                  The real $VIRAL claim/drop will be handled later through project wallet
                  rules — after BLUM bonding/migration is complete.
                </p>

                <div className="mt-6 space-y-2">
                  {[
                    "vVIRAL is not an on-chain token",
                    "Real $VIRAL appears post-migration",
                    "Distribution through official wallet rules",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-2.5 text-sm">
                      <span className="text-[#FFD36A] mt-0.5">◆</span>
                      <span className="text-[#A9A3B8]">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
