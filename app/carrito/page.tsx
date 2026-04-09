'use client'

import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems, clearCart } = useCart()

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-4xl text-cream mb-2">Mi Carrito</h1>
          <p className="text-cream-muted">{totalItems} {totalItems === 1 ? 'artículo' : 'artículos'}</p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <svg className="w-24 h-24 text-gold opacity-20 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h2 className="font-serif text-2xl text-cream mb-4">Tu carrito está vacío</h2>
            <p className="text-cream-muted mb-8">Explora nuestra colección de perfumes orientales</p>
            <Link href="/productos" className="btn-gold">
              Explorar Productos
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items list */}
            <div className="lg:col-span-2 space-y-4">
              {items.map(item => (
                <div key={item.product.id} className="bg-dark-card border border-dark-border rounded-sm p-4 flex gap-4">
                  {/* Placeholder image */}
                  <div className="w-20 h-20 bg-dark rounded-sm flex-shrink-0 flex items-center justify-center border border-dark-border">
                    <svg className="w-10 h-10 text-gold opacity-30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 3v1H5v2l1 1v10a2 2 0 002 2h8a2 2 0 002-2V7l1-1V4h-4V3H9z"/>
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <h3 className="text-cream font-medium text-sm leading-tight">{item.product.name}</h3>
                        <p className="text-gold text-xs mt-0.5">{item.product.brand}</p>
                        <p className="text-cream-muted text-xs">{item.product.category}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-red-400 hover:text-red-300 transition-colors flex-shrink-0"
                        aria-label="Eliminar"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-dark-border rounded-sm overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-3 py-1.5 text-cream-muted hover:text-gold hover:bg-dark transition-colors text-sm"
                        >
                          −
                        </button>
                        <span className="px-3 py-1.5 text-cream border-x border-dark-border text-sm min-w-[2.5rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-3 py-1.5 text-cream-muted hover:text-gold hover:bg-dark transition-colors text-sm"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-gold font-bold">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Clear cart */}
              <div className="pt-2">
                <button
                  onClick={clearCart}
                  className="text-red-400 hover:text-red-300 text-sm underline transition-colors"
                >
                  Vaciar carrito
                </button>
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <div className="bg-dark-card border border-dark-border rounded-sm p-6 sticky top-20">
                <h2 className="font-serif text-cream text-xl mb-5">Resumen</h2>

                <div className="space-y-3 mb-5">
                  <div className="flex justify-between text-sm">
                    <span className="text-cream-muted">Subtotal ({totalItems} artículos)</span>
                    <span className="text-cream">{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-cream-muted">Envío</span>
                    <span className="text-gold text-xs">Se calcula al pagar</span>
                  </div>
                </div>

                <div className="border-t border-dark-border pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-cream font-semibold">Total estimado</span>
                    <span className="text-gold font-bold text-xl">{formatPrice(totalPrice)}</span>
                  </div>
                </div>

                <Link href="/checkout" className="btn-gold w-full justify-center text-center block py-3">
                  Proceder al Pago
                </Link>

                <Link href="/productos" className="block text-center text-gold text-sm mt-4 hover:text-gold-light transition-colors underline">
                  Continuar comprando
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
