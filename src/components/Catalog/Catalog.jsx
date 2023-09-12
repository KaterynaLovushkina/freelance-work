import React from 'react'
import allGods from '../../assets/catalog/all-goods.png'
import kitchenStaff from '../../assets/catalog/good-1.png'
import complect from '../../assets/catalog/good-10.png'
import image1 from '../../assets/catalog/good-2.png'
import data  from '../../data/data'

import './styles.scss'
import Item from '../../elements/Item/Item'

export default function Catalog() {
  return (
    <section className='catalog' id='catalog'>
        <div className="catalog-info">
            <h1>Каталог товаров</h1>
            <p>Выбирай своего незаменимого помощника для приготовления 
                любого блюда</p>
        </div>
       <div className="btns">
          <div className='dropdown-items'>
          <div className="dropdown">
            <span>Фильтры:</span>
            <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">Все</button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                <li><a className="dropdown-item active" href="#">Все</a></li>
                <li><a className="dropdown-item" href="#">Блендер</a></li>
                <li><a className="dropdown-item" href="#">Чайник</a></li>
                <li><a className="dropdown-item" href="#">Тостер</a></li>
                <li><a className="dropdown-item" href="#">Кофемашина</a></li>
                <li><a className="dropdown-item" href="#">Мясорубка</a></li>
                <li><a className="dropdown-item" href="#">Миксер</a></li>
            </ul>
          </div>
          <div className="dropdown">
            <span>Сортировать:</span>
            <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">Самые популярные</button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                <li><a className="dropdown-item active" href="#">Самые популярные</a></li>
                <li><a className="dropdown-item" href="#">Самые новые</a></li>
                <li><a className="dropdown-item" href="#">Самые дорогие</a></li>
                <li><a className="dropdown-item" href="#">Самые дешевые</a></li>
            </ul>
          </div>
          </div>
       </div>
       <div className="catalog-items">
        <div className="catalog-big-img" href='#'>
           <img src={kitchenStaff} alt="all for kitchen" />
           <p>Всё для кухни</p>
        </div>
        
        {data.map((item, index)  => (
            <Item item={item} key={index} />
        ))}
        
        <div className="catalog-big-img" href='#'>
            <img src={complect} alt="complects" />
            <p>Наборы техники</p>
        </div>
       </div>
       <a href="#" className="show-more">Показать больше</a>
    </section>
  )
}
