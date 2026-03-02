import Link from 'next/link'

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'Testimonials', href: '/#testimonials' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Team', href: '/#team' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: 'https://www.cosmicjs.com/docs' },
      { label: 'Cosmic CMS', href: 'https://www.cosmicjs.com' },
    ],
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15h2v-2h-2v2zm0-4h2V7h-2v6z" />
                </svg>
              </div>
              <span className="text-xl font-bold">Cosmic</span>
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed">
              Build something amazing with modern tools and a world-class content
              platform.
            </p>
          </div>

          {/* Link Groups */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-dark-200 uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-dark-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-dark-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">
            &copy; {currentYear} Cosmic. All rights reserved.
          </p>
          <p className="text-dark-500 text-sm">
            Powered by{' '}
            <a
              href="https://www.cosmicjs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              Cosmic
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}