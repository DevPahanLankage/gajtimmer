'use client'

import { useState } from 'react'

interface FilterOptions {
  categories: string[]
  priceRange: {
    min: number
    max: number
  }
  features: string[]
  availability: 'all' | 'in-stock' | 'out-of-stock'
}

interface ProductFilterProps {
  onFilterChange?: (filters: FilterOptions) => void
}

export default function ProductFilter({ onFilterChange }: ProductFilterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState<FilterOptions>({
    categories: [],
    priceRange: { min: 0, max: 1000 },
    features: [],
    availability: 'all'
  })

  const categories = [
    { id: 'health-series', name: 'Health Series' },
    { id: 'ultra-series', name: 'Ultra Series' },
    { id: 'accessories', name: 'Accessories' }
  ]

  const features = [
    'Heart Rate Monitor',
    'GPS Tracking',
    'Water Resistant',
    'Sleep Tracking',
    'Fitness Tracking',
    'Smart Notifications',
    'Long Battery Life',
    'Wireless Charging'
  ]

  const handleCategoryChange = (categoryId: string) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter(id => id !== categoryId)
      : [...filters.categories, categoryId]
    
    const newFilters = { ...filters, categories: newCategories }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  const handleFeatureChange = (feature: string) => {
    const newFeatures = filters.features.includes(feature)
      ? filters.features.filter(f => f !== feature)
      : [...filters.features, feature]
    
    const newFilters = { ...filters, features: newFeatures }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  const handlePriceChange = (type: 'min' | 'max', value: number) => {
    const newFilters = {
      ...filters,
      priceRange: { ...filters.priceRange, [type]: value }
    }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  const handleAvailabilityChange = (availability: FilterOptions['availability']) => {
    const newFilters = { ...filters, availability }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  const clearFilters = () => {
    const resetFilters = {
      categories: [],
      priceRange: { min: 0, max: 1000 },
      features: [],
      availability: 'all' as const
    }
    setFilters(resetFilters)
    onFilterChange?.(resetFilters)
  }

  return (
    <div className="bg-gray-900 rounded-lg">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-4 text-left text-white font-medium flex items-center justify-between"
        >
          <span>Filters</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Filter Content */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block p-4 lg:p-6 space-y-6`}>
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Filters</h3>
          <button
            onClick={clearFilters}
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            Clear All
          </button>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-sm font-medium text-gray-300 mb-3">Categories</h4>
          <div className="space-y-2">
            {categories.map(category => (
              <label key={category.id} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                  className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-300">{category.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h4 className="text-sm font-medium text-gray-300 mb-3">Price Range</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={filters.priceRange.min}
                onChange={(e) => handlePriceChange('min', Number(e.target.value))}
                placeholder="Min"
                className="w-full bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-700 text-sm"
              />
              <span className="text-gray-400">to</span>
              <input
                type="number"
                value={filters.priceRange.max}
                onChange={(e) => handlePriceChange('max', Number(e.target.value))}
                placeholder="Max"
                className="w-full bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-700 text-sm"
              />
            </div>
            <div className="text-xs text-gray-500">
              ${filters.priceRange.min} - ${filters.priceRange.max}
            </div>
          </div>
        </div>

        {/* Availability */}
        <div>
          <h4 className="text-sm font-medium text-gray-300 mb-3">Availability</h4>
          <div className="space-y-2">
            {[
              { value: 'all', label: 'All Products' },
              { value: 'in-stock', label: 'In Stock' },
              { value: 'out-of-stock', label: 'Out of Stock' }
            ].map(option => (
              <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="availability"
                  value={option.value}
                  checked={filters.availability === option.value}
                  onChange={() => handleAvailabilityChange(option.value as FilterOptions['availability'])}
                  className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-300">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="text-sm font-medium text-gray-300 mb-3">Features</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {features.map(feature => (
              <label key={feature} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.features.includes(feature)}
                  onChange={() => handleFeatureChange(feature)}
                  className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-300">{feature}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Active Filters Summary */}
        {(filters.categories.length > 0 || filters.features.length > 0 || filters.availability !== 'all') && (
          <div className="pt-4 border-t border-gray-700">
            <h4 className="text-sm font-medium text-gray-300 mb-2">Active Filters</h4>
            <div className="flex flex-wrap gap-2">
              {filters.categories.map(categoryId => {
                const category = categories.find(c => c.id === categoryId)
                return (
                  <span
                    key={categoryId}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-900 text-blue-300"
                  >
                    {category?.name}
                    <button
                      onClick={() => handleCategoryChange(categoryId)}
                      className="ml-1 hover:text-white"
                    >
                      ×
                    </button>
                  </span>
                )
              })}
              {filters.features.map(feature => (
                <span
                  key={feature}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-900 text-green-300"
                >
                  {feature}
                  <button
                    onClick={() => handleFeatureChange(feature)}
                    className="ml-1 hover:text-white"
                  >
                    ×
                  </button>
                </span>
              ))}
              {filters.availability !== 'all' && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-purple-900 text-purple-300">
                  {filters.availability === 'in-stock' ? 'In Stock' : 'Out of Stock'}
                  <button
                    onClick={() => handleAvailabilityChange('all')}
                    className="ml-1 hover:text-white"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}