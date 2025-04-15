'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Furniro
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">Search</span>
              🔍
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">Account</span>
              👤
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">Wishlist</span>
              ❤️
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">Cart</span>
              🛒
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open menu</span>
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/shop" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Shop</Link>
              <Link href="/about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 