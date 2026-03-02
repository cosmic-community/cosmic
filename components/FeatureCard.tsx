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

// Changed: Helper to safely extract string value from Cosmic metafields
// Select-dropdown metafields return {key, value} objects instead of plain strings
function toStr(val: unknown): string {
  if (val === null || val === undefined) return ''
  if (typeof val === 'string') return val
  if (typeof val === 'number') return String(val)
  if (typeof val === 'object' && 'value' in (val as Record<string, unknown>)) {
    return String((val as Record<string, unknown>).value ?? '')
  }
  return String(val)
}

function getIcon(icon?: unknown): string {
  const iconStr = toStr(icon) // Changed: handle {key,value} objects
  if (!iconStr) return '✨'
  const lower = iconStr.toLowerCase()
  return iconMap[lower] || iconStr
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const name = toStr(feature.metadata?.name) || feature.title // Changed: safe string extraction
  const description = toStr(feature.metadata?.description) // Changed: safe string extraction
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