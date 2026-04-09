'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function CheckoutPage() {
  const { items, totalPrice, totalItems } = useCart()
  const [step, setStep] = useState<'info' | 'payment'>('info')

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const isInfoComplete = form.name && form.email && form.phone && form.address && form.city

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-8">
          <Link href="/carrito" className="text-gold text-sm flex items-center gap-2 mb-4 hover:text-gold-light transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al carrito
          </Link>
          <h1 className="font-serif text-4xl text-cream">Finalizar Compra</h1>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-cream-muted mb-6">No hay artículos en tu carrito.</p>
            <Link href="/productos" className="btn-gold">Explorar Productos</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Forms */}
            <div className="lg:col-span-2 space-y-6">
              {/* Steps */}
              <div className="flex items-center gap-4 mb-2">
                {[
                  { key: 'info', label: '1. Información' },
                  { key: 'payment', label: '2. Pago' },
                ].map(s => (
                  <button
                    key={s.key}
                    onClick={() => s.key === 'payment' && isInfoComplete ? setStep('payment') : s.key === 'info' ? setStep('info') : null}
                    className={`text-sm font-medium pb-1 border-b-2 transition-colors ${
                      step === s.key
                        ? 'border-gold text-gold'
                        : 'border-transparent text-cream-muted hover:text-cream'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Step 1: Contact info */}
              {step === 'info' && (
                <div className="bg-dark-card border border-dark-border rounded-sm p-6">
                  <h2 className="font-serif text-cream text-xl mb-5">Información de Contacto</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: 'name', label: 'Nombre completo', placeholder: 'Juan García', span: 2 },
                      { name: 'email', label: 'Email', placeholder: 'tu@email.com', type: 'email' },
                      { name: 'phone', label: 'Teléfono / WhatsApp', placeholder: '+1 502 555 0000', type: 'tel' },
                      { name: 'address', label: 'Dirección', placeholder: '123 Main St', span: 2 },
                      { name: 'city', label: 'Ciudad', placeholder: 'Louisville' },
                      { name: 'zip', label: 'Código postal', placeholder: '40201' },
                    ].map(field => (
                      <div key={field.name} className={field.span === 2 ? 'sm:col-span-2' : ''}>
                        <label className="block text-cream-muted text-xs mb-1.5 tracking-wider uppercase">
                          {field.label}
                        </label>
                        <input
                          type={field.type || 'text'}
                          name={field.name}
                          value={form[field.name as keyof typeof form]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="w-full bg-dark border border-dark-border text-cream placeholder-cream-muted/50 px-4 py-2.5 rounded-sm focus:outline-none focus:border-gold transition-colors text-sm"
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setStep('payment')}
                    disabled={!isInfoComplete}
                    className={`mt-6 w-full py-3 font-semibold text-sm tracking-wider rounded-sm transition-all duration-200 ${
                      isInfoComplete
                        ? 'bg-gold text-dark hover:bg-gold-light hover:scale-[1.02]'
                        : 'bg-dark-border text-cream-muted cursor-not-allowed'
                    }`}
                  >
                    Continuar al Pago →
                  </button>
                </div>
              )}

              {/* Step 2: Payment */}
              {step === 'payment' && (
                <div className="bg-dark-card border border-dark-border rounded-sm p-6">
                  <h2 className="font-serif text-cream text-xl mb-2">Método de Pago</h2>
                  <div className="flex items-center gap-2 mb-5 bg-dark border border-gold/30 rounded-sm px-4 py-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gold text-xs">
                      Integración con Stripe pendiente — Esta es una interfaz de demostración.
                    </p>
                  </div>

                  {/* Card fields (placeholder UI) */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-cream-muted text-xs mb-1.5 tracking-wider uppercase">
                        Número de tarjeta
                      </label>
                      <div className="w-full bg-dark border border-dark-border text-cream-muted/50 px-4 py-2.5 rounded-sm text-sm flex items-center justify-between">
                        <span>1234 5678 9012 3456</span>
                        <div className="flex gap-1">
                          <div className="w-8 h-5 bg-blue-600 rounded-sm opacity-70" />
                          <div className="w-8 h-5 bg-red-600 rounded-sm opacity-70" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-cream-muted text-xs mb-1.5 tracking-wider uppercase">
                          Vencimiento
                        </label>
                        <div className="w-full bg-dark border border-dark-border text-cream-muted/50 px-4 py-2.5 rounded-sm text-sm">
                          MM / AA
                        </div>
                      </div>
                      <div>
                        <label className="block text-cream-muted text-xs mb-1.5 tracking-wider uppercase">
                          CVV
                        </label>
                        <div className="w-full bg-dark border border-dark-border text-cream-muted/50 px-4 py-2.5 rounded-sm text-sm">
                          •••
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-cream-muted text-xs mb-1.5 tracking-wider uppercase">
                        Nombre en la tarjeta
                      </label>
                      <div className="w-full bg-dark border border-dark-border text-cream-muted/50 px-4 py-2.5 rounded-sm text-sm">
                        JUAN GARCIA
                      </div>
                    </div>

                    {/* Security badges */}
                    <div className="flex items-center gap-3 pt-2">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="text-cream-muted text-xs">Pago seguro con cifrado SSL 256-bit</span>
                    </div>

                    <button
                      className="w-full bg-gold text-dark font-bold py-3.5 rounded-sm hover:bg-gold-light transition-all duration-200 hover:scale-[1.02] text-sm tracking-wider mt-2"
                      onClick={() => alert('Stripe integration pending — Esta es una demostración')}
                    >
                      Pagar {formatPrice(totalPrice)}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-dark-card border border-dark-border rounded-sm p-6 sticky top-20">
                <h2 className="font-serif text-cream text-lg mb-5">Tu Pedido</h2>

                <div className="space-y-3 mb-5 max-h-60 overflow-y-auto pr-1">
                  {items.map(item => (
                    <div key={item.product.id} className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-cream text-xs leading-tight truncate">{item.product.name}</p>
                        <p className="text-cream-muted text-xs">{item.product.brand} × {item.quantity}</p>
                      </div>
                      <span className="text-gold text-xs font-bold flex-shrink-0">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-dark-border pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-cream-muted">Subtotal ({totalItems} artículos)</span>
                    <span className="text-cream">{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-cream-muted">Envío</span>
                    <span className="text-gold text-xs">Por confirmar</span>
                  </div>
                </div>

                <div className="border-t border-dark-border pt-4 mt-4">
                  <div className="flex justify-between">
                    <span className="text-cream font-semibold">Total</span>
                    <span className="text-gold font-bold text-lg">{formatPrice(totalPrice)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
