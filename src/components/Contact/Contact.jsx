import React from 'react'
import ValidationForm from '../../elements/ValidationForm/ValidationForm'
import './styles.scss'
import phone from "../../assets/contact/phone.png"
import envelop from "../../assets/contact/envelop.png"
import place from "../../assets/contact/place.png"
import map from "../../assets/contact/map.png"

export default function Contact() {
  return (
    <section className="contact" id='contact'>
        <ValidationForm />
        <article className="contact-info">
            <h1>Мы всегда Вам рады</h1>
            <div className="contact-text">
                <div className="text-group">
                    <p>Сязаться с нами:</p>
                    <div className="link">
                        <img src={phone} alt="phone" />
                        <a href="#">+38 (097) 466 31 90</a>
                    </div>
                </div>
                <div className="text-group">
                    <p>Написать:</p>
                    <div className="link">
                        <img src={envelop} alt="envelop" />
                        <a href="#">info@mir.electro.com</a>
                    </div>
                </div>
                <div className="text-group">
                    <p>Всегда быть в курсе:</p>
                    <div className="links">
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>
                <div className="text-group">
                    <p>Иди заходите в гости:</p>
                    <div className="link">
                        <img src={place} alt="place" />
                        <h6>г. Днепр, ул. Глинки 2, ТРЦ “Мост-Сити”</h6>
                    </div>
                </div>
            </div>
            <img className="map" src={map} alt="map" />
        </article>
    </section>
  )
}
