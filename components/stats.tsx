export function Stats() {
  const stats = [
    {
      value: "99.9%",
      label: "Uptime Guarantee",
      description: "Maximum reliability",
    },
    {
      value: "5x",
      label: "Faster Charging",
      description: "Than competitors",
    },
    {
      value: "40%",
      label: "Energy Savings",
      description: "Reduced carbon footprint",
    },
    {
      value: "24/7",
      label: "Support",
      description: "Always available",
    },
  ]

  return (
    <section className="py-20 border-y border-border bg-card/50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary font-[family-name:var(--font-heading)]">
                {stat.value}
              </div>
              <div className="text-base md:text-lg font-semibold text-foreground">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
