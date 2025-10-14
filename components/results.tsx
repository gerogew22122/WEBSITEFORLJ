"use client"

import { Button } from "@/components/ui/button"
import { TrendingUp, DollarSign, Award } from "lucide-react"

const stats = [
  { icon: TrendingUp, label: "Win Rate", value: "68%", color: "text-[#10b981]" },
  { icon: DollarSign, label: "Average ROI", value: "+42%", color: "text-[#3b82f6]" },
  { icon: Award, label: "Winning Months", value: "11/12", color: "text-[#10b981]" },
]

export function Results() {
  return (
    <section id="results" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Winning Results That Speak for Themselves</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8 text-center hover:border-[#3b82f6] transition-all duration-300"
            >
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <div className={`text-5xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-[#10b981] text-white hover:bg-[#0ea572] font-semibold text-lg px-8 py-6">
            Join Now – Start Winning Smarter
          </Button>
        </div>
      </div>
    </section>
  )
}
