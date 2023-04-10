import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const Cart = () => {

  const {cart, clearCart} =useContext(CartContext);

  return (
    <div 
    style={ {width:"100%", display: "flex", justifyContent:"space-evenly"}}>
      {
        cart.map((elemento)=>{
          return <div
          style={{border: "2px solid black"}} key={elemento.id}>
            <h2>{elemento.title}</h2>
            <img src={elemento.img} style={{width: "200px"}}/>
            <h3>Unidades: {elemento.quantity}</h3>
            <h3>{elemento.price}</h3>
          </div>
        })
      }

      <button onClick={clearCart}>Limpiar carrito</button>
    </div>
  )
}

export default Cart