'use client';

import Image from "next/image";
import Link from "next/link";

export default function UVStickersPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-400/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Premium UV DTF Stickers
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                UV DTF Stickers
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Waterproof, scratch-resistant, and UV-protected stickers perfect for any surface.
                Vibrant colors that last for years, indoors or outdoors.
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
                src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&q=80"
                alt="UV DTF Stickers"
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
            Why Choose UV DTF Stickers?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "💧",
                title: "100% Waterproof",
                desc: "Perfect for water bottles, outdoor gear, and marine applications"
              },
              {
                icon: "☀️",
                title: "UV Protected",
                desc: "Won't fade in sunlight - ideal for outdoor use"
              },
              {
                icon: "🎨",
                title: "Brilliant Colors",
                desc: "Vibrant, photo-quality printing with white base layer"
              },
              {
                icon: "✂️",
                title: "Custom Shapes",
                desc: "Any size, any shape - die-cut to your exact design"
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

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Perfect For Every Application
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Product Branding",
                desc: "Add your logo to water bottles, mugs, laptop covers, and more",
                image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&q=80"
              },
              {
                title: "Vehicle Decals",
                desc: "Weatherproof stickers for cars, trucks, boats, and motorcycles",
                image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80"
              },
              {
                title: "Retail & Packaging",
                desc: "Eye-catching labels, seals, and packaging decorations",
                image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80"
              },
              {
                title: "Window Graphics",
                desc: "Clear background stickers perfect for glass surfaces",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
              },
              {
                title: "Promotional Items",
                desc: "Branded giveaways and marketing materials",
                image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80"
              },
              {
                title: "Personal Projects",
                desc: "Custom designs for crafts, gifts, and personal items",
                image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80"
              }
            ].map((app, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-48">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{app.title}</h3>
                  <p className="text-gray-600">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Affordable Pricing
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Single Stickers */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Individual Stickers</h3>
              <div className="space-y-4 mb-8">
                {[
                  { size: "Small (up to 3\")", price: "$1.50" },
                  { size: "Medium (up to 6\")", price: "$3.00" },
                  { size: "Large (up to 12\")", price: "$5.00" },
                  { size: "Extra Large (12\"+)", price: "$8.00+" }
                ].map((tier, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">{tier.size}</span>
                    <span className="font-bold text-blue-600 text-xl">{tier.price}</span>
                  </div>
                ))}
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "No minimum order",
                  "Custom shapes included",
                  "Same-day available",
                  "Free proofing"
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
                Order Now
              </Link>
            </div>

            {/* Bulk Pricing */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Bulk Orders</h3>
                <div className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                  BEST VALUE
                </div>
              </div>
              <div className="space-y-4 mb-8">
                {[
                  { qty: "25-99 stickers", discount: "10% OFF" },
                  { qty: "100-249 stickers", discount: "20% OFF" },
                  { qty: "250-499 stickers", discount: "25% OFF" },
                  { qty: "500+ stickers", discount: "30% OFF" }
                ].map((tier, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-blue-700">
                    <span>{tier.qty}</span>
                    <span className="font-bold text-yellow-400 text-xl">{tier.discount}</span>
                  </div>
                ))}
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Volume discounts applied automatically",
                  "Mix and match designs",
                  "Free shipping on 500+",
                  "Dedicated account manager"
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
                Get Bulk Quote
              </Link>
            </div>
          </div>

          {/* Additional Options */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="font-bold text-gray-900 mb-4">Additional Options:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
              <div className="flex justify-between">
                <span>Double-sided stickers</span>
                <span className="font-semibold">+$0.50</span>
              </div>
              <div className="flex justify-between">
                <span>Holographic finish</span>
                <span className="font-semibold">+$1.00</span>
              </div>
              <div className="flex justify-between">
                <span>Textured finish</span>
                <span className="font-semibold">+$0.75</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Material Properties",
                items: ["Premium vinyl with UV laminate", "Waterproof & weatherproof", "Temperature resistant (-40°F to 180°F)", "3-5 year outdoor durability"]
              },
              {
                title: "File Requirements",
                items: ["PNG with transparent background", "Minimum 300 DPI", "RGB or CMYK color mode", "Vector files preferred (AI, EPS, PDF)"]
              },
              {
                title: "Application Surfaces",
                items: ["Glass", "Plastic", "Metal", "Wood", "Painted surfaces", "Most smooth surfaces"]
              }
            ].map((spec, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{spec.title}</h3>
                <ul className="space-y-2">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                q: "What makes UV DTF stickers different from regular stickers?",
                a: "UV DTF stickers use advanced UV-cured ink technology that provides superior durability, waterproofing, and UV resistance. They have a thicker, more tactile feel and can include a white base layer for vibrant colors on any surface."
              },
              {
                q: "Can I use these stickers outdoors?",
                a: "Absolutely! UV DTF stickers are specifically designed for outdoor use. They're waterproof, weather-resistant, and won't fade in sunlight. Expected outdoor lifespan is 3-5 years."
              },
              {
                q: "Are the stickers removable?",
                a: "Yes, they can be removed, though they're designed to be permanent. They'll leave minimal to no residue when removed properly within the first year of application."
              },
              {
                q: "What's the minimum order?",
                a: "No minimum! You can order just one sticker. However, bulk orders receive significant discounts starting at 25 pieces."
              },
              {
                q: "Can you do custom die-cut shapes?",
                a: "Yes! We can cut your stickers to any shape at no additional cost. Just provide your design with a transparent background, and we'll cut around your artwork."
              },
              {
                q: "How long does production take?",
                a: "Standard turnaround is 2-3 business days. Same-day service is available for rush orders placed before noon."
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
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Order Your Custom Stickers?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with a free quote or call us to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-8 py-4 text-lg font-semibold text-gray-900 hover:bg-yellow-400 transition-all shadow-lg"
            >
              Request Quote
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
