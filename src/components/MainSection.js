import React from "react";
import banner from "../assets/banner (1).png";

const categories = [
  "Automobiles",
  "Clothes and Wear",
  "Home interiors",
  "Computer and tech",
  "Tools, equipments",
  "Sports and outdoor",
  "Animal and pets",
  "Machinery tools",
];

const MainSection = () => {
  return (
    <section className="w-full bg-gray-50">

      <hr className="border-gray-200" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-6">

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* LEFT SIDE - CATEGORY MENU */}
          <div className="lg:col-span-3 bg-white rounded-lg p-4 hidden lg:block">
            <ul className="space-y-3 text-sm text-gray-700">

              {categories.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-[#8BCEF7] transition"
                >
                  {item}
                </li>
              ))}

              <li className="cursor-pointer text-gray-500 hover:text-[#8BCEF7] transition">
                More category
              </li>

            </ul>
          </div>

          {/* CENTER - BANNER */}
          <div className="lg:col-span-6">
            <div className="w-full h-[200px] sm:h-[260px] lg:h-[360px] rounded-lg overflow-hidden bg-blue-100 flex items-center justify-center">
              <img
    src={banner}
    alt="banner"
    className="w-full h-full object-cover"
  />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-3 flex flex-col gap-4">

            {/* USER CARD */}
            <div className="bg-white rounded-lg p-4">

              <div className="flex items-center gap-3 mb-3">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-[#C7E1FF] flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#91B1E7]"></div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Hi, user
                  </p>
                  <p className="text-xs text-gray-500">
                    let’s get started
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-2">
                <button className="w-full bg-[#37A7E0] text-white py-2 rounded-md text-sm font-medium">
                  Join now
                </button>

                <button className="w-full border border-[#37A7E0] text-[#37A7E0] py-2 rounded-md text-sm font-medium">
                  Log in
                </button>
              </div>
            </div>

            {/* OFFER CARD */}
            <div className="bg-[#F38332] text-white rounded-lg p-4 text-sm font-medium">
              Get US $10 off with a new supplier
            </div>

            {/* QUOTE CARD */}
            <div className="bg-[#55BDC3] text-white rounded-lg p-4 text-sm font-medium">
              Send quotes with supplier preferences
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MainSection;