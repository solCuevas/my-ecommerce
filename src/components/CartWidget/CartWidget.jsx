import carrito from "../../assets/carrito.png";
import "./cartWidget.css";
import { BsFillCartFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div className="cartwidget">
      <BsFillCartFill size ={40} color="red" />
      <p> 5</p>
    </div>
  );
};

export default CartWidget;
// CartWidget.jsx muestra el carrito de mi e-comerce
