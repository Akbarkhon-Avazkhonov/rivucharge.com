import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Stats } from "@/components/stats"
import { Benefits } from "@/components/benefits"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Features />
      <Benefits />
      <CTA />
      <Footer />
    </main>
  )
}
