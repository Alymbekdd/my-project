import React from 'react';
import bg from '../img/IMG_1558.JPG';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const isMain = location.pathname === "/";
    const isBuyPage = location.pathname.startsWith("/Buy");
    const isCartPage = location.pathname.startsWith("/Cart");

    
    return (
        <header className={`Header ${isBuyPage || isCartPage ? "Header__shadow" : ""}`}>
            {isMain && <img src={bg} alt="Фон" className="Header__bg" />}
            <div class="container">
                <div className="Header__content">
                    <h2 className='Header__content-logo'>Phones</h2>
                    <nav>
                        <ul>
                            <Link className='Header__content-link' to={'/'}>
                                <li>Главная</li>
                            </Link>
                            <Link className='Header__content-link'>
                                <li>Контакты</li>
                            </Link>
                            <Link className='Header__content-link' to={'/Cart'}>
                                <li>Корзина</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default Header
