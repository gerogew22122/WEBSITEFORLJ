import { TrendingUp, Users, Target, Globe } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Target,
    title: "Real Insider Picks",
    description: "Verified bets from professionals with proven track records",
  },
  {
    icon: Users,
    title: "Full-Time Analysts",
    description: "Sports and data specialists tracking performance daily",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Transparent records of wins and ROI",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "USA, AUS/NZ, UK, Scotland, Europe",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why LJ Pickz?</h2>
          <p className="text-xl text-gray-300 text-pretty">
            We're the insider community where serious sports investors get real data, expert analysis, and consistent
            results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-[#1a1a1a] border-[#2a2a2a] p-6 hover:border-[#3b82f6] transition-all duration-300 hover:scale-105"
            >
              <feature.icon className="w-12 h-12 text-[#3b82f6] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
