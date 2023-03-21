import React from 'react'

const ItemList = ({items}) => {
  return (
    <div>
        <h1>Aca el hijo</h1>
        {
           items.map( (elemento)=>{
                return <div key={elemento.id}>
                    <img src={elemento.img} alt="" />
                    <h2>elemento.title</h2>
                    <h3>elemento.price</h3>
                    </div>
           })
        }
    </div>
  )
}

export default ItemList