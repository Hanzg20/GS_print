'use client';

import Link from "next/link";
import Image from "next/image";

export default function PortfolioShowcase() {
  const portfolioItems = [
    {
      title: "Vehicle Wraps",
      category: "Advertising",
      description: "Professional car wraps and vehicle branding that turn heads on the road.",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&q=80",
    },
    {
      title: "3D Printing Excellence",
      category: "Custom Production",
      description: "Precision 3D printing for prototypes, custom parts, and creative projects.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
    },
    {
      title: "Business Branding",
      category: "Design & Print",
      description: "Complete branding packages including business cards, letterheads, and more.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80",
    },
    {
      title: "Signage Solutions",
      category: "Signs & Displays",
      description: "Eye-catching storefront signs, banners, and promotional displays.",
      image: "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=600&q=80",
    },
    {
      title: "Custom Apparel",
      category: "T-shirt Printing",
      description: "High-quality custom t-shirts and apparel printing for events and businesses.",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    },
    {
      title: "Promotional Products",
      category: "Marketing Materials",
      description: "Branded promotional items that make lasting impressions on your clients.",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Work Speaks for Itself
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and see how we&apos;ve helped businesses
            like yours stand out with professional printing and design.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">View Projects</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 bg-white">
                <div className="text-sm font-semibold text-yellow-600 mb-2">{item.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-md border-2 border-yellow-500 px-8 py-4 text-lg font-semibold text-yellow-600 hover:bg-yellow-50 transition-all"
          >
            View Full Portfolio
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
