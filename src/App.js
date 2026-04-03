import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

// Pages
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import OrdersPage from "./pages/OrdersPage";
import LoginSignUpPage from "./pages/LoginSignUpPage";

const App = () => {
  return (
    <Router>

      {/* 🔝 GLOBAL LAYOUT */}
      <Header />
      <Navbar />

      <main className="min-h-screen">
        <Routes>

          {/* HOME */}
          <Route path="/" element={<HomePage />} />

          {/* PRODUCT LIST (Category Based) */}
          <Route path="/products/:category" element={<ProductListPage />} />

          {/* PRODUCT DETAIL */}
          <Route path="/product/:id" element={<ProductPage />} />

          {/* CART */}
          <Route path="/cart" element={<CartPage />} />

          {/* CHECKOUT */}
          <Route path="/checkout" element={<CheckOutPage />} />

          {/* ORDERS */}
          <Route path="/orders" element={<OrdersPage />} />

          {/* AUTH */}
          <Route path="/auth" element={<LoginSignUpPage />} />

          {/* 404 PAGE */}
          <Route
            path="*"
            element={
              <div className="text-center py-20 text-gray-600">
                404 - Page Not Found
              </div>
            }
          />

        </Routes>
      </main>

      <Footer />

    </Router>
  );
};

export default App;
