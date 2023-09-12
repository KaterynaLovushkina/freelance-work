import React from 'react'
import email from '../../assets/subscribe/post.png'
import LearnMore from '../../elements/LearnMore/LearnMore'
import './styles.scss'

export default function Subscribe() {
  return (
    <section className='subscribe'>
      <div className="subscribe-info">
      <h1>Хотите быть в курсе всех самых послених новик 
          в мире бытовой технике?</h1>
      <p>Уверяем Вас, никакого спама - только по делу
      </p>
      </div>
      <div className="input-nav-group">
        <input
            type="text"
            placeholder="Введите Ваш email"
            aria-label="Search"
        />
        <button className="input-search">
            <img src={email} alt='search'/>
        </button>
      </div>
      <LearnMore text='Подписаться'/>
    </section>
    
  )
}
