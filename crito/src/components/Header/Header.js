import React from 'react'
import './Header.css';
import Logo from '../../assets/images/Logo.svg'

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={Logo} alt="Crito Logo"/>
        <button className="menu-bars"><i className="fa-solid fa-bars-staggered"></i></button>
        <div className="menu">
          <div className="top-menu">
            <div className="contact">
              <div className="contact-box">
                <i className="fa-regular fa-phone-volume"></i> 
                +46 (8) 121 470 50
              </div>
              <div className="contact-box">
                <i className="fa-regular fa-envelope"></i> 
                info@crito.com
              </div>
              <div className="contact-box last">
                <i className="fa-regular fa-location-dot"></i>
                Sveavägen 31, 111 34 Stockholm
              </div>
            </div>
            <div className="socialmedia">
              <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>                              
            </div>
          </div>
          <div className="main-menu">
            <nav>
              <a className="active" href="home.html">Home</a>
              <a href="service.html">Service</a>
              <a href="news.html">News</a>
              <a href="contact.html">Contact</a>
            </nav>
            <a href="login.html"><button className="button yellow">Login <i className="fa-regular fa-arrow-up-right"></i></button></a>
          </div>
        </div>      
      </div>
    </header>
  )
}

export default Header