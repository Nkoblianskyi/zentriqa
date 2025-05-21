"use client"

import { useState } from "react"
import Link from "next/link"
import { Mountain, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/disclaimer", label: "Disclaimer" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" },
    { href: "/game", label: "Play Game" },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 mr-2 bg-blue-700 rounded-md flex items-center justify-center">
                <Mountain className="h-7 w-7 text-white" />
              </div>
              <span className="font-bold text-xl text-blue-700">Rescue Hero</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-blue-700 transition-colors">
              Home
            </Link>
            <Link href="/disclaimer" className="text-gray-700 hover:text-blue-700 transition-colors">
              Disclaimer
            </Link>
            <Link href="/privacy-policy" className="text-gray-700 hover:text-blue-700 transition-colors">
              Privacy Policy
            </Link>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Menu className="h-5 w-5" />
                  <span className="ml-2">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <SheetHeader className="border-b pb-4 mb-4">
                  <SheetTitle className="flex items-center">
                    <div className="w-8 h-8 mr-2 bg-blue-700 rounded-md flex items-center justify-center">
                      <Mountain className="h-5 w-5 text-white" />
                    </div>
                    <span>Rescue Hero</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="flex py-2 text-lg text-gray-700 hover:text-blue-700 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-8 pt-4 border-t">
                  <p className="text-xs text-gray-500">
                    For entertainment purposes only. No real money. No prizes. Ages 18+.
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
