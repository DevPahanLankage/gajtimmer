'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image/Video Area */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
        {/* Hero background with actual product image */}
        <div className="w-full h-full relative">
          <img 
            src="/images/H00206a8f08fa41a58158ced4968d831ds.jpg" 
            alt="GaJTimmer Smartwatch"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 h-screen flex items-center">
        <div className="max-w-2xl space-y-8">
          {/* Main Headline - Inspired by Gard Pro's "REACH YOUR FULL POTENTIAL" */}
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
              REACH YOUR
              <span className="block">FULL POTENTIAL.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed">
              The strongest, most advanced smartwatch series designed for tech-savvy professionals and active individuals.
            </p>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              href="/smartwatches" 
              className="bg-white text-black px-8 py-4 rounded-none font-bold text-lg uppercase tracking-wider hover:bg-gray-200 transition-colors text-center"
            >
              SHOP NOW
            </Link>
            <Link 
              href="/support" 
              className="border-2 border-white text-white px-8 py-4 rounded-none font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-colors text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Featured Products Banner */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="bg-black/80 backdrop-blur-sm border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ultra Series */}
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img 
                    src="/images/H212eb1205b6642989d49382f1e698e5cc.jpg" 
                    alt="GaJTimmer Ultra Series"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold uppercase tracking-wider">GAJTIMMER ULTRA SERIES</h3>
                  <p className="text-gray-400">The strongest smartwatch you'll ever own.</p>
                </div>
                <Link 
                  href="/smartwatches?series=ultra" 
                  className="bg-white text-black px-6 py-2 font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors"
                >
                  BUY
                </Link>
              </div>
              
              {/* Health Series */}
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img 
                    src="/images/H3f0f78e46da5402f8ee59fd9dc72d397a.jpg_960x960q80.jpg" 
                    alt="GaJTimmer Health Series"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold uppercase tracking-wider">GAJTIMMER HEALTH SERIES</h3>
                  <p className="text-gray-400">The most advanced smartwatch for your health.</p>
                </div>
                <Link 
                  href="/smartwatches?series=health" 
                  className="bg-white text-black px-6 py-2 font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors"
                >
                  BUY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
