import React from "react";
import './styles.css';

const NavBar = () => {
    return (
        <div>
            <ul>
                <li><a href="home" className="logo">Ecomerce</a></li>
                <li><a href="news">news</a></li>
                <li><a href="contacto">contacto</a></li>
                <li><a href="sobre nosotres">sobre nosotros</a></li>
            </ul>
        </div>
    )
}

export default NavBar;