'use client'

import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 uppercase tracking-wider">
            DISCOVER OUR LATEST
            <span className="block">INNOVATIONS</span>
          </h2>
          
          {/* CTA Button */}
          <div className="mb-16">
            <Link 
              href="/smartwatches"
              className="bg-white text-black hover:bg-gray-200 px-12 py-4 text-xl font-bold uppercase tracking-wider transition-colors inline-block"
            >
              SHOP NOW
            </Link>
          </div>

          {/* Support Section - Inspired by Gard Pro's service messaging */}
          <div className="bg-gray-900 rounded-none p-12 text-left">
            <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-wide">
              RECEIVE THE BEST SERVICE AND SUPPORT
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl">
              Thanks to Gard Pro's proficiency in developing hardware, operating systems, and 
              applications, our specialists possess an in-depth knowledge of the integrated 
              system. Consequently, we can typically address and resolve issues in a single 
              discussion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/support"
                className="bg-white text-black hover:bg-gray-200 px-8 py-3 font-bold uppercase tracking-wider transition-colors text-center"
              >
                MORE INFORMATION
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 font-bold uppercase tracking-wider transition-colors text-center"
              >
                CONTACT US
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">CONTACT US</h4>
              <div className="space-y-2 text-gray-300">
                <p>Email: <Link href="mailto:support@gardpro.com" className="text-white hover:text-gray-300">support@gardpro.com</Link></p>
                <p className="text-sm">
                  Telephone customer service is open Monday through Friday from 12 P.M. to 5 P.M. (GMT-5)
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">GUARANTEE</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  30-Day Money Back Guarantee
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free Shipping on Orders Over $299
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  2-Year Warranty Coverage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
