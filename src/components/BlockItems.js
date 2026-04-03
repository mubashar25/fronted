import React from "react";

const BlockItems = ({ title, items, bgImage }) => {
  return (
    <section className="w-full py-6 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

        <div className="bg-white border border-[#E0E0E0] rounded-md overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* LEFT */}
            <div className="lg:col-span-3 p-6 flex flex-col justify-between relative min-h-[200px] rounded-tl-md rounded-bl-md overflow-hidden">

              {/* IMAGE */}
              <img
                src={bgImage}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/25"></div>

              {/* CONTENT */}
              <div className="relative z-10">
                <h2 className="text-lg font-semibold text-white leading-6">
                  {title}
                </h2>
                <button className="mt-4 bg-white px-4 py-2 rounded-md text-sm shadow-sm w-fit">
                  Source now
                </button>
              </div>
            </div>

            {/* RIGHT GRID */}
            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">

              {items.map((item, index) => (
                <div
                  key={index}
                  className="relative p-4 border border-[#E0E0E0] flex flex-col justify-between min-h-[127px]"
                >

                  {/* TEXT */}
                  <div>
                    <p className="text-sm text-gray-800">{item.name}</p>
                    <p className="text-xs text-gray-500">From</p>
                    <p className="text-sm font-medium">USD {item.price}</p>
                  </div>

                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[60px] h-[60px] object-contain self-end"
                  />

                  {/* LINES */}
                  <div className="absolute bottom-0 left-0 w-full border-t border-[#E0E0E0]" />
                  <div className="absolute top-0 right-0 h-full border-r border-[#E0E0E0]" />

                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockItems;