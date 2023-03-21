import { useEffect, useState } from "react";
import { products } from "../../productsMocks";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

  const [items, setItems ]= useState([])

  // const [nombre, setNombre] =useState("pepito")
  // const [contador, setContador]= useState(0)
  // const [userName, setUserName] = useState("")

  //Se manjeara toda la logica y poco de html, y en el itemlist poca logica y mucho html, para tenerlo separado
useEffect( ()=>{
  const productList = new Promise((resolve, reject)=>{
    resolve( products)
  })

  productList
  .then((res)=>{setItems(res)})
  .catch((e)=>{console.log(e)})
},[])

console.log(items)

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
