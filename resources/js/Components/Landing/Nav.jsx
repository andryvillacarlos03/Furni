import React, { useState } from "react";
import { Link } from "@inertiajs/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (page) =>
    route().current(page)
      ? "text-[#f9bf29] hover:text-yellow-400 font-semibold no-underline text-base"
      : "text-white hover:text-[#f9bf29] no-underline text-base";

  return (
    <nav className="bg-[#3b5d50] text-white shadow-md w-full z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold no-underline text-white">
          Furni<span className="text-[#f9bf29]">.</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-3 md:space-x-6 items-center p-0 m-0 list-none h-full">
          <li>
            <Link
              href={route("page.welcome")}
              className={`${linkClass("page.welcome")} transition-colors leading-none`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={route("page.about")}
              className={`${linkClass("page.about")} transition-colors leading-none`}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href={route("page.service")}
              className={`${linkClass("page.service")} transition-colors leading-none`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href={route("page.blog")}
              className={`${linkClass("page.blog")} transition-colors leading-none`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href={route("page.contact")}
              className={`${linkClass("page.contact")} transition-colors leading-none`}
            >
              Contact us
            </Link>
          </li>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex space-x-4">
          <Link
            href={route('login')}
            className="inline-block text-white font-semibold py-1 px-4 border border-white rounded no-underline transition-colors duration-300 hover:bg-[#f9bf29] hover:text-black hover:border-[#f9bf29]"
          >
            Login
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#3b5d50] overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-2">
          <Link
            href={route("page.welcome")}
            className={`${linkClass("page.welcome")} block py-2 border-b border-gray-700`}
          >
            Home
          </Link>
          <Link
            href={route("page.about")}
            className={`${linkClass("page.about")} block py-2 border-b border-gray-700`}
          >
            About us
          </Link>
          <Link
            href={route("page.service")}
            className={`${linkClass("page.service")} block py-2 border-b border-gray-700`}
          >
            Services
          </Link>
          <Link
            href={route("page.blog")}
            className={`${linkClass("page.blog")} block py-2 border-b border-gray-700`}
          >
            Blog
          </Link>
          <Link
            href={route("page.contact")}
            className={`${linkClass("page.contact")} block py-2`}
          >
            Contact us
          </Link>

          <div className="flex flex-col space-y-4 pt-4">
            <Link
              href={route("login")}
              className={`${linkClass("login")} block py-2 border-b border-gray-700`}
            >
              Login
            </Link>
          
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
