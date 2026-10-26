import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductTab.css";

import product1 from "../../assets/product-1.png";
import product2 from "../../assets/product-2.png";
import product3 from "../../assets/product-3.png";
import product4 from "../../assets/product-4.png";
import product5 from "../../assets/product-5.png";
import product6 from "../../assets/product-6.png";
import product7 from "../../assets/product-7.jpg";
import product8 from "../../assets/product-8.jpg";
import product9 from "../../assets/product-9.jpg";

const allProducts = [
  {
    id: 1,
    name: "CloudMotion",
    image: product1,
    price: 29.99,
  },
  {
    id: 2,
    name: "Nebula Flex",
    image: product2,
    price: 39.99,
  },
  {
    id: 3,
    name: "Aether Glide",
    image: product3,
    price: 49.99,
  },
  {
    id: 4,
    name: "Stellar Wave",
    image: product4,
    price: 59.99,
  },
  {
    id: 5,
    name: "Lunar Eclipse",
    image: product5,
    price: 69.99,
  },
  {
    id: 6,
    name: "Solar Flare",
    image: product6,
    price: 79.99,
  },
  {
    id: 7,
    name: "Nike",
    image: product7,
    price: 90.99,
  },
  {
    id: 8,
    name: "Puma",
    image: product8,
    price: 83.99,
  },
  {
    id: 9,
    name: "Skechers",
    image: product9,
    price: 68.99,
  },
];

const ProductTab = () => {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    // Get existing cart
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check whether product already exists
    const existingProduct = existingCart.find((item) => item.id === product.id);

    let updatedCart;

    if (existingProduct) {
      // Increase quantity
      updatedCart = existingCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      );
    } else {
      // Add new product
      updatedCart = [
        ...existingCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    // Save cart
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Open cart page
    navigate("/cart");
  };

  return (
    <section className="product-tab" id="products">
      <div className="product-title">
        <h2>New Arrival</h2>

        <button type="button">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
      </div>

      <div className="product-list">
        {allProducts.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.name} />

            <div>
              <h3>{product.name}</h3>

              <p>${product.price.toFixed(2)}</p>

              <button type="button" onClick={() => handleAddToCart(product)}>
                <ion-icon name="cart"></ion-icon>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductTab;
