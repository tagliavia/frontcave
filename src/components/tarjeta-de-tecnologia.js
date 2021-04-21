export default function TarjetaDeTecnologia (props)  {
    return (
      <div className="root col-24 col-md-12 col-lg-8 d-flex flex-row justify-content-stretch ">
      <a
        className="wrapper shadow-lg d-flex flex-column align-self-stretch align-items-center"
        href={props.url}
        target="_blank"
      >
        <div className="nombre h1">{props.nombre}</div>
        <div className="descripcion text-center py-5">
          {props.descripcion}
        </div>
      </a>
      <style jsx>{`
        .root {
          padding: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .wrapper {
          border: 2px solid rgb(0, 48, 73);
          padding: 1.5rem;
          border-radius: 0.75rem;
          width: 100%;
          transition: 0.3s ease-in-out;
          overflow: hidden;
          position: relative;
        }
        .wrapper:hover {
          transform: scale(1.05);
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
    )
}