import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMocks";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

  const {categoryName}=  useParams();

  const [items, setItems ]= useState([])

  const productosFiltrados = products.filter((elemento) => elemento.category === categoryName)

useEffect( ()=>{
  const productList = new Promise((resolve, reject)=>{
    resolve( categoryName ? productosFiltrados :products)
  })

  productList
  .then((res)=>{setItems(res)})
  .catch((e)=>{console.log(e)})
},[categoryName])

console.log(items)

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
