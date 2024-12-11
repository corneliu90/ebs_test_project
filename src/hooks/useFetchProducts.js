import { useState, useEffect } from "react";
import axios from "axios";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        const allCategories = [
          ...new Set(response.data.map((product) => product.category)),
        ];
        setCategories(allCategories);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed server. Please try again later.");
      });
  }, []);

  return { products, categories, error };
};

export default useFetchProducts;
