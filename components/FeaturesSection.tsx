import type { Feature } from '@/types'
import FeatureCard from '@/components/FeatureCard'

interface FeaturesSectionProps {
  features: Feature[]
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  if (features.length === 0) return null

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-900 tracking-tight mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-dark-500 max-w-2xl mx-auto">
            Powerful features designed to help you build, launch, and scale
            modern products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}