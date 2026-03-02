import type { TeamMember } from '@/types'

interface TeamCardProps {
  member: TeamMember
}

export default function TeamCard({ member }: TeamCardProps) {
  const name = member.metadata?.name || member.title
  const role = member.metadata?.role || ''
  const bio = member.metadata?.bio || ''
  const headshot = member.metadata?.headshot
  const linkedinUrl = member.metadata?.linkedin_url
  const twitterUrl = member.metadata?.twitter_url

  return (
    <div className="group text-center bg-white border border-dark-100 rounded-2xl p-8 card-hover">
      {/* Avatar */}
      <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-dark-100 group-hover:ring-primary-200 transition-all">
        {headshot?.imgix_url ? (
          <img
            src={`${headshot.imgix_url}?w=240&h=240&fit=crop&auto=format,compress`}
            alt={name}
            width={120}
            height={120}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-3xl font-bold">
            {name.charAt(0)}
          </div>
        )}
      </div>

      <h3 className="text-lg font-bold text-dark-900 mb-1">{name}</h3>
      {role && (
        <p className="text-sm font-medium text-primary-600 mb-3">{role}</p>
      )}
      {bio && (
        <p className="text-dark-500 text-sm leading-relaxed mb-4 line-clamp-3">
          {bio}
        </p>
      )}

      {/* Social */}
      <div className="flex items-center justify-center gap-3">
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 bg-dark-100 hover:bg-primary-100 text-dark-500 hover:text-primary-600 rounded-full flex items-center justify-center transition-colors"
            aria-label={`${name} LinkedIn`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        )}
        {twitterUrl && (
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 bg-dark-100 hover:bg-primary-100 text-dark-500 hover:text-primary-600 rounded-full flex items-center justify-center transition-colors"
            aria-label={`${name} Twitter`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}