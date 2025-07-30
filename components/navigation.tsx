"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-[#1f1f1f]/95 backdrop-blur-sm border-b border-[#333333] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">LF</span>
            </div>
            <span className="text-xl font-bold text-white">Landoffish Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-[#6ee7b7] transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-gray-300 hover:text-[#6ee7b7] transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-[#6ee7b7] transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-[#6ee7b7] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-[#6ee7b7] transition-colors">
              Contact
            </Link>
            <Link href="/faq" className="text-gray-300 hover:text-[#6ee7b7] transition-colors">
              FAQ
            </Link>
            <Link href="https://salescentri.com/get-started/free-trial" target="_blank">
              <Button className="gradient-bg text-black hover:opacity-90">Activate Free Trial</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#1f1f1f] border-t border-[#333333]">
              <Link href="/" className="block px-3 py-2 text-gray-300 hover:text-[#6ee7b7]">
                Home
              </Link>
              <Link href="/features" className="block px-3 py-2 text-gray-300 hover:text-[#6ee7b7]">
                Features
              </Link>
              <Link href="/pricing" className="block px-3 py-2 text-gray-300 hover:text-[#6ee7b7]">
                Pricing
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-300 hover:text-[#6ee7b7]">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-300 hover:text-[#6ee7b7]">
                Contact
              </Link>
              <Link href="/faq" className="block px-3 py-2 text-gray-300 hover:text-[#6ee7b7]">
                FAQ
              </Link>
              <div className="px-3 py-2">
                <Link href="https://salescentri.com/get-started/free-trial" target="_blank">
                  <Button className="w-full gradient-bg text-black">Activate Free Trial</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
