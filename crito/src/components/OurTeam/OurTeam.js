import React from 'react';
import './OurTeam.css';

import kristine from '../../assets/images/teamMembers/kristine.svg';
import mark from '../../assets/images/teamMembers/mark.svg';
import kimberly from '../../assets/images/teamMembers/kimberly.svg';
import Justin from '../../assets/images/teamMembers/Justin.svg';
import dots from '../../assets/images/dots.svg';

const OurTeam = () => {
  return (
    <section class="ourTeam">
        <div class="container">
            <div class="wrapper">
                <div class="section-title">
                    <p>Meet Our Team</p>
                    <h2>Experience Team Members</h2>
                </div>
                <button class="button yellow">Browse Team <i class="fa-regular fa-arrow-up-right"></i></button>
            </div>

            <div class="teamMembers">
                <div>
                    <img src={kristine} alt="Picture of Kristine"/>
                    <h3>Kristine Palmer</h3>
                    <p>Chef Operation Officer</p>
                </div>
                <div>
                    <img src={mark} alt="Picture of Mark"/>
                    <h3>Mark Aubri</h3>
                    <p>Senior Consultant</p>
                </div>
                <div>
                    <img src={kimberly} alt="Picture of Kimberly"/>
                    <h3>Kimberly Hansen</h3>
                    <p>Senior Consultant</p>
                </div>
                <div>
                    <img src={Justin} alt="Picture of Justin"/>
                    <h3>Justin Willoman</h3>
                    <p>Senior Tech Consultant</p>
                </div>
            </div>
            <img src={dots} alt="dots"/>
        </div>
    </section>
  )
}

export default OurTeam