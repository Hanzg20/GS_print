'use client';

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(251, 191, 36) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block mb-6">
              <div className="flex items-center space-x-2 bg-yellow-500/20 px-4 py-2 rounded-full border border-yellow-500/30">
                <svg className="h-5 w-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold text-yellow-400">OPEN 24 HOURS - We&apos;re Here When You Need Us</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-yellow-400">DESIGN</span>
              <span className="block text-yellow-400">PRINT</span>
              <span className="block text-yellow-400">ADVERTISING</span>
            </h1>

            <p className="text-2xl sm:text-3xl font-serif italic text-gray-300 mb-8">
              We Bring Your Ideas to Life!
            </p>

            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              From fast file printing to custom 3D production, vehicle wraps to promotional products - we deliver excellence in every project. Serving Kanata and Ottawa with professional printing and design services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-8 py-4 text-lg font-semibold text-gray-900 hover:bg-yellow-400 transition-all shadow-lg hover:shadow-yellow-500/50"
              >
                Get Free Quote
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <a
                href="tel:613-452-0527"
                className="inline-flex items-center justify-center rounded-md border-2 border-yellow-500 px-8 py-4 text-lg font-semibold text-yellow-400 hover:bg-yellow-500/10 transition-all"
              >
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                613-452-0527
              </a>
            </div>

            {/* Location */}
            <div className="mt-8 flex items-center text-gray-400">
              <svg className="h-5 w-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Located in Kanata, Ottawa, ON</span>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80"
                  alt="Design & Branding"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-lg font-semibold mb-1">Design & Branding</h3>
                  <p className="text-sm text-gray-300">Professional graphic design services</p>
                </div>
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&q=80"
                  alt="Signs & Advertising"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-lg font-semibold mb-1">Signs & Advertising</h3>
                  <p className="text-sm text-gray-300">Eye-catching signage and displays</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-48 rounded-lg overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1565022408193-1e21f3ca0ee9?w=600&q=80"
                  alt="Printing Services"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-lg font-semibold mb-1">Printing Services</h3>
                  <p className="text-sm text-gray-300">Fast, high-quality printing</p>
                </div>
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80"
                  alt="3D Printing & Custom"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-lg font-semibold mb-1">3D Printing & Custom</h3>
                  <p className="text-sm text-gray-300">Innovative custom production</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
