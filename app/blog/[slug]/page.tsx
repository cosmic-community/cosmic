// app/blog/[slug]/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { getBlogPostBySlug, getBlogPosts } from '@/lib/cosmic'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return { title: 'Post Not Found — Cosmic' }
  }

  return {
    title: `${post.title} — Cosmic Blog`,
    description: post.metadata?.excerpt || 'Read this article on the Cosmic blog.',
  }
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const publishedDate = post.metadata?.published_date
    ? new Date(post.metadata.published_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  const author = post.metadata?.author
  const featuredImage = post.metadata?.featured_image

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark-900 via-dark-800 to-primary-950 text-white section-padding pb-32">
        <div className="container-max max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-dark-300 hover:text-white transition-colors mb-8 text-sm font-medium"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-dark-300 text-sm">
            {author && (
              <div className="flex items-center gap-3">
                {author.metadata?.headshot?.imgix_url && (
                  <img
                    src={`${author.metadata.headshot.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                    alt={author.metadata?.name || author.title}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-500/30"
                  />
                )}
                <span className="font-medium text-white">
                  {author.metadata?.name || author.title}
                </span>
              </div>
            )}
            {publishedDate && (
              <>
                <span className="text-dark-500">·</span>
                <time>{publishedDate}</time>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding -mt-20">
        <div className="container-max max-w-4xl">
          {/* Featured Image */}
          {featuredImage?.imgix_url && (
            <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={`${featuredImage.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Post Body */}
          <article className="bg-white rounded-2xl shadow-lg border border-dark-100 p-8 sm:p-12">
            {post.metadata?.excerpt && (
              <p className="text-lg sm:text-xl text-dark-500 leading-relaxed mb-8 pb-8 border-b border-dark-100 italic">
                {post.metadata.excerpt}
              </p>
            )}

            {post.metadata?.content ? (
              <div
                className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-dark-900 prose-p:text-dark-600 prose-p:leading-relaxed prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-strong:text-dark-900"
                dangerouslySetInnerHTML={{ __html: post.metadata.content }}
              />
            ) : (
              <p className="text-dark-400">No content available for this post.</p>
            )}
          </article>

          {/* Back to blog CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              All Posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}