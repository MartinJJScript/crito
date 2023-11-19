import React from 'react';
import './WhyUs.css';
import whyUs from '../../assets/images/whyUs.svg'


const WhyUs = () => {
  return (
    <section class="whyUs">
        <div class="container">
            <div class="section-title">
                <p>Why Choose Us</p>
                <h2>Why We Are The Best Business Consulting Agency</h2>
                <article>
                    <div>
                        <i class="fa-light fa-thumbs-up"></i>
                        <h3>Process Exellence</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div>
                        <i class="fa-regular fa-chess"></i>
                        <h3>Strategic Planning</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div>
                        <i class="fa-light fa-pen-nib"></i>
                        <h3>Experience Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div>
                        <i class="fa-light fa-head-side-gear"></i>
                        <h3>Artificial Inteligence</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </article>
            </div>
            <div class="image">
                <img src={whyUs} alt="Two ladies in an office space with a tablet"/>
            </div>           
        </div>
    </section>
  )
}

export default WhyUs