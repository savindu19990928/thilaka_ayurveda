'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from "lucide-react";

export default function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const categories = [
    {
      name: "Digestive Health",
      description: "Traditional formulations for healthy digestion and gut wellness",
      images: [
        "https://readdy.ai/api/search-image?query=Triphala%20Churna%20traditional%20Ayurvedic%20digestive%20powder%20in%20brass%20bowl%20with%20wooden%20spoon%2C%20dark%20brown%20fine%20powder%20with%20three%20fruits%20amla%20bibhitaki%20haritaki%20arranged%20beside%2C%20clean%20white%20background%20professional%20lighting&width=200&height=200&seq=triphala1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Hingwashtak%20Churna%20digestive%20spice%20powder%20in%20small%20ceramic%20bowl%2C%20aromatic%20yellow%20brown%20powder%20with%20asafoetida%20and%20spices%2C%20traditional%20Ayurvedic%20preparation%20on%20wooden%20surface&width=200&height=200&seq=hingwashtak1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Avipattikar%20Churna%20cooling%20digestive%20powder%20in%20glass%20jar%20with%20wooden%20lid%2C%20light%20colored%20fine%20powder%20with%20cooling%20herbs%2C%20arranged%20with%20fresh%20mint%20leaves%20on%20marble%20surface&width=200&height=200&seq=avipattikar1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Chitrakadi%20Gutika%20traditional%20Ayurvedic%20digestive%20tablets%20in%20wooden%20bowl%2C%20small%20round%20brown%20tablets%20with%20digestive%20herbs%2C%20arranged%20with%20fresh%20ginger%20and%20black%20pepper%20on%20clean%20background&width=200&height=200&seq=chitrakadi1&orientation=squarish"
      ]
    },
    {
      name: "Respiratory Care",
      description: "Natural remedies for respiratory health and immunity",
      images: [
        "https://readdy.ai/api/search-image?query=Sitopaladi%20Churna%20respiratory%20care%20powder%20in%20brass%20container%2C%20white%20crystalline%20powder%20with%20rock%20sugar%20and%20spices%2C%20arranged%20with%20bamboo%20leaves%20and%20tulsi%20on%20wooden%20background&width=200&height=200&seq=sitopaladi1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Talisadi%20Churna%20breathing%20support%20powder%20in%20ceramic%20bowl%2C%20light%20brown%20aromatic%20powder%20with%20cardamom%20and%20cinnamon%2C%20traditional%20respiratory%20remedy%20on%20marble%20surface&width=200&height=200&seq=talisadi1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Chyawanprash%20immunity%20booster%20in%20glass%20jar%2C%20dark%20brown%20thick%20paste%20with%20herbs%20and%20honey%2C%20traditional%20Ayurvedic%20jam%20with%20golden%20spoon%20on%20wooden%20table&width=200&height=200&seq=chyawanprash1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Vasavaleha%20respiratory%20herbal%20jam%20in%20copper%20container%2C%20thick%20dark%20paste%20with%20medicinal%20herbs%2C%20arranged%20with%20fresh%20vasaka%20leaves%20and%20honey%20on%20clean%20background&width=200&height=200&seq=vasavaleha1&orientation=squarish"
      ]
    },
    {
      name: "Joint & Muscle Care",
      description: "Ayurvedic solutions for joint health and muscle strength",
      images: [
        "https://readdy.ai/api/search-image?query=Mahanarayan%20Oil%20joint%20care%20massage%20oil%20in%20amber%20glass%20bottle%2C%20golden%20yellow%20herbal%20oil%20with%20cork%20stopper%2C%20arranged%20with%20fresh%20herbs%20and%20mortar%20pestle%20on%20wooden%20surface&width=200&height=200&seq=mahanarayan1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Dashmoolarishta%20joint%20tonic%20in%20dark%20glass%20bottle%2C%20herbal%20liquid%20medicine%20with%20traditional%20cork%2C%20arranged%20with%20ten%20roots%20dashmool%20herbs%20on%20marble%20background&width=200&height=200&seq=dashmoolarishta1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Yogaraja%20Guggulu%20joint%20support%20tablets%20in%20wooden%20bowl%2C%20dark%20brown%20round%20tablets%20with%20guggul%20resin%2C%20traditional%20Ayurvedic%20joint%20care%20medicine%20on%20clean%20background&width=200&height=200&seq=yogaraja1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Sahachar%20Oil%20muscle%20care%20herbal%20oil%20in%20glass%20bottle%20with%20dropper%2C%20therapeutic%20massage%20oil%20with%20medicinal%20herbs%2C%20arranged%20with%20fresh%20sahachar%20leaves%20on%20wooden%20table&width=200&height=200&seq=sahachar1&orientation=squarish"
      ]
    },
    {
      name: "Women's Health",
      description: "Specialized formulations for women's wellness needs",
      images: [
        "https://readdy.ai/api/search-image?query=Ashokarishta%20women%20health%20tonic%20in%20elegant%20glass%20bottle%2C%20dark%20red%20herbal%20liquid%20with%20traditional%20cork%2C%20arranged%20with%20fresh%20ashoka%20flowers%20and%20leaves%20on%20silk%20fabric&width=200&height=200&seq=ashokarishta1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Shatavari%20Churna%20women%20wellness%20powder%20in%20ceramic%20jar%2C%20fine%20white%20powder%20with%20wooden%20spoon%2C%20arranged%20with%20fresh%20shatavari%20roots%20and%20pink%20flowers%20on%20marble%20surface&width=200&height=200&seq=shatavari1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Chandraprabha%20Vati%20women%20health%20tablets%20in%20silver%20container%2C%20small%20round%20white%20tablets%20with%20herbs%2C%20traditional%20Ayurvedic%20medicine%20with%20lotus%20petals%20on%20clean%20background&width=200&height=200&seq=chandraprabha1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Kumaryasava%20aloe%20wellness%20tonic%20in%20amber%20bottle%2C%20golden%20herbal%20liquid%20with%20natural%20cork%2C%20arranged%20with%20fresh%20aloe%20vera%20leaves%20and%20jasmine%20flowers%20on%20wooden%20surface&width=200&height=200&seq=kumaryasava1&orientation=squarish"
      ]
    },
    {
      name: "Skin & Hair Care",
      description: "Natural solutions for healthy skin and beautiful hair",
      images: [
        "https://readdy.ai/api/search-image?query=Neem%20Oil%20skin%20care%20in%20dark%20glass%20bottle%20with%20dropper%2C%20green%20tinted%20herbal%20oil%20with%20cork%2C%20arranged%20with%20fresh%20neem%20leaves%20and%20flowers%20on%20wooden%20background&width=200&height=200&seq=neem1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Bhringraj%20Oil%20hair%20care%20in%20amber%20bottle%2C%20dark%20green%20herbal%20hair%20oil%20with%20natural%20cork%2C%20arranged%20with%20fresh%20bhringraj%20leaves%20and%20coconut%20on%20marble%20surface&width=200&height=200&seq=bhringraj1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Manjishtha%20Churna%20skin%20purifying%20powder%20in%20brass%20container%2C%20reddish%20brown%20fine%20powder%20with%20wooden%20spoon%2C%20arranged%20with%20manjishtha%20roots%20on%20clean%20white%20background&width=200&height=200&seq=manjishtha1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Khadirarishta%20blood%20purifier%20tonic%20in%20dark%20bottle%2C%20herbal%20liquid%20medicine%20with%20traditional%20cork%2C%20arranged%20with%20khadira%20bark%20and%20rose%20petals%20on%20silk%20fabric&width=200&height=200&seq=khadirarishta1&orientation=squarish"
      ]
    },
    {
      name: "Immune Support",
      description: "Herbal blends to strengthen immunity and overall resilience",
      images: [
        "https://readdy.ai/api/search-image?query=Brahmi%20Churna%20brain%20tonic%20powder%20in%20ceramic%20bowl%2C%20fine%20green%20powder%20with%20wooden%20spoon%2C%20arranged%20with%20fresh%20brahmi%20leaves%20and%20white%20lotus%20petals%20on%20marble%20surface&width=200&height=200&seq=brahmi1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Shankhpushpi%20Churna%20memory%20enhancer%20powder%20in%20brass%20container%2C%20light%20colored%20fine%20powder%20with%20silver%20spoon%2C%20arranged%20with%20shankhpushpi%20flowers%20on%20clean%20background&width=200&height=200&seq=shankhpushpi1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Medhya%20Rasayan%20brain%20tonic%20tablets%20in%20wooden%20bowl%2C%20golden%20brown%20round%20tablets%20with%20herbs%2C%20traditional%20mental%20wellness%20medicine%20with%20meditation%20beads%20on%20silk%20cloth&width=200&height=200&seq=medhya1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Saraswatarishta%20intelligence%20tonic%20in%20elegant%20bottle%2C%20golden%20herbal%20liquid%20with%20cork%20stopper%2C%20arranged%20with%20sacred%20books%20and%20white%20flowers%20on%20wooden%20table&width=200&height=200&seq=saraswatarishta1&orientation=squarish"
      ]
    },
    {
      name: "Detox & Cleansing",
      description: "Natural formulations for internal purification and toxin elimination",
      images: [
        "https://readdy.ai/api/search-image?query=Brahmi%20Churna%20brain%20tonic%20powder%20in%20ceramic%20bowl%2C%20fine%20green%20powder%20with%20wooden%20spoon%2C%20arranged%20with%20fresh%20brahmi%20leaves%20and%20white%20lotus%20petals%20on%20marble%20surface&width=200&height=200&seq=brahmi1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Shankhpushpi%20Churna%20memory%20enhancer%20powder%20in%20brass%20container%2C%20light%20colored%20fine%20powder%20with%20silver%20spoon%2C%20arranged%20with%20shankhpushpi%20flowers%20on%20clean%20background&width=200&height=200&seq=shankhpushpi1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Medhya%20Rasayan%20brain%20tonic%20tablets%20in%20wooden%20bowl%2C%20golden%20brown%20round%20tablets%20with%20herbs%2C%20traditional%20mental%20wellness%20medicine%20with%20meditation%20beads%20on%20silk%20cloth&width=200&height=200&seq=medhya1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Saraswatarishta%20intelligence%20tonic%20in%20elegant%20bottle%2C%20golden%20herbal%20liquid%20with%20cork%20stopper%2C%20arranged%20with%20sacred%20books%20and%20white%20flowers%20on%20wooden%20table&width=200&height=200&seq=saraswatarishta1&orientation=squarish"
      ]
    },
    {
      name: "Diabetes & Metabolic Health",
      description: "Natural solutions for blood sugar balance and metabolism support",
      images: [
        "https://readdy.ai/api/search-image?query=Brahmi%20Churna%20brain%20tonic%20powder%20in%20ceramic%20bowl%2C%20fine%20green%20powder%20with%20wooden%20spoon%2C%20arranged%20with%20fresh%20brahmi%20leaves%20and%20white%20lotus%20petals%20on%20marble%20surface&width=200&height=200&seq=brahmi1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Shankhpushpi%20Churna%20memory%20enhancer%20powder%20in%20brass%20container%2C%20light%20colored%20fine%20powder%20with%20silver%20spoon%2C%20arranged%20with%20shankhpushpi%20flowers%20on%20clean%20background&width=200&height=200&seq=shankhpushpi1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Medhya%20Rasayan%20brain%20tonic%20tablets%20in%20wooden%20bowl%2C%20golden%20brown%20round%20tablets%20with%20herbs%2C%20traditional%20mental%20wellness%20medicine%20with%20meditation%20beads%20on%20silk%20cloth&width=200&height=200&seq=medhya1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Saraswatarishta%20intelligence%20tonic%20in%20elegant%20bottle%2C%20golden%20herbal%20liquid%20with%20cork%20stopper%2C%20arranged%20with%20sacred%20books%20and%20white%20flowers%20on%20wooden%20table&width=200&height=200&seq=saraswatarishta1&orientation=squarish"
      ]
    },
    {
      name: "Weight Management",
      description: "Ayurvedic aids for healthy weight control and energy balance",
      images: [
        "https://readdy.ai/api/search-image?query=Brahmi%20Churna%20brain%20tonic%20powder%20in%20ceramic%20bowl%2C%20fine%20green%20powder%20with%20wooden%20spoon%2C%20arranged%20with%20fresh%20brahmi%20leaves%20and%20white%20lotus%20petals%20on%20marble%20surface&width=200&height=200&seq=brahmi1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Shankhpushpi%20Churna%20memory%20enhancer%20powder%20in%20brass%20container%2C%20light%20colored%20fine%20powder%20with%20silver%20spoon%2C%20arranged%20with%20shankhpushpi%20flowers%20on%20clean%20background&width=200&height=200&seq=shankhpushpi1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Medhya%20Rasayan%20brain%20tonic%20tablets%20in%20wooden%20bowl%2C%20golden%20brown%20round%20tablets%20with%20herbs%2C%20traditional%20mental%20wellness%20medicine%20with%20meditation%20beads%20on%20silk%20cloth&width=200&height=200&seq=medhya1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Saraswatarishta%20intelligence%20tonic%20in%20elegant%20bottle%2C%20golden%20herbal%20liquid%20with%20cork%20stopper%2C%20arranged%20with%20sacred%20books%20and%20white%20flowers%20on%20wooden%20table&width=200&height=200&seq=saraswatarishta1&orientation=squarish"
      ]
    },
    {
      name: "Oral & Dental Care",
      description: "Natural solutions for fresh breath and strong teeth",
      images: [
        "https://readdy.ai/api/search-image?query=Brahmi%20Churna%20brain%20tonic%20powder%20in%20ceramic%20bowl%2C%20fine%20green%20powder%20with%20wooden%20spoon%2C%20arranged%20with%20fresh%20brahmi%20leaves%20and%20white%20lotus%20petals%20on%20marble%20surface&width=200&height=200&seq=brahmi1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Shankhpushpi%20Churna%20memory%20enhancer%20powder%20in%20brass%20container%2C%20light%20colored%20fine%20powder%20with%20silver%20spoon%2C%20arranged%20with%20shankhpushpi%20flowers%20on%20clean%20background&width=200&height=200&seq=shankhpushpi1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Medhya%20Rasayan%20brain%20tonic%20tablets%20in%20wooden%20bowl%2C%20golden%20brown%20round%20tablets%20with%20herbs%2C%20traditional%20mental%20wellness%20medicine%20with%20meditation%20beads%20on%20silk%20cloth&width=200&height=200&seq=medhya1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Saraswatarishta%20intelligence%20tonic%20in%20elegant%20bottle%2C%20golden%20herbal%20liquid%20with%20cork%20stopper%2C%20arranged%20with%20sacred%20books%20and%20white%20flowers%20on%20wooden%20table&width=200&height=200&seq=saraswatarishta1&orientation=squarish"
      ]
    },
    {
      name: "Bone & Spine Health",
      description: "Formulations to support bone density and spinal wellness",
      images: [
        "https://readdy.ai/api/search-image?query=Brahmi%20Churna%20brain%20tonic%20powder%20in%20ceramic%20bowl%2C%20fine%20green%20powder%20with%20wooden%20spoon%2C%20arranged%20with%20fresh%20brahmi%20leaves%20and%20white%20lotus%20petals%20on%20marble%20surface&width=200&height=200&seq=brahmi1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Shankhpushpi%20Churna%20memory%20enhancer%20powder%20in%20brass%20container%2C%20light%20colored%20fine%20powder%20with%20silver%20spoon%2C%20arranged%20with%20shankhpushpi%20flowers%20on%20clean%20background&width=200&height=200&seq=shankhpushpi1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Medhya%20Rasayan%20brain%20tonic%20tablets%20in%20wooden%20bowl%2C%20golden%20brown%20round%20tablets%20with%20herbs%2C%20traditional%20mental%20wellness%20medicine%20with%20meditation%20beads%20on%20silk%20cloth&width=200&height=200&seq=medhya1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Saraswatarishta%20intelligence%20tonic%20in%20elegant%20bottle%2C%20golden%20herbal%20liquid%20with%20cork%20stopper%2C%20arranged%20with%20sacred%20books%20and%20white%20flowers%20on%20wooden%20table&width=200&height=200&seq=saraswatarishta1&orientation=squarish"
      ]
    },
    {
      name: "Elderly Care",
      description: "Ayurvedic support for graceful aging and vitality in later years",
      images: [
        "https://readdy.ai/api/search-image?query=Brahmi%20Churna%20brain%20tonic%20powder%20in%20ceramic%20bowl%2C%20fine%20green%20powder%20with%20wooden%20spoon%2C%20arranged%20with%20fresh%20brahmi%20leaves%20and%20white%20lotus%20petals%20on%20marble%20surface&width=200&height=200&seq=brahmi1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Shankhpushpi%20Churna%20memory%20enhancer%20powder%20in%20brass%20container%2C%20light%20colored%20fine%20powder%20with%20silver%20spoon%2C%20arranged%20with%20shankhpushpi%20flowers%20on%20clean%20background&width=200&height=200&seq=shankhpushpi1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Medhya%20Rasayan%20brain%20tonic%20tablets%20in%20wooden%20bowl%2C%20golden%20brown%20round%20tablets%20with%20herbs%2C%20traditional%20mental%20wellness%20medicine%20with%20meditation%20beads%20on%20silk%20cloth&width=200&height=200&seq=medhya1&orientation=squarish",
        "https://readdy.ai/api/search-image?query=Saraswatarishta%20intelligence%20tonic%20in%20elegant%20bottle%2C%20golden%20herbal%20liquid%20with%20cork%20stopper%2C%20arranged%20with%20sacred%20books%20and%20white%20flowers%20on%20wooden%20table&width=200&height=200&seq=saraswatarishta1&orientation=squarish"
      ]
    }
  ];
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
            <h1 className="text-5xl font-bold text-green-800 mb-6">Our Products</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive range of authentic Ayurvedic medicines for holistic health and wellness
            </p>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-amber-50 border-l-4 border-amber-400">
        <div className="container mx-auto px-6">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
              <i className="ri-information-line text-amber-600 w-5 h-5 flex items-center justify-center"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Important Information</h3>
              <p className="text-amber-700">
                This is an informational website showcasing our product categories. We do not offer online ordering.
                Please visit our physical store for product availability, pricing, and personalized consultations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-medicine-bottle-line text-green-600 w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">{category.name}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                {/* Product Images Grid */}
                {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {category.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="bg-white rounded-lg p-3 shadow-sm">
                      <img
                        src={image}
                        alt={`${category.name} Product ${imageIndex + 1}`}
                        className="w-full aspect-square object-cover rounded-md object-top"
                      />
                    </div>
                  ))}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Forms Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Available Product Forms</h2>
            <p className="text-xl text-gray-700">We offer traditional Ayurvedic medicines in various forms</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <img
                src="https://readdy.ai/api/search-image?query=Traditional%20Ayurvedic%20herbal%20powder%20churna%20in%20brass%20bowl%20with%20wooden%20spoon%2C%20fine%20textured%20powder%20in%20natural%20earthy%20colors%2C%20arranged%20on%20wooden%20surface%20with%20simple%20clean%20background&width=300&height=300&seq=churna&orientation=squarish"
                alt="Churna (Powders)"
                className="w-full aspect-square object-cover rounded-md mb-4 object-top"
              />
              <h3 className="text-lg font-bold text-green-800 mb-2">Churna</h3>
              <p className="text-gray-600">Finely powdered herbal formulations for easy consumption</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <img
                src="https://readdy.ai/api/search-image?query=Traditional%20Ayurvedic%20herbal%20tablets%20and%20pills%20vati%20in%20small%20wooden%20bowl%2C%20natural%20brown%20colored%20round%20tablets%2C%20arranged%20with%20mortar%20and%20pestle%20on%20clean%20wooden%20background&width=300&height=300&seq=vati&orientation=squarish"
                alt="Vati (Tablets)"
                className="w-full aspect-square object-cover rounded-md mb-4 object-top"
              />
              <h3 className="text-lg font-bold text-green-800 mb-2">Vati & Gutika</h3>
              <p className="text-gray-600">Traditional tablets and pills for convenient dosing</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <img
                src="https://readdy.ai/api/search-image?query=Traditional%20Ayurvedic%20medicated%20oils%20in%20amber%20glass%20bottles%20with%20cork%20stoppers%2C%20golden%20colored%20oils%20arranged%20with%20fresh%20herbs%20and%20flowers%20on%20wooden%20surface%20with%20natural%20lighting&width=300&height=300&seq=oils-form&orientation=squarish"
                alt="Medicated Oils"
                className="w-full aspect-square object-cover rounded-md mb-4 object-top"
              />
              <h3 className="text-lg font-bold text-green-800 mb-2">Medicated Oils</h3>
              <p className="text-gray-600">Therapeutic oils for massage and external application</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <img
                src="https://readdy.ai/api/search-image?query=Traditional%20Ayurvedic%20liquid%20preparations%20arishta%20in%20dark%20glass%20bottles%2C%20herbal%20liquid%20medicines%20with%20natural%20ingredients%2C%20arranged%20on%20wooden%20surface%20with%20clean%20background&width=300&height=300&seq=arishta&orientation=squarish"
                alt="Arishta (Liquid)"
                className="w-full aspect-square object-cover rounded-md mb-4 object-top"
              />
              <h3 className="text-lg font-bold text-green-800 mb-2">Arishta & Asava</h3>
              <p className="text-gray-600">Fermented herbal tonics and liquid preparations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Quality Promise</h2>
            <p className="text-xl text-gray-700">Every product meets our stringent quality standards</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-plant-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Authentic Sourcing</h3>
              <p className="text-gray-700">All herbs sourced directly from certified organic farms and trusted suppliers across Sri Lanka and India.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-flask-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Traditional Methods</h3>
              <p className="text-gray-700">Prepared using time-tested traditional methods without any artificial additives or preservatives.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Quality Testing</h3>
              <p className="text-gray-700">Each batch undergoes thorough quality checks for purity, potency, and safety before reaching our shelves.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Store CTA */}
      <section className="py-20 bg-green-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Visit Our Store for Professional Service</h2>
          <p className="text-xl mb-8 opacity-90">Get best and right products for your health needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap">Get Directions</Link>
            <div className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold whitespace-nowrap">
              <a href="tel:+94362266693">
                +94 36 226 6693
              </a>
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
