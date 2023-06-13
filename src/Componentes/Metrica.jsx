import { Fragment } from "react"
import Styles_C from "./Styles_C/Metricas.module.css"

import image from "../assets/Imagenes/imagen1.png"

export function Metricas({valor,nombre}) {
  return (
    <Fragment>

        <section className={Styles_C["contenedor-metrica"]}>

            <section className={Styles_C["metrica-contenido"]}>

                <section className={Styles_C["contenedor-grafica"]}>
                
                  <img className={Styles_C["grafica"]} src= {image} alt="Grafica" />

                </section>

                <section className={Styles_C["texto"]}>

                  <p>{valor}</p>
                  <p>{nombre}</p>

                </section>

            </section>

        </section>

    </Fragment>
  )
}

export default Metricas