import React from 'react'
import Samantha from '../../assets/images/Samantha.svg'
import './About.css'

const About = () => {
  return (
    <section class="about">
        <div class="container">
            <div class="image">
            <img src={Samantha} alt="Samantha walking down the hallway with her tablet."/>
            </div>
            <div class="founder">
                <h4>Samantha Brown, <span>Founder</span></h4> 
                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit."</p> 
            </div>
            <div class="about-company">
                <div class="section-title">
                    <p>About Company</p>
                    <h2>We Are Business Consulting & Credit Repair Experts</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet</p>
                <div class="link-player">
                    <button class="button black">Learn More <i class="fa-regular fa-arrow-up-right"></i></button>
                    <i class="fa-sharp fa-regular fa-circle-play player"></i>
                    <span>Intro Video</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About