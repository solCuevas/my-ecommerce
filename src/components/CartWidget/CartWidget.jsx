
// CartWidget.jsx muestra el carrito de mi e-comerce
import carrito from "../../assets/carrito.png";
import "./cartWidget.css";
import { BsFillCartFill } from "react-icons/bs";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="cartwidget">
      <BsFillCartFill size={40} color="red" />
      <p>{totalQuantity()}</p>
    </Link>
  );
};

export default CartWidget;
