import { Fragment } from 'react'

import Styles_C from './Styles_C/Producto.module.css'

function Producto({imagen, nombre, precio}) {
  return (
    <Fragment>
        
        <section className={Styles_C['contenedor-producto']}>
            
            <section className={Styles_C['producto-imagen']}>
                <img className={Styles_C['imagen']} src={imagen} alt="Imagen_producto"/>
            </section>

            <section className={Styles_C['producto-nombre']}>

                <h3 className={Styles_C['nombre']}>

                    {nombre}

                </h3>

            </section>

            <section className={Styles_C['producto-precio']}>
                
                <p className={Styles_C['precio']}>{precio}</p>

                <button className={Styles_C["boton-agregar"]}>Añadir al carriro</button>

            </section>


        </section>

    </Fragment>
  )
}

export default Producto