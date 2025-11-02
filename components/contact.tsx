"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    
    // Convert FormData to JSON object
    const formObject = Object.fromEntries(formData.entries())
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formObject),
      })

      console.log("Response status:", response.status, response.statusText)

      const data = await response.json()
      console.log("Web3Forms response:", data)

      // Since the email actually gets sent successfully, 
      // we'll show success for any HTTP 200 response
      if (response.status === 200) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        })
        e.currentTarget.reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Contact form error:", error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 text-center">Get in Touch</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-16 text-center max-w-3xl mx-auto">
            Ready to discuss your property management needs? We'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif text-navy mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-navy mt-1" />
                  <div>
                    <p className="font-medium text-navy mb-1">Email</p>
                    <a href="mailto:sam@HACMGT.com" className="text-muted-foreground hover:text-navy transition-colors">
                      sam@HACMGT.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-navy mt-1" />
                  <div>
                    <p className="font-medium text-navy mb-1">Service Area</p>
                    <p className="text-muted-foreground">Brookline, MA and surrounding communities</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-navy">Locally owned and operated.</strong> We're proud members of the
                  Brookline community, bringing decades of combined experience to every property we manage.
                </p>
              </div>
            </div>

            <Card className="p-8 bg-background border-navy/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Web3Forms Access Key - Replace with your actual key */}
                <input type="hidden" name="access_key" value="e46fb4fb-3e34-45d1-879e-aad23f04b15d" />
                
                {/* Optional: Redirect after submission */}
                <input type="hidden" name="redirect" value="false" />
                
                {/* Optional: Custom subject line */}
                <input type="hidden" name="subject" value="New Contact Form Submission from HACMGT Website" />
                
                {/* Optional: Email to receive submissions */}
                <input type="hidden" name="from_name" value="HACMGT Website" />
                
                <div>
                  <Label htmlFor="name" className="text-navy">
                    Name *
                  </Label>
                  <Input id="name" name="name" required className="mt-2" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-navy">
                    Email *
                  </Label>
                  <Input id="email" name="email" type="email" required className="mt-2" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-navy">
                    Phone
                  </Label>
                  <Input id="phone" name="phone" type="tel" className="mt-2" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-navy">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    className="mt-2 min-h-32"
                    placeholder="Tell us about your property management needs..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-navy text-cream hover:bg-navy/90"
                  size="lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
