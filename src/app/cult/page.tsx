import Image from 'next/image'

export default function CultPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <Image 
        src="/assets/images/cult-bg.png"
        alt="Cult background"
        fill
        className="object-cover opacity-30"
        priority
      />
      <div className="relative z-10 text-center">
        <h1 className="font-fraktur text-6xl mb-4">ACRECITI</h1>
        <p className="font-mono text-accent-dim">coming soon</p>
      </div>
    </div>
  )
} 