import React, { useState } from "react";
import { FaStar, FaShoppingBasket } from "react-icons/fa";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const ProductInformation = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity(prev => prev + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const { addToCart } = useContext(ShopContext);

  return (
    <div className="space-y-4">

      {/* STOCK */}
      <p className="text-green-600 text-sm font-medium">✔ In stock</p>

      {/* TITLE */}
      <h1 className="text-xl font-semibold text-gray-800">
        {product.title}
      </h1>

      {/* RATING */}
      <div className="flex items-center gap-3 text-sm text-gray-500">
        <div className="flex text-yellow-400">
          {[...Array(product.rating || 0)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        <span>{product.rating}.0</span>

        <span className="flex items-center gap-1">
          <FaShoppingBasket /> {product.orders} sold
        </span>
      </div>

      {/* PRICE */}
      <h2 className="text-2xl font-semibold text-gray-900">
        ${product.price}.00
      </h2>

      <hr />

      {/* DETAILS */}
      <div className="text-sm text-gray-600 space-y-2">
        <p><span className="font-medium">Type:</span> Classic product</p>
        <p><span className="font-medium">Material:</span> Premium material</p>
        <p><span className="font-medium">Design:</span> Modern design</p>
      </div>

      <hr />

      <div className="text-sm text-gray-600 space-y-2">
        <p><span className="font-medium">Customization:</span> Available</p>
        <p><span className="font-medium">Protection:</span> Refund Policy</p>
        <p><span className="font-medium">Warranty:</span> 2 years</p>
      </div>

      <hr />

      {/* 🔥 QUANTITY SELECTOR */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-700">Quantity:</span>

        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <button
            onClick={decreaseQty}
            className="px-3 py-1 text-lg hover:bg-gray-100"
          >
            −
          </button>

          <span className="px-4 text-sm">{quantity}</span>

          <button
            onClick={increaseQty}
            className="px-3 py-1 text-lg hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>

      {/* 🔥 ADD TO CART */}
      <button
  onClick={() => addToCart(product._id, quantity)}
  className="bg-[#107CFF] text-white px-6 py-2 rounded-md font-medium hover:bg-blue-600 transition"
>
  Add to Cart
</button>

    </div>
  );
};

export default ProductInformation;