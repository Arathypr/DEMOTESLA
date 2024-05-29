import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import help from "../assets/images/help.png";
import places from "../assets/images/places.png";
import signup from "../assets/images/signup.png";
import logo from "../assets/images/Tesla_logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  useEffect(() => {
    const isAuthPage = location.pathname === "/signup";
    if (isAuthPage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Clean up on component unmount
    };
  }, [location.pathname]);

  const isAuthPage = location.pathname === "/signup";

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="w-full">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="md:w-[35%] vvsm:w-[50%] ssm:w-[30%] ml-4"
              />
            </Link>
          </div>

          {/* Center sections (hidden on auth pages) */}
          {!isAuthPage && (
            <div className="hidden lg:flex flex-1 justify-center space-x-8 pr-[350px] font-Poppins text-sm">
              <Link to="/vehicles" onClick={handleNavLinkClick}>
                <span className="text-gray-800 hover:text-gray-600">
                  Vehicles
                </span>
              </Link>
              <Link to="/energy" onClick={handleNavLinkClick}>
                <a href="#energy" className="text-gray-800 hover:text-gray-600">
                  Energy
                </a>{" "}
              </Link>
              <Link to="/charging" onClick={handleNavLinkClick}>
                <a
                  href="#charging"
                  className="text-gray-800 hover:text-gray-600"
                >
                  Charging
                </a>{" "}
              </Link>
              <Link to="/shop" onClick={handleNavLinkClick}>
                <span className="text-gray-800 hover:text-gray-600">Shop</span>
              </Link>
            </div>
          )}

          {/* Right side icons for desktop */}
          <div className="hidden lg:flex space-x-6">
            <img src={help} alt="Help" className="h-6" />
            <img src={places} alt="Places" className="h-6" />
            <Link to="/signup">
              <img src={signup} alt="Sign In" className="h-6" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button onClick={handleMenuClick}>
              {menuOpen ? (
                <XMarkIcon className="h-8 w-8 text-gray-800" />
              ) : (
                <Bars3Icon className="h-8 w-8 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center">
            <button
              className="absolute top-4 right-4"
              onClick={handleMenuClick}
            >
              <XMarkIcon className="h-8 w-8 text-gray-800" />
            </button>
            <div className="px-10 pt-10 pb-4 flex flex-col space-y-8 font-mono text-center ">
              <Link to="/vehicles" onClick={handleNavLinkClick}>
                <span className="text-gray-800 hover:text-gray-600 p-2">
                  Vehicles
                </span>
              </Link>
              <Link to="/energy">
                {" "}
                <a
                  href="#energy"
                  className="text-gray-800 hover:text-gray-600 p-2"
                  onClick={handleNavLinkClick}
                >
                  Energy
                </a>
              </Link>
              <Link to="/charging">
                {" "}
                <a
                  href="#charging"
                  className="text-gray-800 hover:text-gray-600 p-2"
                  onClick={handleNavLinkClick}
                >
                  Charging
                </a>
              </Link>

              <Link to="/shop" onClick={handleNavLinkClick}>
                <span className="text-gray-800 hover:text-gray-600 p-2">
                  Shop
                </span>
              </Link>
              <div className="flex space-x-6 pt-32">
                <img src={help} alt="Help" className="h-6" />
                <img src={places} alt="Places" className="h-6" />
                <Link to="/signup" onClick={handleNavLinkClick}>
                  <img src={signup} alt="Sign In" className="h-6" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
