"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function LoadingScreen({ onComplete, fadeOut = false }: { onComplete: () => void; fadeOut?: boolean }) {
  const [stage, setStage] = useState(0)
  const [typedText, setTypedText] = useState("")
  const fullText = "We have found the most profitable sportsbetting method"

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 800), // LJ logo appears (slower start)
      setTimeout(() => setStage(2), 2000), // Start typing text
      setTimeout(() => setStage(3), 5000), // "EVER" slam
      setTimeout(() => onComplete(), 6500), // Complete
    ]

    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  useEffect(() => {
    if (stage >= 2 && stage < 3) {
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typingInterval)
        }
      }, 70) // Typing speed (slower)

      return () => clearInterval(typingInterval)
    }
  }, [stage])

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden transition-opacity duration-700 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0f1e] to-black">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, rgba(59,130,246,0.2) 0%, transparent 70%)`,
            animation: "breathe 4s ease-in-out infinite",
          }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `conic-gradient(from 180deg at 50% 50%, transparent 0deg, rgba(59,130,246,0.15) 90deg, transparent 180deg, rgba(59,130,246,0.15) 270deg, transparent 360deg)`,
          animation: "rotate 20s linear infinite",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl">
        <div
          className={`mb-16 transition-all duration-1000 ${
            stage >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="relative w-48 h-48 mx-auto">
            <Image
              src="/lj-logo.png"
              alt="LJ Pickz"
              fill
              className="object-contain"
              style={{
                filter:
                  stage >= 1
                    ? "drop-shadow(0 0 50px rgba(59,130,246,0.9)) drop-shadow(0 0 100px rgba(59,130,246,0.5))"
                    : "none",
                animation:
                  stage >= 1
                    ? "logoEntrance 1.5s cubic-bezier(0.34, 1.56, 0.64, 1), subtleFloat 4s ease-in-out infinite 1.5s"
                    : "none",
              }}
            />
          </div>
        </div>

        <div className="space-y-8">
          <h1
            className={`font-light tracking-wide text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white transition-all duration-1000 leading-tight px-4 ${
              stage >= 2 && stage < 3
                ? "opacity-100 translate-y-0"
                : stage >= 3
                  ? "opacity-0 -translate-y-20"
                  : "opacity-0 translate-y-10"
            }`}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              letterSpacing: "0.02em",
              textShadow: "0 2px 40px rgba(0,0,0,0.8)",
              minHeight: "120px",
            }}
          >
            {typedText}
            {stage >= 2 && stage < 3 && typedText.length < fullText.length && (
              <span className="animate-pulse">|</span>
            )}
          </h1>

          <div
            className={`transition-all ${stage >= 3 ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
            style={{
              animation: stage >= 3 ? "powerSlam 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)" : "none",
            }}
          >
            <h2
              className="font-black text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] leading-none bg-gradient-to-b from-[#93c5fd] via-[#3b82f6] to-[#1e40af] bg-clip-text text-transparent"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                letterSpacing: "0.05em",
                textShadow: "0 0 80px rgba(59,130,246,0.6)",
                WebkitTextStroke: "2px rgba(59,130,246,0.2)",
              }}
            >
              EVER
            </h2>
          </div>
        </div>

        <div className={`mt-20 transition-all duration-1000 ${stage >= 1 ? "opacity-100" : "opacity-0"}`}>
          <div className="w-80 h-0.5 bg-white/5 rounded-full mx-auto overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#10b981]"
              style={{
                width: `${(stage / 3) * 100}%`,
                transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 0 20px rgba(59,130,246,0.6), 0 0 40px rgba(59,130,246,0.3)",
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes breathe {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes logoEntrance {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          70% {
            transform: scale(1.1) rotate(10deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes subtleFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes powerSlam {
          0% {
            transform: scale(0.3) translateY(-100px);
            opacity: 0;
          }
          50% {
            transform: scale(1.15) translateY(10px);
          }
          70% {
            transform: scale(0.95) translateY(-5px);
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
