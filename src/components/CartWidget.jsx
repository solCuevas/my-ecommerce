
import carrito from "../assets/carrito.png";


const CartWidget = () => {
return (
    <div className="cartwidget">
        <img src={carrito} width={50} height={50} alt="carrito de compras" />
<div className="cart-count">5</div>
    </div>
    
)
}

export default CartWidget
// CartWidget.jsx muestra el carrito de mi e-comerce