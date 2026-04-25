import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient — soft satin cream */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, #FFF6F0 0%, #FAF3EA 50%, #F5E4DC 100%)',
        }}
      />

      {/* Decorative elements — coral blooms */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, #F5C8C8 0%, transparent 70%)' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, #E8919A 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #F5C8C8 0%, transparent 70%)' }} />

        {/* Decorative lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px opacity-40"
          style={{ background: 'linear-gradient(to right, transparent, #E8919A, transparent)' }} />
        <div className="absolute bottom-1/4 left-0 right-0 h-px opacity-40"
          style={{ background: 'linear-gradient(to right, transparent, #E8919A, transparent)' }} />

        {/* Floating gift box emojis as motif */}
        <div className="absolute top-32 right-20 text-5xl opacity-20 rotate-12">🎁</div>
        <div className="absolute bottom-40 left-16 text-5xl opacity-20 -rotate-12">🎀</div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Pre-title */}
        <p className="text-coral-deep text-sm tracking-[0.4em] uppercase mb-6 font-sans">
          Colección Exclusiva
        </p>

        {/* Brand wordmark — script + uppercase */}
        <h1 className="mb-4 leading-tight">
          <span className="brand-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl block">
            give &amp;
          </span>
          <span className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-olive tracking-[0.15em] uppercase">
            Surprises
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-xl sm:text-2xl text-olive-muted mb-4 italic">
          Perfumes Orientales Auténticos
        </p>

        {/* Coral divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-coral opacity-70" />
          <div className="w-2 h-2 rounded-full bg-coral" />
          <div className="h-px w-16 bg-coral opacity-70" />
        </div>

        {/* Description */}
        <p className="text-olive-muted text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Descubre nuestra colección de fragancias árabes y orientales.
          Marcas exclusivas como Laffata, Afnan, Al Haramain, Bharara y más.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/productos"
            className="btn-gold text-base px-8 py-4 font-sans tracking-wider"
          >
            Explorar Colección
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/productos?categoria=Para+Ella"
            className="btn-outline-gold text-base px-8 py-4 font-sans tracking-wider"
          >
            Para Ella
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-sm mx-auto">
          {[
            { value: '213+', label: 'Fragancias' },
            { value: '12', label: 'Marcas' },
            { value: '$39.99', label: 'Precio único' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-coral-deep font-serif text-2xl font-bold">{stat.value}</div>
              <div className="text-olive-muted text-xs tracking-wider uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-coral opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
