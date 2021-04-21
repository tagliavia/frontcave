import Head from "next/head";
import TarjetaDeTecnologia from '../src/components/tarjeta-de-tecnologia'
import Header from  "../src/components/header"

function Tecnologias() {
    return (
      <>
      <Head>
        <title>The Front Cave | Tecnologías</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <Header/>
        <div className="container-fluid">
          <div className="container">
            <h1 className="overline mb-5">Tecnologías</h1>
          </div>
          <div className="container">
            <div className="row">
              {tecnologiasData.map((tecnologia) => (
                  <TarjetaDeTecnologia url={tecnologia.url} nombre={tecnologia.nombre} descripcion={tecnologia.descripcion}/>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  

  const tecnologiasData = [
    {
      nombre: "React",
      descripcion: "A JavaScript library for building user interfaces",
      url: "https://reactjs.org",
    },
    {
      nombre: "NEXT.js",
      descripcion: "The React Framework for Production",
      url: "https://nextjs.org",
    },
    {
      nombre: "SASS",
      descripcion: "CSS with superpowers",
      url: "https://sass-lang.com",
    },
    {
      nombre: "Vercel",
      descripcion: "Develop, Preview, Ship",
      url: "https://vercel.com",
    },
    {
      nombre: "Webpack",
      descripcion: "Bundle your scripts, images, styles and assets",
      url: "https://webpack.js.org",
    },
    {
      nombre: "node.js",
      descripcion: "Entorno de ejecución para JavaScript",
      url: "https://nodejs.org/es/",
    },
  ];
  
  export default Tecnologias;
  