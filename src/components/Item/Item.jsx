import "./Item.css";

const Item = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="card-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span>${product.price}</span>
      </div>
    </div>
  );
};

export default Item;