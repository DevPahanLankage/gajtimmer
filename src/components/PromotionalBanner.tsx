'use client'

import Link from 'next/link'

export default function PromotionalBanner() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="mb-2 md:mb-0">
            <span className="text-white font-semibold text-lg">
              🎉 Limited Time Offer: Get 25% off on all Health Series smartwatches!
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-white/80 text-sm">
              Use code: HEALTH25
            </span>
            <Link 
              href="/smartwatches/health-series" 
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
