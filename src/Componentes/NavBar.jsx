//Importaciones
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';

//Estilos
import Styles_C from '../Componentes/Styles_C/NavBar.module.css'

//Librerías
import { BoxIconElement } from "boxicons"


//Componente
export function NavBar({logo,lista_links}) {

  const [navBar,setnavBar] = useState(false) 

  const cantidad = lista_links.length;
  //retorno prematuro para evitar errores
  if(!Array.isArray(lista_links) || cantidad==0){
    return;
  }
  const changeNavBar = () =>{
    setnavBar(!navBar);
  } 

  const shownavBar1 = navBar ? "navbar-menu-show" : "navbar-menu";

  return (
    
    <Fragment>

      <section className={Styles_C['contenedor-navbar']}>

        <article className={Styles_C["navbar-logo"]}>

          <img className={Styles_C["logo"]} src={logo} alt="logo"/>

        </article>

        <section className={Styles_C['navbar-contenido']}>

          <article className={Styles_C["contenido-busqueda"]}>

            <input type='text' placeholder='Buscar' className={Styles_C["busqueda"]}/>
            <box-icon name='search-alt'></box-icon>

          </article>

            <article className={Styles_C[shownavBar1]}>

              {lista_links.map ((menu,index)=>{
                return (

                  <ul className={Styles_C["navbar-ul"]} key={index}>

                    <li className={Styles_C["navbar-il"]}>

                      <Link to= {menu.link} className={Styles_C['links']}>{menu.opcion}</Link>

                    </li>

                  </ul>

                )
              })}

            </article>

            <article className={Styles_C["navbar-carrito"]}>

              <button className={Styles_C["carrito-boton"]}>

                <box-icon type='solid' name='cart'></box-icon>
                <span>0</span>

              </button>
              
            </article>

              <article className={Styles_C["navbar-open"]} onClick={changeNavBar}>
              <box-icon name='menu' ></box-icon>

            </article>

        </section>
    
      </section>

    </Fragment>
    
  )
}

export default NavBar