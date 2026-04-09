'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { Product } from '@/context/CartContext'
import { formatPrice, getProductGradient } from '@/lib/utils'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const [imgError, setImgError] = useState(false)

  const gradient = getProductGradient(product.brand)
  const hasImage = product.images.length > 0 && !imgError

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault()
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Link href={`/productos/${product.slug}`} className="group block">
      <div className="card-dark overflow-hidden h-full flex flex-col">
        {/* Image */}
        <div className={`relative aspect-square overflow-hidden bg-gradient-to-br ${gradient}`}>
          {hasImage ? (
            <Image
              src={`/${product.images[0]}`}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImgError(true)}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Decorative bottle icon */}
              <svg className="w-16 h-16 text-gold opacity-40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 3v1H5v2l1 1v10a2 2 0 002 2h8a2 2 0 002-2V7l1-1V4h-4V3H9zm0 2h6v1H9V5zM7 8h10v9a1 1 0 01-1 1H8a1 1 0 01-1-1V8zm2 2v6h2v-6H9zm4 0v6h2v-6h-2z"/>
              </svg>
              <span className="text-gold opacity-60 text-xs mt-2 tracking-widest uppercase">{product.brand}</span>
            </div>
          )}

          {/* Brand badge */}
          <div className="absolute top-2 left-2">
            <span className="bg-dark/80 backdrop-blur-sm text-gold text-xs px-2 py-1 rounded-sm tracking-wider">
              {product.brand}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-4 flex flex-col flex-1">
          <p className="text-cream-muted text-xs tracking-widest uppercase mb-1">{product.category}</p>
          <h3 className="font-serif text-cream text-sm font-medium leading-tight mb-3 flex-1 line-clamp-2">
            {product.name}
          </h3>

          <div className="flex items-center justify-between gap-2 mt-auto">
            <span className="text-gold font-bold text-lg">{formatPrice(product.price)}</span>
            <button
              onClick={handleAddToCart}
              className={`text-xs font-semibold px-3 py-2 rounded-sm transition-all duration-200 ${
                added
                  ? 'bg-green-600 text-white scale-95'
                  : 'bg-gold text-dark hover:bg-gold-light hover:scale-105 active:scale-95'
              }`}
            >
              {added ? '✓ Añadido' : '+ Carrito'}
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
