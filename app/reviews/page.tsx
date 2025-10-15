"use client"

import { Star } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const reviews = [
  {
    id: 1,
    name: "Tegsmeg",
    avatar: "TG",
    rating: 5,
    text: "started off down abit but once i started sticking to one unit size been making consistent profit, abt 1k pm. would highly recommend",
    timeframe: "Written 3 months after purchase",
    date: "3 months ago"
  },
  {
    id: 2,
    name: "snowd",
    avatar: "SN",
    rating: 5,
    text: "Love this group, highly recommend as im up 1.1k in just a couple weeks.",
    timeframe: "Written a month after purchase",
    date: "3 months ago"
  },
  {
    id: 3,
    name: "Beau",
    avatar: "BE",
    rating: 5,
    text: "Highly recommend easily the best punting group out there 💯",
    timeframe: "Written a month after purchase",
    date: "6 months ago"
  },
  {
    id: 4,
    name: "Sam kneji",
    avatar: "SK",
    rating: 5,
    text: "Not gonna lie on day 1 I lost like $80 but since then bro you've been like a wizard or something got no idea where u get ur info from buts it's working I've made over $1000 keep it up",
    timeframe: "Written March 3, 2025, 4 hours after purchase",
    date: "March 3, 2025"
  }
]

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bebas font-black text-white mb-4">
              VERIFIED WHOP REVIEWS
            </h1>
            <p className="text-xl text-gray-400">
              Real feedback from our community members
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-[#3b82f6]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#2563eb] flex items-center justify-center text-white font-bold">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-white font-semibold">{review.name}</h3>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-3 leading-relaxed">{review.text}</p>
                
                <p className="text-sm text-gray-500">{review.timeframe}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-[#3b82f6]/20 to-[#2563eb]/20 border border-[#3b82f6]/30 rounded-lg px-6 py-4">
              <p className="text-[#3b82f6] font-semibold">
                ⭐ All reviews verified through Whop platform
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
