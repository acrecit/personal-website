import Link from 'next/link'
import { Book } from '@/types/reading'

export default function BookTooltip({ book }: { book: Book }) {
  return (
    <div className="group relative">
      <Link 
        href={`/books/${book.title.toLowerCase().replace(/\s+/g, '-')}`}
        className="hover:text-accent"
      >
        {book.title} by {book.author}
      </Link>
      <div className="invisible group-hover:visible absolute right-full top-1/2 -translate-y-1/2 mr-2 p-3 w-40 
        bg-background border border-accent-dim rounded shadow-lg z-50 text-sm whitespace-pre-wrap
        md:w-[160px] md:right-full md:left-auto md:top-1/2 md:-translate-y-1/2
        sm:left-0 sm:right-auto sm:top-full sm:translate-y-0 sm:mt-1">
        {book.notes || book.why}
      </div>
    </div>
  )
} 