import React, { useEffect } from "react";
import "./styles.css";

import { useProducts } from "./ProductsContext";

export default function App() {
  const { sortBy, products, dispatch } = useProducts();

  useEffect(() => {
    dispatch({ type: "LOAD_ALL_PRODUCTS" });
  }, [dispatch]);

  return (
    <>
      <div>
        <button onClick={() => dispatch({ type: "RESET_FILTERS" })}>
          RESET
        </button>
        <fieldset>
          <label>
            <input
              type="radio"
              name="sort"
              checked={sortBy === "lowToHigh"}
              onChange={() =>
                dispatch({ type: "SORT_LOW_TO_HIGH", payload: "lowToHigh" })
              }
            />
            Low to High
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              checked={sortBy === "highToLow"}
              onChange={() =>
                dispatch({ type: "SORT_HIGH_TO_LOW", payload: "highToLow" })
              }
            />
            High to low
          </label>
        </fieldset>
      </div>
      <div
        className="App"
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))"
        }}
      >
        {products.map(
          ({
            id,
            name,
            image,
            price,
            productName,
            inStock,
            level,
            fastDelivery
          }) => (
            <div
              key={id}
              style={{
                border: "1px solid #4B5563",
                borderRadius: "0 0 0.5rem 0.5rem",
                padding: "0.25rem"
              }}
            >
              <img src={image} width="100%" height="auto" alt={productName} />
              <h3> {name} </h3>
              <div>Rs. {price}</div>
              {inStock && <div> In Stock </div>}
              {!inStock && <div> Out of Stock </div>}
              <div>{level}</div>
              {fastDelivery ? (
                <div> Fast Delivery </div>
              ) : (
                <div> 3 days minimum </div>
              )}
            </div>
          )
        )}
      </div>
    </>
  );
}
