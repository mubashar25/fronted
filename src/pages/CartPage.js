import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(ShopContext);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const navigate = useNavigate();

  return (
    <div className="max-w-[1180px] mx-auto px-4 py-6">
      <h2 className="text-xl font-semibold mb-6">My Cart</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 bg-white border rounded-md">

          {cartItems.length === 0 && (
  <div className="flex flex-col items-center justify-center py-20 text-gray-500 gap-4">

    <p className="text-lg">Your cart is empty 🛒</p>

    <button
      onClick={() => navigate("/")}
      className="bg-[#107CFF] text-white px-6 py-2 rounded-md text-sm hover:bg-blue-600 transition"
    >
      Continue Shopping
    </button>

  </div>
)}

          {cartItems.map((item) => (
  <div
    key={item._id}
    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border-b"
  >

              {/* IMAGE */}
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-[80px] h-[80px] object-contain"
              />

              {/* INFO */}
              <div className="flex-1">
                <h3 className="text-sm font-medium">{item.title}</h3>
                <p className="text-xs text-gray-500">${item.price}.00</p>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-xs text-red-500 mt-1"
                >
                  Remove
                </button>
              </div>

              {/* QUANTITY */}
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() =>
                    updateQuantity(item._id, Math.max(1, item.quantity - 1))
                  }
                  className="px-3 py-1"
                >
                  -
                </button>

                <span className="px-3">{item.quantity}</span>

                <button
                  onClick={() =>
                    updateQuantity(item._id, item.quantity + 1)
                  }
                  className="px-3 py-1"
                >
                  +
                </button>
              </div>

              {/* TOTAL */}
              <p className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        {cartItems.length > 0 && (
  <div className="bg-white border rounded-md p-4 h-fit">

    <div className="flex justify-between mb-4">
      <span className="text-gray-600">Total:</span>
      <span className="font-semibold">
        ${totalPrice.toFixed(2)}
      </span>
    </div>

    <button
  onClick={() => navigate("/checkout")}
  className="w-full bg-[#107CFF] text-white py-3 rounded-md font-medium hover:bg-blue-600 transition"
>
  Checkout
</button>

  </div>
)}

      </div>
    </div>
  );
};

export default CartPage;