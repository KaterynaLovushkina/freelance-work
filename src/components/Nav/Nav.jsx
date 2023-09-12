import React, {useState} from 'react'
import './styles.scss'

export default function  Nav(){
    const [activeLink, setActiveLink] = useState(2);
    const links = [
        { text: 'О компании', href: '#' },
        { text: 'Каталог', href: '#catalog' },
        { text: 'Новинки', href: '#news' },
        { text: 'Акции', href: '#' },
        { text: 'Контакты', href: '#contact' },
      ];

    return(
        <nav className="navbar navbar-expand-lg">
             <ul className="navbar-nav">
                {links.map((link, index) => (
                <li className="nav-item" key={index}>
                <a
                    className={`nav-link ${activeLink === index ? 'active-link' : ''}`}
                    href={link.href}
                    onClick={() => {
                        setActiveLink(index)}}
                >
                    {link.text}
                </a>
                </li>
                ))}
            </ul>
        </nav>
    )
}

