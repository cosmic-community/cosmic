import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-primary-950">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-primary-500/20 text-primary-300 text-sm font-semibold rounded-full mb-8 animate-fade-in">
            🚀 The Modern Product Platform
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8 animate-slide-up">
            Build Something{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-200">
              Amazing
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-dark-300 leading-relaxed max-w-2xl mx-auto mb-12 animate-slide-up">
            Cosmic gives your team the tools to launch, scale, and iterate on
            modern products faster than ever before. From idea to production in
            record time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <Link
              href="/#pricing"
              className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-500 transition-all shadow-xl shadow-primary-600/30 text-base"
            >
              Get Started Free
            </Link>
            <Link
              href="/blog"
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10 text-base"
            >
              Read Our Blog →
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center animate-fade-in">
          {[
            { value: '10K+', label: 'Users' },
            { value: '99.9%', label: 'Uptime' },
            { value: '150+', label: 'Integrations' },
            { value: '24/7', label: 'Support' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-dark-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}