"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeroProps {
  onStartClick?: () => void
}

export function Hero({ onStartClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0f1f3a] to-[#0a0a0a]" />
      
      {/* Subtle accent glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3b82f6] rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/lj-logo.png"
            alt="LJ Pickz"
            width={120}
            height={120}
            className="w-20 h-20 md:w-28 md:h-28 mx-auto object-contain"
            priority
          />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bebas font-black text-white leading-tight mb-6 tracking-wide">
          THE #1 DATA-DRIVEN{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#10b981] mt-2">
            SPORTS INVESTING GROUP
          </span>
        </h1>

        {/* Value Proposition */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-medium">
          Get verified picks and pro analysis from full-time experts.
        </p>

        {/* CTA Button */}
        <div className="flex items-center justify-center mb-12">
          <Button
            size="lg"
            className="relative group bg-gradient-to-r from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] hover:from-[#2563eb] hover:via-[#1d4ed8] hover:to-[#1e40af] text-white font-black text-xl px-16 py-8 rounded-xl shadow-2xl shadow-[#3b82f6]/60 hover:shadow-[#3b82f6]/80 transition-all duration-300 hover:scale-110 w-full sm:w-auto animate-pulse hover:animate-none"
            onClick={onStartClick}
          >
            <span className="relative z-10 tracking-wide">🎯 GET 7 DAYS FREE NOW</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </Button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
          <div className="flex items-center gap-2">
            <Image src="/discord-logo.png" alt="Discord" width={24} height={24} className="w-6 h-6" />
            <span className="font-semibold">1,000+ Active Members</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-600" />
          <div className="font-semibold">Verified 72% Win Rate</div>
          <div className="hidden sm:block w-px h-4 bg-gray-600" />
          <div className="font-semibold">Since 2021</div>
        </div>
      </div>
    </section>
  )
}
