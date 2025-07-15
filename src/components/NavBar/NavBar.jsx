
import ropaLogo from "../../assets/logoRopa.png";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import { Link } from "react-router-dom";
//Creo mi navbar de mi ecomerce
const NavBar = () => {
return (
    <div className="navbar">
        <Link to = "/">
    <img className="logo" src={ropaLogo} alt="logo" />
    </Link>
<ul className="categories">
    <li><Link to="/category/inicio">Inicio</Link>  </li>
    <li> <Link to= "/category/nuevosIngresos" > Nuevos Ingresos </Link> 
    </li> 
    <li> <Link to= "/category/productos" > Productos </Link> </li>
    <li> <Link to= "/category/contacto" >Contacto</Link> </li>
    </ul>
    <CartWidget/>
    </div>
)
}

export default NavBar
// escribo la palabra rafce y se crea solo
// para que mi imagen se muestre importo componente NavBar en app.jsx