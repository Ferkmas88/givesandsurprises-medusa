import productsData from '@/data/products.json'

export interface Product {
  id: string
  name: string
  slug: string
  brand: string
  category: string
  price: number
  description: string
  images: string[]
  tags: string[]
}

const products = productsData as Product[]

export function getAllProducts(): Product[] {
  return products
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductsByBrand(brand: string): Product[] {
  return products.filter(p => p.brand.toLowerCase() === brand.toLowerCase())
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase())
}

export function getFeaturedProducts(n: number = 8): Product[] {
  return products.slice(0, n)
}

export function getBrands(): string[] {
  const brands = new Set(products.map(p => p.brand))
  return Array.from(brands).sort()
}

export function getCategories(): string[] {
  const cats = new Set(products.map(p => p.category))
  return Array.from(cats).sort()
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase()
  return products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q))
  )
}

export function getRelatedProducts(product: Product, n: number = 4): Product[] {
  return products
    .filter(p => p.id !== product.id && (p.brand === product.brand || p.category === product.category))
    .slice(0, n)
}
