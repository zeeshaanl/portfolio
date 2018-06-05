import React from "react"
import Link from "gatsby-link";
import { Parallax, Background } from 'react-parallax';
import { Helmet } from "react-helmet";
import { Element, scroller } from 'react-scroll'

import introPic from '../../static/img/lisbonCropped.png';
import aboutPic from '../../static/img/portfolio-background.jpeg';
import './index.scss';
import ChatAnswer from '../components/ChatAnswer';

export default () => <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Zeeshaan's Portfolio</title>lisbonCropped.png
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Open Sans" />
    </Helmet>
    <div className='c-intro'>
        <div className='c-intro__question'>
            <img className='c-intro__image' src={introPic} />
            <div className='c-intro-message-container'>
                <div className='c-intro__message'>
                    Hey!<br />
                    I'm Zeeshaan, a <strong>Fullstack Javascript Developer</strong> living in Hamburg, Germany.<br />
                    What would you like to know?
                </div>
                <ChatAnswer>
                    <span onClick={() => scroller.scrollTo('about', {
                        duration: 750,
                        delay: 50,
                        smooth: true
                    })}>
                        About
                    </span>
                </ChatAnswer>
                <ChatAnswer>
                    <span onClick={() => scroller.scrollTo('skills', {
                        duration: 750,
                        delay: 50,
                        smooth: true
                    })}>
                    Skills
                    </span>
                </ChatAnswer>
                <ChatAnswer>
                    <span onClick={() => scroller.scrollTo('projects', {
                        duration: 750,
                        delay: 50,
                        smooth: true
                    })}>
                    Projects
                    </span>
                </ChatAnswer>
                <ChatAnswer>
                    <span onClick={() => scroller.scrollTo('contact', {
                        duration: 750,
                        delay: 50,
                        smooth: true
                    })}>
                        Contact
                    </span>
                </ChatAnswer>
            </div>
        </div>
        <div>

        </div>
    </div>
    <Element name='about'>
        <Parallax
            blur={0}
            bgImage={aboutPic}
            bgImageAlt=""
            strength={200}
        >
            <div style={{ height: '100vh', textAlign: 'center' }}>
                <h1 className='c-header'>About</h1>
                <h2 className='c-about-message'>
                    I enjoy building products from top to bottom and testing the potential and viability of ideas.
                </h2>
            </div>
        </Parallax>
    </Element>
    <Element name='projects'>
        <div style={{ height: '100vh', textAlign: 'center' }}>
            <h1>Projects</h1>
            {/*<Link to="/page-2/">Link</Link>*/}
        </div>
    </Element>
    <Element name='skills'>
        <div style={{ height: '100vh', textAlign: 'center' }}>
            <h1>Skills</h1>
            {/*<Link to="/page-2/">Link</Link>*/}
        </div>
    </Element>
    <Element name='contact'>
        <div style={{ height: '100vh', textAlign: 'center' }}>
            <h1>Contact</h1>
            {/*<Link to="/page-2/">Link</Link>*/}
        </div>
    </Element>

</div>
