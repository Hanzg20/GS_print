import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About GoldSky Print & Media
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted partner for professional printing, design, and advertising solutions in Ottawa
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80"
                alt="GoldSky Print Shop"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                We Bring Your Ideas to Life
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  At GoldSky Print & Media, we&apos;re passionate about helping businesses and individuals
                  turn their creative visions into reality. Located in the heart of Kanata, Ottawa,
                  we&apos;ve built our reputation on quality, reliability, and exceptional customer service.
                </p>
                <p>
                  From fast file printing to complex 3D production, from eye-catching vehicle wraps to
                  professional branding packages, we deliver comprehensive printing and design solutions
                  that exceed expectations.
                </p>
                <p>
                  Our commitment to excellence and innovation has made us the go-to print shop for
                  businesses throughout the Ottawa region. Whether you&apos;re a startup looking for your
                  first business cards or an established company needing a complete rebranding, we have
                  the expertise and equipment to bring your vision to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Projects Completed" },
              { number: "500+", label: "Happy Clients" },
              { number: "24/7", label: "Available Service" },
              { number: "100%", label: "Quality Guaranteed" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What We Do Best
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive printing and design services for all your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Printing & Documents",
                icon: "📄",
                description: "Fast, professional printing services from business cards to large format posters"
              },
              {
                title: "Design & Branding",
                icon: "🎨",
                description: "Creative design solutions that make your brand stand out from the competition"
              },
              {
                title: "Signs & Advertising",
                icon: "🚩",
                description: "Eye-catching signage, vehicle wraps, and promotional materials that get noticed"
              },
              {
                title: "Custom Production",
                icon: "⚙️",
                description: "Innovative 3D printing, custom apparel, and unique promotional products"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose GoldSky?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re more than just a print shop - we&apos;re your creative partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Guarantee",
                description: "We use premium materials and state-of-the-art equipment to ensure every project meets our high standards."
              },
              {
                title: "Fast Turnaround",
                description: "Same-day and rush services available. We understand deadlines matter and work efficiently to meet them."
              },
              {
                title: "Expert Team",
                description: "Our experienced designers and print specialists bring years of expertise to every project."
              },
              {
                title: "Competitive Pricing",
                description: "Fair, transparent pricing with no hidden fees. Get the best value for your investment."
              },
              {
                title: "24/7 Availability",
                description: "Open around the clock for your convenience. Drop off or pick up anytime that works for you."
              },
              {
                title: "Personalized Service",
                description: "We take time to understand your needs and provide tailored solutions that work for your business."
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white mb-4">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                State-of-the-Art Equipment
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We invest in the latest printing technology to ensure the highest quality results for every project.
                  Our modern facility is equipped with:
                </p>
                <ul className="space-y-3">
                  {[
                    "Direct-to-Film (DTF) printing systems",
                    "UV DTF sticker production equipment",
                    "Large format printers for banners and signage",
                    "Professional 3D printers (PLA, ABS, PETG, Resin)",
                    "High-speed digital printing presses",
                    "Professional design workstations",
                    "Vinyl cutting and heat press equipment"
                  ].map((equipment, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {equipment}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
                alt="Printing Equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Info */}
              <div className="p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Visit Our Shop
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">Kanata, Ottawa, ON</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                      <a href="tel:613-452-0527" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                        613-452-0527
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Hours</h3>
                      <p className="text-2xl font-bold text-yellow-600">OPEN 24 HOURS</p>
                      <p className="text-sm text-gray-600 mt-1">Drop off and pick up anytime</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-all"
                  >
                    Contact Us
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 relative h-full min-h-[400px]">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <div className="text-center p-8">
                    <svg className="h-16 w-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-lg font-semibold text-gray-700">Kanata, Ottawa</p>
                    <p className="text-sm text-gray-600 mt-2">Map integration coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-orange-500">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Let&apos;s discuss your project and see how we can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-8 py-4 text-lg font-semibold text-white hover:bg-gray-800 transition-all shadow-lg"
            >
              Get Free Quote
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="tel:613-452-0527"
              className="inline-flex items-center justify-center rounded-md border-2 border-gray-900 px-8 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-all"
            >
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: 613-452-0527
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
