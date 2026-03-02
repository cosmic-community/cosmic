import type { Testimonial } from '@/types'
import TestimonialCard from '@/components/TestimonialCard'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  if (testimonials.length === 0) return null

  return (
    <section id="testimonials" className="section-padding bg-dark-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-900 tracking-tight mb-4">
            Loved by Teams Everywhere
          </h2>
          <p className="text-lg text-dark-500 max-w-2xl mx-auto">
            See what our customers have to say about building with Cosmic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}