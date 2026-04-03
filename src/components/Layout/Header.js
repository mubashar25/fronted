import React, { useContext } from "react";
import {
  FaUser,
  FaEnvelope,
  FaBox,
  FaShoppingCart,
} from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Header = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(ShopContext);

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-4">

        {/* TOP ROW */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          {/* LEFT: Logo */}
          <div className="flex items-center justify-between lg:justify-start gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#107CFF] text-white flex items-center justify-center rounded-lg font-bold text-lg">
                B
              </div>
              <span className="text-[#107CFF] text-lg sm:text-xl font-semibold">
                Brand
              </span>
            </div>

            {/* 🔥 MOBILE CART */}
            <div
              onClick={() => navigate("/cart")}
              className="relative flex items-center gap-4 lg:hidden cursor-pointer"
            >
              <FaShoppingCart className="text-xl text-gray-600" />

              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>

          {/* CENTER: Search */}
          <div className="w-full lg:flex-1 lg:max-w-2xl">
            <div className="flex w-full border-2 border-[#107CFF] rounded-lg overflow-hidden">

              <select className="hidden sm:block bg-gray-50 px-3 sm:px-4 py-2 text-sm outline-none border-r border-gray-200">
                <option>All Category</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Home</option>
              </select>

              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 px-3 sm:px-4 py-2 text-sm outline-none"
              />

              <button className="bg-[#107CFF] text-white px-4 sm:px-6 py-2 text-sm font-medium hover:bg-blue-600 transition">
                Search
              </button>
            </div>
          </div>

          {/* RIGHT: Icons */}
          <div className="hidden lg:flex items-center gap-6">

            <Link to="/auth"><div className="flex flex-col items-center text-gray-600 text-xs cursor-pointer hover:text-black">
              <FaUser className="text-lg mb-1" />
              <span>Profile</span>
            </div></Link>

            <div className="flex flex-col items-center text-gray-600 text-xs cursor-pointer hover:text-black">
              <FaEnvelope className="text-lg mb-1" />
              <span>Message</span>
            </div>

            <Link to="/orders"><div className="flex flex-col items-center text-gray-600 text-xs cursor-pointer hover:text-black">
              <FaBox className="text-lg mb-1" />
              <span>Orders</span>
            </div></Link>

            {/* 🔥 CART */}
            <div
              onClick={() => navigate("/cart")}
              className="flex flex-col items-center text-gray-600 text-xs cursor-pointer hover:text-black relative"
            >
              <FaShoppingCart className="text-lg mb-1" />
              <span>My Cart</span>

              {cartItems.length > 0 && (
                <span className="absolute top-0 right-2 bg-red-500 text-white text-[10px] px-1 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </div>

          </div>
        </div>
      </div>
      <Outlet/>
    </header>
  );
};

export default Header;