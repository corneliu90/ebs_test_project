import React from "react";
import styles from "./Filters.module.css";

function Filters({
  categories,
  selectedCategory,
  setSelectedCategory,
  sortOrder,
  setSortOrder,
}) {
  return (
    <div className={styles.filters}>
      {" "}
      <select
        className={styles.select}
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select
        className={styles.select}
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="">Sort by Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
}

export default Filters;
