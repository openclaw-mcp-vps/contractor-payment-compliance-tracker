export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          1099 Compliance Made Simple
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Contractor Payments &amp;<br />
          <span className="text-[#58a6ff]">Stay 1099 Compliant</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Automatically monitor contractor payment thresholds, flag misclassification risks, and generate IRS-ready compliance reports — so tax season never catches you off guard.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $14/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No contracts. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '📋', title: '1099 Threshold Alerts', desc: 'Get notified the moment a contractor crosses the $600 IRS filing threshold.' },
            { icon: '🔍', title: 'Classification Checks', desc: 'Automated flags for contractor vs. employee misclassification risks.' },
            { icon: '📊', title: 'Compliance Reports', desc: 'One-click IRS-ready reports for every contractor, every year.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$14</div>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited contractors',
              'Real-time threshold alerts',
              'Misclassification risk flags',
              'Annual compliance reports',
              'CSV &amp; PDF export',
              'Email support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Who is this for?',
              a: 'Small businesses that pay 5 or more independent contractors and want to stay ahead of IRS 1099 filing requirements without manual spreadsheet tracking.',
            },
            {
              q: 'When does the $600 threshold matter?',
              a: 'The IRS requires you to file a 1099-NEC for any contractor paid $600 or more in a calendar year. We track every payment and alert you the moment that threshold is crossed.',
            },
            {
              q: 'Can I export data for my accountant?',
              a: 'Yes. You can export contractor payment summaries as CSV or PDF at any time, making it easy to hand off to your accountant or CPA at year-end.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Contractor Payment Compliance Tracker. All rights reserved.
      </footer>
    </main>
  )
}
