import React from 'react'
import './Footer.css'

import LogoWhite from '../../assets/images/LogoWhite.svg'

const Footer = () => {
  return (
    <div>
        <footer>
        <div class="container">
            <div class="links">
                <article class="Logo">
                    <img src={LogoWhite} alt="Logo"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </article>
                <article class="link">
                    <h3>Company</h3>
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Works</a>
                    <a href="#">Career</a>
                </article>
                <article class="link">
                    <h3>Help</h3>
                    <a href="#">Customer Support</a>
                    <a href="#">Delivery Details</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </article>                
                <article class="link">
                    <h3>Resources</h3>
                    <a href="#">Free eBooks</a>
                    <a href="#">Development Tutorial</a>
                    <a href="#">How to - Blog</a>
                    <a href="#">Youtube Playlist</a>
                </article>                
                <article class="link">
                    <h3>Link</h3>
                    <a href="#">Free eBooks</a>
                    <a href="#">Development Tutoria</a>
                    <a href="#">How to - Blog</a>
                    <a href="#">Youtube Playlist</a>
                </article>
            </div>
        </div>
    </footer>
    <section class="lowerFooter">
        <div class="container">
            <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
            <div class="socialmedia">
                <a href="https://facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://linkedin.com" target="_blank"><i class="fa-brands fa-linkedin"></i></a>          
            </div>
        </div>
    </section>
    </div>
  )
}

export default Footer