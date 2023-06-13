//Importación
import { Fragment } from "react"

//Importación: componentes
import Barra_lateral from "../Componentes/Barra_lateral"
import Encabezado from "../Componentes/Encabezado"

//Impotación: estilos
import Styles_P from "./Styles_P/Graficas.module.css"

//Componente
function Graficas() {
  return (
    <Fragment>
      
      <section className={Styles_P["contenedor-all"]}>

        <section className={Styles_P["contenedor-lateral"]}>

        <Barra_lateral/>

        </section>
      
        <main className={Styles_P["contenedor-cuerpo"]}>

          <section className={Styles_P["contenedor-encabezado"]}>

            <header>

              <Encabezado/>

            </header>

          </section>

        </main>

      </section>

    </Fragment>
  )
}

export default Graficas