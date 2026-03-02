import type { PricingTier } from '@/types'
import PricingCard from '@/components/PricingCard'

interface PricingSectionProps {
  tiers: PricingTier[]
}

export default function PricingSection({ tiers }: PricingSectionProps) {
  if (tiers.length === 0) return null

  return (
    <section id="pricing" className="section-padding bg-dark-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-900 tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-dark-500 max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  )
}