import { useState } from "react";
import { Reveal, SectionHeader } from "./Section";

const ITEMS: { q: string; a: string }[] = [
  { q: "What is $VIRAL App?", a: "$VIRAL App is a Telegram-based Web3 mutual promotion ecosystem where users promote bots, Mini Apps, channels, websites, tokens and digital projects." },
  { q: "What can I promote?", a: "Any digital resource: Telegram Mini Apps, bots, channels, websites, tokens, Web3 games, communities, apps, social pages and online services." },
  { q: "What is $VIRAL used for?", a: "$VIRAL is the utility fuel for promotion campaigns, visibility boosts, verified task rewards, referrals and other platform actions." },
  { q: "What is vVIRAL?", a: "vVIRAL is the internal balance used inside the platform before real $VIRAL distribution becomes available after BLUM bonding/migration. It is not an on-chain token." },
  { q: "How can I earn vVIRAL?", a: "By completing verified promotion tasks, inviting active users, and participating in the platform." },
  { q: "What is the starter bonus?", a: "New verified users receive a 100 vVIRAL starter bonus." },
  { q: "How does campaign escrow work?", a: "Campaign budgets are locked in escrow. Rewards are released to users only after their actions are verified." },
  { q: "How does anti-bot protection work?", a: "The platform applies anti-fraud checks, duplicate account detection, Telegram ID verification, wallet duplicate checks, suspicious referral detection and manual admin review. Fake actions are rejected." },
  { q: "How does the referral system work?", a: "Users receive 10% of the valid approved earnings of their invited users. Fake registrations and duplicates are not rewarded." },
  { q: "Is $VIRAL an investment?", a: "No. $VIRAL is a utility token for ecosystem activity, promotion and platform interaction. It is not financial advice, not an investment offer and does not guarantee profit, income or token price growth." },
  { q: "Can I connect my wallet?", a: "Yes. $VIRAL App supports real TonConnect wallet connection. You can connect Tonkeeper or other TON-compatible wallets and see your real TON balance." },
  { q: "When will real $VIRAL balance be shown?", a: "Real $VIRAL balance will appear only after the token exists on-chain, following BLUM bonding/migration." },
  { q: "Does the app ask for seed phrases?", a: "Never. $VIRAL App will never ask for your seed phrase or private keys." },
  { q: "How can I join the community?", a: "Join our Telegram Community at t.me/VIRAL_App_Community and follow us on X at x.com/VIRAL_ADVERTISE." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="FAQ"
            title={
              <>
                Frequently Asked{" "}
                <span className="text-gradient-purple">Questions</span>
              </>
            }
            subtitle="Short answers to the most common questions about $VIRAL App."
          />
        </Reveal>

        <div className="space-y-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.q} delay={i * 30}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left glass card-hover rounded-2xl p-5 group"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="display-font text-xs font-bold text-[#FFD36A] w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-bold text-white text-sm sm:text-base">{item.q}</h3>
                  </div>
                  <span
                    className={`w-7 h-7 shrink-0 rounded-full bg-gradient-to-br from-[#8A2BFF] to-[#B066FF] flex items-center justify-center text-white transition-transform ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 5v14M5 12h14" strokeLinecap="round" /></svg>
                  </span>
                </div>
                <div
                  className={`grid transition-all duration-300 ${
                    open === i ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-[#A9A3B8] leading-relaxed pl-9">{item.a}</p>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
