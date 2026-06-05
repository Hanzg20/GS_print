'use client';

import Image from "next/image";
import Link from "next/link";

export default function VehicleWrapsPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 to-orange-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-400/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Professional Vehicle Graphics
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Vehicle Wraps & Graphics
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your vehicle into a mobile billboard with professional vehicle wraps and graphics.
                Premium materials, expert installation, and designs that turn heads.
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
                src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80"
                alt="Vehicle Wraps"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wrap Types */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Choose Your Wrap Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Partial Wrap",
                desc: "Cover specific areas like hood, trunk, or doors for maximum impact at minimum cost",
                price: "$500 - $1,200",
                coverage: "25-50% coverage",
                features: ["Cost-effective", "Quick installation", "Strategic branding", "Easy to update"]
              },
              {
                title: "Half Wrap",
                desc: "Cover one side or half your vehicle for great visibility without full wrap cost",
                price: "$1,500 - $2,500",
                coverage: "50-75% coverage",
                features: ["Great ROI", "Balanced coverage", "Professional look", "2-3 day install"],
                popular: true
              },
              {
                title: "Full Wrap",
                desc: "Complete vehicle transformation for maximum brand exposure from every angle",
                price: "$2,500 - $5,000",
                coverage: "100% coverage",
                features: ["Maximum impact", "Complete protection", "Stunning visuals", "Premium finish"]
              }
            ].map((wrap, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all ${
                  wrap.popular ? 'ring-4 ring-yellow-500' : 'border-2 border-gray-200'
                }`}
              >
                {wrap.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{wrap.title}</h3>
                <p className="text-gray-600 mb-4">{wrap.desc}</p>
                <div className="mb-4">
                  <p className="text-3xl font-bold text-orange-600">{wrap.price}</p>
                  <p className="text-sm text-gray-500">{wrap.coverage}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {wrap.features.map((feature, fIndex) => (
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
                    wrap.popular
                      ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Types & Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pricing by Vehicle Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                type: "Cars & Sedans",
                vehicles: ["Compact cars", "Mid-size sedans", "Coupes"],
                partial: "$500 - $800",
                half: "$1,500 - $2,000",
                full: "$2,500 - $3,500"
              },
              {
                type: "SUVs & Crossovers",
                vehicles: ["Small SUVs", "Mid-size SUVs", "Crossovers"],
                partial: "$700 - $1,000",
                half: "$1,800 - $2,300",
                full: "$3,000 - $4,000"
              },
              {
                type: "Trucks & Vans",
                vehicles: ["Pickup trucks", "Cargo vans", "Sprinter vans"],
                partial: "$800 - $1,200",
                half: "$2,000 - $2,500",
                full: "$3,500 - $5,000"
              },
              {
                type: "Commercial Vehicles",
                vehicles: ["Box trucks", "Trailers", "Fleet vehicles"],
                partial: "$1,000+",
                half: "$2,500+",
                full: "$5,000+"
              }
            ].map((vehicle, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{vehicle.type}</h3>
                <p className="text-sm text-gray-600 mb-6">
                  {vehicle.vehicles.join(" • ")}
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Partial Wrap</span>
                    <span className="font-bold text-orange-600">{vehicle.partial}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Half Wrap</span>
                    <span className="font-bold text-orange-600">{vehicle.half}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Full Wrap</span>
                    <span className="font-bold text-orange-600">{vehicle.full}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
            <p className="text-gray-800">
              <span className="font-semibold">All prices include:</span> Premium 3M or Avery vinyl • Professional design consultation • Expert installation • Post-installation inspection
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Vehicle Wraps?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🏆",
                title: "Premium Materials",
                desc: "We use only 3M and Avery Dennison vinyl for superior quality and durability"
              },
              {
                icon: "👨‍🎨",
                title: "Expert Installation",
                desc: "Certified installers with years of experience ensuring perfect results"
              },
              {
                icon: "⏱️",
                title: "5-7 Year Durability",
                desc: "Our wraps are built to last with proper care and maintenance"
              },
              {
                icon: "🎨",
                title: "Custom Designs",
                desc: "In-house design team to create eye-catching, effective graphics"
              },
              {
                icon: "🛡️",
                title: "Paint Protection",
                desc: "Wraps protect your original paint from scratches, chips, and UV damage"
              },
              {
                icon: "♻️",
                title: "Removable",
                desc: "Clean removal when you're ready to change or sell your vehicle"
              },
              {
                icon: "📈",
                title: "Proven ROI",
                desc: "Vehicle wraps generate 30,000-70,000 daily impressions"
              },
              {
                icon: "✅",
                title: "Warranty Included",
                desc: "Installation warranty and manufacturer material warranty"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Installation Process
          </h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Consultation & Design",
                desc: "We discuss your goals, take vehicle measurements, and create custom designs",
                time: "1-2 days"
              },
              {
                step: "2",
                title: "Design Approval",
                desc: "Review and approve your design with unlimited revisions",
                time: "1-3 days"
              },
              {
                step: "3",
                title: "Material Printing",
                desc: "We print your design on premium vinyl and laminate for protection",
                time: "2-3 days"
              },
              {
                step: "4",
                title: "Vehicle Preparation",
                desc: "Thorough cleaning and surface prep for optimal adhesion",
                time: "1 day"
              },
              {
                step: "5",
                title: "Professional Installation",
                desc: "Expert application with heat forming for perfect fit",
                time: "2-5 days"
              },
              {
                step: "6",
                title: "Final Inspection & Delivery",
                desc: "Quality check, care instructions, and you're ready to roll!",
                time: "Same day"
              }
            ].map((step, index) => (
              <div key={index} className="relative flex gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  {index < 5 && (
                    <div className="w-0.5 h-full bg-orange-200 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <span className="text-sm font-semibold text-orange-600">{step.time}</span>
                  </div>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700">
              <span className="font-bold">Total Timeline:</span> 7-14 business days from design approval to completed installation
            </p>
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
                q: "How long do vehicle wraps last?",
                a: "With proper care, our premium vinyl wraps last 5-7 years. Factors affecting longevity include sun exposure, how often the vehicle is washed, and storage conditions. Indoor-stored vehicles can last even longer."
              },
              {
                q: "Will a wrap damage my paint?",
                a: "No! When professionally installed and removed, wraps actually protect your paint from scratches, chips, and UV damage. Original factory paint in good condition will not be harmed."
              },
              {
                q: "Can I wrap a leased vehicle?",
                a: "Yes! Vehicle wraps are fully removable and won't affect your lease. Just ensure it's removed professionally before returning the vehicle."
              },
              {
                q: "How do I maintain my vehicle wrap?",
                a: "Wash regularly with mild soap and water (no harsh chemicals). Avoid automatic car washes with brushes. Hand washing or touchless washes are best. Park in shade when possible."
              },
              {
                q: "Can you wrap vehicles with dents or rust?",
                a: "Wraps conform to the vehicle's surface, so imperfections will still be visible. We recommend repairing major dents and rust before wrapping for best results."
              },
              {
                q: "Do you offer fleet discounts?",
                a: "Yes! We offer significant discounts for wrapping multiple vehicles. Contact us for a custom fleet quote."
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
      <section className="py-16 bg-gradient-to-br from-red-900 to-orange-800 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Transform Your Vehicle Today!
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free quote and design consultation. Turn your vehicle into a mobile advertisement.
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
