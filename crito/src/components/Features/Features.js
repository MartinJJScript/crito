import React from 'react'
import './Features.css'

const features = () => {
  return (
    <section className="features">
        <div className="borderWrapper">
            <div className="container">
                <div className="section-title">
                    <p>Features</p>
                    <h2>Our Accounting is trusted på thousand of companies.</h2>                    
                </div>
                <button className="button yellow">Learn more <i className="fa-regular fa-arrow-up-right"></i></button>
                    <div className="info Advice">
                        <i className="fa-sharp fa-light fa-handshake"></i>
                        <h3>Business Advice</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="info Startup">
                        <i className="fa-regular fa-lightbulb-exclamation-on"></i>
                        <h3>Startup Business</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="info Financial">
                        <i className="fa-thin fa-chart-mixed-up-circle-dollar"></i>
                        <h3>Financial Advice</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="info Risk">
                        <i className="fa-sharp fa-light fa-box-circle-check"></i>
                        <h3>Risk Management</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
            </div>
        </div>   
    </section>
  )
}

export default features