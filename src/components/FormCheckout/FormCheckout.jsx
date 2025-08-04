import "./formCheckout.css"

const FormCheckout = ({dataForm, handleChangeInput, sendOrder}) => {
  return (
    <form className="form-checkout" onSubmit={sendOrder} >
<label> Nombre Completo
        <input type="text" name= "fullname" value={dataForm.fullname} onChange={handleChangeInput}/>
</label>
<label> Telefono
        <input type="number" name= "phone" value={dataForm.phone}onChange={handleChangeInput}/>
        </label>
        <label> Correo Electronico
        <input type="email"  name= "email"  value={dataForm.email}onChange={handleChangeInput}/>
        </label>
        <button type="submit">Enviar Orden</button>
      </form>
  )
}

export default FormCheckout