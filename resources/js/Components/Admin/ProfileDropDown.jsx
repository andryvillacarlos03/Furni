import { admin_src_config } from "@/Config/Config";
import React, { useState, useRef, useEffect } from "react";

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click or Esc key
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    function handleEsc(e) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div className="relative inline-block  text-left" ref={dropdownRef}>
      {/* Profile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full px-3 py-2 
                   hover:bg-gray-200 focus:outline-none"
        tabIndex={0}
      >
        <img
          src={`${admin_src_config}img/undraw_profile_3.svg`}
          alt="Profile"
          className="h-6 w-6 rounded-full border border-gray-300"
        />
        <span className="text-sm font-medium text-gray-700 hidden sm:inline">
          John Doe
        </span>
        <svg
          className="h-4 w-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className="absolute right-0 mt-2 w-48 sm:w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5 z-50
                     transition-all duration-200 ease-out origin-top-right
                     sm:origin-top-right
                     max-sm:w-50 max-sm:right-0"
        >
          <div className="py-1">
            <a
              href="/profile"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Profile
            </a>
            <a
              href="/settings"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
              Settings
            </a>
            <a
              href="/activity"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
              Activity Log
            </a>
            <a
              href="/logout"
              className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
            >
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-red-400"></i>
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
