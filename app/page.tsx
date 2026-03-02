import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import PricingSection from '@/components/PricingSection'
import TeamSection from '@/components/TeamSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import BlogSection from '@/components/BlogSection'
import {
  getFeatures,
  getPricingTiers,
  getTeamMembers,
  getBlogPosts,
  getTestimonials,
} from '@/lib/cosmic'

export default async function HomePage() {
  const [features, pricingTiers, teamMembers, blogPosts, testimonials] =
    await Promise.all([
      getFeatures(),
      getPricingTiers(),
      getTeamMembers(),
      getBlogPosts(),
      getTestimonials(),
    ])

  return (
    <>
      <HeroSection />
      <FeaturesSection features={features} />
      <PricingSection tiers={pricingTiers} />
      <TestimonialsSection testimonials={testimonials} />
      <TeamSection members={teamMembers} />
      <BlogSection posts={blogPosts.slice(0, 3)} />
    </>
  )
}