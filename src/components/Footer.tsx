import React from 'react';

const officialLinks = [
  {
    label: 'Official Website',
    href: 'https://viral-app.org',
  },
  {
    label: 'Telegram Community',
    href: 'https://t.me/VIRAL_App_Community',
  },
  {
    label: 'Telegram Bot App',
    href: 'https://t.me/Viral_App_Bot',
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/VIRAL_ADVERTISE',
  },
];

export default function Footer() {
  return (
    <footer
      id="company-legal"
      className="relative overflow-hidden border-t border-white/10 bg-[#070711] px-4 py-10 text-white sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.20),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-purple-200 shadow-[0_0_30px_rgba(168,85,247,0.18)]">
          VIRAL — A BRICS L.t.d. Product
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section aria-labelledby="company-legal-title">
            <h2
              id="company-legal-title"
              className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              Company &amp; Legal Information
            </h2>

            <div className="space-y-4 text-sm leading-7 text-white/72 sm:text-base">
              <p>
                VIRAL is an official digital product developed and operated by{' '}
                <span className="font-semibold text-white">BRICS L.t.d.</span>
              </p>

              <p>
                BRICS L.t.d. is a company registered in the Marshall Islands under Company
                Registration No. <span className="font-semibold text-white">129263</span>.
              </p>

              <p>
                VIRAL is designed as a digital advertising, resource discovery and
                AI-assisted verification platform for Telegram communities, bots, Mini Apps,
                websites, channels and other digital resources.
              </p>

              <p>
                The platform provides tools for campaign creation, resource listing, partner
                discovery, AI-assisted resource analysis and transparent promotional activity
                inside the VIRAL ecosystem.
              </p>
            </div>
          </section>

          <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-purple-950/20 backdrop-blur sm:p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Official Company Details</h3>

            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-white/48">Company Legal Name</dt>
                <dd className="font-medium text-white">BRICS L.t.d.</dd>
              </div>

              <div>
                <dt className="text-white/48">Company Registration No.</dt>
                <dd className="font-medium text-white">129263</dd>
              </div>

              <div>
                <dt className="text-white/48">Jurisdiction</dt>
                <dd className="font-medium text-white">Marshall Islands</dd>
              </div>

              <div>
                <dt className="text-white/48">Product</dt>
                <dd className="font-medium text-white">VIRAL App / VIRAL Platform</dd>
              </div>
            </dl>

            <div className="mt-6 grid gap-2">
              {officialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/74 transition hover:border-purple-300/40 hover:bg-purple-500/10 hover:text-white"
                >
                  <span>{link.label}</span>
                  <span className="text-purple-200 transition group-hover:translate-x-0.5">↗</span>
                </a>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs leading-6 text-white/52 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 BRICS L.t.d. All Rights Reserved.</p>
          <p>
            VIRAL is an official product developed and operated by BRICS L.t.d., registered in
            the Marshall Islands under Company Registration No. 129263.
          </p>
        </div>
      </div>
    </footer>
  );
}
