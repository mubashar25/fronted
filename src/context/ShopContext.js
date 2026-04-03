import { createContext, useState, useEffect } from "react";
import { getProducts } from "../services/productService";
import { createOrder as createOrderAPI } from "../services/orderService";

export const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // 🔥 LOAD PRODUCTS FROM BACKEND
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  // 🧹 CLEAR CART
  const clearCart = () => setCartItems([]);

  // ➕ ADD
  const addToCart = (product, quantity) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item._id === product._id);

      if (exist) {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { ...product, quantity }];
    });
  };

  // ❌ REMOVE
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  // 🔄 UPDATE QTY
  const updateQuantity = (id, qty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  // 🔥 CREATE ORDER (BACKEND)
  const placeOrder = async (formData) => {
    const orderItems = cartItems.map((item) => ({
      name: item.title,
      qty: item.quantity,
      price: item.price,
      image: item.images[0],
      product: item._id,
    }));

    const orderData = {
      orderItems,
      shippingAddress: formData,
      paymentMethod: "COD",
      totalPrice: cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
    };

    const res = await createOrderAPI(orderData);

    clearCart();

    return res;
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        placeOrder,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;