import HeroSection from '@/components/HeroSection'
import ProductHighlights from '@/components/ProductHighlights'
import PromotionalBanner from '@/components/PromotionalBanner'
import CallToAction from '@/components/CallToAction'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PromotionalBanner />
      <ProductHighlights />
      <CallToAction />
    </div>
  )
}
