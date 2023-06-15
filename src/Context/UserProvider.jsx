import { createContext, useEffect, useState} from "react"

export const UserContext = createContext();

export function UserProvider({ children }) {

    const [productos,setProductos]=useState([]);
    const producto = fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    // .then(json=>console.log(json))
    setProductos(producto)
    // console.log(children);

    

  return (
    <UserContext.Provider value={[productos]}>{children}
    </UserContext.Provider>
  )
}

export default UserProvider