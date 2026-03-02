import type { Metadata } from 'next'
import { getBlogPosts } from '@/lib/cosmic'
import BlogCard from '@/components/BlogCard'

export const metadata: Metadata = {
  title: 'Blog — Cosmic',
  description:
    'Read the latest articles, insights, and updates from the Cosmic team.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark-900 via-dark-800 to-primary-950 text-white section-padding">
        <div className="container-max text-center">
          <span className="inline-block px-4 py-1.5 bg-primary-500/20 text-primary-300 text-sm font-semibold rounded-full mb-6">
            Our Blog
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Insights &amp; Updates
          </h1>
          <p className="text-lg sm:text-xl text-dark-300 max-w-2xl mx-auto">
            Stories, tips, and guides from the Cosmic team to help you build
            better products.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="section-padding">
        <div className="container-max">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-dark-400 text-lg">
                No blog posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}