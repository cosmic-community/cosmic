import type { BlogPost } from '@/types'
import Link from 'next/link'

interface BlogCardProps {
  post: BlogPost
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

export default function BlogCard({ post }: BlogCardProps) {
  const excerpt = toStr(post.metadata?.excerpt) // Changed: safe string extraction
  const featuredImage = post.metadata?.featured_image
  const author = post.metadata?.author
  const publishedDate = toStr(post.metadata?.published_date) // Changed: safe string extraction

  const formattedDate = publishedDate
    ? new Date(publishedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : null

  // Changed: safely extract author name as string
  const authorName = author
    ? toStr((author as Record<string, unknown>).metadata
        ? ((author as Record<string, unknown>).metadata as Record<string, unknown>)?.name
        : undefined) || toStr((author as Record<string, unknown>).title)
    : ''

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white border border-dark-100 rounded-2xl overflow-hidden card-hover"
    >
      {/* Image */}
      <div className="aspect-video overflow-hidden bg-dark-100">
        {featuredImage?.imgix_url ? (
          <img
            src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={post.title}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-primary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-3">
          {author && (
            <div className="flex items-center gap-2">
              {(author as Record<string, unknown>).metadata &&
                ((author as Record<string, unknown>).metadata as Record<string, unknown>)?.headshot &&
                (((author as Record<string, unknown>).metadata as Record<string, unknown>)?.headshot as Record<string, unknown>)?.imgix_url && (
                <img
                  src={`${(((author as Record<string, unknown>).metadata as Record<string, unknown>)?.headshot as Record<string, unknown>)?.imgix_url}?w=48&h=48&fit=crop&auto=format,compress`}
                  alt={authorName}
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded-full object-cover"
                />
              )}
              <span className="text-xs font-medium text-dark-500">
                {authorName}
              </span>
            </div>
          )}
          {formattedDate && (
            <>
              {author && <span className="text-dark-300 text-xs">·</span>}
              <time className="text-xs text-dark-400">{formattedDate}</time>
            </>
          )}
        </div>

        <h3 className="text-lg font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
          {post.title}
        </h3>

        {excerpt && (
          <p className="text-dark-500 text-sm leading-relaxed line-clamp-2">
            {excerpt}
          </p>
        )}

        <span className="inline-flex items-center gap-1 text-primary-600 text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
          Read More
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </Link>
  )
}