import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Artists from "./pages/Artists";

function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/Admin");

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
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