import type { BlogPost } from '@/types'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'

interface BlogSectionProps {
  posts: BlogPost[]
}

export default function BlogSection({ posts }: BlogSectionProps) {
  if (posts.length === 0) return null

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4">
            Blog
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-900 tracking-tight mb-4">
            Latest from the Blog
          </h2>
          <p className="text-lg text-dark-500 max-w-2xl mx-auto">
            Insights, tutorials, and updates from our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 bg-dark-900 text-white rounded-full font-semibold hover:bg-dark-800 transition-colors text-sm"
          >
            View All Posts
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
          </Link>
        </div>
      </div>
    </section>
  )
}