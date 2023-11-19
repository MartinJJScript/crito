import React from 'react'
import './ProjectCase.css'

import business from '../../assets/images/business.svg'
import stapler from '../../assets/images/stapler.svg'
import notebook from '../../assets/images/notebook.svg'
import laptop from '../../assets/images/laptop.svg'

const ProjectCase = () => {
  return (
    <section class="projectCase">
        <div class="container">
            <div class="section-title">
                <p>Project & Case Studies</p>
                <h2>Let's Looks Our Global Projects</h2>
            </div>
            <div class="grid">
                <article>
                    <img src={business} alt="image of a Business newspaper"/>
                    <h3>Grow your business</h3>
                    <button class="button white">Read More <i class="fa-regular fa-arrow-up-right"></i> </button>
                </article>
                <article>
                    <img src={stapler} alt="image of a Stapler, pen and glasses on a desk"/>
                    <h3>Why your client needs a responsive website</h3>
                    <button class="button white">Read More <i class="fa-regular fa-arrow-up-right"></i> </button>
                </article>
                <article>
                    <img src={notebook} alt="image of a notebook and a coffeecup on a desk"/>
                    <h3>Educate your employees to get better results</h3>
                    <button class="button white">Read More <i class="fa-regular fa-arrow-up-right"></i> </button>
                </article>
                <article>
                    <img src={laptop} alt="image of  a laptop on a desk"/>
                    <h3>Business Insights is a important piece of your business</h3>
                    <button class="button white">Read More <i class="fa-regular fa-arrow-up-right"></i> </button>
                </article>
            </div>

            <button class="button black center">All Recent Projects <i class="fa-regular fa-arrow-up-right"></i></button>
        </div>
    </section>
  )
}

export default ProjectCase