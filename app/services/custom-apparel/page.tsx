'use client';

import Image from "next/image";
import Link from "next/link";

export default function CustomApparelPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-purple-400/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Custom Clothing & Apparel
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Custom T-Shirts & Apparel
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                High-quality custom printed apparel for businesses, teams, events, and personal projects.
                From single pieces to bulk orders with volume discounts.
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
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80"
                alt="Custom T-Shirts and Apparel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "👕",
                title: "T-Shirts",
                desc: "Premium cotton and blends in all sizes",
                price: "From $15"
              },
              {
                icon: "👔",
                title: "Hoodies",
                desc: "Heavy-weight sweatshirts and hoodies",
                price: "From $38"
              },
              {
                icon: "🧢",
                title: "Hats & Caps",
                desc: "Embroidered or printed caps",
                price: "From $15"
              },
              {
                icon: "👖",
                title: "More Options",
                desc: "Polo shirts, jackets, bags, and more",
                price: "Custom quote"
              }
            ].map((product, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all">
                <div className="text-5xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-3">{product.desc}</p>
                <p className="text-purple-600 font-bold text-lg">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Printing Methods */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Choose Your Printing Method
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "DTF Heat Transfer",
                desc: "Full-color designs with exceptional detail and durability",
                features: ["Perfect for photos & gradients", "Soft, breathable feel", "Great for small batches", "Quick turnaround"],
                best: "Small to medium orders"
              },
              {
                title: "Screen Printing",
                desc: "Traditional method for vibrant, long-lasting prints",
                features: ["Bold, vibrant colors", "Most cost-effective for bulk", "Extremely durable", "Professional finish"],
                best: "Large orders (25+ pieces)"
              },
              {
                title: "Embroidery",
                desc: "Premium, textured finish that adds dimension",
                features: ["Professional appearance", "Extremely durable", "Perfect for logos", "High-end look"],
                best: "Corporate wear & hats"
              }
            ].map((method, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-6">{method.desc}</p>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-purple-600 mb-3">FEATURES:</p>
                  <ul className="space-y-2">
                    {method.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm text-gray-700">
                        <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Best for:</span> {method.best}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Volume-Based Pricing
          </h2>

          {/* T-Shirts Pricing */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Custom T-Shirts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { qty: "1-11 shirts", price: "$25", unit: "each" },
                { qty: "12-24 shirts", price: "$20", unit: "each" },
                { qty: "25-49 shirts", price: "$17", unit: "each" },
                { qty: "50+ shirts", price: "$15", unit: "each" }
              ].map((tier, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                  <p className="text-sm font-semibold text-purple-700 mb-2">{tier.qty}</p>
                  <p className="text-4xl font-bold text-gray-900 mb-1">{tier.price}</p>
                  <p className="text-gray-600">{tier.unit}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Includes: Premium cotton/blend tees • Full-color printing • Multiple sizes available
              </p>
            </div>
          </div>

          {/* Hoodies Pricing */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Hoodies & Sweatshirts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { qty: "1-11 pieces", price: "$55", unit: "each" },
                { qty: "12-24 pieces", price: "$45", unit: "each" },
                { qty: "25+ pieces", price: "$38", unit: "each" }
              ].map((tier, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                  <p className="text-sm font-semibold text-purple-700 mb-2">{tier.qty}</p>
                  <p className="text-4xl font-bold text-gray-900 mb-1">{tier.price}</p>
                  <p className="text-gray-600">{tier.unit}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Includes: Heavy-weight fabric • Custom designs • Bulk discounts
              </p>
            </div>
          </div>

          {/* Hats Pricing */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Custom Hats</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { type: "Embroidered logo", price: "$20-30", desc: "Premium thread embroidery" },
                { type: "Printed design", price: "$15-25", desc: "Full-color heat transfer" },
                { type: "Bulk (25+)", price: "15% off", desc: "Volume discount applied" }
              ].map((tier, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                  <p className="text-sm font-semibold text-purple-700 mb-2">{tier.type}</p>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{tier.price}</p>
                  <p className="text-sm text-gray-600">{tier.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
            <p className="text-gray-800">
              <span className="font-semibold">Volume Discounts Available!</span> Contact us for custom quotes on large orders or specialty items.
              <Link href="/contact" className="text-purple-600 hover:text-purple-700 font-semibold ml-1">
                Get Custom Quote →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Perfect For Every Occasion
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Corporate & Business",
                desc: "Build team unity with branded apparel for employees and events",
                icon: "💼"
              },
              {
                title: "Sports Teams",
                desc: "Custom jerseys, warm-ups, and fan gear for teams of all sizes",
                icon: "⚽"
              },
              {
                title: "Events & Festivals",
                desc: "Memorable merch for concerts, festivals, and special events",
                icon: "🎉"
              },
              {
                title: "Schools & Universities",
                desc: "Spirit wear, club apparel, and graduation memorabilia",
                icon: "🎓"
              },
              {
                title: "Non-Profits & Fundraising",
                desc: "Raise awareness and funds with custom branded clothing",
                icon: "❤️"
              },
              {
                title: "Personal Projects",
                desc: "Family reunions, bachelor parties, custom gifts, and more",
                icon: "🎁"
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.desc}</p>
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
                q: "What's your minimum order quantity?",
                a: "We have no minimums! Whether you need 1 shirt or 1,000, we've got you covered. However, bulk orders receive significant volume discounts."
              },
              {
                q: "How long does production take?",
                a: "Standard turnaround is 7-10 business days. Rush orders (3-5 days) are available for an additional fee. Large orders may require additional time."
              },
              {
                q: "What brands do you carry?",
                a: "We work with premium brands including Gildan, Bella+Canvas, Next Level, Port Authority, and more. We can source specific brands upon request."
              },
              {
                q: "Can you help with design?",
                a: "Absolutely! Our design team can create custom artwork or refine your existing designs. We offer free design consultation with every order."
              },
              {
                q: "What file formats do you need?",
                a: "We prefer vector files (AI, EPS, PDF) for best quality, but we can also work with high-resolution PNG or JPG files (minimum 300 DPI)."
              },
              {
                q: "How do I choose the right printing method?",
                a: "Our team will recommend the best method based on your design, quantity, and budget. DTF is great for detailed designs, screen printing for bulk orders, and embroidery for a premium finish."
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
      <section className="py-16 bg-gradient-to-br from-purple-900 to-purple-800 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Create Your Custom Apparel?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's bring your vision to life with high-quality custom clothing.
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
