import React from "react";
import { Link } from "react-router-dom";
import { MoveUpRight } from "lucide-react";

const Navbar1 = () => {

  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="navbar1">
      <div className="navbar-container ideal-width">

        <Link to="/" className="navbar-logo">
          <img src={import.meta.env.BASE_URL + "images/logo4.png"} alt="DevAdee" />
        </Link>

        {/* Desktop Menu */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}> Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}> About</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}> Services </Link>
          <Link to="/project" onClick={() => setMenuOpen(false)}> Projects </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}> Contact </Link>
          <Link to="https://wa.me/9264918773" className="group talk-btn">
            Let's Talk
            <MoveUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            /></Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>);
}

export default Navbar1;