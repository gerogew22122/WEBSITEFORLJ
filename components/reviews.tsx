"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

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

export function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start"
  })
  
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    if (!emblaApi) return
    const autoplay = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)
    return () => clearInterval(autoplay)
  }, [emblaApi])

  return (
    <section id="reviews" className="py-20 px-4 bg-gradient-to-b from-[#0f1f3a] to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bebas font-black text-white mb-4">
            VERIFIED WHOP REVIEWS
          </h2>
          <p className="text-xl text-gray-400">
            Real feedback from our community members
          </p>
        </div>

        <div className="relative px-12">
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#3b82f6] hover:bg-[#2563eb] text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:scale-110 hidden md:flex items-center justify-center"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 rounded-2xl p-6 h-full hover:border-[#3b82f6]/50 transition-all duration-300 mr-4">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#3b82f6]/30 bg-gray-800">
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
                    
                    <p className="text-gray-300 mb-4 leading-relaxed min-h-[100px]">{review.text}</p>
                    
                    <p className="text-sm text-gray-500">{review.timeframe}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#3b82f6] hover:bg-[#2563eb] text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:scale-110 hidden md:flex items-center justify-center"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? "w-8 bg-[#3b82f6]" 
                  : "w-2 bg-gray-600 hover:bg-gray-500"
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#3b82f6]/20 to-[#2563eb]/20 border border-[#3b82f6]/30 rounded-lg px-6 py-4">
            <Image 
              src="/whop-logo.png" 
              alt="Whop" 
              width={28} 
              height={28}
              className="w-7 h-7"
            />
            <p className="text-[#3b82f6] font-semibold">
              All reviews verified through Whop platform
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
