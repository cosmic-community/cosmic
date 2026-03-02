import type { TeamMember } from '@/types'
import TeamCard from '@/components/TeamCard'

interface TeamSectionProps {
  members: TeamMember[]
}

export default function TeamSection({ members }: TeamSectionProps) {
  if (members.length === 0) return null

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-900 tracking-tight mb-4">
            Meet the People Behind Cosmic
          </h2>
          <p className="text-lg text-dark-500 max-w-2xl mx-auto">
            A talented group of individuals working together to build something
            extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}