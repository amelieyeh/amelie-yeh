import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import avatar from '../../static/avatar.jpg';
import PostSection from '../components/Post/PostSection';

const About = () => (
  <div className="container about-container">
    <Helmet title={`About | ${config.siteTitle}`} />
    <Header>About Me</Header>
    <Container text>
      <div className="about">
        <div className="about__avatar">
          <img src={avatar} className="about__img"/>
        </div>
        <p>
          I am a experienced Front-end Designer and Web Developer who love prototyping things with designers and engineers, and keen to delivering good things to clients(friends).
        </p>
        <p>
          Recently, learning JavaScript, ReactJS and others to improve my front-end skills. Yes, I like Learning-by-Doing!
        </p>

        <PostSection />
        
        <section className="section__contact">
          <h3 className="about__title">Got cool ideas?</h3>
          <p>I'm currently available for select freelance work! Let's Work Together! You can find me on</p>
          
          <div className="about__contact">
            <div>
              <a href="https://medium.com/me/stories/public"
                 target="_blank"
                 className="link-icon link-icon__medium">
                <i className="fab fa-medium fa-5x"></i>
                <p>Medium</p>
              </a>
            </div>
            <div>
              <a href="https://codepen.io/amelieyeh/"
                 target="_blank"
                 className="link-icon link-icon__codepen">
                <i className="fab fa-codepen fa-5x"></i>
                <p>CodePen</p>
              </a>
            </div>
            <div>
              <a href="mailto:amelieyeh@gmail.com"
                 className="link-icon link-icon__email">
                <i className="fas fa-envelope-square fa-5x"></i>
                <p>Email</p>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/lichun-yeh"
                 target="_blank"
                 className="link-icon link-icon__linkedin">
                <i className="fab fa-linkedin fa-5x"></i>
                <p>LinkedIn</p>
              </a>
            </div>
            <div>
              <a href="https://github.com/amelieyeh"
                 target="_blank"
                 className="link-icon link-icon__github">
                <i className="fab fa-github-square fa-5x"></i>
                <p>Github</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Container>
    <Footer />
  </div>
);

export default About;
