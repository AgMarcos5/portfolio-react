import { NavLink } from "react-router-dom";

function Navbar ({position}) {
    return (
        <div className="menu-container">
            <nav className="menu" id="game-navbar">
            <ul>
            <li><NavLink onClick={() => position("inicio")} to="/" id="inicio" className="to-top" tabIndex="1">Inicio</NavLink></li>
            <li><NavLink onClick={() => position("proyectos")} to="/proyectos"  id="proyectos" tabIndex="2">Proyectos</NavLink></li>
            <li><NavLink onClick={() => position("oblivion")} to="/oblivion"  id="oblivion" tabIndex="3">Oblivion 3000</NavLink></li>
            <li><NavLink onClick={() => position("galeria")} to="/galeria"  id="galeria" tabIndex="4">Galería</NavLink></li>
            <li><NavLink onClick={() => position("contacto")} to="/contacto"  id="contacto" tabIndex="5">Contacto</NavLink></li>
            <div className="dot"></div>
            </ul>
            </nav>
        </div>
    )
}

export default Navbar;