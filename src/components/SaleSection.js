import React, { useEffect, useState } from "react";
import { dealItems } from "../assets/assets";

const SaleSection = () => {
  // 🔥 Countdown Logic (Live)
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date (example: 2 days from now)
    const target = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) return clearInterval(interval);

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gray-50 py-6">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* MAIN CARD */}
        <div className="bg-white border border-[#DEE2E7] rounded-md p-4">

          <div className="flex flex-col lg:flex-row gap-6">

            {/* LEFT: TEXT + TIMER */}
            <div className="flex flex-col justify-between min-w-[220px]">

              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Deals and offers
                </h2>
                <p className="text-sm text-gray-500">
                  Hygiene equipments
                </p>
              </div>

              {/* TIMER */}
              <div className="flex gap-2 mt-4">

                {[
                  { value: time.days, label: "Days" },
                  { value: time.hours, label: "Hour" },
                  { value: time.minutes, label: "Min" },
                  { value: time.seconds, label: "Sec" },
                ].map((t, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center bg-[#606060] text-white px-3 py-2 rounded-md min-w-[50px]"
                  >
                    <span className="text-sm font-semibold">
                      {String(t.value).padStart(2, "0")}
                    </span>
                    <span className="text-[10px]">{t.label}</span>
                  </div>
                ))}

              </div>
            </div>

            {/* RIGHT: ITEMS */}
            <div className="flex-1 overflow-x-auto">
              <div className="flex gap-4">

                {dealItems.map((item, index) => (
                  <div
                    key={index}
                    className="min-w-[150px] border border-[#E0E0E0] rounded-md p-3 flex flex-col items-center"
                  >

                    {/* IMAGE */}
                    <img
                      src={item.image}
                      alt="product"
                      className="w-[100px] h-[120px] object-cover mb-3"
                    />

                    {/* NAME */}
                    <p className="text-sm text-gray-700 text-center mb-2">
                      {item.name}
                    </p>

                    {/* BADGE */}
                    <span className="bg-[#FFE3E3] text-red-500 text-xs px-3 py-1 rounded-full">
                      {item.discount}
                    </span>

                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleSection;