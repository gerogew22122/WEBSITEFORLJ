"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function PhoneShowcase() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-center justify-center gap-8 md:gap-16">
        {/* Left Phone */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0 rotate-0"
              : "opacity-0 -translate-x-32 -rotate-12"
          }`}
          style={{
            perspective: "1000px",
          }}
        >
          <div
            className="relative"
            style={{
              transform: "rotateY(-15deg) rotateX(5deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Phone Frame */}
            <div className="relative w-64 md:w-72 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-700">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
              
              {/* Screen */}
              <div className="relative bg-black rounded-[2rem] overflow-hidden">
                <Image
                  src="/discord-bet-1.png"
                  alt="Discord Bet 1"
                  width={512}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Phone */}
        <div
          className={`transition-all duration-1000 ease-out delay-200 ${
            isVisible
              ? "opacity-100 translate-x-0 rotate-0"
              : "opacity-0 translate-x-32 rotate-12"
          }`}
          style={{
            perspective: "1000px",
          }}
        >
          <div
            className="relative"
            style={{
              transform: "rotateY(15deg) rotateX(5deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Phone Frame */}
            <div className="relative w-64 md:w-72 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-700">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
              
              {/* Screen */}
              <div className="relative bg-black rounded-[2rem] overflow-hidden">
                <Image
                  src="/discord-bet-2.png"
                  alt="Discord Bet 2"
                  width={512}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
