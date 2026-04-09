import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import NewsletterForm from '@/components/NewsletterForm'
import Link from 'next/link'
import { getFeaturedProducts, getBrands } from '@/lib/products'

export default function HomePage() {
  const featured = getFeaturedProducts(8)
  const brands = getBrands()

  return (
    <>
      <Hero />

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Selección Premium</p>
          <h2 className="section-title">Productos Destacados</h2>
          <div className="gold-divider" />
        </div>
        <ProductGrid products={featured} />
        <div className="text-center mt-10">
          <Link href="/productos" className="btn-outline-gold">
            Ver todos los perfumes
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Brands Section */}
      <section className="border-t border-dark-border bg-dark-card py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Marcas de Lujo</p>
            <h2 className="section-title">Nuestras Marcas</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {brands.map(brand => (
              <Link
                key={brand}
                href={`/productos?marca=${encodeURIComponent(brand)}`}
                className="bg-dark border border-dark-border hover:border-gold rounded-sm p-4 text-center group transition-all duration-200 hover:scale-105"
              >
                <div className="text-4xl mb-2">🫧</div>
                <span className="text-cream-muted group-hover:text-gold text-xs font-medium tracking-wider transition-colors">
                  {brand}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Para cada ocasión</p>
          <h2 className="section-title">Categorías</h2>
          <div className="gold-divider" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Para Él', icon: '♂', desc: 'Fragancias masculinas', href: '/productos?categoria=Para+Él' },
            { label: 'Para Ella', icon: '♀', desc: 'Fragancias femeninas', href: '/productos?categoria=Para+Ella' },
            { label: 'Unisex', icon: '⚧', desc: 'Para todos', href: '/productos?categoria=Unisex' },
            { label: 'Para Niños', icon: '⭐', desc: 'Fragancias infantiles', href: '/productos?categoria=Para+Niños' },
          ].map(cat => (
            <Link
              key={cat.label}
              href={cat.href}
              className="card-dark p-6 text-center group hover:scale-105 transition-all duration-200"
            >
              <div className="text-5xl mb-3">{cat.icon}</div>
              <h3 className="font-serif text-cream text-lg mb-1 group-hover:text-gold transition-colors">{cat.label}</h3>
              <p className="text-cream-muted text-xs">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-dark-border bg-dark-card py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Mantente informado</p>
          <h2 className="section-title mb-4">Ofertas Exclusivas</h2>
          <p className="text-cream-muted mb-8">
            Suscríbete y recibe las últimas novedades, promociones exclusivas y recomendaciones de fragancias.
          </p>
          <NewsletterForm />
          <p className="text-cream-muted text-xs mt-3 opacity-60">Sin spam. Cancela cuando quieras.</p>
        </div>
      </section>
    </>
  )
}
