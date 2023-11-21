import Link from "next/link"

export const Menu:React.FC=()=>{
  return(
    <nav className="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link href="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link href="LivroLista" className="nav-link">
          Catálogo
        </Link>
      </li>
      <li className="nav-item">
        <Link href="LivroDados" className="nav-link">
          Novo
        </Link>
      </li>
    </ul>
</nav>
  )
}