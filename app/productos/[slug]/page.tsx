'use client'

import { use, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProductBySlug, getRelatedProducts, getAllProducts } from '@/lib/products'
import { useCart } from '@/context/CartContext'
import ProductGrid from '@/components/ProductGrid'
import { formatPrice, getProductGradient } from '@/lib/utils'

interface Params {
  slug: string
}

export default function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = use(params)
  const product = getProductBySlug(slug)

  if (!product) notFound()

  const related = getRelatedProducts(product, 4)
  const gradient = getProductGradient(product.brand)

  return <ProductDetail product={product} related={related} gradient={gradient} />
}

function ProductDetail({ product, related, gradient }: {
  product: ReturnType<typeof getProductBySlug> & object,
  related: ReturnType<typeof getAllProducts>,
  gradient: string
}) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const [imgError, setImgError] = useState(false)
  const [quantity, setQuantity] = useState(1)

  if (!product) return null

  const hasImage = product.images.length > 0 && !imgError

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addItem(product as Parameters<typeof addItem>[0])
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-cream-muted mb-8">
          <Link href="/" className="hover:text-gold transition-colors">Inicio</Link>
          <span>/</span>
          <Link href="/productos" className="hover:text-gold transition-colors">Productos</Link>
          <span>/</span>
          <span className="text-cream truncate max-w-[200px]">{product.name}</span>
        </nav>

        {/* Product detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Image */}
          <div className={`relative aspect-square rounded-sm overflow-hidden bg-gradient-to-br ${gradient} border border-dark-border`}>
            {hasImage ? (
              <Image
                src={`/${product.images[0]}`}
                alt={product.name}
                fill
                className="object-cover"
                onError={() => setImgError(true)}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <svg className="w-32 h-32 text-gold opacity-30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 3v1H5v2l1 1v10a2 2 0 002 2h8a2 2 0 002-2V7l1-1V4h-4V3H9zm0 2h6v1H9V5zM7 8h10v9a1 1 0 01-1 1H8a1 1 0 01-1-1V8zm2 2v6h2v-6H9zm4 0v6h2v-6h-2z"/>
                </svg>
                <p className="text-gold opacity-50 text-lg font-serif mt-4">{product.brand}</p>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            {/* Brand + Category */}
            <div className="flex items-center gap-3 mb-4">
              <Link
                href={`/productos?marca=${encodeURIComponent(product.brand)}`}
                className="text-gold text-xs tracking-widest uppercase border border-gold px-3 py-1 rounded-sm hover:bg-gold hover:text-dark transition-all"
              >
                {product.brand}
              </Link>
              <Link
                href={`/productos?categoria=${encodeURIComponent(product.category)}`}
                className="text-cream-muted text-xs tracking-widest uppercase border border-dark-border px-3 py-1 rounded-sm hover:border-gold hover:text-gold transition-all"
              >
                {product.category}
              </Link>
            </div>

            {/* Name */}
            <h1 className="font-serif text-3xl md:text-4xl text-cream mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-dark-border" />
              <div className="w-1 h-1 rounded-full bg-gold" />
              <div className="h-px flex-1 bg-dark-border" />
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-gold font-bold text-4xl">{formatPrice(product.price)}</span>
              <span className="text-cream-muted text-sm ml-2">USD — precio único</span>
            </div>

            {/* Description */}
            <p className="text-cream-muted leading-relaxed mb-8 text-sm">
              {product.description}
            </p>

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-dark-border rounded-sm overflow-hidden">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 py-3 text-cream-muted hover:text-gold hover:bg-dark transition-colors"
                >
                  −
                </button>
                <span className="px-4 py-3 text-cream border-x border-dark-border min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-4 py-3 text-cream-muted hover:text-gold hover:bg-dark transition-colors"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`flex-1 py-3 px-6 font-semibold text-sm tracking-wider rounded-sm transition-all duration-200 ${
                  added
                    ? 'bg-green-600 text-white'
                    : 'bg-gold text-dark hover:bg-gold-light hover:scale-105 active:scale-95'
                }`}
              >
                {added ? '✓ Añadido al carrito' : 'Añadir al carrito'}
              </button>
            </div>

            {/* Tags */}
            {product.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {product.tags.map(tag => (
                  <span key={tag} className="text-cream-muted text-xs border border-dark-border px-2 py-1 rounded-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Features */}
            <div className="mt-8 pt-6 border-t border-dark-border grid grid-cols-2 gap-4">
              {[
                { icon: '🌿', label: 'Auténtico', desc: 'Ingredientes originales' },
                { icon: '📦', label: 'Envío rápido', desc: 'En toda la región' },
                { icon: '✓', label: 'Garantizado', desc: '100% original' },
                { icon: '💝', label: 'Regalo', desc: 'Empaque especial' },
              ].map(f => (
                <div key={f.label} className="flex items-start gap-2">
                  <span className="text-lg">{f.icon}</span>
                  <div>
                    <p className="text-cream text-xs font-semibold">{f.label}</p>
                    <p className="text-cream-muted text-xs">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <div className="mb-8">
              <h2 className="section-title">Productos Relacionados</h2>
              <div className="gold-divider" style={{ margin: '1rem 0 0' }} />
            </div>
            <ProductGrid products={related} />
          </div>
        )}
      </div>
    </div>
  )
}
