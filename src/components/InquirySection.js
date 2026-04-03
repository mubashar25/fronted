import React from "react";
import bgImage from "../assets/image 102.png";

const InquirySection = () => {
  return (
    <section className="w-full py-10 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* MAIN CARD */}
        <div className="relative rounded-md border border-[#E0E0E0] overflow-hidden min-h-[420px]">

          {/* IMAGE */}
          <img
            src={bgImage}
            alt="Inquiry Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* CONTENT */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 p-6 lg:p-10 h-full">

            {/* LEFT SIDE (INFO) */}
            <div className="text-white max-w-md">
              <h2 className="text-2xl lg:text-3xl font-semibold leading-snug mb-4">
                An easy way to send requests to all suppliers
              </h2>
              <p className="text-sm text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
              </p>
            </div>

            {/* RIGHT SIDE (FORM CARD) */}
            <div className="bg-white rounded-md shadow-md p-6 w-full max-w-md lg:ml-auto">

              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Send quote to suppliers
              </h3>

              {/* INPUT */}
              <input
                type="text"
                placeholder="What item you need?"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-[#37A7E0]"
              />

              {/* TEXTAREA */}
              <textarea
                placeholder="Type more details"
                rows="3"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#37A7E0]"
              />

              {/* QUANTITY + SELECT */}
              <div className="flex gap-2 mb-4">
                <input
                  type="number"
                  placeholder="Quantity"
                  className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#37A7E0]"
                />
                <select className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#37A7E0]">
                  <option>Pcs</option>
                  <option>Kg</option>
                  <option>Boxes</option>
                </select>
              </div>

              {/* BUTTON */}
              <button className="w-full bg-[#37A7E0] text-white py-2 rounded-md text-sm font-medium hover:bg-[#2f94c9] transition">
                Send Inquiry
              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;