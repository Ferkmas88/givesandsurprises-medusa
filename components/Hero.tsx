import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Diagonal split background — sage left, rose-mist right */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cream" />
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background: 'linear-gradient(115deg, #E4E8E2 0%, #E4E8E2 38%, #FFFFFF 38%, #FFFFFF 62%, #F5DCDF 62%, #F5DCDF 100%)',
          }}
        />
      </div>

      {/* Decorative confetti dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-12 left-24 w-2 h-2 rounded-full bg-rose opacity-60" />
        <div className="absolute top-32 left-40 w-1.5 h-1.5 rounded-full bg-navy opacity-50" />
        <div className="absolute top-16 right-32 w-2 h-2 rounded-full bg-rose opacity-50" />
        <div className="absolute bottom-32 left-16 w-2 h-2 rounded-full bg-navy opacity-40" />
        <div className="absolute bottom-20 right-40 w-1.5 h-1.5 rounded-full bg-rose opacity-60" />
        <div className="absolute top-1/2 left-12 w-1 h-1 rounded-full bg-navy opacity-50" />
        <div className="absolute top-1/3 right-16 w-1 h-1 rounded-full bg-rose opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-12">
        {/* Brand logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/brand/logo-pink-clean.png"
            alt="Gives & Surprises"
            width={420}
            height={260}
            priority
            className="w-full max-w-md h-auto"
          />
        </div>

        {/* Tagline */}
        <p className="text-navy text-xs sm:text-sm tracking-[0.4em] uppercase mb-4 font-bold">
          Perfumes Orientales · Cosméticos · Regalos
        </p>

        {/* Description */}
        <p className="text-navy-deep text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Sorprendé a quien querés. Fragancias árabes auténticas: Laffata,
          Afnan, Al Haramain, Bharara y más. Precio único y envío rápido.
        </p>

        {/* CTAs — rose primary + navy outline for variety */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/productos" className="btn-gold">
            Explorar Colección
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="/productos?categoria=Para+Ella" className="btn-outline-gold">
            Para Ella
          </Link>
        </div>

        {/* Stats — alternating rose / navy */}
        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
          {[
            { value: '213+', label: 'Fragancias', tone: 'rose' },
            { value: '12', label: 'Marcas', tone: 'navy' },
            { value: '$39.99', label: 'Precio único', tone: 'rose' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className={`font-black text-2xl ${s.tone === 'rose' ? 'text-rose' : 'text-navy'}`}>
                {s.value}
              </div>
              <div className="text-navy-soft text-[10px] tracking-widest uppercase mt-1 font-bold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-navy opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
