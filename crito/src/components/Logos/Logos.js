import React from 'react';
import './Logos.css';
import Paperz from '../../assets/images/Paperz.svg';
import Dorfus from '../../assets/images/Dorfus.svg';
import Martino from '../../assets/images/Martino.svg';
import Square from '../../assets/images/Square.svg';
import Gobona from '../../assets/images/Gobona.svg';

const Logos = () => {
  return (
    <section class="Logos">
        <div class="container">
            <img src={Paperz} alt="Paperz logo"/>
            <img src={Dorfus} alt="Dorfus logo"/>
            <img src={Martino} alt="Martino logo"/>
            <img class="square" src={Square} alt="Square logo"/>
            <img src={Gobona} alt="Gobona logo"/>
        </div>
    </section>
  )
}

export default Logos