import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import './styles.scss'
import  logo from '../../assets/header/logo.png'
import  search from '../../assets/header/search.png'
import  bag from '../../assets/header/bag.png'
import  phone from '../../assets/header/phone.png'
import  user from '../../assets/header/user.png'
import axios from 'axios'

export default function Header() {

  const [emails, setEmails] = useState([]);
  const [hovered, setHovered] = useState(false);

  const handleHover = async () => {
    setHovered(true);
    try {
      const response = await axios.get('http://localhost:3334/all-users');
      const uniqueEmails = response.data;
      setEmails(uniqueEmails);
    } catch (error) {
      console.error('Error fetching emails:', error);
    }
  };
  return (
    <header className="d-flex">
        <a href="#news" className='logo'>
        <img src={logo} alt='logo'/>
        </a>
        <div className="input-nav-group">
        <input
            type="text"
            placeholder="Ваш запрос"
            aria-label="Search"
            aria-describedby="basic-addon2"
        />
        <button className="input-search">
            <img src={search} alt='search'/>
        </button>
        </div>
        <Nav></Nav>
        <div className="info d-flex  align-items-center">
            <img src={phone} alt="phone" />
            <a href='#phone'>+38 (097) 466 31 90</a>
            <button className="btn">
                <img src={bag} alt="bag" />
            </button>
            <button className="btn" 
                    onMouseEnter={handleHover} 
                    onMouseLeave={() => {setHovered(false)}}>
                <img src={user} alt="user" />
            </button>
            {hovered && (
                <div className="email-list">
                <h5>Our clients:</h5>
                <ul className="list-group list-group-flush">
                    {emails.map((email, index) => (
                    <li className="list-group-item" key={index}>{email}</li>
                    ))}
                </ul>
                </div>
                )}
        </div>
    </header>
     
  )
}
