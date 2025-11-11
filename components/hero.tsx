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
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0f1f3a] to-[#0f1f3a]" />
      
      {/* Subtle accent glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3b82f6] rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Content - Center */}
        <div className="text-center px-4 lg:px-20">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bebas font-black text-white leading-tight mb-6 tracking-wide">
            THE #1 DATA-DRIVEN{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#10b981] mt-2">
              SPORTS INVESTING GROUP
            </span>
          </h1>

        {/* Value Proposition */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-medium">
          Get insider sport and racing picks and pro analysis from full time experts
        </p>

        {/* CTA Button */}
        <div className="flex items-center justify-center mb-12">
          <Button
            size="lg"
            className="relative group bg-gradient-to-r from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] hover:from-[#2563eb] hover:via-[#1d4ed8] hover:to-[#1e40af] text-white font-black text-xl px-16 py-8 rounded-xl shadow-2xl shadow-[#3b82f6]/60 hover:shadow-[#3b82f6]/80 transition-all duration-300 hover:scale-110 w-full sm:w-auto animate-pulse hover:animate-none"
            onClick={() => {
              const pricingSection = document.getElementById('pricing')
              if (pricingSection) {
                pricingSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <span className="relative z-10 tracking-wide">Start For Free</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </Button>
        </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 mb-16">
            <div className="flex items-center gap-2">
              <Image src="/discord-logo.png" alt="Discord" width={24} height={24} className="w-6 h-6" />
              <span className="font-semibold">1,000+ Active Members</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-600" />
            <div className="flex items-center gap-2">
              <Image src="/whop-icon.png" alt="Whop" width={32} height={32} className="w-8 h-8" />
              <span className="font-semibold">4.7 Stars on Whop</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-600" />
            <div className="font-semibold">Since 2021</div>
          </div>

          {/* 3D Phone Mockups - Side by Side */}
          <div className="flex flex-row items-center justify-center gap-4 lg:gap-20 mt-12 mb-20">
            {/* Left Phone - Sports Betting */}
            <div style={{ perspective: '1000px' }}>
              <div className="relative" style={{ 
                transform: 'rotateY(15deg) rotateX(5deg)',
                transformStyle: 'preserve-3d'
              }}>
                <div className="relative w-[160px] sm:w-[240px] lg:w-[280px] h-[340px] sm:h-[500px] lg:h-[580px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 sm:p-3 border-[8px] sm:border-[12px] border-gray-900" style={{
                  boxShadow: `
                    0 50px 100px -20px rgba(0, 0, 0, 0.8),
                    0 30px 60px -30px rgba(0, 0, 0, 0.6),
                    -20px 0 40px -10px rgba(0, 0, 0, 0.4),
                    inset 0 0 0 1px rgba(255, 255, 255, 0.05)
                  `
                }}>
                  {/* Side Buttons - Left Side */}
                  <div className="absolute left-0 top-[140px] w-1 h-14 bg-gradient-to-r from-gray-600 to-gray-800 rounded-l-sm -translate-x-[13px]" style={{
                    transform: 'translateZ(6px)',
                    boxShadow: '-2px 0 4px rgba(0,0,0,0.5)'
                  }}></div>
                  <div className="absolute left-0 top-[210px] w-1 h-14 bg-gradient-to-r from-gray-600 to-gray-800 rounded-l-sm -translate-x-[13px]" style={{
                    transform: 'translateZ(6px)',
                    boxShadow: '-2px 0 4px rgba(0,0,0,0.5)'
                  }}></div>
                  <div className="absolute left-0 top-[90px] w-1 h-8 bg-gradient-to-r from-gray-600 to-gray-800 rounded-l-sm -translate-x-[13px]" style={{
                    transform: 'translateZ(6px)',
                    boxShadow: '-2px 0 4px rgba(0,0,0,0.5)'
                  }}></div>
                  
                  {/* Power Button - Right Side */}
                  <div className="absolute right-0 top-[180px] w-1 h-20 bg-gradient-to-l from-gray-600 to-gray-800 rounded-r-sm translate-x-[13px]" style={{
                    transform: 'translateZ(6px)',
                    boxShadow: '2px 0 4px rgba(0,0,0,0.5)'
                  }}></div>

                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10"></div>
                  
                  {/* Phone Screen */}
                  <div className="relative w-full h-full bg-[#1a1a1a] rounded-[2.3rem] overflow-hidden" style={{
                    boxShadow: 'inset 0 0 20px rgba(59, 130, 246, 0.3)'
                  }}>
                    <Image
                      src="/discord-bet.png"
                      alt="Live Bet"
                      width={264}
                      height={564}
                      className="w-full h-full object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Phone - Racing Picks */}
            <div style={{ perspective: '1000px' }}>
              <div className="relative" style={{ 
                transform: 'rotateY(-15deg) rotateX(5deg)',
                transformStyle: 'preserve-3d'
              }}>
                <div className="relative w-[160px] sm:w-[240px] lg:w-[280px] h-[340px] sm:h-[500px] lg:h-[580px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 sm:p-3 border-[8px] sm:border-[12px] border-gray-900" style={{
                  boxShadow: `
                    0 50px 100px -20px rgba(0, 0, 0, 0.8),
                    0 30px 60px -30px rgba(0, 0, 0, 0.6),
                    20px 0 40px -10px rgba(0, 0, 0, 0.4),
                    inset 0 0 0 1px rgba(255, 255, 255, 0.05)
                  `
                }}>
                  {/* Power Button - Left Side */}
                  <div className="absolute left-0 top-[180px] w-1 h-20 bg-gradient-to-r from-gray-600 to-gray-800 rounded-l-sm -translate-x-[13px]" style={{
                    transform: 'translateZ(6px)',
                    boxShadow: '-2px 0 4px rgba(0,0,0,0.5)'
                  }}></div>

                  {/* Side Buttons - Right Side */}
                  <div className="absolute right-0 top-[140px] w-1 h-14 bg-gradient-to-l from-gray-600 to-gray-800 rounded-r-sm translate-x-[13px]" style={{
                    transform: 'translateZ(6px)',
                    boxShadow: '2px 0 4px rgba(0,0,0,0.5)'
                  }}></div>
                  <div className="absolute right-0 top-[210px] w-1 h-14 bg-gradient-to-l from-gray-600 to-gray-800 rounded-r-sm translate-x-[13px]" style={{
                    transform: 'translateZ(6px)',
                    boxShadow: '2px 0 4px rgba(0,0,0,0.5)'
                  }}></div>
                  <div className="absolute right-0 top-[90px] w-1 h-8 bg-gradient-to-l from-gray-600 to-gray-800 rounded-r-sm translate-x-[13px]" style={{
                    transform: 'translateZ(6px)',
                    boxShadow: '2px 0 4px rgba(0,0,0,0.5)'
                  }}></div>

                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10"></div>
                  
                  {/* Phone Screen */}
                  <div className="relative w-full h-full bg-[#1a1a1a] rounded-[2.3rem] overflow-hidden" style={{
                    boxShadow: 'inset 0 0 20px rgba(59, 130, 246, 0.3)'
                  }}>
                    <Image
                      src="/betslip.png"
                      alt="Bet Slip"
                      width={264}
                      height={564}
                      className="w-full h-full object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
