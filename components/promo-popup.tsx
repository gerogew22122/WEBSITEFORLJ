"use client"

import { X, Trophy, TrendingUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface PromoPopupProps {
  isVisible: boolean
  onClose: () => void
}

export function PromoPopup({ isVisible, onClose }: PromoPopupProps) {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-500">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Popup */}
      <div className="relative w-full max-w-2xl bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2a] to-[#0a0a0a] rounded-2xl border-2 border-[#3b82f6] shadow-2xl shadow-[#3b82f6]/50 overflow-hidden animate-in zoom-in-95 duration-500">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#3b82f6] rounded-full blur-[100px] animate-pulse" />
          <div
            className="absolute bottom-0 right-0 w-64 h-64 bg-[#10b981] rounded-full blur-[100px] animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative p-8 md:p-12">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-24 animate-pulse">
              <Image
                src="/lj-logo.png"
                alt="LJ Logo"
                width={96}
                height={96}
                className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
              />
            </div>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 text-balance">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#10b981] to-[#3b82f6] animate-pulse">
              Join Now
            </span>
            <br />
            Get 1 Week FREE!
          </h2>

          {/* Subheading */}
          <p className="text-xl text-center text-gray-300 mb-8 text-pretty">
            Access premium sports tips from professional tipsters
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg border border-[#3b82f6]/30 hover:border-[#3b82f6] transition-all duration-300 hover:scale-105">
              <Trophy className="w-8 h-8 text-[#3b82f6] mb-2" />
              <span className="text-sm font-semibold text-white">Horse Racing Tips</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg border border-[#10b981]/30 hover:border-[#10b981] transition-all duration-300 hover:scale-105">
              <TrendingUp className="w-8 h-8 text-[#10b981] mb-2" />
              <span className="text-sm font-semibold text-white">Sports Betting</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg border border-[#3b82f6]/30 hover:border-[#3b82f6] transition-all duration-300 hover:scale-105">
              <Zap className="w-8 h-8 text-[#3b82f6] mb-2" />
              <span className="text-sm font-semibold text-white">Live Updates</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="w-full md:w-auto bg-gradient-to-r from-[#3b82f6] to-[#10b981] text-white hover:from-[#2563eb] hover:to-[#059669] font-bold text-2xl px-12 py-8 h-auto shadow-2xl shadow-[#3b82f6]/50 hover:shadow-[#3b82f6]/70 transition-all duration-300 hover:scale-105 animate-pulse"
              onClick={onClose}
            >
              Claim Your Free Week Now!
            </Button>
            <p className="text-sm text-gray-400">No credit card required • Cancel anytime</p>
          </div>

          {/* Trust badge */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">Join 381,000+ winning members</p>
          </div>
        </div>
      </div>
    </div>
  )
}
