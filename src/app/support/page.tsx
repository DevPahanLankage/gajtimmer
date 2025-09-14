import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Support Center - Gard Pro',
  description: 'Get help with your Gard Pro smartwatch. Access help center, warranty information, and contact support.',
}

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">Center</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're here to help you get the most out of your Gard Pro smartwatch. Find answers, get support, and learn more about your device.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Help Center */}
            <Link href="/support/help" className="group">
              <div className="bg-gray-900 rounded-lg p-8 text-center hover:bg-gray-800 transition-colors h-full">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">📚</div>
                <h3 className="text-2xl font-semibold mb-4">Help Center</h3>
                <p className="text-gray-400 mb-6">
                  Find answers to frequently asked questions, setup guides, and troubleshooting tips.
                </p>
                <div className="text-blue-400 group-hover:text-blue-300">
                  Browse Articles →
                </div>
              </div>
            </Link>

            {/* Contact Support */}
            <Link href="/support/contact" className="group">
              <div className="bg-gray-900 rounded-lg p-8 text-center hover:bg-gray-800 transition-colors h-full">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">💬</div>
                <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
                <p className="text-gray-400 mb-6">
                  Get in touch with our support team for personalized assistance with your device.
                </p>
                <div className="text-blue-400 group-hover:text-blue-300">
                  Contact Support →
                </div>
              </div>
            </Link>

            {/* Warranty Info */}
            <Link href="/support/warranty" className="group">
              <div className="bg-gray-900 rounded-lg p-8 text-center hover:bg-gray-800 transition-colors h-full">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🛡️</div>
                <h3 className="text-2xl font-semibold mb-4">Warranty</h3>
                <p className="text-gray-400 mb-6">
                  Learn about your warranty coverage, how to make claims, and extend your protection.
                </p>
                <div className="text-blue-400 group-hover:text-blue-300">
                  View Details →
                </div>
              </div>
            </Link>

            {/* User Manual */}
            <Link href="/support/manual" className="group">
              <div className="bg-gray-900 rounded-lg p-8 text-center hover:bg-gray-800 transition-colors h-full">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">📖</div>
                <h3 className="text-2xl font-semibold mb-4">User Manual</h3>
                <p className="text-gray-400 mb-6">
                  Download comprehensive user manuals and quick start guides for all our products.
                </p>
                <div className="text-blue-400 group-hover:text-blue-300">
                  Download →
                </div>
              </div>
            </Link>

            {/* Software Updates */}
            <Link href="/support/updates" className="group">
              <div className="bg-gray-900 rounded-lg p-8 text-center hover:bg-gray-800 transition-colors h-full">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🔄</div>
                <h3 className="text-2xl font-semibold mb-4">Software Updates</h3>
                <p className="text-gray-400 mb-6">
                  Keep your smartwatch up to date with the latest features and security improvements.
                </p>
                <div className="text-blue-400 group-hover:text-blue-300">
                  Check Updates →
                </div>
              </div>
            </Link>

            {/* Community */}
            <Link href="/support/community" className="group">
              <div className="bg-gray-900 rounded-lg p-8 text-center hover:bg-gray-800 transition-colors h-full">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">👥</div>
                <h3 className="text-2xl font-semibold mb-4">Community</h3>
                <p className="text-gray-400 mb-6">
                  Connect with other Gard Pro users, share tips, and get advice from the community.
                </p>
                <div className="text-blue-400 group-hover:text-blue-300">
                  Join Community →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Need Immediate Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">📞 Phone Support</h3>
              <p className="text-gray-400 mb-2">1-800-GARD-PRO</p>
              <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">💬 Live Chat</h3>
              <p className="text-gray-400 mb-2">Available 24/7</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Start Chat
              </button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
              <p className="text-gray-400 mb-2">support@gardpro.com</p>
              <p className="text-sm text-gray-500">Response within 24 hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}