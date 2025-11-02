import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HAC Management - Property Management in Brookline, MA",
  description:
    "Professional property management and home improvement services in Brookline and surrounding communities. Decades of experience you can trust.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-19%20at%204.51.10%20PM-hgS25q91yZeFHHwmzyYQA7GIEXaM6m.jpg",
        sizes: "32x32",
        type: "image/jpeg",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-19%20at%204.51.10%20PM-hgS25q91yZeFHHwmzyYQA7GIEXaM6m.jpg",
        sizes: "16x16",
        type: "image/jpeg",
      },
    ],
    shortcut: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-19%20at%204.51.10%20PM-hgS25q91yZeFHHwmzyYQA7GIEXaM6m.jpg",
    apple: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-19%20at%204.51.10%20PM-hgS25q91yZeFHHwmzyYQA7GIEXaM6m.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
