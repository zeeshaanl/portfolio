import React from "react"
import Link from "gatsby-link";
import { Parallax, Background } from 'react-parallax';
import { Helmet } from "react-helmet";
import mainLogo from '../../static/img/background.jpeg';
import portfolioBackground from '../../static/img/portfolio-background.jpeg';
import './index.scss';

export default () => <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Welcome to Zeeshaan's Portfolio</title>
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Sunflower" />
    </Helmet>
    <Parallax
        bgImage={portfolioBackground}
        bgImageAlt=""
        strength={200}
    >
        <div className='c-intro-message'>
            Hi, I'm Zeeshaan, a fullstack developer based in Hamburg, Germany.
        </div>
    </Parallax>
    <div style={{ height: '100vh', textAlign: 'center' }}>
        <h1>Projects</h1>
        <Link to="/page-2/">Link</Link>
    </div>
</div>
