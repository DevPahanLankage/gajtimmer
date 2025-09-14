'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black border-b border-gray-900 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white uppercase tracking-wider">
            GARD PRO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/smartwatches" className="text-white hover:text-gray-300 transition-colors font-medium uppercase tracking-wide text-sm">
              SMARTWATCHES
            </Link>
            <Link href="/accessories" className="text-white hover:text-gray-300 transition-colors font-medium uppercase tracking-wide text-sm">
              LOOPS
            </Link>
            <Link href="/accessories" className="text-white hover:text-gray-300 transition-colors font-medium uppercase tracking-wide text-sm">
              ACCESSORIES
            </Link>
            <Link href="/support" className="text-white hover:text-gray-300 transition-colors font-medium uppercase tracking-wide text-sm">
              SUPPORT
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/search" className="text-white hover:text-gray-300 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
            <Link href="/account" className="text-white hover:text-gray-300 transition-colors font-medium uppercase tracking-wide text-sm">
              LOG IN
            </Link>
            <Link href="/cart" className="text-white hover:text-gray-300 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5-2.5M7 13l2.5 2.5" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                href="/smartwatches" 
                className="text-white hover:text-gray-300 transition-colors font-medium uppercase tracking-wide text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                SMARTWATCHES
              </Link>
              <Link 
                href="/accessories" 
                className="text-white hover:text-gray-300 transition-colors font-medium uppercase tracking-wide text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                LOOPS
              </Link>
              <Link 
                href="/accessories" 
                className="text-white hover:text-gray-300 transition-colors font-medium uppercase tracking-wide text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                ACCESSORIES
              </Link>
              <Link 
                href="/support" 
                className="text-white hover:text-gray-300 transition-colors font-medium uppercase tracking-wide text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                SUPPORT
              </Link>
              
              <div className="flex items-center space-x-6 pt-4 border-t border-gray-800">
                <Link href="/search" className="text-white hover:text-gray-300 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </Link>
                <Link 
                  href="/account" 
                  className="text-white hover:text-gray-300 transition-colors font-medium uppercase tracking-wide text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  LOG IN
                </Link>
                <Link href="/cart" className="text-white hover:text-gray-300 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5-2.5M7 13l2.5 2.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
