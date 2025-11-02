"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-cream/95 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("hero")} className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-19%20at%204.51.10%20PM-hgS25q91yZeFHHwmzyYQA7GIEXaM6m.jpg"
              alt="HAC Management Logo"
              width={120}
              height={120}
              className="w-20 h-auto"
              priority
            />
          </button>
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-navy hover:text-navy/70 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-navy hover:text-navy/70 transition-colors font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-navy hover:text-navy/70 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>
          <button
            onClick={() => scrollToSection("contact")}
            className="md:hidden bg-navy text-cream px-4 py-2 rounded-md hover:bg-navy/90 transition-colors font-medium"
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  )
}
