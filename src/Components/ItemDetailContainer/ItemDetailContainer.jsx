import React, { useContext } from 'react'
import {useParams} from "react-router-dom"
import {products} from '../../productsMocks'
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../Context/CartContext';


const ItemDetailContainer = () => {

    const {id} =useParams();

const {agregarAlCarrito} =useContext(CartContext)
  

    const productSelected = products.find((element)=>element.id===Number(id));

    const onAdd =(cantidad)=>{
        agregarAlCarrito(productSelected)
    }

  return (
    <div>
        <h1>{productSelected.title}</h1>
        <img src={productSelected.img} alt="" />
        <ItemCount stock={productSelected.stock} onAdd={onAdd}/> 
    </div>
  );
};

export default ItemDetailContainer