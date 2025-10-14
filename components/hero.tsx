"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeroProps {
  onStartClick?: () => void
}

export function Hero({ onStartClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2a] to-[#0a0a0a]" />

      {/* Glowing orbs for atmosphere */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3b82f6] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#10b981] rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* LeBron - Left Side */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <Image
                  src="/lebron-hero.png"
                  alt="LeBron James"
                  width={350}
                  height={500}
                  className="w-full h-auto object-contain opacity-70 hover:opacity-90 transition-opacity duration-500"
                  priority
                />
              </div>
            </div>

            {/* Center Content */}
            <div className="text-center space-y-8">
              <div className="relative">
                <div className="mb-8">
                  <Image
                    src="/lj-logo.png"
                    alt="LJ Pickz Logo"
                    width={200}
                    height={200}
                    className="w-32 h-32 md:w-40 md:h-40 mx-auto object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.8)]"
                    priority
                  />
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bebas font-black text-white leading-tight uppercase mb-6">
                  The World's Most{" "}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981]">
                    Profitable Sports
                  </span>{" "}
                  Investing Group
                </h1>

                <p className="text-xl md:text-2xl font-medium text-gray-300 mb-8 max-w-2xl mx-auto">
                  Get real insider picks and data-driven analysis from full-time sports experts.
                </p>
              </div>

              <div className="flex flex-col items-center gap-6">
                <Button
                  size="lg"
                  className="relative group bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white font-bebas text-4xl md:text-5xl px-16 py-8 rounded-xl shadow-2xl shadow-[#3b82f6]/50 hover:shadow-[#3b82f6]/80 transition-all duration-300 hover:scale-105"
                  onClick={onStartClick}
                >
                  <span className="relative z-10 font-black tracking-wide">START FOR FREE</span>
                </Button>

                <div className="flex items-center gap-3 bg-[#5865F2]/20 border-2 border-[#5865F2]/50 rounded-full px-6 py-3 backdrop-blur-sm">
                  <Image src="/discord-logo.png" alt="Discord" width={28} height={28} className="w-7 h-7" />
                  <span className="text-white font-bold">1000+ Members</span>
                </div>
              </div>
            </div>

            {/* Horse - Right Side */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <Image
                  src="/horse-racing-hero.png"
                  alt="Horse Racing"
                  width={400}
                  height={350}
                  className="w-full h-auto object-contain opacity-70 hover:opacity-90 transition-opacity duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
