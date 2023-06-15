//Importaciones
import { Fragment } from "react"

//Importación: componentes
import NavBar from "../Componentes/navbar"
import Producto from "../Componentes/Producto"
import Footer from "../Componentes/Footer"

//Imagenes
import image from "../assets/Logo/Logo_1.png"

//Estilos
import Styles_P from "./Styles_P/Home.module.css"

//Compoente
export function Home() {

  const menuNav =[
    { opcion:'Panel de control',link:'/'},
  ];

  return (
    <Fragment>

      <section className={Styles_P["contenedor-all"]}>

        <header className={Styles_P["contenedor-header"]}>

          <nav className={Styles_P["header-nav"]}>

            <NavBar logo={image} lista_links={menuNav}/>

          </nav>

        </header>

        <main className={Styles_P["contenedor-cuerpo"]}>

          <section className={Styles_P["cuerpo-productos"]}>

            <Producto nombre='hola' precio='precio :v' imagen= {image}/>
            <Producto nombre='hola' precio='precio :v' imagen= {image}/>
            <Producto nombre='hola' precio='precio :v' imagen= {image}/>

          </section>

        </main>

        <footer className={Styles_P["contenedor-footer"]}>

          <section className={Styles_P["footer-contenido"]}>

            <Footer/>
            
          </section>

        </footer>

      </section>

    </Fragment>
  )
}

export default Home