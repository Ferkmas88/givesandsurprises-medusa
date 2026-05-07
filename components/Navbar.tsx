'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const { totalItems, openDrawer } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-cream/95 border-b border-rose-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/brand/logo-full.png"
              alt="Gives & Surprises"
              width={180}
              height={110}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-navy hover:text-rose transition-colors text-sm tracking-wider uppercase">
              Inicio
            </Link>
            <Link href="/productos" className="text-navy hover:text-rose transition-colors text-sm tracking-wider uppercase">
              Productos
            </Link>
            <Link href="/productos?categoria=Para+Él" className="text-navy hover:text-rose transition-colors text-sm tracking-wider uppercase">
              Para Él
            </Link>
            <Link href="/productos?categoria=Para+Ella" className="text-navy hover:text-rose transition-colors text-sm tracking-wider uppercase">
              Para Ella
            </Link>
            <Link href="/productos?categoria=Unisex" className="text-navy hover:text-rose transition-colors text-sm tracking-wider uppercase">
              Unisex
            </Link>
          </div>

          {/* Cart + Mobile menu */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <button
              onClick={openDrawer}
              className="relative p-2 text-navy hover:text-rose transition-colors"
              aria-label="Carrito de compras"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-navy hover:text-rose transition-colors"
              aria-label="Menú"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-rose-mist py-4 space-y-3">
            {[
              { href: '/', label: 'Inicio' },
              { href: '/productos', label: 'Todos los productos' },
              { href: '/productos?categoria=Para+Él', label: 'Para Él' },
              { href: '/productos?categoria=Para+Ella', label: 'Para Ella' },
              { href: '/productos?categoria=Unisex', label: 'Unisex' },
              { href: '/productos?categoria=Para+Niños', label: 'Para Niños' },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-2 text-navy hover:text-rose transition-colors text-sm tracking-wider uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
