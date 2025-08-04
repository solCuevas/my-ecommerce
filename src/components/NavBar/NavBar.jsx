import ropaLogo from "../../assets/logoRopa.png";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={ropaLogo} alt="logo" />
      </Link>

      <ul className="categories">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/productos">Productos</Link></li>
        <li><Link to="/Contact">Contacto</Link></li>
        <li><Link to="/category/NewArrivals">Nuevos Ingresos</Link></li>
      </ul>

      <CartWidget />
    </div>
  );
};

export default NavBar;