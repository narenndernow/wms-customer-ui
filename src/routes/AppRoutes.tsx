
import { Routes, Route } from "react-router-dom";

import Products from "../pages/Products";
import Cart from "../pages/Cart";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
