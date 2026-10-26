import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const goToProducts = () => {
    closeMenu();
    window.location.href = "/#products";
  };

  return (
    <>
      {/* ================= MAIN HEADER ================= */}
      <header className="header">
        {/* LOGO */}
        <a href="/" className="logo">
          Comfort<span>Pride</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/#about">About</a>
            </li>

            <li>
              <a href="/#products">Products</a>
            </li>

            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* RIGHT SIDE */}
        <div className="items">
          {/* SHOP NOW */}
          <button type="button" onClick={goToProducts}>
            Shop Now
          </button>

          <div>
            {/* ACCOUNT */}
            <a
              href="#"
              aria-label="Account"
              onClick={(e) => e.preventDefault()}
            >
              <ion-icon name="person-outline"></ion-icon>
            </a>

            {/* CART */}
            <a href="/cart" aria-label="Shopping Cart">
              <ion-icon name="cart-outline"></ion-icon>
            </a>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          id="menu"
          type="button"
          onClick={() => setOpenMenu(true)}
          aria-label="Open menu"
        >
          <ion-icon name="menu-outline"></ion-icon>
        </button>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div className={`sub-header ${openMenu ? "open" : ""}`}>
        {/* CLOSE BUTTON */}
        <button
          id="close-menu"
          type="button"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>

        {/* MOBILE NAVIGATION */}
        <nav>
          <ul className="sub-links">
            <li>
              <a href="/" onClick={closeMenu}>
                Home
              </a>
            </li>

            <li>
              <a href="/#about" onClick={closeMenu}>
                About
              </a>
            </li>

            <li>
              <a href="/#products" onClick={closeMenu}>
                Products
              </a>
            </li>

            <li>
              <a href="/#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* MOBILE RIGHT SIDE */}
        <div className="sub-items">
          <button type="button" onClick={goToProducts}>
            Shop Now
          </button>

          <div>
            {/* ACCOUNT */}
            <a
              href="#"
              aria-label="Account"
              onClick={(e) => e.preventDefault()}
            >
              <ion-icon name="person-outline"></ion-icon>
            </a>

            {/* CART */}
            <a href="/cart" aria-label="Shopping Cart" onClick={closeMenu}>
              <ion-icon name="cart-outline"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
