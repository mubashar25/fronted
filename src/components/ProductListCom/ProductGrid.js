import React, { useState, useContext } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const ProductGrid = ({ category }) => {

  const { products } = useContext(ShopContext); // 🔥 BACKEND DATA
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  // 🔥 FILTER FROM BACKEND DATA
  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

      {filteredProducts.map((product) => (
        <div
          key={product._id} // ✅ FIX
          onClick={() => navigate(`/product/${product._id}`)} // ✅ FIX
          className="bg-white border border-[#E0E0E0] rounded-md p-4 relative hover:shadow-sm transition cursor-pointer"
        >

          {/* WISHLIST */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product._id); // ✅ FIX
            }}
            className="absolute top-3 right-3"
          >
            <FaHeart
              className={`text-lg ${
                wishlist.includes(product._id)
                  ? "text-red-500"
                  : "text-gray-300"
              }`}
            />
          </button>

          {/* IMAGE */}
          <img
            src={product.images?.[0]} // ✅ FIX
            alt={product.title}
            className="w-full h-[150px] object-contain mb-3"
          />

          {/* TITLE */}
          <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2">
            {product.title}
          </h3>

          {/* PRICE */}
          <p className="text-lg font-semibold text-gray-900">
            ${product.price?.toFixed(2)}
          </p>

          {/* RATING */}
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < product.rating ? "text-yellow-400" : "text-gray-300"
                  }
                />
              ))}
            </div>

            <span>{product.rating}.0</span>
            <span>• {product.orders} orders</span>
          </div>

          {/* SHIPPING */}
          <p className="text-xs text-green-600 mb-2">
            {product.shipping}
          </p>

          {/* DESCRIPTION */}
          <p className="text-xs text-gray-500 mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* BUTTON */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product._id}`); // ✅ FIX
            }}
            className="text-sm text-[#107CFF] font-medium hover:underline"
          >
            View details
          </button>

        </div>
      ))}

    </div>
  );
};

export default ProductGrid;