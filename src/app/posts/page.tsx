import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'

export default async function PostsPage() {
  const posts = await getAllPosts()
  
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-serif mb-12 text-center">Posts</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link 
            href={`/posts/${post.slug}`} 
            key={post.slug}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 hover:text-accent"
          >
            <span className="text-lg font-serif break-words">{post.title}</span>
            <span className="text-accent-dim font-mono text-sm shrink-0">
              {new Date(post.date).toISOString().split('T')[0]}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
} 