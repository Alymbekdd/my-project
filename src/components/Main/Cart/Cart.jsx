import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
    const cutText = (text, maxLength = 12) => text?.slice(0, maxLength) + (text?.length > maxLength ? ".." : "");

    const delite = (id) => {
        setCart(
            cart.filter((item, idx) => {
                return idx !== id
            })
        )
    }

    return (
        <main>
            <div className="container">
                <h3 className='Cart__title'>Ваша корзина</h3>
                <p className='Cart__subtitle'>Количество товаров {cart.length}</p>

                <section className='Cart'>
                    {cart.length === 0 ? (
                        <p className='Cart__pusto'>Пусто</p>
                    ) : (
                        cart.map((product, idx) => {
                            return (
                                <>
                                    <div className="Cart__tovar-line"></div>
                                    <div key={idx} className="Cart__tovar">
                                        <img src={product.image} alt="" />
                                        <div className="Cart__tovar-info">
                                            <p>{cutText(product.name)}</p>
                                            <p>{product.date}</p>
                                            <p>{product.ram[1]} / {product.ram[0]}</p>
                                            <p>{cutText(product.oc)}</p>
                                        </div>
                                        <div className="Cart__tovar-btns">
                                            <h4>{product.price} сом</h4>
                                            <Link to={`/Buy/${product.id}`}>
                                                <button className='Cart__tovar-btn'>Заказать</button>
                                            </Link>
                                            <button onClick={() => delite(idx)} className='Cart__tovar-card'>Удалить</button>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    )}
                </section>
            </div>
        </main>
    )
}

export default Cart
