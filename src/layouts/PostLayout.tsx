export default function PostLayout({
    children,
    title,
    date,
  }: {
    children: React.ReactNode
    title: string
    date?: string
  }) {
    return (
      <article className="relative z-10">
        <div className="max-w-[650px] mx-auto px-6">
          <header className="py-12">
            {date && (
              <div className="text-center mb-8">
                <time className="text-accent-dim font-mono text-sm tracking-[0.2em] uppercase">
                  {date}
                </time>
              </div>
            )}
            <h1 className="font-serif text-4xl md:text-5xl leading-[1.2] tracking-wide text-center">
              {title}
            </h1>
          </header>
          
          <div className="mt-16">
            {children}
          </div>
        </div>
      </article>
    )
  }