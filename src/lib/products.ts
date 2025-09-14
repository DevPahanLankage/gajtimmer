export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  images: string[]
  category: 'health-series' | 'ultra-series'
  type: 'smartwatch'
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
    id: 'ultra-series-ak82',
    name: 'GaJTimmer AK82',
    price: 199,
    originalPrice: 249,
    image: '/images/1.jpg',
    images: ['/images/1.jpg', '/images/2.jpg'],
    category: 'ultra-series',
    type: 'smartwatch',
    features: [
      '1.8" IPS HD Display',
      'Heart Rate & Blood Oxygen',
      'Sleep Tracking',
      'Call Functions',
      'AI Voice Assistant',
      'IP68 Waterproof',
      'Multi-Language Support',
      'Remote Control'
    ],
    specifications: {
      display: '1.8" IPS Screen (390x390)',
      battery: '800mAh Long-lasting',
      waterResistance: 'IP68 Waterproof',
      compatibility: 'Android & iOS',
      material: 'Durable Sports Design',
      sensors: ['Heart Rate', 'Blood Oxygen', 'Sleep Monitor'],
      connectivity: ['Bluetooth 5.3', 'Call Functions']
    },
    inStock: true,
    isNew: true,
    isFeatured: true,
    description: 'The GaJTimmer AK82 Smart Watch features a 1.8-inch IPS screen with a resolution of 390*390, powered by a 800mAh battery and BT5.3 for seamless connectivity. It supports heart rate, blood oxygen, sleep tracking, call functions, and multi-language options including English, French, and Spanish. With an IP68 waterproof rating, it is designed for outdoor sports and daily use, offering durability and advanced functionalities like AI voice assistant and remote control.'
  },
  {
    id: 'health-series-2',
    name: 'GaJTimmer Health Series - Essential',
    price: 199,
    image: '/images/5.jpg',
    images: ['/images/5.jpg', '/images/6.jpg'],
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
    image: '/images/3.jpg',
    images: ['/images/3.jpg', '/images/4.png'],
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
    image: '/images/7.jpg',
    images: ['/images/7.jpg', '/images/8.jpg'],
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