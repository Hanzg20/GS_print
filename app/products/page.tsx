'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'transfers', name: 'Heat Transfers' },
    { id: 'apparel', name: 'Custom Apparel' },
    { id: 'business', name: 'Business Printing' },
    { id: 'signs', name: 'Signs & Advertising' },
    { id: '3d', name: '3D Printing' },
    { id: 'promo', name: 'Promotional Items' },
  ];

  const products = [
    {
      id: 1,
      category: 'transfers',
      name: 'DTF Transfer Printing',
      description: 'High-quality Direct-to-Film transfers for vibrant, durable prints on any fabric',
      price: 'From $2.50',
      image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80',
      features: ['Full color', 'No minimums', 'Same-day service available'],
      link: '/services/dtf-transfers'
    },
    {
      id: 2,
      category: 'transfers',
      name: 'UV DTF Stickers',
      description: 'Weather-resistant stickers perfect for any surface - indoors or outdoors',
      price: 'From $1.50',
      image: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=800&q=80',
      features: ['Waterproof', 'UV resistant', 'Single or double-sided'],
      link: '/services/uv-stickers'
    },
    {
      id: 3,
      category: 'apparel',
      name: 'Custom T-Shirts & Apparel',
      description: 'Premium quality custom printed apparel including t-shirts, hoodies, and hats',
      price: '$15 - $55',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      features: ['100% cotton options', 'Bulk discounts', 'Fast turnaround'],
      link: '/services/custom-apparel'
    },
    {
      id: 4,
      category: 'business',
      name: 'Business Cards',
      description: 'Professional business cards on premium cardstock',
      price: 'From $50 (500 cards)',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80',
      features: ['Multiple finishes', 'Standard or custom sizes', 'Quick delivery'],
      link: '/services/business-cards'
    },
    {
      id: 5,
      category: 'signs',
      name: 'Vehicle Wraps',
      description: 'Full or partial vehicle wraps for maximum brand visibility',
      price: 'From $500',
      image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80',
      features: ['Professional design', 'Premium vinyl', 'Expert installation'],
      link: '/services/vehicle-wraps'
    },
    {
      id: 6,
      category: '3d',
      name: '3D Printing Service',
      description: 'Precision 3D printing for prototypes, parts, and custom objects',
      price: 'From $0.50/gram',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
      features: ['Multiple materials', 'High detail', 'Fast production'],
      link: '/products/3d-printing'
    },
    {
      id: 7,
      category: 'signs',
      name: 'Outdoor Signage',
      description: 'Durable outdoor signs for businesses and events',
      price: 'From $100',
      image: 'https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=800&q=80',
      features: ['Weather-resistant', 'Various sizes', 'Custom designs'],
      link: '/products/outdoor-signs'
    },
    {
      id: 8,
      category: 'promo',
      name: 'Promotional Products',
      description: 'Branded merchandise including mugs, pens, bags, and more',
      price: 'From $3',
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80',
      features: ['Wide selection', 'Bulk pricing', 'Custom branding'],
      link: '/products/promotional-items'
    },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Our Products & Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete range of printing and design solutions.
              Quality products with competitive pricing and fast turnaround.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b sticky top-20 z-30 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? 'bg-yellow-500 text-gray-900'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <div className="text-lg font-bold text-yellow-600 whitespace-nowrap ml-2">
                      {product.price}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      href={product.link}
                      className="flex-1 bg-yellow-500 text-gray-900 font-semibold px-4 py-3 rounded-lg hover:bg-yellow-400 transition-all text-center"
                    >
                      View Details
                    </Link>
                    <Link
                      href="/quote"
                      className="flex-1 border-2 border-yellow-500 text-yellow-600 font-semibold px-4 py-3 rounded-lg hover:bg-yellow-50 transition-all text-center"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-orange-500">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Can&apos;t Find What You Need?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            We offer custom solutions for unique projects. Contact us to discuss your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-8 py-4 text-lg font-semibold text-white hover:bg-gray-800 transition-all shadow-lg"
            >
              Request Custom Quote
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

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose GoldSky Print?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Fast Turnaround',
                description: 'Same-day service available for rush orders'
              },
              {
                icon: '💰',
                title: 'Competitive Pricing',
                description: 'Best value with bulk order discounts'
              },
              {
                icon: '✓',
                title: 'Quality Guaranteed',
                description: '100% satisfaction or your money back'
              },
              {
                icon: '🎨',
                title: 'Free Design Help',
                description: 'Professional design assistance included'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
