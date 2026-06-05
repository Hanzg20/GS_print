'use client';

import Image from "next/image";
import Link from "next/link";

export default function BusinessCardsPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Professional Business Printing
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Premium Business Cards
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Make a lasting first impression with professionally printed business cards.
                High-quality cardstock, multiple finishes, and fast turnaround times.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-8 py-4 text-lg font-semibold text-gray-900 hover:bg-yellow-400 transition-all"
                >
                  Get a Quote
                </Link>
                <a
                  href="tel:613-452-0527"
                  className="inline-flex items-center justify-center rounded-md border-2 border-yellow-500 px-8 py-4 text-lg font-semibold text-yellow-400 hover:bg-yellow-500/10 transition-all"
                >
                  Call: 613-452-0527
                </a>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&q=80"
                alt="Business Cards"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Card Options */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Choose Your Card Style
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Standard",
                desc: "Classic 14pt cardstock with your choice of finish",
                price: "$50 / 500 cards",
                features: ["14pt cardstock", "Matte or glossy finish", "Standard 3.5\" x 2\"", "Full color printing"]
              },
              {
                title: "Premium",
                desc: "Thick 16pt cardstock for a luxurious feel",
                price: "$85 / 500 cards",
                features: ["16pt thick cardstock", "Multiple finish options", "Rounded corners available", "Premium quality"],
                popular: true
              },
              {
                title: "Ultra Premium",
                desc: "18pt+ ultra-thick cardstock with special finishes",
                price: "$125 / 500 cards",
                features: ["18pt+ ultra-thick", "Spot UV or foil options", "Silk lamination", "Luxury presentation"]
              }
            ].map((option, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all ${
                  option.popular ? 'ring-4 ring-yellow-500' : 'border-2 border-gray-200'
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.desc}</p>
                <p className="text-3xl font-bold text-yellow-600 mb-6">{option.price}</p>
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/quote"
                  className={`block w-full text-center font-semibold px-6 py-3 rounded-lg transition-all ${
                    option.popular
                      ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Order Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finish Options */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Finishing Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Matte Finish",
                desc: "Smooth, non-reflective surface perfect for writing",
                icon: "📝"
              },
              {
                name: "Glossy Finish",
                desc: "Vibrant colors with a shiny, professional look",
                icon: "✨"
              },
              {
                name: "Spot UV",
                desc: "Raised glossy coating on specific areas for dimension",
                icon: "🌟"
              },
              {
                name: "Rounded Corners",
                desc: "Soft, modern rounded edges",
                icon: "⭕"
              },
              {
                name: "Silk Lamination",
                desc: "Soft-touch finish with rich colors",
                icon: "🎨"
              },
              {
                name: "Foil Stamping",
                desc: "Metallic gold or silver accents",
                icon: "🥇"
              },
              {
                name: "Embossing",
                desc: "Raised design for a premium tactile feel",
                icon: "🔺"
              },
              {
                name: "Custom Die-Cut",
                desc: "Unique shapes and sizes",
                icon: "✂️"
              }
            ].map((finish, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
                <div className="text-4xl mb-3">{finish.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{finish.name}</h3>
                <p className="text-sm text-gray-600">{finish.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Complete Pricing
          </h2>

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Quantity</th>
                  <th className="px-6 py-4 text-center">Standard (14pt)</th>
                  <th className="px-6 py-4 text-center">Premium (16pt)</th>
                  <th className="px-6 py-4 text-center">Ultra (18pt+)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { qty: "250 cards", std: "$35", prem: "$60", ultra: "$90" },
                  { qty: "500 cards", std: "$50", prem: "$85", ultra: "$125", popular: true },
                  { qty: "1,000 cards", std: "$75", prem: "$125", ultra: "$180" },
                  { qty: "2,500 cards", std: "$150", prem: "$250", ultra: "$375" }
                ].map((row, index) => (
                  <tr key={index} className={row.popular ? 'bg-yellow-50' : ''}>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {row.qty}
                      {row.popular && (
                        <span className="ml-2 text-xs bg-yellow-500 text-gray-900 px-2 py-1 rounded-full">
                          Most Popular
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-gray-900">{row.std}</td>
                    <td className="px-6 py-4 text-center font-bold text-yellow-600">{row.prem}</td>
                    <td className="px-6 py-4 text-center font-bold text-gray-900">{row.ultra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h4 className="font-bold text-gray-900 mb-3">Special Finish Pricing:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
              <div className="flex justify-between">
                <span>Rounded corners</span>
                <span className="font-semibold">+$10</span>
              </div>
              <div className="flex justify-between">
                <span>Spot UV (one side)</span>
                <span className="font-semibold">+$40</span>
              </div>
              <div className="flex justify-between">
                <span>Foil stamping</span>
                <span className="font-semibold">+$60</span>
              </div>
              <div className="flex justify-between">
                <span>Silk lamination</span>
                <span className="font-semibold">+$25</span>
              </div>
              <div className="flex justify-between">
                <span>Embossing/Debossing</span>
                <span className="font-semibold">+$75</span>
              </div>
              <div className="flex justify-between">
                <span>Custom die-cut</span>
                <span className="font-semibold">+$50</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Tips */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Design Best Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Keep It Simple",
                desc: "Focus on essential information: name, title, phone, email, and website. Avoid clutter.",
                icon: "🎯"
              },
              {
                title: "Use High-Quality Logos",
                desc: "Provide vector logos (AI, EPS) for crisp, professional printing.",
                icon: "🖼️"
              },
              {
                title: "Choose Readable Fonts",
                desc: "Use professional fonts sized at least 8pt. Avoid overly decorative typefaces.",
                icon: "📖"
              },
              {
                title: "Consider Both Sides",
                desc: "Use the back for additional info, QR code, or a memorable design element.",
                icon: "🔄"
              },
              {
                title: "Leave Breathing Room",
                desc: "Keep text away from edges (0.125\" bleed). Give your design space to breathe.",
                icon: "📏"
              },
              {
                title: "Brand Consistency",
                desc: "Match your brand colors and style for cohesive marketing materials.",
                icon: "🎨"
              }
            ].map((tip, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What's your turnaround time?",
                a: "Standard business cards are ready in 2-3 business days. Rush service (24-48 hours) is available for an additional fee. Special finishes may require additional time."
              },
              {
                q: "What's the standard business card size?",
                a: "The standard size is 3.5\" x 2\" (US standard). We also offer custom sizes including mini cards, square cards, and European sizes (85mm x 55mm)."
              },
              {
                q: "Can you help design my business cards?",
                a: "Yes! Our professional design team can create custom business cards from scratch or refine your existing design. Design services start at $50 and are included free with orders of 1,000+ cards."
              },
              {
                q: "What file format should I provide?",
                a: "We prefer print-ready PDF files with 0.125\" bleed, but we can also work with AI, EPS, PSD, or high-resolution PNG/JPG files. Our team will review your files and request changes if needed."
              },
              {
                q: "Do you offer double-sided printing?",
                a: "Yes! All our pricing includes double-sided printing at no extra cost. You can print on one or both sides."
              },
              {
                q: "What's the difference between the cardstock options?",
                a: "14pt is our standard professional cardstock. 16pt is noticeably thicker and more premium. 18pt+ is ultra-thick for maximum impact and luxury feel. We recommend 16pt for the best value-to-quality ratio."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-700 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Order Your Business Cards?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Make a lasting impression with premium business cards. Fast turnaround guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-8 py-4 text-lg font-semibold text-gray-900 hover:bg-yellow-400 transition-all shadow-lg"
            >
              Get Free Quote
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-md border-2 border-yellow-500 px-8 py-4 text-lg font-semibold text-yellow-400 hover:bg-yellow-500/10 transition-all"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
