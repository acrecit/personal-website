import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="px-8 py-4 border-b border-white/20 mb-8 w-full">
      <div className="flex justify-between items-center w-full p-0">
        <Link href="/" className="text-white no-underline text-3xl ml-0">
          ACRECITI
        </Link>
      </div>
    </nav>
  )
}
