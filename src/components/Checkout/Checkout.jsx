import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import FormCheckout from "../FormCheckout/FormCheckout"
import { data } from "react-router-dom"
import { addDoc, collection } from "firebase/firestore"
import db from "../../db/db.js"
import "./checkout.css"

const Checkout = () => {
  const [dataForm, setDataForm]= useState({
    fullname: "",
    phone:"",
    email:""

  })
  const [orderId, setOrderId]= useState(null);
  const {cart,totalPrice} = useContext(CartContext);
  const handleChangeInput= (event) =>{
    setDataForm ({ ...dataForm,[event.target.name]: event.target.value})

  }
  const sendOrder=(event)=>{
    event.preventDefault();
  const order = {
    buyer: {...dataForm},
    products:[...cart],
  
    total: totalPrice()
  }
  uploadOrder(order);
  }

  const uploadOrder = async (order)=>{
    try {
      const orderRef = collection (db,"orders");
      const response= await addDoc(orderRef,order);
      setOrderId(response.id)
    } catch (error) {
      console.log ("Error al subir la orden");
      
    }

  }
  return (
   <div className="checkout-container">
  {orderId ? (
    <div className="order-success">
      <h2>Orden generada correctamente</h2>
      <p>Guarde el identificador de su orden: <strong>{orderId}</strong></p>
    </div>
  ) : (
    <FormCheckout
      dataForm={dataForm}
      handleChangeInput={handleChangeInput}
      sendOrder={sendOrder}
    />
  )}
</div>
  )
}

export default Checkout