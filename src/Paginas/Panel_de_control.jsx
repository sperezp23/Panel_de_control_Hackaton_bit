//Importación
import { Fragment } from "react"

//Importación: componentes
import Barra_lateral from "../Componentes/Barra_lateral"
import Encabezado from "../Componentes/Encabezado"
import Metricas from "../Componentes/Metrica"

//Impotación: estilos
import Styles_P from "./Styles_P/Panel_de_control.module.css"

//Componente
export function Panel_de_control() {
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

            <section className={Styles_P["contenido-cuerpo"]}>
              
              <section className={Styles_P["contenido-centro"]}>
                
                <section className={Styles_P["centro-metricas"]}>
                  
                  <section className={Styles_P["centro-m_productos"]}>
                    
                    <Metricas valor={10} nombre='hola'/>

                    
                  </section>

                  <section className={Styles_P["centro-m_pedidos"]}>
                    
                  <Metricas valor={10} nombre='hola'/>

                  </section>

                  <section className={Styles_P["centro-m_ingresos"]}>
                    
                  <Metricas valor={10} nombre='Hola'/>

                  </section>

                </section>

                <section className={Styles_P["centro-productos"]}>
                  5 productos mas vendidos
                </section>

                <section className={Styles_P["centro-usuarios"]}>
                  5 ultimas reviews
                </section>

              </section>

              <section className={Styles_P["contenido-lateral"]}>
                
                <section className={Styles_P["lateral-precio"]}>
                  
                <Metricas valor={10} nombre='hola'/>

                </section>

                <section className={Styles_P["lateral-pedidos"]}>
                  5 pedidos más recientes
                </section>

              </section>

            </section>
        
        </main>
        
      </section>

    </Fragment>
  )
}

export default Panel_de_control