
import { createContext, useState } from "react";

// Creamos nuestro contexto para el carrito
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
const addProductInCart = (product) => {
  const quantityToAdd = product.quantity ?? 1;

  // Verifica si el producto ya está en el carrito
  const existingProduct = cart.find(item => item.id === product.id);

  if (existingProduct) {
    // Si está, suma la cantidad
    const updatedCart = cart.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + quantityToAdd }
        : item
    );
    setCart(updatedCart);
  } else {
    // Si no está, lo agrega como nuevo
    setCart([...cart, { ...product, quantity: quantityToAdd }]);
  }
};

  // Calcula la cantidad total de productos en el carrito
  const totalQuantity = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  const totalPrice=() => {
   return cart.reduce((total, product)=> total +(product.price* product.quantity),0)
  }
  console.log(cart)


  const deleteProductById =(id) => {
    const productFilter=cart.filter((product) => product.id !== id);
setCart(productFilter);
  }
  const deleteAllProducts = () => {
  setCart([]);
};

  return (
    <CartContext.Provider value={{ cart, addProductInCart, totalQuantity, totalPrice, deleteProductById,deleteAllProducts}}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };