import { createContext, useContext, useReducer } from "react";
import { productsReducer } from "./ProductsReducer";

const ProductsContext = createContext();

const initialState = {
  products: [],
  sortBy: ""
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  return (
    <ProductsContext.Provider
      value={{ products: state.products, sortBy: state.sortBy, dispatch }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { useProducts, ProductsProvider };
