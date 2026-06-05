export default function PricingPage() {
  const pricingCategories = [
    {
      title: "Heat Transfers & Stickers",
      items: [
        {
          name: "DTF Transfers (Gang Sheet)",
          prices: [
            { desc: "Per square inch", price: "$0.50" },
            { desc: "Minimum order", price: "$10.00" },
            { desc: "Fluorescent colors", price: "+20%" },
            { desc: "Metallic colors", price: "+25%" }
          ],
          features: ["Full color printing", "No setup fees", "Same-day service available"]
        },
        {
          name: "Single DTF Transfers",
          prices: [
            { desc: "Small (up to 5\" x 5\")", price: "$2.50" },
            { desc: "Medium (up to 10\" x 10\")", price: "$5.00" },
            { desc: "Large (up to 14\" x 14\")", price: "$8.50" },
            { desc: "Extra Large (up to 22\" x 22\")", price: "$15.00" }
          ],
          features: ["No minimums", "Quick turnaround", "Premium quality"]
        },
        {
          name: "UV DTF Stickers",
          prices: [
            { desc: "Single-sided (small)", price: "$1.50" },
            { desc: "Single-sided (large)", price: "$5.00" },
            { desc: "Double-sided", price: "+$0.50" },
            { desc: "Bulk orders (100+)", price: "20% off" }
          ],
          features: ["Waterproof & UV resistant", "Custom shapes", "Indoor/outdoor use"]
        }
      ]
    },
    {
      title: "Custom Apparel",
      items: [
        {
          name: "T-Shirts",
          prices: [
            { desc: "1-11 shirts", price: "$25 each" },
            { desc: "12-24 shirts", price: "$20 each" },
            { desc: "25-49 shirts", price: "$17 each" },
            { desc: "50+ shirts", price: "$15 each" }
          ],
          features: ["Premium cotton", "Full color prints", "Multiple sizes available"]
        },
        {
          name: "Hoodies & Sweatshirts",
          prices: [
            { desc: "1-11 pieces", price: "$55 each" },
            { desc: "12-24 pieces", price: "$45 each" },
            { desc: "25+ pieces", price: "$38 each" }
          ],
          features: ["Heavy-weight fabric", "Custom designs", "Bulk discounts"]
        },
        {
          name: "Custom Hats",
          prices: [
            { desc: "Embroidered logo", price: "$20-30" },
            { desc: "Printed design", price: "$15-25" },
            { desc: "Bulk (25+)", price: "15% off" }
          ],
          features: ["Various styles", "Professional embroidery", "Fast production"]
        }
      ]
    },
    {
      title: "Business Printing",
      items: [
        {
          name: "Business Cards",
          prices: [
            { desc: "500 cards - Standard", price: "$50" },
            { desc: "500 cards - Premium", price: "$85" },
            { desc: "1000 cards - Standard", price: "$75" },
            { desc: "1000 cards - Premium", price: "$125" }
          ],
          features: ["Multiple finishes", "Standard or custom sizes", "Quick 2-3 day turnaround"]
        },
        {
          name: "Flyers & Brochures",
          prices: [
            { desc: "Flyers (8.5x11) - per 100", price: "$25-50" },
            { desc: "Tri-fold brochures - per 100", price: "$75-150" },
            { desc: "Bi-fold brochures - per 100", price: "$60-120" }
          ],
          features: ["Full color", "Various paper stocks", "Professional design available"]
        },
        {
          name: "Posters & Banners",
          prices: [
            { desc: "18x24 poster", price: "$15" },
            { desc: "24x36 poster", price: "$25" },
            { desc: "3x6 banner", price: "$75" },
            { desc: "4x8 banner", price: "$125" }
          ],
          features: ["Weather-resistant options", "Grommets included", "Indoor/outdoor materials"]
        }
      ]
    },
    {
      title: "Signs & Vehicle Graphics",
      items: [
        {
          name: "Vehicle Wraps",
          prices: [
            { desc: "Partial wrap (hood/trunk)", price: "$500-1,200" },
            { desc: "Half wrap", price: "$1,500-2,500" },
            { desc: "Full wrap (sedan)", price: "$2,500-3,500" },
            { desc: "Full wrap (SUV/truck)", price: "$3,000-5,000" }
          ],
          features: ["Professional installation", "Premium 3M/Avery vinyl", "5-7 year durability"]
        },
        {
          name: "Outdoor Signage",
          prices: [
            { desc: "Yard signs (18x24)", price: "$15-25" },
            { desc: "A-frame signs", price: "$150-300" },
            { desc: "Channel letters", price: "$300-800" },
            { desc: "Custom storefront", price: "Quote required" }
          ],
          features: ["Weather-resistant", "Custom designs", "Professional installation available"]
        },
        {
          name: "Window Graphics",
          prices: [
            { desc: "Perforated vinyl (per sq ft)", price: "$8-12" },
            { desc: "Full window graphic", price: "$200-600" },
            { desc: "Frosted vinyl (per sq ft)", price: "$10-15" }
          ],
          features: ["Easy application", "Removable", "UV protection"]
        }
      ]
    },
    {
      title: "3D Printing & Specialty",
      items: [
        {
          name: "3D Printing",
          prices: [
            { desc: "PLA material (per gram)", price: "$0.50" },
            { desc: "ABS material (per gram)", price: "$0.75" },
            { desc: "PETG material (per gram)", price: "$0.85" },
            { desc: "Resin printing (per gram)", price: "$2.00" }
          ],
          features: ["High precision", "Multiple materials", "Prototyping & production"]
        },
        {
          name: "3D Patches & Badges",
          prices: [
            { desc: "Small patch (2-3\")", price: "$5" },
            { desc: "Medium patch (4-5\")", price: "$10" },
            { desc: "Large patch (6\"+)", price: "$15" },
            { desc: "Bulk orders (50+)", price: "25% off" }
          ],
          features: ["SuperFlex material", "Custom shapes", "Durable & flexible"]
        }
      ]
    },
    {
      title: "Promotional Products",
      items: [
        {
          name: "Branded Merchandise",
          prices: [
            { desc: "Custom mugs", price: "$10-20" },
            { desc: "Keychains", price: "$2-8" },
            { desc: "Pens (bulk)", price: "$0.50-2" },
            { desc: "Tote bags", price: "$3-15" },
            { desc: "Mouse pads", price: "$8-15" }
          ],
          features: ["Wide selection", "Bulk pricing available", "Quick turnaround"]
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              No hidden fees. Quality products at competitive prices.
              Volume discounts available for bulk orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/quote"
                className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-8 py-4 text-lg font-semibold text-gray-900 hover:bg-yellow-400 transition-all shadow-lg"
              >
                Get Custom Quote
              </a>
              <a
                href="tel:613-452-0527"
                className="inline-flex items-center justify-center rounded-md border-2 border-yellow-500 px-8 py-4 text-lg font-semibold text-yellow-400 hover:bg-yellow-500/10 transition-all"
              >
                Call for Quote: 613-452-0527
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Price Notice */}
      <section className="bg-yellow-50 border-b border-yellow-200 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-gray-800">
            <svg className="h-5 w-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm font-medium">
              All prices in CAD. Volume discounts available. Prices subject to change. Contact us for current pricing and custom quotes.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {pricingCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-yellow-500">
                  {category.title}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {item.name}
                      </h3>

                      {/* Pricing Table */}
                      <div className="mb-6 space-y-3">
                        {item.prices.map((priceItem, priceIndex) => (
                          <div
                            key={priceIndex}
                            className="flex justify-between items-center py-2 border-b border-gray-200"
                          >
                            <span className="text-gray-700">{priceItem.desc}</span>
                            <span className="font-bold text-yellow-600 text-lg">
                              {priceItem.price}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Includes:</p>
                        <ul className="space-y-2">
                          {item.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Button */}
                      <a
                        href="/quote"
                        className="block w-full text-center bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-all"
                      >
                        Order Now
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pricing FAQs
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do you offer volume discounts?",
                a: "Yes! We offer significant discounts for bulk orders. The more you order, the more you save. Contact us for custom bulk pricing."
              },
              {
                q: "Are there any setup fees?",
                a: "No setup fees for most services! We believe in transparent pricing. Any applicable fees will be clearly communicated upfront."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards (Visa, Mastercard, Amex), Interac e-Transfer, and cash for in-person orders."
              },
              {
                q: "Can I get a rush order?",
                a: "Yes! Same-day and rush services are available for most products. Rush fees may apply. Call us at 613-452-0527 to discuss your timeline."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Get a free, no-obligation quote for your project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-8 py-4 text-lg font-semibold text-white hover:bg-gray-800 transition-all shadow-lg"
            >
              Request Quote
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/products"
              className="inline-flex items-center justify-center rounded-md border-2 border-gray-900 px-8 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-all"
            >
              Browse Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
