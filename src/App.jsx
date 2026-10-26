import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import ProductTab from "./components/Products/ProductTab";
import Feature from "./components/Features/Feature";
import Footer from "./components/Footer/Footer";

import Cart from "./pages/Cart";

/* ================= HOME PAGE ================= */

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ProductTab />
      <Feature />

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-title">
            <p>CONTACT US</p>
            <h2>Get In Touch</h2>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <ion-icon name="location-outline"></ion-icon>
                <div>
                  <h3>Our Address</h3>
                  <p>Sacramento, California</p>
                </div>
              </div>

              <div className="contact-item">
                <ion-icon name="call-outline"></ion-icon>
                <div>
                  <h3>Call Us</h3>
                  <p>+1 (123) 456-7890</p>
                </div>
              </div>

              <div className="contact-item">
                <ion-icon name="mail-outline"></ion-icon>
                <div>
                  <h3>Email Us</h3>
                  <p>info@comfortpride.com</p>
                </div>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your message form is working.");
              }}
            >
              <input type="text" placeholder="Your Name" required />

              <input type="email" placeholder="Your Email" required />

              <input type="text" placeholder="Subject" required />

              <textarea rows="5" placeholder="Your Message" required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

/* ================= ABOUT PAGE ================= */

const AboutPage = () => (
  <>
    <Header />
    <main className="page-content">
      <About />
    </main>
    <Footer />
  </>
);

/* ================= PRODUCTS PAGE ================= */

const ProductsPage = () => (
  <>
    <Header />
    <main className="page-content">
      <ProductTab />
    </main>
    <Footer />
  </>
);

/* ================= CONTACT PAGE ================= */

const ContactPage = () => (
  <>
    <Header />
    <main className="page-content">
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-title">
            <p>CONTACT US</p>
            <h2>Get In Touch</h2>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h3>Our Address</h3>
                <p>Sacramento, California</p>
              </div>
              <div className="contact-item">
                <h3>Call Us</h3>
                <p>+1 (323) 456-7890</p>
              </div>
              <div className="contact-item">
                <h3>Email Us</h3>
                <p>info@comfortpride.com</p>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your message form is working.");
              }}
            >
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea rows="5" placeholder="Your Message" required />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

/* ================= APP ROUTES ================= */

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<Cart />} />

      <Route
        path="*"
        element={
          <main className="page-content">
            <h1>404 - Page Not Found</h1>
            <a href="/">Back to Home</a>
          </main>
        }
      />
    </Routes>
  );
};

export default App;
