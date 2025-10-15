"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#0f1f3a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bebas font-black text-white mb-4">
            CHOOSE YOUR PLAN
          </h2>
          <p className="text-xl text-gray-400">
            Start winning smarter today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 7 Day Trial Package */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 rounded-2xl p-8 hover:border-[#3b82f6]/50 transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bebas font-black text-white mb-2">
                7 DAY TRIAL
              </h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl font-black text-white">$34.44</span>
              </div>
              <p className="text-gray-400">Try before you commit</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="h-5 w-5 text-[#3b82f6] flex-shrink-0" />
                <span>7 days of premium picks</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="h-5 w-5 text-[#3b82f6] flex-shrink-0" />
                <span>Full Discord access</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="h-5 w-5 text-[#3b82f6] flex-shrink-0" />
                <span>Expert analysis & data</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="h-5 w-5 text-[#3b82f6] flex-shrink-0" />
                <span>Global coverage</span>
              </li>
            </ul>

            <Button
              className="w-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white font-bold py-6 text-lg"
              asChild
            >
              <a href="https://whop.com/lj-pickz/" target="_blank" rel="noopener noreferrer">
                Start 7 Day Trial
              </a>
            </Button>
          </div>

          {/* Monthly Package - Most Value */}
          <div className="bg-gradient-to-br from-[#1a2f4a] to-[#0f1f3a] border-2 border-[#3b82f6] rounded-2xl p-8 relative shadow-xl shadow-[#3b82f6]/30 hover:shadow-[#3b82f6]/50 transition-all duration-300 transform hover:scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white font-black px-6 py-2 rounded-full text-sm">
                MOST VALUE
              </span>
            </div>

            <div className="text-center mb-6 mt-2">
              <h3 className="text-2xl font-bebas font-black text-white mb-2">
                MONTHLY
              </h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl font-black text-white">$119.99</span>
                <span className="text-gray-400">/mo</span>
              </div>
              <div className="bg-[#3b82f6]/20 border border-[#3b82f6]/50 rounded-lg px-4 py-2 inline-block">
                <p className="text-[#3b82f6] font-bold">💰 Money Back if No Profit</p>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="h-5 w-5 text-[#3b82f6] flex-shrink-0" />
                <span>Everything in 7 Day Trial</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="h-5 w-5 text-[#3b82f6] flex-shrink-0" />
                <span>Guaranteed profit or refund</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="h-5 w-5 text-[#3b82f6] flex-shrink-0" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="h-5 w-5 text-[#3b82f6] flex-shrink-0" />
                <span>Exclusive insider info</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="h-5 w-5 text-[#3b82f6] flex-shrink-0" />
                <span>Cancel anytime</span>
              </li>
            </ul>

            <Button
              className="w-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white font-black py-6 text-lg shadow-lg animate-pulse"
              asChild
            >
              <a href="https://whop.com/lj-pickz/" target="_blank" rel="noopener noreferrer">
                Get Monthly Plan →
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
