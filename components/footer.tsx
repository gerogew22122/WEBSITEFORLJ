import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/lj-logo.png" alt="LJ Pickz" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl font-bold text-[#3b82f6]">LJ Pickz</span>
            </div>
            <p className="text-gray-400 text-sm">The world's first insider sports investing group</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <div className="flex flex-col gap-2">
              <Link href="#picks" className="text-gray-400 hover:text-[#3b82f6] transition-colors text-sm">
                Picks
              </Link>
              <Link href="#features" className="text-gray-400 hover:text-[#3b82f6] transition-colors text-sm">
                Features
              </Link>
              <Link href="#results" className="text-gray-400 hover:text-[#3b82f6] transition-colors text-sm">
                Results
              </Link>
              <Link href="#reviews" className="text-gray-400 hover:text-[#3b82f6] transition-colors text-sm">
                Reviews
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-gray-400 hover:text-[#3b82f6] transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#3b82f6] transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#3b82f6] transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-[#3b82f6] transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#3b82f6] transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#3b82f6] transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#3b82f6] transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} LJ Pickz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
