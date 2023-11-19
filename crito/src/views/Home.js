import React from 'react'
import Header from '../components/Header/Header.js';
import Showcase from '../components/Showcase/Showcase.js';
import Logos from '../components/Logos/Logos.js'
import Features from '../components/Features/Features.js';
import About from '../components/About/About.js'
import Services from '../components/_Services/Services.js';
import WhyUs from '../components/WhyUs/WhyUs.js';
import ProjectCase from '../components/ProjectCase/ProjectCase.js';
import OurTeam from '../components/OurTeam/OurTeam.js';
import Testimonials from '../components/Testimonials/Testimonials.js';
import ArticleNews from '../components/ArticleNews/ArticleNews.js';
import SignUp from '../components/SignUp/SignUp.js';
import Footer from '../components/Footer/Footer.js';

const Home = () => {
  return (
    <div className="wrapper">
        <Header></Header>
        <Showcase></Showcase>
        <Logos></Logos>
        <Features></Features>
        <About></About>
        <Services></Services>
        <WhyUs></WhyUs>
        <ProjectCase></ProjectCase>
        <OurTeam></OurTeam>
        <Testimonials></Testimonials>
        <ArticleNews></ArticleNews>
        <SignUp></SignUp>
        <Footer></Footer>
    </div>
  )
}

export default Home