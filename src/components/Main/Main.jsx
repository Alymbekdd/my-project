import { useLocation } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import human from '../img/6596121 1.png';

const Main = ({ products, cart, setCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const location = useLocation();
  const productsSectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleAddToCart = (product) => {
    if(!cart.find(item => item.id === product.id)) {
    setCart([...cart, product]);
    }
  };

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter((product) => product.model === selectedCategory);


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (productsSectionRef.current) {
      productsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };


  return (
    <main className='Main'>
      <div className="container">

        <section className='Menu'>
          <h2>Онлайн магазин <br /> смартфонов</h2>
          <div className="Menu__categories">
            <p onClick={() => handleCategoryClick("Xiaomi")}>Xiaomi</p>
            <p onClick={() => handleCategoryClick("Apple")}>Apple</p>
            <p onClick={() => handleCategoryClick("OPPO")}>OPPO</p>
            <p onClick={() => handleCategoryClick("POCO")}>POCO</p>
            <p onClick={() => handleCategoryClick("Huawei")}>Huawei</p>
            <p onClick={() => handleCategoryClick("Samsung")}>Samsung</p>
          </div>
        </section>

        <section ref={productsSectionRef} className='Products'>

          <select id="categories" name="categories"
            value={selectedCategory}
            onChange={handleCategoryChange}>
            <option value="all">Все</option>
            <option value="OPPO">OPPO</option>
            <option value="Xiaomi">Xiaomi</option>
            <option value="Apple">Apple</option>
            <option value="POCO">POCO</option>
            <option value="Huawei">Huawei</option>
            <option value="Samsung">Samsung</option>
          </select>

          <div className="Products__info">
            <>
              {filteredProducts.map((product) => {
                const isInCart = cart.some(item => item.id === product.id);

                return (
                  <div className="Products__info-tovar" key={product.id}>
                    <img className='Products__info-img' src={product.image} alt={product.name} />
                    <h4>{product.price} сом</h4>
                    <h5>{product.name}</h5>
                    <p>{product.ram[0]} / {product.ram[1]}</p>
                    <Link to={`/Buy/${product.id}`}>
                      <button className='Products__info-buy'>Заказать</button>
                    </Link>
                    <button onClick={() => handleAddToCart(product)} className='Products__info-cart'>
                      {isInCart ? 'Добавлено' : 'В корзину'}
                    </button>
                  </div>

                );
              })}
            </>
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
                <h4>User092</h4>
                <div class="Reviews__content-stars">★★★★★</div>
                <p>Заказал самсунг S25 все круто работает.</p>
              </div>
            </div>
            <div class="Reviews__content-card">
              <img src={human} alt="" />
              <div className="Reviews__content-info">
                <h4>User07</h4>
                <div class="Reviews__content-stars">★★★★☆</div>
                <p>Все супер, но хотелось бы больше вариантов доставки.</p>
              </div>
            </div>
            <div class="Reviews__content-card">
              <img src={human} alt="" />
              <div className="Reviews__content-info">
                <h4>User324</h4>
                <div class="Reviews__content-stars">★★★★☆</div>
                <p>Качество на высоте, рекомендую!</p>
              </div>
            </div>
            <div class="Reviews__content-card">
              <img src={human} alt="" />
              <div className="Reviews__content-info">
                <h4>User223</h4>
                <div class="Reviews__content-stars">★★★★★</div>
                <p>Все супер, отличные телефоны и много моделей.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}

export default Main
