'use client';

import Link from "next/link";

export default function ServicesGrid() {
  const services = [
    {
      title: "PRINTING & DOCUMENT SERVICES",
      icon: "📄",
      description: "Professional printing solutions for all your needs",
      features: [
        "Fast File Printing & Copy",
        "Document Delivery",
        "Flyers, Posters & Brochures",
        "Business Cards & More",
      ],
      color: "from-blue-500 to-blue-600",
      link: "/services/printing",
    },
    {
      title: "DESIGN & BRANDING",
      icon: "🎨",
      description: "Creative design services that make your brand stand out",
      features: [
        "Graphic Design",
        "Logo & Brand Design",
        "Social Media Content",
        "Website & Digital Branding",
      ],
      color: "from-purple-500 to-purple-600",
      link: "/services/design",
    },
    {
      title: "SIGNS, ADVERTISING & DISPLAYS",
      icon: "🚩",
      description: "Eye-catching signage and promotional materials",
      features: [
        "Roll-up Banners",
        "Store Signs & Window Graphics",
        "Vehicle Wraps & Car Advertising",
        "Stickers, Labels & Decals",
      ],
      color: "from-orange-500 to-orange-600",
      link: "/services/signs",
    },
    {
      title: "CUSTOM PRODUCTION & CREATIVE SERVICES",
      icon: "🎯",
      description: "Innovative production and custom solutions",
      features: [
        "3D Printing",
        "T-shirt & Apparel Printing",
        "Promotional Products",
        "Event & Display Materials",
      ],
      color: "from-green-500 to-green-600",
      link: "/services/custom",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we deliver comprehensive printing and design solutions
            tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <div className="flex items-center space-x-4">
                  <div className="text-5xl">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-sm opacity-90 mt-1">{service.description}</p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.link}
                  className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold group-hover:translate-x-2 transition-transform"
                >
                  Learn More
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Can&apos;t find what you&apos;re looking for? We offer custom solutions for unique projects.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-8 py-4 text-lg font-semibold text-gray-900 hover:bg-yellow-400 transition-all shadow-lg"
          >
            Get Custom Quote
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
