import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <span className="text-xl font-bold text-[#3b82f6]">LJ Pickz</span>
            </div>
            <p className="text-gray-400 text-sm">The world's first insider sports investing group</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <div className="flex flex-col gap-2">
              <a href="https://docs.google.com/spreadsheets/d/1crpxCU2XxiidMIhuX0lG7yrmZ410Qa5n-9AvSiuasmo/edit?gid=548534739#gid=548534739" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#3b82f6] transition-colors text-sm">
                Results
              </a>
              <Link href="/reviews" className="text-gray-400 hover:text-[#3b82f6] transition-colors text-sm">
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
