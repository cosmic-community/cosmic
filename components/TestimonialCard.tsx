import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

// Changed: Helper to safely extract string value from Cosmic metafields
function toStr(val: unknown): string {
  if (val === null || val === undefined) return ''
  if (typeof val === 'string') return val
  if (typeof val === 'number') return String(val)
  if (typeof val === 'object' && 'value' in (val as Record<string, unknown>)) {
    return String((val as Record<string, unknown>).value ?? '')
  }
  return String(val)
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400' : 'text-dark-200'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const personName = toStr(testimonial.metadata?.person_name) || testimonial.title // Changed: safe string extraction
  const company = toStr(testimonial.metadata?.company) // Changed: safe string extraction
  const role = toStr(testimonial.metadata?.role) // Changed: safe string extraction
  const quote = toStr(testimonial.metadata?.quote) // Changed: safe string extraction
  const avatar = testimonial.metadata?.avatar
  const ratingRaw = testimonial.metadata?.rating // Changed: safely parse rating
  const rating = typeof ratingRaw === 'number' ? ratingRaw : (parseInt(toStr(ratingRaw), 10) || 5)

  return (
    <div className="bg-white border border-dark-100 rounded-2xl p-8 card-hover flex flex-col">
      {/* Rating */}
      <StarRating rating={rating} />

      {/* Quote */}
      <blockquote className="mt-5 mb-8 flex-1">
        <p className="text-dark-600 leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
      </blockquote>

      {/* Person */}
      <div className="flex items-center gap-4 pt-6 border-t border-dark-100">
        {avatar?.imgix_url ? (
          <img
            src={`${avatar.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
            alt={personName}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-dark-100"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg">
            {personName.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-dark-900 text-sm">{personName}</p>
          <p className="text-dark-400 text-xs">
            {role}
            {role && company ? ', ' : ''}
            {company}
          </p>
        </div>
      </div>
    </div>
  )
}