import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Buy from './components/Main/Buy/Buy';
import Footer from './components/Footer/Footer';

import FindX7Ultra from './components/img/Oppo_Find_X7_Ultra_672874befa.webp';
import Reno11 from './components/img/OPPOReno11FGreen-Front_BackOverlappedCombination_d5fd51cd-ea68-49ba-b326-e3341e0bc7b0.webp';
import A3x from './components/img/714GaXJHGGL._SL1500_.webp';
import K12 from './components/img/Oppo_K12_0f7d279cfb.webp';
import Xiaomi14TPro from './components/img/8b9ab13e-da35-42ef-99bf-06843432a987.webp';
import Xiaomi12T from './components/img/9236_l12u-silver-1-base-shadow-1600px_1.jpg';
import XiaomiMi8Pro from './components/img/61cSFR+P3KL.jpg';
import Xiaomi14Ultra from './components/img/Xiaomi-14-Ultra-11.webp';
import iPhone16ProMax from './components/img/images.jpg';
import iPhone13 from './components/img/iphone-13-Blue-Price-in-Srilanka-Apple-Asia-1.jpg';
import iPhone14ProMax from './components/img/APPLE-IPHONE-14-PRO-MAX-128GB-GOLD-SMARTPHONE.jpg';
import AppleiPhone11 from './components/img/apple-iphone16-smartphone-512gb-white.jpeg';
import POCOF6Pro from './components/img/Smartfon_Xiaomi_POCO_F6_Pro_12_512Gb_White_2.jpg';
import POCOF5 from './components/img/0vod8xgbbwtgmwnwq4ipko4njmft5sol.jpg';
import POCOM6Pro from './components/img/61W247P2y4L.jpg';
import POCOX55G from './components/img/m20_black_front_45_r_result_2-1.jpg';
import HuaweinovaY72S from './components/img/nova.png';
import HuaweiPura70UltraHBPLX9 from './components/img/5h46alkcdiq5855_3b68c0ee.png.webp';
import HuaweiMate50RS from './components/img/HUAWEI-nova-12i-Green-Back.png';
import HuaweiNovaY70 from './components/img/460671dbe57a1c898098845dea978627.png';
import SamsungGalaxyS25Ultra from './components/img/samsung-galaxy-s25-ultra-5g-512-gb-titanium-gray.jpg';
import SamsungGalaxyZFold6 from './components/img/7079529592.jpg';
import SamsungGalaxyM32 from './components/img/ru-galaxy-m53-5g-sm-m536-sm-m536bzbdser-thumb-532134150.webp';
import SamsungGalaxyA06 from './components/img/1.png';


