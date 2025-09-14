import type { Metadata } from 'next'
import ProductGrid from '@/components/ProductGrid'
import ProductFilter from '@/components/ProductFilter'

export const metadata: Metadata = {
  title: 'Smartwatches - Gard Pro',
  description: 'Explore our complete collection of premium smartwatches. Health Series and Ultra Series with advanced features for every lifestyle.',
}

export default function SmartwatchesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Smartwatch</span> Collection
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the perfect smartwatch for your lifestyle. From health tracking to rugged durability, we have the technology to keep you connected and motivated.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <ProductFilter />
            </div>
            
            {/* Products Grid */}
            <div className="lg:col-span-3">
              <ProductGrid />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
