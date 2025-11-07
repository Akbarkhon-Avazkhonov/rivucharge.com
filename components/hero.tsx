import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground">
            <Zap className="w-4 h-4 text-primary" />
            <span>{"Introducing Next-Gen Charging Technology"}</span>
          </div>

          {/* Main headline */}
          <h1 className="text-balance font-[family-name:var(--font-heading)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            {"The Complete Platform to "}
            <span className="text-primary">{"Power the Future"}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-pretty text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {
              "Revolutionary charging infrastructure designed for efficiency, sustainability, and unprecedented speed. Deploy, monitor, and scale your charging network with RivuCharge."
            }
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="text-base px-8 group">
              {"Get Started"}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
              {"Explore the Platform"}
            </Button>
          </div>

          {/* Hero image placeholder */}
          <div className="w-full max-w-5xl pt-12">
            <div className="relative rounded-xl overflow-hidden border border-border bg-card shadow-2xl">
              <img src="/modern-electric-vehicle-charging-station-dashboard.jpg" alt="RivuCharge Platform Dashboard" className="w-full h-auto" />
              {/* Glow effect on image */}
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
