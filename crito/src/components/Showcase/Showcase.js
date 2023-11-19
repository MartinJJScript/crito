import React from 'react';
import './Showcase.css';
import Tabletguy from '../../assets/images/Tabletguy.svg';

const Showcase = () => {
  return (
    <section class="showcase">
        <div class="container">
            <div class="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <div class="showcase-buttons">
                    <button class="button yellow">Get Consulting <i class="fa-regular fa-arrow-up-right"></i></button>
                    <button class="button transp">Learn More <i class="fa-regular fa-arrow-up-right"></i></button>
                </div>
            </div>
            <img src={Tabletguy} alt="showcase image of a man with a tablet"/>
        </div>
    </section>
  )
}

export default Showcase