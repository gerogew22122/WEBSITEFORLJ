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
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3b82f6] rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#10b981] rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <div className="relative mb-8 animate-fade-in-up">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-24 z-0 hidden lg:block">
                <Image
                  src="/lebron-hero.png"
                  alt="LeBron James"
                  width={400}
                  height={600}
                  className="w-48 h-auto md:w-64 lg:w-80 object-contain drop-shadow-[0_0_60px_rgba(59,130,246,0.8)] opacity-90 animate-float grayscale"
                  priority
                />
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-24 z-0 hidden lg:block">
                <Image
                  src="/horse-racing-hero.png"
                  alt="Horse Racing"
                  width={500}
                  height={400}
                  className="w-56 h-auto md:w-72 lg:w-96 object-contain drop-shadow-[0_0_60px_rgba(16,185,129,0.8)] opacity-90 animate-float grayscale"
                  style={{ animationDelay: "0.5s" }}
                  priority
                />
              </div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                <Image
                  src="/lj-logo.png"
                  alt="LJ Pickz Logo"
                  width={600}
                  height={600}
                  className="w-80 h-80 md:w-[500px] md:h-[500px] object-contain drop-shadow-[0_0_80px_rgba(59,130,246,1)] opacity-60 animate-pulse-slow"
                  priority
                />
              </div>

              <h1 className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-bebas font-black text-white text-balance leading-[1.2] tracking-normal uppercase">
                Join the World's{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] animate-gradient drop-shadow-[0_0_40px_rgba(59,130,246,1)]">
                  Most Profitable
                </span>{" "}
                Sports Investing Group
              </h1>
            </div>

            <p className="text-2xl md:text-3xl font-semibold text-gray-200 mb-12 text-pretty animate-fade-in-up animation-delay-200 tracking-wide">
              Get real insider picks and data-driven analysis from full-time sports experts.
            </p>

            <div className="flex flex-col items-center justify-center gap-6 mb-8 animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="relative group bg-gradient-to-r from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] text-white font-bebas text-5xl md:text-7xl px-20 py-12 rounded-2xl shadow-2xl shadow-[#3b82f6]/70 hover:shadow-[#3b82f6]/90 transition-all duration-500 hover:scale-105 animate-pulse-slow border-4 border-white/30 overflow-hidden"
                onClick={onStartClick}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                <span className="relative z-10 tracking-wider drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] font-black">
                  START FOR FREE
                </span>
                <span className="absolute -inset-1 bg-gradient-to-r from-[#3b82f6] to-[#10b981] rounded-2xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 -z-10" />
              </Button>

              <div className="flex items-center justify-center gap-3 bg-[#5865F2]/20 border-2 border-[#5865F2]/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg shadow-[#5865F2]/30">
                <Image src="/discord-logo.png" alt="Discord" width={32} height={32} className="w-8 h-8" />
                <span className="text-white font-bold text-lg">1000+ Members</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