function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: FindX7Ultra,
      name: 'OPPO Find X7 Ultra',
      ram: [
        "12 ГБ",
        "256 ГБ",
      ],
      price: '81 500',
      model: 'OPPO',
      oc: 'Android 14',
      size: '6,82" дюймов',
      display: 'LTPO AMOLED',
      date: '2024',
      cpu: [
        'Qualcomm Snapdragon 8 Gen3',
        'Adreno 750',
      ],
      weight: '221 г',
      acm: [
        '5 000 mA·ч',
        '',
      ]
    },
    {
      id: 2,
      image: Reno11,
      name: 'OPPO Reno11',
      ram: [
        "12 ГБ",
        "256 ГБ",
      ],
      price: '45 200',
      model: 'OPPO',
      oc: 'Android 14',
      size: '6,7" дюймов',
      display: 'AMOLED',
      date: '2024',
      cpu: [
        'MediaTek Dimensi 7050',
        'Mali-G68 MC4',
      ],
      weight: '182 г',
      acm: [
        '5000 mA·ч',
        '',
      ]
    },
    {
      id: 3,
      image: A3x,
      name: 'OPPO A3x',
      ram: [
        "4 ГБ",
        "128 ГБ",
      ],
      price: '12 700',
      model: 'OPPO',
      oc: 'Android 14, BlackBerry OS 10',
      size: '6,67" дюймов',
      display: 'IPS',
      date: '2024',
      cpu: [
        'Qualcomm Snapdragon SDM662',
        'Adreno 610',
      ],
      weight: '186 г',
      acm: [
        '5100 mA·ч',
        'Li-ion',
      ]
    },
    {
      id: 4,
      image: K12,
      name: 'OPPO K12',
      ram: [
        "8 ГБ",
        "256 ГБ",
      ],
      price: '37 400',
      model: 'OPPO',
      oc: 'Android 14',
      size: '6,7" дюймов',
      display: 'AMOLED',
      date: '2024',
      cpu: [
        'Qualcomm Snapdragon 7 Gen3',
        'Adreno 720',
      ],
      weight: '186 г',
      acm: [
        '5500 mA·ч',
        '',
      ]
    },
    {
      id: 5,
      image: Xiaomi14TPro,
      name: 'Xiaomi 14T Pro',
      ram: [
        "12 ГБ",
        "256 ГБ",
      ],
      price: '55 000',
      model: 'Xiaomi',
      oc: 'Android 14',
      size: '6,67" дюймов',
      display: 'AMOLED',
      date: '2024',
      cpu: [
        'MediaTek Dimensity 9300+',
        'Immortalis-G720 MC12',
      ],
      weight: '209 г',
      acm: [
        '5000 mA·ч',
        'Литий-полимерный (Li-Po)',
      ]
    },
    {
      id: 6,
      image: Xiaomi12T,
      name: 'Xiaomi 12T',
      ram: [
        "8 ГБ",
        "128 ГБ",
      ],
      price: '52 400',
      model: 'Xiaomi',
      oc: 'Android 12, Android 13, Android 14',
      size: '6,67" дюймов',
      display: 'AMOLED',
      date: '2022',
      cpu: [
        'MediaTek Dimensity 8100 Ultra',
        'Mali-G610 MC6',
      ],
      weight: '202 г',
      acm: [
        '5000 mA·ч',
        '',
      ]
    },
    {
      id: 7,
      image: XiaomiMi8Pro,
      name: 'Xiaomi Mi 8 Pro',
      ram: [
        "8 ГБ",
        "128 ГБ",
      ],
      price: '10 900',
      model: 'Xiaomi',
      oc: 'Android 10, Android 8.1, Android 9',
      size: '6,21" дюймов',
      display: 'AMOLED',
      date: '2018',
      cpu: [
        'Qualcomm Snapdragon 845',
        'Adreno 630',
      ],
      weight: '177 г',
      acm: [
        '3000 mA·ч',
        '',
      ]
    },
    {
      id: 8,
      image: Xiaomi14Ultra,
      name: 'Xiaomi 14 Ultra',
      ram: [
        "12 ГБ",
        "256 ГБ",
      ],
      price: '142 990',
      model: 'Xiaomi',
      oc: 'Android 14',
      size: '6,73" дюймов',
      display: 'LTPO AMOLED',
      date: '2023',
      cpu: [
        'Qualcomm Snapdragon 8 Gen3',
        'Adreno 750',
      ],
      weight: '220 г',
      acm: [
        '5000 mA·ч',
        '',
      ]
    },
    {
      id: 9,
      image: iPhone16ProMax,
      name: 'iPhone 16 Pro Max',
      ram: [
        "8 ГБ",
        "1 TБ",
      ],
      price: '178 200',
      model: 'Apple',
      oc: 'iOS 17, iOS 18',
      size: '6,9" дюймов',
      display: 'LTPO Super Retina XDR OLED',
      date: '2024',
      cpu: [
        'Apple A18 Pro',
        'Apple GPU',
      ],
      weight: '227 г',
      acm: [
        '4685 mA·ч',
        '',
      ]
    },
    {
      id: 10,
      image: iPhone13,
      name: 'iPhone 13',
      ram: [
        "4 ГБ",
        "128 ГБ",
      ],
      price: '52 700',
      model: 'Apple',
      oc: 'iOS 15, iOS 16, iOS 17, iOS 18',
      size: '6,1" дюймов',
      display: 'Super Retina XDR',
      date: '2021',
      cpu: [
        'Apple A15 Bionic',
        'Apple GPU',
      ],
      weight: '174 г',
      acm: [
        '3240 mA·ч',
        '',
      ]
    },
    {
      id: 11,
      image: iPhone14ProMax,
      name: 'iPhone 14 Pro Max',
      ram: [
        "4 ГБ",
        "128 ГБ",
      ],
      price: '52 500',
      model: 'Apple',
      oc: 'iOS 16',
      size: '6,7" дюймов',
      display: 'LTPO Super Retina XDR OLED',
      date: '2022',
      cpu: [
        'Apple A16 Bionic',
        'Apple GPU',
      ],
      weight: '240 г',
      acm: [
        '4323 mA·ч',
        '',
      ]
    },
    {
      id: 12,
      image: AppleiPhone11,
      name: 'Apple iPhone 11',
      ram: [
        "4 ГБ",
        "128 ГБ",
      ],
      price: '45 500',
      model: 'Apple',
      oc: 'iOS 18',
      size: '6,1" дюймов',
      display: 'Liquid Retina',
      date: '2019',
      cpu: [
        'Apple A13 Bionic',
        'Apple GPU',
      ],
      weight: '194 г',
      acm: [
        '3110 mA·ч',
        '',
      ]
    },
    {
      id: 13,
      image: POCOX55G,
      name: 'POCO X5 5G',
      ram: [
        "6 ГБ",
        "128 ГБ",
      ],
      price: '28 000',
      model: 'POCO',
      oc: 'Android 12',
      size: '6,67" дюймов',
      display: 'AMOLED',
      date: '2023',
      cpu: [
        'Qualcomm Snapdragon SDM695 5G',
        'Adreno 619',
      ],
      weight: '189 г',
      acm: [
        '5000 mA·ч',
        '',
      ]
    },
    {
      id: 14,
      image: POCOF5,
      name: 'POCO F5',
      ram: [
        "12 ГБ",
        "256 ГБ",
      ],
      price: '32 200',
      model: 'POCO',
      oc: 'Android 13',
      size: '6,67" дюймов',
      display: 'AMOLED',
      date: '2023',
      cpu: [
        'Qualcomm Snapdragon 7+ Gen 2',
        'Adreno 725',
      ],
      weight: '181 г',
      acm: [
        '5000 mA·ч',
        '',
      ]
    },
    {
      id: 15,
      image: POCOM6Pro,
      name: 'POCO M6 Pro',
      ram: [
        "8 ГБ",
        "256 ГБ",
      ],
      price: '17 400',
      model: 'POCO',
      oc: 'Android 13, Android 14',
      size: '6,67" дюймов',
      display: 'AMOLED',
      date: '2024',
      cpu: [
        'MediaTek Helio G99 Ultimate',
        'Mali-G57 MC2',
      ],
      weight: '180 г',
      acm: [
        '5000 mA·ч',
        '',
      ]
    },
    {
      id: 16,
      image: POCOF6Pro,
      name: 'POCO F6 Pro ',
      ram: [
        "12 ГБ",
        "512 ГБ",
      ],
      price: '45 200',
      model: 'POCO',
      oc: 'Android 14',
      size: '6,67" дюймов',
      display: 'AMOLED',
      date: '2024',
      cpu: [
        'Qualcomm Snapdragon 8 Gen2',
        'Adreno 740',
      ],
      weight: '209 г',
      acm: [
        '5000 mA·ч',
        '',
      ]
    },
    {
      id: 17,
      image: HuaweinovaY72S,
      name: 'Huawei nova Y72S',
      ram: [
        "8 ГБ",
        "256 ГБ",
      ],
      price: '14 800',
      model: 'Huawei',
      oc: 'Android 14',
      size: '6,75" дюймов',
      display: 'IPS',
      date: '2024',
      cpu: [
        'Qualcomm Snapdragon SDM680',
        'Adreno 610',
      ],
      weight: '207 г',
      acm: [
        '6000 mA·ч',
        '',
      ]
    },
    {
      id: 18,
      image: HuaweiPura70UltraHBPLX9,
      name: 'Pura 70 Ultra HBP-LX9',
      ram: [
        "16 ГБ",
        "1 TБ",
      ],
      price: '87 400',
      model: 'Huawei',
      oc: 'Android 12',
      size: '6,8" дюймов',
      display: 'OLED',
      date: '2024',
      cpu: [
        'Hisilicon Kirin 9010 5G',
        'Maleoon 910',
      ],
      weight: '226 г',
      acm: [
        '5200 mA·ч',
        '',
      ]
    },
    {
      id: 19,
      image: HuaweiMate50RS,
      name: 'Huawei Mate 50 RS',
      ram: [
        "8 ГБ",
        "512 ГБ",
      ],
      price: '67 400',
      model: 'Huawei',
      oc: 'Android 12',
      size: '6,74" дюймов',
      display: 'OLED',
      date: '2022',
      cpu: [
        'Qualcomm Snapdragon 8+ Gen1',
        'Adreno 730',
      ],
      weight: '209 г',
      acm: [
        '4700 mA·ч',
        '',
      ]
    },
    {
      id: 20,
      image: HuaweiNovaY70,
      name: 'Huawei Nova Y70',
      ram: [
        "4 ГБ",
        "64 ГБ",
      ],
      price: '15 200',
      model: 'Huawei',
      oc: 'Android 10',
      size: '6,75" дюймов',
      display: 'IPS',
      date: '2022',
      cpu: [
        'Hisilicon Kirin 710A',
        'Mali-G51 MP4',
      ],
      weight: '199 г',
      acm: [
        '6000 mA·ч',
        '',
      ]
    },
    {
      id: 21,
      image: SamsungGalaxyA06,
      name: 'Samsung Galaxy A06',
      ram: [
        "4 ГБ",
        "64 ГБ",
      ],
      price: '14 550',
      model: 'Samsung',
      oc: 'Android 14',
      size: '6,7" дюймов',
      display: 'PLS',
      date: '2024',
      cpu: [
        'MediaTek Helio G85',
        'Mali-G52 MC2',
      ],
      weight: '189 г',
      acm: [
        '5000 mA·ч',
        '',
      ]
    },
    {
      id: 22,
      image: SamsungGalaxyS25Ultra,
      name: 'Galaxy S25 Ultra',
      ram: [
        "4 ГБ",
        "64 ГБ",
      ],
      price: '15 990',
      model: 'Samsung',
      oc: 'Android 15',
      size: '6,9" дюймов',
      display: 'PLS',
      date: '2025',
      cpu: [
        'MediaTek Helio G85',
        'Mali-G52 MC2',
      ],
      weight: '189 г',
      acm: [
        '5000 mA·ч',
        '',
      ]
    },
    {
      id: 23,
      image: SamsungGalaxyM32,
      name: 'Samsung Galaxy M32',
      ram: [
        "6 ГБ",
        "128 ГБ",
      ],
      price: '18 600',
      model: 'Samsung',
      oc: 'Android 11',
      size: '6,4" дюймов',
      display: 'Super AMOLED',
      date: '2021',
      cpu: [
        'MediaTek Helio G80',
        'Mali-G52 MC2',
      ],
      weight: '180 г',
      acm: [
        '5000 mA·ч',
        '',
      ]
    },
    {
      id: 24,
      image: SamsungGalaxyZFold6,
      name: 'Galaxy Z Fold6',
      ram: [
        "4 ГБ",
        "512 ГБ",
      ],
      price: '129 990',
      model: 'Samsung',
      oc: 'Android 14',
      size: '7,6" дюймов',
      display: 'PLS',
      date: '2024',
      cpu: [
        'MediaTek Helio G85',
        'Mali-G52 MC2',
      ],
      weight: '189 г',
      acm: [
        '5000 mA·ч',
        '',
      ]
    },
  ]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main products={products} />} />
        <Route path='/Buy/:id' element={<Buy products={products} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
