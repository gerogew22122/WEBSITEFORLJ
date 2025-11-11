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
        isScrolled ? "bg-[#0a0a0a]/70 backdrop-blur-md border-b border-[#1a1a1a]/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between relative">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/lj-logo.png" alt="LJ Pickz" width={60} height={60} className="w-15 h-15" />
          </Link>

          <div className="flex items-center gap-4 md:gap-8 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-gray-300 hover:text-[#3b82f6] transition-colors text-sm md:text-base">
              Home
            </Link>
            <a href="/#pricing" className="text-gray-300 hover:text-[#3b82f6] transition-colors text-sm md:text-base">
              Packages
            </a>
            <Link href="/reviews" className="text-gray-300 hover:text-[#3b82f6] transition-colors text-sm md:text-base">
              Reviews
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
