import React from "react"
// import Link from "gatsby-link";
import { Parallax, Background } from 'react-parallax';
import { Element, scroller } from 'react-scroll'

import introPic from '../../static/img/lisbonCropped.png';
import './index.scss';
import ChatAnswer from '../components/ChatAnswer/ChatAnswer';
import Experience from '../components/Experience/Experience';
import Languages from '../components/Languages/Languages';
import ExtraCurriculars from '../components/ExtraCurriculars/ExtraCurriculars';
import Contact from '../components/Contact/Contact';
import Helmet from 'react-helmet';

export default () => <div>
    <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Zeeshaan's Portfolio</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    </Helmet>
    <div className='c-intro'>
        <div className='c-intro__question'>
            <img className='c-intro__image' src={introPic} />
            <div className='c-intro-message-container'>
                <div className='c-intro__message'>
                    Hey!<br />
                    I'm Zeeshaan, full stack developer specialising in Javascript projects and currently based in Hamburg, Germany.<br />
                </div>
                <div className='c-answer-bubble-container'>
                    <ChatAnswer className='c-answer-bubble' onClick={() => scrollerFunction('experience')}>
                        <span>
                            Experience
                        </span>
                    </ChatAnswer>
                    <ChatAnswer className='c-answer-bubble' onClick={() => scrollerFunction('languages')}>
                        <span>
                            Languages
                        </span>
                    </ChatAnswer>
                    <ChatAnswer className='c-answer-bubble' onClick={() => scrollerFunction('activities')}>
                        <span>
                            Activites
                        </span>
                    </ChatAnswer>
                    <ChatAnswer className='c-answer-bubble' onClick={() => scrollerFunction('socialMedia')}>
                        <span>
                            Social Media
                        </span>
                    </ChatAnswer>
                </div>
            </div>
        </div>
        <div>

        </div>
    </div>
    <Element name='experience'>
        <Experience />
    </Element>
    <Element name='languages'>
        <Languages />
    </Element>
    <Element name='activities'>
        <ExtraCurriculars />
    </Element>
    <Element name='socialMedia'>
        <Contact />
    </Element>
</div>

const scrollerFunction = componentName => {
    scroller.scrollTo(componentName, {
        duration: 700,
        delay: 10,
        smooth: true
    })
};
