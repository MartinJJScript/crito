import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services">
        <div className="container">
            <div className="section-title">
                <p>Our Services</p>
                <h2>We Provide The Best Service For Consulting</h2>
            </div>
            <div className="cards">
                <div className="card white">
                    <div className="line"></div>
                    <h3>Business Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                </div>
                <div className="card yellow">
                    <div className="line"></div>
                    <h3>Startup Business</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                </div>
                <div className="card white">
                    <div className="line"></div>
                    <h3>Financial Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                </div>
                <div className="card white">
                    <div className="line"></div>
                    <h3>Risk Management</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                </div>
            </div>
            <button className="button transp">Browse Services <i className="fa-regular fa-arrow-up-right"></i> </button>
        </div>
    </section>
  )
}

export default Services