import "./css/nav.css"
import CartWidget from "./CartWidget";
import {NavLink} from "react-router-dom";


function NavBar(){
    return(
        <nav>
            <ul className="nav-main">
                <li><NavLink to = "/">Inicio</NavLink></li>
                <li>Categoria</li>
                <li>Más sobre nosotros</li>
                <CartWidget/>
            </ul>
        </nav>
    );
}

export default NavBar;