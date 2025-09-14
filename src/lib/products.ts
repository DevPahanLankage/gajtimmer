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
    name: 'GaJTimmer Health Series - Advanced',
    price: 299,
    originalPrice: 399,
    image: '/images/H3f0f78e46da5402f8ee59fd9dc72d397a.jpg_960x960q80.jpg',
    images: ['/images/H3f0f78e46da5402f8ee59fd9dc72d397a.jpg_960x960q80.jpg', '/images/He2a36091e23541098602b915a845c803a.jpg_960x960q80.jpg'],
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
    name: 'GaJTimmer Health Series - Essential',
    price: 199,
    image: '/images/H06a6de17b65e4dc2a214a568d334f269l.jpg_960x960q80.jpg',
    images: ['/images/H06a6de17b65e4dc2a214a568d334f269l.jpg_960x960q80.jpg'],
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
    name: 'GaJTimmer Ultra Series - Titanium',
    price: 599,
    image: '/images/H212eb1205b6642989d49382f1e698e5cc.jpg',
    images: ['/images/H212eb1205b6642989d49382f1e698e5cc.jpg', '/images/H12d86414dfc54ffd90cce04f4887c2fc1.png_960x960q80.png'],
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
    id: 'ultra-series-2',
    name: 'GaJTimmer Ultra Series - Sport',
    price: 399,
    image: '/images/H48100b721dcc4a609809c35f6fc19fdce.jpg_960x960q80.jpg',
    images: ['/images/H48100b721dcc4a609809c35f6fc19fdce.jpg_960x960q80.jpg', '/images/H58d93bb0ef7f43048f69230de48edc5ei.jpg_960x960q80.jpg'],
    category: 'ultra-series',
    type: 'smartwatch',
    features: [
      'Rugged Design',
      'Multi-Sport Tracking',
      'Extended GPS',
      '10-Day Battery Life',
      'Water Resistant',
      'Military Grade Durability'
    ],
    specifications: {
      display: '1.8" Tough Display',
      battery: 'Up to 10 days typical use',
      waterResistance: 'WR50 (5 ATM)',
      compatibility: 'iOS 13.0+, Android 8.0+',
      material: 'Reinforced Polymer Case',
      sensors: ['Heart Rate', 'GPS', 'Accelerometer', 'Barometer'],
      connectivity: ['Bluetooth 5.0', 'GPS']
    },
    inStock: true,
    isNew: false,
    isFeatured: true,
    description: 'Built for adventure with rugged design and extended battery life for outdoor enthusiasts.'
  },
  {
    id: 'loop-sport-1',
    name: 'Sport Loop - Ocean Blue',
    price: 49,
    image: '/images/Ha710705f99354c32b386bf6d18a4e44eW.jpg_960x960q80.jpg',
    images: ['/images/Ha710705f99354c32b386bf6d18a4e44eW.jpg_960x960q80.jpg'],
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
      compatibility: 'All GaJTimmer Models',
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
    image: '/images/H0a0acccceadb464a97cc22d1c316e8127.jpg_960x960q80.jpg',
    images: ['/images/H0a0acccceadb464a97cc22d1c316e8127.jpg_960x960q80.jpg'],
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
    image: '/images/Hd5e40e0b28924d8bbbb9ce0ae2208d79B.jpg',
    images: ['/images/Hd5e40e0b28924d8bbbb9ce0ae2208d79B.jpg'],
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
      compatibility: 'All GaJTimmer Models',
    },
    inStock: true,
    isNew: true,
    isFeatured: false,
    description: 'Elegant wireless charging solution for your GaJTimmer smartwatch.'
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