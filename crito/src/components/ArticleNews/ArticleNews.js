import React from 'react'
import './ArticleNews.css'

import mars25th from '../../assets/images/articles/mars25th.svg'
import mars17th from '../../assets/images/articles/mars17th.svg'
import mars13th from '../../assets/images/articles/mars13th.svg'
import dots2 from '../../assets/images/dots2.svg'

const ArticleNews = () => {
  return (
    <section class="articleNews">
        <div class="container">
            <div class="header">
                <div class="section-title">
                    <p>Article & News</p>
                    <h2>Get Every Single Articles & News</h2>
                </div>
                <button class="button white">Browse Articles <i class="fa-regular fa-arrow-up-right"></i></button>
            </div>
            <div class="articles">
                <article>
                    <img src={mars25th} alt=""/>
                    <p>Business</p>
                    <h3>How To Use Digitalization In The Classroom</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </article>
                <article>
                    <img src={mars17th} alt=""/>
                    <p>Business</p>
                    <h3>How To Implement Chat GPT In Your Projects</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </article>
                <article>
                    <img src={mars13th} alt=""/>
                    <p>Business</p>
                    <h3>The Guide To Support Modern CSS Design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </article>
            </div>
            <img class="dots" src={dots2} alt="dots"/>

        </div>
    </section>
  )
}

export default ArticleNews