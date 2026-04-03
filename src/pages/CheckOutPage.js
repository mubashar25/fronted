import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const CheckOutPage = () => {
  const { cartItems, clearCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    city: "",
    phone: "",
    selectedCity: "",
  });

  const [payment, setPayment] = useState("cod");

  // 🔥 VALIDATION
  const handleSubmit = (e) => {
  e.preventDefault();

  const { email, firstName, country, address, city, phone, selectedCity } = form;

  if (!email || !firstName || !country || !address || !city || !phone || !selectedCity) {
    alert("Please fill all required fields");
    return;
  }

  clearCart(); // 🔥 CART EMPTY
  alert("Order placed successfully ✅");
  navigate("/orders"); // 🔥 REDIRECT
};

  // 🔥 TOTAL
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  console.log(cartItems);

if (cartItems.length === 0) {
  navigate("/");
}
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* LEFT SIDE */}
      <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">

        {/* CONTACT */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-lg">Contact</h2>
            <span
              onClick={() => navigate("/login")}
              className="text-sm text-[#107CFF] cursor-pointer"
            >
              Sign in
            </span>
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded-md text-sm"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        {/* DELIVERY */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Delivery</h2>

          <select
            className="w-full border p-2 rounded-md text-sm mb-3"
            onChange={(e) => setForm({ ...form, country: e.target.value })}
          >
            <option value="">Select Country</option>
            <option>Pakistan</option>
            <option>USA</option>
          </select>

          <div className="flex gap-3 mb-3">
            <input
              type="text"
              placeholder="First name"
              className="w-1/2 border p-2 rounded-md text-sm"
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-1/2 border p-2 rounded-md text-sm"
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />
          </div>

          <input
            type="text"
            placeholder="Address"
            className="w-full border p-2 rounded-md text-sm mb-3"
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />

          <div className="flex gap-3 mb-3">
            <input
              type="text"
              placeholder="City"
              className="w-1/2 border p-2 rounded-md text-sm"
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
            <input
              type="text"
              placeholder="Postal code"
              className="w-1/2 border p-2 rounded-md text-sm"
            />
          </div>

          <input
            type="text"
            placeholder="Phone"
            className="w-full border p-2 rounded-md text-sm mb-3"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <select
            className="w-full border p-2 rounded-md text-sm"
            onChange={(e) => setForm({ ...form, selectedCity: e.target.value })}
          >
            <option value="">Select your city</option>
            <option>Lahore</option>
            <option>Karachi</option>
            <option>Multan</option>
          </select>
        </div>

        {/* PAYMENT */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Payment</h2>
          <p className="text-sm text-gray-500 mb-3">
            All transactions are secure and encrypted.
          </p>

          <div className="space-y-2">

            <label className="flex items-center gap-2 border p-3 rounded-md cursor-pointer">
              <input
                type="radio"
                checked={payment === "cod"}
                onChange={() => setPayment("cod")}
              />
              Cash on Delivery
            </label>

            <label className="flex items-center gap-2 border p-3 rounded-md cursor-pointer">
              <input
                type="radio"
                checked={payment === "stripe"}
                onChange={() => setPayment("stripe")}
              />
              Stripe Payment
            </label>

          </div>
        </div>

        {/* BUTTON */}
        <button className="hidden lg:block w-full bg-[#107CFF] text-white py-3 rounded-md font-medium hover:bg-blue-600">
  {payment === "cod" ? "Complete Order" : "Pay Now"}
</button>

      </form>

      {/* RIGHT SIDE */}
     <div className="bg-gray-50 p-4 rounded-md border space-y-4 h-fit">

        {cartItems.map((item) => (
          <div key={item._id} className="flex gap-3 items-center border-b pb-3">

            <div className="relative">
  <img
    src={item.images?.[0]}
                alt={item.title}
    className="w-16 h-16 object-cover rounded-md"
  />

  {/* 🔥 QUANTITY BADGE */}
  <span className="absolute -top-2 -right-2 bg-[#107CFF] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
    {item.quantity}
  </span>
</div>

            <div className="flex-1">
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-sm font-semibold">
  ${item.price.toFixed(2)}
</p>
            </div>

            <p className="text-sm font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </p>

          </div>
        ))}

        {/* TOTAL */}
        <div className="text-sm space-y-2 pt-3">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping:</span>
            <span className="text-green-600">Free</span>
          </div>

          <div className="flex justify-between font-semibold text-base">
            <span>Total:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>

      </div>
      {/* Button */}
      <button
  onClick={handleSubmit}
  className="lg:hidden w-full bg-[#107CFF] text-white py-3 rounded-md font-medium mt-4"
>
  {payment === "cod" ? "Complete Order" : "Pay Now"}
</button>
    </div>
  );
};

export default CheckOutPage;