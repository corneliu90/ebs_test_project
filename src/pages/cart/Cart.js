import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

function Cart() {
  const { cart, removeFromCart, clearCart, updateQuantity } =
    useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.cartPage}>
      <h1 className={styles.cartTitle}>Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="alert alert-info">
          Your cart is empty. <Link to="/">Start shopping</Link>.
        </div>
      ) : (
        <>
          <div>
            {cart.map((item) => (
              <div key={item.id} className={styles.listGroupItem}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.cartImage}
                />
                <div className={styles.productDetails}>
                  <h5>{item.title}</h5>
                  <p>Price: ${item.price.toFixed(2)}</p>
                </div>
                <div className={styles.inputGroup}>
                  <button
                    className={styles.inputButton}
                    onClick={() =>
                      updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                    }
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className={styles.quantityInput}
                    value={item.quantity}
                    readOnly
                  />
                  <button
                    className={styles.inputButton}
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className={styles.removeButton}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className={styles.cartFooter}>
            <button className={styles.clearCartButton} onClick={clearCart}>
              Clear Cart
            </button>
            <div className={styles.totalPrice}>
              Total: ${totalPrice.toFixed(2)}
            </div>
            <button className={styles.checkoutButton}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
