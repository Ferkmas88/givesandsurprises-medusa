export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function getBrandColor(brand: string): string {
  const colors: Record<string, string> = {
    'Laffata': '#8B5CF6',
    'Amaf': '#EC4899',
    'La Chameau': '#F59E0B',
    'Afnan': '#10B981',
    'Jo Milano': '#3B82F6',
    'Al Haramain': '#EF4444',
    'KIDS': '#F97316',
    'Bharara': '#6366F1',
    'Zoghbi': '#14B8A6',
    'Rasasi': '#D4AF37',
    'Orientica': '#84CC16',
    'Meison Alhambra': '#F43F5E',
  }
  return colors[brand] || '#D4AF37'
}

export function getProductGradient(brand: string): string {
  const gradients: Record<string, string> = {
    'Laffata': 'from-purple-900 to-purple-700',
    'Amaf': 'from-pink-900 to-pink-700',
    'La Chameau': 'from-amber-900 to-amber-700',
    'Afnan': 'from-emerald-900 to-emerald-700',
    'Jo Milano': 'from-blue-900 to-blue-700',
    'Al Haramain': 'from-red-900 to-red-700',
    'KIDS': 'from-orange-900 to-orange-700',
    'Bharara': 'from-indigo-900 to-indigo-700',
    'Zoghbi': 'from-teal-900 to-teal-700',
    'Rasasi': 'from-yellow-900 to-yellow-700',
    'Orientica': 'from-lime-900 to-lime-700',
    'Meison Alhambra': 'from-rose-900 to-rose-700',
  }
  return gradients[brand] || 'from-gray-900 to-gray-700'
}
