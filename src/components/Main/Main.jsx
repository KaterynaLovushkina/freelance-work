import React from 'react'
import './styles.scss'
import mixer from '../../assets/main/mixer.png'
import newImg from '../../assets/main/new.png'
import arrowSlider from '../../assets/main/arrow-slider.png'
import goodsImg from '../../assets/main/goods_name.png'
import LearnMore from '../../elements/LearnMore/LearnMore'


export default function Main() {
  return (
    <section className='custom-container'>
        <main id='news'>
            <div className="new-img">
                <img src={newImg} alt='new' />
                <div className="line"></div>
            </div>
            <div className="main-info">
                <h1>Погружной блендер нового поколения </h1>
                <h3>Удобство. Комфорт. Качество. Гарантия.</h3>
                <h4>Отличный и не заменимый помощник на любой кухне для приготовления 
                        и воплощения любых кулинарных идей</h4>
                <LearnMore text='Узнать больше' />
                <div className="social">
                <a href='#facebook'>Facebook</a>
                <a href='#instagram'>Instagram</a>
            </div>
                </div>
                <button className='img-goods'>
                    <img src={goodsImg} alt="goods" />
                </button>
                <div className="slider">
                    <p><span className='page-number'>01</span>/05</p>
                    <div className="arrows">
                    <img src={arrowSlider} alt="arrow"  className='arrow'/>
                    <img src={arrowSlider} alt="arrow"  className='arrow arrow-right'/>
                    </div>
                </div>
            </main>
            <img src={mixer} alt='mixer' className='img-mixer'/>
    </section>
    
  )
}
