'use client'

import { useState, useEffect, useMemo } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Suspense } from 'react'
import ProductGrid from '@/components/ProductGrid'
import FilterSidebar from '@/components/FilterSidebar'
import { getAllProducts, getBrands, getCategories } from '@/lib/products'
import { Product } from '@/context/CartContext'

function ProductsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [allProducts] = useState<Product[]>(() => getAllProducts())
  const [brands] = useState<string[]>(() => getBrands())
  const [categories] = useState<string[]>(() => getCategories())

  const [search, setSearch] = useState(searchParams.get('q') || '')
  const [selectedBrands, setSelectedBrands] = useState<string[]>(() => {
    const marca = searchParams.get('marca')
    return marca ? [marca] : []
  })
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('categoria') || '')
  const [sortBy, setSortBy] = useState('default')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const marca = searchParams.get('marca')
    const categoria = searchParams.get('categoria')
    if (marca) setSelectedBrands([marca])
    if (categoria) setSelectedCategory(categoria)
  }, [searchParams])

  const filtered = useMemo(() => {
    let result = [...allProducts]

    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      )
    }

    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brand))
    }

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory)
    }

    if (sortBy === 'name-asc') result.sort((a, b) => a.name.localeCompare(b.name))
    else if (sortBy === 'name-desc') result.sort((a, b) => b.name.localeCompare(a.name))
    else if (sortBy === 'brand') result.sort((a, b) => a.brand.localeCompare(b.brand))

    return result
  }, [allProducts, search, selectedBrands, selectedCategory, sortBy])

  function handleBrandToggle(brand: string) {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    )
  }

  function handleCategoryChange(cat: string) {
    setSelectedCategory(cat)
  }

  function handleClearAll() {
    setSearch('')
    setSelectedBrands([])
    setSelectedCategory('')
    setSortBy('default')
    router.push('/productos')
  }

  const hasActiveFilters = search || selectedBrands.length > 0 || selectedCategory

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <div className="bg-dark-card border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="font-serif text-3xl md:text-4xl text-cream mb-2">Nuestra Colección</h1>
          <p className="text-cream-muted">
            Perfumes árabes y orientales auténticos — {allProducts.length} fragancias disponibles
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search + Sort bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar perfumes, marcas..."
              className="w-full bg-dark-card border border-dark-border text-cream placeholder-cream-muted pl-10 pr-4 py-2.5 rounded-sm focus:outline-none focus:border-gold transition-colors text-sm"
            />
          </div>

          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="bg-dark-card border border-dark-border text-cream-muted px-4 py-2.5 rounded-sm focus:outline-none focus:border-gold transition-colors text-sm"
          >
            <option value="default">Ordenar por: Defecto</option>
            <option value="name-asc">Nombre A-Z</option>
            <option value="name-desc">Nombre Z-A</option>
            <option value="brand">Marca</option>
          </select>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden btn-outline-gold text-sm py-2.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filtros
          </button>
        </div>

        {/* Active filters */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="text-cream-muted text-xs">Filtros activos:</span>
            {search && (
              <span className="bg-dark border border-gold text-gold text-xs px-2 py-1 rounded-sm flex items-center gap-1">
                &ldquo;{search}&rdquo;
                <button onClick={() => setSearch('')}>×</button>
              </span>
            )}
            {selectedCategory && (
              <span className="bg-dark border border-gold text-gold text-xs px-2 py-1 rounded-sm flex items-center gap-1">
                {selectedCategory}
                <button onClick={() => setSelectedCategory('')}>×</button>
              </span>
            )}
            {selectedBrands.map(b => (
              <span key={b} className="bg-dark border border-gold text-gold text-xs px-2 py-1 rounded-sm flex items-center gap-1">
                {b}
                <button onClick={() => handleBrandToggle(b)}>×</button>
              </span>
            ))}
            <button onClick={handleClearAll} className="text-cream-muted text-xs underline hover:text-gold transition-colors ml-2">
              Limpiar todo
            </button>
          </div>
        )}

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar — mobile */}
          {sidebarOpen && (
            <div className="lg:hidden">
              <FilterSidebar
                brands={brands}
                categories={categories}
                selectedBrands={selectedBrands}
                selectedCategory={selectedCategory}
                onBrandToggle={handleBrandToggle}
                onCategoryChange={handleCategoryChange}
                productCount={filtered.length}
              />
            </div>
          )}

          {/* Sidebar — desktop */}
          <div className="hidden lg:block">
            <FilterSidebar
              brands={brands}
              categories={categories}
              selectedBrands={selectedBrands}
              selectedCategory={selectedCategory}
              onBrandToggle={handleBrandToggle}
              onCategoryChange={handleCategoryChange}
              productCount={filtered.length}
            />
          </div>

          {/* Products */}
          <div className="flex-1">
            <ProductGrid products={filtered} emptyMessage="No se encontraron perfumes con estos filtros." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-16 flex items-center justify-center text-cream-muted">Cargando...</div>}>
      <ProductsContent />
    </Suspense>
  )
}
