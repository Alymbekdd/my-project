import React from 'react';
import bg from '../img/IMG_1498.JPG';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const isMain = location.pathname === "/";
    const isBuyPage = location.pathname.startsWith("/Buy");

    return (
        <header class="Header">
            {isMain && <img src={bg} alt="Фон" className="Header__bg" />}
            <div class="container">
                <div className="Header__content">
                    <h2 className={`Header__content-logo ${isBuyPage ? "Header__content-black" : ""}`}>Phones</h2>
                    <nav>
                        <ul>
                            <Link className={`Header__content-link ${isBuyPage ? "Header__content-black" : ""}`} to={'/'}>
                                <li>Главная</li>
                            </Link>
                            <Link className={`Header__content-link ${isBuyPage ? "Header__content-black" : ""}`}>
                                <li>Контакты</li>
                            </Link>
                            <Link className={`Header__content-link ${isBuyPage ? "Header__content-black" : ""}`}>
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
