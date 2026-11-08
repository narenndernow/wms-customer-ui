
import { Routes, Route } from "react-router-dom";

import Products from "../pages/Products";
import Cart from "../pages/Cart";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/customer" element={<Products />} />
      <Route path="/customer/cart" element={<Cart />} />
    </Routes>
  );
}
