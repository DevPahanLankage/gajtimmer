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
    id: 'gtak82-huntsman',
    name: 'GTAK82 Huntsman',
    price: 199,
    originalPrice: 290,
    image: '/images/gtak82-huntsman/1.jpg',
    images: ['/images/gtak82-huntsman/1.jpg', '/images/gtak82-huntsman/2.jpg'],
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
    description: 'The GTAK82 Smart Watch features a 1.8-inch IPS screen with a resolution of 390*390, powered by a 800mAh battery and BT5.3 for seamless connectivity. It supports heart rate, blood oxygen, sleep tracking, call functions, and multi-language options including English, French, and Spanish. With an IP68 waterproof rating, it is designed for outdoor sports and daily use, offering durability and advanced functionalities like AI voice assistant and remote control.'
  },
  {
    id: 'gtk63-ironman',
    name: 'GTK63 Iron Man',
    price: 299,
    originalPrice: 249,
    image: '/images/gtk63-ironman/5.jpg',
    images: ['/images/gtk63-ironman/5.jpg', '/images/gtk63-ironman/8.jpg', '/images/gtk63-ironman/9.jpg'],
    category: 'ultra-series',
    type: 'smartwatch',
    features: [
      '1.96" AMOLED Display',
      'Heart Rate & Blood Pressure',
      'Blood Oxygen Monitoring',
      'Bluetooth Calling',
      'IP68 Waterproof',
      'Multiple Sport Modes',
      'Multi-Language Support',
      '5-10 Days Battery Life'
    ],
    specifications: {
      display: '1.96" AMOLED Screen (410x502)',
      battery: '380mAh (5-10 days use)',
      waterResistance: 'IP68 Waterproof',
      compatibility: 'Android & iOS',
      material: 'Durable Outdoor Design',
      sensors: ['Heart Rate', 'Blood Pressure', 'Blood Oxygen'],
      connectivity: ['Bluetooth Calling', 'Multi-Language Support']
    },
    inStock: true,
    isNew: true,
    isFeatured: true,
    description: 'Equipped with a 1.96-inch AMOLED screen, this GTK63 Iron Man smart watch delivers vibrant visuals and sharp resolution (410*502). It features a robust 380mAh battery, supporting up to 5-10 days of use, alongside advanced health tracking functions like heart rate, blood pressure, and blood oxygen monitoring. Designed for outdoor enthusiasts, it boasts an IP68 waterproof rating and multiple sport modes, ensuring durability and versatility. Bluetooth calling and multi-language support enhance its user-friendly design.'
  },
  {
    id: 'gtqx11-sportstar',
    name: 'GTQx11 Sportstar',
    price: 249,
    originalPrice: 179,
    image: '/images/gtqx11-sportstar/10.jpg',
    images: ['/images/gtqx11-sportstar/10.jpg', '/images/gtqx11-sportstar/4.png', '/images/gtqx11-sportstar/6.jpg', '/images/gtqx11-sportstar/7.jpg'],
    category: 'ultra-series',
    type: 'smartwatch',
    features: [
      '1.96" IPS Display',
      'Heart Rate & SpO2 Monitoring',
      'Blood Pressure Tracking',
      'Voice Assistant',
      'Multiple Sports Modes',
      'Breathing Exercises',
      'Weather Updates',
      'Female Cycle Tracking'
    ],
    specifications: {
      display: '1.96" IPS Screen (360x360)',
      battery: '420mAh Long-lasting',
      waterResistance: 'IP67 Waterproof',
      compatibility: 'Android & iOS',
      material: 'Shockproof & Moisture-proof',
      sensors: ['Heart Rate', 'SpO2', 'Blood Pressure'],
      connectivity: ['Bluetooth 5.2', 'Voice Assistant', 'Multi-Language']
    },
    inStock: true,
    isNew: true,
    isFeatured: true,
    description: 'The GTQx11 Sportstar smart watch features a 1.96-inch IPS screen with 360*360 resolution and offers multiple functions including heart rate monitoring, SpO2, BP tracking, breathing exercises, voice assistant, and multiple sports modes. It supports Bluetooth 5.2, has a 420mAh battery, and includes versatile features like weather updates, flashlight, alarm clock, and female menstrual cycle tracking. The watch is IP67 waterproof, compatible with Android and iOS, and supports multi-language options. Its shockproof and moisture-proof packaging ensures safe transportation.'
  },
  {
    id: 'gt-pro-900',
    name: 'GT Pro 900',
    price: 99,
    originalPrice: 139,
    image: '/images/gt-pro-900/1.jpg',
    images: ['/images/gt-pro-900/1.jpg', '/images/gt-pro-900/2.jpg'],
    category: 'ultra-series',
    type: 'smartwatch',
    features: [
      '2.01" HD Large Screen',
      'Wireless Charging',
      'Rotating Design',
      'Sports Call Functions',
      'Heart Rate Tracking',
      'Sleep Monitoring',
      'Pedometer & Calorie Tracking',
      'Message Reminders'
    ],
    specifications: {
      display: '2.01" High-Definition Large Screen',
      battery: 'Up to 4 days battery life',
      waterResistance: 'IPX-7 Waterproof',
      compatibility: 'Doufit Wear App (Android & iOS)',
      material: 'Stylish Square Dial with Silicone Band',
      sensors: ['Heart Rate', 'Sleep Monitor', 'Pedometer', 'Calorie Counter'],
      connectivity: ['Wireless Charging', 'Sports Call', 'Message Reminders']
    },
    inStock: true,
    isNew: true,
    isFeatured: false,
    description: 'The GT Pro 900 Smart Watch features a 2.01 high-definition large screen, wireless charging, and a rotating design for sports calls. It supports multiple functions including heart rate tracking, sleep monitoring, pedometer, calorie tracking, and message reminders. With a stylish square dial, silicone band, and IPX-7 waterproof standard, it suits both men and women. The watch is compatible with the Doufit Wear app and offers a battery life of up to 4 days.'
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