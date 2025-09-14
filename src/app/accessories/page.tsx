import type { Metadata } from 'next'
import ProductGrid from '@/components/ProductGrid'

export const metadata: Metadata = {
  title: 'Accessories - Gard Pro',
  description: 'Complete your smartwatch experience with our premium accessories. Loops, screen protectors, chargers and more.',
}

export default function AccessoriesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">Accessories</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Enhance your smartwatch experience with our carefully curated collection of premium accessories designed for durability and style.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Category Cards */}
            <div className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="text-4xl mb-4">⌚</div>
              <h3 className="text-xl font-semibold mb-2">Loops & Bands</h3>
              <p className="text-gray-400">Premium materials for comfort and style</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Screen Protectors</h3>
              <p className="text-gray-400">Ultimate protection for your display</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="text-xl font-semibold mb-2">Chargers</h3>
              <p className="text-gray-400">Fast and reliable charging solutions</p>
            </div>
          </div>

          {/* Products Grid */}
          <ProductGrid />
        </div>
      </section>
    </div>
  )
}