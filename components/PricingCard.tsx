import type { PricingTier } from '@/types'

interface PricingCardProps {
  tier: PricingTier
}

export default function PricingCard({ tier }: PricingCardProps) {
  const planName = tier.metadata?.plan_name || tier.title
  const price = tier.metadata?.price || '$0'
  const billingPeriod = tier.metadata?.billing_period || '/month'
  const isFeatured = tier.metadata?.is_featured === true
  const ctaLabel = tier.metadata?.cta_label || 'Get Started'
  const featureListRaw = tier.metadata?.feature_list || ''

  // Parse feature list — assume newline or comma separated
  const features = featureListRaw
    .split(/[\n,]+/)
    .map((f) => f.trim())
    .filter(Boolean)

  return (
    <div
      className={`relative rounded-2xl p-8 card-hover ${
        isFeatured
          ? 'bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-2xl shadow-primary-600/30 ring-4 ring-primary-400/20 scale-105'
          : 'bg-white border border-dark-100 text-dark-900'
      }`}
    >
      {isFeatured && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-400 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
          Most Popular
        </span>
      )}

      <div className="mb-6">
        <h3
          className={`text-lg font-bold mb-2 ${
            isFeatured ? 'text-primary-100' : 'text-dark-500'
          }`}
        >
          {planName}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-extrabold">{price}</span>
          <span
            className={`text-sm ${
              isFeatured ? 'text-primary-200' : 'text-dark-400'
            }`}
          >
            {billingPeriod}
          </span>
        </div>
      </div>

      {features.length > 0 && (
        <ul className="space-y-3 mb-8">
          {features.map((feat, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <svg
                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                  isFeatured ? 'text-primary-200' : 'text-primary-500'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className={isFeatured ? 'text-primary-50' : 'text-dark-600'}>
                {feat}
              </span>
            </li>
          ))}
        </ul>
      )}

      <button
        className={`w-full py-3 px-6 rounded-full font-semibold text-sm transition-all ${
          isFeatured
            ? 'bg-white text-primary-700 hover:bg-primary-50 shadow-lg'
            : 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/25'
        }`}
      >
        {ctaLabel}
      </button>
    </div>
  )
}