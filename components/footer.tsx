import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-navy text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-19%20at%204.51.10%20PM-hgS25q91yZeFHHwmzyYQA7GIEXaM6m.jpg"
                alt="HAC Management Logo"
                width={150}
                height={150}
                className="w-32 h-auto mb-4 brightness-0 invert"
              />
              <p className="text-cream/80 text-sm">Serving Brookline and surrounding communities</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-cream/80 text-sm mb-2">
                © {new Date().getFullYear()} HAC Management. All rights reserved.
              </p>
              <a href="mailto:sam@HACMGT.com" className="text-cream/80 hover:text-cream transition-colors text-sm">
                sam@HACMGT.com
              </a>
            </div>
          </div>
          {/* Added logo to the white box at the bottom of footer */}
          <div className="mt-8 pt-8 border-t border-cream/20 flex justify-center">
            <div className="bg-cream rounded-lg p-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-19%20at%204.51.10%20PM-hgS25q91yZeFHHwmzyYQA7GIEXaM6m.jpg"
                alt="HAC Management Logo"
                width={150}
                height={150}
                className="w-32 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
