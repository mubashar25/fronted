import React, { useEffect, useState } from "react";
import { getMyOrders } from "../services/orderService";
import { useNavigate } from "react-router-dom";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  // 🔥 PROTECTED ROUTE
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetchOrders();
  }, [user, navigate]);

  const fetchOrders = async () => {
    try {
      const data = await getMyOrders();
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6">

      <h2 className="text-xl font-semibold mb-6">My Orders</h2>

      {orders.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          No orders yet 😢
        </div>
      ) : (
        <div className="space-y-6">

          {orders.map((order) => (
            <div
              key={order._id}
              className="border rounded-md p-4 bg-white"
            >

              {/* ORDER HEADER */}
              <div className="flex justify-between mb-4 text-sm text-gray-600">
                <span>Order ID: {order._id}</span>
                <span>
                  {order.isPaid ? "Paid ✅" : "Pending ❌"}
                </span>
              </div>

              {/* ITEMS */}
              <div className="space-y-4">

                {order.orderItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 border-b pb-3"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />

                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        Qty: {item.qty} × ${item.price}
                      </p>
                    </div>

                    <p className="font-semibold">
                      ${(item.qty * item.price).toFixed(2)}
                    </p>

                  </div>
                ))}

              </div>

              {/* TOTAL */}
              <div className="flex justify-end mt-4 font-semibold">
                Total: ${order.totalPrice}
              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default OrdersPage;