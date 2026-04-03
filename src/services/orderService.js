import API from "../api/axios";

// CREATE ORDER
export const createOrder = async (orderData) => {
  const res = await API.post("/orders", orderData);
  return res.data;
};

// USER ORDERS
export const getMyOrders = async () => {
  const res = await API.get("/orders/myorders");
  return res.data;
};