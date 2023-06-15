import { Fragment, useEffect, useState } from "react";

const [productos, setProductos] = useState([]);
  
const callIAPI = (async () => {
  let res = await fetch("https://fakestoreapi.com/products")
  let data = await res.json()
  return data
})

useEffect(() => {

  callIAPI().then(res => {
    //  console.log(res)
      setProductos(res)
  }).catch(error => {
      console.log(error)
  })
}, [])



export function Listas() {
  return (
    <Fragment>
      <table className="tabla">
        <tr>
          <th>ID</th>
          <th>precio</th>
          <th>nombre</th>
        </tr>
        {productos.map( producto =>(
          <tr key={producto["id"]}>
            <td>{producto["id"]}</td>
            <td>{producto["price"]}</td>
            <td>{producto["title"]}</td>
          </tr>
        ))} 
      </table>
    </Fragment>
  )
}

export default Listas;