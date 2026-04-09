import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, #1a0e00 0%, #0d0800 40%, #0A0A0A 100%)',
        }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-left ornament */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }} />
        {/* Bottom-right ornament */}
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }} />
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }} />

        {/* Decorative lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px opacity-10"
          style={{ background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }} />
        <div className="absolute bottom-1/4 left-0 right-0 h-px opacity-10"
          style={{ background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Pre-title */}
        <p className="text-gold text-sm tracking-[0.4em] uppercase mb-6 font-sans">
          Colección Exclusiva
        </p>

        {/* Main title */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream mb-4 leading-tight">
          Gives &amp;
          <br />
          <span className="text-gold">Surprises</span>
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-xl sm:text-2xl text-cream-muted mb-4 italic">
          Perfumes Orientales Auténticos
        </p>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gold opacity-60" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
          <div className="h-px w-16 bg-gold opacity-60" />
        </div>

        {/* Description */}
        <p className="text-cream-muted text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
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
              <div className="text-gold font-serif text-2xl font-bold">{stat.value}</div>
              <div className="text-cream-muted text-xs tracking-wider uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gold opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
