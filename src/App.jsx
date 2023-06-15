//Importación: enrutadores 
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Importación: paginas
import Panel_de_control from "./Paginas/Panel_de_control"
import Productos from "./Paginas/Productos"
import Pedidos from "./Paginas/Pedidos"
import Graficas from "./Paginas/Graficas"
import Home from "./Paginas/Home"

//Impotación: estilos
import "./App.css"

//Importacion: modulos de react 
import { Fragment } from "react"

//Componente 
export function App() {
  return (
    <Fragment>

        {/*Enrutación: paginas*/}
        <BrowserRouter>

          <Routes>

            <Route path="/" element={<Panel_de_control/>}/>
            <Route path="/Graficas" element={<Graficas/>}/>
            <Route path="/Pedidos" element={<Pedidos/>}/>
            <Route path="/Productos" element={<Productos/>}/>
            <Route path="/Home" element={<Home/>}/>
              
          </Routes>

        </BrowserRouter>

    </Fragment>
  )
}

export default App