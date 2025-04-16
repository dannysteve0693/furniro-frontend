'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import logoFurniroImg from '@/public/logo-furniro.svg'
import logoCartMarketImg from '@/public/images/cartmarket.svg'
import logoLoveImg from '@/public/images/love.svg'
import logoMagnifierImg from '@/public/images/Magnifier.svg'
import logoPeopleMarkImg from '@/public/images/PeopleWithMark.svg'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            <Image src={logoFurniroImg} alt='furniro logo image' />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`text-gray-600 hover:text-gray-900  header-link`}>Home</Link>
            <Link href="/shop" className="text-gray-600 hover:text-gray-900 header-link">Shop</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 header-link">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 header-link">Contact</Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-600 hover:text-gray-900">
              <Image src={logoPeopleMarkImg} alt='logo people mark with img' />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <Image src={logoMagnifierImg} alt='logo magnifier with img' />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <Image src={logoLoveImg} alt='logo love with img' />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <Image src={logoCartMarketImg} alt='logo cart market with img' />
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