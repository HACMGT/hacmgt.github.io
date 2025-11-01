import { Card } from "@/components/ui/card"
import { Wrench, Home, Users, ClipboardCheck } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Home,
    title: "Property Management",
    description:
      "Comprehensive oversight of residential properties, ensuring smooth operations and tenant satisfaction.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    description: "Routine maintenance and emergency repairs handled promptly by our network of trusted contractors.",
  },
  {
    icon: ClipboardCheck,
    title: "Renovations",
    description: "Full-scale renovation projects managed from concept to completion with attention to detail.",
  },
  {
    icon: Users,
    title: "Tenant Relations",
    description: "Professional tenant communication and support, fostering positive relationships and retention.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Featured-Brookline-1-tNl2Xx0P7bfiHIzOzdjjolN5UdCnX5.jpg"
          alt="Brookline Village"
          fill
          className="object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 text-center">What We Do</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-16 text-center max-w-3xl mx-auto">
            From day-to-day operations to major renovations, we provide comprehensive property management solutions
            tailored to your needs.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 bg-background border-navy/10 hover:border-navy/30 transition-colors">
                <service.icon className="w-12 h-12 text-navy mb-4" />
                <h3 className="text-2xl font-serif text-navy mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
