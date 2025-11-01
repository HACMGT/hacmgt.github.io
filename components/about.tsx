import Image from "next/image"
import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1761840980-zHKuD7pgBZ2mRvlcRLcci4lan8Hmsp.png"
          alt="Brookline Reservoir"
          fill
          className="object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 text-center">About Us</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center max-w-3xl mx-auto">
            HAC Property Management is a locally owned and operated firm proudly serving Brookline and surrounding
            communities. With decades of combined experience in construction and enterprise operations, our team
            delivers personalized service that property owners can trust.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-16 text-center max-w-3xl mx-auto">
            We specialize in comprehensive management solutions — from routine maintenance to full-scale renovations —
            designed to protect each client's investment and enhance property value. Our close relationships with
            reliable contractors, commitment to transparent communication, and proactive approach ensure that every
            property is maintained to the highest standards.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-cream border-none">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 relative w-48 h-48 rounded-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sam-headshot-oQD9VkAg7ix4o4zfI0Cx3dudvQrITb.jpg"
                    alt="Sam Choreim"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-serif text-navy mb-2">Sam Choreim</h3>
                <p className="text-muted-foreground leading-relaxed">
                  For more than 25 years, Sam has been an engaged member of the Brookline community, where he and his
                  wife have raised their three sons through the local schools. With over a decade of hands-on experience
                  in construction and property repair, Sam combines a builder's precision with a neighbor's care in
                  every project he takes on. His deep understanding of vendor coordination and renovation management
                  ensures each property is maintained with professionalism, integrity, and personal attention.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-cream border-none">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 relative w-48 h-48 rounded-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Farshid-Headshot-6dJcLyqBe5TAzVM8ZTS0U9YCeiecJa.jpeg"
                    alt="Farshid Varasteh"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-serif text-navy mb-2">Farshid Varasteh</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Farshid has been a proud member of the Brookline community since 1998, where he and his wife have
                  raised their two sons through the town's public schools. As president of his building's 28-unit Board
                  of Trustees, he works closely with the property manager to provide high-quality service while
                  maintaining cost efficiency for residents. With two decades of experience in enterprise operations,
                  Farshid brings a strong foundation in communication, reliability, and customer service — qualities
                  that ensure property owners receive both transparency and trust in every interaction.
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, HAC Property Management oversees two six-unit buildings in Brookline, as well as two rental
              units in Brighton on behalf of absentee owners. Rooted in the Brookline community, we are deeply invested
              in providing exceptional service and lasting value to every client we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
