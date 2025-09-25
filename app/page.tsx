'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/images/logo.png"
                alt="Ayurvedic Medicine Shop Logo"
                className="h-12 w-12"
              />
              <div>
                <h1 className="text-2xl font-bold text-green-800">
                  Thilaka Ayurveda
                </h1>
                <p className="text-sm text-green-600">Since 1982</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-green-800 hover:text-green-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-green-800 hover:text-green-600 font-medium">
                About
              </Link>
              <Link href="/products" className="text-green-800 hover:text-green-600 font-medium">
                Products
              </Link>
              <Link href="/contact" className="text-green-800 hover:text-green-600 font-medium">
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-green-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Nav */}
          {isOpen && (
            <nav className="flex flex-col space-y-4 mt-4 md:hidden">
              <Link
                href="/"
                className="text-green-800 hover:text-green-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-green-800 hover:text-green-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/products"
                className="text-green-800 hover:text-green-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/contact"
                className="text-green-800 hover:text-green-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-green-50"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/111.jpg')`,
        }}
      >
        <div className="text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Traditional Ayurvedic Medicine
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Serving Sri Lanka with authentic herbal remedies since 1982
          </p>
          <p className="text-lg mb-8 opacity-80">
            Over 40 years of trusted healing through nature&apos;s wisdom
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              Learn About Us
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              Visit Our Shop
            </Link>
          </div>
        </div>
      </section>
      {/* Heritage Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">Four Decades of Healing Heritage</h2>
              <p className="text-lg text-gray-700 mb-6">
                Since 1982, our family-owned Ayurvedic medicine shop has been a cornerstone of traditional healing in Sri Lanka. We have dedicated our lives to preserving and sharing the ancient wisdom of Ayurveda with our community.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our shop offers authentic, time-tested herbal remedies prepared using traditional methods passed down through generations. Every herb, oil, and preparation in our store is carefully selected for its purity and therapeutic value.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="ri-heart-pulse-line text-green-600 w-6 h-6 flex items-center justify-center"></i>
                </div>
                <span className="text-green-800 font-semibold">Trusted by thousands of families</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/unnamed1.jpg"
                alt="Traditional Ayurvedic Shop Interior"
                width={100}
                height={150}
                className="rounded-lg shadow-xl object-cover object-top w-full max-h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Commitment to You</h2>
            <p className="text-xl text-gray-700">What makes our Ayurvedic medicine shop special</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-leaf-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">100% Natural</h3>
              <p className="text-gray-700">All our medicines are prepared from pure, natural herbs without any artificial additives or chemicals.</p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-time-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Time-Tested</h3>
              <p className="text-gray-700">Our remedies follow ancient Ayurvedic principles and formulations that have been proven effective for centuries.</p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-user-heart-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Personal Care</h3>
              <p className="text-gray-700">We provide personalized guidance and recommendations based on your individual health needs and constitution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-700">Comprehensive range of traditional Ayurvedic medicines</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-green-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Collection%20of%20traditional%20Ayurvedic%20herbal%20powders%20in%20small%20glass%20jars%20with%20wooden%20spoons%2C%20various%20colored%20powders%20including%20turmeric%2C%20neem%2C%20and%20other%20medicinal%20herbs%20arranged%20neatly%20with%20simple%20white%20background&width=300&height=300&seq=powders&orientation=squarish"
                alt="Herbal Powders"
                className="w-full h-32 object-cover rounded-md mb-4 object-top"
              />
              <h3 className="text-lg font-bold text-green-800 mb-2">Herbal Powders</h3>
              <p className="text-gray-600">Traditional churnas and powdered herbs for various health conditions</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Traditional%20Ayurvedic%20medicinal%20oils%20in%20amber%20glass%20bottles%20with%20cork%20stoppers%2C%20arranged%20on%20wooden%20surface%20with%20fresh%20herbs%20and%20leaves%2C%20warm%20natural%20lighting%20with%20simple%20clean%20background&width=300&height=300&seq=oils&orientation=squarish"
                alt="Medicinal Oils"
                className="w-full h-32 object-cover rounded-md mb-4 object-top"
              />
              <h3 className="text-lg font-bold text-green-800 mb-2">Medicinal Oils</h3>
              <p className="text-gray-600">Authentic herbal oils for massage therapy and medicinal use</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Traditional%20Ayurvedic%20herbal%20tablets%20and%20pills%20in%20small%20bowls%20and%20containers%2C%20natural%20brown%20and%20green%20colored%20tablets%20made%20from%20herbs%2C%20arranged%20with%20mortar%20and%20pestle%20on%20wooden%20background&width=300&height=300&seq=tablets&orientation=squarish"
                alt="Herbal Tablets"
                className="w-full h-32 object-cover rounded-md mb-4 object-top"
              />
              <h3 className="text-lg font-bold text-green-800 mb-2">Herbal Tablets</h3>
              <p className="text-gray-600">Convenient tablet forms of traditional Ayurvedic formulations</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Fresh%20dried%20Ayurvedic%20herbs%20and%20roots%20displayed%20in%20wicker%20baskets%2C%20including%20turmeric%20roots%2C%20ginger%2C%20various%20medicinal%20leaves%20and%20bark%20pieces%2C%20natural%20rustic%20presentation%20with%20simple%20background&width=300&height=300&seq=herbs&orientation=squarish"
                alt="Raw Herbs"
                className="w-full h-32 object-cover rounded-md mb-4 object-top"
              />
              <h3 className="text-lg font-bold text-green-800 mb-2">Raw Herbs</h3>
              <p className="text-gray-600">Fresh and dried herbs sourced directly from trusted growers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Visit Our Shop Today</h2>
          <p className="text-xl mb-8 opacity-90">Experience the wisdom of traditional Ayurvedic healing</p>
          <p className="text-lg mb-8 opacity-80">We\'re here to guide you on your journey to natural wellness</p>
          <Link href="/contact" className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap">Get Directions</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://static.readdy.ai/image/7287dcd8714649f87b3169e43a183267/9510dabe9b0c5502c6074eea8f45bd0b.png"
                  alt="Logo"
                  className="h-10 w-10"
                />
                <div>
                  <h3 className="text-xl font-bold">Thilaka Ayurveda</h3>
                  <p className="text-sm opacity-80">Since 1982</p>
                </div>
              </div>
              <p className="opacity-80">Your trusted partner in traditional healing and natural wellness for over four decades.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block opacity-80 hover:opacity-100 cursor-pointer">Home</Link>
                <Link href="/about" className="block opacity-80 hover:opacity-100 cursor-pointer">About Us</Link>
                <Link href="/products" className="block opacity-80 hover:opacity-100 cursor-pointer">Our Products</Link>
                <Link href="/contact" className="block opacity-80 hover:opacity-100 cursor-pointer">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 opacity-80">
                <p className="flex items-center space-x-2">
                  <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center"></i>
                  <span>No. 38 Main Street, Ruwanwella, Sri Lanka</span>
                </p>
                <p className="flex items-center space-x-2">
                  <i className="ri-phone-line w-4 h-4 flex items-center justify-center"></i>
                  <a href="tel:+94362266693" className="text-white hover:underline">
                    +94 36 226 6693
                  </a>
                </p>
                <p className="flex items-center space-x-2">
                  <i className="ri-time-line w-4 h-4 flex items-center justify-center"></i>
                  <span>Mon-Sat: 8AM-6PM</span>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-center opacity-80">
            <p>&copy; 2025 Thilaka Ayurveda. All rights reserved. Made by <a className="nav-link d-inline p-0 text-white" href="https://www.devrious.lk/" target="_blank" rel="noopener">Devrious</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
