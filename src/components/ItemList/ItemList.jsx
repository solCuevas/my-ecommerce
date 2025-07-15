import Item from "../Item/Item";
import hocFilterProducts from "../Hooks/hocFilterProducts";
import "./itemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </div>
  );
};

const ItemListWithSearch = hocFilterProducts(ItemList);
export { ItemList, ItemListWithSearch };
