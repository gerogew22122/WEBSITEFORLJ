import { Star, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const reviews = [
  {
    name: "Marcus D.",
    initials: "MD",
    rating: 5,
    text: "Best sports betting community on Whop. LJ's picks are consistently profitable and the Discord is super active.",
    verified: true,
  },
  {
    name: "Tyler B.",
    initials: "TB",
    rating: 5,
    text: "I was skeptical at first but after 3 months I'm up 40%. The transparency and data they provide is unmatched.",
    verified: true,
  },
  {
    name: "Jordan M.",
    initials: "JM",
    rating: 5,
    text: "Finally found a legit service. No BS, just solid picks backed by real analysis. Worth every penny.",
    verified: true,
  },
  {
    name: "Alex P.",
    initials: "AP",
    rating: 5,
    text: "The insider info alone is worth the subscription. These guys have connections and it shows in the results.",
    verified: true,
  },
  {
    name: "Chris L.",
    initials: "CL",
    rating: 5,
    text: "Been with LJ Pickz for 6 months. Most profitable investment I've made. The community support is incredible too.",
    verified: true,
  },
  {
    name: "Ryan K.",
    initials: "RK",
    rating: 5,
    text: "Tried multiple services before this. LJ Pickz is the only one that actually delivers. Highly recommend!",
    verified: true,
  },
]
// </CHANGE>

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Whop Members Are Saying</h2>
          <div className="flex items-center justify-center gap-2 text-[#3b82f6] mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
            <span className="text-white font-semibold ml-2">5.0 / 5.0</span>
          </div>
          <p className="text-gray-400">Based on 1,200+ verified Whop reviews</p>
          {/* </CHANGE> */}
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-[#1a1a1a] border-[#2a2a2a] p-6 hover:border-[#3b82f6] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarFallback className="bg-[#3b82f6] text-white font-semibold">{review.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold text-white">{review.name}</div>
                    {review.verified && <CheckCircle2 className="w-4 h-4 text-[#10b981]" />}
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#3b82f6] text-[#3b82f6]" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{review.text}</p>
            </Card>
          ))}
        </div>
        {/* </CHANGE> */}
      </div>
    </section>
  )
}
