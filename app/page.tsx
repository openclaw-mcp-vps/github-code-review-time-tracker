export default function Home() {
  const faqs = [
    {
      q: 'How does it connect to GitHub?',
      a: 'You authorize via GitHub OAuth. We read PR and review data from your repositories — no write access required.'
    },
    {
      q: 'What metrics does it track?',
      a: 'Time-to-first-review, time-to-merge, reviewer workload distribution, bottleneck PRs, and weekly trends per team.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel from your billing portal at any time. No contracts, no questions asked.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For Engineering Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track how long code reviews{' '}
          <span className="text-[#58a6ff]">actually take</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your GitHub repos and instantly see review bottlenecks, reviewer workload, and time-to-merge patterns — so you can ship faster.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $9/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required to connect. Cancel anytime.</p>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 gap-4 border border-[#30363d] rounded-xl bg-[#161b22] p-6">
          {[
            { value: '4.2x', label: 'Faster review cycles' },
            { value: '89%', label: 'Bottlenecks identified' },
            { value: '< 2 min', label: 'Setup time' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-[#58a6ff]">{s.value}</div>
              <div className="text-xs text-[#6e7681] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-center text-2xl font-bold text-white mb-8">Simple pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl bg-[#161b22] p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#6e7681] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited repositories',
              'Full PR review analytics',
              'Reviewer workload reports',
              'Weekly email digests',
              'GitHub OAuth — read-only',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get started — $9/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-center text-2xl font-bold text-white mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="border border-[#30363d] rounded-lg bg-[#161b22] p-5">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} GitHub Code Review Time Tracker. All rights reserved.
      </footer>
    </main>
  )
}
