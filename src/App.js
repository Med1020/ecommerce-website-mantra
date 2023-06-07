import { Routes, Route } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import ProductsPage from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/profile" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
