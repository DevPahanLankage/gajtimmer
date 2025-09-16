'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
        {/* Hero background video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/hero_video.mp4" type="video/mp4" />
          {/* Fallback image for browsers that don't support video */}
          <img 
            src="/images/1.jpg" 
            alt="GaJTimmer AK82 Smartwatch"
            className="w-full h-full object-cover object-center"
          />
        </video>
      </div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 h-screen flex items-center">
        <div className="max-w-2xl space-y-8">
          {/* Main Headline - Inspired by Gard Pro's "REACH YOUR FULL POTENTIAL" */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
              REACH YOUR
              <span className="block">FULL POTENTIAL.</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed">
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
          <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              {/* GTAK82 Huntsman */}
              <div className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
                  <img 
                    src="/images/gtak82-huntsman/1.jpg" 
                    alt="GTAK82 Huntsman"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-lg font-bold uppercase tracking-wider truncate">GTAK82 HUNTSMAN</h3>
                  <p className="text-xs sm:text-sm text-gray-400 truncate">Advanced smart watch with AI voice assistant.</p>
                </div>
                <Link 
                  href="/product/gtak82-huntsman" 
                  className="bg-white text-black px-3 sm:px-6 py-1 sm:py-2 text-sm font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors"
                >
                  BUY
                </Link>
              </div>
              
              {/* GTK63 Iron Man */}
              <div className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
                  <img 
                    src="/images/gtk63-ironman/3.jpg" 
                    alt="GTK63 Iron Man"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-lg font-bold uppercase tracking-wider truncate">GTK63 IRON MAN</h3>
                  <p className="text-xs sm:text-sm text-gray-400 truncate">Premium design with advanced health monitoring.</p>
                </div>
                <Link 
                  href="/product/gtk63-ironman" 
                  className="bg-white text-black px-3 sm:px-6 py-1 sm:py-2 text-sm font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors"
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
