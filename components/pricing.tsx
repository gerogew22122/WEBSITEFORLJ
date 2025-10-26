"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

interface RegionPricing {
  weeklyPrice: string
  monthlyPrice: string
  weeklyLink: string
  monthlyLink: string
  currency: string
}

const REGION_PRICING: Record<string, RegionPricing> = {
  GB: {
    weeklyPrice: "£15.99",
    monthlyPrice: "£54.99",
    weeklyLink: "https://whop.com/lj-pickz-38-088a/lj-pickz-uk-weekly-89?a=ljpickzzz",
    monthlyLink: "https://whop.com/lj-pickz-38-088a/lj-pickz-uk-monthly-87?a=ljpickzzz",
    currency: "GBP"
  },
  US: {
    weeklyPrice: "$19.99",
    monthlyPrice: "$69.99",
    weeklyLink: "https://whop.com/lj-pickz-38-088a/lj-pickz-usa-weekly-ab?a=ljpickzzz",
    monthlyLink: "https://whop.com/lj-pickz-38-088a/lj-pickz-usa-monthly-ab-7dc3?a=ljpickzzz",
    currency: "USD"
  },
  AU: {
    weeklyPrice: "$34.99",
    monthlyPrice: "$119.99",
    weeklyLink: "https://whop.com/lj-pickz-38-088a/lj-pickz-38-088a?a=ljpickzzz",
    monthlyLink: "https://whop.com/lj-pickz-38-088a/?productId=prod_JV9eKIwPFcILX&a=ljpickzzz",
    currency: "AUD"
  },
  EU: {
    weeklyPrice: "€18.99",
    monthlyPrice: "€64.99",
    weeklyLink: "https://whop.com/lj-pickz-38-088a/lj-pickz-euro-weekly-4f?a=ljpickzzz",
    monthlyLink: "https://whop.com/lj-pickz-38-088a/lj-pickz-euro-monthly?a=ljpickzzz",
    currency: "EUR"
  }
}

const EU_COUNTRIES = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
  'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
  'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE'
]

export function Pricing() {
  const [pricing, setPricing] = useState<RegionPricing>(REGION_PRICING.US)
  const [detectedCountry, setDetectedCountry] = useState<string>("")

  useEffect(() => {
    async function detectLocation() {
      try {
        const response = await fetch('https://ipapi.co/json/')
        if (!response.ok) {
          throw new Error('Geolocation API failed')
        }
        const data = await response.json()
        const countryCode = data.country_code
        setDetectedCountry(countryCode)

        if (countryCode === 'GB') {
          setPricing(REGION_PRICING.GB)
        } else if (countryCode === 'US') {
          setPricing(REGION_PRICING.US)
        } else if (countryCode === 'AU') {
          setPricing(REGION_PRICING.AU)
        } else if (EU_COUNTRIES.includes(countryCode)) {
          setPricing(REGION_PRICING.EU)
        } else {
          setPricing(REGION_PRICING.US)
        }
      } catch (error) {
        console.error('Failed to detect location:', error)
        setPricing(REGION_PRICING.US)
      }
    }

    detectLocation()
  }, [])

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
          {detectedCountry && (
            <p className="text-sm text-gray-500 mt-2">
              Showing prices for {detectedCountry === 'GB' ? 'United Kingdom' : detectedCountry === 'US' ? 'United States' : detectedCountry === 'AU' ? 'Australia' : EU_COUNTRIES.includes(detectedCountry) ? 'Europe' : 'your region'}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Weekly Package */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 rounded-2xl p-8 hover:border-[#3b82f6]/50 transition-all duration-300 transform hover:scale-105">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bebas font-black text-white mb-2">
                WEEKLY
              </h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl font-black text-white">{pricing.weeklyPrice}</span>
                <span className="text-gray-400">/week</span>
              </div>
              <p className="text-gray-400">Try before you commit</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="h-5 w-5 text-[#3b82f6] flex-shrink-0" />
                <span>Daily horse racing and sport tips</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="h-5 w-5 text-[#3b82f6] flex-shrink-0" />
                <span>Discord community access</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="h-5 w-5 text-[#3b82f6] flex-shrink-0" />
                <span>Exclusive insider info</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="h-5 w-5 text-[#3b82f6] flex-shrink-0" />
                <span>7 day free trial</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="h-5 w-5 text-[#3b82f6] flex-shrink-0" />
                <span>Cancel anytime</span>
              </li>
            </ul>

            <Button
              className="w-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white font-bold py-6 text-lg"
              asChild
            >
              <a href={pricing.weeklyLink} target="_blank" rel="noopener noreferrer">
                Start weekly plan
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
                <span className="text-5xl font-black text-white">{pricing.monthlyPrice}</span>
                <span className="text-gray-400">/month</span>
              </div>
              <div className="bg-[#3b82f6]/20 border border-[#3b82f6]/50 rounded-lg px-4 py-2 inline-block">
                <p className="text-[#3b82f6] font-bold">💰 Money Back if No Profit</p>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="h-5 w-5 text-[#3b82f6] flex-shrink-0" />
                <span>Daily horse racing and sport tips</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="h-5 w-5 text-[#3b82f6] flex-shrink-0" />
                <span>Discord community access</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="h-5 w-5 text-[#3b82f6] flex-shrink-0" />
                <span>Exclusive insider info</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="h-5 w-5 text-[#3b82f6] flex-shrink-0" />
                <span>7 day free trial</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="h-5 w-5 text-[#3b82f6] flex-shrink-0" />
                <span>Cancel anytime</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="h-5 w-5 text-[#3b82f6] flex-shrink-0" />
                <span>Guaranteed profit or 100% refund</span>
              </li>
            </ul>

            <Button
              className="w-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white font-black py-6 text-lg shadow-lg animate-pulse"
              asChild
            >
              <a href={pricing.monthlyLink} target="_blank" rel="noopener noreferrer">
                Start monthly plan
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}