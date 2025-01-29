import React from 'react'
import instagram from '../img/Instagram_icon.png 1.png';
import wk from '../img/w256h2561384975213MezhdunarodnylogotipVK1 1.png';
import tiktok from '../img/img.icons8 1.png';
import whatsapp from '../img/whatsapp_icon_161055 1.png';


const Footer = () => {
  return (
    <footer id='footer' className='Footer'>
      <div className="container">
        <div className="Footer__contacts">

          <div className="Footer__net">
            <h1>Наши соц.сети</h1>
            <div>
              <img src={instagram} alt="icon" />
              <p>example</p>
            </div>
            <div>
              <img src={wk} alt="icon" />
              <p>example</p>
            </div>
            <div>
              <img src={tiktok} alt="icon" />
              <p>example</p>
            </div>
            <div>
              <img src={whatsapp} alt="icon" />
              <p>example</p>
            </div>
          </div>

          <div className="Footer__aboutUs">
            <h1>О нас</h1>
            <p>О проекте</p>
            <p>Реклама</p>
            <p>Конфиденциальностьи</p>
            <p>Отзывы о нас</p>
          </div>

          <div className="Footer__info">
            <h1>Контакты</h1>
            <p>example@gmail.com</p>
            <p>+996 507274717</p>
          </div>

          <div className="Footer__help">
            <h1>Помощ</h1>
            <p>Возврат средств</p>
            <p>Проблемы с оплатой</p>
            <p>Доставка</p>
            <p>Другое</p>
          </div>

        </div>

        <div className="Footer__linya"></div>

        <p className='Footer__title'>© 2018 - 2024 Название компании ИНН
          000000000
        </p>

      </div>
    </footer>
  )
}

export default Footer
