import { Reveal, SectionHeader } from "./Section";

export default function Referrals() {
  return (
    <section id="referrals" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Referral System"
            title={
              <>
                <span className="text-white">Invite Active Users.</span>{" "}
                <span className="text-gradient-gold">Earn from Real Activity.</span>
              </>
            }
            subtitle="Users receive 10% of the valid approved earnings of their invited users. Rewards are not paid for fake registrations or duplicate accounts."
          />
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left: 10% visual */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative glass-strong rounded-3xl p-8 sm:p-10 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#FFD36A]/15 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#8A2BFF]/20 blur-3xl" />

                <div className="relative text-center">
                  <div className="text-xs uppercase tracking-[0.25em] text-[#A9A3B8] mb-2">
                    Earn from invitees
                  </div>
                  <div className="display-font text-7xl sm:text-8xl font-black text-gradient-gold gold-glow-text leading-none">
                    10%
                  </div>
                  <div className="display-font text-lg text-white mt-3">
                    of valid approved earnings
                  </div>
                  <p className="text-sm text-[#A9A3B8] mt-3 max-w-sm mx-auto">
                    Build your network. Only real, verified earnings count toward your
                    referral rewards.
                  </p>

                  {/* Mini network diagram */}
                  <div className="mt-8 flex justify-center gap-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-full bg-gradient-to-r from-[#8A2BFF] to-[#FFD36A]"
                        style={{
                          animation: `pulseGlow 2s ease-in-out infinite`,
                          animationDelay: `${i * 0.2}s`,
                          boxShadow: "0 0 12px #B066FF",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: feature list */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
            {[
              { icon: "🔗", title: "Unique Referral Links", text: "Each user gets a personal invite link." },
              { icon: "👤", title: "Active Referrals Only", text: "Only verified users contribute to rewards." },
              { icon: "💰", title: "10% from Valid Earnings", text: "Earn from real, approved activity." },
              { icon: "🛡️", title: "Anti-Fraud Protection", text: "Fake referrals are rejected automatically." },
              { icon: "🌐", title: "Network Growth", text: "Build a layered, engaged community." },
              { icon: "⚡", title: "Viral Power", text: "Reputation score earned by your network." },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="glass card-hover rounded-xl p-4 flex items-start gap-3 h-full">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-[#8A2BFF]/20 to-[#FFD36A]/20 flex items-center justify-center text-lg">
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
