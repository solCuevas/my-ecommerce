import React from 'react';
import"./itemDetail.css"

const ItemDetail = ({ product = {} }) => {
  if (!product || !product.name) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="detalle-container">
      <img
        src={product.image}
        alt={product.name}
        className="detalle-imagen"
      />
      <h2 className="detalle-nombre">{product.name}</h2>
      <p className="detalle-descripcion">{product.description}</p>
      <p className="detalle-precio">Precio: ${product.price}</p>
    </div>
  );
};

export default ItemDetail;