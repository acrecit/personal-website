import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import './globals.css'

export const metadata: Metadata = {
  title: 'acreciti',
  description: 'a site/blog for things I find interesting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}