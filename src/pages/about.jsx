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
        
        <h3 className="about__title">Let's Work Together</h3>
        <p>I'm currently available for select freelance work! Got cool ideas? You can find me on:</p>
        
        <div className="about__contact">
          <div className="about__post">
            <div className="about__post__item">
              <a href="https://medium.com/me/stories/public" target="_blank">
                <i className="fab fa-medium"></i>
                <p className="link-hover-yellow">Medium</p>
              </a>
            </div>
            <div className="about__post__item">
              <a href="https://codepen.io/amelieyeh/" target="_blank">
                <i className="fab fa-codepen"></i>
                <p className="text__link">CodePen</p>
              </a>
            </div>
          </div>
          <div className="about__link">
            <ul>
              <li>
                <a href="mailto:amelieyeh@gmail.com" className="text__link">
                  <i className="fas fa-envelope-square"></i>
                  Email
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/lichun-yeh" target="_blank" className="text__link">
                  <i className="fab fa-linkedin"></i>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/amelieyeh" target="_blank" className="text__link">
                  <i className="fab fa-github-square"></i>
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
    <Footer />
  </div>
);

export default About;
