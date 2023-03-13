import "./Productos.css"

const Productos = ({title,price=0,isGreen}) => {

const saludar =()=>{
console.log("hola")
}

  return (
    <div>
      <h1 className={ isGreen ? "green": "" }>{title}</h1>
      <h2>{price}</h2>
      <button onClick={saludar}>Saludar</button>
    </div>
  )
}

export default Productos;
