import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import { ItemListWithSearch } from "./components/ItemList/ItemList";
import ItemDetallContainer from "./components/ItemDetallContainer/ItemDetallContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Contact from "./components/Contact/Contact";
import NewArrivals from "./components/NewArrivals/NewArrivals";

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <div className="app-container">
        <NavBar />
        
        {/* Rutas */}
        
          <Routes>
  <Route path="/" element={<ItemListContainer />} />
  <Route path="/products" element={<ItemListContainer />} />
  <Route path="/category/NewArrivals" element={<NewArrivals />} />
  <Route path="/category/:category" element={<ItemListContainer />} />
  <Route path="/detail/:productId" element={<ItemDetallContainer />} />
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/Checkout" element ={<Checkout />} />
  <Route path="/Contact" element={<Contact />} />
 
  <Route path="*" element={<div>Error 404</div>}/>
</Routes>

        {/* Otros componentes */}
        
        
      </div>
      </CartProvider>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;