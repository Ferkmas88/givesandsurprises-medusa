import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import NewsletterForm from '@/components/NewsletterForm'
import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedProducts, getBrands } from '@/lib/products'

export default function HomePage() {
  const featured = getFeaturedProducts(8)
  const brands = getBrands()

  return (
    <>
      <Hero />

      {/* Categories Section — varied with real images */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <p className="text-rose text-xs tracking-[0.3em] uppercase mb-3 font-bold">Para cada ocasión</p>
          <h2 className="section-title">Categorías</h2>
          <div className="gold-divider" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Para Él', img: '/categories/para-el.jpg', href: '/productos?categoria=Para+Él' },
            { label: 'Para Ella', img: '/categories/para-ella.jpg', href: '/productos?categoria=Para+Ella' },
            { label: 'Unisex', img: '/categories/unisex.jpg', href: '/productos?categoria=Unisex' },
            { label: 'Para Niños', img: '/categories/kids.jpg', href: '/productos?categoria=Para+Niños' },
          ].map(cat => (
            <Link
              key={cat.label}
              href={cat.href}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={cat.img}
                alt={cat.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-bold text-lg uppercase tracking-wider">{cat.label}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products — alternating navy band */}
      <section className="bg-navy/5 border-y border-rose-mist py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-navy text-xs tracking-[0.3em] uppercase mb-3 font-bold">Selección Premium</p>
            <h2 className="section-title">Productos Destacados</h2>
            <div className="gold-divider" />
          </div>
          <ProductGrid products={featured} />
          <div className="text-center mt-10">
            <Link href="/productos" className="btn-navy">
              Ver todos los perfumes
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <p className="text-rose text-xs tracking-[0.3em] uppercase mb-3 font-bold">Marcas árabes auténticas</p>
          <h2 className="section-title">Nuestras Marcas</h2>
          <div className="gold-divider" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {brands.map((brand, i) => (
            <Link
              key={brand}
              href={`/productos?marca=${encodeURIComponent(brand)}`}
              className={`rounded-2xl p-5 text-center group transition-all duration-200 hover:scale-105 hover:shadow-md ${
                i % 2 === 0
                  ? 'bg-rose-mist border border-rose-soft hover:border-rose'
                  : 'bg-navy-mist border border-navy-soft/30 hover:border-navy'
              }`}
            >
              <div className={`text-3xl mb-2 ${i % 2 === 0 ? 'text-rose' : 'text-navy'}`}>♥</div>
              <span className={`text-xs font-bold tracking-wider uppercase ${
                i % 2 === 0 ? 'text-rose-deep group-hover:text-rose' : 'text-navy-deep group-hover:text-navy'
              }`}>
                {brand}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter — rose band */}
      <section className="bg-rose-mist py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-navy text-xs tracking-[0.3em] uppercase mb-3 font-bold">Mantente informado</p>
          <h2 className="section-title mb-4">Ofertas Exclusivas</h2>
          <p className="text-navy-deep mb-8">
            Suscríbete y recibe novedades, promociones exclusivas y recomendaciones de fragancias.
          </p>
          <NewsletterForm />
          <p className="text-navy-soft text-xs mt-3">Sin spam. Cancela cuando quieras.</p>
        </div>
      </section>
    </>
  )
}
