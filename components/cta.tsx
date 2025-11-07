import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-balance text-4xl md:text-6xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
            {"Ready to Transform Your "}
            <span className="text-primary">{"Charging Infrastructure?"}</span>
          </h2>
          <p className="text-pretty text-lg md:text-xl text-muted-foreground leading-relaxed">
            {
              "Join thousands of businesses powering the future with RivuCharge. Get started today with a free consultation and see how our platform can revolutionize your charging network."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-base px-8 group">
              {"Schedule a Demo"}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
              {"Contact Sales"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
