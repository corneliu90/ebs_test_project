import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <Card className={styles.productCard}>
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        className={styles.productImage}
      />
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title className={styles.productTitle}>{product.title}</Card.Title>
        <Card.Text>Category: {product.category}</Card.Text>
        <Card.Text className={styles.productPrice}>
          Price: ${product.price}
        </Card.Text>

        <div className="mt-auto d-flex align-items-center justify-content-center">
          {isInCart ? (
            <Button variant="danger" onClick={() => removeFromCart(product.id)}>
              Remove from Cart
            </Button>
          ) : (
            <Button variant="primary" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
