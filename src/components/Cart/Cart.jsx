import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteAllProducts } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Tu carrito</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          {cart.map((productCart) => (
            <div key={productCart.id} className="cart-product">
              <img src={productCart.image} alt={productCart.name} />
              <div className="cart-product-info">
                <p><strong>{productCart.name}</strong></p>
                <p>Precio: ${productCart.price}</p>
                <p>Cantidad: {productCart.quantity}</p>
                <p className="partial-price">Precio parcial: ${productCart.price * productCart.quantity}</p>

                <button
                  onClick={() => deleteProductById(productCart.id)}
                  className="remove-button"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          <p className="total-price">Precio total: ${totalPrice()}</p>

          {/* Botones centrados */}
          <div className="cart-buttons">
            <Link to="/Checkout" className="continue-button">
              Continuar compra
            </Link>
            <button
              onClick={deleteAllProducts}
              className="clear-cart-button"
            >
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;