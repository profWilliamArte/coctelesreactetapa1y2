
import logo from '../assets/logo.png';
import FiltroCategoria from './FiltroCategoria';
import FiltroTipo from './FiltroTipo';
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-menu" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={logo} alt=""  width={200}/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/inicio">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/licor/Brandy/1">Brandy</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/licor/Gin/1">Gin</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/licor/Rum/1">Rum</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/licor/Tequila/1">Tequila</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/licor/Vodka/1">Vodka</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/licor/Whiskey/1">Whiskey</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tipo                </a>
                    <ul className="dropdown-menu">
                    <FiltroTipo/>

                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categoria               </a>
                    <ul className="dropdown-menu">
                    <FiltroCategoria/>

                    </ul>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>

  )
}

export default Header