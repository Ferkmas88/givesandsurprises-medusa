'use client'

interface FilterSidebarProps {
  brands: string[]
  categories: string[]
  selectedBrands: string[]
  selectedCategory: string
  onBrandToggle: (brand: string) => void
  onCategoryChange: (category: string) => void
  productCount: number
}

export default function FilterSidebar({
  brands,
  categories,
  selectedBrands,
  selectedCategory,
  onBrandToggle,
  onCategoryChange,
  productCount,
}: FilterSidebarProps) {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="bg-dark-card border border-dark-border rounded-sm p-5 sticky top-20">
        {/* Count */}
        <p className="text-cream-muted text-sm mb-5">
          <span className="text-gold font-bold">{productCount}</span> productos encontrados
        </p>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="text-cream font-serif text-base mb-3 pb-2 border-b border-dark-border">
            Categoría
          </h3>
          <div className="space-y-1">
            <button
              onClick={() => onCategoryChange('')}
              className={`w-full text-left px-3 py-2 rounded-sm text-sm transition-colors ${
                selectedCategory === ''
                  ? 'bg-gold text-white font-semibold'
                  : 'text-cream-muted hover:text-gold hover:bg-dark'
              }`}
            >
              Todos
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`w-full text-left px-3 py-2 rounded-sm text-sm transition-colors ${
                  selectedCategory === cat
                    ? 'bg-gold text-white font-semibold'
                    : 'text-cream-muted hover:text-gold hover:bg-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div>
          <h3 className="text-cream font-serif text-base mb-3 pb-2 border-b border-dark-border">
            Marca
          </h3>
          <div className="space-y-2">
            {brands.map(brand => (
              <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => onBrandToggle(brand)}
                  className="w-4 h-4 rounded-sm border-dark-border bg-dark accent-gold cursor-pointer"
                />
                <span className={`text-sm transition-colors ${
                  selectedBrands.includes(brand) ? 'text-gold' : 'text-cream-muted group-hover:text-cream'
                }`}>
                  {brand}
                </span>
              </label>
            ))}
          </div>

          {selectedBrands.length > 0 && (
            <button
              onClick={() => selectedBrands.forEach(b => onBrandToggle(b))}
              className="mt-4 text-xs text-gold underline hover:text-gold-light transition-colors"
            >
              Limpiar filtros de marca
            </button>
          )}
        </div>
      </div>
    </aside>
  )
}
