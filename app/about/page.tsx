'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from "lucide-react";

export default function About() {
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
            <h1 className="text-5xl font-bold text-green-800 mb-6">Our Story</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Four decades of dedication to traditional Ayurvedic healing in Sri Lanka
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">Established in 1982</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our journey began over four decades ago when our founder, driven by a deep passion for traditional healing, opened the doors of our first Ayurvedic medicine shop. What started as a small family business has grown into a trusted cornerstone of the community.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Throughout the years, we have remained committed to the authentic principles of Ayurveda, carefully sourcing the finest herbs and maintaining traditional preparation methods that have been passed down through generations.
              </p>
              <p className="text-lg text-gray-700">
                Today, we continue to serve families across Sri Lanka with the same dedication and care that defined our early days, ensuring that the wisdom of Ayurveda remains accessible to all who seek natural healing.
              </p>
            </div>
            <div>
              <img
                src="https://readdy.ai/api/search-image?query=Vintage%20black%20and%20white%20photograph%20style%20image%20of%20traditional%20Sri%20Lankan%20Ayurvedic%20medicine%20shop%20from%201982%2C%20showing%20old%20wooden%20shelves%20with%20glass%20jars%2C%20traditional%20weighing%20scales%2C%20and%20authentic%20historical%20atmosphere%20with%20sepia%20tones&width=600&height=800&seq=vintage-shop&orientation=portrait"
                alt="Historical Shop Photo"
                className="rounded-lg shadow-xl object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-700">Guiding principles that shape everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Authentic Healing</h3>
              <p className="text-gray-700">We preserve and share the pure, traditional knowledge of Ayurveda without compromise.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Quality Assurance</h3>
              <p className="text-gray-700">Every product meets our strict standards for purity, potency, and safety.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-community-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Community Care</h3>
              <p className="text-gray-700">We treat every customer like family, providing personalized guidance and support.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-leaf-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Natural Purity</h3>
              <p className="text-gray-700">100% natural ingredients, free from artificial additives and harmful chemicals.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-graduation-cap-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Knowledge Sharing</h3>
              <p className="text-gray-700">We educate our customers about proper usage and benefits of each remedy.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-time-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Timeless Wisdom</h3>
              <p className="text-gray-700">We honor ancient traditions while adapting to modern health needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Dedicated Team</h2>
            <p className="text-xl text-gray-700">Experienced professionals committed to your wellness</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20experienced%20Sri%20Lankan%20Ayurvedic%20practitioner%2C%20middle-aged%20man%20with%20kind%20eyes%20and%20gentle%20smile%2C%20wearing%20traditional%20white%20shirt%2C%20warm%20natural%20lighting%20with%20simple%20neutral%20background&width=400&height=500&seq=founder&orientation=portrait"
                alt="Founder"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover object-top shadow-lg"
              />
              <h3 className="text-xl font-bold text-green-800 mb-2">Dr. Sunil Perera</h3>
              <p className="text-green-600 mb-4">Founder & Chief Ayurvedic Consultant</p>
              <p className="text-gray-700">With over 40 years of experience, Dr. Perera founded our shop with a vision to make authentic Ayurvedic healing accessible to everyone.</p>
            </div>
            <div className="text-center">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20experienced%20Sri%20Lankan%20female%20Ayurvedic%20herbalist%2C%20middle-aged%20woman%20with%20warm%20smile%20and%20knowledgeable%20expression%2C%20wearing%20traditional%20clothing%2C%20natural%20lighting%20with%20simple%20background&width=400&height=500&seq=herbalist&orientation=portrait"
                alt="Senior Herbalist"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover object-top shadow-lg"
              />
              <h3 className="text-xl font-bold text-green-800 mb-2">Mrs. Kamala Silva</h3>
              <p className="text-green-600 mb-4">Senior Herbalist</p>
              <p className="text-gray-700">An expert in herb identification and traditional preparation methods, Mrs. Silva ensures the quality and authenticity of all our products.</p>
            </div>
            <div className="text-center">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20young%20Sri%20Lankan%20Ayurvedic%20consultant%2C%20friendly%20person%20in%20their%2030s%20with%20confident%20smile%2C%20wearing%20modern%20professional%20attire%2C%20bright%20natural%20lighting%20with%20clean%20background&width=400&height=500&seq=consultant&orientation=portrait"
                alt="Ayurvedic Consultant"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover object-top shadow-lg"
              />
              <h3 className="text-xl font-bold text-green-800 mb-2">Dr. Nimal Fernando</h3>
              <p className="text-green-600 mb-4">Ayurvedic Consultant</p>
              <p className="text-gray-700">Dr. Fernando provides personalized consultations, helping customers choose the right remedies for their specific health needs.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Experience Section */}
      <section className="py-20 bg-green-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Four Decades of Excellence</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">40+</div>
                <p className="text-xl opacity-90">Years of Service</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">100,000+</div>
                <p className="text-xl opacity-90">Satisfied Customers</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">5000+</div>
                <p className="text-xl opacity-90">Different Products</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">100%</div>
                <p className="text-xl opacity-90">Natural & Pure</p>
              </div>
            </div>
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
