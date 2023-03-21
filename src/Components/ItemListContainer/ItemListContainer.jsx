import { useEffect, useState } from "react";
import { products } from "../../productsMocks";

const ItemListContainer = () => {

  const [items, setItems ]= useState([])

  // const [nombre, setNombre] =useState("pepito")
  // const [contador, setContador]= useState(0)
  // const [userName, setUserName] = useState("")

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
      <h1>Estoy en itemlist</h1>
    </div>
  );
};

export default ItemListContainer;
