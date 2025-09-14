'use client'

import Link from 'next/link'

export default function PromotionalBanner() {
  return (
    <section className="bg-white text-black py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left">
          {/* Left side - promotional message */}
          <div className="mb-2 md:mb-0">
            <span className="text-black font-bold text-lg uppercase tracking-wider">
              30-DAY MONEY BACK GUARANTEE
            </span>
          </div>
          
          {/* Separator */}
          <div className="hidden md:block w-px h-6 bg-gray-300 mx-8"></div>
          
          {/* Right side - additional offer */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <span className="text-black font-medium">
              FREE SHIPPING ON ORDERS OVER $299
            </span>
            <Link 
              href="/smartwatches" 
              className="bg-black text-white px-6 py-2 font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
