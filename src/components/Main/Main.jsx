import React from 'react';
import { Link } from "react-router-dom";
import human from '../img/6596121 1.png';

const Main = ({ products, setProducts }) => {
  return (
    <main className='Main'>
      <div className="container">

        <section className='Menu'>
          <h2>Онлайн магазин электроники</h2>
          <div className="Menu__categories">
            <p>Планшеты</p>
            <p>Смартфоны</p>
            <p>Playstation</p>
            <p>Камеры, штативы</p>
            <p>Клавиатуры, мышки</p>
            <p>Компьютеры, ноутбуки</p>
            <p>Телевизоры, мониторы</p>
            <p>Наушники, микрофоны, калонки</p>
          </div>
        </section>

        <section className='Products'>

          <select id="categories" name="categories">
            <option value="category1">Все товары</option>
            <option value="category2">Телефоны</option>
            <option value="category3">Планшеты</option>
            <option value="category4">Playstation</option>
            <option value="category5">Компьютеры</option>
            <option value="category6">Мониторы ..</option>
            <option value="category6">Камеры</option>
            <option value="category6">Клавиатуры ..</option>
            <option value="category6">Наушники ..</option>
          </select>

          <div className="Products__info">
            {products.map((product, idx) => {
              return (
                <div className="Products__info-tovar">
                  <img className='Products__info-img' src={product.image} alt="" />
                  <h4>{product.price}</h4>
                  <h5>{product.name}</h5>
                  <p>{product.ram}</p>
                  <button>Заказать</button>
                </div>
              )
            })}
          </div>

        </section>

        <section class="AboutUs">
          <div>
            <h2>О нашем магазине</h2>
            <p>Добро пожаловать в наш онлайн-магазин электроники! Мы предлагаем широкий ассортимент высококачественных гаджетов и аксессуаров от ведущих мировых брендов.
              Наши товары – это сочетание передовых технологий, стильного дизайна и надежности.</p>
            <p>Наша цель – предоставить вам лучший сервис и удобство покупок. Мы обеспечиваем быструю доставку, гибкие условия оплаты и профессиональную поддержку клиентов.</p>
          </div>
        </section>

        <section className='Reviews'>
          <h2>Отзывы наших клиентов</h2>

          <div className="Reviews__content">
            <div class="Reviews__content-card">
              <img src={human} alt="" />
              <div className="Reviews__content-info">
                <h4>Сали</h4>
                <div class="Reviews__content-stars">★★★★★</div>
                <p>Отличный сервис, быстрая доставка! Очень довольна.</p>
              </div>
            </div>
            <div class="Reviews__content-card">
              <img src={human} alt="" />
              <div className="Reviews__content-info">
                <h4>Дмитрий Смирнов</h4>
                <div class="Reviews__content-stars">★★★★★</div>
                <p>Качество на высоте, рекомендую!</p>
              </div>
            </div>
            <div class="Reviews__content-card">
              <img src={human} alt="" />
              <div className="Reviews__content-info">
                <h4>Екатерина Орлова</h4>
                <div class="Reviews__content-stars">★★★★☆</div>
                <p>Все супер, но хотелось бы больше вариантов доставки.</p>
              </div>
            </div>
            <div class="Reviews__content-card">
              <img src={human} alt="" />
              <div className="Reviews__content-info">
                <h4>Бекназар</h4>
                <div class="Reviews__content-stars">★★★★☆</div>
                <p>Все супер, но хотелось бы больше вариантов доставки.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}

export default Main
