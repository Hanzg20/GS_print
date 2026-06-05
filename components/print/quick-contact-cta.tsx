'use client';

import Link from "next/link";

export default function QuickContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Bring Your Ideas to Life?
            </h2>
            <p className="text-xl mb-8 text-gray-800">
              Get a free quote today and discover why businesses across Ottawa trust GoldSky
              for their printing and design needs.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="h-8 w-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Fast Turnaround</h3>
                  <p className="text-gray-800">Same-day and rush services available for urgent projects</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="h-8 w-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Quality Guaranteed</h3>
                  <p className="text-gray-800">Premium materials and professional craftsmanship on every job</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="h-8 w-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Competitive Pricing</h3>
                  <p className="text-gray-800">Fair prices with no hidden fees - what you see is what you pay</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Started Today</h3>
              <p className="text-gray-600">
                Choose your preferred way to connect with us
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <a
                href="tel:613-452-0527"
                className="flex items-center space-x-4 p-4 rounded-lg border-2 border-gray-200 hover:border-yellow-500 hover:bg-yellow-50 transition-all group"
              >
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-yellow-100 group-hover:bg-yellow-500 flex items-center justify-center transition-colors">
                    <svg className="h-6 w-6 text-yellow-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">Call Us Now</div>
                  <div className="text-yellow-600 font-bold text-lg">613-452-0527</div>
                </div>
                <svg className="h-5 w-5 text-gray-400 group-hover:text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Quote Form */}
              <Link
                href="/quote"
                className="flex items-center space-x-4 p-4 rounded-lg bg-yellow-500 hover:bg-yellow-600 transition-all group text-white"
              >
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Get Free Quote</div>
                  <div className="text-sm opacity-90">Fill out our quick form</div>
                </div>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Visit Us */}
              <div className="p-4 rounded-lg border-2 border-gray-200 bg-gray-50">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Visit Our Shop</div>
                    <div className="text-gray-600">Kanata, Ottawa, ON</div>
                    <div className="text-sm text-yellow-600 font-semibold mt-1">OPEN 24 HOURS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
