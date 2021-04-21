import Link from "next/link";

export default function Header() {
  return (
    <header className="container-fluid py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="header-logo h1 text-light">💀FRONTCAVE</div>
        <div className="d-flex justify-content-between text-color-light">
          <Link href="/">
            <a className="px-1 text-white-50">Sesiones</a>
          </Link>
          <Link href="/tecnologias">
            <a className="px-1 text-white-50">Tecnologías</a>
          </Link>
        </div>
      </div>
    </header>
  );
}
