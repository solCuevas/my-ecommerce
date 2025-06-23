import "./navbar.css";
import ropaLogo from "../assets/LogoRopa.png" // importo la carpeta donde esta mi imagen
import CartWidget from "./CartWidget";
//Creo mi navbar de mi ecomerce
const NavBar = () => {
return (
    <div className="navbar">
    <img className="logo" src={ropaLogo} alt="logo" />
<ul className="categories">
    <li> Inicio </li>
    <li> Nuevos Ingresos </li>
    <li> Productos </li>
    <li> Contacto </li>
    </ul>
    <CartWidget/>
    </div>
)
}

export default NavBar
// escribo la palabra rafce y se crea solo
// para que mi imagen se muestre importo componente NavBar en app.jsx