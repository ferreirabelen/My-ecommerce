import "./css/nav.css"
import CartWidget from "./CartWidget";


function NavBar(){
    return(
        <nav>
            <ul className="nav-main">
                <li>Inicio</li>
                <li>Categoria</li>
                <li>Más sobre nosotros</li>
                <CartWidget/>
            </ul>
        </nav>
    );
}

export default NavBar;