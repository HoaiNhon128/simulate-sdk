import { useState } from "react";
import { Outlet } from "react-router";
import { COLORS } from "./color";

const Layout = () => {
  const [theme, setTheme] = useState("orange");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const userInfo = {
    email: "john.doe@example.com",
    firstName: "John",
    lastName: "Doe",
    avatar: "https://avatar.iran.liara.run/public/boy",
    name: "John Doe",
  };

  const handleInitSDK = () => {
    const brandColorMap: Record<string, any> = {
      orange: COLORS.orange,
      blue: COLORS.blue,
      green: COLORS.green,
    };
    const MCRSDK = window.MCRSDK;
    let sdk = new MCRSDK({
      clientId: "617a8d7f-bc5f-4373-8a8e-dbe524ad5d2f",
      ...userInfo,
      theme: {
        palette: {
          fg: {
            btnPrimary: "#FFFFFF",
            btnPrimaryDisabled: "#FFFFFF",
            checkbox: "#FFFFFF",
          },
          brand: brandColorMap[theme],
        },
        logo: "http://localhost:5173/starbucks.svg",
      },
    });

    sdk.open();

    setTimeout(() => {
      sdk.auth();
    }, 1000);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="shadow-lg border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <h1 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Shareit Travel
              </h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                Hotels
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                Flights
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                Packages
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                Cars
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Theme Selector */}
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              >
                <option value="orange">🧡 Orange</option>
                <option value="blue">💙 Blue</option>
                <option value="green">💚 Green</option>
              </select>

              {/* User Info */}
              <div
                className="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg px-4 py-2 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md"
                onClick={handleInitSDK}
              >
                <img
                  src={userInfo.avatar}
                  alt={userInfo.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">
                    {userInfo.name}
                  </p>
                  <p className="text-xs text-gray-500">{userInfo.email}</p>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3 pt-4">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Hotels
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Flights
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Packages
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Cars
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
