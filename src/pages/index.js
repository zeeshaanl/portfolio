import React from "react"
import Link from "gatsby-link";
import { Parallax, Background } from 'react-parallax';
import { Helmet } from "react-helmet";
import mainLogo from '../../static/img/background.jpeg';
import introPic from '../../static/img/intro-pic.jpg';
import aboutPic from '../../static/img/portfolio-background.jpeg';
import './index.scss';

export default () => <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Zeeshaan's Portfolio</title>
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Handlee" />
    </Helmet>
    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={introPic}
        bgImageAlt=""
        strength={200}
    >
        <div className='c-intro-message'>
            I'm Zeeshaan, a fullstack javascript developer based in Hamburg, Germany.
        </div>
    </Parallax>
    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={aboutPic}
        bgImageAlt=""
        strength={200}
    >
        <div style={{ height: '100vh', textAlign: 'center' }}>
            <h1 className='c-header'>About</h1>
            <h2 className='c-about-message'>
                I enjoy building MVPs from top to bottom and testing the potential and viability of ideas, with code that not only a mother could love.
            </h2>
        </div>
    </Parallax>
    <div style={{ height: '100vh', textAlign: 'center' }}>
        <h1>Projects</h1>
        <Link to="/page-2/">Link</Link>
    </div>
</div>
