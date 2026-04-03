import React, { useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // 🔥 MUST match assets.js categories
  const categories = ["mobile", "watch", "laptop"];

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-white border-b border-gray-200">

        <hr className="border-gray-200" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-3">
          <div className="flex items-center justify-between">

            {/* LEFT SIDE */}
            <div className="flex items-center gap-6">

              {/* MENU BUTTON */}
              <div
                onClick={() => setOpen(true)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <FaBars className="text-gray-700" />
                <span className="text-sm font-medium text-gray-800">
                  All category
                </span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
                <span className="cursor-pointer hover:text-black">Hot offers</span>
                <span className="cursor-pointer hover:text-black">Gift boxes</span>
                <span className="cursor-pointer hover:text-black">Projects</span>
                <span className="cursor-pointer hover:text-black">Menu item</span>

                <div className="flex items-center gap-1 cursor-pointer hover:text-black">
                  <span>Help</span>
                  <FaChevronDown className="text-xs" />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">

              <div className="flex items-center gap-1 cursor-pointer hover:text-black">
                <span>English, USD</span>
                <FaChevronDown className="text-xs" />
              </div>

              <div className="flex items-center gap-2 cursor-pointer hover:text-black">
                <img
                  src="https://flagcdn.com/w40/us.png"
                  alt="country"
                  className="w-5 h-4 object-cover rounded-sm"
                />
                <span>Ship to</span>
                <FaChevronDown className="text-xs" />
              </div>

            </div>

          </div>
        </div>

        <hr className="border-gray-200" />
      </nav>

      {/* 🔥 SIDE DRAWER */}
      <div
        className={`fixed inset-0 z-50 transition ${
          open ? "visible" : "invisible"
        }`}
      >
        {/* OVERLAY */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* DRAWER */}
        <div
          className={`absolute top-0 left-0 h-full w-[260px] bg-white shadow-md transform transition-transform ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-md font-semibold">All Categories</h2>
            <FaTimes
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            />
          </div>

          {/* CATEGORY LIST */}
          <div className="p-4 flex flex-col gap-3 text-sm text-gray-700">
            {categories.map((cat, index) => (
              <span
                key={index}
                onClick={() => {
                  navigate(`/products/${cat}`);
                  setOpen(false);
                }}
                className="cursor-pointer hover:text-[#107CFF]"
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </span>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;