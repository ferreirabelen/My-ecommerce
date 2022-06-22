import "./css/nav.css"
import CartWidget from "./CartWidget";
import {NavLink} from "react-router-dom";


function NavBar(){
    return(
        <nav>
            <ul className="nav-main">
                <li className="nav"><NavLink to = "/">Inicio</NavLink></li>
                <li> <NavLink to = "/category/cuadroGrande">Cuadros Grandes</NavLink></li>
                <li> <NavLink to = "/category/cuadroChico">Cuadros Chicos</NavLink></li>
                <li>Más sobre nosotros</li>
                <CartWidget/>
            </ul>
        </nav>
    );
}

export default NavBar;