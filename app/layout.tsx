import type { Metadata } from 'next'
import { Playfair_Display, Inter, Great_Vibes } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gives & Surprises Store | Perfumes Orientales',
  description: 'Descubre nuestra colección de perfumes árabes y orientales auténticos. Laffata, Afnan, Al Haramain, Bharara y más. Envío a todo el país.',
  keywords: 'perfumes orientales, perfumes árabes, Laffata, Afnan, Al Haramain, Bharara, Jo Milano, Rasasi',
  openGraph: {
    title: 'Gives & Surprises Store | Perfumes Orientales',
    description: 'Colección exclusiva de perfumes árabes y orientales',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable} ${greatVibes.variable}`}>
      <body className="bg-ivory text-olive antialiased">
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
