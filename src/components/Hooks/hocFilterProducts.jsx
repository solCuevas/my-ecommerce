import { useState } from "react";
import "./hocFilterProducts.css";

const hocFilterProducts = (Component) => {
  return function FilteredComponent({ products }) {
    const [query, setQuery] = useState("");

    const changeInput = (event) => {
      setQuery(event.target.value.toLowerCase());
    };

    const search = (productsList) => {
      return productsList.filter((product) =>
        product.name?.toLowerCase().includes(query)
      );
    };

    return (
      <>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar producto..."
            onChange={changeInput}
          />
        </div>
        <Component products={search(products)} />
      </>
    );
  };
};

export default hocFilterProducts;
