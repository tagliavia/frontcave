import React from "react";

function Tecnologias() {
  return (
    <>
      <div className="container-fluid">
          
      <div className="container"> 
      <h1 className="overline mb-5">
          Tecnologías
      </h1>
      </div> 
        <div className="container">
          <div className="row">
            {tecnologiasData.map((tecnologia) => (
              <div className="root col-12 col-md-6 col-lg-4 d-flex flex-row justify-content-stretch ">
                <a
                  className="wrapper shadow-lg d-flex flex-column align-self-stretch align-items-center"
                  href={tecnologia.url}
                  target="_blank"
                >
                  <div className="nombre h1">{tecnologia.nombre}</div>
                  <div className="descripcion text-center py-5">
                    {tecnologia.descripcion}
                  </div>
                </a>
                <style jsx>{`
                  .root {
                    padding: 0.5rem;
                    margin-bottom: 1.5rem;
                  }
                  .wrapper {
                    background: #c04848; /* fallback for old browsers */
                    background: linear-gradient(60deg, #48004833, #c0484833);
                    border: 2px solid #c0484833;
                    padding: 1.5rem;
                    border-radius: 0.75rem;
                    width: 100%;
                    transition: 0.3s ease-in-out;
                    overflow:hidden;
                    position: relative;
                  }
                  .wrapper:hover {
                    opacity: 0.9;
                  }

                  .nombre {
                    bottom: 0;
                    left: 0.38rem;
                    position: absolute;
                    color: black;
                    z-index: 1;
                    font-family: "Nanum Gothic";
                    font-weight: 800;
                    line-height: 80%;
                    opacity: 0.2;
                  }
                `}</style>
              </div>
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
