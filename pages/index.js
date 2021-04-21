import Head from "next/head";
import Header from  "../src/components/header"


export default function Home() {
  return (
    <>
      <Head>
        <title>The Front Cave</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
    <Header/>
      <div className="container-fluid">
        <main className="container">
          <h1 className="overline mb-4 pb-4 border-bottom">
            WELCOME To Frontcave Sessions!
          </h1>

          <div className="d-flex flex-row sesion">
            <div className="sesion-wrapper-imagen col-8 offset-1">
              <img src="/assets/sesion-dirty little secrets del HTML para emails.jpg" />
            </div>
            <div className="sesion-wrapper-contenido d-flex flex-column">
              <h3 className="mb-4">
                Los dirty little secrets del HTML en emails
              </h3>
              <p className="h5">
                By: <span className="text-secondary">Daniel Vicente</span>
              </p>
              <a
                rel="nofollow"
                target="_blank"
                href="https://docs.google.com/presentation/d/1LyqsN64RMUDZebCJIRZrYTjxYBXb3EEsV5lCQ0GsS8c/edit#slide=id.p"
              >
                Presentacion<span class="material-icons">north_east</span>
              </a>
              <a
                rel="nofollow"
                target="_blank"
                href="https://drive.google.com/file/d/11yEUVaeatD4LS1CbHQC9GawOW2dDCFEJ/view?usp=sharing"
              >
                Grabacion<span className="material-icons">north_east</span>
              </a>
            </div>
          </div>
        </main>
      </div>
      <footer className="container-fluid py-4 mt-5">
        <div className="container text-center text-white-50">
          Powereded by: Frontend Collective | Resistance is FUTILE!!!
        </div>
      </footer>
    </>
  );
}
