
import useProducts from "../../hooks/useProducts";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
import { ItemListWithSearch } from "../ItemList/ItemList"; // HOC del buscador
import "./itemListContainer.css";

const ItemListContainer = () => {
  const { category } = useParams();
  const { products, loading } = useProducts(category);

  return (
    <div className="itemListContainer">
      <h2 className="page-title">Indumentaria Femenina</h2>

      
        {loading ? (
  <Loading />
) : (
  <ItemListWithSearch products={products} />
)}
    </div>
  );
};

export default ItemListContainer;
