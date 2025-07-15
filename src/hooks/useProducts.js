import { useEffect, useState } from "react";
import { getProducts } from "../data/products";

const useProducts = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((data) => {
        if (category) {
          const productsFilter = data.filter(
            (product) => product.category === category
          );
          setProducts(productsFilter); // solo si hay categoría
        } else {
          setProducts(data); // si no hay categoría, muestra todo
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  return { products, loading };
};

export default useProducts;