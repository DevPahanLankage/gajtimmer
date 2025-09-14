'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Product, products } from '@/lib/products'

export default function ProductGrid() {
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'newest'>('name')
  const [filterBy, setFilterBy] = useState<'all' | 'health-series' | 'ultra-series' | 'accessories'>('all')

  const filteredProducts = products
    .filter((product: Product) => {
      if (filterBy === 'all') return true
      return product.category === filterBy
    })
    .sort((a: Product, b: Product) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price
        case 'newest':
          return (a.isNew ? 1 : 0) - (b.isNew ? 1 : 0)
        default:
          return a.name.localeCompare(b.name)
      }
    })

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium text-gray-300">Filter:</label>
          <select 
            value={filterBy} 
            onChange={(e) => setFilterBy(e.target.value as typeof filterBy)}
            className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-700"
          >
            <option value="all">All Products</option>
            <option value="health-series">Health Series</option>
            <option value="ultra-series">Ultra Series</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>
        
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium text-gray-300">Sort by:</label>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-700"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product: Product) => (
          <div key={product.id} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors">
            {/* Product Image */}
            <div className="relative aspect-square bg-gray-800 flex items-center justify-center overflow-hidden">
              {product.isNew && (
                <div className="absolute top-4 left-4 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
                  New
                </div>
              )}
              {product.originalPrice && (
                <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
                  Sale
                </div>
              )}
              
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="p-6">
              <div className="mb-2">
                <span className="text-xs font-medium text-blue-400 uppercase tracking-wide">
                  {product.category.replace('-', ' ')}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">
                {product.name}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4">
                {product.description}
              </p>

              {/* Price */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-white">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <div className={`text-xs px-2 py-1 rounded-full ${
                  product.inStock 
                    ? 'bg-green-900 text-green-400' 
                    : 'bg-red-900 text-red-400'
                }`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Link 
                  href={`/products/${product.id}`}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                >
                  View Details
                </Link>
                <button 
                  className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                  disabled={!product.inStock}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No products message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
          <p className="text-gray-400">Try adjusting your filters to see more products.</p>
        </div>
      )}
    </div>
  )
}