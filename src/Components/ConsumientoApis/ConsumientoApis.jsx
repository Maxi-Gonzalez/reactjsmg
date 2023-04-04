
import {useState, useEffect} from "react"
const ConsumientoApis = () => {

    const [posts,setPosts] = useState([])

    
useEffect( ()=> {    //()=> {    es un call back
   const getData = fetch("https://jsonplaceholder.typicode.com/posts");//es la ruta desde donde quiero consumir la informacion, el fetch me devuelve una promesa
    getData
    .then((res)=> res.json())
    .then((res)=> setPosts(res))
    .catch((err)=> console.log("catch: ", err))
},[]);

  return (
    <div>ConsumientoApis</div>
  )
};

export default ConsumientoApis