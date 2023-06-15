//Importaciones
import { Fragment,useState,useEffect} from "react"


//Importación: componentes
import NavBar from "../Componentes/navbar"
import Producto from "../Componentes/Producto"
import Footer from "../Componentes/Footer"

//Imagenes
import image from "../assets/Logo/Logo_1.png"

//Estilos
import Styles_P from "./Styles_P/Home.module.css"

//Componente
export function Home() {

  const [productos, setProductos] = useState([]);
  
  const callIAPI = (async () => {
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json()
    return data
  })

  useEffect(() => {

    callIAPI().then(res => {
      //  console.log(res)
        setProductos(res)
    }).catch(error => {
        console.log(error)
    })
  }, [])


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

            {productos.map(producto => (
              <Fragment key={producto["id"]}>
                  
                <Producto  nombre={producto["title"]} precio={producto["price"]} imagen= {producto["image"]}/>
  
              </Fragment>
            ))
            }

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