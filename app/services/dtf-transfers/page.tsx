'use client';

import Image from "next/image";
import Link from "next/link";

export default function DTFTransfersPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Premium Heat Transfers
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                DTF Transfer Printing
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                High-quality Direct-to-Film transfers with vibrant colors and exceptional durability.
                Perfect for custom apparel, fabric products, and more.
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
                src="https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80"
                alt="DTF Transfer Printing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose DTF Transfers?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎨",
                title: "Full Color Printing",
                desc: "Unlimited colors including gradients and photo-realistic designs"
              },
              {
                icon: "💪",
                title: "Exceptional Durability",
                desc: "Wash-resistant and long-lasting for everyday wear"
              },
              {
                icon: "⚡",
                title: "Fast Turnaround",
                desc: "Same-day service available for rush orders"
              },
              {
                icon: "📦",
                title: "No Minimums",
                desc: "Order as few or as many as you need"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            The DTF Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Design Upload",
                desc: "Send us your design or let our team create one for you"
              },
              {
                step: "02",
                title: "Digital Printing",
                desc: "We print your design onto special DTF film using premium inks"
              },
              {
                step: "03",
                title: "Powder Application",
                desc: "Hot-melt adhesive powder is applied to ensure strong bonding"
              },
              {
                step: "04",
                title: "Heat Press",
                desc: "Transfer is applied to your garment with heat and pressure"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="text-6xl font-bold text-yellow-500/20 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-yellow-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Transparent Pricing
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Gang Sheet Pricing */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Gang Sheet</h3>
                <div className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                  BEST VALUE
                </div>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">$0.50</span>
                  <span className="text-gray-400 ml-2">/sq inch</span>
                </div>
                <p className="text-gray-400 mt-2">$10 minimum order</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Full color printing",
                  "Multiple designs per sheet",
                  "Maximum efficiency",
                  "No setup fees",
                  "Fluorescent colors +20%",
                  "Metallic colors +25%"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/quote"
                className="block w-full text-center bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-all"
              >
                Order Gang Sheet
              </Link>
            </div>

            {/* Single Transfer Pricing */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Single Transfers</h3>
              <div className="space-y-4 mb-8">
                {[
                  { size: "Small (up to 5\" x 5\")", price: "$2.50" },
                  { size: "Medium (up to 10\" x 10\")", price: "$5.00" },
                  { size: "Large (up to 14\" x 14\")", price: "$8.50" },
                  { size: "Extra Large (up to 22\" x 22\")", price: "$15.00" }
                ].map((tier, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">{tier.size}</span>
                    <span className="font-bold text-yellow-600 text-xl">{tier.price}</span>
                  </div>
                ))}
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "No minimums required",
                  "Quick turnaround",
                  "Premium quality",
                  "Same-day available"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/quote"
                className="block w-full text-center bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-all"
              >
                Order Single Transfer
              </Link>
            </div>
          </div>

          {/* Price Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
            <p className="text-gray-800">
              <span className="font-semibold">Note:</span> All prices in CAD. Volume discounts available for bulk orders.
              <Link href="/contact" className="text-yellow-600 hover:text-yellow-700 font-semibold ml-1">
                Contact us for custom pricing
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Compatible Materials",
                items: ["Cotton", "Polyester", "Cotton/Poly Blends", "Leather", "Canvas", "Nylon"]
              },
              {
                title: "File Requirements",
                items: ["PNG with transparent background", "300 DPI minimum", "RGB color mode", "AI, EPS, PDF (vector preferred)"]
              },
              {
                title: "Care Instructions",
                items: ["Machine wash cold", "Turn inside out", "Tumble dry low", "Do not iron directly on print", "No bleach"]
              }
            ].map((spec, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{spec.title}</h3>
                <ul className="space-y-2">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
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
                q: "What's the difference between DTF and DTG printing?",
                a: "DTF (Direct-to-Film) transfers are printed on film first, then heat pressed onto fabric. This allows for better color vibrancy, works on more fabric types, and has better wash durability compared to DTG (Direct-to-Garment) printing."
              },
              {
                q: "How long do DTF transfers last?",
                a: "With proper care, DTF transfers can last for years. They're highly durable and resistant to cracking, fading, and peeling. Many customers report their prints lasting 50+ washes."
              },
              {
                q: "Can I apply DTF transfers myself?",
                a: "Yes! DTF transfers can be applied with a standard heat press or even a household iron. We provide detailed instructions with every order. We also offer pressing services if you prefer."
              },
              {
                q: "What's the minimum order quantity?",
                a: "There's no minimum! You can order a single transfer or thousands. Gang sheets are most cost-effective for multiple designs."
              },
              {
                q: "Do you offer design services?",
                a: "Absolutely! Our design team can create or refine your artwork. We offer free design consultation and can help you achieve the perfect look."
              },
              {
                q: "What's your turnaround time?",
                a: "Standard orders are ready in 2-3 business days. Same-day and rush services are available for urgent projects. Call us to discuss your timeline."
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
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-orange-500">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Order Your DTF Transfers?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Get started with a free quote or call us to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-8 py-4 text-lg font-semibold text-white hover:bg-gray-800 transition-all shadow-lg"
            >
              Request Quote
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-md border-2 border-gray-900 px-8 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-all"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
