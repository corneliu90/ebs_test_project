import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./Header.module.css";

function Header() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleReload = (event) => {
    event.preventDefault();
    window.location.href = "/";
  };

  return (
    <header className={styles.header}>
      <nav className="container navbar navbar-expand-lg navbar-dark">
        <a className={styles.navbarBrand} href="/" onClick={handleReload}>
          My Store
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item" style={{ paddingRight: "20px" }}>
              <Link className={styles.navLink} to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className={styles.navLink} to="/cart">
                Cart ({totalItems})
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
