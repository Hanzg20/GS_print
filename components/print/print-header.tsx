'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function PrintHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Get Quote', href: '/quote' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/print/goldsky-print-logo.png"
                alt="GoldSky Print & Media"
                width={80}
                height={80}
                className="h-16 w-auto"
              />
              <div className="flex flex-col gap-0.5">
                <span className="text-2xl font-black tracking-[0.15em]" style={{ fontFamily: 'Arial Black, Impact, sans-serif', color: '#D4A017', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                  GOLDSKY
                </span>
                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-8 bg-pink-600"></div>
                  <span className="text-base font-black tracking-[0.2em]" style={{ fontFamily: 'Arial Black, Impact, sans-serif', color: '#E91E8E' }}>
                    PRINT
                  </span>
                  <div className="h-0.5 w-8 bg-pink-600"></div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-yellow-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <a href="tel:613-452-0527" className="flex items-center space-x-2 text-sm hover:text-yellow-400">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold">613-452-0527</span>
            </a>
            <Link
              href="/quote"
              className="rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-yellow-400 transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-800 hover:text-yellow-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:613-452-0527"
                className="block rounded-md px-3 py-2 text-base font-medium text-yellow-400 hover:bg-gray-800"
              >
                📞 613-452-0527
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
