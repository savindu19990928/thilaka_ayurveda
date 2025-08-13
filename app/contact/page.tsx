'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="https://static.readdy.ai/image/7287dcd8714649f87b3169e43a183267/9510dabe9b0c5502c6074eea8f45bd0b.png"
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
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-green-800 mb-6">Visit Our Shop</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Come experience personalized Ayurvedic care at our physical location in Colombo
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-map-pin-line text-green-600 w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Our Location</h3>
                    <p className="text-gray-700">No. 38 Main Street</p>
                    <p className="text-gray-700">Ruwanwella, Sri Lanka</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-phone-line text-green-600 w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Phone</h3>
                    <p className="text-gray-700">+94 36 226 6693</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-time-line text-green-600 w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Opening Hours</h3>
                    <div className="space-y-1 text-gray-700">
                      <p>Monday - Saturday: 8:00 AM - 6:30 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-mail-line text-green-600 w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Email</h3>
                    <p className="text-gray-700">info@thilakaayurveda.lk</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shop Image */}
            <div>
              <Image
                src="/images/unnamed.jpg"
                alt="Our Ayurvedic Shop"
                width={100}
                height={150}
                className="rounded-lg shadow-xl object-cover object-top w-full max-h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Find Us</h2>
            <p className="text-xl text-gray-700">Located in the heart of Colombo, easily accessible by public transport</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3959.6936335432924!2d80.251247!3d7.045243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae307a93f953f69%3A0xa4af2c1b78aeeeb4!2sTHILAKA%20Ayurveda%20Osu%20Hala!5e0!3m2!1sen!2slk!4v1755105171985!5m2!1sen!2slk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ayurvedic Wellness Location"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-700">Comprehensive Ayurvedic services at our physical location</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-user-heart-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Personal Consultation</h3>
              <p className="text-gray-700">One-on-one consultations with our experienced Ayurvedic practitioners to understand your health needs.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-medicine-bottle-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Custom Preparations</h3>
              <p className="text-gray-700">Personalized herbal formulations prepared fresh according to your specific requirements.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-book-open-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Educational Guidance</h3>
              <p className="text-gray-700">Learn about proper usage, dosage, and lifestyle recommendations for optimal health benefits.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-search-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Product Selection</h3>
              <p className="text-gray-700">Expert assistance in choosing the right products from our extensive collection of authentic medicines.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-calendar-check-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Follow-up Care</h3>
              <p className="text-gray-700">Regular follow-up appointments to monitor your progress and adjust treatments as needed.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-green-808 mb-4">Quality Assurance</h3>
              <p className="text-gray-700">All products are thoroughly checked for quality and authenticity before dispensing to customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">How to Reach Us</h2>
            <p className="text-xl text-gray-700">Convenient transportation options to visit our shop</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-bus-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">By Bus</h3>
              <p className="text-gray-700">Multiple bus routes including 100, 101, 102, and 138 stop near our location on Galle Road.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-train-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">By Train</h3>
              <p className="text-gray-700">Bambalapitiya Railway Station is just a 5-minute walk from our shop. Very convenient for train travelers.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-car-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">By Car</h3>
              <p className="text-gray-700">Free parking available in front of the shop. Easy access from both Marine Drive and Galle Road.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Visit Us?</h2>
          <p className="text-xl mb-8 opacity-90">Experience personalized Ayurvedic care at our trusted shop</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+94112345678" className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap">
              Call Now
            </a>
            <a href="https://maps.app.goo.gl/CbANsPNtocc4cymq9" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap">
              Get Directions
            </a>
          </div>
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
