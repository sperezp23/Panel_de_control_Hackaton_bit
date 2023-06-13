//Importaciones
import { Fragment } from "react"
import { BoxIconElement } from "boxicons"

//Impotación: estilos
import Styles_C from "./Styles_C/Barra_lateral.module.css"

//Impotación: imagenes
import logo from "../assets/Logo/Logo_1.png"

//Componente
export function Barra_lateral() {
  return (
    <Fragment>

      <aside className={Styles_C["barra_lateral"]}>
        
        <nav className={Styles_C["nav"]}>

          <a title="Panel de control" className={Styles_C["logo-link"]} href="/">

            <section className={Styles_C["contenedor-logo"]}>

              <img className={Styles_C["logo"]}src={logo} alt="Logo"/>

            </section>
          
          </a>

          <section className={Styles_C["contenedor-links"]}>

            <a className={Styles_C["pagina_link"]} href="/productos">

              <box-icon type='solid' name='balloon' color="currentcolor"></box-icon>
              <h3 className={Styles_C["Titulo-link"]}>Productos</h3>

            </a>

            <a className={Styles_C["pagina_link"]} href="/pedidos">

              <box-icon type='regular' name='package' color="currentcolor"></box-icon>
              <h3 className={Styles_C["Titulo-link"]}>Pedidos</h3>

            </a>

            <a className={Styles_C["pagina_link"]} href="/graficas">

              <box-icon type='regular' name="line-chart" color="currentcolor"></box-icon>
              <h3 className={Styles_C["Titulo-link"]}>Graficas</h3>

            </a>

            <a className={Styles_C["pagina_link"]} href="">

              <box-icon type='regular' name='user' color="currentcolor"></box-icon>
              <h3 className={Styles_C["Titulo-link"]}>Usuarios/Reviws</h3>

            </a>
            
          </section>

        </nav>

        <section className={Styles_C["centro-de-ayuda"]}>

          <section className={Styles_C["contenedor-ayuda"]}>

            <box-icon type='regular' name='help-circle' color="currentcolor"></box-icon>

            <h2>CENTRO DE AYUDA</h2>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad neque harum inventore,
              nulla at impedit quia sint. Cum possimus ipsa natus omnis, itaque voluptates libero
              aspernatur nulla hic rem porro.
            </p>

          </section>



          <button className={Styles_C["boton-ayuda"]}>Ir al centro de ayuda</button>

          </section>

      </aside>

    </Fragment>
  )
}
export default Barra_lateral