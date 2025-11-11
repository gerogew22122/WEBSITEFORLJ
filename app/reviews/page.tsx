"use client"

import { Star } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

const reviews = [
  {
    id: 1,
    name: "Tegsmeg",
    image: "/tegsmeg.png",
    rating: 5,
    text: "started off down abit but once i started sticking to one unit size been making consistent profit, abt 1k pm. would highly recommend",
    timeframe: "Written July 2, 2025, 3 months after purchase"
  },
  {
    id: 2,
    name: "snowd",
    image: "/snowd.png",
    rating: 5,
    text: "Love this group, highly recommend as im up 1.1k in just a couple weeks.",
    timeframe: "Written July 2, 2025, 1 month after purchase"
  },
  {
    id: 3,
    name: "JE Betting",
    image: "/jebetting.png",
    rating: 5,
    text: "started off on a losing streak but trusted the process and cash started coming in consistently, 10/10 service and community.",
    timeframe: "Written March 31, 2025, 16 days after purchase"
  },
  {
    id: 4,
    name: "Beau",
    image: "/beau.png",
    rating: 5,
    text: "Highly recommend easily the best punting group out there 💯",
    timeframe: "Written March 31, 2025, 1 month after purchase"
  },
  {
    id: 5,
    name: "Tomas Power",
    image: "/tomaspower.png",
    rating: 5,
    text: "Was Sceptical at first, posted a few days of really small loses and then saturday horses made me 2 fortnight's worth of pay. If you don't like money, don't sign up",
    timeframe: "Written March 10, 2025, 1 month after purchase"
  },
  {
    id: 6,
    name: "Sam kneji",
    image: "/samkneji.png",
    rating: 5,
    text: "Not gonna lie on day 1 I lost like $80 but since then bro you've been like a wizard or something got no idea where u get ur info from buts it's working I've made over $1000 keep it up",
    timeframe: "Written March 3, 2025, 4h after purchase"
  },
  {
    id: 7,
    name: "James Phillips",
    image: "/jamesphillips.png",
    rating: 5,
    text: "Unreal at hitting horses. The analyst knows his nba really well and rarely misses a multi",
    timeframe: "Written January 29, 2025, 15 days after purchase"
  },
  {
    id: 8,
    name: "Micheal Smart",
    image: "/michaelsmart.png",
    rating: 5,
    text: "good community and I'm consistently making profits so I do recommend",
    timeframe: "Written January 24, 2025, 11 days after purchase"
  },
  {
    id: 9,
    name: "Tom Cameron",
    image: "/tomcameron.png",
    rating: 5,
    text: "turned $100 into $300 with my free trial ill be staying along for the ride",
    timeframe: "Written January 17, 2025, 4 days after purchase"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-[#3b82f6]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#3b82f6]/30">
                    <Image 
                      src={review.image} 
                      alt={review.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">{review.name}</h3>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{review.text}</p>
                
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
