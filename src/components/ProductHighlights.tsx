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
                {/* Background Image */}
                <img 
                  src="/images/H0a0acccceadb464a97cc22d1c316e8127.jpg_960x960q80.jpg" 
                  alt="GaJTimmer Smartwatches"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                
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
                {/* Background Image */}
                <img 
                  src="/images/Ha710705f99354c32b386bf6d18a4e44eW.jpg_960x960q80.jpg" 
                  alt="GaJTimmer Accessories"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                
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
                <img 
                  src="/images/H06a6de17b65e4dc2a214a568d334f269l.jpg_960x960q80.jpg" 
                  alt="Swimming Smartwatch"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
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
                <img 
                  src="/images/H48100b721dcc4a609809c35f6fc19fdce.jpg_960x960q80.jpg" 
                  alt="Multi Sport Smartwatch"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
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
                <img 
                  src="/images/H58d93bb0ef7f43048f69230de48edc5ei.jpg_960x960q80.jpg" 
                  alt="Professional Smartwatch"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
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
                <img 
                  src="/images/Hd5e40e0b28924d8bbbb9ce0ae2208d79B.jpg" 
                  alt="Outdoor Smartwatch"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
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
                <img 
                  src="/images/He2a36091e23541098602b915a845c803a.jpg_960x960q80.jpg" 
                  alt="GaJTimmer Health Series"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
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
                <img 
                  src="/images/H12d86414dfc54ffd90cce04f4887c2fc1.png_960x960q80.png" 
                  alt="GaJTimmer Ultra Series"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
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
