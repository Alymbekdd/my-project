import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import pc from './components/img/800na800-2.jpg';

function App() {

  const [products, setProducts] = useState([
    {
      id: 1,
      image: pc,
      name: 'El Capitan',
      ram: 'Оперативная память 1 TB',
      price: '120 тыс',
    },
    {
      id: 1,
      image: pc,
      name: 'El Capitan',
      ram: 'Оперативная память 1 TB',
      price: '120 тыс',
    },
    {
      id: 1,
      image: pc,
      name: 'El Capitan',
      ram: 'Оперативная память 1 TB',
      price: '120 тыс',
    },
    {
      id: 1,
      image: pc,
      name: 'El Capitan',
      ram: 'Оперативная память 1 TB',
      price: '120 тыс',
    },
    {
      id: 1,
      image: pc,
      name: 'El Capitan',
      ram: 'Оперативная память 1 TB',
      price: '120 тыс',
    },
    {
      id: 1,
      image: pc,
      name: 'El Capitan',
      ram: 'Оперативная память 1 TB',
      price: '120 тыс',
    },
    {
      id: 1,
      image: pc,
      name: 'El Capitan',
      ram: 'Оперативная память 1 TB',
      price: '120 тыс',
    },
    {
      id: 1,
      image: pc,
      name: 'El Capitan',
      ram: 'Оперативная память 1 TB',
      price: '120 тыс',
    },
    {
      id: 1,
      image: pc,
      name: 'El Capitan',
      ram: 'Оперативная память 1 TB',
      price: '120 тыс',
    },
    {
      id: 1,
      image: pc,
      name: 'El Capitan',
      ram: 'Оперативная память 1 TB',
      price: '120 тыс',
    },
    {
      id: 1,
      image: pc,
      name: 'El Capitan',
      ram: 'Оперативная память 1 TB',
      price: '120 тыс',
    },
    {
      id: 1,
      image: pc,
      name: 'El Capitan',
      ram: 'Оперативная память 1 TB',
      price: '120 тыс',
    },
  ]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main products={products} setProducts={setProducts}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
