'use client'

import { useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProductById } from '@/lib/products'

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  
  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Breadcrumb */}
      <div className="bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
            <span className="text-gray-600">/</span>
            <Link href="/smartwatches" className="text-gray-400 hover:text-white">Smartwatches</Link>
            <span className="text-gray-600">/</span>
            <span className="text-white">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src={product.images[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImageIndex === index 
                        ? 'border-white' 
                        : 'border-gray-700 hover:border-gray-500'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            
            {/* Product Title & Category */}
            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                {product.category.replace('-', ' ')}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold uppercase tracking-wider">
                {product.name}
              </h1>
              {product.isNew && (
                <span className="inline-block mt-3 bg-blue-600 text-white px-3 py-1 text-sm font-bold uppercase tracking-wider">
                  NEW
                </span>
              )}
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
              )}
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className={`font-medium ${product.inStock ? 'text-green-500' : 'text-red-500'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <button 
                className={`w-full py-4 px-8 font-bold uppercase tracking-wider transition-colors ${
                  product.inStock 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              
              <div className="flex space-x-4">
                <button className="flex-1 border-2 border-white text-white hover:bg-white hover:text-black py-3 px-6 font-bold uppercase tracking-wider transition-colors">
                  Add to Wishlist
                </button>
                <button className="flex-1 border-2 border-white text-white hover:bg-white hover:text-black py-3 px-6 font-bold uppercase tracking-wider transition-colors">
                  Compare
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Section */}
        <div className="mt-16 bg-gray-900 rounded-lg p-8">
          <h2 className="text-3xl font-bold uppercase tracking-wider mb-8">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="border-b border-gray-700 pb-4">
                <dt className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </dt>
                <dd className="text-lg">
                  {Array.isArray(value) ? value.join(', ') : value}
                </dd>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold uppercase tracking-wider mb-8">You May Also Like</h2>
          <div className="text-center text-gray-400">
            <p>More products coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  )
}