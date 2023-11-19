import React from 'react';
import './Testimonials.css';

import fivestar from '../../assets/images/fiveStar.svg'
import Cassandra from '../../assets/images/testimonials/Cassandra.svg'
import Amanda from '../../assets/images/testimonials/Amanda.svg'
import Jack from '../../assets/images/testimonials/Jack.svg'


const Testimonials = () => {
  return (
    <section class="testimonial">
        <div class="containerWide">
            <div class="section-title">
                <p>Testimonial</p>
                <h2>What Our Client Says</h2>
            </div>
            <div class="reviewCards">
                <article>
                    <img src={fivestar} alt="five star review score"/>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div class="testimonial-card">
                        <img src={Cassandra} alt="Reviewer Cassandra"/>
                        <h3>Cassandra Warren</h3>
                        <p>Business Manager, Dorfus</p>
                    </div>
                </article>
                <article>
                    <img src={fivestar} alt="five star review score"/>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div class="testimonial-card">
                        <img src={Amanda} alt="Reviewer Amanda"/>
                        <h3>Amanda Tulling</h3>
                        <p>Senior Developer, Square</p>
                    </div>
                </article>
                <article>
                    <img src={fivestar} alt="five star review score"/>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div class="testimonial-card">
                        <img src={Jack} alt="Reviewer Jack"/>
                        <h3>Jack McDogglas</h3>
                        <p>Key Account Manager, Gobona</p>
                    </div>
                </article>
            </div>
            <button class="button black">All Reviews <i class="fa-regular fa-arrow-up-right"></i></button>
        </div>
    </section>
  )
}

export default Testimonials