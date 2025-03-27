import { Link } from "react-router-dom";
import "../styles/Navbar.css"; 

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="logo">
        <img src="/images/Skjermbilde 2024-11-09 kl. 10.23.12.png" alt="Logo" />
      </div>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/artists">Artists</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
