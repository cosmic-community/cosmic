import type { Feature } from '@/types'

interface FeatureCardProps {
  feature: Feature
}

const iconMap: Record<string, string> = {
  zap: '⚡',
  shield: '🛡️',
  code: '💻',
  rocket: '🚀',
  globe: '🌍',
  chart: '📊',
  lock: '🔒',
  star: '⭐',
  heart: '❤️',
  bolt: '🔥',
  cloud: '☁️',
  users: '👥',
}

function getIcon(icon?: string): string {
  if (!icon) return '✨'
  const lower = icon.toLowerCase()
  return iconMap[lower] || icon
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const name = feature.metadata?.name || feature.title
  const description = feature.metadata?.description || ''
  const icon = getIcon(feature.metadata?.icon)

  return (
    <div className="group relative bg-white border border-dark-100 rounded-2xl p-8 card-hover">
      {/* Gradient accent on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative">
        <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-primary-200 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-dark-900 mb-3">{name}</h3>
        <p className="text-dark-500 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}