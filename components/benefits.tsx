import { Check } from "lucide-react"

export function Benefits() {
  const benefits = [
    "Deploy charging stations in days, not months",
    "Reduce infrastructure costs by up to 40%",
    "Scale seamlessly from 10 to 10,000+ stations",
    "Integrate with existing energy management systems",
    "White-label solutions for your brand",
    "Comprehensive API for custom integrations",
  ]

  return (
    <section className="py-24 md:py-32 bg-card/50">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-sm text-foreground">
              {"Why RivuCharge"}
            </div>
            <h2 className="text-balance text-3xl md:text-5xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
              {"Built for the "}
              <span className="text-accent">{"Modern Energy Landscape"}</span>
            </h2>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
              {
                "RivuCharge combines cutting-edge hardware with intelligent software to create the most advanced charging ecosystem available. Our platform is trusted by leading organizations worldwide."
              }
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl">
              <img src="/futuristic-electric-vehicle-charging-network-with-.jpg" alt="RivuCharge Network Visualization" className="w-full h-auto" />
            </div>
            {/* Accent glow */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
