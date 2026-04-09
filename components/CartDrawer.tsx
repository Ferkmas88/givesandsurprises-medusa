'use client'

import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, closeDrawer, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-dark-card border-l border-dark-border z-50 transform transition-transform duration-300 flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-dark-border">
          <div>
            <h2 className="font-serif text-cream text-xl">Mi Carrito</h2>
            <p className="text-cream-muted text-xs mt-0.5">{totalItems} {totalItems === 1 ? 'artículo' : 'artículos'}</p>
          </div>
          <button
            onClick={closeDrawer}
            className="p-2 text-cream-muted hover:text-gold transition-colors"
            aria-label="Cerrar carrito"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg className="w-16 h-16 text-gold opacity-20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-cream-muted">Tu carrito está vacío</p>
              <Link
                href="/productos"
                onClick={closeDrawer}
                className="mt-4 text-gold text-sm underline hover:text-gold-light transition-colors"
              >
                Explorar productos
              </Link>
            </div>
          ) : (
            items.map(item => (
              <div key={item.product.id} className="flex gap-3 border-b border-dark-border pb-4">
                {/* Image placeholder */}
                <div className="w-16 h-16 bg-dark rounded-sm flex-shrink-0 flex items-center justify-center border border-dark-border">
                  <svg className="w-8 h-8 text-gold opacity-40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 3v1H5v2l1 1v10a2 2 0 002 2h8a2 2 0 002-2V7l1-1V4h-4V3H9z"/>
                  </svg>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-cream text-sm font-medium truncate">{item.product.name}</h4>
                  <p className="text-cream-muted text-xs mt-0.5">{item.product.brand}</p>
                  <p className="text-gold text-sm font-bold mt-1">{formatPrice(item.product.price)}</p>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-6 h-6 border border-dark-border text-cream-muted hover:text-gold hover:border-gold rounded-sm text-sm flex items-center justify-center transition-colors"
                    >
                      −
                    </button>
                    <span className="text-cream text-sm w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-6 h-6 border border-dark-border text-cream-muted hover:text-gold hover:border-gold rounded-sm text-sm flex items-center justify-center transition-colors"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="ml-2 text-red-400 hover:text-red-300 transition-colors"
                      aria-label="Eliminar"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-dark-border space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-cream-muted">Subtotal</span>
              <span className="text-gold font-bold text-lg">{formatPrice(totalPrice)}</span>
            </div>
            <Link
              href="/checkout"
              onClick={closeDrawer}
              className="btn-gold w-full justify-center text-center block py-3 text-sm tracking-wider"
            >
              Proceder al Pago
            </Link>
            <Link
              href="/carrito"
              onClick={closeDrawer}
              className="btn-outline-gold w-full justify-center text-center block py-3 text-sm tracking-wider"
            >
              Ver Carrito
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
