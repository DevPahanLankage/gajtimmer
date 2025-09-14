'use client'

import Link from 'next/link'

export default function ProductHighlights() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Products Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Smartwatches */}
          <div className="relative group cursor-pointer">
            <Link href="/smartwatches">
              <div className="relative h-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-none overflow-hidden">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl opacity-30">⌚</div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-end">
                  <div className="p-8 text-white">
                    <h3 className="text-4xl font-bold uppercase tracking-wider mb-2">SMARTWATCHES</h3>
                    <p className="text-xl text-gray-300 mb-4">For every fitness level</p>
                    <span className="bg-white text-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors inline-block">
                      SHOP NOW
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Accessories */}
          <div className="relative group cursor-pointer">
            <Link href="/accessories">
              <div className="relative h-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-none overflow-hidden">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl opacity-30">🔗</div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-end">
                  <div className="p-8 text-white">
                    <h3 className="text-4xl font-bold uppercase tracking-wider mb-2">LOOPS</h3>
                    <p className="text-xl text-gray-300 mb-4">For every lifestyle</p>
                    <span className="bg-white text-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors inline-block">
                      SHOP NOW
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Activity Showcase Section - Inspired by Gard Pro's "DISCOVER MORE" */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-bold text-white uppercase tracking-wider mb-4">
            DISCOVER MORE
          </h2>
        </div>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Swimming */}
          <div className="relative group cursor-pointer">
            <Link href="/smartwatches?activity=swimming">
              <div className="relative h-80 bg-gradient-to-br from-blue-900 to-cyan-900 rounded-none overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">🏊</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold uppercase tracking-wider mb-2">SWIMMING</h3>
                  <span className="text-sm uppercase tracking-wider border-b border-white pb-1">SEE MORE</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Multi Sport */}
          <div className="relative group cursor-pointer">
            <Link href="/smartwatches?activity=multisport">
              <div className="relative h-80 bg-gradient-to-br from-green-900 to-emerald-900 rounded-none overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">🏃</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold uppercase tracking-wider mb-2">MULTI SPORT</h3>
                  <span className="text-sm uppercase tracking-wider border-b border-white pb-1">SEE MORE</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Professional */}
          <div className="relative group cursor-pointer">
            <Link href="/smartwatches?activity=professional">
              <div className="relative h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-none overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">💼</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold uppercase tracking-wider mb-2">PROFESSIONAL</h3>
                  <span className="text-sm uppercase tracking-wider border-b border-white pb-1">SEE MORE</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Outdoor */}
          <div className="relative group cursor-pointer">
            <Link href="/smartwatches?activity=outdoor">
              <div className="relative h-80 bg-gradient-to-br from-orange-900 to-red-900 rounded-none overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">🏔️</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold uppercase tracking-wider mb-2">OUTDOOR</h3>
                  <span className="text-sm uppercase tracking-wider border-b border-white pb-1">SEE MORE</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Series Showcase - Health & Ultra */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          {/* Health Series */}
          <div className="relative group cursor-pointer">
            <Link href="/smartwatches?series=health">
              <div className="relative h-96 bg-gradient-to-br from-green-900 to-emerald-900 rounded-none overflow-hidden">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl opacity-40">❤️</div>
                </div>
                <div className="absolute inset-0 flex items-center">
                  <div className="p-8 text-white">
                    <h3 className="text-5xl font-bold uppercase tracking-wider mb-4">HEALTH SERIES</h3>
                    <p className="text-xl text-gray-300 mb-6">Advanced health monitoring for optimal wellness</p>
                    <span className="bg-white text-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors inline-block">
                      SHOP NOW
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Ultra Series */}
          <div className="relative group cursor-pointer">
            <Link href="/smartwatches?series=ultra">
              <div className="relative h-96 bg-gradient-to-br from-gray-900 to-black rounded-none overflow-hidden">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl opacity-40">⚡</div>
                </div>
                <div className="absolute inset-0 flex items-center">
                  <div className="p-8 text-white">
                    <h3 className="text-5xl font-bold uppercase tracking-wider mb-4">ULTRA SERIES</h3>
                    <p className="text-xl text-gray-300 mb-6">Rugged design built for extreme conditions</p>
                    <span className="bg-white text-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors inline-block">
                      SHOP NOW
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
