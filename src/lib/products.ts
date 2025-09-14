export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  images: string[]
  category: 'health-series' | 'ultra-series' | 'accessories'
  type: 'smartwatch' | 'loop' | 'screen-protector' | 'charger'
  features: string[]
  specifications: {
    display?: string
    battery?: string
    waterResistance?: string
    compatibility?: string
    material?: string
    sensors?: string[]
    connectivity?: string[]
  }
  inStock: boolean
  isNew?: boolean
  isFeatured?: boolean
  description: string
}

export const products: Product[] = [
  {
    id: 'health-series-1',
    name: 'Gard Pro Health Series - Advanced',
    price: 299,
    originalPrice: 399,
    image: '/images/health-advanced.jpg',
    images: ['/images/health-advanced.jpg', '/images/health-advanced-2.jpg'],
    category: 'health-series',
    type: 'smartwatch',
    features: [
      'Advanced Health Monitoring',
      'ECG & Blood Oxygen',
      'Sleep Tracking',
      'Fitness Coaching',
      '7-Day Battery Life',
      'Water Resistant'
    ],
    specifications: {
      display: '1.9" Always-On Retina Display',
      battery: 'Up to 7 days typical use',
      waterResistance: 'WR50 (5 ATM)',
      compatibility: 'iOS 14.0+, Android 8.0+',
      material: 'Aluminum Case with Sport Loop',
      sensors: ['ECG', 'Blood Oxygen', 'Heart Rate', 'Accelerometer', 'Gyroscope'],
      connectivity: ['Bluetooth 5.0', 'Wi-Fi', 'GPS']
    },
    inStock: true,
    isNew: false,
    isFeatured: true,
    description: 'The most advanced health monitoring smartwatch with comprehensive fitness tracking and all-day battery life.'
  },
  {
    id: 'health-series-2',
    name: 'Gard Pro Health Series - Essential',
    price: 199,
    image: '/images/health-essential.jpg',
    images: ['/images/health-essential.jpg'],
    category: 'health-series',
    type: 'smartwatch',
    features: [
      'Heart Rate Monitoring',
      'Activity Tracking',
      'Sleep Analysis',
      '5-Day Battery Life',
      'Water Resistant',
      'Smart Notifications'
    ],
    specifications: {
      display: '1.7" Color Display',
      battery: 'Up to 5 days typical use',
      waterResistance: 'WR30 (3 ATM)',
      compatibility: 'iOS 12.0+, Android 7.0+',
      material: 'Polymer Case with Silicone Band',
      sensors: ['Heart Rate', 'Accelerometer', 'Gyroscope'],
      connectivity: ['Bluetooth 5.0', 'GPS']
    },
    inStock: true,
    isNew: false,
    isFeatured: false,
    description: 'Essential health tracking features in an affordable package perfect for everyday fitness enthusiasts.'
  },
  {
    id: 'ultra-series-1',
    name: 'Gard Pro Ultra Series - Titanium',
    price: 599,
    image: '/images/ultra-titanium.jpg',
    images: ['/images/ultra-titanium.jpg', '/images/ultra-titanium-2.jpg'],
    category: 'ultra-series',
    type: 'smartwatch',
    features: [
      'Titanium Construction',
      'Extreme Durability',
      'Extended Battery Life',
      'Advanced GPS',
      'Diving Capabilities',
      'Temperature Sensor'
    ],
    specifications: {
      display: '2.0" Sapphire Crystal Display',
      battery: 'Up to 14 days typical use',
      waterResistance: 'WR100 (10 ATM) + Diving',
      compatibility: 'iOS 14.0+, Android 8.0+',
      material: 'Titanium Case with Alpine Loop',
      sensors: ['ECG', 'Blood Oxygen', 'Temperature', 'Depth Gauge', 'Compass'],
      connectivity: ['Bluetooth 5.2', 'Wi-Fi 6', 'GPS', 'Cellular (Optional)']
    },
    inStock: true,
    isNew: true,
    isFeatured: true,
    description: 'The ultimate smartwatch for extreme conditions with titanium construction and advanced sensors.'
  },
  {
    id: 'loop-sport-1',
    name: 'Sport Loop - Ocean Blue',
    price: 49,
    image: '/images/loop-ocean-blue.jpg',
    images: ['/images/loop-ocean-blue.jpg'],
    category: 'accessories',
    type: 'loop',
    features: [
      'Breathable Design',
      'Adjustable Fit',
      'Machine Washable',
      'Sweat Resistant',
      'Quick Release'
    ],
    specifications: {
      material: 'Nylon Sport Loop',
      compatibility: 'All Gard Pro Models',
    },
    inStock: true,
    isNew: false,
    isFeatured: false,
    description: 'Comfortable and breathable sport loop perfect for workouts and daily wear.'
  },
  {
    id: 'screen-protector-1',
    name: 'Tempered Glass Screen Protector',
    price: 29,
    image: '/images/screen-protector.jpg',
    images: ['/images/screen-protector.jpg'],
    category: 'accessories',
    type: 'screen-protector',
    features: [
      '9H Hardness',
      'Crystal Clear',
      'Easy Installation',
      'Bubble-Free',
      'Case Friendly'
    ],
    specifications: {
      material: 'Tempered Glass',
      compatibility: 'Health & Ultra Series',
    },
    inStock: true,
    isNew: false,
    isFeatured: false,
    description: 'Premium tempered glass protection for your smartwatch display.'
  },
  {
    id: 'charger-wireless-1',
    name: 'Wireless Charging Dock',
    price: 79,
    image: '/images/wireless-charger.jpg',
    images: ['/images/wireless-charger.jpg'],
    category: 'accessories',
    type: 'charger',
    features: [
      'Fast Wireless Charging',
      'LED Status Indicator',
      'Non-Slip Base',
      'Compact Design',
      'Universal Compatibility'
    ],
    specifications: {
      material: 'Aluminum and Silicone',
      compatibility: 'All Gard Pro Models',
    },
    inStock: true,
    isNew: true,
    isFeatured: false,
    description: 'Elegant wireless charging solution for your Gard Pro smartwatch.'
  }
]

export const getProductsByCategory = (category: Product['category']) => {
  return products.filter(product => product.category === category)
}

export const getFeaturedProducts = () => {
  return products.filter(product => product.isFeatured)
}

export const getProductById = (id: string) => {
  return products.find(product => product.id === id)
}