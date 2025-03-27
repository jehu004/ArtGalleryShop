import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
<<<<<<< HEAD
import AdminProducts from "./pages/AdminProducts";
=======
>>>>>>> deed6525f137046e4e43caefc01c5cd09c752158
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Artists from "./pages/Artists";

function Layout() {
  const location = useLocation();
<<<<<<< HEAD
  const hideNavbar = location.pathname.startsWith("/admin");
=======
  const hideNavbar = location.pathname.startsWith("/Admin");
>>>>>>> deed6525f137046e4e43caefc01c5cd09c752158

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
<<<<<<< HEAD
        <Route path="/admin/products" element={<AdminProducts />} />
=======
>>>>>>> deed6525f137046e4e43caefc01c5cd09c752158
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;