import React, { useState, useMemo } from "react";
import ProductCard from "../components/productcard/ProductCard";
import Filters from "../components/filters/Filters";
import ErrorMessage from "../components/error/ErrorMessage";
import useFetchProducts from "../hooks/useFetchProducts";

function Home() {
  const { products, categories, error } = useFetchProducts();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const filteredProducts = useMemo(() => {
    return selectedCategory
      ? products.filter((product) => product.category === selectedCategory)
      : products;
  }, [products, selectedCategory]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else if (sortOrder === "desc") {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
  }, [filteredProducts, sortOrder]);

  return (
    <div className="home-page container my-4">
      <h1 className="mb-4">Product List</h1>

      <ErrorMessage message={error} />

      <Filters
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <div className="productGrid">
        {sortedProducts.map((product) => (
          <div key={product.id} className="productGridItem">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
