//Importación: enrutadores 
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Importación: mis Paginas
import Panel_de_control from "./Paginas/Panel_de_control"
import Productos from "./Paginas/Productos"
import Pedidos from "./Paginas/Pedidos"
import Graficas from "./Paginas/Graficas"

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

            <Route path='/' element={<Panel_de_control/>}/>
            <Route path='/Graficas' element={<Graficas/>}/>
            <Route path='/Pedidos' element={<Pedidos/>}/>
            <Route path='/Productos' element={<Productos/>}/>
              
          </Routes>

        </BrowserRouter>

    </Fragment>
  )
}

export default App