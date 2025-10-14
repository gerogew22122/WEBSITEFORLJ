"use client"

import React, { useEffect, useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AutoPromoPopupProps {
  onClose: () => void
}

export function AutoPromoPopup({ onClose }: AutoPromoPopupProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-500">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-gradient-to-br from-[#0f1f3a] to-[#0a0a0a] border-2 border-[#3b82f6]/50 rounded-2xl p-8 md:p-12 max-w-lg w-full shadow-2xl shadow-[#3b82f6]/30 animate-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center space-y-6">
          <div className="mx-auto w-20 h-20 bg-[#3b82f6]/20 rounded-full flex items-center justify-center mb-6">
            <span className="text-5xl">🎉</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bebas font-black text-white leading-tight">
            JOIN LJ FOR 7 DAYS FREE
          </h2>
          
          <p className="text-xl text-gray-300 font-semibold">
            Use code <span className="text-[#3b82f6] font-black">FREE</span> at checkout!
          </p>

          <div className="pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] hover:from-[#2563eb] hover:to-[#1e40af] text-white font-black text-lg px-12 py-6 rounded-xl shadow-xl shadow-[#3b82f6]/50 hover:shadow-[#3b82f6]/70 transition-all duration-300 hover:scale-105 w-full"
              onClick={() => {
                // Handle sign up
                window.open("https://discord.gg/your-server", "_blank")
              }}
            >
              CLAIM MY FREE TRIAL →
            </Button>
          </div>

          <p className="text-sm text-gray-500">
            Enter code FREE at checkout • No credit card required
          </p>
        </div>
      </div>
    </div>
  )
}
