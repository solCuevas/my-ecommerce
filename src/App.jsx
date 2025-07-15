import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import { ItemListWithSearch } from "./components/ItemList/ItemList";
import ItemDetallContainer from "./components/ItemDetallContainer/ItemDetallContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <NavBar />
        
        {/* Rutas */}
        
          <Routes>
  <Route path="/" element={<ItemListContainer />} />
  <Route path="/products" element={<ItemListContainer />} />
  <Route path="/category/:category" element={<ItemListContainer />} />
  <Route path="/detail/:productId" element={<ItemDetallContainer />} />
</Routes>

        {/* Otros componentes */}
        
        
      </div>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;