import { getYamlData } from '@/lib/yaml'
import Link from 'next/link'
import Image from 'next/image'
import { CurrentReading, RecommendedReading } from '@/types/reading'

export default async function ResourcesPage() {
  const currentReading = getYamlData('current_reading.yaml') as CurrentReading
  const recommendedReading = getYamlData('recommended_reading.yaml') as RecommendedReading

  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-serif mb-8 text-center">Resources</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">CURRENTLY READING</h2>
        <div className="space-y-2">
          {currentReading.map((book) => (
            <Link 
              key={book.title}
              href={`/books/${book.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="block hover:text-accent"
            >
              {book.title} by {book.author}
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">RECOMMENDED</h2>
        <div className="space-y-2">
          {recommendedReading.map((category) =>
            category.books.map((book) => (
              <Link
                key={book.title}
                href={`/books/${book.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="block hover:text-accent"
              >
                {book.title} by {book.author}
              </Link>
            ))
          )}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">BROWSERS</h2>
        <p className="mb-4">I&apos;ve used a few other browsers. Brave and Vivaldi are very nice.</p>
        <p className="mb-4">I also use Tor Browser for privacy when I need it.</p>
        <div className="flex gap-4 mb-4">
          <a href="https://www.torproject.org" className="hover:opacity-80">
            <Image 
              src="/assets/buttons/tor.gif" 
              alt="Tor" 
              width={88} 
              height={31}
            />
          </a>
        </div>
        <p>One day I plan to create my own browser, but I&apos;m not sure if I&apos;ll ever get around to it.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">OTHER TOOLS</h2>
        <p className="mb-4">
          For privacy and security, I use <a href="https://mullvad.net" className="text-accent hover:text-accent-dim">Mullvad VPN</a> for 
          torrenting and browsing the web, and <a href="https://bitwarden.com" className="text-accent hover:text-accent-dim">Bitwarden</a> for 
          password management.
        </p>
        <p>
          For entertainment, I have a home media server running <a href="https://jellyfin.org" className="text-accent hover:text-accent-dim">Jellyfin</a>. 
          If you haven't used it before, it's a great way to organize your media and stream it to your devices whilst not being beholden to 
          the whims of streaming services.
        </p>
      </section>
    </div>
  )
} 