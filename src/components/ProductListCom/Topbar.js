import React from "react";

const Topbar = ({ onFilterClick }) => {
  return (
    <div className="w-full bg-white border border-[#E0E0E0] rounded-md px-4 py-3 flex items-center justify-between gap-3">

      {/* LEFT */}
      <div className="flex items-center gap-3">
        
        {/* MOBILE FILTER BUTTON */}
        <button
          onClick={onFilterClick}
          className="lg:hidden border px-3 py-1 rounded-md text-sm"
        >
          ☰ Filter
        </button>

        <p className="text-sm text-gray-700 hidden sm:block">
          <span className="font-semibold">12,911</span> items in Mobile accessory
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 ml-auto">
        <span className="text-sm text-gray-600">Sort by:</span>

        <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none">
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

    </div>
  );
};

export default Topbar;