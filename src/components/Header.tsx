'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            Gard Pro
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/smartwatches" className="text-gray-300 hover:text-white transition-colors">
              Smartwatches
            </Link>
            <Link href="/accessories" className="text-gray-300 hover:text-white transition-colors">
              Accessories
            </Link>
            <Link href="/support" className="text-gray-300 hover:text-white transition-colors">
              Support
            </Link>
            <Link href="/cart" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Cart
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="/smartwatches" className="text-gray-300 hover:text-white transition-colors">
                Smartwatches
              </Link>
              <Link href="/accessories" className="text-gray-300 hover:text-white transition-colors">
                Accessories
              </Link>
              <Link href="/support" className="text-gray-300 hover:text-white transition-colors">
                Support
              </Link>
              <Link href="/cart" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors w-fit">
                Cart
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
