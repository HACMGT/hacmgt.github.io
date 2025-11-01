"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[70vh] flex items-center justify-center bg-cream pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-navy mb-6 text-balance">
            Local Expertise. Exceptional Property Care.
          </h1>
          <p className="text-lg md:text-xl text-navy/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            Proudly serving Brookline and nearby communities with reliable, transparent, and personalized property
            management solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-navy text-cream hover:bg-navy/90 text-lg px-8"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-navy text-navy hover:bg-navy/5 text-lg px-8 bg-transparent"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
