import { getYamlData } from '@/lib/yaml'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { CurrentReading, RecommendedReading } from '@/types/reading'
import BookTooltip from '@/components/BookTooltip'

async function getData() {
  const currentReading = getYamlData('current_reading.yaml') as CurrentReading
  const recommendedReading = getYamlData('recommended_reading.yaml') as RecommendedReading
  const posts = await getAllPosts()
  
  return {
    currentReading,
    recommendedReading,
    posts: posts.slice(0, 3) // Just get the 3 most recent posts
  }
}

export default async function Home() {
  const { currentReading, recommendedReading, posts } = await getData()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 py-8">
      {/* First Column */}
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">ACRECITI</h1>
          <p><Link href="/cult" className="text-accent hover:text-accent-dim">cult</Link>.</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">RECENT</h3>
          <div className="space-y-4">
            {posts.map((post) => (
              <Link 
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="flex justify-between items-center hover:text-accent"
              >
                <span className="text-lg font-serif">{post.title}</span>
                <span className="text-accent-dim font-mono text-sm">
                  {new Date(post.date).toISOString().split('T')[0]}
                </span>
              </Link>
            ))}
            <Link href="/posts" className="text-accent hover:text-accent-dim mt-4 block">
              View All Posts →
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">ALL RESOURCES</h3>
          <p className="mb-2">books, media, recommendations, and other collected knowledge</p>
          <Link href="/resources" className="text-accent hover:text-accent-dim">
            View Resources →
          </Link>
        </div>
      </div>

      {/* Second Column */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">CURRENTLY READING</h3>
          <div className="space-y-2">
            {currentReading.map((book) => (
              <BookTooltip key={book.title} book={book} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">RECOMMENDED READING</h3>
          <div className="space-y-2">
            {recommendedReading.map((category) => 
              category.books.map((book) => (
                <BookTooltip key={book.title} book={book} />
              ))
            )}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">CONTACT</h3>
          <p className="mb-2">You can reach me through:</p>
          <div className="flex gap-4 flex-wrap">
            <a href="mailto:acreciti@acreciti.org" className="text-accent hover:text-accent-dim">Email(preferred)</a>
            <a href="https://github.com/acrecit" className="text-accent hover:text-accent-dim">GitHub</a>
            <a href="https://x.com/acreciti" className="text-accent hover:text-accent-dim">X</a>
            <a href="https://t.me/acreciti" className="text-accent hover:text-accent-dim">Telegram</a>
            <a href="https://discord.gg/DQ2jQcYn" className="text-accent hover:text-accent-dim">Link to Discord for my Minecraft Server!</a>
            {/* <a href="https://discord.gg/gfyFXyD2nv" className="text-accent hover:text-accent-dim">my discord server</a> */}
          </div>
        </div>
      </div>
    </div>
  )
}
