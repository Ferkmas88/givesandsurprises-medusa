const fs = require('fs')
const path = require('path')
const { parse } = require('csv-parse/sync')

const CSV_PATH = path.join(__dirname, '../../givesandsurprisesstore/productos-woocommerce.csv')
const OUT_PATH = path.join(__dirname, '../data/products.json')

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[áàäâ]/g, 'a')
    .replace(/[éèëê]/g, 'e')
    .replace(/[íìïî]/g, 'i')
    .replace(/[óòöô]/g, 'o')
    .replace(/[úùüû]/g, 'u')
    .replace(/[ñ]/g, 'n')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function extractBrand(categories, name, sku) {
  const brands = ['Laffata', 'Amaf', 'La Chameau', 'Afnan', 'Jo Milano', 'Al Haramain', 'KIDS', 'Bharara', 'Zoghbi', 'Rasasi', 'Orientica', 'Meison Alhambra']
  for (const brand of brands) {
    if (categories && categories.toLowerCase().includes(brand.toLowerCase())) return brand
    if (name && name.toLowerCase().includes(brand.toLowerCase())) return brand
    if (sku && sku.toLowerCase().includes(brand.toLowerCase().replace(/\s/g, '-'))) return brand
  }
  // Try to extract brand from name (format: "Brand - Product Name")
  if (name && name.includes(' - ')) {
    const possibleBrand = name.split(' - ')[0].trim()
    for (const brand of brands) {
      if (possibleBrand.toLowerCase() === brand.toLowerCase()) return brand
    }
  }
  return 'Other'
}

function extractCategory(categories) {
  const cats = ['Unisex', 'Para Él', 'Para Ella', 'Para Niños']
  for (const cat of cats) {
    if (categories && categories.includes(cat)) return cat
  }
  if (categories && categories.toLowerCase().includes('nino')) return 'Para Niños'
  if (categories && categories.toLowerCase().includes('kid')) return 'Para Niños'
  return 'Unisex'
}

function cleanDescription(desc) {
  if (!desc) return ''
  return desc.replace(/<[^>]+>/g, '').trim()
}

const csvContent = fs.readFileSync(CSV_PATH, 'utf-8').replace(/^\uFEFF/, '')

const records = parse(csvContent, {
  columns: true,
  skip_empty_lines: true,
  relax_quotes: true,
  relax_column_count: true,
})

const products = []
let idCounter = 1

for (const row of records) {
  const name = row['Name'] || ''
  if (!name) continue

  const sku = row['SKU'] || ''
  const categories = row['Categories'] || ''
  const tags = row['Tags'] || ''
  const images = row['Images'] || ''
  const shortDesc = row['Short description'] || ''
  const longDesc = row['Description'] || ''

  const brand = extractBrand(categories, name, sku)
  const category = extractCategory(categories)

  const imageList = images
    ? images.split('|').map(img => img.trim()).filter(Boolean)
    : []

  const tagList = tags
    ? tags.split(',').map(t => t.trim()).filter(Boolean)
    : []

  const description = cleanDescription(longDesc) || cleanDescription(shortDesc) || `Perfume original de la marca ${brand}. Fragancia árabe de alta calidad.`

  const slug = sku || slugify(name) || `product-${idCounter}`

  products.push({
    id: String(idCounter++),
    name,
    slug,
    brand,
    category,
    price: 39.99,
    description,
    images: imageList,
    tags: tagList,
  })
}

fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true })
fs.writeFileSync(OUT_PATH, JSON.stringify(products, null, 2), 'utf-8')
console.log(`Parsed ${products.length} products → ${OUT_PATH}`)
