"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-[#1a1a1a]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/lj-logo.png" alt="LJ Pickz" width={60} height={60} className="w-15 h-15" />
            <span className="text-2xl font-bold text-white">LJ Pickz</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-[#3b82f6] transition-colors">
              Home
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button className="bg-[#3b82f6] text-white hover:bg-[#2563eb] font-semibold">Start Free Trial</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
