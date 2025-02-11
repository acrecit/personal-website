export default function BookLayout({
    children,
    title,
    author,
  }: {
    children: React.ReactNode
    title: string
    author: string
  }) {
    return (
      <article className="max-w-3xl mx-auto px-8 py-12">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-serif mb-4">{title}</h1>
          <p className="text-accent-dim font-mono">{author}</p>
        </header>
        <div className="post-content">
          {children}
        </div>
      </article>
    )
  }