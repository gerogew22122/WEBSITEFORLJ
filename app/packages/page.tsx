"use client"

import { Navigation } from "@/components/navigation"
import { Pricing } from "@/components/pricing"
import { Footer } from "@/components/footer"

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      <div className="pt-20">
        <Pricing />
      </div>
      <Footer />
    </div>
  )
}
