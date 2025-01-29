import React from 'react';
import bg from '../img/IMG_1444.JPG';

const Header = () => {
    return (
        <header class="Header">
            <img src={bg} alt="" />
            <div class="container">
                <div className="Header__content">
                    <h2 className="Header__content-logo">Eloctronics</h2>
                    <nav>
                        <ul>
                            <li><a href="#">Главная</a></li>
                            <li><a href="#">О нас</a></li>
                            <li><a href="#">Корзина</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default Header
