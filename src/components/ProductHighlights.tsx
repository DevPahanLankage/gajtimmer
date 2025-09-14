'use client'

import Link from 'next/link'

interface Product {
  id: string
  name: string
  series: string
  price: number
  originalPrice?: number
  image: string
  features: string[]
  badge?: string
}

const featuredProducts: Product[] = [
  {
    id: 'health-pro',
    name: 'Health Pro',
    series: 'Health Series',
    price: 299,
    originalPrice: 399,
    image: '/images/health-pro.jpg',
    features: ['Heart Rate Monitor', 'Sleep Tracking', 'GPS', '5-Day Battery'],
    badge: 'Best Seller'
  },
  {
    id: 'ultra-max',
    name: 'Ultra Max',
    series: 'Ultra Series',
    price: 599,
    image: '/images/ultra-max.jpg',
    features: ['Rugged Design', 'Extended Battery', 'Advanced GPS', 'Water Resistant'],
    badge: 'New'
  },
  {
    id: 'health-lite',
    name: 'Health Lite',
    series: 'Health Series',
    price: 199,
    originalPrice: 249,
    image: '/images/health-lite.jpg',
    features: ['Basic Health Tracking', 'Notifications', '3-Day Battery', 'Lightweight'],
    badge: 'Sale'
  }
]

export default function ProductHighlights() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our most popular smartwatches designed for every lifestyle and need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-black rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 group">
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                {/* Placeholder for product image */}
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">GARD</span>
                </div>
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-blue-400 text-sm font-medium">{product.series}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                
                {/* Features */}
                <ul className="text-gray-400 text-sm mb-4 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-white">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                      Save ${product.originalPrice - product.price}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Link 
                    href={`/smartwatches/${product.id}`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                  >
                    View Details
                  </Link>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5-2.5M7 13l2.5 2.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <Link 
            href="/smartwatches"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
