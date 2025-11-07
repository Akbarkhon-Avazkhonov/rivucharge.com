import { Zap, Activity, Shield, BarChart3, Wifi, Battery } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Ultra-Fast Charging",
      description:
        "Advanced power delivery systems that charge up to 5x faster than standard solutions with intelligent load balancing.",
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description:
        "Comprehensive dashboard with live metrics, energy consumption tracking, and predictive maintenance alerts.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level encryption, secure payment processing, and compliance with international safety standards.",
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description:
        "Deep insights into usage patterns, peak demand forecasting, and ROI optimization tools for your network.",
    },
    {
      icon: Wifi,
      title: "IoT Connected",
      description:
        "Seamless integration with smart grids, automated firmware updates, and remote diagnostics capabilities.",
    },
    {
      icon: Battery,
      title: "Energy Efficient",
      description:
        "AI-powered energy management reduces waste, optimizes grid usage, and lowers operational costs by 40%.",
    },
  ]

  return (
    <section className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-balance text-3xl md:text-5xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
            {"Everything You Need to Build"}
            <br />
            <span className="text-primary">{"The Perfect Charging Network"}</span>
          </h2>
          <p className="text-pretty text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {"Powerful features designed to help you deploy, manage, and scale charging infrastructure effortlessly."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card hover:border-primary/50 transition-colors group">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
