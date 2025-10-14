import { Tag } from "lucide-react"

export function PromoBanner() {
  return (
    <div className="bg-gradient-to-r from-[#3b82f6] to-[#10b981] py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 text-white">
          <Tag className="w-5 h-5" />
          <p className="font-semibold text-lg">
            Use code <span className="font-bold">BLD</span> at checkout for an exclusive offer
          </p>
        </div>
      </div>
    </div>
  )
}
