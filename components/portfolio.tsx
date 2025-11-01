import { Card } from "@/components/ui/card"
import { Building2, MapPin } from "lucide-react"

const properties = [
  {
    location: "Brookline, MA",
    type: "Two 6-Unit Buildings",
    description: "Full-service property management including maintenance, tenant relations, and financial oversight.",
  },
  {
    location: "Brighton, MA",
    type: "Two Rental Units",
    description:
      "Comprehensive management for absentee owners, ensuring properties are well-maintained and tenants are satisfied.",
  },
]

export function Portfolio() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 text-center">What We've Done</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-16 text-center max-w-3xl mx-auto">
            Our current portfolio reflects our commitment to excellence and personalized service for property owners in
            the Greater Boston area.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {properties.map((property, index) => (
              <Card key={index} className="p-8 bg-cream border-none">
                <Building2 className="w-12 h-12 text-navy mb-4" />
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-navy/60" />
                  <span className="text-sm text-navy/60 uppercase tracking-wide">{property.location}</span>
                </div>
                <h3 className="text-2xl font-serif text-navy mb-3">{property.type}</h3>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
