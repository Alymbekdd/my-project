import React, { useEffect } from 'react';
import { useParams, useLocation, Link } from "react-router-dom";
import human from '../../img/6596121 1.png';

const Buy = ({ products, setBuySelectedTovar, cart, setCart }) => {

  const { id } = useParams();
  const tovar = products.find((product) => product.id === parseInt(id));

  const handleBuyTovar = () => {
    const order = {
      id: tovar.id,
      image: tovar.image,
      name: tovar.name,
      model: tovar.model,
      price: tovar.price,
      oc: tovar.oc,
      date: tovar.date,
      ram: [tovar.ram[0], tovar.ram[1]],
      size: tovar.size,
      weight: tovar.weight,
      acm: tovar.acm,
      display: tovar.display,
    };
    setBuySelectedTovar((prevOrders) => [...prevOrders, order]);
    alert('заказ сделан успешно!');
  };

  const AddToCart = (product) => {
    if (!cart.find(item => item.id === tovar.id)) {
      setCart([...cart, tovar]);
    }
  };
  const isInCart = cart.some(item => item.id === tovar.id);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const truncateText = (text, maxLength = 12) => text?.slice(0, maxLength) + (text?.length > maxLength ? ".." : "");

  return (
    <main>
      <div className="container">

        <section className='Buy'>
          <img src={tovar.image} alt="" />

          <div className="Buy__infos">
            <div className="Buy__infos-info">
              <div>
                <p>Называние:</p>
                <p>Год выпуска:</p>
                <p>Модель:</p>
                <p>Цена:</p>
              </div>
              <div>
                <p>{truncateText(tovar.name)}</p>
                <p>{tovar.date}</p>
                <p>{tovar.model}</p>
                <p>{tovar.price} сом</p>
              </div>
            </div>

            <div className="Buy__infos-info">
              <div>
                <p>ОС:</p>
                <p>Процессор:</p>
                <p>Память:</p>
                <p>Экран:</p>
                <p>Размер:</p>
                <p>Год выпуска:</p>
              </div>
              <div>
                <p>{truncateText(tovar.oc)}</p>
                <p>{truncateText(tovar.cpu[0])}</p>
                <p>{tovar.ram[0]} / {tovar.ram[1]}</p>
                <p>{truncateText(tovar.display)}</p>
                <p>{tovar.size}</p>
                <p>{tovar.date}</p>
              </div>
            </div>
          </div>

          <div className="Buy__content">
            <h4>{tovar.price} сом</h4>
            <div className="Buy__content-btns">
              <Link to={'/'}>
                <button onClick={handleBuyTovar} className='Buy__content-btn'>Заказать</button>
              </Link>
              <button onClick={() => AddToCart(tovar)}
                className='Buy__content-cart'>
                {isInCart ? 'Добавлено' : 'В корзину'}
              </button>
            </div>
          </div>


        </section>

        <section className='About'>
          <div className="About__line"></div>

          <div className="About__item">
            <div>
              <h4>Общие</h4>
              <p>Год выпуска:</p>
              <p>ОС:</p>
              <p>Модель:</p>
              <p>Называние:</p>
              <p>Цена:</p>
            </div>
            <div>
              <h5>1</h5>
              <p>{tovar.date}</p>
              <p>{tovar.oc}</p>
              <p>{tovar.model}</p>
              <p>{tovar.name}</p>
              <p>{tovar.price} сом</p>
            </div>
          </div>


          <div className="About__item">
            <div>
              <h4>Характеристики</h4>
              <p>Видио ускоритель:</p>
              <p>Память:</p>
              <p>Аккумулятор:</p>
              <p>Вес:</p>
              <p>Экран:</p>
              <p>Размер:</p>
              <p>Процессор:</p>
            </div>
            <div>
              <h5>1</h5>
              <p>{tovar.cpu[1]}</p>
              <p>{tovar.ram[0]} / {tovar.ram[1]}</p>
              <p>{tovar.acm}</p>
              <p>{tovar.weight}</p>
              <p>{truncateText(tovar.display)}</p>
              <p>{tovar.size}</p>
              <p>{truncateText(tovar.cpu[0])}</p>
            </div>
          </div>

          <div className="About__line"></div>
        </section>

        <section className='Reviews'>
          <h2>Отзывы наших клиентов</h2>

          <div className="Reviews__content">
            <div class="Reviews__content-card">
              <img src={human} alt="" />
              <div className="Reviews__content-info">
                <h4>User12</h4>
                <div class="Reviews__content-stars">★★★★★</div>
                <p>Заказал самсунг S25 все круто работает.</p>
              </div>
            </div>
            <div class="Reviews__content-card">
              <img src={human} alt="" />
              <div className="Reviews__content-info">
                <h4>User912</h4>
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

export default Buy
