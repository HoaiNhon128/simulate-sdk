import { Button } from "mcr-design-systems";
import { useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("hotels");
  const [destination, setDestination] = useState("");
  const [checkIn] = useState("11/04/2025");
  const [checkOut] = useState("11/05/2025");
  const [rooms] = useState("1 Room, 2 Adults");

  const tabs = [
    { id: "hotels", label: "Hotels" },
    { id: "flights", label: "Flights" },
    { id: "packages", label: "Packages" },
    { id: "cars", label: "Cars" },
  ];

  const popularDestinations = [
    {
      name: "New York City, United States",
      properties: "1,504 PROPERTIES",
      price: "Hotels from $130.86/night",
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop",
    },
    {
      name: "Toronto, Canada",
      properties: "723 PROPERTIES",
      price: "Hotels from $648.75/night",
      image:
        "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop",
    },
    {
      name: "Orlando, United States",
      properties: "3,279 PROPERTIES",
      price: "Hotels from $130.86/night",
      image:
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop",
    },
    {
      name: "Cancun, Mexico",
      properties: "1,734 PROPERTIES",
      price: "Hotels from $130.86/night",

      image:
        "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=400&h=300&fit=crop",
    },
  ];

  const sunAndSandDestinations = [
    {
      name: "Honolulu, United States",
      properties: "885 PROPERTIES",
      price: "Hotels from $84.42/night",
      image:
        "https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=400&h=300&fit=crop",
    },
    {
      name: "Galveston, United States",
      properties: "1,079 PROPERTIES",
      price: "Hotels from $84.42/night",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    },
    {
      name: "Playa Del Carmen, Mexico",
      properties: "2,350 PROPERTIES",
      price: "Hotels from $84.42/night",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
    },
    {
      name: "Santa Monica, United States",
      properties: "57 PROPERTIES",
      price: "Hotels from $170.59/night",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    },
  ];

  const benefits = [
    {
      title: "Free Membership",
      description:
        "Becoming a member gives you instant access to amazing deals with no hidden fees. Seriously.",
      icon: "👤",
    },
    {
      title: "Exclusive Savings",
      description:
        "Travel in style or on a budget. Get access to up to 50% off hotels, with our exclusive unpublished rates.",
      icon: "💰",
    },
    {
      title: "Travel Your Way",
      description:
        "Book at over one million hotels in 155,000 cities in 220 countries. The world is your oyster.",
      icon: "🌍",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
              Unbeatable Stays,{" "}
              <span className="bg-linear-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Unmatched Savings!
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light opacity-90 animate-fade-in-delay">
              Book now and enjoy up to{" "}
              <span className="font-bold text-yellow-400">50% off</span> hotels.
            </h2>
          </div>

          {/* Search Form */}
          <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-gray-800 shadow-2xl border border-white/20">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-4 font-semibold border-b-3 transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-blue-600 text-blue-600 bg-blue-50 rounded-t-lg"
                      : "border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  🏨 Destination
                </label>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  value={destination}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setDestination(e.target.value)
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-200 hover:border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  📅 Check in / Check out
                </label>
                <input
                  type="text"
                  value={`${checkIn} - ${checkOut}`}
                  readOnly
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  👥 Rooms & Guests
                </label>
                <input
                  type="text"
                  value={rooms}
                  readOnly
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all duration-200"
                />
              </div>

              <div className="flex items-end">
                <Button className="w-full bg-linear-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  🔍 Find Your Hotel
                </Button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Save more when you book with{" "}
                <span className="font-bold text-blue-600">Shareit Travel</span>
                <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                  Powered by Advanced AI
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-white/10 rounded-full"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delay">
          <div className="w-16 h-16 bg-white/10 rounded-full"></div>
        </div>
      </div>

      {/* Popular Destinations */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              ✨ Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the world's most sought-after destinations with exclusive
              deals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularDestinations.map((destination, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-blue-600 font-bold px-3 py-1 rounded-full text-sm">
                      Hot Deal 🔥
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {destination.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 font-medium">
                    📍 {destination.properties}
                  </p>
                  {destination.price ? (
                    <p className="text-sm text-green-600 mb-4 font-semibold">
                      💰 {destination.price}
                    </p>
                  ) : (
                    <div className="mb-4"></div>
                  )}
                  <Button
                    variant="outline"
                    size="small"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 font-semibold"
                  >
                    EXPLORE NOW →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sun & Sand Section */}
      <section className="py-20 bg-linear-to-br from-orange-50 to-yellow-50 relative">
        <div className="absolute inset-0 opacity-5">
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.1'%3E%3Cpath d='M50 50m-40 0a40,40 0 1,1 80,0a40,40 0 1,1 -80,0' fill='%23f59e0b'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
            className="w-full h-full"
          ></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              🌞 Sun & Sand
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Start your summer early
            </p>
            <div className="w-24 h-1 bg-linear-to-r from-orange-400 to-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sunAndSandDestinations.map((destination, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white font-bold px-3 py-1 rounded-full text-sm shadow-lg">
                      Beach Paradise 🏖️
                    </span>
                  </div>
                </div>
                <div className="p-6 bg-linear-to-br from-white to-orange-50/30">
                  <h3 className="font-bold text-lg mb-3 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                    {destination.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 font-medium">
                    🏨 {destination.properties}
                  </p>
                  {destination.price ? (
                    <p className="text-sm text-green-600 mb-4 font-semibold">
                      💰 {destination.price}
                    </p>
                  ) : (
                    <div className="mb-4"></div>
                  )}
                  <Button
                    variant="outline"
                    size="small"
                    className="w-full group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300 font-semibold border-orange-200"
                  >
                    EXPLORE NOW 🌊
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 relative">
        <div className="absolute inset-0 opacity-5">
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
            className="w-full h-full"
          ></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Shareit Travel?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our exclusive benefits designed
              just for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {benefit.description}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M60 60L0 0v120h120V0z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
            className="w-full h-full"
          ></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <h3 className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Shareit Travel
                </h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Unbeatable stays, unmatched savings. Book now and enjoy up to
                50% off hotels with our exclusive AI-powered booking platform.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-sm font-semibold">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
                  <span className="text-green-400">✓</span>
                  <span className="text-sm font-semibold">Trusted by 1M+</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-6 text-blue-400">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      📞
                    </span>
                    <span>Contact Us</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      ℹ️
                    </span>
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      📋
                    </span>
                    <span>Terms and Conditions</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      🔒
                    </span>
                    <span>Privacy Policy</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-6 text-purple-400">
                Connect & Currency
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 mb-3">Follow us</p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 hover:scale-110 transform"
                    >
                      <span className="text-white font-bold">f</span>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-linear-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-200 hover:scale-110 transform"
                    >
                      <span className="text-white font-bold">📷</span>
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-gray-400 mb-3">Currency</p>
                  <select className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/20 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200">
                    <option value="USD" className="bg-gray-800">
                      🇺🇸 USD - U.S. Dollar
                    </option>
                    <option value="CAD" className="bg-gray-800">
                      🇨🇦 CAD - Canadian Dollar
                    </option>
                    <option value="EUR" className="bg-gray-800">
                      🇪🇺 EUR - Euro
                    </option>
                    <option value="GBP" className="bg-gray-800">
                      🇬🇧 GBP - Pound Sterling
                    </option>
                    <option value="AUD" className="bg-gray-800">
                      🇦🇺 AUD - Australian Dollar
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2025 Shareit Travel. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>🔒 Secure Booking</span>
                <span>•</span>
                <span>🛡️ Privacy Protected</span>
                <span>•</span>
                <span>⚡ Instant Confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
