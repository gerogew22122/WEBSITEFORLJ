"use client"

import { useState, useEffect } from "react"
import { Hero } from "@/components/hero"
import { PromoBanner } from "@/components/promo-banner"
import { Features } from "@/components/features"
import { Results } from "@/components/results"
import { Reviews } from "@/components/reviews"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { LoadingScreen } from "@/components/loading-screen"
import { PromoPopup } from "@/components/promo-popup"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  // </CHANGE>

  useEffect(() => {
    // Prevent scroll during loading
    if (isLoading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isLoading])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setTimeout(() => setShowContent(true), 100)
  }

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div
        className={`min-h-screen bg-[#0a0a0a] transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navigation />
        <Hero onStartClick={() => setShowPopup(true)} />
        {/* </CHANGE> */}
        <PromoBanner />
        <Features />
        <Results />
        <Reviews />
        <Footer />
        <PromoPopup isVisible={showPopup} onClose={() => setShowPopup(false)} />
        {/* </CHANGE> */}
      </div>
    </>
  )
}
