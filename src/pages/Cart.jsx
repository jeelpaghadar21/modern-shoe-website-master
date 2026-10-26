import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, []);

  // Increase quantity
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item,
    );

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove product
  const removeProduct = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);

    localStorage.removeItem("cart");
  };

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // Shipping
  const shipping = subtotal > 0 ? 10 : 0;

  // Final total
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      {/* TOP HEADER */}
      <div className="cart-header">
        <div>
          <h1>Shopping Cart</h1>

          <p>
            {cart.length === 0
              ? "Your cart is empty"
              : `${cart.length} product${
                  cart.length > 1 ? "s" : ""
                } in your cart`}
          </p>
        </div>

        <button className="continue-shopping" onClick={() => navigate("/")}>
          ← Continue Shopping
        </button>
      </div>

      {/* EMPTY CART */}
      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">
            <ion-icon name="cart-outline"></ion-icon>
          </div>

          <h2>Your Cart is Empty</h2>

          <p>You haven't added any products to your shopping cart yet.</p>

          <button onClick={() => navigate("/")}>Start Shopping</button>
        </div>
      ) : (
        /* CART WITH PRODUCTS */
        <div className="cart-container">
          {/* PRODUCTS SECTION */}
          <div className="cart-products">
            <div className="cart-products-header">
              <h2>Your Products</h2>

              <button onClick={clearCart}>Clear Cart</button>
            </div>

            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                {/* PRODUCT IMAGE */}
                <div className="cart-image-box">
                  <img src={item.image} alt={item.name} />
                </div>

                {/* PRODUCT DETAILS */}
                <div className="cart-product-details">
                  <h3>{item.name}</h3>

                  <p className="cart-product-price">${item.price.toFixed(2)}</p>

                  {/* QUANTITY */}
                  <div className="quantity-container">
                    <span>Quantity:</span>

                    <div className="quantity-box">
                      <button onClick={() => decreaseQuantity(item.id)}>
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button onClick={() => increaseQuantity(item.id)}>
                        +
                      </button>
                    </div>
                  </div>

                  {/* REMOVE */}
                  <button
                    className="remove-button"
                    onClick={() => removeProduct(item.id)}
                  >
                    <ion-icon name="trash-outline"></ion-icon>
                    Remove
                  </button>
                </div>

                {/* ITEM TOTAL */}
                <div className="item-total">
                  <span>Total</span>

                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                </div>
              </div>
            ))}
          </div>

          {/* ORDER SUMMARY */}
          <div className="order-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>

              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>

              <span>${shipping.toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Discount</span>

              <span className="discount">- $0.00</span>
            </div>

            <hr />

            <div className="summary-total">
              <span>Total</span>

              <strong>${total.toFixed(2)}</strong>
            </div>

            <button
              className="checkout-button"
              onClick={() => alert("Checkout functionality coming soon!")}
            >
              Proceed to Checkout
            </button>

            <div className="secure-payment">
              <ion-icon name="shield-checkmark-outline"></ion-icon>

              <span>Secure & Safe Checkout</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
