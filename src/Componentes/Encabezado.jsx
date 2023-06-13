//Importaciones
import { Fragment } from "react"
import { BoxIconElement } from "boxicons"
import user_image from "../assets/Imagenes/imagen1.png"

//Impotación: estilos
import Styles_C from "./Styles_C/Encabezado.module.css"


export function Encabezado() {
  return (
    <Fragment>

      <section className={Styles_C["contenedor-encabezado"]}>
          
        <section className={Styles_C["encabezado-modo"]}>
          
          <button className={Styles_C["boton-modo"]}>

            <box-icon name='moon'></box-icon>

            <p className={Styles_C["modo-texto"]}>

              Modo oscuro/claro 

            </p>

          </button>

        </section>

        <section className={Styles_C["encabezado-salir"]}>

          <button className={Styles_C["boton-salir"]}>

            <box-icon name='log-out'></box-icon>

            <p className={Styles_C["salir-texto"]}>

            Logout 

            </p>

          </button>

        </section>

        <section className={Styles_C["encabezado-usuario"]}>

            <section className={Styles_C["usuario-foto"]}>
              
              <img className={Styles_C["foto"]} src={user_image} alt="Foto_usuario" />

            </section>

            <p className={Styles_C["usuario-nombre"]}>

              Pedro_Paramo

            </p>

          {/* <section className={Styles_C["usuario-info"]}>


          </section> */}
          
        </section>

      </section>
      
    </Fragment>
  )
}

export default Encabezado