import React, { useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";

const Buy = ({ products }) => {

  const { id } = useParams();
  const tovar = products.find((product) => product.id === parseInt(id));

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main>
      <div className="container">
        <section className='Buy'>

          <div className="Buy__product">
            <img src={tovar.image} alt="" />
            <button className='Buy__product-btn'>Заказать</button>
            <button className='Buy__product-cart'>В корзину</button>
          </div>

          <div className="Buy__info">
            <div>
              <p>ОС:</p>
              <p>Процессор:</p>
              <p>Память:</p>
              <p>Экран:</p>
              <p>Размер:</p>
              <p>Год выпуска:</p>
            </div>
            <div>
              <p>{tovar.oc}</p>
              <p>{tovar.cpu[0]}</p>
              <p>{tovar.ram}</p>
              <p>{tovar.display}</p>
              <p>{tovar.size}</p>
              <p>{tovar.date}</p>
            </div>
          </div>

        </section>
      </div>
    </main>
  )
}

export default Buy
