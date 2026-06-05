'use client';

import Image from "next/image";
import { useState } from "react";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const categories = [
    "All Projects",
    "Printing",
    "Design & Branding",
    "Signs & Advertising",
    "Vehicle Wraps",
    "3D Printing",
    "Custom Apparel",
  ];

  const portfolioItems = [
    {
      title: "Professional Vehicle Wrap",
      category: "Vehicle Wraps",
      description: "Complete vehicle branding for local business fleet",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80",
    },
    {
      title: "Corporate Branding Package",
      category: "Design & Branding",
      description: "Business cards, letterheads, and brand identity design",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    },
    {
      title: "3D Prototype Parts",
      category: "3D Printing",
      description: "Precision 3D printed components for product development",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    },
    {
      title: "Storefront Signage",
      category: "Signs & Advertising",
      description: "Large format outdoor signage with illumination",
      image: "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=800&q=80",
    },
    {
      title: "Event T-Shirts",
      category: "Custom Apparel",
      description: "Custom printed t-shirts for corporate event (500+ units)",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    },
    {
      title: "Trade Show Display",
      category: "Signs & Advertising",
      description: "Complete trade show booth with banners and displays",
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80",
    },
    {
      title: "Restaurant Menus",
      category: "Printing",
      description: "Premium menu printing with lamination",
      image: "https://images.unsplash.com/photo-1565022408193-1e21f3ca0ee9?w=800&q=80",
    },
    {
      title: "Real Estate Marketing",
      category: "Design & Branding",
      description: "Flyers, postcards, and signage for property listings",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    },
    {
      title: "Window Graphics",
      category: "Signs & Advertising",
      description: "Custom window decals and storefront graphics",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    },
    {
      title: "Promotional Products",
      category: "Custom Apparel",
      description: "Branded merchandise including pens, mugs, and tote bags",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
    },
    {
      title: "Business Stationery",
      category: "Printing",
      description: "Complete stationery set for professional services firm",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
    },
    {
      title: "Custom 3D Signage",
      category: "3D Printing",
      description: "3D printed dimensional letters for office branding",
      image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&q=80",
    },
  ];

  const filteredItems = selectedCategory === "All Projects"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our work and see how we&apos;ve helped businesses across Ottawa achieve their vision
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white sticky top-20 z-40 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-yellow-500 text-gray-900'
                    : 'border-2 border-gray-300 text-gray-700 hover:border-yellow-500 hover:bg-yellow-50 hover:text-yellow-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white px-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm mb-4">{item.description}</p>
                      <button className="inline-flex items-center text-yellow-400 font-semibold">
                        View Details
                        <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6">
                  <div className="text-sm font-semibold text-yellow-600 mb-1">{item.category}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center justify-center rounded-md border-2 border-yellow-500 px-8 py-4 text-lg font-semibold text-yellow-600 hover:bg-yellow-50 transition-all">
              Load More Projects
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-orange-500">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Let&apos;s work together to bring your vision to life. Get started with a free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-8 py-4 text-lg font-semibold text-white hover:bg-gray-800 transition-all shadow-lg"
            >
              Get Free Quote
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border-2 border-gray-900 px-8 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
