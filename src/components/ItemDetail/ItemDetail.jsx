import React from 'react';
import "./itemDetail.css";
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product = {} }) => {
  const { addProductInCart } = useContext(CartContext);

  const addProduct = (quantity) => {
    const productCart = { ...product, quantity };
    console.log("añade al carrito", productCart);
    addProductInCart(productCart);
  };

  if (!product || !product.name) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="detalle-container">
      <img src={product.image} alt={product.name} className="detalle-imagen" />
      <h2 className="detalle-nombre">{product.name}</h2>
      <p className="detalle-descripcion">{product.description}</p>
      <p className="detalle-precio">Precio: ${product.price}</p>
      <ItemCount stock={product.stock} addProduct={addProduct} />
    </div>
  );
};

export default ItemDetail;