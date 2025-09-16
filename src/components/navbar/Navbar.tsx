import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-removebg-preview.png";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

 const handleLogoClick = () => {
    setMenuOpen(false);
    if (isHome) {
      scroll.scrollToTop();
      navigate("/"); // Navigate to home page
    
    }
  };

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <Link to="/">
      <img src={logo} alt="Logo" className="logo" onClick={handleLogoClick} />
      </Link>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
        {isHome ? (
          <>
            {["home", "services", "about","reviews", "contact"].map((section) => (
              <ScrollLink
                key={section}
                to={section}
                smooth
                duration={500}
                spy={true}           // enables scroll spy
                offset={-70}         // adjust if navbar height overlaps
                className="link"
                activeClass="active-link"
                onClick={handleLinkClick}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            ))}
          </>
        ) : (
          <>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }
              onClick={handleLinkClick}
            >
              Home
            </NavLink>
            {/* If you have separate routes for Services, About, Contact, update them here */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }
              onClick={handleLinkClick}
            >
              Services
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }
              onClick={handleLinkClick}
            >
              About
            </NavLink>
            <NavLink
              to="/#SectionReview"
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }
              onClick={handleLinkClick}
            >
              Reviews
            </NavLink>
            <NavLink
              to="/#SectionContact"
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }
              onClick={handleLinkClick}
            >
              Contact
            </NavLink>
          </>
        )}

        <NavLink
          to="/bookOnline"
          className={({ isActive }) =>
            isActive ? "link active-link" : "link"
          }
          onClick={handleLinkClick}
        >
          Book Online
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
